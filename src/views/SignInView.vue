<template>
<div class="sign-in">
    <div class="container py-5">
        <div class="row">
            <div class="container__img-section col-lg-7 gr-5 d-none d-lg-block">
                <img class="container__sign-img text-center" src="../assets/sign.png" alt="head">
            </div>
<<<<<<< HEAD
            <!-- Form -->
            <div class="container__form-section col-5 mt-5 gx-5 pt-5">
=======

            <div class="container__form-section col-lg-5 mt-5 gx-5">
>>>>>>> bf54bfb0985b2481be56db7a872b2c801d64c360
                <div class="form">
                    <h2 class="container__sign-heading text-center mb-5">SIGN-IN</h2>
                <input type="email"  class="form-control" placeholder="email">
                <br>
                <input type="password"  class="form-control" placeholder="password">
                <br>
                <p class="mt-5 text-center">Don't have an account? <a href="/SignUp">Sign up here</a></p>
                <button class="container__btn2 mx-0 mb-3 w-100">Sign In</button>
                </div>
                <div class="subtext text-center mt-5">
                    <a href="">Forgot Password?</a><br>
                    <a href="/">Go Back to Homepage</a>
                </div>
            </div>
        </div>
    </div>
</div>

</template>
<script>
    export default{
        name:'SignInView'
    }
        
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