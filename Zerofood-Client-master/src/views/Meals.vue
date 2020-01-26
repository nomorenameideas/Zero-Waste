<template>
  <div id="Meals">
    <v-row justify="between" class="px-5 my-3" align="center">
      <v-col cols="12">
        <h1 class="text-center text-lg">Meals Available</h1>
      </v-col>
      <v-col xs="4" md="2" v-for="item in items" :key="item.id">
        <cards :item="item" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Cards from '../components/Cards'
export default {
  name: 'Meals',
  components: {
    Cards
  },
  data() {
    return {
      items: []
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
