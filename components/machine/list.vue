<template>
  <div>
    <div class="rounded-t mb-0 px-4 py-6 border-0 bg-white mt-14">
      <div class="flex flex-wrap items-center">
        <div class="relative w-full px-4 max-w-full flex-grow flex-1">
          <h3
            class="font-semibold text-lg text-primary"
          >
            Machines List
          </h3>
        </div>
      </div>
    </div>
    <table
      class="items-center w-full bg-white border-collapse shadow-lg rounded"
    >
      <thead
        class="bg-background"
      >
      <tr>
        <th
          class="text-sm px-6 align-middle border border-primary py-3 text-primary uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
        >
          Project
        </th>
        <th
          class="text-sm px-6 align-middle border border-primary py-3 text-primary uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
        >
          Budget
        </th>
        <th
          class="text-sm px-6 align-middle border border-primary py-3 text-primary uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
        >
          Status
        </th>
        <th
          class="text-sm px-6 align-middle border border-primary py-3 text-primary uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
        >
          Users
        </th>
        <th
          class="text-sm px-6 align-middle border border-primary py-3 text-primary uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
        >
          Completion
        </th>
        <th
          class="text-sm px-6 align-middle border border-primary py-3 text-primary uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
        ></th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <th
          class="text-H3 border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center"
        >
          <img
            src="@/assets/img/warning.png"
            class="h-12 w-12 bg-white rounded-full border"
            alt="..."
          />
          <span
            class="ml-3 font-bold"
          >
              Argon Design System
            </span>
        </th>
        <td
          class="text-H3 border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
        >
          $2,500 USD
        </td>
        <td
          class="text-H3 border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
        >
          <i class="fas fa-circle text-orange-500 mr-2"></i> pending
        </td>
        <td
          class="text-H3 border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
        >
          test
        </td>
        <td
          class="text-H3 border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
        >
          <div class="flex items-center">
            <span class="mr-2">60%</span>
          </div>
        </td>
        <td
          class="text-H3 border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
        >
          <button
            class="bg-primary rounded-full text-white p-2 hover:shadow-lg mr-5"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          </button>
          <button
            class="bg-primary rounded-full text-white p-2 hover:shadow-lg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>
          </button>
        </td>
      </tr>
      <tr>
        <th
          class="text-H3 border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center"
        >
          <img
            src="@/assets/img/warning.png"
            class="h-12 w-12 bg-white rounded-full border"
            alt="..."
          />
          <span
            class="ml-3 font-bold"
          >
              Argon Design System
            </span>
        </th>
        <td
          class="text-H3 border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
        >
          $2,500 USD
        </td>
        <td
          class="text-H3 border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
        >
          <i class="fas fa-circle text-orange-500 mr-2"></i> pending
        </td>
        <td
          class="text-H3 border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
        >
          test
        </td>
        <td
          class="text-H3 border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
        >
          <div class="flex items-center">
            <span class="mr-2">60%</span>
          </div>
        </td>
        <td
          class="text-H3 border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
        >
          <button
            class="bg-primary rounded-full text-white p-2 hover:shadow-lg mr-5"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          </button>
          <button
            class="bg-primary rounded-full text-white p-2 hover:shadow-lg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>
          </button>
        </td>
      </tr>
      <tr>
        <th
          class="text-H3 border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center"
        >
          <img
            src="@/assets/img/warning.png"
            class="h-12 w-12 bg-white rounded-full border"
            alt="..."
          />
          <span
            class="ml-3 font-bold"
          >
              Argon Design System
            </span>
        </th>
        <td
          class="text-H3 border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
        >
          $2,500 USD
        </td>
        <td
          class="text-H3 border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
        >
          <i class="fas fa-circle text-orange-500 mr-2"></i> pending
        </td>
        <td
          class="text-H3 border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
        >
          test
        </td>
        <td
          class="text-H3 border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
        >
          <div class="flex items-center">
            <span class="mr-2">60%</span>
          </div>
        </td>
        <td
          class="text-H3 border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
        >
          <button
            class="bg-primary rounded-full text-white p-2 hover:shadow-lg mr-5"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          </button>
          <button
            class="bg-primary rounded-full text-white p-2 hover:shadow-lg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>
          </button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
    export default {
        name: "list"
    }
</script>

<style scoped>

</style>
