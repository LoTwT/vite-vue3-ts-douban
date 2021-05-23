<template>
  <div class="article">
    <d-screening />
    <d-gaia />
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
