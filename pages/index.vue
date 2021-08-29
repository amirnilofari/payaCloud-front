<template>
  
</template>

<script>
export default {
  created() {
      this.$nuxt.$options.router.push('auth/login')
    },
  layout : 'admin'
}
</script>
