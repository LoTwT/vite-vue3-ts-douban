<template>
  <div class="article">
    <d-screening />
    <d-gaia catalog="movie" title="最近热门电影" />
    <d-gaia catalog="tv" title="最近热门电视剧" />
    <d-reviews />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import DScreening from "../components/article/screening.vue";
import DGaia from "../components/article/gaia.vue";
import DReviews from "../components/article/reviews.vue";

export default defineComponent({
  components: {
    DScreening,
    DGaia,
    DReviews,
  },
  setup() {},
});
</script>
