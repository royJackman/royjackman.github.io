import React, {useState} from 'react';
import {Container, Col, Row, DropdownButton, Dropdown} from 'react-bootstrap';
import Slider from '@material-ui/core/Slider';
import {ResponsiveSankey} from '@nivo/sankey';

const generateData = (layers, width) => {
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
    const [actiName, setActiName] = useState("ReLU");

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
                        <DropdownButton 
                            id="acti" 
                            title={actiName}
                            onSelect={(_ek, e) => {
                                setActi(e.target.value);
                                setActiName(e.target.innerHTML);
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