import React, {useState} from 'react';
import {Container, Col, Row} from 'react-bootstrap';
import Slider from '@material-ui/core/Slider';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import {ResponsiveSankey} from '@nivo/sankey';

const generateData = (layers, width) => {
    console.log(layers, width);
    var data = { "nodes": [], "links": [] };
    var randomColor = require('randomcolor');
    for (var i = 0; i < layers; i++) {
        for (var j = 0; j < width; j++) {
            var tempName = "node-" + i + "-" + j;
            data.nodes.push({
                id: tempName,
                color: randomColor()
            });
            if (i !== layers-1) {
                for (var k=0; k < width; k++) {
                    data.links.push({
                        source: tempName,
                        target: "node-" + (i+1) + "-" + k,
                        value: 1
                    });
                }
            }
        }
    }
    return data;
}

function NNWidget() {
    const [layers, setLayers] = useState(3);
    const [width, setWidth] = useState(5);
    const [acti, setActi] = useState("relu");

    const [data, setData] = useState(generateData(layers, width));

    return (
        <Container style={{
            backgroundColor: "#f8e297", 
            border: "thick solid",
            borderRadius: "8px", 
            borderColor: "#f8d197",
            padding: "15px"
        }}>
            <Col fluid="md">
                <Row>
                    <Col md="auto">
                        <h5>Layers</h5>
                        <Slider
                            step={1}
                            min={1}
                            max={8}
                            value={layers}
                            onChange={(_e, v) => {
                                setLayers(v);
                                setData(generateData(layers, width));
                            }} />
                        <h5>Width</h5>
                        <Slider
                            step={1}
                            min={1}
                            max={8}
                            value={width}
                            onChange={(_e, v) => {
                                setWidth(v);
                                setData(generateData(layers, width));
                            }} />
                        <h5>Activation Function</h5>
                        <FormControl>
                            <RadioGroup 
                                value={acti} 
                                onChange={(e) => setActi(e.target.value)}
                                style={{margin: "0px"}}>
                                <FormControlLabel control={<Radio />} value="relu" label="ReLU" defaultChecked/>
                                <FormControlLabel control={<Radio />} value="sigmoid" label="Sigmoid" />
                                <FormControlLabel control={<Radio />} value="softmax" label="SoftMax" />
                                <FormControlLabel control={<Radio />} value="softplus" label="Softplus" />
                                <FormControlLabel control={<Radio />} value="softsign" label="Softsign" />
                                <FormControlLabel control={<Radio />} value="tanh" label="Tanh" />
                                <FormControlLabel control={<Radio />} value="selu" label="SeLU" />
                                <FormControlLabel control={<Radio />} value="elu" label="ELU" />
                                <FormControlLabel control={<Radio />} value="exponential" label="Exponential" />
                            </RadioGroup>
                        </FormControl>
                    </Col>
                    <Col />
                    <Col md={8}>
                        <ResponsiveSankey
                            data={data}
                            align="justify"
                            colors={{ scheme: 'red_blue' }}
                            nodeOpacity={1}
                            nodeThickness={18}
                            nodeInnerPadding={3}
                            nodeSpacing={24}
                            nodeBorderWidth={0}
                            nodeBorderColor={{ from: 'color', modifiers: [ [ 'darker', 0.8 ] ] }}
                            linkOpacity={0.5}
                            linkHoverOthersOpacity={0.1}
                            enableLinkGradient={true}
                            labelPosition="inside"
                            labelOrientation="vertical"
                            labelPadding={16}
                            labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 1 ] ] }}
                            animate={false}
                            motionStiffness={140}
                            motionDamping={13}
                        />
                    </Col>
                </Row>
            </Col>
        </Container>
    )
}

export default NNWidget;