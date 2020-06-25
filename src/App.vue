<template>
  <v-app id="app">
    <v-container>
      <v-layout align-center justify-center>
        <v-flex lg-9>
          <BrandsListPage/>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
import BrandsListPage from "./components/brands-list-page/BrandsListPage";
export default {
  name: "App",
  components: {
    BrandsListPage
  }
};
</script>

<style lang="scss" scoped>
#app {
  background-color: #F2F3F2;
}
</style>



