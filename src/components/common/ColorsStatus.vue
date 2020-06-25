<template functional>
  <v-layout>
    <v-flex v-for="color of props.colorsList" :style="{color: color.code}" :key="color.code">
      <v-tooltip top>
        <template v-slot:activator="{on, attrs}">
          <v-icon v-bind="attrs" v-on="on" :color="color.code">mdi-circle</v-icon>
        </template>
        <span>{{color.title}}</span>
      </v-tooltip>
    </v-flex>
  </v-layout>
</template>
