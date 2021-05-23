<template>
  <div id="db-nav-movie" class="nav">
    <div class="nav-wrap">
      <div class="nav-primary">
        <div class="nav-logo"></div>
        <div class="nav-search">
          <form action="https://movie.douban.com/subject_search" method="get">
            <div class="inp">
              <input
                id="inp-query"
                name="search_text"
                size="22"
                maxlength="60"
                placeholder="搜索电影、电视剧、综艺、影人"
                value=""
                autocomplete="off"
              />
            </div>
            <div class="inp-btn"><input type="submit" value="搜索" /></div>
          </form>
        </div>
      </div>
    </div>
    <div class="nav-secondary">
      <div class="nav-items">
        <ul>
          <li v-for="(nav, index) in navs" :key="index">
            <a :href="nav.href">{{ nav.title }}</a>
          </li>
        </ul>
      </div>

      <a
        href="https://movie.douban.com/annual/2018?source=movie_navigation"
        class="movieannual2018"
      ></a>
    </div>
  </div>
</template>


<script lang="ts">
import { defineComponent, ref } from "vue";
import axios from "../axios/axios";

export default defineComponent({
  setup() {
    const navs = ref([]);
    // 请求数据
    axios("/navs").then((res) => (navs.value = res.data));

    return {
      navs,
    };
  },
});
</script>

<style scoped>
#db-nav-movie {
  position: relative;
  background-color: #f0f3f5;
}

.nav {
  width: 100%;
  min-width: 1040px;
  overflow: hidden;
  zoom: 1;
  margin-bottom: 40px;
}

.nav .nav-wrap {
  border-bottom: 1px solid #e5ebe4;
}

#db-nav-movie .nav-wrap {
  border-color: #e3ebec;
}

.nav .nav-primary {
  width: 1040px;
  margin: 0 auto;
  overflow: visible !important;
  position: relative;
  padding: 10px 0 5px;
  zoom: 1;
}

.nav .nav-logo {
  float: left;
  height: 56px;
  width: 145px;
  margin: 0 13px 0 0;
}

#db-nav-movie .nav-logo {
  background: url(../assets/img/lg_movie_a12_2.png) no-repeat 0 12px;
  background-image: -webkit-image-set(
    url(../assets/img/lg_movie_a12_2.png) 1x,
    url(../assets/img/lg_movie@2x.png) 2x
  );
  background-image: -moz-image-set(
    url(../assets/img/lg_movie_a12_2.png) 1x,
    url(../assets/img/lg_movie@2x.png) 2x
  );
  background-image: -ms-image-set(
    url(../assets/img/lg_movie_a12_2.png) 1x,
    url(../assets/img/lg_movie@2x.png) 2x
  );
  background-image: -o-image-set(
    url(../assets/img/lg_movie_a12_2.png) 1x,
    url(../assets/img/lg_movie@2x.png) 2x
  );
}

.nav-search {
  margin-left: 145px;
  overflow: visible !important;
  position: relative;
  zoom: 1;
  padding: 10px 0 15px 0;
}

fieldset {
  border: 1px solid #ddd;
  padding: 0 10px;
  margin-bottom: 15px;
}

.nav-search fieldset {
  border: none;
  padding: 0;
  margin: 0;
  position: static;
}

.nav-search .inp {
  float: left;
  width: 470px;
  height: 34px;
  text-align: center;
  margin-right: -3px;
  cursor: text;
}

.nav-search .inp {
  background-image: url(../assets/img/nav_mv_bg.png?s=1);
}

.nav-search input {
  -webkit-appearance: none;
  border: none;
  background: transparent;
}

.nav-search .inp input {
  background: #fff;
  width: 96%;
  margin: 0;
  text-align: left;
  height: 30px;
  padding-left: 10px;
  height: 28px\9;
  line-height: 28px\9;
  outline: none;
}

.nav-search .inp-btn {
  position: relative;
  left: -1px;
  width: 37px;
  height: 34px;
  zoom: 1;
  overflow: hidden;
}

.nav-search .inp-btn input {
  width: 100%;
  height: 100%;
  font-size: 0;
  padding: 35px 0 0 0;
  overflow: hidden;
  color: transparent;
  cursor: pointer;
}

.nav-search .inp-btn input {
  background: url(../assets/img/nav_mv_bg.png) no-repeat 0 -40px;
}

.nav-secondary {
  width: 1040px;
  margin: 0 auto;
  padding-bottom: 0;
  overflow: hidden;
  zoom: 1;
}

.nav-secondary .nav-items {
  float: none;
  zoom: 1;
  font-size: 14px;
}

#db-nav-movie a.movieannual2018 {
  position: absolute;
  width: 186px;
  height: 96px;
  top: 10px;
  left: 50%;
  margin-left: 200px;
  background: url(../assets/img/annual_2018.png) center/contain no-repeat;
}

.nav-secondary .nav-items {
  float: none;
  zoom: 1;
  font-size: 14px;
}

.nav-secondary ul {
  margin: 9px 0;
}

.nav-secondary li {
  display: inline;
  margin-right: 25px;
}

#db-nav-movie a:link,
#db-nav-movie a:visited {
  color: #27a;
  text-decoration: none;
}

.nav-secondary:after {
  content: "\0020";
  display: block;
  clear: both;
}
</style>
