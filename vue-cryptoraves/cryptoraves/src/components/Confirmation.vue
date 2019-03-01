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
                                        <h6 class="d-flex d-space">
                                            <span>Transaction information</span>                                                                            
                                        </h6>                                    
                                        <p>
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
                                                        <td v-on:click="goAnother(item.from)"><b>{{item.from}}</b></td>
                                                        <td>{{item.amount}}</td>
                                                        <td v-on:click="goAnother(item.to)"><b>{{item.to}}</b></td>
                                                        <td>{{item.date}}</td>
                                                    </tr>                                                                                            
                                                </tbody>
                                            </table>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div> 
                        
                        <div class="row">
                            <div class="col-12 col-md-12 align-self-center">
                                <div class="welcome-right">                        
                                    <div class="welcome-text">
                                        <h4 class="mt-4">Transaction ID# {{txnId}}</h4>
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
          tableRows: [],
        }
    },
    created() {
        this.txnId = this.$route.query.txnId;
        this.getTransaction(this.txnId);
    },
    methods: {
        getTransaction(txnId){
            // axios.get('https://4mjt8xbsni.execute-api.us-east-1.amazonaws.com/prod?pageType=confirmationPage&txnId='+txnId)
            // .then(response => {
            //     // JSON responses are automatically parsed.        
            //     console.log(response);
            // })
            // .catch(e => {
            //     this.errors.push(e)
            // })            
            let response = '{"tableRows": [{"txnId": "ce060dd7-8e9f-4c40-a4c8-b68cd0cf9678", "from": "@bp84392506", "amount": "21", "to": "@ShannonPlasters", "status": "SUCCESS!", "txn_hash": "0xa2b157374bd9cd267174d59c69382528e80f6264e643ed9f632da4ae49f17015", "message": null, "date": "2019-03-01 18:03:22"}]}';
            let res = JSON.parse(response);
            this.tableRows = res.tableRows;
        },
        goAnother(user){
            this.$router.push({ name: 'Portfolio', query: { user: user }})
        }
    }
}
</script>