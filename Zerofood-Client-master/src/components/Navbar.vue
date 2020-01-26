<template>
  <nav>
    <v-navigation-drawer absolute temporary>
      <v-divider></v-divider>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title
            ><router-link class="mx-3 " to="/"
              >Home</router-link
            ></v-list-item-title
          >
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title
            ><router-link class="mx-3 " to="/meals"
              >Meals</router-link
            ></v-list-item-title
          >
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title
            ><router-link class="mx-3 " to="/orders" v-if="isLogin"
              >Orders</router-link
            ></v-list-item-title
          >
        </v-list-item-content>
      </v-list-item>

      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>
            <v-btn v-if="!isLogin" class="" @click="goTo('login')">
              LogIn
            </v-btn></v-list-item-title
          >
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>
            <v-btn class="mx-2  " v-if="!isLogin" @click="goTo('registration')">
              Registration
            </v-btn></v-list-item-title
          >
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>
            <div class="text-center ">
              <v-dialog
                v-if="isLogin"
                class="mx-2"
                v-model="dialog"
                width="500"
              >
                <template v-if="isLogin" v-slot:activator="{ on }">
                  <v-btn color="lighten-2" dark v-on="on">
                    Profile - {{ user.name }}
                  </v-btn>
                </template>

                <v-card v-if="isLogin">
                  <v-card-title class="headline grey lighten-2" primary-title>
                    User Information
                  </v-card-title>
                  <v-divider></v-divider>

                  <v-card-text class="px-4 mt-5">
                    <p>Name: {{ user.name }}</p>
                    <p>Email ✉️ : {{ user.email }}</p>
                    <p>Balance ⚖️ : $ {{ user.balance }}</p>
                    <p>
                      Add More Balance :
                      <v-text-field
                        label="Amount"
                        value="0"
                        prefix="$"
                        v-model="balance"
                      ></v-text-field>
                      <center>
                      </center>
                    </p>
                  </v-card-text>

                  <v-divider></v-divider>

                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" text @click="dialog = false">
                      Close
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </div></v-list-item-title
          >
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>
            <v-toolbar-title class="" @click="logout" v-if="isLogin"
              ><v-btn @click="logout">Log Out</v-btn></v-toolbar-title
            ></v-list-item-title
          >
        </v-list-item-content>
      </v-list-item>
    </v-navigation-drawer>
    <v-card color="grey lighten-4" flat tile height="80px">
      <v-toolbar dense height="80px">
        <v-toolbar-title style="cursor: pointer"
          ><router-link class="mx-3 d-none d-sm-flex" to="/"
            >Home</router-link
          ></v-toolbar-title
        >
        <v-toolbar-title style="cursor: pointer"
          ><router-link class="mx-3 d-none d-sm-flex" to="/meals"
            >Meals</router-link
          ></v-toolbar-title
        >
        <v-toolbar-title style="cursor: pointer" v-if="isLogin"
          ><router-link class="mx-3 d-none d-sm-flex" to="/orders"
            >Orders</router-link
          ></v-toolbar-title
        >

        <v-spacer></v-spacer>
        <v-btn class="" @click="goTo('orders')" icon>
          <v-icon class="text-blue" large>mdi-shopping</v-icon>
        </v-btn>
        <v-btn
          color="pink"
          class="d-flex d-sm-none"
          dark
          @click="changeOpenStatus"
        >
          Meun
        </v-btn>
        <v-btn v-if="!isLogin" class="d-none d-sm-flex" @click="goTo('login')">
          LogIn
        </v-btn>
        <v-btn
          class="mx-2  dnp-none d-sm-flex"
          v-if="!isLogin"
          @click="goTo('registration')"
        >
          Registration
        </v-btn>
        <div v-if="isLogin" class="text-center d-none d-sm-flex">
          <v-dialog class="mx-2" v-model="dialog" width="500">
            <template v-slot:activator="{ on }">
              <v-btn color="lighten-2" dark v-on="on">
                Profile - {{ user.name }}
              </v-btn>
            </template>

            <v-card>
              <v-card-title class="headline grey lighten-2" primary-title>
                User Information
              </v-card-title>
              <v-divider></v-divider>

              <v-card-text class="px-4 mt-5">
                <p>Name : {{ user.name }}</p>
                <p>Email ✉️ : {{ user.email }}</p>
                <p>Balance ⚖️ : $ {{ user.balance }}</p>
                <p>
                  Add More Balance :
                  <v-text-field
                    label="Amount"
                    value="0"
                    prefix="$"
                    v-model="balance"
                  ></v-text-field>
                  <center>
                    <v-btn color="dark" text @click="addPoints">
                      Add
                    </v-btn>
                  </center>
                </p>
              </v-card-text>

              <v-divider></v-divider>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" text @click="dialog = false">
                  Close
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </div>
        <v-toolbar-title class="d-none d-sm-flex" @click="logout" v-if="isLogin"
          ><v-btn @click="logout">Log Out </v-btn></v-toolbar-title
        >
      </v-toolbar>
    </v-card>
  </nav>
</template>

<script>
import 'vue-toast/dist/vue-toast.min.css'
import VueToast from 'vue-toast'

export default {
  data() {
    return {
      //drawer: true,
      right: false,
      color: 'primary',
      miniVariant: false,
      expandOnHover: false,
      background: false,
      dark: true,
      links: [
        {
          title: 'Dashboard',
          to: '/',
          icon: 'mdi-view-dashboard'
        },
        {
          title: 'Users',
          to: '/users',
          icon: 'mdi-account-group'
        },
        {
          title: 'Meals',
          to: '/meals',
          icon: 'mdi-package-variant'
        },
        {
          title: 'Categories',
          to: '/categories',
          icon: 'mdi-format-list-bulleted'
        },
        {
          title: 'Orders',
          to: '/orders',
          icon: 'mdi-package-variant-closed'
        },
        {
          title: 'Cart',
          to: '/carts',
          icon: 'mdi-cart-outline'
        }
      ],
      user: {},
      dialog: false,
      balance: 0,
      drawer: null,
      items: [
        { title: 'Home', icon: 'dashboard' },
        { title: 'About', icon: 'question_answer' }
      ],
      open: true,
      snackbar: false
    }
  },
  async created() {
    console.log({ login: this.isLogin })
    await this.getUser()
  },
  methods: {
    logout() {
      this.$store.dispatch('destroyToken').then(response => {
        console.log({ response })
        this.$router.push({ name: 'login' })
      })
    },
    goTo(to) {
      this.$router.push(to)
    },
    getUser() {
      this.$store.dispatch('getMyUser').then(({ data }) => {
        this.user = data.user
      })
    },
    addPoints() {
      this.$store.dispatch('addPoints', this.balance).then(({ data }) => {
        this.user.balance = parseInt(this.user.balance) + parseInt(this.balance)
        this.$toasted
          .show(`The amount of points you have now is {this.user.balance}`)
          .goAway(1500)
        this.balance = ''
      })
    },
    changeOpenStatus() {
      this.open = !this.open
    }
  },
  computed: {
    maxHeight() {
      return `100vh`
    },
    isLogin() {
      return !this.$store.getters.loggedIn
    }
  }
}
</script>

<style scoped>
#scrolling-techniques-8 {
  overflow-x: hidden;
}
a {
  text-decoration: none !important;
  color: #757575 !important;
  transition: all 0.3s;
}

a:hover {
  color: black !important;
}
</style>
