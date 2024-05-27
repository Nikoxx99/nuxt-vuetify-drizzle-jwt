import { defineNuxtRouteMiddleware, useRuntimeConfig } from 'nuxt/app'
import { jwtVerify } from 'jose'

export default defineNuxtRouteMiddleware(async (to, from) => {
  const config = useRuntimeConfig()
  const token = useCookie('token').value
  if (!token) {
    return navigateTo('/login')
  }

  try {
    const { payload } = await jwtVerify(token, new TextEncoder().encode(config.jwt_secret as string), {
      issuer: 'master:listoapp',
      audience: 'listoapp:users',
    })
    if (!payload['master:listoapp:sign']) {
      navigateTo('/login')
    }
  } catch (err) {
    navigateTo('/login')
  }
})