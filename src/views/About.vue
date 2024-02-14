<template>
    <div class="site-section">
      <div class="container">
        <div class="row">
          <div class="col-12 text-left">
            <div class="section-title mb-5">
              <h2>Hakkımda</h2>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-4">
            <p>
              <img src="../assets/images/pp.jpg" alt="Image" class="img-fluid" width="300" height="300">
            </p>
          </div>
          <div class="col-lg-8 pl-md-5">
            <p>
              18.06.2001 Zonguldak doğumluyum. Liseyi Zonguldak Erdemir Anadolu Lisesi'nde okudum. 2019 yılında Bülent Ecevit Üniversitesi Bilgisayar Mühendisliği bölümünü kazandım. 2023 yılında mezun oldum. Üniversite hayatımda web geliştirme alanına ilgi duydum ve bu alanda kendimi geliştirdim. Şuan Vue Js ile frontend tarafında çalışmaktayım.
            </p>
            <ul class="ul-check list-unstyled success mt-2">
              <li>Html</li>
              <li>Css</li>
              <li>Javascript</li>
              <li>Jquery</li>
              <li>Vue</li>
              <li>Bootstrap</li>
              <li>PrimeVue</li>
              <li>Vuex</li>
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
                  <h2>Çalışmalar</h2>
                </div>
              </div>
            </div>
            <div class="row">

              <div v-for="project in projects" class="col-md-6">
                <div class="post-entry-1">
                  <a :href="project.github" target="_blank"><img :src="require('@/assets/images/'+project.image)" alt="Image" class="img-fluid" style="height: 250px;width: 100%;"></a>
                  <h2><a :href="project.github" target="_blank">{{project.name}}</a></h2>
                  <p>{{project.description}}</p>
                </div>
              </div>

              
            </div>
          </div>

        </div>
      </div>
    </div>
</template>
<script setup>
import { ref } from "vue";

const projects = ref([
  {
    name: "Anı Paylaşım Platformu",
    image: "sosyalplatform.png",
    description:
      "MEVNStack gelişimi için hazırladığım paylaşım platformu ,Başlıca kullanılanlar: Node Express MongoDb Vue,Paketler: vuex, vue-router, axios, bootstrap, cryptoJs, vuex-persistedstate,securels, emailjs, sweetalert, vue3-toastify",
    github: "https://github.com/cenkbulbull/social-platform",
  },
  {
    name: "İş Yardımlaşma Programı",
    image: "istakip.png",
    description:
      "Başlıca kullanılanlar: Node Express MongoDb Nuxt2 Vuesax, Paketler: vuex, mongoose, express-zip, multer, axios, js-cookie, sweetalert, vue-cool-lightbox,",
    github: "https://github.com/cenkbulbull/job-tracking",
  },
  {
    name: "Movie App",
    image: "movieapp.png",
    description:
      "Tmdb apiden çektiğim verilerle movie app, Vue2 / Vuex / Vue-router / Axios / Firebase",
    github: "https://github.com/cenkbulbull/movie-app",
  },
  {
    name: "Ip Adress Tracker",
    image: "adresstracker.jpg",
    description:
      "https://www.ip-api.com/ apisini ve vue2-leaflet kütüphanesini kullanarak hazırlanmış ip adres bulucu",
    github: "https://github.com/cenkbulbull/vue-Ip-tracker",
  },
  {
    name: "Github Find Users",
    image: "githubapi.png",
    description:
      "Github api kullanarak oluşturduğum Vue2 ile kullanıcı adına göre profil ve repoları gösteren küçük bir uygulama ",
    github: "https://github.com/cenkbulbull/vue-github-find-users",
  },
  {
    name: "Single Page Developer Portfolio",
    image: "spaportfolio.png",
    description:
      "Vue2 ile single page application olarak hazırlanmış developer portfolio",
    github: "https://github.com/cenkbulbull/single-page-developer-portfolio",
  },
  {
    name: "Qr Code Generator",
    image: "qrcodegenerator.png",
    description: "Vue2 ile basit bir qr code oluşturucu.",
    github: "https://github.com/cenkbulbull/vue-qrcode-generator",
  },
  {
    name: "Password Generator",
    image: "passwordgenerator.jpg",
    description: "Vue2 ile basit bir şifre oluşturucu.",
    github: "https://github.com/cenkbulbull/vue-password-generator",
  },
]);


</script>