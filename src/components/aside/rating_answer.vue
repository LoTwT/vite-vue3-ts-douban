<template>
  <div class="rating_answer">
    <ul>
      <li>
        <a
          href="https://blog.douban.com/douban/2015/12/18/3060/"
          target="_blank"
          >豆瓣电影评分八问</a
        >
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {},
});
</script>

<style scoped>
.rating_answer {
  margin: 0 0 20px;
  padding: 12px 0 12px 18px;
  line-height: 1.5;
  background: #f2f7f6;
  border-radius: 4px;
  width: 282px;
}

.rating_answer ul {
  font-size: 14px;
  color: #cedcd9;
}

.rating_answer li {
  list-style: none;
  font-size: 13px;
}
</style>
