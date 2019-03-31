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
                            <h1>Cryptoraves Alpha-Launch FAQ & Reference</h1>                            
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
        <div class="distibution wow fadeInUp">
            <div class="container">
                <div class="row">                       
                    <div class="col-lg-12 mt-4">
                        <div class="single-about">                               
                            <div class="single-about-text">
                                <h4>How do I check my cryptoraves transactions on the blockchain?</h4>
                                <p class="text-left">
                                    Cryptoraves uses Loom PlasmaChain, a Layer 2 solution built on the Ethereum blockchain.
                                    The Loom Block Explorer does allow verification of your transactions, but it takes multiple steps.<br/>
                                    <b>1.</b>	Go to the transaction confirmation page on the <u v-on:click="goHome" class="link">cryptoraves website.</u><br/> 
                                    <b>2.</b>	Copy the Block Number displayed on the confirmation page to your clipboard.<br/>
                                    <b>3.</b>	Click the block number hyperlink to the Loom Block Explorer, and paste the block number into the Loom Block Explorer search field.<br/>  
                                    <b>4.</b>	In the pop-up window, click on the Hash (please note, this does not match the Hash on cryptoraves website).<br/>
                                    <b>5.</b>	Ctrl-F search for the Transaction Hash displayed on the cryptoraves confirmation page within those results.
                                </p>                                
                            </div>
                        </div>
                    </div>
                </div> 
                <div class="row">
                    <div class="col-lg-12 mt-4">
                        <div class="single-about">                             
                            <div class="single-about-text">
                                <h4>What is the cryptoraves Privacy Policy?</h4>
                                <p class="text-left">                                        
                                    By Tweeting:  @cryptoraves #makeitrave, or by Tweeting any command request tagging @cryptoraves, <br/>
                                    you agree to our Privacy Policy, as follows:<br/>
                                    ●	The cryptoraves platform public,
                                    and token transactions requested by our users are immediately viewable and searchable on our website.<br/>
                                    ●	Cryptoraves collects information contained in Tweets when @cryptoraves is tagged.
                                    We collect the Tweeter’s @userhandle, the token amounts specified for transfer,
                                    the @userhandle of the token recipient, and number of followers for both users.<br/>
                                    We use this information to execute the request, either by sending cryptoraves tokens directly to you,
                                    or by sending your cryptoraves tokens to the indicated recipient.<br/>
                                    We display the information derived from these Tweets on our website in the form of transaction-level details,
                                    user-level details (including token portfolios), and Leaderboard statistics.<br/>
                                    ●	If you have any questions about how your data is being used, please email us at <b>info@cryptoraves.space.</b> 
                                    It may take us 3-5 days to respond to requests. 

                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12 mt-4">
                        <div class="single-about">                             
                            <div class="single-about-text">
                                <h4>What are the cryptoraves Terms of Service?</h4>
                                <p class="text-left">                                        
                                    By Tweeting:  @cryptoraves #makeitrave, or by Tweeting any command request tagging @cryptoraves, you agree to our Terms of Service, as follows:<br/>
                                    ●	You must comply with Twitter policies at all times.<br/>
                                    ●	Tweet commands can not be reversed once they are requested.<br/>
                                    ●	Please follow common sense, courtesy, and respect for others.<br/> 
                                    If your intentions seem to be of ill will or to cause harm, we will suspend your account.<br/>  
                                    This is at the discretion of cryptoraves, LLC.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12 mt-4">
                        <div class="single-about">                             
                            <div class="single-about-text">
                                <h4>How do I opt out of Auto-Replies?</h4>
                                <p class="text-left">                                        
                                    Please email your Twitter handle to <b>info@cryptoraves.space</b>.
                                    Send us an email entitled:  
                                    Opt Out of Auto Replies.<br/>
                                    It may take 3-5 days to respond to your request.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12 mt-4">
                        <div class="single-about">                             
                            <div class="single-about-text">
                                <h4>What if I have additional questions?</h4>
                                <p class="text-left">                                        
                                    You can email us at <b>info@cryptoraves.space</b>.
                                    It may take us 3-5 days to respond to requests.  
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

export default {
    name: 'Faq',    
    methods: {        
        goHome(){
            window.open("https://cryptoraves.space");            
        }     
    } 
}
</script>

