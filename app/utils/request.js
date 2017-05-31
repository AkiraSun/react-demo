import baseurl from './config'
//使用qs插件转换json为fetch传参形式，qs.stringify(qs.parse(param),{arrayFormat:'brackets'})
import qs from 'qs'
//使用fetch时若有跨域mode: 'cors'
//若使用cookie，credentials: 'include',后端跨域接收改为固定ip，不能用＊，会有安全问题
export default function request(method, url, param) {

  var options;
  function methods (method,param) {
    console.log('paramparam',qs.stringify(qs.parse(param)))
    switch (method) {
    case 'GET':
      options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
        },
        // credentials: 'include',
        mode: 'cors',
        cache: 'default',
      }
      return options;
      break;
    case 'POST':
    console.log('JSON.stringify(param)',JSON.stringify(param))
      options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
        },
        // credentials: 'include',
        body: qs.stringify(qs.parse(param),{arrayFormat:'brackets'}),
        mode: 'cors',
        cache: 'default'
      }
      console.log(options)
      return options;
      break;
    default:
        console.log('111')
      break;
    }
  }
  function checkStatus (response) {
    const status = response.status;
    switch (status){
      case 200:
          // (response.json())
          // .then((json) => {
          //   console.log('200',json)
          //   return json
          // })
          // .catch((err) => {
          //   console.log('err',err);
          //   throw err;
          // })
          // console.log(response.body)
          return response.json()
        break;
      case 404:
          console.log('错误404')
        break;
      default:
        (data)
        .then((data) => {
          console.log(data)
          throw {myError: json || {code: -1, message: '未知错误'}}
        })
        .catch((err) => {
          console.log(11111)
        })
    }
  }
  return fetch(baseurl+url, methods(method,param))
    .then(checkStatus)
    .then((data) => {
      console.log(data)
      return data ;
    })
    .catch((err) => {
      return err;
    });
}
