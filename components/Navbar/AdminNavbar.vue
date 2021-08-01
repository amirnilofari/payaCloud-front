<template>
  <!-- Navbar -->
  <nav
    class="absolute top-0 left-0 z-10 flex items-center w-full p-4 bg-transparent md:flex-row md:flex-nowrap md:justify-start"
  >
    <div
      class="flex flex-wrap items-center justify-between w-full px-4 mx-autp md:flex-nowrap md:px-10"
    >
      <!-- Brand -->
      <a
        class="hidden text-sm font-semibold uppercase text-H1 lg:inline-block"
        href="javascript:void(0)"
      >
        Dashboard
      </a>
      <!-- Form -->
      <form
        class="flex-row flex-wrap items-center hidden mr-3 md:flex lg:ml-auto"
      >
        <div class="relative flex flex-wrap items-stretch w-full">
          <span
            class="absolute z-10 items-center justify-center w-8 h-full py-3 pl-3 text-base font-normal leading-snug text-center bg-transparent rounded text-blueGray-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-6 text-H2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </span>
          <input
            type="text"
            placeholder="Search"
            class="relative w-full px-3 py-3 pl-10 mt-1 text-sm bg-white border-0 rounded shadow outline-none placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
          />
        </div>
      </form>
      <!-- User -->
      <ul class="flex-col items-center hidden list-none md:flex-row md:flex">
        <list-drop-down />
      </ul>
    </div>
  </nav>
  <!-- End Navbar -->
</template>

<script>
import ListDropDown from "~/components/Navbar/ListDropDown.vue";

export default {
  components: {
    ListDropDown,
  },
};
</script>
