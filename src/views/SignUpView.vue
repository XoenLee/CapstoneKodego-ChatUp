<template>
<div class="sign-up">
<div class="container py-5">
    <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-lg-12 col-xl-11">
            <div class="card text-black" style="border-radius: 25px;">
                <div class="container__card-body p-md-5">
                    <div class="row justify-content-center">
                        <div class="col-md-10 col-lg-6 col-xl-6 order-2 order-lg-1">

                            <h2 class="container__sign-heading text-center pt-5">SIGN-UP!</h2>
                            <h4 class="container__sign-subHeading text-center mb-5 mt-3">Create an account, it’s Free</h4>

                            <form class="mx-1 mx-md-4" @submit.prevent="createchatuser(); onSubmit(); pressed(); submitForm()">

                            <div class="d-flex flex-row align-items-center mb-4">
                                <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                                <div class="form-outline flex-fill mb-0">
                                    <input type="text" id="form3Example1c" class="form-control" placeholder="Your Full Name" v-model="form.name" />
                                </div>
                            </div>

                            <div class="d-flex flex-row align-items-center mb-4">
                                <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                <div class="form-outline flex-fill mb-0">
                                    <input type="text" id="form3Example2c" class="form-control" placeholder="Username" v-model="form.username" />
                                </div>
                            </div>

                            <div class="d-flex flex-row align-items-center mb-4">
                                <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                <div class="form-outline flex-fill mb-0">
                                    <input type="email" id="form3Example3c" class="form-control" placeholder="Email" v-model="form.email" />
                                </div>
                            </div>

                            <div class="d-flex flex-row align-items-center mb-4">
                                <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                                <div class="form-outline flex-fill mb-0">
                                    <input type="password" id="form3Example4c" class="form-control" placeholder="Password" v-model="form.password" />
                                </div>
                            </div>

                            <div class="d-flex flex-row align-items-center mb-4">
                                <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                                <div class="form-outline flex-fill mb-0">
                                    <input type="password" id="form3Example4cd" class="form-control" placeholder="Repeat Password" v-model="form.passwordConfirm" />
                                </div>
                            </div>

                            <div class="d-flex flex-row align-items-center mb-4">
                                <i class="fa-solid fa-mars-and-venus fa-lg me-3 fa-fw"></i>
                                <select class="container__form-select form-select-sm flex-fill mb-0 ">
                                    <option selected>Gender</option>
                                    <option value="1">Female</option>
                                    <option value="2">Male</option>
                                </select>
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

                        <div class="error" v-if="error">{{error.message}}</div>
                            

                        

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
    import { reactive} from 'vue'
    import { CometChat } from "@cometchat-pro/chat";
    import firebase from 'firebase';
    import "firebase/auth";
    import useVuelidate from "@vuelidate/core"
    import {required, email} from "@vuelidate/validators"

    export default{
        name:'SignUpView',
        setup() {
            const form = reactive({ email: '', password: '', passwordConfirm: '', username: '', name: ''})
            const onSubmit = async () => {
                await createUser({ ...form })
                form.email = ''
                form.password = ''
                form.username = ''
                form.name = ''
            }
            return { v$:useVuelidate(), form, onSubmit }
        },
        validations(){
        return{
            form: {
                password: {required},
                confirm: {required},
                name: {required},
                username: {required},
                email: {required, email},
            },
            }
        },
        methods:{
            submitForm(){
                this.v$.$validate()
                if (!this.v$.$error) {
                    alert('Form successfully submitted')
                }else{
                    alert('Form failed validation')
                }
            },
            pressed() {
            firebase
                .auth()
                .createUserWithEmailAndPassword(this.form.email, this.form.password)
                .then(() => {
                console.log("Successfully Registered!");
                })
                .catch(error => (this.error = error));
            },

            createchatuser() {
            let AUTH_KEY='9018a57a030873ee45fe5b5549e917d60b184f10';
            var UID = this.form.username;
            var name = this.form.name;

            var user = new CometChat.User(UID);
                user.setName(name);

            CometChat.createUser(user, AUTH_KEY).then(
            user => {
                console.log("user created", user);
                    this.$router.push({
                        name: "SignIn"
                    })
            },error => {
                console.log("error", error);
            }
            );
            }
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

        &__form-select{
            border-radius: 2rem;
            border: none;
            height: 2rem;
        }
    }
}

</style>
