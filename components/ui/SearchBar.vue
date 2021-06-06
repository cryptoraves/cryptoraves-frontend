<template>
  <!-- <div class="app-container"> -->
  <div :class="[ tokensearch ? 'token-container' : 'app-container']">
    <div
      :class="[ tokensearch ? 'token-header-searchbar' : 'app-header-searchbar']"
      class="d-flex"
    >
      <input
        v-model="user"
        :class="[ tokensearch ? 'token-header-input' : 'app-header-input']"
        placeholder="Lookup Twitter @username, $TICKER, or FAQ"
        type="text"
        @input="debounceSearch"
        @keyup.enter="onEnter"
        @keyup.down="onArrowDown"
        @keyup.up="onArrowUp"
        @focus="inputFocused"
      >
      <div
        class="app-header-icon"
        @click="goPortfolio(user)">
        <i class="fa fa-search"/>
      </div>
    </div>

    <div
      v-show="openSearch"
      id="searchResult"
      :class="[ tokensearch ? 'token-header-search-result' : 'app-header-search-result']"
    >
      <div
        v-for="(filteredUser, index) in result"
        :key="index"
        :class="{ 'is-active': index === arrowCounter }"
        class="app-header-search-result-item"
        @click="setResult(filteredUser)"

      >{{ filteredUser }}</div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'SearchBar',
  props: {
    tokensearch: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      openSearch: false,
      user: '',
      userList: [],
      result: [],
      arrowCounter: 0,
      debounce: null
    }
  },
  created() {
    this.getUserList()
    this.$root.$on('changeUser', () => {
      this.user = ''
    })
  },
  mounted() {
    document.addEventListener('click', this.handleClickOutside)
  },
  destroyed() {
    document.removeEventListener('click', this.handleClickOutside)
  },
  methods: {
    async getUserList() {
      await axios.post(
        this.$store.state.subgraphUrl, {
          query: '{ users(first: 1, orderBy: modified, orderDirection: desc){ modified } }'
        }
      ).then(response => {

        // JSON responses are automatically parsed.
        localStorage.setItem(
          'lastUpdated',
          JSON.stringify(response.data.data.users[0].modified)
        )
        this.update = true
        if (localStorage.userListLastUpdated) {
          if (localStorage.lastUpdated == localStorage.userListLastUpdated) {
            this.update = false
          }
        }
      }).catch(e => {
        this.errors.push(e)
      })

      if (this.update == true) {
        localStorage.setItem(
          'userListLastUpdated',
          localStorage.lastUpdated
        )
        await axios.post(
            this.$store.state.subgraphUrl, {
              query: '{ users(orderBy: userName, orderDirection: asc){ userName } }'
            }
        ).then(response => {
          for (let i = 0; i < response.data.data.users.length; i++) {
            this.userList.push(response.data.data.users[i].userName)
          }
          // JSON responses are automatically parsed.
          localStorage.setItem(
            'userList',
            JSON.stringify(this.userList)
          )
          this.userList = Object.freeze(
            JSON.parse(localStorage.getItem('userList'))
          )
        })
        .catch(e => {
          this.errors.push(e)
        })
      } else {
        this.userList = Object.freeze(
          JSON.parse(localStorage.getItem('userList'))
        )
      }
    },
    async filteredList() {

      await axios.post(
          this.$store.state.subgraphUrl, {
            query: '{ users(first: 5, where: {userName_contains: "'+this.user.toLowerCase()+'"}, orderBy: userName, orderDirection: asc){ userName }}'
          }
      ).then(response => {
        for (let i = 0; i < response.data.data.users.length; i++) {
          this.userList.push(response.data.data.users[i].userName)
        }

      })
      .catch(e => {
        this.errors.push(e)
      })
      this.result = this.userList.filter(user => {
        return user.toLowerCase().indexOf(this.user.toLowerCase()) > -1
      })
      if (this.result.length == 0) {
        this.result[0] = 'No Result'
      }
    },
    async debounceSearch(event) {
      clearTimeout(this.debounce)
      this.debounce = setTimeout(async () => {
        this.user = event.target.value
        if (this.user.length > 1) {
          this.$emit('input', this.search)
          this.openSearch = true
          this.arrowCounter = -1
          console.log('asdsadsadsadsad')
          await this.filteredList()
        } else {
          this.openSearch = false
        }
      }, 600)
    },
    inputFocused() {
      if (this.user.length > 1) {
        this.openSearch = true
        this.filteredList()
        this.arrowCounter = -1
      }
    },
    setResult(result) {
      this.user = result
      this.arrowCounter = -1
      this.openSearch = false
      this.goPortfolio()
    },
    onArrowDown() {
      if (this.arrowCounter < this.result.length - 1) {
        this.arrowCounter = this.arrowCounter + 1
        this.user = this.result[this.arrowCounter]
        document.getElementById('searchResult').scrollTop =
          44 * this.arrowCounter
      }
    },
    onArrowUp() {
      if (this.arrowCounter > 0) {
        this.arrowCounter = this.arrowCounter - 1
        this.user = this.result[this.arrowCounter]
        document.getElementById('searchResult').scrollTop =
          44 * this.arrowCounter
      }
    },
    onEnter() {
      this.openSearch = false
      this.arrowCounter = -1
      this.goPortfolio()
    },
    handleClickOutside(evt) {
      if (!this.$el.contains(evt.target)) {
        this.openSearch = false
        this.arrowCounter = -1
      }
    },
    goPortfolio: function() {
      if (this.userList.includes(this.user)) {
        this.$router.push({
          name: 'PortfolioPage',
          query: {
            user: this.user
          }
        })
        this.user = ''
      } else {
        if (this.user) {
          this.user = ''
        }
      }
    }
  }
}
</script>

