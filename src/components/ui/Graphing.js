import Plotly from 'plotly.js-dist'

export function MLGraph (elemId, data) {
  Plotly.newPlot(elemId,
    data,
    {
      margin: { t: 25, b: 25, l: 25, r: 25 },
      paper_bgcolor: 'rgba(0, 0, 0, 0)',
      plot_bgcolor: 'rgba(0, 0, 0, 0)',
      xaxis: { gridcolor: 'black' },
      yaxis: { gridcolor: 'black' },
      showlegend: false
    },
    { responsive: true }
  )
}

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
