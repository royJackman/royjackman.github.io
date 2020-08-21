import React, {useState} from 'react';
import {Accordion, Container, Col, Row, DropdownButton, Dropdown} from 'react-bootstrap';
import Slider from '@material-ui/core/Slider';
import NNGraph from './NNGraph';
import * as tf from '@tensorflow/tfjs';

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

function NNWidget() {
    const [layerData, setLayerData] = useState(Array(3).fill(3));
    const [inputSize, setInputSize] = useState(2);
    const [outputSize, setOutputSize] = useState(1);
    const [acti, setActi] = useState("relu");
    const [actiName, setActiName] = useState("ReLU");
    const [loss, setLoss] = useState("meanSquaredError");
    const [lossName, setLossName] = useState("Mean Squared Error");
    const [opti, setOpti] = useState("sgd");
    const [optiName, setOptiName] = useState("Stochastic Gradient Descent");

    const [neuralNetwork, setNeuralNetwork] = useState(createModel(layerData, acti, inputSize, outputSize, loss, opti));
    const [weights, setWeights] = useState(neuralNetwork.getWeights());

    const rebuildModel = () => {
        setNeuralNetwork(createModel(layerData, acti, inputSize, outputSize, loss, opti));
        setWeights(neuralNetwork.getWeights());
    };

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
                    <Col md="auto" style={{maxHeight: "75vh"}}>
                        <Accordion defaultActiveKey="0">
                            <Accordion.Toggle as={Row} eventKey="0">
                                <h3>Data Dimensions &#x290B;</h3>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="0">
                                <div>
                                    <br />
                                    <h5>Input Size: {inputSize}</h5>
                                    <Slider
                                        step={1}
                                        min={1}
                                        max={5}
                                        marks={true}
                                        value={inputSize}
                                        onChange={(_e, v) => {
                                            setInputSize(v);
                                            rebuildModel();
                                        }} />
                                    <h5>Output Size: {outputSize}</h5>
                                    <Slider
                                        step={1}
                                        min={1}
                                        max={5}
                                        marks={true}
                                        value={outputSize}
                                        onChange={(_e, v) => {
                                            setOutputSize(v);
                                            rebuildModel();
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
                                    <h5>Layers: {layerData.length}</h5>
                                    <Slider
                                        step={1}
                                        min={1}
                                        max={5}
                                        marks={true}
                                        value={layerData.length}
                                        onChange={(_e, v) => {
                                            let layers = layerData.length;
                                            if (v > layers) {
                                                layerData.push(3);
                                            } else if(v < layers) {
                                                layerData.pop();
                                            }
                                            rebuildModel();
                                        }} />
                                    {layerData.map((val, i) => {
                                        return <span key={"s"+i}><h5 key={"l"+i}>Layer {i+1} width: {val}</h5><Slider
                                            id={i}
                                            key={i}
                                            step={1}
                                            min={2}
                                            max={5}
                                            marks={true}
                                            value={val}
                                            onChange={(_e, v) => {
                                                let newLD = Object.assign([], layerData);
                                                newLD[i] = v;
                                                setLayerData(newLD);
                                                rebuildModel();
                                            }} /></span>
                                    })}
                                </div>
                            </Accordion.Collapse>
                        </Accordion>
                        <hr />
                        <h3>Learning Parameters</h3>
                        <br />
                        <h5>Activation Function</h5>
                        <DropdownButton 
                            id="acti" 
                            title={actiName}
                            onSelect={(_ek, e) => {
                                setActi(e.target.value);
                                setActiName(e.target.innerHTML);
                                rebuildModel();
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
                            title={optiName}
                            onSelect={(_ek, e) => {
                                setOpti(e.target.value);
                                setOptiName(e.target.innerHTML);
                                rebuildModel();
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
                            title={lossName}
                            onSelect={(_ek, e) => {
                                setLoss(e.target.value);
                                setLossName(e.target.innerHTML);
                                rebuildModel();
                            }}>
                            <Dropdown.Item as="button" value="hinge">Hinge Loss</Dropdown.Item>
                            <Dropdown.Item as="button" value="meanSquaredError">Mean Squared Error</Dropdown.Item>
                            <Dropdown.Item as="button" value="categoricalCrossentropy">Softmax Cross Entropy</Dropdown.Item>
                        </DropdownButton>
                    </Col>
                    <Col />
                    <Col md={8}>
                        <NNGraph weights={weights}/>
                    </Col>
                </Row>
            </Col>
        </Container>
    )
}

export default NNWidget;