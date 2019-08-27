<template>
    <div>
        <!--welcome area start-->
        <div class="welcome-area wow fadeInUp" id="home">
            <div class="container">
                <div class="space-90"></div>
                <div class="row">
                    <div class="col-12 col-md-12 align-self-center">
                        <div class="welcome-right">                        
                            <div id="hoverEl" class="welcome-text">
                                <h1>It's Crypto You Can Tweet!</h1>
                                <!-- <h2 class="blinking">Live On Testnet Only!!! Tokens Will Be Deleted Before Alpha Launch!</h2> -->
                                <h2>Transaction Confirmed.</h2>
                                <table @mouseover="mouseOver" class="table" style="border: none"><td style="border: none" class="link" v-on:click="goBlock()"><b><h4>{{txnID}}</h4></b></td></table>
                                 <p v-show="active">Click to see on block explorer</p>
                                
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
                                        <p class="table-responsive">
                                            <table class="table">
                                                <thead>
                                                    <tr>                                                    
                                                        <th scope="col">From</th>
                                                        <th scope="col">Link To Tweet</th>
                                                        <th scope="col">Amount</th>
                                                        <th scope="col">To</th>
                                                        
                                                        <th scope="col">Date</th>
                                                    </tr>
                                                </thead>
                                                 <tbody>
                                                    <tr v-for="item in tableRows" :key="item.txnId">                                                       
                                                        <td class="link" v-on:click="goAnother(item.from)"><b>{{item.from}}</b></td>
                                                        <td class="link" v-on:click="goTweet(item.linkToContent)"><img v-bind:src="'/static/img/twittersmall.png'" /> </td>
                                                        <td>{{item.amount | comma}}</td>
                                                        <td class="link" v-on:click="goAnother(item.to)"><b>{{item.to}}</b></td>
                                                        
                                                        <td>{{item.date}}</td>
                                                    </tr>                                                                                            
                                                </tbody>
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

export default {
    name: 'Portfolio',
    data() {
        return {            
          txnId: '',
          txnID: '',
          tableRows: [],
        }
    },
    created() {
        this.txnId = this.$route.query.txnId;

        this.$ga.page('/')
        
        this.getTransaction(this.txnId);
    },
    methods: {
        getTransaction(txnId){
            axios.get('https://4mjt8xbsni.execute-api.us-east-1.amazonaws.com/prod?pageType=confirmationPage&txnHash='+txnId)
            .then(response => {
                // JSON responses are automatically parsed.
                let res = response.data;
                console.log(res);
                this.tableRows = res.tableRows;
                this.txnID = this.tableRows[0].txn_hash;
            })
            .catch(e => {
                console.log(e);
            })
        },
        goAnother(user){
            this.$parent.$emit('changeUser', user);
            this.$router.push({ name: 'Portfolio', query: { user: user }})
        },
        goBlock(){
            window.open("https://loom-blockexplorer.dappchains.com/tx/"+this.$route.query.txnId);
        },
        goTweet(link){
            window.open(link);
        }
    }
}
var demo = new Vue({
    el: '#hoverEl',
    data: {
        active: false
    },
    methods: {
        mouseOver: function(){
            this.active = !this.active;   
        }
    }
});
</script>