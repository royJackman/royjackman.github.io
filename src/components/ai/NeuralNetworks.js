import * as tf from '@tensorflow/tfjs';

export function createModel(layerData, activation, inputSize, outputSize, loss, optimizer) {
    const model = tf.sequential();
    model.add(tf.layers.dense({inputShape: [inputSize], units: layerData[0], activation: activation}));
    for (var i = 0; i < layerData.length - 1; i++) {
        model.add(tf.layers.dense({units: layerData[i+1], activation: activation}));
    }
    model.add(tf.layers.dense({units: outputSize, activation: activation}));
    model.compile({optimizer, loss});
    return model;
}