<template>
  <div class="text-body bg-background">
    <sidebar />
    <div class="relative md:ml-64 bg-background">
      <admin-navbar />
      <admin-header />
      <div class="w-auto px-4 mx-auto -m-24 md:px-10 bg-background">
        <Nuxt
          class="admin-layout"
        />
        <footer-admin />
      </div>
    </div>
  </div>
</template>

<script>
import AdminNavbar from "~/components/Navbar/AdminNavbar.vue";
import Sidebar from "~/components/Sidebar/AdminSidebar.vue";
import AdminHeader from "~/components/Headers/AdminHeader.vue";
import FooterAdmin from "~/components/Footers/AdminFooter.vue";
export default {
  components: {
    AdminNavbar,
    Sidebar,
    AdminHeader,
    FooterAdmin,
  },
};
</script>
