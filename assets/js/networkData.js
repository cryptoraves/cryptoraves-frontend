import axios from 'axios'

export default {
  components: {},
  data() {
    return {
      contractAddresses: JSON.parse('{"SKALE Bob Testnet":{"networkType":"SKALE Bob Testnet","UserManagementContractAddress":"0x93b22f73843cd5AB69c37eAB5B0561A3b3890699","TokenManagementContractAddress":"0xab673CF3988c2C4E4d32AF9d4808803201870169","CryptoravesTokenContractAddress":"0x2F4260f6Cee1499d6ABaa21bd8013e6F904408Dc","TransactionManagementContractAddress":"0xEA65707550b7922Fa1A7B172A1028A96922Bcc34","ValidatorInterfaceContractAddress":"0x3a616b89E7816448B13fd15FBB4Eb13Ca7451639","ERC1155tokenId":0,"AdminToolsLibraryAddress":"0xda0B8B5334Ee46F79894FE2eb592E535cB38b25B","ERC20FullAddress":"0x3FA0c47108b68F2f3b20f540a97AB3F28dA0b23b","ERC721FullAddress":"0xc90F8DED1A499481B869f29390BF658b7fb98b35"},"SKALE Testnet":{"networkType":"SKALE Testnet","UserManagementContractAddress":"0x2343247EfA99a23e310964682Cb5EbF7DCb3ABA8","TokenManagementContractAddress":"0x2F015929Bcc1da7048f7dfFDbF356bB7e2bC4b47","CryptoravesTokenContractAddress":"0x239424d0aD27d196933940cf46afb4aa835C3F26","TransactionManagementContractAddress":"0x08Aa0607115C8dDAB9451eB01250810e4EAF2b70","ValidatorInterfaceContractAddress":"0xB20b6ca003809F6a72580dE0d68f534C94518B32","ERC1155tokenId":0,"AdminToolsLibraryAddress":"0x82fabB8e8B77408DAD409f412B7C1bBC24213468","ERC20FullAddress":"0x82B442115a3475bB56447201B998966957923DAa","ERC721FullAddress":"0x502f2a6E1c87F31a2fbB2aBe1A4146E33FE89827"},"Matic Testnet":{"networkType":"Matic Testnet","UserManagementContractAddress":"0xCbE31CAb1e7D3d109406Cc583DfB051Cd0F6457B","TokenManagementContractAddress":"0x1dE03f88dacd37277665f9a18010a0DeB87A763B","CryptoravesTokenContractAddress":"0x141cbfd74537331caa808157E6A9F65477474e03","TransactionManagementContractAddress":"0x826198082284b208353B3F4E5AF7e721B5d57F1F","ValidatorInterfaceContractAddress":"0xC545B188a2ba86F335bF8d10a795fa912B6FCea7","ERC1155tokenId":0,"AdminToolsLibraryAddress":"0x23B8F58eFDe4955C45Ae16cAAB2f16f2A3B4d822","ERC20FullAddress":"0x50eD1684F2d30a0fEc9330b31ea99B36c4886159","ERC721FullAddress":"0x7B3de33910BA1f35e5e9608978FE65c77d6B8f83"}, "goerli": {		"networkType": "goerli",		"UserManagementContractAddress": "0x2343247EfA99a23e310964682Cb5EbF7DCb3ABA8",		"TokenManagementContractAddress": "0x2F015929Bcc1da7048f7dfFDbF356bB7e2bC4b47",		"CryptoravesTokenContractAddress": "0x239424d0aD27d196933940cf46afb4aa835C3F26",		"TransactionManagementContractAddress": "0x08Aa0607115C8dDAB9451eB01250810e4EAF2b70",		"ValidatorInterfaceContractAddress": "0xB20b6ca003809F6a72580dE0d68f534C94518B32",		"ERC1155tokenId": 0,		"AdminToolsLibraryAddress": "0x82fabB8e8B77408DAD409f412B7C1bBC24213468",		"ERC20FullAddress": "0x2aF058EEb6AAA3d36Ba67Ec71523D2519715f720",		"ERC721FullAddress": "0xBDFA4Fa3b44573B9f0918F49C501E09eD59aEc2a"	}}'),
      cryptoravesTokenABI: [
        'function getHeldTokenBalances(address) external view returns(uint256[] memory)',
        'function getHeldTokenIds(address) external view returns(uint256[] memory)',
        'function balanceOf(address account, uint256 id) external view returns (uint256)'
      ],
      tokenManagementABI: [
        'function getAddressBySymbol(string memory) external view returns (address)',
        'function getManagedTokenIdByAddress(address) external view returns(uint256)'
      ]
    }
  },
  methods: {
    async loadWebDataFromAddress( ethAddr) {
      let res = null
      try {

        await axios.post(
           this.$store.state.subgraphUrl, {
            query: '{ users(first: 1, where: {layer1Address: "'+ethAddr+'"}){ id twitterUserId userName cryptoravesAddress imageUrl } }'
          }
        ).then(response => {
          res = response.data.data['users'][0]

        }).catch(e => {
          console.log(e)
        })
      } catch(e) {
        throw new Error(e)
      }
      return res
    },
  }
}
