<template>
  <div>
    <a-config-provider :theme="theme">
      <NuxtPage />
    </a-config-provider>
  </div>
</template>

<script lang="ts" setup>
const theme = ref({
  token: {
    colorPrimary: '#ea6f5a'
  }
})
</script>
