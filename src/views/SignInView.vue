<template>
<div class="sign-in">
    <div class="container py-5">
        <div class="row">
            <div class="container__img-section col-lg-7 gr-5 d-none d-lg-block">
                <img class="container__sign-img text-center" src="../assets/sign.png" alt="head">
            </div>
            <!-- Form -->
            <div class="container__form-section col-lg-5 mt-5 gx-5 py-5">
                <form class="form" v-on:submit.prevent="Login">
                    <h2 class="container__sign-heading text-center mb-5">SIGN-IN</h2>
                    <div class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                        <input type="text" v-model="username" class="form-control" placeholder="Username">
                    </div>
                    <br>
                    <div class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                        <input type="password"  class="form-control" placeholder="Password">
                    </div>
                    <br>
                
                    
                    <p class="mt-5 text-center">Don't have an account? 
                        <router-link to="/SignUp">
                            Sign-up here
                        </router-link>
                    </p>
                    <button class="container__btn2 mx-0 mb-3 w-100">Sign In<span v-if="showSpinner" class="fa fa-spin fa-spinner"></span></button>
                </form>
                
                <div class="subtext text-center mt-5">
                    <router-link to="/Forgot">
                        <p> Forgot Password?</p>
                    </router-link>
                    <router-link to="/">
                        <p> Go Back to Homepage</p>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</div>

</template>
<script>
import { CometChat } from "@cometchat-pro/chat";
    export default{
        name:'SignInView',
        data() {
        return {
        username: "",
        showSpinner: false
        };
    },
    methods: {
        Login() {
        var AUTH_KEY ='9018a57a030873ee45fe5b5549e917d60b184f10';
        this.showSpinner = true;
                    var user = new CometChat.User(this.username);
                    user.setName(this.username);
                    CometChat.createUser(user, AUTH_KEY).then(
                    user => {
                        console.log("user created", user);
                        this.showSpinner = false;
                        CometChat.login(this.username,AUTH_KEY).then(
                        (data) => {
                            console.log(data)
                            this.showSpinner = false;
                            this.$router.push({
                                name: "chat"
                            });
                        },
                        error => {
                            this.showSpinner = false;
                            alert("Whops. Something went wrong. This commonly happens when you enter a username that doesn't exist. Check the console for more information")
                            console.log("Login failed with error:", error.code);
                        }
                        )
                        },
                    error => {
                        console.log( error.code);    
                        this.showSpinner = false;
                        CometChat.login(this.username,AUTH_KEY).then(
                        (data) => {
                            console.log(data)
                            this.showSpinner = false;
                            this.$router.push({
                                name: "chat"
                            });
                        },
                        error => {
                            this.showSpinner = false;
                            alert("Whops. Something went wrong. This commonly happens when you enter a username that doesn't exist. Check the console for more information")
                            console.log("Login failed with error:", error.code);
                        }
                        )
                    }
                    )                
                }
                
    }
    };
        
</script>



<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;900&family=Roboto:wght@700&display=swap');
@import './src/styles/_variables.scss';
@import './src/styles/style.scss';
@import './src/styles/_buttons.scss';

.sign-in{

    @include centerEvrything();

    .container{

        &__sign-img{
            width: 100%;
            margin-right: 5rem;
        }

        &__btn2{
            color: aliceblue;
            background-color: $btnColor;
            border: 1px solid $btnColor;
        }

        &__sign-heading{
            color:$secondaryColor;
        }

        &__form-section{
            background-color: $backGroundColor;
            border-radius: 10px;
            filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
        }
    }
}
</style>