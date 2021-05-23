<template>
  <section class="reviews">
    <!-- section-hd -->
    <div class="section-hd row">
      <h2 class="flex-1">
        最受欢迎的影评
        <span>
          <a href="https://movie.douban.com/review/best/">更多热门影评»</a>
        </span>
        <span>
          <a href="https://movie.douban.com/review/latest/">新片影评»</a>
        </span>
      </h2>
    </div>
    <!-- section-hd -->
    <!-- reviews-bd -->
    <div class="reviews-bd">
      <!-- review -->
      <div class="review" v-for="data in reviewsDatas" :key="data.moveUrl">
        <div class="review-hd">
          <a :href="data.moveUrl">
            <img class="lazy" :src="getImg(data.img)" :alt="data.movieTitle" />
          </a>
        </div>
        <!-- review-bd  -->
        <div class="review-bd">
          <h3>
            <a :href="data.subjectUrl" class="">{{ data.title }}</a>
          </h3>

          <div class="review-meta">
            <a :href="data.authorUrl">{{ data.author }}</a> 评论
            <a :href="data.movieUrl">《{{ data.movieTitle }}》</a>

            <span class="allstar50"></span>
          </div>
          <div class="review-content">
            {{ data.content }}
            <a :href="data.subjectUrl">(全文)</a>
          </div>
        </div>
      </div>
      <!-- review -->
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import axios from "../../axios/axios";
import { getImg } from "../../libs/common";

export default defineComponent({
  setup() {
    const reviewsDatas = ref([]);
    axios("/reviews").then((res) => (reviewsDatas.value = res.data));

    return {
      reviewsDatas,
      getImg,
    };
  },
});
</script>

<style scoped>
.review {
  overflow: hidden;
  zoom: 1;
  margin-bottom: 24px;
  padding-bottom: 24px;
  border-bottom: 1px solid #eaeaea;
}

.review:last-of-type {
  border: 0 none;
}

.review-hd {
  float: left;
  width: 68px;
}

.review-hd img {
  width: 68px;
}

.review-bd {
  padding-left: 83px;
}

.review-bd h3 {
  margin: 0;
  height: auto;
  background: none;
}

.review-bd .review-meta {
  color: #666;
  padding: 5px 0;
}

.review-bd .review-meta a {
  color: #666;
}

.review-bd .review-content {
  line-height: 20px;
}
</style>