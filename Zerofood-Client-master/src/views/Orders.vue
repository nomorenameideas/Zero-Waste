<template>
  <div id="Orders">
    <v-row justify="center"
      ><r-col cols="12">
        <v-btn
          class="w-100"
          block
          color="primary"
          dark
          @click="isOrderPage = !isOrderPage"
        >
          {{ isOrderPage ? 'Previous Orders' : 'Cart' }}
        </v-btn></r-col
      ></v-row
    >
    <v-row justify="center">
      <v-col cols="8">
        <h1 class="title">
          {{ isOrderPage ? 'Cart' : 'Previous Orders' }}
        </h1>
      </v-col>
      <v-col cols="8">
        <card-order
          v-if="isOrderPage && items.length != 0"
          :items="items"
          class="w-100"
        />
        <old-order-card :items="oldItems" v-if="!isOrderPage" class="w-100" />
      </v-col>
      <v-col v-if="isOrderPage && items.length != 0" cols="8">
        <v-btn block color="primary" dark @click="makeOrder">
          Check out
        </v-btn>
      </v-col>
    </v-row>
    <v-row
      v-if="
        (items.length == 0 && isOrderPage) ||
          (oldItems.length == 0 && !isOrderPage)
      "
      justify="center"
    >
      <v-col cols="12">
        <h1 class="title text-center">
          Cart is empty
        </h1>
      </v-col>
      <v-col cols="auto">
        <v-img
          width="500px"
          :src="
          "
        />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import CardOrder from '../components/Orders.vue'
import OldOrderCard from '../components/OrderDetails'
export default {
  name: 'Orders',
  components: {
    CardOrder,
    OldOrderCard
  },
  data() {
    return {
      items: [],
      oldItems: [],
      isOrderPage: true
    }
  },
  async created() {
    await this.getMyOldItems()
    await this.getItems()
  },
  methods: {
    getItems() {
      this.items = JSON.parse(localStorage.getItem('items')) || []
    },
    getMyOldItems() {
      this.$axios.get('/order').then(({ data: { orders } }) => {
        this.oldItems = orders
      })
    },
    makeOrder() {
      let orderObject = {
        meal: [],
        quantity: []
      }
      for (let item of this.items) {
        orderObject.meal.push(item.id)
        orderObject.quantity.push(item.qty)
      }
      this.$axios.post('/order/store', orderObject).then(({ data }) => {
        if (data.msg == 'Order Done') {
          this.$toasted
            .show(`Order was successfull`)
            .goAway(1500)
          this.items = []

          localStorage.setItem('items', null)
        }
      })
    }
  }
}
</script>

<style></style>
