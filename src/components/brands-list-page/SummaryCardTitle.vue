<template functional>
  <v-flex class="overflow-hidden">
    <v-layout align-center>
      <v-flex shrink>
        <v-avatar size="64" tile>
          <img :src="props.brand.img">
        </v-avatar>
      </v-flex>
      <v-flex class="pl-3 brand-title">
        <div class="brand-name">{{props.brand.name}}</div>
        <div class="brand-country">{{props.brand.country}}</div>
      </v-flex>
    </v-layout>
  </v-flex>
</template>

<script>
export default {
  props: {
    brand: Object
  }
};
</script>

<style lang="scss" scoped>
.brand-title {
  color: #5D5770;
  line-height: 1.5em;

  .brand-name {
    font-size: 18px !important;
    font-weight: semi-bold;
  }

  .brand-country {
    font-size: 12px !important;
  }
}
</style>

