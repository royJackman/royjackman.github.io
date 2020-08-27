import * as tf from '@tensorflow/tfjs'

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
