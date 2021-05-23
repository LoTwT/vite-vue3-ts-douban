<template>
  <div id="doulist">
    <h2>热门豆列</h2>
    <ul>
      <li>
        <span>137推荐</span>
        <div class="title">
          <a target="_blank" href="https://www.douban.com/doulist/521464/"
            >被人遗忘的角落--英伦风</a
          >
        </div>
      </li>
      <li>
        <span>5825推荐</span>
        <div class="title">
          <a target="_blank" href="https://www.douban.com/doulist/57376/"
            >那些牛叉闪闪的片子</a
          >
        </div>
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
#doulist {
  margin-bottom: 40px;
}

#doulist h2 {
  border-bottom: none;
  padding-bottom: 0;
  margin-bottom: 10px;
}

#doulist ul {
  border-top: 1px solid #eee;
}

#doulist ul li {
  position: relative;
  padding: 15px 0;
  border-bottom: 1px solid #eee;
  zoom: 1;
}

#doulist li span {
  font-size: 13px;
  float: right;
  color: #999;
}

#doulist .title {
  width: 247px;
}

#doulist a {
  font-size: 13px;
}
</style>
