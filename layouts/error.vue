<template>
  <div
    class="mx-auto px-4 h-screen"
  >
    <img
      src="../assets/img/404.png"
      class="absolute w-9/12 right-0 bottom-0"
    >
    <div
        class="flex content-center items-center justify-center h-full"
      >
        <div
          class="lg:w-6/12 float-right text-center"
        >
          <p
            class="text-12xl text-primary block leading-none"
          >
            404
          </p>
          <span
            class="text-5xl text-secondary block"
          >
            Page Not Found
          </span>
          <nuxt-link
            to="/dashboard"
          >
            <button
              class="uppercase bg-primary rounded-full p-1.5 px-6 mt-8 text-lg text-background cursor-pointer"
            >
              go home
            </button>
          </nuxt-link>

        </div>
        <div
          class="lg:w-6/12 float-right"
        >
        </div>
      </div>
  </div>
</template>

<script>
    export default {
        name: "error"
    }
</script>

<style scoped>

</style>
