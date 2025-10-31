<template>
  <p>{{ $route.params.group }} - {{ $route.params.id }}</p>
</template>

<script lang="ts" setup>
const route = useRoute()
console.log('🚀 ~ route:', route)
</script>
