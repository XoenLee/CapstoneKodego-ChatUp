<template>
<div class="sign-in">
    <div class="container py-5">
        <div class="row">
            <div class="container__img-section col-lg-7 gr-5 d-none d-lg-block">
                <img class="container__sign-img text-center" src="../assets/sign.png" alt="head">
            </div>
            <!-- Form -->
            <div class="container__form-section col-lg-5 mt-3 gx-5 py-5">
                <form class="form" @submit.prevent="Login">
                    <h2 class="container__sign-heading text-center mb-5">SIGN-IN</h2>
                    <div class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                        <input type="text" v-model="username" class="form-control" placeholder="Username">
                    </div>
                    <br>
                    <div class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                        <input type="password" v-model="password" class="form-control" placeholder="Password">
                    </div>
                    <br>
                    <p class="mt-5 text-center">Don't have an account? 
                        <router-link to="/SignUp">
                            Sign-up here
                        </router-link>
                    </p>
                    <button class="container__btn2 mx-0 mb-3 w-100">Sign In</button>
                </form>
                <div class="error" v-if="error">{{error.message}}</div>
                <div class="subtext text-center mt-5">
                    <!-- <router-link to="/Forgot">
                        <p> Forgot Password?</p>
                    </router-link> -->
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
import firebase from "firebase";

    export default {
    data() {
    return {
        email: "",
        password: "",
        username: "",
        error: ""
    };
    },
    methods: {
    Login() {
        var userName = this.username;
        var passWord = this.password;
        const db = firebase.firestore()
        db.collection("users")
        .where("username", "==", userName)
        .where("password", "==", passWord)
        .get()
        .then(async () => {
            var AUTH_KEY ='9018a57a030873ee45fe5b5549e917d60b184f10';
            var UID = userName;
            CometChat.login(UID, AUTH_KEY).then(
                        (data) => {
                            console.log(data)
                            this.$router.push({
                            name: "chat"
                        });    
                    },
                    error => {
                    console.log("Login failed with exception:", { error });    
                }
            );
        }       
        )}
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