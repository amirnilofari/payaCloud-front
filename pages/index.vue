<template>
  
</template>

<script>
export default {
  
  middleware: 'auth',
  created() {
      this.$nuxt.$options.router.push('/auth/login')
    

  },
  layout : 'admin'
}
</script>
