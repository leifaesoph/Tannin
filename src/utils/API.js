import axios from 'axios'

const mongoDBUrl = 'http://localhost:3001'
// const mongoDBUrl = 'https://tannin-wine.herokuapp.com/'

export default {
  signUpSubmit: function (userInfo) {
    console.log(userInfo)
    return axios.post(mongoDBUrl + '/api/user/signup', userInfo)
  },
  logIn: function (loginInfo) {
    console.log(loginInfo)
    return axios.post(mongoDBUrl + '/api/user/login', loginInfo)
  },
  logOut: function () {
    return axios.post(mongoDBUrl + '/api/user/logout')
  },
  getUser: function () {
    return axios.get(mongoDBUrl + '/api/user/getUser')
  },
  getMaster: function () {
    return axios.get(mongoDBUrl + '/api/wine/')
  },
  getSavedWine: function (admin) {
    console.log(admin)
    return axios.post(mongoDBUrl + '/api/getwine/', admin)
  },
  addWine: function (wineData) {
    console.log(wineData)
    return axios.put(mongoDBUrl + '/api/addwine/', wineData)
  },
  deleteWine: function (deletedWineData) {
    console.log(deletedWineData)
    return axios.put(mongoDBUrl + '/api/restaurant/delete', deletedWineData)
  },
  addEmployee: function (employeeData) {
    console.log(employeeData)
    return axios.post(mongoDBUrl + '/api/addEmployee', employeeData)
  },
  deleteEmployee: function (deletedEmployeeData) {
    console.log(deletedEmployeeData)
    return axios.put(mongoDBUrl + '/api/addEmployee/', deletedEmployeeData)
  }
}
