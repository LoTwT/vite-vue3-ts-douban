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
      <div class="review">
        <div class="review-hd">
          <a href="https://movie.douban.com/subject/1309043/?from=reviews">
            <img
              class="lazy"
              src="/p858079649.webp"
              alt="金刚"
            />
          </a>
        </div>
        <!-- review-bd  -->
        <div class="review-bd">
          <h3>
            <a href="https://movie.douban.com/review/9585575/" class=""
              >童话永远只在故事中</a
            >
          </h3>

          <div class="review-meta">
            <a href="https://www.douban.com/people/178896109/">还不下班</a> 评论
            <a href="https://movie.douban.com/subject/1309043/?from=reviews"
              >《金刚》</a
            >

            <span class="allstar50"></span>
          </div>
          <div class="review-content">
            金刚和安，野兽与美女，角色相似，情节相仿，但是金刚没有野兽幸运，野兽是王子，野兽有爱情，金刚只是金刚，一只被飞机打死的猩猩，得不到安，也失去生的机会。美女与野兽是童话故事，金刚与安是现实。
            影片中，...
            <a href="https://movie.douban.com/review/9585575/">(全文)</a>
          </div>
        </div>
      </div>
      <!-- review -->
      <!-- review -->
      <div class="review">
        <div class="review-hd">
          <a href="https://movie.douban.com/subject/1309043/?from=reviews">
            <img
              class="lazy"
              src="/p858079649.webp"
              alt="金刚"
            />
          </a>
        </div>
        <!-- review-bd  -->
        <div class="review-bd">
          <h3>
            <a href="https://movie.douban.com/review/9585575/" class=""
              >童话永远只在故事中</a
            >
          </h3>

          <div class="review-meta">
            <a href="https://www.douban.com/people/178896109/">还不下班</a> 评论
            <a href="https://movie.douban.com/subject/1309043/?from=reviews"
              >《金刚》</a
            >

            <span class="allstar50"></span>
          </div>
          <div class="review-content">
            金刚和安，野兽与美女，角色相似，情节相仿，但是金刚没有野兽幸运，野兽是王子，野兽有爱情，金刚只是金刚，一只被飞机打死的猩猩，得不到安，也失去生的机会。美女与野兽是童话故事，金刚与安是现实。
            影片中，...
            <a href="https://movie.douban.com/review/9585575/">(全文)</a>
          </div>
        </div>
      </div>
      <!-- review -->
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {},
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