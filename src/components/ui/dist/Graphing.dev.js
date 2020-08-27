'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.Scatterplot = Scatterplot

var _plotly = _interopRequireDefault(require('plotly.js-dist'))

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

function Scatterplot (elemId, xData, yData, name, funcName) {
  _plotly.default.newPlot(elemId, [{
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
