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
                                    <h4>What are cryptoraves tokens?</h4>
                                    <div class="text-left">
                                        It’s crypto you can Tweet! You can share your tokens for free to grow your online cred.
                                        Social media users like you spend a lot of time online,
                                        but you don’t have a way to capitalize on the value you are creating.
                                        Sharing cryptoraves tokens empowers you to increase your social credibility, and <u v-on:click="goHome" class="link">reap the benefits of a tokenized economy.</u>
                                        <br /><br />Request your tokens by Tweeting: @cryptoraves #makeitrave
                                        <br /><br />Share them for free!
                                        <br /><br />
                                        <div class="text-left spot">●<div>This Tweet shares 2000 tokens with @Alice: @cryptoraves 2000 @Alice</div>
                                        </div>
                                        <div class="text-left spot">●<div>This Tweet reply shares 2000 tokens with the OP: @cryptoraves 2000</div>
                                        </div><br />
                                        Sharing your tokens creates social value amongst your network and connections.
                                        You can view your portfolio of tokens, and freely share tokens with those you deem worthy.
                                        This allows you to experience and participate in a real tokenized economy, possible only through blockchain technology.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-12 mt-4">
                            <div class="single-about">
                                <div class="single-about-text">
                                    <h4>How do I check my cryptoraves transactions on the blockchain?</h4>
                                    <div class="text-left">
                                        Cryptoraves uses Loom PlasmaChain, a Layer 2 solution built on the Ethereum blockchain.
                                        The Loom Block Explorer does allow verification of your transactions, but it takes multiple steps.<br /><br />
                                        
                                        <div class="text-left spot">
                                            <b>1.</b>
                                            <div>Go to the transaction confirmation page on the <u v-on:click="goHome" class="link">cryptoraves website.</u></div>
                                        </div>
                                        <div class="text-left spot"><b>2.</b><div>Copy the Block Number displayed on the confirmation page to your clipboard.</div></div>
                                        <div class="text-left spot"><b>3.</b><div>Click the block number hyperlink to the Loom Block Explorer,
                                        and paste the block number into the Loom Block Explorer search field.</div></div>
                                        <div class="text-left spot"><b>4.</b><div>In the pop-up window, click on the Hash (please note, this does not match the Hash on cryptoraves website).</div></div>
                                        <div class="text-left spot"><b>5.</b><div>Ctrl-F search for the Transaction Hash displayed on the cryptoraves confirmation page within those results.</div></div>                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-12 mt-4">
                            <div class="single-about" id="faq">
                                <div class="single-about-text">
                                    <h4>What is the cryptoraves Privacy Policy?</h4>
                                    <div class="text-left">
                                        By Tweeting: @cryptoraves #makeitrave, or by Tweeting any command request tagging @cryptoraves,
                                        you agree to our Privacy Policy, as follows:
                                        <br /><br />
                                        <div class="text-left spot">●
                                            <div>The cryptoraves platform is public, and token transactions requested by our users are immediately viewable and searchable on our website.
                                            </div>
                                        </div>
                                        <div class="text-left spot">●
                                            <div>Cryptoraves collects information contained in Tweets when @cryptoraves is tagged.
                                                We collect the Tweeter’s @userhandle, the token amounts specified for transfer,
                                                the @userhandle of the token recipient, and number of followers for both users.
                                                We use this information to execute the request, either by sending cryptoraves tokens directly to you,
                                                or by sending your cryptoraves tokens to the indicated recipient.
                                                We display the information derived from these Tweets on our website in the form of transaction-level details,
                                                user-level details (including token portfolios), and Leaderboard statistics.
                                            </div>
                                        </div>
                                        <div class="text-left spot">●
                                            <div>If you have any questions about how your data is being used,
                                                please email us at info@cryptoraves.space. It may take us 3–5 days to respond to requests.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-12 mt-4">
                            <div class="single-about">
                                <div class="single-about-text">
                                    <h4>What are the cryptoraves Terms of Service?</h4>
                                    <div class="text-left">
                                        By Tweeting: @cryptoraves #makeitrave, or by Tweeting any command request tagging @cryptoraves,
                                        you agree to our Terms of Service, as follows:
                                        <br /><br />
                                        <div class="text-left spot">●
                                            <div>You must comply with Twitter policies at all times.</div>
                                        </div>
                                        <div class="text-left spot">●<div>Tweet commands can not be reversed once they are requested.</div>
                                        </div>
                                        <div class="text-left spot">●<div>Please follow common sense, courtesy, and respect for others.
                                                If your intentions seem to be of ill will or to cause harm, we will suspend your account.
                                                This is at the discretion of cryptoraves, LLC.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-12 mt-4">
                            <div class="single-about">
                                <div class="single-about-text">
                                    <h4>How do I opt out of Auto-Replies?</h4>
                                    <div class="text-left">
                                        Please email your Twitter handle to <b>info@cryptoraves.space</b>.
                                        Send us an email entitled: Opt Out of Auto Replies. It may take 3–5 days to respond to your request.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-12 mt-4">
                            <div class="single-about">
                                <div class="single-about-text">
                                    <h4>What if I have additional questions?</h4>
                                    <div class="text-left">
                                        You can email us at <b>info@cryptoraves.space</b>. It may take us 3–5 days to respond to requests.
                                    </div>
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
        mounted: function() {
            this.$nextTick(function() {
                if (!this.$route.query.top)
                    window.scrollTo(0, this.getOffsetLeft(document.getElementById("faq")) - 150);
                else
                    window.scrollTo(0, 0);
            })
        },
        methods: {
            goHome() {
                window.open("https://cryptoraves.space");
            },
            getOffsetLeft(elem) {
                var offsetLeft = 0;
                do {
                    if (!isNaN(elem.offsetTop)) {
                        offsetLeft += elem.offsetTop;
                    }
                } while (elem = elem.offsetParent);
                return offsetLeft;
            }
        }
    }
</script>