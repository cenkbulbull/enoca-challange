<template>
    <div class="site-section">
      <div class="container">
        <div class="section-title">
          <h2>Sports News</h2>
          <p>Sayfa :{{ currentPage }}</p>
        </div>
        <div class="row">
          <div v-for="n in news" class="col-lg-6">
            <div class="post-entry-2 d-flex">
              <!--<div class="thumbnail" :style="{'background-image': 'url('+ urlToImage+')'}"></div>-->
              <div class="thumbnail"></div>
              <div class="contents">
                <h2>
                  <a :href="n.url" target="_blank">{{ n.title }}</a>
                </h2>
                <p class="mb-3">
                  {{ n.description }} //content & description & image bilgisi yok
                </p>
                <div class="post-meta">
                  <span class="d-block"
                    ><a href="#">{{ n.author }}</a></span
                  >
                  <span class="date-read">{{ n.publishedAt }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
  
  
        <div class="row">
          <div class="col-lg-6">
            <ul class="custom-pagination list-unstyled">
              <li v-for="(page, i) in pages">
                <a :class="currentPage == i+1 ? 'activePage' : ''" @click="nextNews(i + 1)">{{ i + 1 }}</a>
              </li>
            </ul>
          </div>
        </div>
  
  
      </div>
    </div>
  
    <div class="site-section subscribe bg-light">
      <div class="container">
        <form action="#" class="row align-items-center">
          <div class="col-md-5 mr-auto">
            <h2>Newsletter Subcribe</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Perferendis aspernatur ut at quae omnis pariatur obcaecati possimus
              nisi ea iste!
            </p>
          </div>
          <div class="col-md-6 ml-auto">
            <div class="d-flex">
              <input
                type="email"
                class="form-control"
                placeholder="Enter your email"
              />
              <button type="submit" class="btn btn-secondary">
                <span class="icon-paper-plane"></span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </template>
  <script setup>
  import { onMounted, ref } from "vue";
  import axios from "axios";
  
  const data = ref();
  const news = ref();
  const pages = ref();
  const currentPage = ref();
  
  onMounted(() => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=tr&category=sports&page=1&apiKey=" +
          process.env.VUE_APP_NEWSAPIKEY
      )
      .then((obj) => {
        //console.log(obj.data.articles)
        data.value = obj.data;
        console.log(data.value);
        news.value = obj.data.articles;
        console.log(news.value);
  
        pages.value = Math.ceil(obj.data.totalResults / 20); // sayfa sayısı
        currentPage.value = 1
      });
  });
  
  const nextNews = (e) => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=tr&category=sports&page=" +
          e +
          "&apiKey=" +
          process.env.VUE_APP_NEWSAPIKEY
      )
      .then((obj) => {
        //console.log(obj.data.articles)
        data.value = obj.data;
        console.log(data.value);
        news.value = obj.data.articles;
        console.log(news.value);
  
        pages.value = Math.ceil(obj.data.totalResults / 20); // sayfa sayısı
        
        window.scrollTo({ top: 150, behavior: 'smooth' });
  
        currentPage.value = e
      });
  };
  </script>
  <style scoped>
  .thumbnail {
    background-image: url("../assets/images/newsBg.jpg");
  }
  .activePage{
    background-color: rgb(167, 43, 43)!important;
  }
  .custom-pagination a{
    font-size: 10px;
    border: 1px solid white;
  }
  .custom-pagination a:hover{
    cursor: pointer;
  }
  </style>
  