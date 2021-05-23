<template>
  <div id="billboard">
    <div class="billboard-hd">
      <h2>
        一周口碑榜<span
          ><a href="https://movie.douban.com/chart">更多榜单»</a></span
        >
      </h2>
    </div>
    <div class="billboard-bd">
      <ul>
        <li class="row">
          <span class="order">1</span>
          <p class="title">
            <a href="https://movie.douban.com/subject/1291561/">千与千寻</a>
          </p>
        </li>
        <li class="row">
          <span class="order">1</span>
          <p class="title">
            <a href="https://movie.douban.com/subject/1291561/">千与千寻</a>
          </p>
        </li>
        <li class="row">
          <span class="order">1</span>
          <p class="title">
            <a href="https://movie.douban.com/subject/1291561/">千与千寻</a>
          </p>
        </li>
        <li class="row">
          <span class="order">1</span>
          <p class="title">
            <a href="https://movie.douban.com/subject/1291561/">千与千寻</a>
          </p>
        </li>
        <li class="row">
          <span class="order">1</span>
          <p class="title">
            <a href="https://movie.douban.com/subject/1291561/">千与千寻</a>
          </p>
        </li>
        <li class="row">
          <span class="order">1</span>
          <p class="title">
            <a href="https://movie.douban.com/subject/1291561/">千与千寻</a>
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {},
});
</script>

<style scoped>
#billboard {
  margin-bottom: 50px;
}

#billboard h2 {
  margin-bottom: 5px;
  padding-bottom: 10px;
  border-bottom: 1px solid #eaeaea;
}

#billboard .order {
  width: 20px;
  font-size: 9px;
  text-align: center;
}

#billboard li {
  padding: 7px 0;
  border-bottom: 1px solid #eaeaea;
}
</style>
