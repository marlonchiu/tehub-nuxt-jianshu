<template>
  <div>
    <a-button type="primary" @click="info">消息弹框</a-button>
    <a-button type="primary" @click="notif">通知提醒框</a-button>
    about Page
    <nuxt-link to="/about/123">go to about detail</nuxt-link>
    <a-button type="link" @click="() => $router.push('/about/123')">
      go to about detail
    </a-button>
    <NuxtPage />
  </div>
</template>

<script lang="ts" setup>
const { $message, $notification } = useNuxtApp()
const info = () => {
  $message.info('这是⼀个消息')
}
const notif = () => {
  $notification.success({
    placement: 'topRight',
    message: '通知提醒框',
    description: '这是通知提醒框'
  })
}
</script>
