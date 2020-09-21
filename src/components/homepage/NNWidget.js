import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import NNGraph from '../ai/nn/NNGraph'
import { createModel, localNNSave } from '../ai/nn/NeuralNetworks'
import Slider from '@material-ui/core/Slider'
import '../ui/ui.css'
import DropButton from '../ui/DropButton'
import Switch from 'react-switch'

const ACTIVATION_FUNCTIONS = [{ name: 'ReLU', value: 'relu' }, { name: 'Sigmoid', value: 'sigmoid' }, { name: 'Softmax', value: 'softmax' }, { name: 'Softplus', value: 'softplus' }, { name: 'Softsign', value: 'softsign' }, { name: 'Tanh', value: 'tanh' }, { name: 'SeLU', value: 'selu' }, { name: 'ELU', value: 'elu' }]
const LOSSES = [{ name: 'Hinge Loss', value: 'hinge' }, { name: 'Mean Squared Error', value: 'meanSquaredError' }]
const OPTIMIZERS = [{ name: 'Stochastic Gradient Descent', value: 'sgd' }, { name: 'Ada Grad', value: 'adagrad' }, { name: 'Ada Delta', value: 'adadelta' }, { name: 'Adam', value: 'adam' }, { name: 'Ada Max', value: 'adamax' }, { name: 'RMS Prop', value: 'rmsprop' }]
const PROBLEM_TYPES = [{ name: 'Regression (Continuous)', value: 'regression' }, { name: 'Classification (Discrete)', value: 'classification' }]

class NNWidget extends React.Component {
  constructor (props) {
    super(props)

    const randojs = require('@nastyox/rando.js')
    const rando = randojs.rando

    this.state = {
      activationFunction: ACTIVATION_FUNCTIONS[0],
      depth: false,
      layerData: Array(3).fill(2),
      loss: LOSSES[0],
      optimizer: OPTIMIZERS[0],
      problemType: { name: 'Regression (Continuous)', value: 'regression' },
      xData: Array.from({ length: 40 }, () => rando(0, 10, 'float')),
      yData: Array.from({ length: 40 }, () => rando(0, 10, 'float')),
      zData: Array.from({ length: 40 }, () => rando(0, 10, 'float'))
    }

    const model = createModel(this.state.layerData, this.state.activationFunction.value, 1, 1, this.state.loss.value, this.state.optimizer.value)
    this.state.weights = model.getWeights()
    localNNSave(model, 'nn')
  }

  componentDidMount () {
    import('plotly.js-dist').then(Plotly => {
      Plotly.newPlot('data-graph',
        [{
          x: this.state.xData,
          y: this.state.yData,
          mode: 'markers',
          type: 'scatter'
        }],
        {
          margin: { t: 25, b: 25, l: 25, r: 25 },
          paper_bgcolor: 'rgba(0, 0, 0, 0)',
          plot_bgcolor: 'rgba(0, 0, 0, 0)',
          xaxis: { gridcolor: 'black' },
          yaxis: { gridcolor: 'black' }
        },
        { responsive: true }
      )
    })
  }

  rebuildModel () {
    const model = createModel(this.state.layerData, this.state.activationFunction.value, 1, 1, this.state.loss.value, this.state.optimizer.value)
    this.setState({ weights: model.getWeights() })
    localNNSave(model, 'nn')
  }

  render () {
    return (
      <Container>
        <Col>
          <Row style={{ height: '30vh' }} xs={1} md={2}>
            <Col>
              <div className='box-30v margin-auto' style={{ height: '30vh' }}>
                <NNGraph weights={this.state.weights} />
              </div>
            </Col>
            <Col>
              <div className='box-30v' id='data-graph' />
            </Col>
          </Row>
          <hr />
          <Row sm={1} md={2} lg={3}>
            <Col>
              <h3>Model Shape</h3>
              <h5>Hidden Layers: {this.state.layerData.length}</h5>
              <Slider
                step={1} min={1} max={5}
                marks={true}
                value={this.state.layerData.length}
                onChange={(_e, v) => {
                  const layers = this.state.layerData.length
                  if (v > layers) {
                    this.state.layerData.push(3)
                  } else if (v < layers) { this.state.layerData.pop() }
                  this.rebuildModel()
                }} />
              {this.state.layerData.map((val, i) => {
                return <span key={'s' + i}><h5 key={'l' + i}>Layer {i + 1} width: {val}</h5>
                  <Slider
                    id={i} key={i} step={1}
                    min={2} max={5}
                    marks={true}
                    value={val}
                    onChange={(_e, v) => {
                      const newLD = Object.assign([], this.state.layerData)
                      newLD[i] = v
                      this.setState({ layerData: newLD }, this.rebuildModel())
                    }} /></span>
              })}
            </Col>
            <Col>
              <h3>Learning Params</h3>
              <h5>Activation Function</h5>
              <DropButton
                id='activation-function'
                title={this.state.activationFunction.name}
                items={ACTIVATION_FUNCTIONS}
                onSelectHandler={(_ek, e) => this.setState({ activationFunction: { name: e.target.innerHTML, value: e.target.value } }, this.rebuildModel())} />
              <h5>Optimizer</h5>
              <DropButton
                id='optimizer'
                title={this.state.optimizer.name}
                items={OPTIMIZERS}
                onSelectHandler={(_ek, e) => this.setState({ optimizer: { name: e.target.innerHTML, value: e.target.value } }, this.rebuildModel())} />
              <h5>Loss</h5>
              <DropButton
                id='optimizer'
                title={this.state.loss.name}
                items={LOSSES}
                onSelectHandler={(_ek, e) => this.setState({ loss: { name: e.target.innerHTML, value: e.target.value } }, this.rebuildModel())} />
            </Col>
            <Col>
              <h3>Problem Specs</h3>
              <h5>2D <Switch
                onChange={(change) => this.setState({ depth: change })}
                checked={this.state.depth}
                checkedIcon={false} uncheckedIcon={false}
                onColor='#a3f025' offColor='#1212aa'
                height={16}
              /> 3D</h5>
              <h5>Problem Type</h5>
              <DropButton
                id='problem-type'
                title={this.state.problemType.name}
                items={PROBLEM_TYPES}
                onSelectHandler={(_ek, e) => this.setState({ problemType: { name: e.target.innerHTML, value: e.target.value } })} />
            </Col>
          </Row>
        </Col>
      </Container>
    )
  }
}

export default NNWidget
