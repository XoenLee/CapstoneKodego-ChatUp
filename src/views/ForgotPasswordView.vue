<template>
    <div class="forgotPass">
    <div class="container">
        <div class="row">
            <div class="container__img-section col-lg-7 d-none d-lg-block gx-5">
                <img class="container__forgot-img text-center" src="../assets/forgot-img.png" alt="">
            </div>
            <!-- Form -->
            <div class="container__form-section col-lg-5 mt-5 gx-5 py-5">
                <div class="form justify-content-center">
                    <h2 class="container__forgot-heading text-center mb-3">FORGOT PASSWORD?</h2>
                    <p class="text-center mb-3"> You can reset your password using this form.</p>
                    <div class="d-flex flex-row align-items-center mb-4">
                        <input type="password"  class="form-control" placeholder="new password">
                    </div>
                    <br>
                    <div class="d-flex flex-row align-items-center mb-4">
                        <input type="password"  class="form-control" placeholder="verify new password">
                    </div>
                    <br>
                    
                    <router-link to="/SignUp">
                        <button class="container__btn2 mx-0 mb-3 w-100">Submit</button>
                    </router-link>
                </div>
                <router-link to="/">
                    <p class="text-center mt-5"> Go Back to Homepage </p>
                </router-link>
            </div>
        </div>
    </div>
</div>
</template>

<script>
    export default{
        name:'ForgotPassword'
    }
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;900&family=Roboto:wght@700&display=swap');
@import './src/styles/_variables.scss';
@import './src/styles/style.scss';
@import './src/styles/_buttons.scss';

.forgotPass{
        height: 90vh;
    
    .container{

        &__forgot-img{
            height: 500px;
            width:600px;
        }

        &__btn2{
            color: aliceblue;
            background-color: $btnColor;
            border: 1px solid $btnColor;
        }

        &__form-section{
            background-color: $backGroundColor;
            border-radius: 10px;
            filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
        }
    }

    .row{
        margin-top:200px;
    }
}

</style>