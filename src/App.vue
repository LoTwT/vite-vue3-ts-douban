<template>
  <d-nav />
  <div id="wrapper">
    <div id="content" class="row jusb">
      <d-article />
      <d-aside />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import DNav from "./components/nav.vue";
import DArticle from "./components/article.vue";
import DAside from "./components/aside.vue";

export default defineComponent({
  components: {
    DNav,
    DArticle,
    DAside,
  },
  setup() {},
});
</script>

<style scoped>
.ui-slide-control {
  float: right;
  margin: 5px 0 0 15px;
}

#wrapper {
  width: 1040px;
  margin: 0 auto;
}

#content {
  min-height: 420px;
}

#content .section-hd {
  color: #111;
  border-bottom: 1px solid #eaeaea;
  margin: 0 0 12px 0;
  margin-bottom: 18px;
}

#content .section-hd h2 {
  color: #111;
  margin: 0;
}

#content h2 {
  color: #111;
  padding-bottom: 12px;
}

#content h2 span {
  font-size: 13px;
  margin-left: 15px;
}

#wrapper .article {
  width: 715px;
  padding-right: 40px;
}

#wrapper .aside {
  width: 300px;
}
</style>
