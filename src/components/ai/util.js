import * as tf from '@tensorflow/tfjs'
import * as _ from 'lodash'
import * as math from 'mathjs'
import rando from '@nastyox/rando.js'

const INPUTS = ['x', 'y', 'z']

export function cleanData (inputs, outputs) {
  return tf.tidy(() => {
    const inputTensor = tf.tensor(inputs)
    const outputTensor = tf.tensor(outputs)

    const inputMax = inputTensor.max()
    const inputMin = inputTensor.min()
    const outputMax = outputTensor.max()
    const outputMin = outputTensor.min()

    const normalizedInputs = inputTensor.sub(inputMin).div(inputMax.sub(inputMin))
    const normalizedOutputs = outputTensor.sub(outputMin).div(outputMax.sub(outputMin))

    return {
      inputs: normalizedInputs,
      outputs: normalizedOutputs,
      inputMax,
      inputMin,
      outputMax,
      outputMin
    }
  })
}

export function getWeightBounds (weights) {
  const maxWeights = weights.map((val) => val.array().then((val) => Math.max(...val.flat())))
  const maxWeight = maxWeights.reduce((head, tail) => head.then((h) => tail.then((t) => h > t ? h : t)))
  const minWeights = weights.map((val) => val.array().then((val) => Math.min(...val.flat())))
  const minWeight = minWeights.reduce((head, tail) => head.then((h) => tail.then((t) => h < t ? h : t)))
  return { maxWeight, minWeight }
}

export async function generateData (ranges, numPoints, inputSize, outputSize, vars, funcs) {
  var retval = []
  const illegal = []

  const rangeRandom = (i) => {
    const rng = ranges[i][1] - ranges[i][0]
    return ranges[i][0] + Math.random() * rng
  }

  for (var i = 0; i < numPoints; i++) {
    var temp = {}
    for (var j = 0; j < inputSize; j++) {
      temp[vars[j]] = rangeRandom(j)
    }
    for (j = 0; j < outputSize; j++) {
      try {
        temp['_' + j] = funcs[j].evaluate(temp)
      } catch (_) {
        if (!illegal.includes(j + 1)) { illegal.push(j + 1) };
      }
    }
    retval.push(_.cloneDeep(temp))
  }
  if (illegal.length > 0) {
    alert('The following functions are using illegal values! ' + illegal)
  }
  return retval
}

export function linspace (start, end, items) {
  const scale = (end - start) / items
  return Array.from({ length: items }, (_x, i) => start + i * scale)
}

export function generateFuncData (func, inputs, ranges, numPoints, random = false, noise = 0.0, outKey = null) {
  if (ranges.length !== inputs) {
    console.log('Number of ranges does not match number of inputs!')
    return null
  }

  let compFunc

  try {
    compFunc = math.compile(func)
  } catch (e) {
    return null
  }

  const retval = {}

  let i = 0
  for (i = 0; i < inputs; i++) {
    retval[INPUTS[i]] = random ? Array.from({ length: numPoints }, () => rando.rando(ranges[i][0], ranges[i][1], 'float')) : linspace(ranges[i][0], ranges[i][1], numPoints)
  }

  const outputs = []
  for (i = 0; i < numPoints; i++) {
    const scope = {}
    for (const r in retval) {
      scope[r] = retval[r][i]
    }
    try {
      outputs.push(compFunc.evaluate(scope) + rando.rando() * noise)
    } catch (e) {
      return null
    }
  }

  retval[outKey || 'outputs'] = outputs

  return retval
}

export function scrubData (data, vars, outputSize) {
  const inputs = data.map(d => {
    var retval = []
    vars.forEach((v) => {
      retval.push(d[v])
    })
    return retval
  })
  const outputs = data.map(d => {
    var retval = []
    for (var i = 0; i < outputSize; i++) {
      retval.push(d['_' + i])
    }
    return retval
  })

  return cleanData(inputs, outputs)
}
