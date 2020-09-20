import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import NNGraph from '../ai/nn/NNGraph'
import { createModel, localNNSave } from '../ai/nn/NeuralNetworks'
import '../ui/ui.css'

class NNWidget extends React.Component {
    constructor(props) {
        super(props)

        const randojs = require('@nastyox/rando.js'), rando = randojs.rando

        this.state = {
            xData: Array.from({length: 40}, () => rando(0, 40, 'float')),
            yData: Array.from({length: 40}, () => rando(0, 40, 'float'))
        }

        const model = createModel(Array(2).fill(2), 'relu', 1,  1, 'meanSquaredError', 'sgd')
        this.state.weights = model.getWeights()
        localNNSave(model, 'nn')
    }
    
    componentDidMount() {
        import('plotly.js-dist').then(Plotly => {
        Plotly.newPlot('data-graph', 
        [{
            x: this.state.xData,
            y: this.state.yData,
            mode: 'markers',
            type: 'scatter'
        }],
        {
            margin: { t: 20, b: 20, l: 20, r: 20 },
            paper_bgcolor: 'rgba(0, 0, 0, 0)',
            plot_bgcolor: 'rgba(0, 0, 0, 0)',
            xaxis: { gridcolor: 'black' },
            yaxis: { gridcolor: 'black' }
        },
        { responsive: true }
        )
    })
    }

    render () {
        return (
            <Container>
                <Col>
                    <Row style={{ minHeight: '30vh', maxHeight: '30vh' }} xs={1} md={2}>
                        <Col>
                            <div className='box-30v margin-auto' style={{ height: '30vh', float: 'right' }}>
                                <NNGraph weights={this.state.weights} />
                            </div>
                        </Col>
                        <Col>
                            <div className='box-30v margin-auto' id='data-graph' style={{ float: 'left' }} />
                        </Col>
                    </Row>
                </Col>
            </Container>
        )
    }
}

export default NNWidget