<template>
    <div class="pageNotfound my-5">
        <div class="container text-center mt-3">
            <div class="row justify-content-center">
                <div class="col">
                        <img class="container__404-img mb-5" src="../assets/404.png" alt="head">
                        <h2 class="container__404-heading text-center pt-5">Oops! Looks Like Something Wrong!</h2>

                        <router-link to="/">
                        <button class="container__btn2">Go Back</button>
                        </router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        name:'PageNotFound'
    }
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;900&family=Roboto:wght@700&display=swap');
@import './src/styles/_variables.scss';
@import './src/styles/style.scss';
@import './src/styles/_buttons.scss';

.pageNotfound{

    .container{

        &__404-img{
            height: 700px;
            width: 800px;
        }

        &____404-heading{
            color: $secondaryColor;
        }

        &__btn2 {
            font-size: large;
            color: aliceblue;
            background-color: $btnColor;
        }
    }
}

</style>

