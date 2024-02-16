<template>
  <div class="site-section py-0">
    <!--<div class="owl-carousel hero-slide owl-style">
      <div class="site-section">
        <div class="container">
          <div class="half-post-entry d-block d-lg-flex bg-light">
            <div
              class="img-bg"
              style="background-image: url('images/big_img_1.jpg')"
            ></div>
            <div class="contents">
              <span class="caption">Editor's Pick</span>
              <h2>
                <a href="blog-single.html"
                  >News Needs to Meet Its Audiences Where They Are</a
                >
              </h2>
              <p class="mb-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptate vero obcaecati natus adipisci necessitatibus eius,
                enim vel sit ad reiciendis. Enim praesentium magni delectus cum,
                tempore deserunt aliquid quaerat culpa nemo veritatis, iste
                adipisci excepturi consectetur doloribus aliquam accusantium
                beatae?
              </p>

              <div class="post-meta">
                <span class="d-block"
                  ><a href="#">Dave Rogers</a> in <a href="#">Food</a></span
                >
                <span class="date-read"
                  >Jun 14 <span class="mx-1">&bullet;</span> 3 min read
                  <span class="icon-star2"></span
                ></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="site-section">
        <div class="container">
          <div class="half-post-entry d-block d-lg-flex bg-light">
            <div
              class="img-bg"
              style="background-image: url('images/big_img_1.jpg')"
            ></div>
            <div class="contents">
              <span class="caption">Editor's Pick</span>
              <h2>
                <a href="blog-single.html"
                  >News Needs to Meet Its Audiences Where They Are</a
                >
              </h2>
              <p class="mb-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptate vero obcaecati natus adipisci necessitatibus eius,
                enim vel sit ad reiciendis. Enim praesentium magni delectus cum,
                tempore deserunt aliquid quaerat culpa nemo veritatis, iste
                adipisci excepturi consectetur doloribus aliquam accusantium
                beatae?
              </p>

              <div class="post-meta">
                <span class="d-block"
                  ><a href="#">Dave Rogers</a> in <a href="#">Food</a></span
                >
                <span class="date-read"
                  >Jun 14 <span class="mx-1">&bullet;</span> 3 min read
                  <span class="icon-star2"></span
                ></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>-->

    <carousel :items-to-show="1">
      <slide v-for="(slide, index) in sliderNews" :key="index">
        <div class="site-section">
          <div class="container">
            <div class="half-post-entry d-block d-lg-flex bg-light" >
              <div class="img-bg"></div>
              <div class="contents">
                <h2>
                  <a :href="slide.url" target="_blank">{{ slide.title }}</a>
                </h2>
                <p class="mb-3">
                  {{ slide.description }} //content & description & image
                  bilgisi yok
                </p>

                <div class="post-meta">
                  <span class="d-block">{{ slide.author }}</span>
                  <span class="date-read">{{ slide.publishedAt }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </slide>

      <template #addons>
        <navigation />
        <pagination />
      </template>
    </carousel>

  </div>

  <div class="site-section">
    <div class="container">
      <div class="section-title">
        <h2>News</h2>
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
              <a
                :class="currentPage == i + 1 ? 'activePage' : ''"
                @click="nextNews(i + 1)"
                >{{ i + 1 }}</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <div class="site-section">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="row">
              <div class="col-12">
                <div class="section-title">
                  <h2>Foreign News</h2>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <div v-for="news in foreignNews" class="post-entry-2 d-flex">
                  <div class="contents">
                    <h2><a :href="news.url" target="_blank">{{news.title}}</a></h2>
                    <div class="post-meta">
                      <span class="d-block">{{news.author}}</span>
                      <span class="date-read">{{ news.publishedAt }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import axios from "axios";

const data = ref();
const news = ref();
const pages = ref();
const currentPage = ref();

const sliderNews = ref([]);

const foreignNews = ref([]);

onMounted(() => {
  axios
    .get(
      "https://newsapi.org/v2/top-headlines?country=tr&page=1&apiKey=" +
        process.env.VUE_APP_NEWSAPIKEY
    )
    .then((obj) => {
      //console.log(obj.data.articles)
      data.value = obj.data;
      //console.log(data.value);
      news.value = obj.data.articles;
      //console.log(news.value);

      pages.value = Math.ceil(obj.data.totalResults / 20); // sayfa sayısı
      currentPage.value = 1;

      for(let i=0;i<3;i++){
        sliderNews.value.push(news.value[i])
      }

    });

    //yurtdışı haber
    axios
    .get(
      "https://newsapi.org/v2/top-headlines?country=us&page=1&apiKey=" +
        process.env.VUE_APP_NEWSAPIKEY
    )
    .then((obj) => {
      for(let i=0;i<3;i++){
        //console.log(obj.data.articles[i])
        foreignNews.value.push(obj.data.articles[i])
      }
      

    });
});

const nextNews = (e) => {
  axios
    .get(
      "https://newsapi.org/v2/top-headlines?country=tr&page=" +
        e +
        "&apiKey=" +
        process.env.VUE_APP_NEWSAPIKEY
    )
    .then((obj) => {
      //console.log(obj.data.articles)
      data.value = obj.data;
      //console.log(data.value);
      news.value = obj.data.articles;
      //console.log(news.value);

      pages.value = Math.ceil(obj.data.totalResults / 20); // sayfa sayısı

      window.scrollTo({ top: 800, behavior: "smooth" });

      currentPage.value = e;
    });
};
</script>
<style scoped>
.thumbnail {
  background-image: url("../assets/images/newsBg.jpg");
}
.activePage {
  background-color: rgb(167, 43, 43) !important;
}
.custom-pagination a {
  font-size: 10px;
  border: 1px solid white;
}
.custom-pagination a:hover {
  cursor: pointer;
}

.img-bg {
  background-image: url("../assets/images/newsBg.jpg");
}
</style>
