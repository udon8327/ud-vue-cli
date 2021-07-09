import * as udAxios from './ud-axios'
import * as udUtils from './ud-utils'
import * as udCalls from './ud-calls'
import * as udComponents from './components'

let install = Vue => {
  Object.keys(udAxios).forEach(item => Vue.prototype[item] = udAxios[item]);
  Object.keys(udUtils).forEach(item => Vue.prototype[item] = udUtils[item]);
  Object.keys(udCalls).forEach(item => Vue.prototype[item] = udCalls[item]);
  Object.keys(udComponents).forEach(item => Vue.component(item, udComponents[item]));
}

export default install;