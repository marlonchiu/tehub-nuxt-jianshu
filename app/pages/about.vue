<template>
  <div>
    about Page
    <nuxt-link to="/about/123">go to about detail</nuxt-link>
    <a-button type="link" @click="() => $router.push('/about/123')">go to about detail</a-button>
    <NuxtPage />
  </div>
</template>

<script lang="ts" setup></script>
