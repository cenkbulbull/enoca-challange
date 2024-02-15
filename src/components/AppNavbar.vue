<template>
  <div
    class="site-navbar py-2 js-sticky-header site-navbar-target d-none pl-0 d-lg-block"
    role="banner"
  >
    <div class="container">
      <div class="d-flex align-items-center">
        <div class="mr-auto">
          <nav
            class="site-navigation position-relative text-right"
            role="navigation"
          >
            <ul
              class="site-menu main-menu js-clone-nav mr-auto d-none pl-0 d-lg-block"
            >
              <li>
                <router-link exact-active-class="active" to="/" class="nav-link text-left">Home</router-link>
              </li>
              <li>
                <router-link exact-active-class="active" to="/business" class="nav-link text-left">Business</router-link>
              </li>
              <li>
                <router-link exact-active-class="active" to="/entertainment" class="nav-link text-left">Entertainment</router-link>
              </li>
              <li>
                <router-link exact-active-class="active" to="/science" class="nav-link text-left">Science</router-link>
              </li>
              <li>
                <router-link exact-active-class="active" to="/health" class="nav-link text-left">Health</router-link>
              </li>
              <li>
                <router-link exact-active-class="active" to="/general" class="nav-link text-left">General</router-link>
              </li>
              <li>
                <router-link exact-active-class="active" to="/sports" class="nav-link text-left">Sports</router-link>
              </li>
              <li>
                <router-link exact-active-class="active" to="/technology" class="nav-link text-left">Technology</router-link>
              </li>
              <li>
                <router-link exact-active-class="active" to="/about" class="nav-link text-left">About</router-link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';

const isOpen = ref(false)

</script>
<style scoped>
.active{
  color: rgb(167, 43, 43) !important;
}
</style>
