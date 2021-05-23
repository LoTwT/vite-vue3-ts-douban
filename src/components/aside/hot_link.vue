<template>
  <div class="hot_link">
    <h2>电影活动 &nbsp;·&nbsp;·&nbsp;·&nbsp;·&nbsp;·&nbsp;·</h2>
    <ul>
      <li v-for="(data, index) in hotlinkData" :key="index">
        <a :href="data.url" target="_blank">
          {{ data.title }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import axios from "../../axios/axios";

interface HotlinkType {
  [propName: string]: string;
}

export default defineComponent({
  setup() {
    const hotlinkData = ref<HotlinkType[]>([]);
    axios("/hotlinks").then((res) => (hotlinkData.value = res.data));

    return {
      hotlinkData,
    };
  },
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
