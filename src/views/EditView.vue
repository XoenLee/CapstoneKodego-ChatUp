<template>
<div class="update-user">
<div class="container py-5">
    <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-lg-12 col-xl-11">
            <div class="card text-black" style="border-radius: 25px;">
                <div class="container__card-body p-md-5">
                    <div class="row justify-content-center">
                        <div class="col-md-10 col-lg-6 col-xl-6 order-2 order-lg-1">

                            <h2 class="container__sign-heading text-center pt-5">SIGN-UP!</h2>
                            <h4 class="container__sign-subHeading text-center mb-5 mt-3">Create an account, it’s Free</h4>

                            <form class="mx-1 mx-md-4" @submit.prevent="update">

                            <div class="d-flex flex-row align-items-center mb-4">
                            <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                                <div class="form-outline flex-fill mb-0">
                                    <input type="text" id="form3Example1c" class="form-control" placeholder="Your Full Name" v-model="form.name" />
                                    <!-- <label class="form-label" for="form3Example1c">Your Name</label> -->
                                </div>
                            </div>

                            <div class="d-flex flex-row align-items-center mb-4">
                            <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                <div class="form-outline flex-fill mb-0">
                                    <input type="text" id="form3Example2c" class="form-control" placeholder="Username" v-model="form.username" />
                                    <!-- <label class="form-label" for="form3Example3c">Your Username</label> -->
                                </div>
                            </div>

                            <div class="d-flex flex-row align-items-center mb-4">
                            <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                <div class="form-outline flex-fill mb-0">
                                    <input type="email" id="form3Example3c" class="form-control" placeholder="Email" v-model="form.email" />
                                    <!-- <label class="form-label" for="form3Example3c">Your Email</label> -->
                                </div>
                            </div>

                            <div class="d-flex flex-row align-items-center mb-4">
                            <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                                <div class="form-outline flex-fill mb-0">
                                    <input type="password" id="form3Example4c" class="form-control" placeholder="Password" v-model="form.password" />
                                    <!-- <label class="form-label" for="form3Example4c">Password</label> -->
                                </div>
                            </div>

                            <div class="d-flex flex-row align-items-center mb-4">
                            <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                                <div class="form-outline flex-fill mb-0">
                                    <input type="password" id="form3Example4cd" class="form-control" placeholder="Repeat Password"/>
                                    <!-- <label class="form-label" for="form3Example4cd">Repeat your password</label> -->
                                </div>
                            </div>

                            <div class="form-check justify-content-center mb-5">
                                <input class="form-check-input" type="checkbox" value="" id="form2Example3c" />
                                <label class="form-check-label" for="form2Example3">
                                I agree all statements in Terms of service
                                </label>
                            </div>

                            <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                <button class="container__btn2 mx-0 mb-3 w-100" type="submit" >Register</button>
                            </div>

                        </form>

                        </div>
                        <div class="col-md-10 col-lg-6 col-xl-6 d-flex align-items-center order-1 order-lg-2">
                            <img class="container__signUp-img text-center mb-5" src="../assets/signUp-img.png" alt="head">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>


</template>
<script>
    import { createUser } from '../firebase/config'
    import { reactive } from 'vue'

    export default{
        name:'SignUpView',
        setup() {
            const form = reactive({ name: '', username: '', email: '', password: ''})

            const onSubmit = async () => {
                await createUser({ ...form })
                form.name = ''
                form.username = ''
                form.email = ''
                form.password = ''
            }

            return { form, onSubmit }
        }
    }

</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;900&family=Roboto:wght@700&display=swap');
@import './src/styles/_variables.scss';
@import './src/styles/style.scss';
@import './src/styles/_buttons.scss';

.sign-up{
    

    .container{

        &__card-body{
            background-color: $backGroundColor;
            border-radius: 10px;
        }

        &__sign-heading{
            color:$secondaryColor
        }

        &__signUp-img{
            width: 100%;
            margin-left: 5px;
            margin-right: 5px;
        }

        &__btn2 {
            font-size: large;
            color: aliceblue;
            background-color: $btnColor;
        }

        
    }
}

</style>