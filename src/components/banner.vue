<template>
  <div class="banner row">
    <!-- <div class="swiper-no-swiping"> -->
    <div class="swiper-container swiper-container1 hidden-xs-only"
         style='height:auto;margin-top:40px;'>
      <div class="swiper-wrapper ">
        <div class="swiper-slide"
             v-for="(item,index) in bannerOption_h"
             :key="index">
          <img class="banner_img "
               :src="item.banner"
               alt="">
        </div>
      </div>
      <!-- <div class="swiper-button-prev glyphicon glyphicon-chevron-left"
           @click.stop></div>
      <div class="swiper-button-next glyphicon glyphicon-chevron-right"
           @click.stop></div> -->
    </div>
    <div class="swiper-container swiper-container1 hidden-sm-and-up"
         style='height:520px'>
      <div class="swiper-wrapper hidden-sm-and-up">
        <div class="swiper-slide "
             v-for="(item,index) in bannerOption_t"
             :key="index+5">
          <img class="banner_img "
               :src="item.banner"
               alt="">
        </div>
      </div>
      <!-- <div class="swiper-pagination"></div> -->
      <!-- <div class="swiper-button-prev glyphicon glyphicon-chevron-left"
           @click.stop></div>
      <div class="swiper-button-next glyphicon glyphicon-chevron-right"
           @click.stop></div> -->
    </div>
  </div>

  <!-- </div> -->
</template>
<script>

import Swiper from "swiper"
// import 'swiper/dist/css/swiper.css'
import 'swiper/dist/css/swiper.min.css'
import 'swiper/dist/js/swiper.min.js'
import photo1 from '../assets/image/banner_h.jpg'
import photo2 from '../assets/image/banner_h.gif'
import photo3 from '../assets/image/banner_t.jpg'
import photo4 from '../assets/image/banner_t.gif'
export default {
  name: 'banner',
  //     components: {
  //         Swiper,
  //         SwiperSlide,
  //   },
  data () {
    return {
      bannerOption_h: [
        { banner: photo1, }, { banner: photo2 },
      ],
      bannerOption_t: [
        { banner: photo3, }, { banner: photo4 },
      ],
    };

  },
  created () {
  },
  mounted () {
    this.initSwiper()
  },
  computed: {

  },
  methods: {
    initSwiper () {
      let that = this
      this.$nextTick(() => {
        new Swiper('.swiper-container1', {
          loop: true,
          autoplay: 3000,
          observer: true,
          observeParents: true,
          spaceBetween: 30,
          runCallbacks: true,
          pagination: '.swiper-pagination',
          paginationClickable: true,
          preventClicks: false,
          preventClicksPropagation: false,
          paginationClickable: '.swiper-pagination',
          nextButton: '.swiper-button-next',
          prevButton: '.swiper-button-prev',
          onInit (swiper) {


          },
          onClick: function (swiper, event) {
            let index = swiper.activeIndex
            if (event.target.className == 'banner_img') {
              // if (index == 1) {
              //   that.$router.push('/category?path=1&cateId=10569')
              // } else if (index == 2 || index == 4) {
              //   that.$router.push('/category?path=564&cateId=5113')
              // } else if (index == 3) {
              //   that.$router.push('/category?path=1')
              // }
            } else {
              return
            }

          }


        })
      })

    },
    toCategory (e) {
      console.log('e', e)
    }


  }
}
</script>

<style lang='scss' scoped>
.banner {
  // margin-top: 30px;
  margin-bottom: 60px;
  width: 100%;
  // height: 600px;
  // padding: 0 30px;
  .swiper-no-swiping {
    // padding: 0 30px 0px 30px;
    height: 100%;
  }
  .swiper-container {
    width: 100%;
    height: 100%;
    .swiper-slide {
      > img {
        width: 100%;
        height: 100%;
      }
    }
    .swiper-button-prev {
      background: url("");
      font-size: 28px;
      color: #fff;
    }
    .swiper-button-next {
      background: url("");
      font-size: 28px;
      color: #fff;
    }
  }
  .banner_img {
    width: 100%;
    height: auto;
  }
  .ani {
    transition-timing-function: ease;
    transition-timing-function: ease-in;
    transition-timing-function: ease-out;
    transition-timing-function: ease-in-out;
    transition-timing-function: linear;
    transition-timing-function: cubic-bezier(0.1, 0.7, 1, 0.1);
    transition-timing-function: step-start;
    transition-timing-function: step-end;
    transition-timing-function: steps(4, end);
    transition-timing-function: ease, step-start, cubic-bezier(0.1, 0.7, 1, 0.1);
    transition-timing-function: inherit;
  }
  .glyphicon {
    position: absolute;
    top: 50%;
  }
}
</style>