<template>
  <div class="header-top">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-12 col-lg-6 d-flex">
          <a href="#" class="site-logo">Fazlı Cenk Bülbül</a>
        </div>
        <div class="col-12 col-lg-6 ml-auto d-flex">
          <div class="ml-md-auto top-social d-none d-lg-inline-block">
            <a
              href="https://github.com/cenkbulbull"
              target="_blank"
              class="d-inline-block p-3"
              ><span class="icon-github"></span
            ></a>
            <a
              href="https://www.linkedin.com/in/cenk-b%C3%BClb%C3%BCl-a73b4a231/"
              target="_blank"
              class="d-inline-block p-3"
              ><span class="icon-linkedin"></span
            ></a>
          </div>
          <form action="#" class="search-form d-inline-block">
            <div class="d-flex">
              <input
                v-model="keyword"
                class="form-control"
                placeholder="Search..."
              />
              <button
                @click="$router.push('/search/' + keyword)"
                type="submit"
                class="btn btn-secondary"
              >
                <span class="icon-search"></span>
              </button>
            </div>
          </form>
        </div>
        <div class="col-6 d-block d-lg-none text-right"></div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";

const keyword = ref();
</script>
<style scoped>
@media screen and (max-width: 1000px) {
  .site-logo{
    width: 100%;
    text-align: center;
  }
}
</style>
