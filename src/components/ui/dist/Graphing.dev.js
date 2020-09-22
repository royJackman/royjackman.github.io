'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.Scatterplot = Scatterplot
exports.MLGraph = MLGraph

var _plotly = _interopRequireDefault(require('plotly.js-dist'))

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

function Scatterplot (elemId, name, funcName, data) {
  _plotly.default.newPlot(elemId, data, {
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

function MLGraph (elemId, data) {
  _plotly.default.newPlot(elemId, data, {
    margin: {
      t: 25,
      b: 25,
      l: 25,
      r: 25
    },
    paper_bgcolor: 'rgba(0, 0, 0, 0)',
    plot_bgcolor: 'rgba(0, 0, 0, 0)',
    xaxis: {
      gridcolor: 'black'
    },
    yaxis: {
      gridcolor: 'black'
    }
  }, {
    responsive: true
  })
}
