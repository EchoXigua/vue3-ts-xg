//环境变量的配置
let BASE_URL = ''
const TIME_OUT = 10000
BASE_URL = 'http://152.136.185.210:5000'

// if (process.env.NODE_ENV === 'development') {
//   // BASE_URL = 'http://123.207.32.32:8000/'
//   BASE_URL = '/api'
// } else if (process.env.NODE_ENV === 'production ') {
//   BASE_URL = 'http://coderwhy.org/prod'
// } else {
//   BASE_URL = 'http://coderwhy.org/test'
// }

export { BASE_URL, TIME_OUT }
