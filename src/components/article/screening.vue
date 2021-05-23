<template>
  <section id="screening" v-if="screening">
    <!-- section-hd -->
    <div class="section-hd row">
      <h2 class="flex-1">
        正在热映
        <span>
          <a href="https://movie.douban.com/cinema/nowplaying/changchun/"
            >全部正在热映»</a
          >
        </span>
        <span>
          <a href="https://movie.douban.com/cinema/later/changchun/"
            >即将上映»</a
          >
        </span>
      </h2>
      <div class="slide-tip">
        <span class="ui-slide-index">{{ page + 1 }}</span> /
        <span class="ui-slide-max">{{ totalPage }}</span>
      </div>
      <div class="ui-slide-control">
        <span class="prev-btn"
          ><a class="btn-prev" href="javascript:void(0)" @click="goPrevPage"></a
        ></span>
        <span class="next-btn"
          ><a class="btn-next" href="javascript:void(0)" @click="goNextPage"></a
        ></span>
      </div>
    </div>
    <!-- section-hd -->
    <!-- screening-bd -->
    <div class="screening-bd">
      <!-- ul left -700 -->
      <div class="list-wp">
        <div class="slider">
          <div class="slide-container">
            <div class="slide-wrapper" style="width: 1400px; left: 0">
              <!-- page -->
              <div class="slide-page">
                <!-- item -->
                <div
                  class="ui-slide-item"
                  v-for="data in datas"
                  :key="data.url"
                >
                  <ul>
                    <li class="poster">
                      <a :href="data.url">
                        <img :src="getImg(data.img)" :alt="data.title" />
                      </a>
                    </li>
                    <li class="title">
                      <a class="">{{ data.title }}</a>
                    </li>
                    <li class="rating">
                      <!-- ✨星星评分 allstar(00~50)+5 -->
                      <span
                        :class="['rating-star', `allstar${data.star}`]"
                      ></span>
                      <span class="subject-rate">{{ data.rate }}</span>
                    </li>
                    <li class="ticket_btn">
                      <span>
                        <a :href="data.ticket" target="_blank">选座购票</a>
                      </span>
                    </li>
                  </ul>
                </div>
                <!-- item -->
              </div>
              <!-- page -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- screening-bd -->
  </section>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import axios from "../../axios/axios";
import { getImg } from "../../libs/common";

export default defineComponent({
  setup() {
    const page = ref(0);
    const screening = ref<null | any[]>(null);
    axios("/screening").then((res) => (screening.value = res.data));

    // 总页数
    const totalPage = computed(() =>
      screening.value ? Math.ceil(screening.value.length / 5) : 0
    );

    const datas = computed(() =>
      screening.value
        ? screening.value.slice(page.value * 5, (page.value + 1) * 5)
        : []
    );

    // 上一页
    const goPrevPage = () => page.value > 0 && page.value--;

    // 下一页
    const goNextPage = () => page.value < totalPage.value - 1 && page.value++;

    return {
      screening,
      page,
      totalPage,
      datas,
      getImg,
      goPrevPage,
      goNextPage,
    };
  },
});
</script>

<style scoped>
#screening,
#reviews {
  margin-bottom: 36px;
}

#screening .screening-bd {
  overflow: hidden;
  position: relative;
  height: 270px;
}

.slide-tip {
  line-height: 30px;
  color: #666;
}

.ui-slide-control {
  margin: 6px 0 0 15px;
}

.ui-slide-control .btn-prev {
  background-position: 0 0;
}

.ui-slide-control .btn-next {
  background-position: -18px 0;
}

.ui-slide-control a {
  display: block;
  float: left;
  width: 18px;
  height: 18px;
  margin-right: 5px;
  cursor: pointer;
  background: url(../../assets/img/slide_swithc_2.png) no-repeat;
}

.ui-slide-content {
  position: absolute;
  left: 0;
  white-space: nowrap;
  margin: 0;
  padding: 0;
}

