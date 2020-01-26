<template>
  <v-app>
    <Navbar></Navbar>
    <v-row align="center" justify="center"> </v-row>
    <v-content>
      <router-view></router-view>
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
export default {
  components: {
    Navbar,
    Footer
  },
  name: 'App',

  data: () => {
    return {
      open: false
    }
  }
}
</script>

<style scoped>
.w-3 {
  width: 50px !important;
}

html {
  scroll-behavior: smooth !important;
}
</style>
