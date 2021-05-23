<template>
  <div class="hot_link">
    <h2>电影活动 &nbsp;·&nbsp;·&nbsp;·&nbsp;·&nbsp;·&nbsp;·</h2>
    <ul>
      <li>
        <a
          href="https://bizpage.douban.com/hollywood-producer/"
          target="_blank"
        >
          招募 | 好莱坞制片人电影商务交流之旅
        </a>
      </li>
      <li>
        <a href="https://www.douban.com/note/722964489/" target="_blank">
          专访姚晨 | 电影是对生命本身的探讨
        </a>
      </li>
      <li>
        <a href="https://www.douban.com/note/721895068/" target="_blank">
          布光课 | 不是不美，可能是光不对
        </a>
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
.hot_link {
  margin: 0 0 20px;
  padding: 16px 0 16px 18px;
  line-height: 1.5;
  background: #f2f7f6;
  border-radius: 4px;
  width: 282px;
}

#content .hot_link h2 {
  margin: 0;
  padding: 0;
  border: 0 none;
  color: #072;
}

#content .hot_link h2 {
  margin: 0;
  padding: 0;
  border: 0 none;
  color: #072;
}

.hot_link li {
  margin-top: 8px;
  list-style: none;
  font-size: 13px;
}
</style>
