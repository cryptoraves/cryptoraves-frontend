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
                            <h4>Get free tokens. Share without fees.
                            <br>Add value to your online cred.</h4>
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
                                    <h4>Total Cryptoraves Token Balance <b class="ml-4">{{tokenBalance}}</b></h4>
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
                                                    <td>{{item.amount}}</td>
                                                    <td class="link" v-on:click="goAnother(item.to)"><b>{{item.to}}</b></td>
                                                    <td>{{item.date}}</td>
                                                </tr>                                                                                            
                                            </tbody>
                                            <tfoot>
                                                <td colspan="5">
                                                    <span v-on:click="goPrev" class="btn btnpagination"  v-bind:class="[validated==1 ? 'disabledbtn' : '']">
                                                        <i class="fa fa-angle-left"></i>
                                                    </span>
                                                    {{initialPagePtr + 1}} Page of {{totalPage + 1}}
                                                    <span href="#" v-on:click="goNext" class="btn btnpagination" v-bind:class="[validated==2 ? 'disabledbtn' : '']">
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

const Record = 5;

export default {
    name: 'Portfolio',
    data() {
        return {
            user: '',
            tableRows: [],
            initialTableRows: [],
            rowCount: 0,
            tokenBalance: "0",
            earliestDatetime: '',
            initialPagePtr: 0,
            totalPage: 0,
            validated: 0
        }
    },
    created() {
        this.user = this.$route.query.user;
        this.getPortfolio(this.user);
    },
    beforeRouteUpdate (to, from, next) {
    // just use `this`
        this.user = to.query.user;
        this.getPortfolio(this.user);
        next()
    },
    methods: {
        goNext(){
            this.initialPagePtr ++;
            this.initialPagePtr = this.initialPagePtr>this.totalPage?this.totalPage:this.initialPagePtr;            
            let testArray = _.cloneDeep(this.initialTableRows);           
            this.tableRows = _.slice(testArray, this.initialPagePtr * Record, (this.initialPagePtr + 1) * Record);
            this.validated = this.initialPagePtr == this.totalPage? 2: 0;
        },
        goPrev(){
            this.initialPagePtr --;
            this.initialPagePtr = this.initialPagePtr<0?0:this.initialPagePtr;
            let testArray = _.cloneDeep(this.initialTableRows);           
            this.tableRows = _.slice(testArray, this.initialPagePtr * Record, (this.initialPagePtr + 1) * Record);
            this.validated = this.initialPagePtr == 0? 1: 0;
        },
        getPortfolio(user){
            axios.get('https://4mjt8xbsni.execute-api.us-east-1.amazonaws.com/prod?pageType=portfolioPage&userName='+user)
            .then(response => {
                // JSON responses are automatically parsed.        
                this.user = user;
                let res = response.data;
                this.initialTableRows = res.tableRows;                
                this.rowCount = res.rowCount;
                this.totalPage = Math.floor(this.rowCount/Record);
                this.tokenBalance = res.tokenBalance;
                this.earliestDatetime = res.earliestDatetime;
                var testArray = _.cloneDeep(this.initialTableRows);
                this.tableRows = testArray.slice(0, Record);
                this.validated = 1;
            })
            .catch(e => {
                console.log(e);
            })           
        },
        goAnother(user){
            this.getPortfolio(user);
        },
        goTransaction(txnHash){
            this.$router.push({ name: 'Confirmation', query: { txnId: txnHash }})
        }       
    } 
}
</script>

