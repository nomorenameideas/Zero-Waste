<template>
  <v-container fluid fill-height class="loginOverlay">
    <v-layout flex align-center justify-center>
      <v-flex xs12 sm4 elevation-6>
        <v-toolbar class=" grey darken-4"
          ><center>
            <v-toolbar-title class="white--text">
              <h4>ZERO WASTE FOODS LOGIN</h4>
            </v-toolbar-title>
          </center>
        </v-toolbar>
        <v-card>
          <p
            class="text-dark text-center bg-dark py-2 px-4"
            v-if="validationMsg != ''"
          >
            {{ validationMsg }}
          </p>
          <v-card-text class="pt-4">
            <div>
              <v-form ref="form">
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
                  <v-btn @click="login" class="white--text grey darken-4"
                    >Login</v-btn
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
export default {
  data() {
    return {
      email: '',
      password: '',
      validationMsg: ''
    }
  },
  methods: {
    login() {
      let emailVaild = /\S+@\S+\.\S+/
      if (!this.email) return (this.validationMsg = 'Email is Required ✉️')
      if (!emailVaild.test(this.email))
        return (this.validationMsg = 'Email must be vaild ✉️')
      if (!this.password)
        return (this.validationMsg = 'Password is Required')
      this.validationMsg = ''
      this.$store
        .dispatch('login', {
          email: this.email,
          password: this.password
        })
        .then(response => {
          if (response.status == 200) {
            this.validationMsg = 'Welcome Back'
            window.location.href = '/'
          }
        })
        .catch(({ response: { status } }) => {
          if (status == 401)
            return (this.validationMsg =
              'Wrong email or password!')
        })
    }
  }
}
</script>

<style>
.bg-dark {
  background-color: whitesmoke;
}
</style>
