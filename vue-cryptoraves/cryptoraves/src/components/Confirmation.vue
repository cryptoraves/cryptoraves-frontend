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
                                <h1>It's Crypto You Can Tweet!</h1>
                                <h4>Get free tokens. Share without fees.
                                <br>Add value to your online cred.</h4>
                                <h2>Transaction Confirmed.</h2>
                                <h4>{{txnID}}</h4>
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
                                                        <th scope="col">Amount</th>
                                                        <th scope="col">To</th>
                                                        <th scope="col">Date</th>
                                                    </tr>
                                                </thead>
                                                 <tbody>
                                                    <tr v-for="item in tableRows" :key="item.txnId">                                                       
                                                        <td class="link" v-on:click="goAnother(item.from)"><b>{{item.from}}</b></td>
                                                        <td>{{item.amount}}</td>
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
        this.getTransaction(this.txnId);
    },
    methods: {
        getTransaction(txnId){
            axios.get('https://4mjt8xbsni.execute-api.us-east-1.amazonaws.com/prod?pageType=confirmationPage&txnHash='+txnId)
            .then(response => {
                // JSON responses are automatically parsed.
                let res = response.data;
                this.tableRows = res.tableRows;
                this.txnID = this.tableRows[0].txn_hash;
            })
            .catch(e => {
                console.log(e);
            })
        },
        goAnother(user){
            this.$router.push({ name: 'Portfolio', query: { user: user }})
        }
    }
}
</script>