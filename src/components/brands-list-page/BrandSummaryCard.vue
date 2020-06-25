<template>
  <v-card class="mb-4 brand-summary-card" outlined>
    <v-layout align-center class="pa-5">
      <SummaryCardTitle :brand="brand"/>
      <v-flex xs-9>
        <v-layout align-center justify-end>
          <v-flex shrink v-for="detail of brandDetails" :key="detail.key">
            <TextWithBorder
              :type="detail.type"
              :placeholder="detail.title"
              :message="getFormattedNumber(brand[detail.key])"
            />
          </v-flex>
          <v-flex shrink class="ml-4">
            <v-btn large tile color="indigo lighten-5" @click="toggleProductsList" depressed>
              <template v-if="showProducts">Hide Top Products
                <v-icon right>mdi-chevron-up</v-icon>
              </template>
              <template v-else>Show Top Products
                <v-icon right>mdi-chevron-down</v-icon>
              </template>
            </v-btn>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
    <v-card-text v-if="showProducts">
      <v-data-table fixed-header :headers="productsTable.header" :items="brand.topProducts">
        <template v-slot:item.popularity="{ item }">
          <v-icon
            v-if="item.popularity !== 0"
            :style="{color: item.popularity === 1? 'green': 'red'}"
            right
          >{{item.popularity === 1? 'mdi-arrow-up': 'mdi-arrow-down'}}</v-icon>
        </template>
        <template v-slot:item.price="{ item }">{{getFormattedNumber(item.price)}}</template>
        <template v-slot:item.stock="{ item }">{{getFormattedNumber(item.stock)}}</template>
        <template v-slot:item.sales="{ item }">{{getFormattedNumber(item.sales)}}</template>
        <template v-slot:item.colors="{ item }">
          <ColorsStatus :colorsList="item.colors"/>
        </template>
        <template v-slot:item.rating="{ item }">
          <StarRating :rating="item.rating"/>
        </template>
      </v-data-table>
    </v-card-text>
  </v-card>
</template>

<script>
import numeral from "numeral";
import TextWithBorder from "./../common/TextWithBorder.vue";
import SummaryCardTitle from "./SummaryCardTitle";
import brandsUtilService from "./../../services/brands-list/brandsUtilService";
import StarRating from "./../common/StarRating";
import ColorsStatus from "./../common/ColorsStatus";
export default {
  name: "brand-summary-card",
  components: {
    TextWithBorder,
    SummaryCardTitle,
    StarRating,
    ColorsStatus
  },
  props: {
    brand: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      brandDetails: [
        {
          key: "totalProducts",
          title: "Products",
          type: "success"
        },
        {
          key: "totalSales",
          title: "Sales",
          type: "highlight"
        },
        {
          key: "totalPurchase",
          title: "Stock",
          type: "highlight"
        },
        {
          key: "avgRevenue",
          title: "Revenue",
          type: "highlight"
        }
      ],
      showProducts: false,
      productsTable: brandsUtilService.brandProductsTable()
    };
  },
  methods: {
    getFormattedNumber(n) {
      return numeral(n).format("0,0");
    },
    toggleProductsList() {
      this.showProducts = !this.showProducts;
    }
  }
};
</script>

