//import axios from '../public/http'
import moment from 'moment'
let decimalTwo = (value) => { 
  // var value = value.toString();
  var result = Number(value).toFixed(2)
  return result
}
let formdate = (value) => {
  value = parseInt(value)
  return moment(value).format('YYYY-MM-DD HH:mm:ss')
}
let formSimpledate = (value) => {
  value = parseInt(value)
  return moment(value).format('YYYY-MM-DD')
}
export {
  decimalTwo,
  formdate,
  formSimpledate
}
