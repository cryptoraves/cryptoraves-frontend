var LIVE = false
export const state = () => ({
  LIVE: LIVE,
  WebsiteInterfaceUrl: LIVE
    ? 'https://4mjt8xbsni.execute-api.us-east-1.amazonaws.com/prod'
    : 'https://o6g9vt8lv9.execute-api.us-east-1.amazonaws.com/prod',
  web3Login: false,
  subgraphUrl: 'http://127.0.0.1:8000/subgraphs/name/cryptoraves/cryptoraves-subgraph',
  blockExplorerUrl: 'https://etherscan.io/tx/',
  user: {}
})
export const mutations = {
  setWeb3Login(state, value) {
    console.log('setWeb3Login', value)
    state.var1 = value
  },
  setUserData(state, data) {
    if(data.platformHandle !== undefined){
      state.user = data
    }
  }
}
