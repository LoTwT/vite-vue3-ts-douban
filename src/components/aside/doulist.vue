<template>
  <div id="doulist">
    <h2>热门豆列</h2>
    <ul>
      <li v-for="(data, index) in doulistDatas" :key="index">
        <span>{{ data.recommend }} 推荐</span>
        <div class="title">
          <a target="_blank" :href="data.url">{{ data.title }}</a>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import axios from "../../axios/axios";

interface DoulistType {
  recommend: number;
  title: string;
  url: string;
}

export default defineComponent({
  setup() {
    const doulistDatas = ref<DoulistType[]>([]);
    axios("/doulist").then((res) => (doulistDatas.value = res.data));

    return {
      doulistDatas,
    };
  },
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
