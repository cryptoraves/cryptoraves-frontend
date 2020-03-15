<template>
  <div class="portfolio-page">
    <div class="container">
      <div
        v-if="showLoading"
        class="portfolio-loading-img"
      >
        <img 
          src="../assets/gif/loading.gif" 
          alt >
      </div>
      <div v-else>
        <div class="portfolio-title">
          <SectionHeader>Leaderboard</SectionHeader>
          <div class="portfolio-subtitle">
            <a
              href="https://medium.com/@cryptoraves/how-to-grow-your-cryptoraves-token-score-84bc6b18554f"
            >How is score calculated?</a>
          </div>
        </div>

        <div class="table-section row">
          <table>
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">User</th>
                <th scope="col">Tweet</th>
                <th scope="col">Score</th>
              </tr>
            </thead>
            <tbody>
              <tr 
                v-for="(item,index) in tableRows"
                :key="index">
                <td width="10%">
                  <div>{{ item.num }}</div>
                </td>
                <td width="10%">
                  <img
                    :src="item.tokenBrandImageUrl"
                    :title="item.tokenBrand"
                    class="table-img"
                    onerror="this.onerror=null;this.src='https://sample-imgs.s3.amazonaws.com/generic-profil.png'"
                    @click="goPortfolio(item.tokenBrand)"
                  >
                </td>
                <td width="40%">
                  <img
                    src="../assets/img/twittersmall.png"
                    class="link"
                    title="Link to Twitter Profile"
                    @click="goTwitterProfile(item.platformHandle)"
                    
                  >
                </td>
                <td width="20%">
                  <div>{{ item.score | comma }}</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="row">
          <div class="portfolio-pagination">
            <span
              class="btn btnpagination [visiblePrev ? '' : 'disabledbtn']"
              @click="goPrev"
            >
              <i class="fa fa-angle-left"/>
            </span>
            Page {{ initialPagePtr }}
            <span
              href="#"
              class="btn btnpagination [visibleNext ? '' : 'disabledbtn']"
              @click="goNext"
            >
              <i class="fa fa-angle-right"/>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import _ from 'lodash'
import SectionHeader from '../components/ui/SectionHeader'

export default {
  name: 'PortfolioPage',
  components: {
    SectionHeader
  },
  data() {
    return {
      user: '',
      tableRows: [],
      rowCount: 0,
      initialPagePtr: 0,
      visibleNext: true,
      visiblePrev: true,
      showLoading: true,
      page: 1,
    }
  },
  created() {
    this.page = parseInt(this.$route.query.page)
    if (!this.page) {
      this.page = 1
    }

    this.getLeaderboard()
  },

  methods: {
    goNext() {
      if (this.visibleNext) {
        this.showLoading = true
        this.page = this.page + 1
        this.getLeaderboard(this.page)
      }
    },
    goPrev() {
      if (this.visiblePrev) {
        this.showLoading = true
        this.page = this.page - 1
        this.getLeaderboard(this.page)
      }
    },
    goTwitterProfile(handle) {
      handle = handle.replace('@', '')
      window.open('https://twitter.com/' + handle)
    },
    getLeaderboard() {
      axios
        .get(
          this.$store.state.WebsiteInterfaceUrl + '?pageType=leaderboard&page=' +
            this.page
        )
        .then(response => {
          this.$router.push({
            path: 'LeaderboardPage',
            query: {
              page: this.page
            }
          })
          // JSON responses are automatically parsed.
          let res = response.data
          this.tableRows = _.cloneDeep(res.tableRows)
          this.rowCount = res.rowCount

          this.initialPagePtr = this.page
          this.visiblePrev = res.prev ? true : false
          this.visibleNext = res.next ? true : false
          this.showLoading = false
        })
        .catch(e => {
          console.log(e)
        })
    },
    goPortfolio(user) {
      this.$root.$emit('changeUser', user)
      this.$router.push({ name: 'PortfolioPage', query: { user: user } })
    }
  }
}
</script>
<style scoped>
.portfolio-title {
  position: relative;
}
.portfolio-subtitle {
  color: rgb(0, 38, 101);
  font-family: 'Montserrat';
  text-align: center;
  line-height: 2em;
}
.portfolio-subtitle-details {
  margin-top: 20px;
  color: rgb(0, 38, 101);
  font-family: 'Montserrat';
  text-align: center;
  line-height: 1.2em;
}
.portfolio-subtitle-holding {
  display: flex;
  margin-top: 100px;
  margin-bottom: -90px;
  color: rgb(0, 38, 101);
  font-family: 'Montserrat';
  text-align: center;
  line-height: 1.2em;
  justify-content: center;
}
.portfolio-subtitle-holding span {
  transform: translate(70%, 0);
}
.portfolio-page {
  margin-bottom: 50px;
}
.portfolio-loading-img {
  display: flex;
  height: calc(100vh - 370px);
}
.portfolio-loading-img img {
  margin: auto;
}
.portfolio-userimg {
  position: absolute;
  background: white;
  top: 50%;
  left: 0;
  display: flex;
  margin: auto;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 1px solid lightgrey;
  animation: avatar-from-effect 2s infinite;
  transition: all 0.5s ease-out;
}
@keyframes avatar-from-effect {
  0% {
    box-shadow: 0 0 0 0px rgb(43, 96, 222, 0.8);
  }
  100% {
    box-shadow: 0 0 0 15px rgb(43, 96, 222, 0);
  }
}

