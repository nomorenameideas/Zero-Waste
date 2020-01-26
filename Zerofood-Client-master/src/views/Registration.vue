<template>
  <v-container fluid fill-height class="loginOverlay">
    <v-layout flex align-center justify-center>
      <v-flex xs12 sm4 elevation-6>
        <v-toolbar class="pt-5 grey darken-4"
          ><center>
            <v-toolbar-title class="white--text">
              <h4>ZERO WASTE FOODS SIGNUP</h4>
            </v-toolbar-title>
          </center>
        </v-toolbar>
        <v-card>
          <v-card-text class="pt-4">
            <p
              class="text-dark text-center bg-dark py-2 px-4"
              v-if="validationMsg != ''"
            >
              {{ validationMsg }}
            </p>
            <div>
              <v-form ref="form">
                <v-text-field
                  label="Enter your name"
                  v-model="name"
                  required
                ></v-text-field>
                <v-text-field
                  label="Enter your email"
                  v-model="email"
                  required
                ></v-text-field>
                <v-text-field
                  label="Enter your password"
                  v-model="password"
                  type="password"
                  counter
                  required
                ></v-text-field>
                <v-layout>
                  <v-btn @click="registration" class="white--text grey darken-4"
                    >Sign Up!</v-btn
                  >
                </v-layout>
              </v-form>
            </div>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { setTimeout } from 'timers'
export default {
  name: 'Registration',
  data() {
    return {
      email: '',
      password: '',
      name: '',
      validationMsg: ''
    }
  },
  methods: {
    registration() {
      var mediumRegex = new RegExp(
        '^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})'
      )

      if (!this.name) return (this.validationMsg = 'Name is Required')
      let emailVaild = /\S+@\S+\.\S+/
      if (!this.email) return (this.validationMsg = 'Email is Required ✉️')
      if (!emailVaild.test(this.email))
        return (this.validationMsg = 'Email must be vaild ')
      if (!this.password)
        return (this.validationMsg = 'Password is Required')
      if (!mediumRegex.test(this.password) || this.password.length <= 6)
        return (this.validationMsg =
          'Password should content at least 1 lowercase and uppercase alphabetical character ,  at least 1 number & at least 1 special character  and password length must be more than 6 characters 🔐')

      this.validationMsg = ''
      this.$store
        .dispatch('registration', {
          name: this.name,
          email: this.email,
          password: this.password
        })
        .then(({ response }) => {
          this.validationMsg = 'Registration Done'
          setTimeout(() => {
            this.$router.push('/login')
          }, 500)
        })
        .catch(({ response: { status, data } }) => {
          this.validationMsg = `${data.email[0]}`
        })
    }
  }
}
</script>

<style></style>
