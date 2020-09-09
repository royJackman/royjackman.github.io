import Plotly from 'plotly.js-dist'

export function Scatterplot (elemId, name, funcName, data) {
  Plotly.newPlot(elemId,
    data,
    {
      title: funcName + ' vs. ' + name,
      xaxis: {
        title: name
      },
      yaxis: {
        title: funcName
      },
      paper_bgcolor: '#f8e297'
    })
}
