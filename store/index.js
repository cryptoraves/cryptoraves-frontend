var LIVE = false
export const state = () => ({
  LIVE: LIVE,
  WebsiteInterfaceUrl: LIVE
    ? 'https://4mjt8xbsni.execute-api.us-east-1.amazonaws.com/prod'
    : 'https://o6g9vt8lv9.execute-api.us-east-1.amazonaws.com/prod',
  web3Login: false
})
export const mutations = {
  setWeb3Login(state, value) {
    console.log('setWeb3Login', value)
    state.var1 = value
  },
  SET_VAR_2(state, value) {
    console.log('SET_VAR_2', value)
    state.var2 = value
  }
}
