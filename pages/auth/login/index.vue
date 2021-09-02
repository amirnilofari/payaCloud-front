<template>
  <div
    class="h-full h-screen px-4 mx-auto bg-primary"
  >
    <div
      class="flex items-center content-center justify-center h-full"
    >
      <div
        class="w-full px-12 lg:w-4/12"
      >
        <div
          class="relative flex flex-col w-full border-0 rounded-lg shadow-lg bg-background"
        >
          <div
            class="px-6 py-6 mb-0 rounded-t"
          >
            <div
              class="mb-3 text-center"
            >
              <h6
                class="text-xl font-bold text-primary"
              >
                Sign in
              </h6>
            </div>
            <hr
              class="mt-6 border-b-1 border-secondary"
            />
          </div>
          <div
            class="flex-auto px-4 py-10 pt-0 lg:px-10 "
          >
            <form>
              <div
                class="relative w-full mb-3"
              >
                <label
                  class="block mb-2 text-sm font-bold uppercase text-primary"
                >
                  Token
                </label>
                <input
                  v-model="token"
                  required
                  class="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear border rounded shadow border-secondary placeholder-secondary text-H1 bg-background focus:outline-none focus:ring"
                  placeholder="Token"
                  @keypress.enter="login()"
                />
              </div>
              <!-- <div
                class="relative w-full mb-5"
              >
                <label
                  class="block mb-2 text-sm font-bold uppercase text-primary"
                >
                  Password
                </label>
                <input
                  v-model="password"
                  required
                  type="password"
                  class="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear border rounded shadow border-secondary placeholder-secondary text-H1 bg-background focus:outline-none focus:ring"
                  placeholder="Password"
                />
              </div> -->

              <div
                class="mt-6 text-center"
              >
                  <button
                    class="w-full px-6 py-3 mb-1 mr-1 text-sm font-bold uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-primary text-background hover:shadow-lg focus:outline-none"
                    type="button"
                    :class="loading ? 'my-disabled' : ''"
                    :disabled="loading"
                    @click.prevent="login()"
                  >
                    Sign In
                  </button>
              </div>
            </form>
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
        token: '',
        rememberMe: false,
        loading: false
      }
    },
    methods: {
      login() {
        // kJtTA1kmgXMD84yJ
        let formdata = new FormData()
        formdata.append('token', this.token)
        this.loading = true
        this.$axios.$post('auth/login',
          formdata)
          .then(response => {
            if (response.message) {
              this.loading = false
              this.$toast.error(response.message)
            } else {
              this.loginWithNuxt()
            }
          })
      },
      loginWithNuxt() {
        // v0JOPrdkJMWnYgFp
        try {
          let response = this.$auth.loginWith('local', { data: {
              token: this.token
             }
          })
          this.loading = false
          this.$toast.success('Successfully Logged In!')
          console.log('response', response)
        } catch (err) {
          this.$toast.error('Token Was Not Correct!')
          console.log('err', err)
        }
      }
    },
    created() {
      console.log('this.$auth.loggedIn\n', this.$auth.loggedIn)
    }
  }



</script>
