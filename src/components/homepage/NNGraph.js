import React from 'react';
import * as d3 from 'd3';

function bezierLink(x0, y0, x1, y1, width) {
    var path = d3.path();
    const midX = (x0 + x1)/2;
    path.moveTo(x0, y0);
    path.bezierCurveTo(midX, y0, midX, y1, x1, y1);
    return (<path 
                d={path.toString()}
                id={[x0,y0,x1,y1].join("_")}
                key={[x0,y0,x1,y1].join("_")}
                fill="none"
                strokeWidth={width * 3}
                stroke="red" />);
}

function NNGraph(weightResponse) {
    const weights = weightResponse.weights;
    const layers = weights.length / 2;

    const circlePosn = (index, infoLayers) => (index + 0.5) * 240/infoLayers;

    var circles = [];
    var lines = [];

    const layerWidth = weights[0].shape[0];
    const cx = circlePosn(0, layers + 1);
    for (var i = 0; i < layerWidth; i++) {circles.push(<circle 
        id={"node_0_" + i} 
        key={"node_0_" + i} 
        cx={cx} 
        cy={circlePosn(i, layerWidth)} 
        r={9} />)
    }

    for (var i = 0; i < layers; i++) {
        const layerWidth = weights[i * 2].shape[1];
        const cx = circlePosn((i+1), layers + 1);
        for (var j = 0; j < layerWidth; j++) {
            circles.push(<circle 
                id={"bias_" + (i+1) + "_" + j} 
                key={"bias_" + (i+1) + "_" + j} 
                cx={cx} 
                cy={circlePosn(j, layerWidth) + 13} 
                r={7}
                fill="gray" />)
            circles.push(<circle 
                id={"node_" + (i+1) + "_" + j} 
                key={"node_" + (i+1) + "_" + j} 
                cx={cx} 
                cy={circlePosn(j, layerWidth)} 
                r={9} />)
        }
    }
    const getNode = (nodeKey) => circles.filter((val) => nodeKey.localeCompare(val.key) === 0)[0];

    for (var i = 0; i < layers; i++) {
        const layerWidth = weights[i * 2].shape[1];
        const layerWeights = weights[i * 2].arraySync();
        const biasWeights = weights[i * 2 + 1].arraySync();

        for (var j = 0; j < layerWidth; j++) {
            const dest = getNode("node_"+(i+1)+"_"+j)
            const [x1, y1] = [dest.props.cx, dest.props.cy];
            for (var k = 0; k < weights[i * 2].shape[0]; k++) {
                const source = getNode("node_"+i+"_"+k);
                lines.push(bezierLink(source.props.cx, source.props.cy, x1, y1, layerWeights[k][j]));
            }
            const source = getNode("bias_"+(i+1)+"_"+j);
            lines.push(bezierLink(source.props.cx, source.props.cy, x1, y1, biasWeights[j]));
        }
    }

    return (<svg id="NNGraph" viewBox="0 0 240 240">
        <g>
            {lines}
        </g>
        <g>
            {circles}
        </g>
    </svg>)
}

export default NNGraph;