.portfolio-userimg:hover {
  cursor: pointer;
  transition: all 0.5s ease-out;
  transform: translateY(-0.5em);
}

.portfolio-userimg:active {
  transform: translateY(0.5em);
}

.portfolio-userimg img {
  width: 110px;
  height: 110px;
  border-radius: 50%;
  margin: auto;
}
.portfolio-userimg img:hover {
  opacity: 0.7;
  cursor: pointer;
}

.table-section {
  margin: 100px auto 0px auto;
  box-shadow: 0 0 1em 1px rgba(0, 0, 0, 0.25);
  border-radius: 6px;
  overflow: auto;
}
table {
  font-family: 'Montserrat';
  border-spacing: 1;
  border-collapse: collapse;
  background: white;
  width: 100%;
  position: relative;
}

table td,
table th {
  padding-left: 8px;
  padding-top: 8px;
  padding-bottom: 8px;
}
table thead tr {
  height: 60px;
  color: rgb(0, 38, 101);
  background: lightgrey;
  font-weight: bold;
  font-size: 20px;
}

table tbody tr {
  height: 80px;
  color: rgb(0, 38, 101);
  font-size: 20px;
}
table td,
table th {
  text-align: center;
}
table td.l,
table th.l {
  text-align: right;
}
table td.c,
table th.c {
  text-align: center;
}
table td.r,
table th.r {
  text-align: center;
}
tr:nth-child(even) {
  background-color: rgb(246, 250, 251);
}
.table-img {
  border: 2px solid white;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  -webkit-box-shadow: 0px 0px 15px 5px rgba(8, 169, 255, 0.3);
  -moz-box-shadow: 0px 0px 15px 5px rgba(8, 169, 255, 0.3);
  box-shadow: 0px 0px 15px 5px rgba(8, 169, 255, 0.3);
}
.table-img:hover {
  cursor: pointer;
  opacity: 0.7;
  animation: avatar-from-effect 1s infinite;
}
.tr-orange-color {
  color: peru;
}
.history-link {
  font-size: 1.5em;
  font-family: 'Montserrat';
  color: rgb(0, 38, 101);
  text-align: center;
  margin: auto;
  cursor: pointer;
}
.portfolio-pagination {
  margin: 10px auto 50px auto;
  font-weight: bold;
  font-size: 20px;
  color: rgb(0, 38, 101);
}
@media only screen and (max-width: 767px) {
  .portfolio-userimg {
    position: relative;
    margin-top: 50px;
    margin-bottom: -110px;
    z-index: 2;
  }
  .portfolio-subtitle-holding {
    margin-top: 30px;
    margin-bottom: 0px;
  }
  .portfolio-subtitle-holding span {
    transform: none;
  }
}
@media only screen and (max-width: 410px) {
  .history-link {
    font-size: 1em;
  }
  .portfolio-userimg {
    width: 80px;
    height: 80px;
  }
  .portfolio-userimg img {
    width: 70px;
    height: 70px;
  }
  table thead tr {
    height: 40px;
    font-size: 15px;
  }
  table tbody tr {
    height: 55px;
    font-size: 12px;
  }
  .portfolio-pagination {
    font-size: 15px;
  }
  .table-img {
    height: 50px;
    width: 50px;
  }
}
</style>
