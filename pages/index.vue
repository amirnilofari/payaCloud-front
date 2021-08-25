<template>
  <div class="container bg-background">
    <div>
      <Logo />
      <h1 class="text-3xl text-H1">
        payacloud-front
      </h1>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          class="justify-center px-2 py-2 border-2 rounded border-primary"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          rel="noopener noreferrer"
          class="text-secondary"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    
    this.$nuxt.$options.router.push('/auth/login')
  }
}
</script>
