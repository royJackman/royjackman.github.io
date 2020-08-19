import React from 'react';

function NNGraph(weightResponse) {
    const weights = weightResponse.weights;
    const layers = weights.length / 2;

    const circlePosn = (index, infoLayers) => (index + 0.5) * 240/infoLayers;

    var circles = [];

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
                id={"node_" + (i+1) + "_" + j} 
                key={"node_" + (i+1) + "_" + j} 
                cx={cx} 
                cy={circlePosn(j, layerWidth)} 
                r={9} />)
            circles.push(<circle 
                id={"bias_" + (i+1) + "_" + j} 
                key={"bias_" + (i+1) + "_" + j} 
                cx={cx - 7} 
                cy={circlePosn(j, layerWidth) + 15} 
                r={7}
                fill="blue" />)
        }
    }

    return (<svg id="NNGraph" viewBox="0 0 240 240">
        <g>
            {circles}
        </g>
    </svg>)
}

export default NNGraph;