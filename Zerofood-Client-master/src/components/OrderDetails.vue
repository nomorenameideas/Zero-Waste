<template>
  <div id="OrderDetails">
    <v-flex xs12 md8 sm8 offset-sm3>
      <v-card>
        <v-list>
          <v-list-group
            v-for="item in items"
            v-model="item.active"
            :key="item.id"
            no-action
          >
            <v-list-tile slot="activator">
              <v-list-tile-content>
                <v-list-tile-title
                  >Order - #{{ item.order.id }} Paid - ${{
                    item.order.total_price
                  }}
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-content>
                <v-simple-table>
                  <template v-slot:default>
                    <thead>
                      <th v-for="head in headers" :key="head" class="text-left">
                        {{ head }}
                      </th>
                    </thead>
                    <tbody class="py-4 my-3">
                      <tr
                        class="py-4 my-3"
                        v-for="subItem in item.details"
                        :key="subItem.title"
                      >
                        <td class="text-left">{{ subItem.meal }}</td>
                        <td>{{ subItem.price }}</td>
                        <td>QTY : {{ subItem.quantity }}</td>
                      </tr>
                      <v-row justify="center" class="w-100">
                        <v-col cols="auto">
                          <b class="text-center w-50"
                            >Total Price :
                            {{ item.order.total_price }}
                            </b
                          >
                        </v-col>
                      </v-row>
                    </tbody>
                  </template>
                </v-simple-table>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-group>
        </v-list>
      </v-card>
    </v-flex>
  </div>
</template>

<script>
export default {
  name: 'OrderDetails',
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      headers: ['Meal Name', 'Price', 'QTY']
    }
  }
}
</script>

<style></style>
