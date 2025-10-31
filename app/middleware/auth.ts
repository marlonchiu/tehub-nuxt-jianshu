export default defineNuxtRouteMiddleware((to, from) => {
  // 判断⽤户是否已经登录
  // 假设
  let authUser = true
  if (!authUser) {
    return navigateTo('/login')
  }
})
