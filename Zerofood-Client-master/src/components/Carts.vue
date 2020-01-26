<template>
  <div id="Carts">
    <v-card :loading="loading" class="mx-auto">
      <v-img
        height="250"
        :src=""
      ></v-img>
      <div class="my-4 subtitle-1 px-2 grey--text">
        <span class="text-left title">{{ item.name }} •</span>
        <em class="text-right font-15 float-right">${{ item.price }}</em>
      </div>
      <v-card-actions>
        <v-btn depressed color="primary" @click="addToCart(item)" class="w-100"
          >Add To Cart</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>
<script>
import Toasted from 'vue-toasted'

export default {
  name: 'Carts',
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data() {
    return {}
  },
  methods: {
    addToCart(item) {
      let items = JSON.parse(localStorage.getItem('items')) || []
      let oneItem = items.filter(x => x.id == item.id)
      if (oneItem.length == 0) {
        items.push({ ...item, qty: 1 })
        return localStorage.setItem('items', JSON.stringify(items))
      }
      let arr = []
      for (let i of items) {
        if (i.id == item.id) i.qty = ++i.qty
        arr.push(i)
      }
      localStorage.setItem('items', JSON.stringify(arr))
      this.$toasted.show(`${item.name} Can now be found in your cart`).goAway(1500)
    }
  }
}
</script>
<style scoped>
.font-15 {
  font-size: 15px !important;
}
</style>
