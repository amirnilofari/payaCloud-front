<template>
  <transition name="slide">
    <div
      class="fixed inset-0 z-10 overflow-y-auto details-modal" role="dialog" aria-modal="true">
      <div class="flex items-end justify-center w-full min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div class="fixed inset-0 transition-opacity bg-opacity-50 bg-H1" aria-hidden="true"></div>

        <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

        <div class="inline-block overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:my-6 sm:align-middle sm:max-w-xl sm:w-full">
          <form
           class="p-6"
          >
            <h3 v-if="!isEdit" class="mb-6 ml-4 text-xl font-semibold text-primary">New Trans</h3>
            <h3 v-else class="mb-6 ml-4 text-xl font-semibold text-primary">Edit Trans</h3>
            <div class="flex flex-wrap">
              <div class="w-full px-4 mb-2 lg:w-6/12">
                <div class="relative w-full mb-3">
                  <label
                    class="block mb-2 text-xs font-bold uppercase text-H1"
                  >
                    User
                  </label>
                  <select
                    v-model="userId"
                    class="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border rounded shadow border-secondary placeholder-secondary text-secondary focus:outline-none focus:ring">
                    <option value="" disabled selected>User</option>
                    <option
                      v-for="user in users"
                      :key= "user.id"
                      :value="user.id"
                    >
                      {{user.name}}
                    </option>
                  </select>
                </div>
              </div>

              <div class="w-full px-4 mb-2 lg:w-6/12">
                <div class="relative w-full mb-3">
                  <label
                    class="block mb-2 text-xs font-bold uppercase text-H1"
                  >
                    Amount
                  </label>
                  <input
                    v-model="amount"
                    type="text"
                    class="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border rounded shadow border-secondary placeholder-secondary text-H1 focus:outline-none focus:ring"
                    placeholder="Amount"
                  />
                </div>
              </div>

              <div class="w-full px-4 mb-2 lg:w-12/12">
                <div class="relative w-full mb-3">
                  <label
                    class="block mb-3 text-xs font-bold uppercase text-H1"
                  >
                    status
                  </label>
                  <div class="flex items-center">
                    <input v-model="status" value="paid" id="paid" name="status" type="radio" class="w-4 h-4 focus:ring-indigo-500 text-primary border-H2">
                    <label for="paid" class="block ml-3 text-sm font-medium text-H1">
                      paid
                    </label>
                    <input v-model="status" value="pending" id="pending" name="status" type="radio" class="w-4 h-4 ml-5 focus:ring-indigo-500 text-primary border-H2">
                    <label for="pending" class="block ml-3 text-sm font-medium text-H1">
                      Pending
                    </label>
                    <input v-model="status" value="completed" id="completed" name="status" type="radio" class="w-4 h-4 ml-5 focus:ring-indigo-500 text-primary border-H2">
                    <label for="completed" class="block ml-3 text-sm font-medium text-H1">
                      completed
                    </label>
                  </div>
                </div>
              </div>

              <div class="w-full px-4 mb-2 lg:w-6/12">
                <div class="relative w-full mb-3">
                  <label
                    class="block mb-3 text-xs font-bold uppercase text-H1"
                  >
                    type
                  </label>
                  <div class="flex items-center">
                    <input v-model="type" value="balance" id="balance" name="type" type="radio" class="w-4 h-4 focus:ring-indigo-500 text-primary border-H2">
                    <label for="balance" class="block ml-3 text-sm font-medium text-H1">
                      balance
                    </label>
                    <input v-model="type" value="gift" id="gift" name="type" type="radio" class="w-4 h-4 ml-5 focus:ring-indigo-500 text-primary border-H2">
                    <label for="gift" class="block ml-3 text-sm font-medium text-H1">
                      gift
                    </label>
                  </div>
                </div>
              </div>

              <div class="w-full px-4 mb-2 lg:px-1">
                <div class="flex flex-wrap w-full mt-7">
                  <button
                    @click="close"
                    type="button"
                    class="cancelBtn"
                  >
                    cancel
                  </button>
                  <button
                    @click="submitForm"
                    type="button"
                    class="submitBtn"
                  >
                    submit
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </transition>
</template>


<script>
  export default {
    data() {
      return {
        id: '',
        userId: '',
        amount: '',
        type: 'balance',
        status: 'paid'
      }
    },
    props: ['users', 'selectedTrans', 'isEdit'],
    methods: {
      close() {
        this.$nuxt.$emit('toggleCreateModal')
      },
      submitForm () {
        let formdata = new FormData()
        formdata.append('userId', this.userId)
        formdata.append('amount', this.amount)
        formdata.append('type', this.type)
        formdata.append('status', this.status)

        if (this.isEdit) {
          this.$axios.$post('backend/trans/update/' + this.id,
            formdata)
            .then(response => {
              if (response.message) {
                this.$toast.error(response.message)
              } else {
                this.$nuxt.$emit('onLoadData')
                this.$toast.success('Successfully edited!')
                this.close()
              }
            })
        } else {
          this.$axios.$post('backend/trans/create',
            formdata)
            .then(response => {
              if (response.message) {
                this.$toast.error(response.message)
              } else {
                this.$nuxt.$emit('onLoadData')
                this.$toast.success('Successfully created!')
                this.close()
              }
            })
        }


      }
    },
    created() {
    if (this.isEdit) {
        this.id = this.selectedTrans.id
        this.amount = this.selectedTrans.amount
        this.type = this.selectedTrans.type
        this.status = this.selectedTrans.status
        this.userId = this.selectedTrans.user.id
      } else {
        this.id = ''
        this.userId = ''
        this.amount = ''
        this.type = 'balance'
        this.status = 'paid'
      }
    }
  }
</script>

<style scoped>
  .details-modal .image-cont{
    top: -60px;
    position: absolute;
  }
  .slide-enter {
    opacity: 1;
  }

  .slide-enter-active {
    opacity: 1;
    animation: slide-in 0.5s ease-out forwards;
    transition: opacity 0.5s;
  }

  .slide-leave-to {
    opacity: 1;
  }

  .slide-leave-active {
    animation: slide-out 0.5s ease-out forwards;
    opacity: 0;
    transition: opacity 0.5s;
  }

  @keyframes slide-in {
    0% {
      transform: translateY(-15px);
    }
    30% {
      transform: translateY(15px);
    }
    100% {
      transform: translateY(0);
    }
  }

  @keyframes slide-out {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(-30px);
    }
  }
</style>
