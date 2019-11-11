<template>
  <div class="portfolio-page">
    <div class="container">
      <div v-if="showLoading" class="portfolio-loading-img">
        <img src="../assets/gif/loading.gif" alt />
      </div>
      <div v-else>
        <div class="portfolio-title">
          <SectionHeader >Leaderboard</SectionHeader>
          <div class="portfolio-subtitle">   
            How is score calculated?
          </div>
          
        </div>

        <div class="table-section row">
          <table>
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">User</th>
                <th scope="col"></th>
                <th scope="col">Score</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item,index) in tableRows" :index="index">
                <td>
                  <div>{{item.num}}</div>
                </td>
                <td>

                  <img
                    class="table-img"
                    :src="item.tokenBrandImageUrl"
                    :title="item.tokenBrand"
                    @click="goPortfolio(item.tokenBrand)"
                  />
                </td>
                <td>
                  <img
                    class="link"
                    src="../assets/img/twittersmall.png"
                    @click="goTwitterProfile(item.platformHandle)"
                    title="Link to Twitter Profile"
                  />
                </td>
                <td>
                  <div>{{item.score | comma}}</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="row">
          <div class="portfolio-pagination">
            <span
              v-on:click="goPrev"
              class="btn btnpagination"
              v-bind:class="[visiblePrev ? '' : 'disabledbtn']"
            >
              <i class="fa fa-angle-left"></i>
            </span>
            Page {{initialPagePtr}}
            <span
              href="#"
              v-on:click="goNext"
              class="btn btnpagination"
              v-bind:class="[visibleNext ? '' : 'disabledbtn']"
            >
              <i class="fa fa-angle-right"></i>
            </span>
          </div>
        </div>
       
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import _ from "lodash";
import SectionHeader from "../components/ui/SectionHeader";

const Record = 20;

export default {
  name: "PortfolioPage",
  components: {
    SectionHeader
  },
  data() {
    return {
      user: "",
      tableRows: [],
      rowCount: 0,
      initialPagePtr: 0,
      visibleNext: true,
      visiblePrev: true,
      showLoading: true,
    };
  },
  created() {
    
    this.page = this.$route.query.page;

    if(!this.page){
      this.page = 1
    }

    if(window.location.host.split(':')[0] == 'cryptoraves.space'){
      this.$ga.page("/");
    }
    this.getLeaderboard(this.page);
  },
  
  methods: {
    goNext() {
      if (this.visibleNext) {
        this.showLoading = true;
        this.getLeaderboard(this.page + 1);
      }
    },
    goPrev() {
      if (this.visiblePrev) {
        this.showLoading = true;
        this.getLeaderboard(this.page - 1);
      }
    },
    goTwitterProfile(handle){
      handle=handle.replace('@','');
      window.open('https://twitter.com/'+handle);
    },
    getLeaderboard(page) {
     
        axios
          .get(
            "https://4mjt8xbsni.execute-api.us-east-1.amazonaws.com/prod?pageType=leaderboard&page=" +
              page
          )
          .then(response => {
            // JSON responses are automatically parsed.
            let res = response.data;
            this.tableRows = _.cloneDeep(res.tableRows);
            this.rowCount = res.rowCount;
            
            this.initialPagePtr = page;
            this.visiblePrev = res.prev ? true : false;
            this.visibleNext = res.next ? true : false;
            this.showLoading = false;
          })
          .catch(e => {
            console.log(e);
          });
      
    },
    goPortfolio(user) {
      this.$root.$emit("changeUser", user);
      this.$router.push({ name: "PortfolioPage", query: { user: user } });
    },
   
  }
};
</script>
<style scoped>
.portfolio-title {
  position: relative;
}
.portfolio-subtitle {
  color: rgb(0, 38, 101);
  font-family: "Montserrat";
  text-align: center;
  line-height: 2em;
}
.portfolio-subtitle-details {
  margin-top: 20px;
  color: rgb(0, 38, 101);
  font-family: "Montserrat";
  text-align: center;
  line-height: 1.2em;
}
.portfolio-subtitle-holding {
  display: flex;
  margin-top: 100px;
  margin-bottom: -90px;
  color: rgb(0, 38, 101);
  font-family: "Montserrat";
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
  font-family: "Montserrat";
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
  font-family: "Montserrat";
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
