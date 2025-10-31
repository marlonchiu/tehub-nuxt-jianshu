<template>
  <p>about detail</p>
</template>

<script lang="ts" setup>
// definePageMeta({
//   middleware: [
//     function (to, from) {
//       // Custom inline middleware
//     },
//     'auth'
//   ]
// })

// 匿名路由中间件
definePageMeta({
  middleware: defineNuxtRouteMiddleware(() => {
    let authUser = true
    if (!authUser) {
      return navigateTo('/login')
    }
  })
})
</script>
