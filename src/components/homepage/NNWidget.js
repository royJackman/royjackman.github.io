import React, {useState} from 'react';
import {Container, Col, Row, DropdownButton, Dropdown} from 'react-bootstrap';
import Slider from '@material-ui/core/Slider';
import NNGraph from './NNGraph';
import * as tf from '@tensorflow/tfjs';

function createModel(layers, width, activation, inputSize, outputSize) {
    const model = tf.sequential();
    model.add(tf.layers.dense({inputShape: [inputSize], units: width, activation: activation}));
    for (var i = 1; i < layers; i++) {
        model.add(tf.layers.dense({inputShape: [width], units: width, activation: activation}));
    }
    model.add(tf.layers.dense({inputShape: [width], units: outputSize, activation: activation}));
    model.compile({optimizer: 'sgd', loss: 'meanSquaredError'});
    return model;
}

function NNWidget() {
    const [layers, setLayers] = useState(3);
    const [width, setWidth] = useState(3);
    const [inputSize, setInputSize] = useState(2);
    const [outputSize, setOutputSize] = useState(1);
    const [acti, setActi] = useState("relu");
    const [actiName, setActiName] = useState("ReLU");

    const [neuralNetwork, setNeuralNetwork] = useState(createModel(layers, width, acti, inputSize, outputSize));
    const [weights, setWeights] = useState(neuralNetwork.getWeights());

    const rebuildModel = () => {
        setNeuralNetwork(createModel(layers, width, acti, inputSize, outputSize));
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
                        <h5>Layers</h5>
                        <Slider
                            step={1}
                            min={2}
                            max={8}
                            value={layers}
                            onChange={(_e, v) => {
                                setLayers(v);
                                rebuildModel();
                            }} />
                        <h5>Width</h5>
                        <Slider
                            step={1}
                            min={2}
                            max={8}
                            value={width}
                            onChange={(_e, v) => {
                                setWidth(v);
                                rebuildModel();
                            }} />
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
                            <Dropdown.Item as="button" value="exponential">Exponential</Dropdown.Item>
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