<template>
  <transition name="slide">
    <div
      class="fixed z-10 inset-0 overflow-y-auto details-modal machine-modal" role="dialog" aria-modal="true">
      <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center w-full sm:block sm:p-0">
        <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        <div class="inline-block align-bottom bg-white rounded-lg text-left
        shadow-xl transform transition-all sm:mt-20 mb-10 sm:align-middle sm:max-w-6xl sm:w-full">
          <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div class="flex flex-wrap justify-center">
              <div class="w-full flex justify-center image-cont">
                <div
                  class="relative w-36"
                >
                  <img
                    alt="..."
                    :src="machine.template.icon.address"
                    class="absolute align-middle min-h-full min-w-full rounded-full border-primary border-2 bg-white"
                  />
                </div>
              </div>
              <div class="w-full px-4 text-center mt-20 pb-0">
                <div class="flex justify-center py-4 pt-0">
                  <div class="mr-4 p-3 text-center">
                    <span
                      class="text-xl font-bold block uppercase tracking-wide text-H1"
                    >
                      {{machine.cpuCore}}
                    </span>
                    <span class="text-sm text-secondary">Cpu Core</span>
                  </div>
                  <div class="mr-4 p-3 text-center">
                    <span
                      class="text-xl font-bold block uppercase tracking-wide text-H1"
                    >
                      {{machine.memorySize}}
                    </span>
                    <span class="text-sm text-secondary">Memory Size</span>
                  </div>
                  <div class="lg:mr-4 p-3 text-center">
                    <span
                      class="text-xl font-bold block uppercase tracking-wide text-H1"
                    >
                      {{machine.diskSize}}
                    </span>
                    <span class="text-sm text-secondary">Disk Size</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="text-center mt-5">
              <h3
                class="text-xl font-semibold leading-normal mb-2 text-H1 mb-2"
              >
                {{machine.template.name}}
              </h3>
              <div
                class="text-sm leading-normal mt-0 mb-2 text-H2 font-bold uppercase"
              >
                <i class="fas fa-map-marker-alt mr-2 text-lg text-H2"></i>
                {{machine.address.address}}
              </div>
            </div>
            <div class="mt-5 text-center table-frame">
              <table
                class="items-center w-full bg-white border-collapse shadow-lg rounded border border-primary"
              >
                <thead
                  class="bg-background border border-secondary border-t-0 border-r-0 border-l-0"
                >
                <tr>
                  <th
                    class="text-sm px-6 align-middle py-3 text-primary uppercase whitespace-nowrap font-semibold text-left"
                  >
                    Id
                  </th>
                  <th
                    class="text-sm px-6 align-middle py-3 text-primary uppercase whitespace-nowrap font-semibold text-left"
                  >
                    UserName
                  </th>
                  <th
                    class="text-sm px-6 align-middle py-3 text-primary uppercase whitespace-nowrap font-semibold text-left"
                  >
                    Password
                  </th>
                  <th
                    class="text-sm px-6 align-middle py-3 text-primary uppercase whitespace-nowrap font-semibold text-left"
                  >
                    Price
                  </th>
                  <th
                    class="text-sm px-6 align-middle py-3 text-primary uppercase whitespace-nowrap font-semibold text-left"
                  >
                    Console
                  </th>
                  <th
                    class="text-sm px-6 align-middle py-3 text-primary uppercase whitespace-nowrap font-semibold text-left"
                  >
                    Status
                  </th>
                </tr>
                </thead>
                <tbody>
                <tr
                >
                  <td
                    class="text-H3 border-t-0 px-6 text-left border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                  >
                    {{machine.id}}
                  </td>
                  <td
                    class="text-H3 border-t-0 px-6 text-left border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                  >
                    {{machine.template.username ? machine.template.username : '-'}}
                  </td>
                  <td
                    class="text-H3 border-t-0 px-6 text-left border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                  >
                    {{machine.password ? machine.password : '-'}}
                  </td>
                  <td
                    class="text-H3 border-t-0 px-6 text-left border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                  >
                    {{machine.price ? machine.price : '-'}}
                  </td>
                  <td
                    class="text-H3 border-t-0 px-6 text-left border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                  >
                    {{machine.console ? machine.console : '-'}}
                  </td>
                  <td
                    class="text-H3 border-t-0 px-6 text-left border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                  >
                    <button
                      v-if="machine.status === 'active'"
                      class="bg-positive rounded-full text-white p-2 hover:shadow-lg mr-5 pointer-events-none"
                    >
                      {{machine.status}}
                    </button>
                    <button
                      v-else
                      class="bg-negative rounded-full text-white p-2 hover:shadow-lg mr-5 pointer-events-none"
                    >
                      {{machine.status}}
                    </button>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
            <div class="text-center mt-10">
              <h3
                class="text-xl font-semibold leading-normal mb-2 text-H2 mb-2"
              >
                Actions
              </h3>
            </div>
            <div class="py-5 text-center table-frame">
              <table
                class="items-center w-full bg-white border-collapse shadow-lg rounded border border-primary"
              >
                <thead
                  class="bg-background border border-secondary border-t-0 border-r-0 border-l-0"
                >
                <tr>
                  <th
                    class="text-sm px-6 align-middle py-3 text-primary uppercase whitespace-nowrap font-semibold text-left"
                  >
                    Id
                  </th>
                  <th
                    class="text-sm px-6 align-middle py-3 text-primary uppercase whitespace-nowrap font-semibold text-left"
                  >
                    Methods
                  </th>
                  <th
                    class="text-sm px-6 align-middle py-3 text-primary uppercase whitespace-nowrap font-semibold text-left"
                  >
                    Status
                  </th>
                  <th
                    class="text-sm px-6 align-middle py-3 text-primary uppercase whitespace-nowrap font-semibold text-left"
                  >
                    operations
                  </th>
                </tr>
                </thead>
                <tbody>
                <tr
                >
                  <td
                    class="text-H3 border-t-0 px-6 text-left border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                  >
                    {{machine.action.id}}
                  </td>
                  <td
                    class="text-H3 border-t-0 px-6 text-left border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                  >
                    {{machine.action.method ? machine.action.method : '-'}}
                  </td>
                  <td
                    class="text-H3 border-t-0 px-6 text-left border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                  >
                    {{machine.action.status ? machine.action.status : '-'}}
                  </td>
                  <td
                    class="text-H3 border-t-0 px-6 text-left border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                  >
                    <a
                      class="text-blueGray-500 block py-1 px-3"
                      @click="dropdownPopoverShow = !dropdownPopoverShow"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                      </svg>
                    </a>
                    <div class="min-w-48 z-50">
                      <div
                        class="bg-white text-base float-left py-2 list-none text-left rounded shadow-lg mt-1 min-w-48 absolute"
                        :class="[dropdownPopoverShow ? 'block' : 'hidden']"
                      >
                        <a
                          href="#pablo"
                          class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                        >
                          start
                        </a>
                        <a
                          href="#pablo"
                          class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                        >
                          stop
                        </a>
                        <a
                          href="#pablo"
                          class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                        >
                          reboot
                        </a>
                        <a
                          href="#pablo"
                          class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                        >
                          revert
                        </a>
                        <a
                          href="#pablo"
                          class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                        >
                          snapshot
                        </a>
                        <a
                          href="#pablo"
                          class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
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
              class="float-left mt-3 justify-center bg-primary w-full inline-flex justify-center rounded-md shadow-sm px-10 py-2 text-base font-medium text-background
              focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
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
  .machine-modal .table-frame{
    width: 80%;
    margin: auto;
  }
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
