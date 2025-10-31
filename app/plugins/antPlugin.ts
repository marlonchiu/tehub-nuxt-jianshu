import { message, notification } from 'ant-design-vue'

export default defineNuxtPlugin(nuxtApp => {
  return {
    // ⾃动提供辅助函数,返回辅助函数
    provide: {
      message: message,
      notification: notification
    }
  }
})
