<template>
  <div class="aside">
    <d-rating-answer />
    <d-hot-link />
    <d-billboard />
    <d-doulist />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import DRatingAnswer from "../components/aside/rating_answer.vue";
import DHotLink from "../components/aside/hot_link.vue";
import DBillboard from "../components/aside/billboard.vue";
import DDoulist from "../components/aside/doulist.vue";

export default defineComponent({
  components: {
    DRatingAnswer,
    DHotLink,
    DBillboard,
    DDoulist,
  },
  setup() {},
});
</script>
