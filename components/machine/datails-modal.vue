<template>
  <transition name="slide">
    <div
      class="fixed inset-0 z-10 overflow-y-auto details-modal machine-modal" role="dialog" aria-modal="true">
      <div class="flex items-end justify-center w-full min-h-screen px-4 pt-4 text-center lg:pb-20 sm:block sm:p-0 sm:pb-10">
        <div class="fixed inset-0 transition-opacity bg-opacity-50 bg-H1" aria-hidden="true"></div>

        <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
<!--        <div class="inline-block overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:my-6 sm:align-middle sm:max-w-xl sm:w-full">-->

        <div class="inline-block mb-10 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:mt-20 sm:align-middle lg:overflow-visible sm:max-w-6xl sm:w-full">
          <div class="px-4 pt-5 pb-4 bg-white sm:p-6 sm:pb-4">
            <div class="flex flex-wrap justify-center mt-16 lg:mt-0 sm:mb-0">
              
              <div class="w-full px-4 pb-0 mt-2 text-center">
                <div class="flex justify-center py-4 pt-0">
                  <div class="p-3 mr-4 text-center">
                    <span
                      class="block text-xl font-bold tracking-wide uppercase text-H1"
                    >
                      {{machine.cpuCore}}
                    </span>
                    <span class="text-sm text-secondary">Cpu Core</span>
                  </div>
                  <div class="p-3 mr-4 text-center">
                    <span
                      class="block text-xl font-bold tracking-wide uppercase text-H1"
                    >
                      {{machine.memorySize}}
                    </span>
                    <span class="text-sm text-secondary">Memory Size</span>
                  </div>
                  <div class="p-3 text-center lg:mr-4">
                    <span
                      class="block text-xl font-bold tracking-wide uppercase text-H1"
                    >
                      {{machine.diskSize}}
                    </span>
                    <span class="text-sm text-secondary">Disk Size</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="mt-5 text-center">
              <h3
                class="mb-2 text-xl font-semibold leading-normal text-H1"
              >
                {{machine.template.name}}
              </h3>
              <div
                class="mt-0 mb-2 text-sm font-bold leading-normal uppercase text-H2"
              >
                <i class="mr-2 text-lg fas fa-map-marker-alt text-H2"></i>
                {{machine.address.address}}
              </div>
            </div>
            <div class="mt-5 text-center table-frame">
              <table
                class="items-center w-full bg-white border border-collapse rounded shadow-lg border-primary"
              >
                <thead
                  class="border border-t-0 border-l-0 border-r-0 bg-background border-secondary"
                >
                <tr>
                  <th
                    class="px-6 py-3 text-sm font-semibold text-left uppercase align-middle text-primary whitespace-nowrap"
                  >
                    Id
                  </th>
                  <th
                    class="px-6 py-3 text-sm font-semibold text-left uppercase align-middle text-primary whitespace-nowrap"
                  >
                    UserName
                  </th>
                  <th
                    class="px-6 py-3 text-sm font-semibold text-left uppercase align-middle text-primary whitespace-nowrap"
                  >
                    Password
                  </th>
                  <th
                    class="px-6 py-3 text-sm font-semibold text-left uppercase align-middle text-primary whitespace-nowrap"
                  >
                    Price
                  </th>
                  <th
                    class="px-6 py-3 text-sm font-semibold text-left uppercase align-middle text-primary whitespace-nowrap"
                  >
                    Status
                  </th>
                </tr>
                </thead>
                <tbody>
                <tr
                >
                  <td
                    class="p-4 px-6 text-xs text-left border-t-0 border-l-0 border-r-0 text-H3 whitespace-nowrap"
                  >
                    {{machine.id}}
                  </td>
                  <td
                    class="p-4 px-6 text-xs text-left border-t-0 border-l-0 border-r-0 text-H3 whitespace-nowrap"
                  >
                    {{machine.template.username ? machine.template.username : '-'}}
                  </td>
                  <td
                    class="p-4 px-6 text-xs text-left border-t-0 border-l-0 border-r-0 text-H3 whitespace-nowrap"
                  >
                    {{machine.password ? machine.password : '-'}}
                  </td>
                  <td
                    class="p-4 px-6 text-xs text-left border-t-0 border-l-0 border-r-0 text-H3 whitespace-nowrap"
                  >
                    {{machine.price ? machine.price : '-'}}
                  </td>
                  
                  <td
                    class="p-4 px-6 text-xs text-left border-t-0 border-l-0 border-r-0 text-H3 whitespace-nowrap"
                  >
                    <button
                      v-if="machine.status === 'active'"
                      class="p-2 mr-5 text-white rounded-full pointer-events-none bg-positive hover:shadow-lg"
                    >
                      {{machine.status}}
                    </button>
                    <button
                      v-else
                      class="p-2 mr-5 text-white rounded-full pointer-events-none bg-negative hover:shadow-lg"
                    >
                      {{machine.status}}
                    </button>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
            <div class="mt-10 text-center">
              <h3
                class="mb-2 text-xl font-semibold leading-normal text-H2"
              >
                Action
              </h3>
            </div>
            <div class="py-5 text-center table-frame">
              <table
                class="items-center w-full bg-white border border-collapse rounded shadow-lg border-primary"
              >
                <thead
                  class="border border-t-0 border-l-0 border-r-0 bg-background border-secondary"
                >
                <tr>
                  <th
                    class="px-6 py-3 text-sm font-semibold text-left uppercase align-middle text-primary whitespace-nowrap"
                  >
                    Id
                  </th>
                  <th
                    class="px-6 py-3 text-sm font-semibold text-left uppercase align-middle text-primary whitespace-nowrap"
                  >
                    Method
                  </th>
                  <th
                    class="px-6 py-3 text-sm font-semibold text-left uppercase align-middle text-primary whitespace-nowrap"
                  >
                    Status
                  </th>
                  <th
                    class="px-6 py-3 text-sm font-semibold text-left uppercase align-middle text-primary whitespace-nowrap"
                  >
                    operations
                  </th>
                </tr>
                </thead>
                <tbody>
                <tr
                >
                  <td
                    class="p-4 px-6 text-xs text-left border-t-0 border-l-0 border-r-0 text-H3 whitespace-nowrap"
                  >
                    {{machine.action.id}}
                  </td>
                  <td
                    class="p-4 px-6 text-xs text-left border-t-0 border-l-0 border-r-0 text-H3 whitespace-nowrap"
                  >
                    {{machine.action.method ? machine.action.method : '-'}}
                  </td>
                  <td
                    class="p-4 px-6 text-xs text-left border-t-0 border-l-0 border-r-0 text-H3 whitespace-nowrap"
                  >
                    {{machine.action.status ? machine.action.status : '-'}}
                  </td>
                  <td
                    class="p-4 px-6 text-xs text-left border-t-0 border-l-0 border-r-0 text-H3 whitespace-nowrap"
                  >
                    <a
                      class="block px-3 py-1 text-blueGray-500"
                      @click="dropdownPopoverShow = !dropdownPopoverShow"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                      </svg>
                    </a>
                    <div class="z-50 min-w-48">
                      <div
                        class="absolute float-left py-2 mt-1 text-base text-left list-none bg-white rounded shadow-lg min-w-48"
                        :class="[dropdownPopoverShow ? 'block' : 'hidden']"
                      >
                        <a
                          href="#pablo"
                          class="block w-full px-4 py-2 text-sm font-normal bg-transparent whitespace-nowrap text-blueGray-700"
                        >
                          start
                        </a>
                        <a
                          href="#pablo"
                          class="block w-full px-4 py-2 text-sm font-normal bg-transparent whitespace-nowrap text-blueGray-700"
                        >
                          stop
                        </a>
                        <a
                          href="#pablo"
                          class="block w-full px-4 py-2 text-sm font-normal bg-transparent whitespace-nowrap text-blueGray-700"
                        >
                          reboot
                        </a>
                        <a
                          href="#pablo"
                          class="block w-full px-4 py-2 text-sm font-normal bg-transparent whitespace-nowrap text-blueGray-700"
                        >
                          revert
                        </a>
                        <a
                          href="#pablo"
                          class="block w-full px-4 py-2 text-sm font-normal bg-transparent whitespace-nowrap text-blueGray-700"
                        >
                          snapshot
                        </a>
                        <a
                          href="#pablo"
                          class="block w-full px-4 py-2 text-sm font-normal bg-transparent whitespace-nowrap text-blueGray-700"
                        >
                          destroy
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="px-4 py-3 sm:px-6 sm:flow-root sm:flex-row-reverse">
            <button
              @click="close"
              type="button"
              class="inline-flex justify-center float-left w-full px-10 py-2 mt-3 mb-4 text-base font-medium rounded-md shadow-sm bg-primary text-background focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: "machine-details",
    props: ['machine'],
    data () {
      return {
        dropdownPopoverShow: false
      }
    },
    methods: {
      close() {
        this.$nuxt.$emit('closeModal')
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