.ui-slide-item {
  font-size: 12px;
  text-align: center;
  margin-right: 22px;
  width: 115px;
  height: 270px;
  overflow: hidden;
  vertical-align: top;
  letter-spacing: normal;
  word-spacing: normal;
  display: inline-block;
}

#screening .poster {
  height: 161px;
  overflow: hidden;
  margin-bottom: 12px;
}

#screening .ui-slide-item img {
  width: 128px;
  cursor: pointer;
}

#screening .title {
  letter-spacing: -0.31em;
  font-size: 14px;
  white-space: nowrap;
  height: 22px;
  overflow: hidden;
}

#screening .title a:link,
#screening .title a:visited,
#screening .title a:hover,
#screening .title a:active {
  color: #333 !important;
  background: none;
}

#screening .title a,
#screening .new-show {
  display: inline-block;
  *display: inline;
  *zoom: 1;
  vertical-align: top;
  letter-spacing: normal;
  word-spacing: normal;
  height: 24px;
  line-height: 24px;
}

#screening .rating {
  display: inline-block;
  zoom: 1;
  margin: 4px auto 2px;
  height: 19px;
}

#screening .rating .rating-star {
  margin: 3px 3px 0 0;
  width: 55px;
}

#screening .rating span {
  float: left;
}

#screening .subject-rate {
  color: #e09015;
  font-size: 12px;
  margin-left: 2px;
}

#screening .ticket_btn span {
  display: block;
  margin: 0 auto;
  text-align: center;
  width: 90px;
  height: 24px;
  line-height: 24px;
  background-color: #268dcd;
  color: #fff;
  border-radius: 2px;
}

#screening .ticket_btn a:link,
#screening .ticket_btn a:visited,
#screening .ticket_btn a:hover,
#screening .ticket_btn a:active {
  background: none;
  color: #fff;
}

.allstar50,
.allstar45,
.allstar40,
.allstar35,
.allstar30,
.allstar25,
.allstar20,
.allstar15,
.allstar10,
.allstar05,
.allstar00,
.rating1-t,
.rating15-t,
.rating2-t,
.rating25-t,
.rating3-t,
.rating35-t,
.rating4-t,
.rating45-t,
.rating5-t,
.rating-t,
.starb ~ .stars5,
.starb ~ .stars4,
.starb ~ .stars3,
.starb ~ .stars2,
.starb ~ .stars1,
.collectors .stars5,
.collectors .stars4,
.collectors .stars3,
.collectors .stars2,
.collectors .stars1 {
  display: inline-block;
  zoom: 1;
  background: url(../../assets/img/ic_rating_s.png) no-repeat;
  background: -webkit-image-set(
      url(../../assets/img/ic_rating_s.png) 1x,
      url(../../assets/img/ic_rating_s@2x.png) 2x
    )
    no-repeat;
  background: -moz-image-set(
      url(../../assets/img/ic_rating_s.png) 1x,
      url(../../assets/img/ic_rating_s@2x.png) 2x
    )
    no-repeat;
  background: -o-image-set(
      url(../../assets/img/ic_rating_s.png) 1x,
      url(../../assets/img/ic_rating_s@2x.png) 2x
    )
    no-repeat;
  background: -ms-image-set(
      url(../../assets/img/ic_rating_s.png) 1x,
      url(../../assets/img/ic_rating_s@2x.png) 2x
    )
    no-repeat;
  width: 55px;
  height: 11px;
  margin: 0 3px 0 0;
  overflow: hidden;
}

.allstar00 {
  background-position: 0 -110px;
}

.allstar05 {
  background-position: 0 -99px;
}

.allstar10 {
  background-position: 0 -88px;
}

.allstar15 {
  background-position: 0 -77px;
}

.allstar20 {
  background-position: 0 -66px;
}

.allstar25 {
  background-position: 0 -55px;
}

.allstar30 {
  background-position: 0 -44px;
}

.allstar35 {
  background-position: 0 -33px;
}

.allstar40 {
  background-position: 0 -22px;
}

.allstar45 {
  background-position: 0 -11px;
}

.allstar50 {
  background-position: 0 0px;
}
</style>