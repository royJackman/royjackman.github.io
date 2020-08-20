import React, {useState} from 'react';
import {Container, Col, Row, DropdownButton, Dropdown} from 'react-bootstrap';
import Slider from '@material-ui/core/Slider';
import NNGraph from './NNGraph';
import * as tf from '@tensorflow/tfjs';

function createModel(layerData, activation, inputSize, outputSize) {
    const model = tf.sequential();
    model.add(tf.layers.dense({inputShape: [inputSize], units: layerData[0], activation: activation}));
    for (var i = 0; i < layerData.length - 1; i++) {
        model.add(tf.layers.dense({inputShape: [layerData[i]], units: layerData[i+1], activation: activation}));
    }
    model.add(tf.layers.dense({inputShape: [layerData[layerData.length - 1]], units: outputSize, activation: activation}));
    model.compile({optimizer: 'sgd', loss: 'meanSquaredError'});
    return model;
}

function NNWidget() {
    const [layerData, setLayerData] = useState(Array(3).fill(3));
    const [inputSize, setInputSize] = useState(2);
    const [outputSize, setOutputSize] = useState(1);
    const [acti, setActi] = useState("relu");
    const [actiName, setActiName] = useState("ReLU");

    const [neuralNetwork, setNeuralNetwork] = useState(createModel(layerData, acti, inputSize, outputSize));
    const [weights, setWeights] = useState(neuralNetwork.getWeights());

    const rebuildModel = () => {
        setNeuralNetwork(createModel(layerData, acti, inputSize, outputSize));
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
                    <Col md="auto">
                        <h5>Input Size</h5>
                        <Slider
                            step={1}
                            min={1}
                            max={6}
                            marks={true}
                            value={inputSize}
                            onChange={(_e, v) => {
                                setInputSize(v);
                                rebuildModel();
                            }} />
                        <h5>Output Size</h5>
                        <Slider
                            step={1}
                            min={1}
                            max={6}
                            marks={true}
                            value={outputSize}
                            onChange={(_e, v) => {
                                setOutputSize(v);
                                rebuildModel();
                            }} />
                        <hr />
                        <h5>Hidden Layers</h5>
                        <Slider
                            step={1}
                            min={1}
                            max={6}
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
                        <h5>Layer Width</h5>
                        {layerData.map((val, i) => {
                            return <span key={"s"+i}><h5 key={"l"+i}>Layer {i+1}</h5><Slider
                                id={i}
                                key={i}
                                step={1}
                                min={2}
                                max={6}
                                marks={true}
                                value={layerData[i]}
                                onChange={(_e, v) => {
                                    let newLD = Object.assign([], layerData);
                                    newLD[i] = v;
                                    setLayerData(newLD);
                                    rebuildModel();
                                }} /></span>
                        })}
                        <hr />
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