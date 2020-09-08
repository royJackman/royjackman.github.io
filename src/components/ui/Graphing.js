import Plotly from 'plotly.js-dist'

export function Scatterplot (elemId, name, funcName, data) {
  Plotly.newPlot(elemId,
    data,
    {
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
