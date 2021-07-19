<template>
  <div
    class="mx-auto px-4 h-full bg-primary h-screen"
  >
    <div
      class="flex content-center items-center justify-center h-full"
    >
      <div
        class="w-full lg:w-4/12 px-12"
      >
        <div
          class="bg-background relative flex flex-col w-full shadow-lg rounded-lg border-0"
        >
          <div
            class="rounded-t mb-0 px-6 py-6"
          >
            <div
              class="text-center mb-3"
            >
              <h6
                class="text-primary text-xl font-bold"
              >
                Sign in
              </h6>
            </div>
            <hr
              class="mt-6 border-b-1 border-secondary"
            />
          </div>
          <div
            class="flex-auto px-4 lg:px-10 py-10 pt-0"
          >
            <form>
              <div
                class="relative w-full mb-3"
              >
                <label
                  class="block uppercase text-primary text-sm font-bold mb-2"
                >
                  Email
                </label>
                <input
                  v-model="email"
                  required
                  type="email"
                  class="border border-secondary px-3 py-3 placeholder-secondary text-H1 bg-background
                   rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="Email"
                />
              </div>
              <div
                class="relative w-full mb-5"
              >
                <label
                  class="block uppercase text-primary text-sm font-bold mb-2"
                >
                  Password
                </label>
                <input
                  v-model="password"
                  required
                  type="password"
                  class="border border-secondary px-3 py-3 placeholder-secondary text-H1 bg-background
                   rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="Password"
                />
              </div>
              <div
                class="mt-2"
              >
                <label
                  class="inline-flex items-center cursor-pointer"
                >
                  <input
                    v-model="rememberMe"
                    id="customCheckLogin"
                    type="checkbox"
                    class="form-checkbox border-0 w-5 h-5 ease-linear transition-all duration-150 rounded"
                  />
                  <span
                    class="ml-2 text-sm font-medium text-primary"
                  >
                  Remember me
                </span>
                </label>
              </div>
              <div
                class="text-center mt-6"
              >
                <button
                  class="bg-primary text-background text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg
                   outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                  type="submit"
                >
                  Sign In
                </button>
              </div>
            </form>
          </div>
        </div>
        <div
          class="flex flex-wrap mt-6 relative"
        >
          <div
            class="w-1/2"
          >
            <a
              class="text-background cursor-pointer"
            >
              <small>Forgot password?</small>
            </a>
          </div>
          <div
            class="w-1/2 text-right"
          >
            <a
              class="text-background cursor-pointer"
            >
              <small>Create new account</small>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        email: '',
        password: '',
        rememberMe: false
      }
    },
    asyncData() {
      return {
        rendering: process.server ? 'server' : 'client'
      }
    }
  }
</script>
