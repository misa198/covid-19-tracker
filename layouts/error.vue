<template>
  <div
    class="d-flex justify-center align-center"
    :style="{
      height: '100%',
    }"
  >
    <v-sheet
      class="ma-auto pa-12"
      max-width="750px"
      rounded
      elevation="2"
      color="headerBackground"
    >
      <div class="mb-4 text-h1 font-weight-bold text-center">404</div>
      <div class="text-h5 mb-8">Không tìm thấy trang</div>
      <nuxt-link to="/">
        <v-btn width="100%" color="danger" dark>Về trang chủ</v-btn>
      </nuxt-link>
    </v-sheet>
  </div>
</template>
<script lang="ts">

