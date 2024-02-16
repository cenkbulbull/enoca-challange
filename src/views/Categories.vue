<template>
  <div class="site-section">
    <div class="container">
      <div class="row">
        <div class="col-lg-3">
          <div class="section-title">
            <h2>Filter</h2>
          </div>

          <form>
            <div class="form-group">
              <label>Category</label>
              <select v-model="filterSearch.category" class="form-control">
                <option value="business">Business</option>
                <option value="entertainment">Entertainment</option>
                <option value="health">Health</option>
                <option value="science">Science</option>
                <option value="sports">Sports</option>
                <option value="technology">Technology</option>
              </select>
            </div>
            <div class="form-group">
              <label>Country</label>
              <select v-model="filterSearch.country" class="form-control">
                <option value="tr">Türkiye</option>
                <option value="fr">France</option>
                <option value="us">Usa</option>
                <option value="ru">Russia</option>
              </select>
            </div>
          </form>

          <button @click="search" class="btn btn-info">Search</button>
          <!--<p>
            <a href="#" class="more"
              >Filtreyi Temizle <span class="icon-keyboard_arrow_right"></span
            ></a>
          </p>-->
        </div>

        <div class="col-lg-9">
          <div class="section-title">
            <span class="caption d-block small">Categories</span>
            <h2>{{ filterSearch.category.toUpperCase() }}</h2>
          </div>

          <div v-for="n in news" class="post-entry-2 d-flex">
            <div
              class="thumbnail order-md-2"
              :style="{ 'background-image': 'url(' + n.urlToImage + ')' }"
            ></div>
            <div class="contents order-md-1 pl-0">
              <h2>
                <a :href="n.url" target="_blank">{{ n.title }}</a>
              </h2>
              <p class="mb-3">
                {{ n.description }}
              </p>
              <div class="post-meta">
                <span class="d-block"
                  ><a>{{ n.author }} </a></span
                >
                <span class="date-read">{{ n.publishedAt }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-12">
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

const filterSearch = ref({
  category: "business",
  country: "tr",
});
const news = ref();
const pages = ref();
const currentPage = ref();

onMounted(() => {
  axios
    .get(
      "https://newsapi.org/v2/top-headlines?country=" +
        filterSearch.value.country +
        "&category=" +
        filterSearch.value.category +
        "&page=1&apiKey=" +
        process.env.VUE_APP_NEWSAPIKEY
    )
    .then((obj) => {
      //console.log(obj.data.articles);
      news.value = obj.data.articles;

      pages.value = Math.ceil(obj.data.totalResults / 20); // sayfa sayısı
      currentPage.value = 1;
    });
});

const search = () => {
  axios
    .get(
      "https://newsapi.org/v2/top-headlines?country=" +
        filterSearch.value.country +
        "&category=" +
        filterSearch.value.category +
        "&page=1&apiKey=" +
        process.env.VUE_APP_NEWSAPIKEY
    )
    .then((obj) => {
      console.log(obj.data.articles);
      news.value = obj.data.articles;

      pages.value = Math.ceil(obj.data.totalResults / 20); // sayfa sayısı
      currentPage.value = 1;
    });
};

const nextNews = (e) => {
  axios
    .get(
      "https://newsapi.org/v2/top-headlines?country=" +
        filterSearch.value.country +
        "&category=" +
        filterSearch.value.category +
        "&page=" +
        e +
        "&apiKey=" +
        process.env.VUE_APP_NEWSAPIKEY
    )
    .then((obj) => {
      news.value = obj.data.articles;

      pages.value = Math.ceil(obj.data.totalResults / 20); // sayfa sayısı

      window.scrollTo({ top: 300, behavior: "smooth" });

      currentPage.value = e;
    });
};
</script>
<style scoped>
.activePage {
  background-color: rgb(167, 43, 43) !important;
}
.custom-pagination{
    text-align: center;
}
.custom-pagination a {
  font-size: 10px;
  border: 1px solid white;
}
.custom-pagination a:hover {
  cursor: pointer;
}
</style>
