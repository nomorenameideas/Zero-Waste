<template>
  <div id="Home" class="home" style>
    <v-row justify="center" class="h-100" align="center">
      <v-col xs="6" md="4">
        <v-card flat>
          <v-card-title class="d-flex justify-center">
            <span class="title">Welcome to Zero Waste Foods </span>
          </v-card-title>
          <p class="text-sm text-center py-4">
            Placeholder text
          </p>
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-row justify="center" class="h-100" align="end">
          <v-col cols="auto">
            <a href="#content">
              <v-btn color="secondary" fab dark>
                <v-icon>mdi-mouse</v-icon>
              </v-btn></a
            >
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  methods: {
    scrollDown() {
      window.scrollTo(0, 500)
    }
  }
}
</script>

<style>
.home {
  height: 100vh;
  background-position: center;
  background-size: cover;
  background-image: url('https://www.ordr.cz/Content/img/covers/homepage.jpg');
}
</style>
