import React from 'react';
import {Accordion, Container, Col, Row, DropdownButton, Dropdown} from 'react-bootstrap';
import Slider from '@material-ui/core/Slider';
import NNGraph from './NNGraph';
import * as tf from '@tensorflow/tfjs';
import {Spring} from 'react-spring/renderprops';

const PLAY_BUTTON = 'm 35 50 l 0 -27 l 15 9 l 15 9 l 15 9 m 0 0 l -15 9 l -15 9 l -15 9 l 0 -27 z';
const STOP_BUTTON = 'm 26 26 l 0 48 l 16 0 l 0 -48 l -16 0 M 32 0 l 16 0 l 0 48 l -16 0 l 0 -48 z';

function createModel(layerData, activation, inputSize, outputSize, loss, optimizer) {
    const model = tf.sequential();
    model.add(tf.layers.dense({inputShape: [inputSize], units: layerData[0], activation: activation}));
    for (var i = 0; i < layerData.length - 1; i++) {
        model.add(tf.layers.dense({inputShape: [layerData[i]], units: layerData[i+1], activation: activation}));
    }
    model.add(tf.layers.dense({inputShape: [layerData[layerData.length - 1]], units: outputSize, activation: activation}));
    model.compile({optimizer: optimizer, loss: loss});
    return model;
}

class NNWidget extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            acti: "relu",
            actiName: "ReLU",
            loss: "meanSquaredError",
            lossName: "Mean Squared Error",
            opti: "sgd",
            optiName: "Stochastic Gradient Descent",
            inputSize: 2,
            outputSize: 1,
            layerData: Array(3).fill(3),
            playing: false
        }

        this.state.neuralNetwork = createModel(this.state.layerData, this.state.acti, this.state.inputSize, this.state.outputSize, this.state.loss, this.state.opti);
        this.state.weights = this.state.neuralNetwork.getWeights();
    }

    rebuildModel() {
        this.setState({neuralNetwork: createModel(this.state.layerData, this.state.acti, this.state.inputSize, this.state.outputSize, this.state.loss, this.state.opti)});
        this.setState({weights: this.state.neuralNetwork.getWeights()});
    }

    togglePlay() { this.setState({ playing: !this.state.playing }) }

    render() {
        return (
            <Container style={{
                backgroundColor: "#f8e297", 
                border: "thick solid",
                borderRadius: "8px", 
                borderColor: "#f8d197",
                padding: "15px"
            }}>
                <Col>
                    <Row style={{minHeight: "50vh"}}>
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
                                                this.setState({inputSize: v});
                                                this.rebuildModel();
                                            }} />
                                        <h5>Output Size: {this.state.outputSize}</h5>
                                        <Slider
                                            step={1}
                                            min={1}
                                            max={5}
                                            marks={true}
                                            value={this.state.outputSize}
                                            onChange={(_e, v) => {
                                                this.setState({outputSize: v});
                                                this.rebuildModel();
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
                                                let layers = this.state.layerData.length;
                                                if (v > layers) {
                                                    this.state.layerData.push(3);
                                                } else if(v < layers) {
                                                    this.state.layerData.pop();
                                                }
                                                this.rebuildModel();
                                            }} />
                                        {this.state.layerData.map((val, i) => {
                                            return <span key={"s"+i}><h5 key={"l"+i}>Layer {i+1} width: {val}</h5><Slider
                                                id={i}
                                                key={i}
                                                step={1}
                                                min={2}
                                                max={5}
                                                marks={true}
                                                value={val}
                                                onChange={(_e, v) => {
                                                    let newLD = Object.assign([], this.state.layerData);
                                                    newLD[i] = v;
                                                    this.setState({layerData: newLD});
                                                    this.rebuildModel();
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
                                    this.setState({acti: e.target.value, actiName: e.target.innerHTML});
                                    this.rebuildModel();
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
                                    this.setState({opti: e.target.value, optiName: e.target.innerHTML})
                                    this.rebuildModel();
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
                                    this.setState({loss: e.target.value, lossName: e.target.innerHTML});
                                    this.rebuildModel();
                                }}>
                                <Dropdown.Item as="button" value="hinge">Hinge Loss</Dropdown.Item>
                                <Dropdown.Item as="button" value="meanSquaredError">Mean Squared Error</Dropdown.Item>
                                <Dropdown.Item as="button" value="categoricalCrossentropy">Softmax Cross Entropy</Dropdown.Item>
                            </DropdownButton>
                        </Col>
                        <Col md={8} className="center-column">
                            <NNGraph weights={this.state.weights}/>
                            <Row>
                                <Col className="center-column">
                                    <Spring
                                        from={{ color: "#03C04A" }}
                                        to={{
                                            shape: this.state.playing ? STOP_BUTTON : PLAY_BUTTON,
                                            color: this.state.playing ? "#D21404" : "#03C04A"
                                        }}>
                                            {({shape, color}) => {
                                                return (<svg 
                                                    viewBox="0 0 100 100" 
                                                    style={{maxHeight: "10vh"}} 
                                                    onClick={() => this.togglePlay()}>
                                                    <circle fill={color} cx="50" cy="50" r="50"/>
                                                    <g>
                                                        <path fill="white" d={shape} />
                                                    </g>
                                                </svg>);
                                            }}
                                        </Spring>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Container>
        )
    }
}

export default NNWidget;