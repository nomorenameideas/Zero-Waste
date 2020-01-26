<template>
  <div id="content">
    <v-row class="my-3">
      <v-col v-for="(cart, index) in carts" :key="index" md-cols="4" cols="12">
        <div
          :style="
            `background: url(https://www.ordr.cz/Content/Img/Sprites/draws.png) ${
              cart.width
            };width: ${
              cart.width == '-2px -498px' ? '225px' : '128px'
            };height: 118px;margin: 0px auto;`
          "
        ></div>

        <v-card-title primary-title>
          <div>
            <h3 class="headline text-center mb-0">{{ cart.title }}</h3>
            <div class="text-center">{{ cart.content }}</div>
          </div>
        </v-card-title>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  }
}
</script>

<style></style>