<style scoped>
.token-container {
  margin: 0px auto 0px auto;
  display: flex;
  width: 74%;
  margin-left: 30px;
  position: relative;
}
.app-container {
  width: 400px;
  border: 1px solid #d7d7d7;
  background-color: white;
  border-radius: 50px;
  position: relative;
}
.app-container:hover {
  -webkit-box-shadow: 0px 1px 8px -1px rgba(17, 71, 235, 1);
  -moz-box-shadow: 0px 1px 8px -1px rgba(17, 71, 235, 1);
  box-shadow: 0px 1px 8px -1px rgba(17, 71, 235, 1);
  transition: all 200ms ease-out;
}
.app-container:focus-within {
  box-shadow: 0px 1px 8px -1px rgba(17, 71, 235, 1);
}
.app-header-searchbar,
.token-header-searchbar {
  padding: 0px 15px;
  transition: all 200ms ease-out;
}
.token-header-searchbar {
  width: 100%;
}
.app-header-input {
  min-width: 350px !important;
  height: 50px;
  border: none;
  border-radius: 10px;
  font-size: 14px;
  line-height: 1.929;
  color: black;
  font-family: 'Montserrat';
}
.token-header-input {
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 10px;
  font-size: 14px;
  line-height: 1.929;
  color: black;
  font-family: 'Montserrat';
}
.app-header-icon {
  color: rgb(0, 123, 255);
  font-size: 20px;
  margin: auto;
}
.app-header-icon:hover {
  cursor: pointer;
  color: rgb(0, 38, 101);
}
.app-header-search-result,
.token-header-search-result {
  z-index: 9999;
  position: absolute;
  border: 1px solid #d7d7d7;
  border-radius: 10px;
  background: white;
  width: 90%;
  max-height: 300px;
  overflow: auto;
  top: 105%;
  left: 5%;
  text-align: left !important;
  -webkit-box-shadow: 0px 1px 8px -1px rgba(17, 71, 235, 1);
  -moz-box-shadow: 0px 1px 8px -1px rgba(17, 71, 235, 1);
  box-shadow: 0px 1px 8px -1px rgba(17, 71, 235, 1);
  transition: all 200ms ease-out;
}
.token-header-search-result {
  -webkit-box-shadow: 0px 5px 29px 0px rgba(106, 219, 252, 1);
  -moz-box-shadow: 0px 5px 29px 0px rgba(106, 219, 252, 1);
  box-shadow: 0px 5px 29px 0px rgba(106, 219, 252, 1);
}
.app-header-search-result-item {
  color: black;
  cursor: pointer;
  padding: 10px;
}
.app-header-search-result-item:hover,
.is-active {
  background: lightblue;
}
</style>
