const tf = window.tf
const learningRate = 0.1

const random = () => (Math.random(1) * 2) - 1

let m = tf.scalar(random()).variable()
let b = tf.scalar(random()).variable()

const optimizer = tf.train.sgd(learningRate);

const f = xs => xs.mul(m).add(b)
const loss = (pred, label) => pred.sub(label).square().mean()
const train = (xs, ys) => optimizer.minimize(() => loss(f(xs), ys));

export default {
    predict: x_arr => tf.tidy(() => f(tf.tensor1d(x_arr)).dataSync()),
    train: (x_arr, y_arr) => tf.tidy(() => train(tf.tensor1d(x_arr), tf.tensor1d(y_arr)))
}