<template>
    <div class="about-us" id="about">
        <div class="container mt-5">
            <div class="row">
                <div class="col-lg-6 text-center gr-2">
                    <h2 class="container__about-heading">ABOUT US</h2>
                    <p class="container__sub-about">We're a chat application that allows you to talk to your friends, 
                    family, and anyone else you want to talk to from anywhere at any time. 
                    You can send messages, photos, videos, or whatever else you want!

                    You can use this app on your phone as well as from your computer.<br>
                    There's no need to install anything—you can just sign up and start chatting!
                    </p>
                </div>

                
                <div class="col-lg-6">
                    <img class="container__img text-center" src="../assets/about-img.png" alt="head">
                </div>
            </div>
        </div>
    </div>

    <div class="feature">
        <div class="container p-4 bg-opacity-50">
            <h2 class=" container__feature-heading text-center">WE ARE THE BEST SOLUTION FOR YOUR COMMUNICATION</h2>
            <p class="container__feature-subHeading text-center">There are already more than 3 MILLION users around the world!</p>
            <div class="row">
                <div class="col-lg-4 text-center">
                    <img class="container__feat-img" src="../assets/feat1.png" alt="head">
                    <h4 class="container__feat-subName text-center">FREE PREMIUM FEATURES</h4>
                    <p class="mt-3">We want to make sure you have everything you need on your phone and with our chat app, 
                        you can now enjoy it completely free.</p>
                </div>
                <div class="col-lg-4 text-center">
                    <img class="container__feat-img" src="../assets/feat2.png" alt="head">
                    <h4 class="container__feat-subName">REAL-TIME PUSH MESSAGE</h4>
                    <p class="mt-3">You can send messages to your friends and they can respond instantly. 
                        It's like texting, but even easier!</p>
                </div>
                <div class="col-lg-4 text-center">
                    <img class="container__feat-img" src="../assets/feat3.png" alt="head">
                    <h4 class="container__feat-subName">EASY TO USE INTERFACE</h4>
                    <p class="mt-3">The interface is simple with features that keep you in touch with family and friends, 
                        as well as find new people. </p>
                </div>
            </div>
        </div>
    </div>
    

</template>
<script>
    export default{
        name:'AboutView'
    }
</script>

<style lang="scss" scoped>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;900&family=Roboto:wght@700&display=swap');
    @import './src/styles/_variables.scss';
    @import './src/styles/_header.scss';
    @import './src/styles/style.scss';
    @import './src/styles/_buttons.scss';

.about-us{

    .container{

        &__about-heading{
            color:$secondaryColor;
            margin-top:8.5rem;
        }

        &__sub-about{
            margin-top:2.5rem;
        }

        &__img{
            height:27rem;
            width: 27rem;
            margin-top:5rem;
        }
    }
}

.feature{
    margin-top: 5rem;

    .container{
        background-color: $backGroundColor;
        border-radius: 1.5rem;
        margin-bottom: 5rem;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

        &__feature-heading{
            color:$secondaryColor;
            padding-top: 2rem;
        }

        &__feat-img{
            height: 10rem;
            width: 10rem;
            margin-top:1rem;
            border-radius: 2rem;
            filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
        }

        &__feat-subName{
            font-size: 1.5rem;
            font-weight: 600;
            margin-top:2rem;
            }
    }
}

.row{
    margin-top: 3rem;
}
</style>

