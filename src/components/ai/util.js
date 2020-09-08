import * as tf from '@tensorflow/tfjs'
import * as _ from 'lodash'

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

export function scrubData (data, vars, outputSize) {
  return tf.tidy(() => {
    tf.util.shuffle(data)

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
