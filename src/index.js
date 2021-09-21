import './index.less'
import './index.css'
import '../static/icon/iconfont.css'
import test from './test'

// import data from './data.json'

test()
const add = (x, y) => x + y

console.log(add(1, 2))



if (module.hot) {
    module.hot.accept('./test.js', () => {
        test()
    })
}