<template>
  <ul class="my-4 mr-3">
    <BrandSummaryCard v-for="(brand, key) in brandsList" :key="key" :brand="brand"/>
  </ul>
</template>

<script>
import BrandSummaryCard from "./BrandSummaryCard";
import brandsList from "./../../services/brands-list/brandsList";

export default {
  name: "brands-list-page",
  components: {
    BrandSummaryCard
  },
  data() {
    return {
      brandsList: brandsList
    };
  }
};
</script>

