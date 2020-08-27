import Plotly from 'plotly.js-dist'

export function Scatterplot (elemId, xData, yData, name, funcName) {
  Plotly.newPlot(elemId, [{
    x: xData,
    y: yData,
    name: name,
    mode: 'markers',
    type: 'scatter'
  }], {
    title: name + ' vs. ' + funcName,
    xaxis: {
      title: funcName
    },
    yaxis: {
      title: name
    },
    paper_bgcolor: '#f8e297'
  })
}
