<template>
  <AppHeader/>
  <AppNavbar/>
  <router-view/>
  <AppFooter/>
</template>
<script setup>
import AppHeader from './components/AppHeader.vue'
import AppNavbar from './components/AppNavbar.vue'
import AppFooter from './components/AppFooter.vue'
</script>
