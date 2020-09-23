import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import NNGraph from '../ai/nn/NNGraph'
import { createModel, localNNSave } from '../ai/nn/NeuralNetworks'
import Slider from '@material-ui/core/Slider'
import '../ui/ui.css'
import DropButton from '../ui/DropButton'
import Switch from 'react-switch'
import rando from '@nastyox/rando.js'

const ACTIVATION_FUNCTIONS = [{ name: 'ReLU', value: 'relu' }, { name: 'Sigmoid', value: 'sigmoid' }, { name: 'Softmax', value: 'softmax' }, { name: 'Softplus', value: 'softplus' }, { name: 'Softsign', value: 'softsign' }, { name: 'Tanh', value: 'tanh' }, { name: 'SeLU', value: 'selu' }, { name: 'ELU', value: 'elu' }]
const LOSSES = [{ name: 'Hinge Loss', value: 'hinge' }, { name: 'Mean Squared Error', value: 'meanSquaredError' }]
const OPTIMIZERS = [{ name: 'Stochastic Gradient Descent', value: 'sgd' }, { name: 'Ada Grad', value: 'adagrad' }, { name: 'Ada Delta', value: 'adadelta' }, { name: 'Adam', value: 'adam' }, { name: 'Ada Max', value: 'adamax' }, { name: 'RMS Prop', value: 'rmsprop' }]
const PROBLEM_TYPES = [{ name: 'Regression (Continuous)', value: 'regression' }, { name: 'Classification (Discrete)', value: 'classification' }]

const COLORS = ['#e6194B', '#3cb44b', '#4363d8', '#f58231', '#911eb4', '#42d4f4', '#fabed4', '#469990', '#dcbeff', '#9A6324', '#fffac8', '#800000', '#aaffc3', '#808000', '#ffd8b1', '#000075', '#a9a9a9']

class NNWidget extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      activationFunction: ACTIVATION_FUNCTIONS[0],
      classes: Array.from({ length: 40 }, () => COLORS[rando.rando(1)]),
      depth: false,
      layerData: Array(3).fill(2),
      loss: LOSSES[0],
      optimizer: OPTIMIZERS[0],
      problemType: PROBLEM_TYPES[0],
      xData: Array.from({ length: 40 }, () => rando.rando(0, 10, 'float')),
      yData: Array.from({ length: 40 }, () => rando.rando(0, 10, 'float')),
      zData: Array.from({ length: 40 }, () => rando.rando(0, 10, 'float'))
    }

    const model = createModel(this.state.layerData, this.state.activationFunction.value, 1, 1, this.state.loss.value, this.state.optimizer.value)
    this.state.weights = model.getWeights()
    localNNSave(model, 'nn')
  }

  componentDidMount () {
    this.rebuildGraph()
  }

  componentDidUpdate (_prevProps, prevState) {
    if (prevState.depth !== this.state.depth ||
        prevState.problemType.value !== this.state.problemType.value ||
        prevState.classes !== this.state.classes) {
      this.rebuildGraph()
    }
    if (prevState.layerData !== this.state.layerData ||
        prevState.depth !== this.state.depth ||
        prevState.problemType !== this.state.problemType ||
        prevState.activationFunction !== this.state.activationFunction ||
        prevState.optimizer !== this.state.optimizer ||
        prevState.loss !== this.state.loss) {
      this.rebuildModel()
    }
  }

  rebuildGraph () {
    const data = {
      x: this.state.xData,
      y: this.state.yData,
      mode: 'markers'
    }
    if (this.state.depth) {
      data.type = 'scatter3d'
      data.z = this.state.zData
    } else {
      data.type = 'scatter'
    }
    if (this.state.problemType.value === 'classification') {
      data.marker = { color: this.state.classes }
    }
    import('../ui/Graphing').then(graphing => {
      graphing.MLGraph('data-graph', [data])
    })
  }

  rebuildModel () {
    const inputSize = this.state.problemType.value === 'regression' ? (this.state.depth ? 2 : 1) : (this.state.depth ? 3 : 2)
    const model = createModel(this.state.layerData, this.state.activationFunction.value, inputSize, 1, this.state.loss.value, this.state.optimizer.value)
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
                      this.setState({ layerData: newLD })
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
                onSelectHandler={(_ek, e) => this.setState({ activationFunction: { name: e.target.innerHTML, value: e.target.value } })} />
              <h5>Optimizer</h5>
              <DropButton
                id='optimizer'
                title={this.state.optimizer.name}
                items={OPTIMIZERS}
                onSelectHandler={(_ek, e) => this.setState({ optimizer: { name: e.target.innerHTML, value: e.target.value } })} />
              <h5>Loss</h5>
              <DropButton
                id='optimizer'
                title={this.state.loss.name}
                items={LOSSES}
                onSelectHandler={(_ek, e) => this.setState({ loss: { name: e.target.innerHTML, value: e.target.value } })} />
            </Col>
            <Col>
              <h3>Problem Specs</h3>
              <h5 disabled={this.state.problemType.value !== 'classification'}>
                Classes: <input
                  size={2}
                  type='number'
                  min={2}
                  max={10}
                  onChange={(e) => this.setState({ classes: Array.from({ length: 40 }, () => COLORS[rando.rando(e.target.value - 1)]) })}/>
              </h5>
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
