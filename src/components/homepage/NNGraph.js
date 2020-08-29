import React, { useState } from 'react'
import * as d3 from 'd3'
import chroma from 'chroma-js'
import Tooltip from '@material-ui/core/Tooltip'

const weightColorScale = chroma.scale(['red', 'blue']).mode('lab')

function bezierLink (x0, y0, x1, y1, weight, color) {
  var path = d3.path()
  const midX = (x0 + x1) / 2
  path.moveTo(x0, y0)
  path.bezierCurveTo(midX, y0, midX, y1, x1, y1)
  return (<Tooltip
    key={'tooltip_' + [x0, y0, x1, y1].join('_')}
    title={weight}
    placement='bottom'
    interactive>
    <path
      d={path.toString()}
      id={[x0, y0, x1, y1].join('_')}
      key={[x0, y0, x1, y1].join('_')}
      fill="none"
      strokeWidth={Math.abs(weight * 5)}
      stroke={weightColorScale(color)} />
  </Tooltip>)
}

function NNGraph (weightResponse) {
  const weights = weightResponse.weights
  const layers = weights.length / 2
  const [maxWeight, setMaxWeight] = useState(0.001)
  const [minWeight, setMinWeight] = useState(-0.001)
  const getRatio = (val) => (val - minWeight) / (maxWeight - minWeight)

  const circlePosn = (index, infoLayers) => (index + 0.5) * 240 / infoLayers

  var circles = []
  var lines = []

  const layerWidth = weights[0].shape[0]
  const cx = circlePosn(0, layers + 1)
  for (var i = 0; i < layerWidth; i++) {
    circles.push(<circle
      id={'node_0_' + i}
      key={'node_0_' + i}
      cx={cx}
      cy={circlePosn(i, layerWidth)}
      r={9} />)
  }

  const getNode = (nodeKey) => circles.filter((val) => nodeKey.localeCompare(val.key) === 0)[0]

  for (i = 0; i < layers; i++) {
    const layerWidth = weights[i * 2].shape[1]
    const layerWeights = weights[i * 2].arraySync()
    const cx = circlePosn((i + 1), layers + 1)

    var max = Math.max(...[].concat(...layerWeights))
    if (max > maxWeight) { setMaxWeight(max) }
    var min = Math.min(...[].concat(...layerWeights))
    if (min > minWeight) { setMinWeight(min) }

    for (var j = 0; j < layerWidth; j++) {
      const cy = circlePosn(j, layerWidth)
      circles.push(<circle
        id={'bias_' + (i + 1) + '_' + j}
        key={'bias_' + (i + 1) + '_' + j}
        cx={cx}
        cy={cy + 13}
        r={7}
        fill="gray" />)
      circles.push(<circle
        id={'node_' + (i + 1) + '_' + j}
        key={'node_' + (i + 1) + '_' + j}
        cx={cx}
        cy={cy}
        r={9} />)
      for (var k = 0; k < weights[i * 2].shape[0]; k++) {
        const source = getNode('node_' + i + '_' + k)
        lines.push(bezierLink(source.props.cx, source.props.cy, cx, cy, layerWeights[k][j], getRatio(layerWeights[k][j])))
      }
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

export default NNGraph
