import React from 'react'
import { Accordion, Container, Col, Row, DropdownButton, Dropdown, Button, Image } from 'react-bootstrap'
import Slider from '@material-ui/core/Slider'
import NNGraph from './NNGraph'
import * as tf from '@tensorflow/tfjs'
import { Spring } from 'react-spring/renderprops'
import * as math from 'mathjs'
import * as _ from 'lodash'
import { createModel } from '../ai/NeuralNetworks'
import { scrubData } from '../ai/util'

const PLAY_BUTTON = 'm 35 50 l 0 -27 l 15 9 l 15 9 l 15 9 m 0 0 l -15 9 l -15 9 l -15 9 l 0 -27 z'
const STOP_BUTTON = 'm 26 74 l 0 -48 l 16 0 l 0 48 l -16 0 m 32 -48 l 16 0 l 0 48 l -16 0 l 0 -48 z'

const DEFAULT_VARIABLES = ['x', 'y', 'z', 'w', 't']
const DEFAULT_FUNCNAMES = ['f', 'g', 'h', 'p', 'q']

class NNWidget extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      acti: 'relu',
      actiName: 'ReLU',
      loss: 'meanSquaredError',
      lossName: 'Mean Squared Error',
      opti: 'sgd',
      optiName: 'Stochastic Gradient Descent',
      inputSize: 2,
      outputSize: 1,
      layerData: Array(3).fill(3),
      playing: false,
      data: [],
      dataLoading: false,
      vars: ['x', 'y'],
      ranges: [[-10, 10], [-10, 10]],
      numPoints: 100,
      funcs: [math.parse('x+y')],
      funcNames: ['f'],
      epochs: 50,
      modelEpochs: 0,
      currentLoss: 1.00
    }

    const model = createModel(this.state.layerData, this.state.acti, this.state.inputSize, this.state.outputSize, this.state.loss, this.state.opti)
    this.state.weights = model.getWeights()
    this.localNNSave(model, 'nn')
  }

  async generateData () {
    var retval = []
    const illegal = []

    const rangeRandom = (i) => {
      const rng = this.state.ranges[i][1] - this.state.ranges[i][0]
      return this.state.ranges[i][0] + Math.random() * rng
    }

    for (var i = 0; i < this.state.numPoints; i++) {
      var temp = {}
      for (var j = 0; j < this.state.inputSize; j++) {
        temp[this.state.vars[j]] = rangeRandom(j)
      }
      for (j = 0; j < this.state.outputSize; j++) {
        try {
          temp['_' + j] = this.state.funcs[j].evaluate(temp)
        } catch (_) {
          if (!illegal.includes(j + 1)) { illegal.push(j + 1) };
        }
      }
      retval.push(_.cloneDeep(temp))
    }
    if (illegal.length > 0) {
      alert('The following functions are using illegal values! ' + illegal)
    }
    return retval
  }

  generateGraphs () {
    if (this.state.data.length === 0) {
      document.getElementById(this.state.vars[0] + '_graph').innerHTML = <h2>Generate some data!</h2>
    }

    var dataT = {}
    var output = []

    this.state.vars.forEach((v) => { dataT[v] = [] })
    this.state.funcNames.forEach(() => output.push([]))
    this.state.data.forEach((val) => {
      for (var i = 0; i < this.state.inputSize; i++) {
        dataT[this.state.vars[i]].push(_.cloneDeep(val[this.state.vars[i]]))
      }
      for (i = 0; i < this.state.outputSize; i++) {
        output[i].push(val['_' + i])
      }
    })

    import('../ui/Graphing').then(Graphing => {
      this.state.vars.forEach((v) => {
        for (var i = 0; i < this.state.outputSize; i++) {
          const elemId = v + '-' + this.state.funcNames[i] + '-graph'
          document.getElementById(elemId).innerHTML = ''
          Graphing.Scatterplot(elemId, output[i], dataT[v], v, this.state.funcNames[i])
        }
      })
    })
  }

  async localNNLoad (url) {
    return await tf.loadLayersModel('localstorage://' + url)
  }

  async localNNSave (model, url) {
    return await model.save('localstorage://' + url)
  }

  rebuildFunc (func, i) {
    const newFuncs = Object.assign([], this.state.funcs)
    newFuncs[i] = math.parse(func)
    this.setState({ funcs: newFuncs })
  }

  rebuildModel () {
    const model = createModel(this.state.layerData, this.state.acti, this.state.inputSize, this.state.outputSize, this.state.loss, this.state.opti)
    this.setState({ weights: model.getWeights(), modelEpochs: 0 })
    this.localNNSave(model, 'nn')
  }

  async startLearning () {
    const { inputs, outputs } = scrubData(_.cloneDeep(this.state.data), this.state.vars, this.state.outputSize)
    let model
    try {
      model = await this.localNNLoad('nn')
      model.compile({ optimizer: this.state.opti, loss: this.state.loss })
    } catch (_) {
      model = createModel(this.state.layerData, this.state.acti, this.state.inputSize, this.state.outputSize, this.state.loss, this.state.opti)
    }
    const onEpochEnd = (_epoch, logs) => {
      this.setState({ weights: model.getWeights(), currentLoss: logs.loss, modelEpochs: this.state.modelEpochs + 1 })
    }
    await model.fit(
      inputs,
      outputs,
      {
        shuffle: true,
        callbacks: { onEpochEnd },
        epochs: this.state.epochs
      }
    ).then(() => this.setState({ playing: false }, () => {
      this.localNNSave(model, 'nn')
    }))
  }

  timedLearning (epochs) { this.setState({ epochs }, () => this.togglePlay()) }

  togglePlay () { this.setState({ playing: !this.state.playing }, () => this.startLearning()) }

  render () {
    return (
      <Container style={{
        backgroundColor: '#f8e297',
        border: 'thick solid',
        borderRadius: '8px',
        borderColor: '#f8d197',
        padding: '15px'
      }}>
        <Col>
          <Row style={{ minHeight: '50vh' }}>
            <Col md={3}>
              <Accordion defaultActiveKey="0">
                <Accordion.Toggle as={Row} eventKey="0">
                  <h3>Data Shape &#x290B;</h3>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <div>
                    <br />
                    <h5>Input Size: {this.state.inputSize}</h5>
                    <Slider
                      step={1}
                      min={1}
                      max={5}
                      marks={true}
                      value={this.state.inputSize}
                      onChange={(_e, v) => {
                        this.setState({ inputSize: v }, this.rebuildModel())
                        if (this.state.vars.length < v) {
                          this.state.vars.push(DEFAULT_VARIABLES[v - 1])
                          this.state.ranges.push([-10, 10])
                        } else if (this.state.vars.length > v) {
                          this.state.vars.pop()
                          this.state.ranges.pop()
                        }
                      }} />
                    <h5>Output Size: {this.state.outputSize}</h5>
                    <Slider
                      step={1}
                      min={1}
                      max={5}
                      marks={true}
                      value={this.state.outputSize}
                      onChange={(_e, v) => {
                        this.setState({ outputSize: v }, this.rebuildModel())
                        if (this.state.funcs.length < v) {
                          this.state.funcs.push(
                            math.parse(this.state.vars.join(['+', '-', '*'][Math.floor(Math.random() * 3)])))
                          this.state.funcNames.push(DEFAULT_FUNCNAMES[v - 1])
                        } else if (this.state.funcs.length > v) {
                          this.state.funcs.pop()
                          this.state.funcNames.pop()
                        }
                      }} />
                  </div>
                </Accordion.Collapse>
              </Accordion>
              <hr />
              <Accordion defaultActiveKey="0">
                <Accordion.Toggle as={Row} eventKey="0">
                  <h3>Hidden Layers &#x290B;</h3>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <div>
                    <br />
                    <h5>Layers: {this.state.layerData.length}</h5>
                    <Slider
                      step={1}
                      min={1}
                      max={5}
                      marks={true}
                      value={this.state.layerData.length}
                      onChange={(_e, v) => {
                        const layers = this.state.layerData.length
                        if (v > layers) {
                          this.state.layerData.push(3)
                        } else if (v < layers) {
                          this.state.layerData.pop()
                        }
                        this.rebuildModel()
                      }} />
                    {this.state.layerData.map((val, i) => {
                      return <span key={'s' + i}><h5 key={'l' + i}>Layer {i + 1} width: {val}</h5><Slider
                        id={i}
                        key={i}
                        step={1}
                        min={2}
                        max={5}
                        marks={true}
                        value={val}
                        onChange={(_e, v) => {
                          const newLD = Object.assign([], this.state.layerData)
                          newLD[i] = v
                          this.setState({ layerData: newLD }, this.rebuildModel())
                        }} /></span>
                    })}
                  </div>
                </Accordion.Collapse>
              </Accordion>
              <hr />
              <h3>Parameters</h3>
              <br />
              <h5>Activation Function</h5>
              <DropdownButton
                id="acti"
                title={this.state.actiName}
                onSelect={(_ek, e) => {
                  this.setState({ acti: e.target.value, actiName: e.target.innerHTML }, this.rebuildModel())
                }}>
                <Dropdown.Item as="button" value="relu">ReLU</Dropdown.Item>
                <Dropdown.Item as="button" value="sigmoid">Sigmoid</Dropdown.Item>
                <Dropdown.Item as="button" value="softmax">SoftMax</Dropdown.Item>
                <Dropdown.Item as="button" value="softplus">Softplus</Dropdown.Item>
                <Dropdown.Item as="button" value="softsign">Softsign</Dropdown.Item>
                <Dropdown.Item as="button" value="tanh">Tanh</Dropdown.Item>
                <Dropdown.Item as="button" value="selu">SeLU</Dropdown.Item>
                <Dropdown.Item as="button" value="elu">ELU</Dropdown.Item>
              </DropdownButton>
              <h5>Optimizer</h5>
              <DropdownButton
                id="opti"
                title={this.state.optiName}
                onSelect={(_ek, e) => {
                  this.setState({ opti: e.target.value, optiName: e.target.innerHTML }, this.rebuildModel())
                }}>
                <Dropdown.Item as="button" value="sgd">Stochastic Gradient Descent</Dropdown.Item>
                <Dropdown.Item as="button" value="adagrad">Ada Grad</Dropdown.Item>
                <Dropdown.Item as="button" value="adadelta">Ada Delta</Dropdown.Item>
                <Dropdown.Item as="button" value="adam">Adam</Dropdown.Item>
                <Dropdown.Item as="button" value="adamax">Ada Max</Dropdown.Item>
                <Dropdown.Item as="button" value="rmsprop">RMS prop</Dropdown.Item>
              </DropdownButton>
              <h5>Loss</h5>
              <DropdownButton
                id="loss"
                title={this.state.lossName}
                onSelect={(_ek, e) => {
                  this.setState({ loss: e.target.value, lossName: e.target.innerHTML }, this.rebuildModel())
                }}>
                <Dropdown.Item as="button" value="hinge">Hinge Loss</Dropdown.Item>
                <Dropdown.Item as="button" value="meanSquaredError">Mean Squared Error</Dropdown.Item>
              </DropdownButton>
            </Col>
            <Col md={8} className="center-column">
              <Row>
                <Col>
                  <h1 style={{ fontFamily: 'courier' }}><strong>The Neural Network Widget</strong></h1>
                  <h4><strong>Machine Learning, <span style={{ fontStyle: 'oblique' }}>while you wait!</span></strong></h4>
                </Col>
                <Col>
                  <Image src='https://openclipart.org/download/250498/Neural-Network-2.svg' style={{
                    maxWidth: '15vw',
                    maxHeight: '15vh'
                  }}/>
                </Col>
              </Row>
              <Col md={10} className="center-column">
                <NNGraph weights={this.state.weights}/>
              </Col>
              <Row>
                {[10, 50, 100].map((val, i) => {
                  const epochsToRadius = (epochs) => 28 + 0.14 * epochs
                  return (<Col key={val + '_col'}>
                    <svg
                      key={val + '_svg'}
                      viewBox="0 0 100 100"
                      style={{ maxHeight: '10vh', maxWidth: '10vh' }}
                      onClick={() => this.state.data.length > 0 ? this.timedLearning(val) : alert('No data generated!')}>
                      <circle key={val + '_circle'} fill='#f8d197' cx="50" cy="50" r={epochsToRadius(val)} stroke="black"/>
                      <text key={val + '_text'} x="50" y="55" textAnchor="middle" color="black">{val}x</text>
                    </svg>
                  </Col>)
                })}
                <Col style={{ textAlign: 'center' }}>
                  <Spring
                    from={{ color: '#03C04A' }}
                    to={{
                      shape: this.state.playing ? STOP_BUTTON : PLAY_BUTTON,
                      color: this.state.playing ? '#D21404' : '#03C04A'
                    }}>
                    {({ shape, color }) => {
                      return (<svg
                        viewBox="0 0 100 100"
                        style={{ maxHeight: '10vh', maxWidth: '10vh' }}
                        onClick={() => this.state.data.length > 0 ? this.togglePlay() : alert('No data generated!')}>
                        <circle fill={color} cx="50" cy="50" r="50"/>
                        <g>
                          <path fill="white" d={shape} />
                        </g>
                      </svg>)
                    }}
                  </Spring>
                </Col>
                <Col>
                  <h4>Loss: <br/>{this.state.currentLoss.toFixed(6)} <br/>Epochs:<br/>{this.state.modelEpochs}</h4> <Button onClick={() => this.setState({ modelEpochs: 0 }, () => localStorage.clear())}> Hard Reset </Button>
                </Col>
              </Row>
              <Row className="center-column" style={{ margin: '15px' }}>
                <Col>
                  <Row>
                    <Col style={{ marginRight: '15px' }}>
                      {Array(this.state.inputSize).fill(0).map((_, i) => {
                        return (<Row key={'var' + i}>
                          <h5>Var {i + 1}:</h5>
                          <input
                            key={i}
                            type="text"
                            size="3"
                            className="text-input"
                            defaultValue={this.state.vars[i]}
                            onChange={(e) => {
                              const newVars = Object.assign([], this.state.vars)
                              newVars[i] = e.target.value
                              this.setState({ vars: newVars })
                            }}/>
                          <Slider
                            step={1}
                            min={-100}
                            max={100}
                            value={this.state.ranges[i] ? this.state.ranges[i] : [-10, 10]}
                            valueLabelDisplay="auto"
                            onChange={(_e, v) => {
                              const newRanges = Object.assign([], this.state.ranges)
                              newRanges[i] = v
                              this.setState({ ranges: newRanges })
                            }} />
                        </Row>)
                      })}
                    </Col>
                    <Col>
                      {Array(this.state.outputSize).fill(0).map((_, i) => {
                        return (<Row key={'var' + i}><Col>
                          <Row>
                            <h5>Function {i + 1} Name:</h5>
                            <input
                              key={'funcName-' + i}
                              type="text"
                              className="text-input"
                              defaultValue={this.state.funcNames[i]}
                              onChange={(e) => {
                                const newFuncNames = Object.assign([], this.state.funcNames)
                                newFuncNames[i] = e.target.value
                                this.setState({ funcNames: newFuncNames })
                              }}/>
                          </Row>
                          <Row>
                            <h5>{this.state.funcNames[i]}({this.state.vars.join(',')})=</h5>
                            <input
                              key={'func-' + i}
                              type="text"
                              className="text-input"
                              defaultValue={this.state.funcs[i]}
                              onBlur={(e) => {
                                this.rebuildFunc(e.target.value, i)
                              }}/>
                          </Row>
                        </Col></Row>)
                      })}
                    </Col>
                  </Row>
                  <Row>
                    <h5>Points:</h5>
                    <input
                      min={0}
                      max={10000}
                      type="number"
                      className="text-input"
                      defaultValue={this.state.numPoints}
                      onChange={(e) => this.setState({ numPoints: e.target.value })} />
                    <h5>Epochs:</h5>
                    <input
                      min={0}
                      max={1000}
                      type="number"
                      className="text-input"
                      defaultValue={this.state.epochs}
                      onChange={(e) => this.setState({ epochs: e.target.value })} />
                  </Row>
                  <Row className="center-column">
                    <Button style={{ margin: '15px' }} onClick={() => {
                      this.setState({ dataLoading: true })
                      this.generateData().then((retval) => {
                        this.setState({ data: retval, dataLoading: false }, () => this.generateGraphs())
                      })
                    }}>Generate Data</Button>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col className="center-column">
              {this.state.vars.map((val) => {
                return (<div style={{ alignContent: 'center' }} key={'row_' + val}>
                  {this.state.funcNames.map((v) => {
                    return (
                      <div
                        id={val + '-' + v + '-graph'}
                        key={val + '-' + v + '-graph'}
                        style={{
                          border: '8px',
                          borderRadius: '5px'
                        }}></div>
                    )
                  })}
                </div>)
              })}
            </Col>
          </Row>
        </Col>
      </Container>
    )
  }
}

export default NNWidget
