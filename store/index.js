var LIVE = false
export const state = () => ({
  LIVE: LIVE,
  WebsiteInterfaceUrl: LIVE
    ? 'https://4mjt8xbsni.execute-api.us-east-1.amazonaws.com/prod'
    : 'https://o6g9vt8lv9.execute-api.us-east-1.amazonaws.com/prod',
  web3Login: false,
  ethereumAddress: ''
})
export const mutations = {
  setWeb3Login(state, value) {
    console.log('setWeb3Login', value)
    state.var1 = value
  },
  setEthereumAddress(state, value) {
    state.ethereumAddress = value
  }
}
