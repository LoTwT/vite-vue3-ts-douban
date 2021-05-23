<template>
  <section class="gaia">
    <!-- head -->
    <div class="fliter-wp row">
      <h2>
        <div class="activate">{{ title }}</div>
      </h2>
      <div class="filter flex-1">
        <div class="tags">
          <ul class="tag-list row">
            <li
              v-for="(value, key) in typelistData"
              :key="key"
              :class="{ activate: key === currentType }"
              @click="currentType = key"
            >
              {{ value }}
            </li>
          </ul>
        </div>
      </div>
      <a
        href="/explore#!type=movie&amp;tag=%E7%83%AD%E9%97%A8"
        class="more-link"
        >更多»</a
      >
    </div>
    <!-- head -->
    <!-- list -->
    <div class="list-wp">
      <div class="slider">
        <div class="slide-container">
          <div class="slide-wrapper" style="width: 700px; left: 0">
            <!-- page -->
            <div class="slide-page">
              <!-- item -->
              <a
                v-for="data in gaiaDatas"
                :key="data.id"
                class="item"
                target="_blank"
                :href="data.href"
              >
                <div class="cover-wp">
                  <img :src="getImg(data.img)" :alt="data.title" />
                </div>
                <p>
                  {{ data.title }} <strong>{{ data.rate }}</strong>
                </p>
              </a>
              <!-- item -->
            </div>
            <!-- page -->
          </div>
        </div>

        <div class="slide-ctrl ui-slide-control">
          <a class="btn-prev" href="javascript:void(0)"></a>
          <i
            v-for="i in total"
            :key="i"
            :class="['dot', { activate: page === i }]"
            @click="page = i"
          ></i>
          <a class="btn-next" href="javascript:void(0)"></a>
        </div>
      </div>
    </div>
    <!-- list -->
  </section>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";
import axios from "../../axios/axios";
import { getImg } from "../../libs/common";

export default defineComponent({
  props: ["catalog", "title"],
  setup({ catalog, title }) {
    const gaiaDatas = ref([]);
    const typelistData = ref({});
    const currentType = ref("");
    const page = ref(1);
    const total = ref(0);

    axios(`/gaia/${catalog}/typelist`).then((res) => {
      typelistData.value = res.data;

      for (let key in res.data) {
        currentType.value = key;
        break;
      }
    });

    watch(currentType, () => {
      page.value = 1;
      axios(
        `/gaia/${catalog}?type=${currentType.value}&page=${page.value}`
      ).then((res) => {
        gaiaDatas.value = res.data.list;
        total.value = res.data.total;
      });
    });

    watch(page, () => {
      axios(
        `/gaia/${catalog}?type=${currentType.value}&page=${page.value}`
      ).then((res) => {
        gaiaDatas.value = res.data.list;
        total.value = res.data.total;
      });
    });

    return {
      gaiaDatas,
      title,
      currentType,
      typelistData,
      getImg,
      total,
      page,
    };
  },
});
</script>

<style scoped>
.gaia {
  margin-bottom: 40px;
}

.gaia .fliter-wp {
  overflow: hidden;
  zoom: 1;
}

.gaia .fliter-wp h2 {
  font-size: 17px;
  overflow: hidden;
  line-height: normal;
  padding-bottom: 12px;
  color: #111;
  margin: 0;
}

#content .fliter-wp {
  color: #111;
  border-bottom: 1px solid #eaeaea;
  margin-bottom: 18px;
}

.gaia h2 .activate {
  color: #111;
  cursor: default;
  font-size: 16px;
}

.gaia .fliter-wp .filter {
  width: 450px;
  margin-right: -50px;
  margin-left: 14px;
  line-height: 23.5px;
}

.gaia .tags li {
  margin: 0;
  margin-right: 12px;
  padding: 0;
  color: #9b9b9b;
  vertical-align: inherit;
  font-size: 13px;
  border-radius: 0;
  cursor: pointer;
}

.gaia .tags li.activate {
  color: #111;
  background: none;
}

.gaia .fliter-wp .more-link {
  font-size: 13px;
  position: relative;
  top: 2px;
  height: 20px;
}

.list-wp {
  width: 675px;
  overflow: hidden;
  margin-right: -10px;
}

.slider .slide-container {
  height: 426px;
  overflow: hidden;
  position: relative;
}

.slider .slide-container .slide-wrapper {
  position: absolute;
  left: 0;
  top: 0;
}

.slider .slide-container .slide-wrapper .slide-page {
  float: left;
  width: 700px;
}

.slider .item {
  display: block;
  float: left;
  color: #37a;
  font-size: 13px;
  text-align: center;
  margin: 0 25px 10px 0;
  width: 115px;
  cursor: pointer;
}

.slider .item .cover-wp {
  background-size: 100%;
  height: 161px;
  overflow: hidden;
  cursor: pointer;
}

.slider .item:link,
.slider .item:visited,
.slider .item:hover,
.slider .item:active {
  background: none;
  color: #37a !important;
}

.slider .item p {
  margin: 5px 0 0;
  height: 44px;
  overflow: hidden;
  cursor: pointer;
}

.slider .item span {
  color: #aaa;
}

.slider .item strong {
  color: #e09015;
  font-style: normal;
  font-weight: normal;
}

.slider .item .green {
  color: #58a05a;
}

.slider .item .new {
  opacity: 1;
  position: relative;
  top: -2px;
}

.slider .slide-ctrl {
  text-align: center;
  float: none;
  text-align: center;
  margin: 0 0 13px;
  top: -7px;
}

.slider .slide-ctrl .dot {
  width: 6px;
  height: 6px;
  background-color: #d8d8d8;
  border-radius: 50%;
  position: relative;
  top: -5px;
  margin-right: 5px;
}

.slider .slide-ctrl .dot.activate {
  background-color: #6198d7;
}

.slider .slide-ctrl a,
.slider .slide-ctrl .dot {
  display: inline-block;
  float: none;
  margin: 0;
  cursor: pointer;
}

.slider .slide-ctrl .dot {
  width: 6px;
  height: 6px;
  background-color: #d8d8d8;
  border-radius: 50%;
  position: relative;
  top: -5px;
  margin-right: 5px;
}

.slider .slide-ctrl .btn-prev {
  margin-right: 10px;
}

.slider .slide-ctrl .btn-next {
  margin-left: 5px;
}
</style>
