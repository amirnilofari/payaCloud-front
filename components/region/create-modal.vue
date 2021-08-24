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
            <h3 v-if="!isEdit" class="mb-6 ml-4 text-xl font-semibold text-primary">New Region</h3>
            <h3 v-else class="mb-6 ml-4 text-xl font-semibold text-primary">Edit Region</h3>
            <div class="flex flex-wrap">
              <div class="w-full px-4 mb-2 lg:w-6/12">
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
              <div class="w-full px-4 mb-2 lg:w-6/12">
                <div class="relative w-full mb-3">
                  <label
                    class="block mb-2 text-xs font-bold uppercase text-H1"
                  >
                    Icons
                  </label>
                  <select
                    v-model="iconId"
                    class="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border rounded shadow border-primary placeholder-primary text-primary focus:outline-none focus:ring"
                  >
                    <option value="" disabled selected>Icon</option>
                    <option
                      v-for="icon in icons"
                      :key="icon.id"
                      :value="icon.id"
                    >
                      {{ icon.name }}
                    </option>
                  </select>
                </div>
              </div>

              <div class="w-full px-4 mb-2 lg:w-6/12">
                <div class="relative w-full mb-3">
                  <label
                    class="block mb-3 text-xs font-bold uppercase text-H1"
                  >
                    status
                  </label>
                  <div class="flex items-center">
                    <input
                      v-model="status"
                      value="active"
                      id="active"
                      name="status"
                      type="radio"
                      class="w-4 h-4 focus:ring-indigo-500 text-primary border-H2"
                    />
                    <label
                      for="active"
                      class="block ml-3 text-sm font-medium text-H1"
                    >
                      Active
                    </label>
                    <input
                      v-model="status"
                      value="pending"
                      id="pending"
                      name="status"
                      type="radio"
                      class="w-4 h-4 ml-5 focus:ring-indigo-500 text-primary border-H2"
                    />
                    <label
                      for="pending"
                      class="block ml-3 text-sm font-medium text-H1"
                    >
                      Pending
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
      id: "",
      name: "",
      status: "",
      iconId: "",
    };
  },
  props: ["isEdit", "selectedRegion", "icons"],
  methods: {
    close() {
      this.$nuxt.$emit("toggleCreateModal");
    },
    submitForm() {
      let formdata = new FormData();
      formdata.append("name", this.name);
      formdata.append("status", this.status);
      formdata.append("iconId", this.iconId);

      if (this.isEdit) {
        this.$axios
          .$post("backend/region/update/" + this.id, formdata)
          .then((response) => {
            if (response.message) {
              this.$toast.error(response.message)
            } else {
              this.$nuxt.$emit("onLoadData")
              this.$toast.success("Successfully edited!")
              this.close()
            }
          });
      } else {
        this.$axios
          .$post("backend/region/create", formdata)
          .then((response) => {
            if (response.message) {
              this.$toast.error(response.message)
            } else {
              this.$nuxt.$emit("onLoadData")
              this.$toast.success("Successfully created!")
              this.close()
            }
          });
      }
    },
  },
  created() {
    if (this.isEdit) {
      this.id = this.selectedRegion.id;
      this.name = this.selectedRegion.name;
      this.status = this.selectedRegion.status;
      this.iconId = this.selectedRegion.icon.id;
    } else {
      this.id = "";
      this.name = "";
      this.status = "";
      this.iconId = "";
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
