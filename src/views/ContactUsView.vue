<template>
<div class="contact">
    <div class="container my-5">
            <div class="row">
                <div class="contact col-lg-6 my-3 gx-5 py-5">
                    <img class="container__contact-img text-center mb-5" src="../assets/contact-image.png" alt="head">
                </div>
                <div class="container__form-section col-lg-6 my-5 gx-5 py-5">
                    <div class="form" >
                    <form  @submit.prevent="handleSubmit">

                        <div>
                            <h2 class="container__sign-heading text-center">CONTACT US!</h2>
                            <h5 class="container__sign-subHeading text-center mb-5">Any question or suggestion? Shoot us a message.</h5>
                        </div>
                        <div>
                            <label for="name">Name</label>
                            <input type="text"  class="form-control border-bottom" placeholder="John Doe" v-model="name">
                        </div>
                    
                    <br>
                        <div>
                            <label for="email">Email</label>
                            <input type="email"  class="form-control" placeholder="johndoe@gmail.com"  v-model="email">
                        </div>
                    <br>
                        <div class="mb-3">
                            <label for="Textarea" class="form-label">Message</label>
                            <textarea class="form-control" id="FormControlTextarea" rows="5" placeholder="Write your message here..."  v-model="message"></textarea>
                        </div>
                        <div class="container__button"  >
                        <button class="container__btn2 mx-0 mb-3 w-100" type="submit">SEND MESSAGE</button>
                        </div>
                </form>
                </div>
                <!-- End of form -->
                <div class="m-3 text-center">
                    <label class="container__email-label" for="name">EMAIL US</label>
                    <p class="container__email-us border-bottom">chatup-message@gmail.com</p>
                </div>
                <router-link to="/">
                    <p class="text-center mt-5" > Go Back to Homepage </p>
                </router-link>
                
            </div>
            


        </div>
    </div>
</div>
</template>

<script>
import {projectFirestore} from '../firebase/config'
    export default{
 data() {
    return {
        name: '',
        email: '',
        message: ''
    }
},
 methods: {
  handleSubmit() {
    let userMessage = {
      name: this.name,
      email: this.email,
      message: this.message
    }

    projectFirestore.collection('userMessages').add(userMessage)
        }
    }
    }
</script>



<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;900&family=Roboto:wght@700&display=swap');
@import './src/styles/_variables.scss';
@import './src/styles/style.scss';
@import './src/styles/_buttons.scss';

.contact{

    @include centerEvrything();

    .container{

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

        &__email-label{
            color:  $secondaryColor;
        }

        &__contact-img{
            height: 500px;
            width: 500px;
        }

        &__email-us{
            color: $secondaryColor;
        }
    }
}
</style>
