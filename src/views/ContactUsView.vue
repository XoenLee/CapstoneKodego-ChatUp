<template>
<div class="contact">
    <div class="container py-5">
        <div class="row justify-content-center">

            <div class="container__form-section col-6 mt-5 gx-5">
                <div class="form">
                    <div>
                        <h2 class="container__sign-heading text-center">CONTACT US!</h2>
                        <h4 class="container__sign-subHeading text-center mb-5">Any question or suggestion? Shoot us a message.</h4>
                    </div>
                    <div>
                        <label for="name">Name</label>
                        <input type="text"  class="form-control border-bottom" placeholder="John Doe">
                    </div>
                
                <br>
                    <div>
                        <label for="email">Email</label>
                        <input type="email"  class="form-control" placeholder="johndoe@gmail.com">
                    </div>
                <br>
                    <div class="mb-3">
                        <label for="Textarea1" class="form-label">Message</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Write your message here..."></textarea>
                    </div>
                    <div class="container__button">
                    <button class="container__btn2 mx-0 mb-3 w-100">SEND MESSAGE</button>
                    </div>

                </div>
                <!-- End of form -->
                <div class="m-3">
                    <label class="container__email-label" for="name">EMAIL US</label>
                    <p class="container__email-us border-bottom">chatup-message@gmail.com</p>
                </div>
                <div class="subtext text-center mt-5">
                    <a href="/">Go Back to Homepage</a>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
    export default{
        name:'ContactUsView'
    }
</script>



<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;900&family=Roboto:wght@700&display=swap');
    @import './src/styles/_variables.scss';
    @import './src/styles/style.scss';
    @import './src/styles/_buttons.scss';

.contact{

    @include centerEvrything();

    height:90vh;

    .container{

        &__btn2{
            color: aliceblue;
            background-color: $btnColor;
            border: 1px solid $btnColor;
        }

        &__sign-heading{
            color:$secondaryColor;
        }

        &__form{
            background-color: $backGroundColor;
        }

        &__email-label{
            color:  #999999;
        }

        &__email-us{
            color: $secondaryColor;
        }
    }
}
</style>