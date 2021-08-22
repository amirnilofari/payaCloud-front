<template>
  <div
    class="h-screen px-4 mx-auto"
  >
    <img
      src="../assets/img/404.png"
      class="absolute bottom-0 right-0 w-9/12"
    >
    <div
        class="flex items-center content-center justify-center h-full"
      >
        <div
          class="float-right text-center lg:w-6/12"
        >
          <p
            class="block leading-none text-12xl text-primary"
          >
            404
          </p>
          <span
            class="block text-5xl text-secondary"
          >
            Page Not Found
          </span>
          <nuxt-link
            to="/admin/machine"
          >
            <button
              class="uppercase bg-primary rounded-full p-1.5 px-6 mt-8 text-lg text-background cursor-pointer"
            >
              go home
            </button>
          </nuxt-link>

        </div>
        <div
          class="float-right lg:w-6/12"
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
