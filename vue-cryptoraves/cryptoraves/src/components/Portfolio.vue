<template>
<div>
<!--welcome area start-->
    <div class="welcome-area wow fadeInUp" id="home">
        <div class="container">
            <div class="space-90"></div>
            <div class="row">
                <div class="col-12 col-md-12 align-self-center">
                    <div class="welcome-right">                        
                        <div class="welcome-text">
                            <h1>{{user}}'s Cryptoraves Tokens</h1>
                            <!-- <h2 class="blinking">Live On Testnet Only!!! Tokens Will Be Deleted Before Alpha Launch!</h2> -->
                        </div>              
                    </div>
                </div>
            </div>
            <div class="space-90"></div>
        </div>
    </div>
    <!--welcome area end-->
    
    <!--distibution-bg start-->
    <div class="distibution-bg">
        <!---distibution area start-->
        <div class="distibution wow fadeInUp" id="token">
                <div class="container">
                    <div class="row">                       
                        <div class="col-lg-12">
                            <div class="single-about">                              
                                <div class="single-about-text">
                                    <h4>Total Cryptoraves Token Balance <b class="ml-4">{{tokenBalance | comma}}</b></h4>
                                    <p class="table-responsive">
                                        <table class="table">
                                            <thead>
                                                <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">From</th>
                                                <th scope="col">Amount</th>
                                                <th scope="col">To</th>
                                                <th scope="col">Date</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr v-for="(item,index) in tableRows" :index="index" :key="item.txnId">
                                                    <th class="link" v-on:click="goTransaction(item.txnHash)" scope="row"><b>{{item.txnHash | truncate}}</b></th>
                                                    <td class="link" v-on:click="goAnother(item.from)"><b>{{item.from}}</b></td>
                                                    <td class="link" v-on:click="goTweet(item.linkToContent)"><b>T</b></td>
                                                    <td>{{item.amount | comma}}</td>
                                                    <td class="link" v-on:click="goAnother(item.to)"><b>{{item.to}}</b></td>
                                                    <td>{{item.date}}</td>
                                                </tr>                                                                                            
                                            </tbody>
                                            <tfoot>
                                                <td colspan="5">
                                                    <span v-on:click="goPrev" class="btn btnpagination"  v-bind:class="[visiblePrev ? '' : 'disabledbtn']">
                                                        <i class="fa fa-angle-left"></i>
                                                    </span>
                                                    Page {{initialPagePtr + 1}}
                                                    <span href="#" v-on:click="goNext" class="btn btnpagination" v-bind:class="[visibleNext ? '' : 'disabledbtn']">
                                                        <i class="fa fa-angle-right"></i>
                                                    </span> 
                                                </td>
                                            </tfoot>
                                        </table>                                       
                                    </p>
                                </div>                               
                            </div>
                        </div>
                    </div>                  
                </div>
                <div class="space-90"></div>
        </div>
        <!---distibution area end-->
    </div>
    <!--distibution-bg end-->
</div>
</template>

<script>
import axios from 'axios';
import _ from 'lodash';

const Record = 20;

export default {
    name: 'Portfolio',
    data() {
        return {
            user: '',
            tableRows: [],           
            rowCount: 0,
            tokenBalance: "0",
            earliestDatetime: '',
            latestDatetime: '',
            initialPagePtr: 0,           
            visibleNext: true,
            visiblePrev: true
        }
    },
    created() {
        this.user = this.$route.query.user;
        this.getPortfolio(this.user, 0);
    },
    beforeRouteUpdate (to, from, next) {
    // just use `this`
        this.user = to.query.user;
        this.getPortfolio(this.user, 0);
        next()
    },
    methods: {
        goNext(){
            if(this.visibleNext){
                this.getPortfolio(this.user, 1);
            }
        },
        goPrev(){
            if(this.visiblePrev){
                this.getPortfolio(this.user, 2);
            }
        },
        getPortfolio(user, initFlag){
            if(initFlag == 0){
                axios.get('https://4mjt8xbsni.execute-api.us-east-1.amazonaws.com/prod?pageType=portfolioPage&userName='+user)
                .then(response => {
                    // JSON responses are automatically parsed.        
                    this.user = user;
                    let res = response.data;
                    this.tableRows = _.cloneDeep(res.tableRows);
                    this.rowCount = res.rowCount;                   
                    this.tokenBalance = res.tokenBalance;
                    this.earliestDatetime = res.earliestDatetime;
                    this.latestDatetime = res.latestDatetime;
                    this.initialPagePtr = 0; 
                    this.visiblePrev = false;
                    this.visibleNext = res.next?true:false;  
                })
                .catch(e => {
                    console.log(e);
                })
            }
            else if(initFlag == 1){
                axios.get('https://4mjt8xbsni.execute-api.us-east-1.amazonaws.com/prod?pageType=portfolioPage&userName='+user+"&earliestDatetime="+this.earliestDatetime)
                .then(response => {
                    // JSON responses are automatically parsed.        
                    this.user = user;
                    let res = response.data;
                    this.tableRows = _.cloneDeep(res.tableRows);
                    this.rowCount = res.rowCount;                   
                    this.tokenBalance = res.tokenBalance;
                    this.latestDatetime = res.latestDatetime;
                    this.earliestDatetime = res.earliestDatetime;
                    this.initialPagePtr ++;
                    this.visiblePrev = true;
                    this.visibleNext = res.next?true:false;                                 
                })
                .catch(e => {
                    console.log(e);
                })  
            }
            else{                
                
                axios.get('https://4mjt8xbsni.execute-api.us-east-1.amazonaws.com/prod?pageType=portfolioPage&userName='+user+"&latestDatetime="+this.latestDatetime)
                .then(response => {
                    // JSON responses are automatically parsed.        
                    this.user = user;
                    let res = response.data;
                    this.tableRows = _.cloneDeep(res.tableRows);
                    this.rowCount = res.rowCount;          
                    this.tokenBalance = res.tokenBalance;
                    this.latestDatetime = res.latestDatetime;
                    this.earliestDatetime = res.earliestDatetime;
                    this.initialPagePtr --;
                    this.visiblePrev = (res.prev&&this.initialPagePtr>0)?true:false;
                    this.visibleNext = true;
                })
                .catch(e => {
                    console.log(e);
                })  
                              
            }
                     
        },
        goAnother(user){            
            this.$parent.$emit('changeUser', user);
            this.$router.push({
                name: 'Portfolio',
                query: {
                    user: user
                }
            })
        },
        goTweet(link){
            window.open(link);
        },
        goTransaction(txnHash){
            this.$parent.$emit('changeUser', txnHash);
            this.$router.push({ name: 'Confirmation', query: { txnId: txnHash }})
        }
    } 
}
</script>

