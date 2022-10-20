import { Service } from './http'

// export function getConfigsByProductId(productId) {
//   return Service({
//     url: '/manager/getConfigsByProductId',
//     params: { productId: productId }
//   })
// }

export function getAllAndroidPlugins() {
    return Service({
        url: '/examples/data/asset/geo/HK.json',
        method: 'get'
    })
}

export function getList(data) {
    return Service({
        url: '/api/v1/cart/list',
        method: 'get',
        params: data
    })
}

// export function addNewAndroidPlugin(data) {
//   return Service({
//     url: '/manager/addAndroidPlguin',
//     data: JSON.stringify(data)
//   })
// }