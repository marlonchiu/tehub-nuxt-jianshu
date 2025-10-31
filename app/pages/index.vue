<template>
  <div>
    <a-button type="primary">Index Page</a-button>
    <p>
      {{ $myPlugin('world777') }}
    </p>
    <p>
      {{ $myPlugin('world') }}
    </p>
    <a-button type="primary" @click="info">消息弹框</a-button>
  </div>
</template>

<script lang="ts" setup>
// 也可以在这⾥使⽤
const { $myPlugin } = useNuxtApp()
import { message } from 'ant-design-vue'
const info = () => {
  message.info('这是⼀个消息')
}
</script>
