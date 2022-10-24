import axios from 'axios'
import { Message, Loading } from 'element-ui'
const ConfigBaseURL = '/examples/' //默认路径，这里也可以使用env来判断环境
    // let loadingInstance = null //这里是loading
    //使用create方法创建axios实例
export const Service = axios.create({
        timeout: 7000, // 请求超时时间
        // baseURL: ConfigBaseURL,
        //   method: 'post',
        headers: {
            'Content-Type': 'application/json;charset=UTF-8'
        }
    })
    // 添加请求拦截器
Service.interceptors.request.use(config => {
        // debugger
        // config.headers['X-Gistack-token'] = 'eyJraWQiOiJrMSIsImFsZyI6IlJTMjU2In0.eyJpc3MiOiJhZG1pbkBnaXN1bmkuY29tIiwiYXVkIjoidXVtcyIsImV4cCI6MTY2Njg4MDc2OSwianRpIjoiSXBQT19YU1d6bHFWdGJfZE1HbzJ2QSIsImlhdCI6MTY2NjI3NTk2OSwibmJmIjoxNjY2Mjc1NjY5LCJzdWIiOiJ4aWFvd2FuZyIsImlkIjoiNDAyOGEwMWM3NGNhMGY0NTAxNzRkOGJiYmMwMTY1ZmUiLCJuYW1lIjoieGlhb3dhbmciLCJ0eXBlIjoiMCIsImNsaWVudGlkIjpudWxsLCJmcm9tIjoidXVtcyIsImV4cGlyZXMiOiIxNjY2ODgwNzY5MzMxIiwicm9sZXMiOlsicmVxX3JlcG9ydCJdfQ.jeJTKYfLASuZzqZLq9g61H3VwwTuDtTV66qPKQlfYeOuMzmSnWJFfECDjTSRAaf4blG0hs_MuNOyoZW079mH0ghuCUoVBn0NYrsCEt6SpOkQDdhK2HHRaKy1TbOHG0eqvcmQbUOKT6Ko2B7oqdqCIoEJ9rjw2oIjbmC4TCQ3lPTkaIEEln07yZHxbnLU_wz-PN62Cqj_UgnYnvhdL7Z6JsLB33L-AE7RUDpq6bdefV4RghxBz_b4EW7XBDaTGVAUbQgx1VHAT9jJMJgRgRA3234_lka5CdWPJSLeVAg_FqselB-9jtERvOFGV9x3dyjmIL9kZdykZ3Qw0uFfqHjiJg'
            //   loadingInstance = Loading.service({
            //     lock: true,
            //     text: 'loading...'
            //   })
        return config
    })
    // 添加响应拦截器
Service.interceptors.response.use(response => {
    // loadingInstance.close()
    // console.log(response)
    return response.data
}, error => {
    console.log('TCL: error', error)
    const msg = error.Message !== undefined ? error.Message : ''
    Message({
            message: '网络错误' + msg,
            type: 'error',
            duration: 3 * 1000
        })
        // loadingInstance.close()
    return Promise.reject(error)
})