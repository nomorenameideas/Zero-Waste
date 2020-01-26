<template>
  <div id="HomeView">
    <home-component :isOpen="open" />
    <v-row justify="center" color="white" class="bg-white white"
      ><v-col cols="8"> <home-card /></v-col
    ></v-row>
    <v-row justify="between" class="px-5 my-3" align="center">
      <v-col cols="12">
        <h1
          class="title text-center title my-2"
          style="font-size:40px !important;margin: 10px 0px !important;"
        >
          Meals Available
        </h1>
      </v-col>
      <v-col xs="6" md="2" v-for="item in items" :key="item.id">
        <cards :item="item" />
      </v-col>
    </v-row>

    <v-row justify="between" class="px-5 my-3" align="center">
      <v-col cols="12">
        <h1
          class="title text-center title my-2"
          style="font-size:40px !important;margin: 10px 0px !important;"
        >
          Bargains
        </h1>
      </v-col>
      <v-col xs="6" md="2" v-for="item in items" :key="item.id">
        <cards :item="item" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Cards from '../components/Cards'
import HomeComponent from '../components/Home'
import HomeCard from '../components/InformationView'
export default {
  name: 'HomeView',
  components: {
    HomeComponent,
    HomeCard,
    Cards
  },
  data() {
    return {
      items: [],
      open: false
    }
  },
  created() {
    this.getItems()
  },
  methods: {
    getItems() {
      this.$axios.get('/meal').then(({ data }) => (this.items = data))
    }
  }
}
</script>

<style></style>
