<template>
  
    <div
      class="fixed inset-0 z-10 overflow-y-auto details-modal" role="dialog" aria-modal="true">
      <div class="flex items-end justify-center w-full min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div class="fixed inset-0 transition-opacity bg-opacity-50 bg-H1" aria-hidden="true"></div>

        <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

        <div class="inline-block overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:my-6 sm:align-middle sm:max-w-xl sm:w-full">
          <form
            class="p-6"
          >
            <h3 v-if="!isEdit" class="mb-6 ml-4 text-xl font-semibold text-primary">New Node</h3>
            <h3 v-else class="mb-6 ml-4 text-xl font-semibold text-primary">Edit Node</h3>
            <div class="flex flex-wrap">

              <div class="w-full px-4 mb-2 lg:w-4/12">
                <div class="relative w-full mb-3">
                  <label
                    class="block mb-2 text-xs font-bold uppercase text-H1"
                  >
                    Name
                  </label>
                  <input
                    v-model="name"
                    type="text"
                    class="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border rounded shadow border-primary placeholder-primary text-H1 focus:outline-none focus:ring"
                    placeholder="Name"
                  />
                </div>
              </div>
              <div class="w-full px-4 mb-2 lg:w-4/12">
                <div class="relative w-full mb-3">
                  <label
                    class="block mb-2 text-xs font-bold uppercase text-H1"
                  >
                    Networks
                  </label>
                  <select
                    v-model="networkId"
                    class="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border rounded shadow border-primary placeholder-primary text-primary focus:outline-none focus:ring"
                  >
                    <option value="" disabled selected>Network</option>
                    <option
                      v-for="network in networks"
                      :key="network.id"
                      :value="network.id"
                    >
                      {{ network.name }}
                    </option>
                  </select>
                </div>
              </div>
            <div class="w-full px-4 mb-2 lg:w-4/12">
                <div class="relative w-full mb-3">
                  <label
                    class="block mb-2 text-xs font-bold uppercase text-H1"
                  >
                    Packages
                  </label>
                  <select
                    v-model="packageId"
                    class="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border rounded shadow border-primary placeholder-primary text-primary focus:outline-none focus:ring"
                  >
                    <option value="" disabled selected>Package</option>
                    <option
                      v-for="packag in packags"
                      :key="packag.id"
                      :value="packag.id"
                    >
                      {{ packag.name }}
                    </option>
                  </select>
                </div>
              </div>

              <div class="w-full px-4 mb-2 lg:w-4/12">
                <div class="relative w-full mb-3">
                  <label
                    class="block mb-2 text-xs font-bold uppercase text-H1"
                  >
                    Pools
                  </label>
                  <select
                    v-model="poolId"
                    class="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border rounded shadow border-primary placeholder-primary text-primary focus:outline-none focus:ring"
                  >
                    <option value="" disabled selected>Pool</option>
                    <option
                      v-for="pool in pools"
                      :key="pool.id"
                      :value="pool.id"
                    >
                      {{ pool.name }}
                    </option>
                  </select>
                </div>
              </div>

              <div class="w-full px-4 mb-2 lg:w-4/12">
                <div class="relative w-full mb-3">
                  <label
                    class="block mb-2 text-xs font-bold uppercase text-H1"
                  >
                    Sections
                  </label>
                  <select
                    v-model="sectionId"
                    class="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border rounded shadow border-primary placeholder-primary text-primary focus:outline-none focus:ring"
                  >
                    <option value="" disabled selected>Section</option>
                    <option
                      v-for="section in sections"
                      :key="section.id"
                      :value="section.id"
                    >
                      {{ section.name }}
                    </option>
                  </select>
                </div>
              </div>

              <div class="w-full px-4 mb-2 lg:w-4/12">
                <div class="relative w-full mb-3">
                  <label
                    class="block mb-2 text-xs font-bold uppercase text-H1"
                  >
                    Storages
                  </label>
                  <select
                    v-model="storageId"
                    class="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border rounded shadow border-primary placeholder-primary text-primary focus:outline-none focus:ring"
                  >
                    <option value="" disabled selected>Storage</option>
                    <option
                      v-for="storage in storages"
                      :key="storage.id"
                      :value="storage.id"
                    >
                      {{ storage.name }}
                    </option>
                  </select>
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
</template>


<script>
export default {
  data() {
    return {
      id: "",
      name: "",
      networkId: "",
      packageId: "",
      poolId: "",
      sectionId: "",
      storageId: "",
    };
  },
  props: ["isEdit", "selectedNode", "networks", "packags", "pools", "sections", "storages",],
  methods: {
    close() {
      this.$nuxt.$emit("toggleCreateModal");
    },
    submitForm() {
      let formdata = new FormData();
      formdata.append("name", this.name);
      formdata.append("networkId", this.networkId);
      formdata.append("packageId", this.packageId);
      formdata.append("poolId", this.poolId);
      formdata.append("sectionId", this.sectionId);
      formdata.append("storageId", this.storageId);

      if (this.isEdit) {
        this.$axios
          .$post("backend/node/update/" + this.id, formdata)
          .then((response) => {
            if (response.message) {
              this.$toast.error(response.message)
            } else {
              this.$nuxt.$emit("onLoadData")
              this.$toast.success("Successfully edited!")
              this.close()
            }
          })
      } else {
        this.$axios
          .$post("backend/node/create", formdata)
          .then((response) => {
            if (response.message) {
              this.$toast.error(response.message)
            } else {
              this.$nuxt.$emit("onLoadData")
              this.$toast.success("Successfully created!")
              this.close()
            }
          })
      }
    },
  },
  created() {
    if (this.isEdit) {
      this.id = this.selectedNode.id;
      this.name = this.selectedNode.name;
      this.networkId = this.selectedNode.network.id;
      this.packageId = this.selectedNode.package.id;
      this.poolId = this.selectedNode.pool.id;
      this.sectionId = this.selectedNode.section.id;
      this.storageId = this.selectedNode.storage.id;
    } else {
      this.id = "";
      this.name = "";
      this.networkId = "";
      this.packageId = "";
      this.poolId = "";
      this.sectionId = "";
      this.storageId = "";
    }
  },
};
</script>

<style scoped>
.details-modal .image-cont {
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

