<template>
  <div>
    <div class="rounded-t bg-white mb-0 px-6 py-6">
      <div class="text-center flex justify-between">
        <h3
          class="font-semibold text-lg text-primary"
        >
          Create Machine
        </h3>
      </div>
    </div>
    <div class="flex-auto px-4 lg:px-10 py-10 bg-background rounded-b">
      <form>
        <div class="flex flex-wrap">
          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-primary text-xs font-bold mb-2"
              >
                Machine Name
              </label>
              <input
                type="text"
                class="border border-secondary px-3 py-3 placeholder-secondary text-H1 bg-white
                   rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                placeholder="Machine Name"
              />
            </div>
          </div>
          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-primary text-xs font-bold mb-2"
              >
                Product Name
              </label>
              <input
                type="text"
                class="border border-secondary px-3 py-3 placeholder-secondary text-H1 bg-white
                   rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                placeholder="Product Name"
              />
            </div>
          </div>
          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mt-7">
              <button
                class="bg-primary text-background text-sm font-bold uppercase px-16 py-3 rounded shadow hover:shadow-lg
                   outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              >
                submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
    export default {
        name: "create-form"
    }
</script>

<style scoped>

</style>
