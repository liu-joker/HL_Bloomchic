<template>
  <div class="category">

    <div id="CollectionAjaxResult"
         class="collection-content">
      <div id="CollectionAjaxContent">
        <div class="page-width">
          <div class="grid">

            <div class="grid__item medium-up--four-fifths grid__item--content">
              <div id="shopify-section-collection-promotions"
                   class="shopify-section">

                <div class="section-promotions blc-flex column"
                     data-section-id="collection-promotions"
                     data-section-type="promo-grid">

                  <div class="promo-grid">
                    <div class="flex-grid flex-grid--gutters flex-grid--collection-promotions">
                      <div class="flex-grid__item flex-grid__item--100 flex-grid__item--7c331022-e598-4218-a865-77e14a336d24 type-image">
                      </div>
                    </div>
                  </div>
                </div>

              </div>
              <div class="collection-grid__wrapper">
                <div id="shopify-section-collection-template"
                     class="shopify-section">

                  <div id="CollectionSection"
                       data-section-id="collection-template"
                       data-collection-id="289680720042"
                       data-section-type="collection-template"
                       data-max-page="15"
                       data-current-page="1">

                    <div class="grid grid--uniform">
                      <!-- top products -->

                      <!-- top products -->

                      <!-- other products -->

                      <!-- other products -->

                      <div class="grid__item grid-product small--one-half medium-up--one-quarter aos-init sensor-posted aos-animate"
                           data-aos="row-of-4"
                           data-product-handle="flutter-sleeve-ditsy-floral-split-maxi-dress"
                           data-variant-id="42997061746858"
                           data-product-vailable="true"
                           data-product-id="7310271611050"
                           data-product-price="3180"
                           data-product-title="Bloom Dress - Flutter Sleeve Ditsy Floral Split Maxi Dress"
                           data-product-spu="02DYJ22035W002LightGreenCZ1"
                           data-product-orginal-price="3180"
                           data-product-index="1"
                           v-for="(item,index) in productList"
                           :key='index'>
                        <div class="grid-product__content">
                          <a href="#"
                             @click.prevent="toDetails(item.id)"
                             class="grid-product__link">
                            <div class="grid-product__image-mask">
                              <div class="image-wrap"
                                   style="height: 0; padding-bottom: 133.33333333333334%;">
                                <img class="grid-product__image lazyautosizes lazyloaded"
                                     data-widths="[360, 540, 720, 900, 1080]"
                                     data-aspectratio="0.75"
                                     data-sizes="auto"
                                     alt=""
                                     :data-srcset="item.image.src+' 360w'"
                                     :srcset="item.image.src+' 360w'"
                                     sizes="314px">
                                <noscript>
                                  <img class="grid-product__image lazyloaded"
                                       :src="item.image.src"
                                       alt="">
                                </noscript>
                              </div>
                              <div class="grid-product__secondary-image small--hide">
                                <img class="lazyautosizes lazyloaded"
                                     data-widths="[360, 540, 720, 1000]"
                                     data-aspectratio="0.75"
                                     data-sizes="auto"
                                     alt=""
                                     :data-srcset="item.images[1].src+' 360w'"
                                     sizes="316px"
                                     :srcset="item.images[1].src+' 360w'">
                              </div>

                            </div>

                            <div class="grid-product__meta">
                              <div class="grid-product__title grid-product__title--body"
                                   @click.prevent="toDetails(item.id)">{{item.title}}</div>

                              <div class="product-item-reviews"
                                   data-id="7310271611050"
                                   data-count="129"
                                   data-average="4.9">
                                <span class="reviews-star icon-star_normal"></span><span class="reviews-star icon-star_normal"></span><span class="reviews-star icon-star_normal"></span><span class="reviews-star icon-star_normal"></span><span class="reviews-star icon-star_normal"></span>

                                <!-- <span class="reviews-count">129 reviews</span> -->
                              </div>

                              <div class="grid-product__price "><span class="money"
                                      doubly-currency-usd="3180"
                                      doubly-currency="USD"
                                      style="opacity: 1;">{{item.variants[0].price}}</span>
                              </div><span class="shopify-product-reviews-badge"
                                    data-id="7310271611050"></span>
                            </div>
                          </a>
                        </div>
                        <div class="grid-product__colors grid-product__colors--7310271611050">
                          <a href="#"
                             @click.prevent="toDetails(item.id)"
                             v-for="(c,i) in item.colors"
                             :key="i"
                             class="color-swatch color-swatch--small color-swatch--light-green color-swatch--with-image"
                             :style="{background:'url(https://cdn.shopify.com/s/files/1/0510/7171/3450/t/113/assets/'+c.color_img+'_50x.png)',}">
                            <span class="visually-hidden">{{c.color}}</span>
                          </a>
                        </div>

                      </div>

                    </div>

                    <div id="pageEnd"
                         style="display: none;">
                      <div class="no-more pageEnd-div">
                        <div class="no-more-line"></div>
                        <div class="no-more-text">No more products</div>
                        <div class="no-more-line"></div>
                      </div>
                      <a class="pageEnd-div"
                         href="/">Back to homepage</a>
                    </div>

                  </div>
                  <div class="collection-product-loading"
                       style="text-align: center;padding: 40px;display: none;">
                    <img src="//cdn.shopify.com/s/files/1/0510/7171/3450/t/113/assets/loading_36x.png?v=125896828186941092881652766995">
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <template>
      <el-dialog :visible.sync="dialogVisible"
                 :modal-append-to-body='false'
                 top='45vh'
                 width="40%">
        <span>{{dialogText}}</span>
      </el-dialog>
    </template>
    <template>
      <el-dialog :visible.sync="dialogVisible2"
                 :modal-append-to-body='false'
                 top='45vh'
                 width="40%">
        <span>{{dialogText}}</span>
      </el-dialog>
    </template>
  </div>
</template>

<script>



import product from '../../utils/product.js'
import $ from 'jquery'
import cataList from '../../utils/cataList.js'

export default {
  inject: ['reload'],
  components: {


  },
  data () {

    return {
      startNumber: '',
      endNumber: '',
      isActive: false,
      isActiveId: '',
      dialogVisible: false,
      dialogVisible2: false,
      id: '',
      grid: true,
      isGrid: false,
      isList: false,

      show: '',
      sort: '',
      watch: [],
      options1: [{
        value: '1',
        label: 'Default'
      }, {
        value: '2',
        label: 'Name(A-Z)'
      }, {
        value: '3',
        label: 'Name(Z-A)'
      }, {
        value: '4',
        label: 'Price(Low-Height)'
      }, {
        value: '5',
        label: 'Price(Hight-Low)'
      }, {
        value: '6',
        label: 'Rating(Heighest)'
      },
      {
        value: '7',
        label: 'Rating(Lowest)'
      },
      {
        value: '8',
        label: 'Model(A-Z)'
      },
      {
        value: '9',
        label: 'Model(Z-A)'
      },

      ],
      options2: [{
        value: '1',
        label: '15'
      }, {
        value: '2',
        label: '25'
      }, {
        value: '3',
        label: '50'
      }, {
        value: '4',
        label: '75'
      }, {
        value: '5',
        label: '100'
      },

      ],
      path: 1,
      dialogText: '',
      oneLength: 0,
      twoLength: 0,
      threeLength: 0,
      onePath: false,
      twoPath: false,
      threePath: false,
      isWish: 0,
      isCompare: 0,
      compareCount: '',
      goodsCart: [],
      tabIndex: '',
      unTabIndex: '',
      homeTab: false,
      show_tag: false,
      hide_tag: false,
      show_id: '',
      pagination_length: 0,
      page: '',
      select_page: '',
      select_page_tag: false,
      seenProducts: [],
      image_fadeIn: false,
      image_fadeOut: false,
      image_id: 0,
      productList: [],
      cataList: [],
      cateName: '',
      child_cateId: '',
      cateId: '',
      fullscreenLoading: false
    }
  },
  created () {
    let path = this.$route.query.path
    this.path = path
    this.cateId = this.$route.query.cateId

    console.log('this.$route.query', this.$route.query)

    this.getItem()

    let seenProducts = JSON.parse(sessionStorage.getItem('seenProducts')) || []
    this.seenProducts = seenProducts
    this.compareCount = JSON.parse(sessionStorage.getItem('compare')) || []
    window.addEventListener('popstate', this.goBack, false);
  },
  methods: {

    pagination (e) {
      let page = this.page
      let path = this.path ? this.path : ''
      let v = Number(e)
      if (v == page) {
        return
      }
      if (v > 0) {
        if (path) {
          this.$router.push('/category?path=' + path + '&page=' + v)
        } else {
          this.$router.push('/category?page=' + v)
        }
        location.reload()
        return
      }
      if (v == 0) {
        page--
        if (path) {
          this.$router.push('/category?path=' + path + '&page=' + page)
        } else {
          this.$router.push('/category?page=' + page)
        }
        location.reload()
        return
      }
      if (v == -1) {
        page++
        if (path) {
          this.$router.push('/category?path=' + path + '&page=' + page)
        } else {
          this.$router.push('/category?page=' + page)
        }
        location.reload()
        return
      }

    },



    toCard (v) {
      let item = v
      item.type = 'cart'
      sessionStorage.setItem('showDialog', JSON.stringify(item))
      let id = item.id
      let goodsCart = JSON.parse(sessionStorage.getItem('goodsCart'))

      if (goodsCart) {
        let is_find = goodsCart.findIndex((v, index) => {
          return v.id == id
        })
        if (is_find > -1) {
          console.log('is_find', is_find)
          let mun = Number(goodsCart[is_find].count)
          let price = item.price.split('$')[1]
          price = Number(price)
          goodsCart[is_find].count = 1 + mun
          goodsCart[is_find].allPrice = (goodsCart[is_find].count * price).toFixed(2)
          sessionStorage.setItem('goodsCart', JSON.stringify(goodsCart))
          this.backTop()
        } else {
          this.$router.push('/details?id=' + item.id)
        }
      } else {
        this.$router.push('/details?id=' + item.id)
      }
    },
    goBack () {
      location.reload()
    },
    showCard (v) {
      this.id = v
      this.dialogVisible = true
    },
    getItem () {
      let productList = []
      let goodsList = []
      let produtCurrent = JSON.parse(JSON.stringify(product.data))
      let cateId = this.cateId
      if (cateId == '225') { productList = produtCurrent.slice(0, 40) }
      if (cateId == '235') { productList = (produtCurrent.sort((a, b) => a.images.length < b.images.length ? 1 : a.images.length > b.images.length ? -1 : 0)).slice(0, 40) }
      if (cateId == '245') { productList = (produtCurrent.sort((a, b) => a.options[1].values.length < b.options[1].values.length ? 1 : a.options[1].values.length > b.options[1].values.length ? -1 : 0)).slice(0, 40) }
      if (cateId == '255') { productList = (produtCurrent.sort((a, b) => a.options[0].values.length < b.options[0].values.length ? 1 : a.options[0].values.length > b.options[0].values.length ? -1 : 0)).slice(0, 40) }
      if (cateId == '265') { productList = produtCurrent }
      if (cateId == '285') { productList = (produtCurrent.sort((a, b) => a.options[1].values.length > b.options[1].values.length ? 1 : a.options[1].values.length < b.options[1].values.length ? -1 : 0)).slice(0, 40) }
      if (cateId == '295') { productList = (produtCurrent.sort((a, b) => a.options[0].values.length > b.options[0].values.length ? 1 : a.options[0].values.length < b.options[0].values.length ? -1 : 0)).slice(0, 40) }
      if (cateId == '305') { productList = produtCurrent.slice(0, 40) }
      productList.map(v => {
        v.colors = []
        v.options[0].values.map(c => {
          let color_obj = {}
          color_obj.color = c
          color_obj.color_img = c.toLowerCase().replace(" ", "-")
          v.colors.push(color_obj)
        })

        if (cateId == '265') {
          if (v.product_type == 'Dresses') {
            goodsList.push(v)
          }
        } else (
          goodsList.push(v)
        )
        return v
      })
      this.productList = goodsList
      console.log('this.productList', this.productList)
    },



    toDetails (id) {
      this.$router.push('/details?id=' + id)
    },
    toCompare (v) {
      let item = v
      let compare = JSON.parse(sessionStorage.getItem('compare')) || []
      let is_find = compare.findIndex((c, index) => {
        return c.id == item.id
      })
      if (is_find > -1) { } else {
        if (compare.length == 4) {
          compare.splice(0, 1)
        }
        compare.push(item)
        sessionStorage.setItem('compare', JSON.stringify(compare))
      }
      item.type = 'compare'
      sessionStorage.setItem('showDialog', JSON.stringify(item))
      this.backTop()
    },
    toCompareView () {
      this.$router.push('/compare')
    },
    toWish (v) {
      let item = v
      let wish = JSON.parse(sessionStorage.getItem('wish')) || []
      let is_find = wish.findIndex((c, index) => {
        return c.id == item.id
      })
      if (is_find > -1) { } else {
        wish.push(item)
        sessionStorage.setItem('wish', JSON.stringify(wish))
      }
      item.type = 'wish'
      sessionStorage.setItem('showDialog', JSON.stringify(item))
      // this.backTop()
      this.$confirm('Product added', '', {
        center: true,
        showClose: false,
        showCancelButton: false,
        showConfirmButton: false,
        customClass: 'show_dialog_box',
      })
    },

    getTotal () {
      let goodsCart = this.goodsCart
      let total = 0
      goodsCart.map((v, index) => {
        let allPrice
        let price = v.price.split('$')[1]
        allPrice = v.allPrice ? v.allPrice : price
        total = total + Number(allPrice)
      })
      this.total = total.toFixed(2)
      this.allTotal = (total + 5).toFixed(2)
    },
    scrollBackTop () {
      const that = this;
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      that.scrollTop = scrollTop;
    },
    backTop () {
      const that = this
      if (that.scrollTop > 0) {
        let timer = setInterval(() => {
          let ispeed = Math.floor(-that.scrollTop / 5);
          document.documentElement.scrollTop = document.body.scrollTop = that.scrollTop + ispeed;
          if (that.scrollTop <= 0) {
            clearInterval(timer);
          }
        }, 50)
      } else {
        return
      }
    },
  },
  mounted () {
    window.addEventListener('scroll', this.scrollBackTop); //监听滚动条
    window.addEventListener("setCompare", (e) => {
      let compareCount = JSON.parse(e.newValue)
      this.compareCount = compareCount
      console.log('compareCount', compareCount)
      this.$forceUpdate()
    });
  },
  destroyed () {
    window.removeEventListener('scroll', this.scrollBackTop)
    window.removeEventListener('popstate', this.goBack, false);
  }
}
</script>
<style lang='scss' scoped>
@import "../../style/category.css";
.category {
  width: 100%;
  // display: flex;
  margin: 30px 0;
  .choose_flag {
    background: #f7a900;
    color: #fff;
    &:hover {
      color: #fff !important;
    }
  }
  .filter_container {
    width: 100%;
    .filter_thumb {
      padding: 0 30px;
      background: #f9f9f9;
      border: 1px solid #e5e5e5;
      font-size: 16px;
      display: flex;
      .filter_name {
        min-width: 70px;
        padding: 17px 0;
        color: #666;
        white-space: nowrap;
        margin-right: 15px;
      }
      .filter_text {
        display: flex;
        padding: 13px 0 12px 0;
        flex: 1;
        flex-wrap: wrap;
        .text_act {
          margin-right: 32px;
          font-size: 16px;
          padding: 6px 6px;
          min-width: 53px;
          text-align: center;
          position: relative;
          cursor: pointer;
          white-space: nowrap;
          &:hover {
            // background: #f7a900;
            color: #f7a900;
          }
        }
        .filter_price {
          width: 30px;
          height: 36px;
          background: #fff;
          border: 1px solid #e5e5e5;
          border-left: none;
          &:first-child {
            border-left: 1px solid #e5e5e5 !important;
          }
          &:hover {
            // background: #777777;
          }
        }
        .filter_price_input {
          display: flex;
          margin-left: 20px;
          text-align: center;
          line-height: 32px;
          /deep/ .el-input__inner {
            width: 75px;
            height: 36px;
            margin: 0 5px;
          }
        }
        .fillter_price_interval {
          display: inline-block;
          border: 1px solid #e5e5e5;
          height: 36px;
          line-height: 36px;
          position: relative;
          padding: 0 15px;
          background-color: #fff;
          margin-left: 20px;
        }
        .go {
          background: #fff;
          height: 36px;
          border: 1px solid #e5e5e5;
          cursor: pointer;
          line-height: 36px;
          position: relative;
          width: 40px;
          margin-left: 10px;
        }
        .clear {
          border: 1px solid #e5e5e5;
          display: inline-block;
          width: 80px;
          height: 36px;
          line-height: 36px;
          text-align: center;
          margin-left: 10px;
          background-color: #fff;
          color: #333;
          cursor: pointer;
        }
      }
    }
  }
  .select_path {
    background: #eee;
    > a {
      color: #444 !important;
    }
  }

  .category_title {
    display: flex;
    align-items: center;
    .category_title_name {
      color: #667280;
      font-size: 30px;
      font-weight: bold;
      padding-right: 15px;
    }
  }
  .category_title_line {
    flex: 1;
    height: 10px;
    background: url("http://www.aerpowm.com/catalog/view/theme/vitalia/img/patterns/heading/01.png");
  }
  .row {
    padding-top: 20px;
  }

  @media screen and (max-width: 975px) {
    .category_left {
      display: none;
    }
  }
  .category_left {
    color: #222;
    font-size: 14px;
    font-weight: bolder;
    .left_list {
      // display: flex;
      // flex-direction: column;
      // text-align: left;
      // border: 1px solid #ddd;
      // border-radius: 5px;
      .left_list_title {
        display: flex;
        align-items: center;
        border-bottom: 1px solid #e6e6e6;
        .left_list_title_name {
          font-size: 18px;
          font-weight: 400;
          padding: 23px 15px 23px 0;
        }
      }
      .left_list_tag {
        padding: 8px 12px;
        font-weight: bold;
        cursor: pointer;
        position: relative;
        text-align: left;
        // margin-left: 20px;
        position: relative;
        &:hover {
          > a {
            color: rgb(195, 46, 45) !important;
          }
        }
        &::before {
          content: "";
          height: 5px;
          width: 5px;
          border-radius: 50%;
          background: #222;
          position: absolute;
          left: 0;
          top: 15px;
        }
      }
    }
    .seen {
      width: 100%;
      text-align: left;
      font-size: 18px;
      margin-top: 50px;
      .seen_product_list {
        margin-top: 20px;
        border: 1px solid #e4e4e4;
        .seen_product {
          display: flex;
          padding: 30px 20px;
          border-bottom: 1px solid #e4e4e4;
          &:last-child {
            border-bottom: none;
          }
          .seen_product_img {
            width: 65px;
            height: 65px;
            > img {
              width: 100%;
              height: 100%;
              display: block;
            }
          }
          .seen_product_msg {
            flex: 1;
            margin-left: 15px;
            font-size: 16px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            .seen_product_name {
              width: 100%;
              cursor: pointer;
              &:hover {
                color: rgb(195, 46, 45);
              }
            }
            .seen_product_price {
              margin-top: 10px;
              > span {
                color: #b7b7b7;
                font-size: 14px;
                margin-right: 10px;
              }
            }
          }
        }
      }
    }
  }
  .category_right {
    padding-bottom: 120px;

    // margin-left:20px;
    .category_right_name {
      color: #444;
      font-size: 27px;
      text-align: left;
      padding: 20px 0;
    }
    .title_product_count {
      padding-right: 20px;
      text-align: left;
      margin-bottom: 10px;
      cursor: pointer;
    }

    .category_goods {
      margin: 0 -15px;
      .row {
        // padding-left: 50px;
        // padding-right: 50px;
      }
      .col-lg-3,
      .col-md-3,
      .col-sm-6,
      .col-xs-6 {
        padding: 15px 0;
        &:hover {
          background: rgb(241, 242, 243);
        }
      }
      .product_thumb {
        width: 100%;

        .product_box {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: left;
          position: relative;
          .product_photo {
            padding: 0 4px;
            width: 100%;
            position: relative;
            .product_photo_image {
              position: relative;
              height: 200px;
              width: 100%;
            }
          }
          .product_msg {
            padding: 0 15px;
            .product_name {
              a {
                color: $fontBodyColor !important;
                font-weight: 400;
                font-size: 13px;
                cursor: pointer;
                display: flex;
                line-height: 1.5;
                flex-direction: column;
                overflow: hidden; //超出文本隐藏
                margin-bottom: 15px;
                text-overflow: ellipsis; //溢出省略号显示
                display: -webkit-box; //将对象作为弹性伸缩盒子
                -webkit-box-orient: vertical; //设置伸缩盒子的子元素排列方式-从上到下垂直排列
                -webkit-line-clamp: 2; //这个属性不是css的规范属性，需要组合上面两个属性，数组代表显示的行数,如2,3,4....

                &:hover {
                  text-decoration: underline !important;
                }
              }

              margin: 10px 0;
            }
          }
          .product_info {
            display: inline-block;
            color: $fontColor2;
            font-size: 18px;
            font-weight: 500;
            margin-bottom: 10px;

            .product_reallPrice {
              text-decoration: line-through;
              display: inline;
              margin-left: 10px;
              color: #999;
            }
          }

          .product_bottom {
            position: absolute;
            top: 85%;
            display: flex;
            width: 100%;

            height: 40px;
            color: #222;

            justify-content: center;
            align-items: center;

            cursor: pointer;
            font-size: 16px;
            text-align: center;
            line-height: 40px;
            > div {
              width: 40px;
              height: 40px;
              margin: 0 10px;
              background: #fff;
              border-radius: 50%;
              &:hover {
                color: #fff;
                background: rgb(195, 46, 45);
              }
            }
          }
        }
      }
    }
  }
  .pagination {
    font-weight: bold;
    font-size: 16px;
    margin-left: auto;
    margin-right: auto;
    .pagination_num {
      display: inline-block;
      margin: 0 10px;
      cursor: pointer;
      position: relative;
    }
    .pagination_num_tab {
      &::before {
        content: "";
        height: 2px;
        background: #222;
        position: absolute;
        bottom: -8px;
        left: 0px;
        width: 100%;
      }
    }
    .pagination_next {
      cursor: pointer;
      display: inline-block;
      position: relative;
    }
    .select_index {
      &::after {
        content: "";
        height: 2px;
        background: #222;
        position: absolute;
        bottom: -8px;
        left: 0px;
        width: 100%;
        -webkit-animation: indexIn 0.5s ease;
        animation: indexIn 0.5s ease;
        animation-iteration-count: 1;
      }

      @-webkit-keyframes indexIn {
        0% {
          width: 0;
        }
        100% {
          width: 100%;
        }
      }
    }
    .unselect_index {
      &::after {
        content: "";
        height: 2px;
        background: #222;
        position: absolute;
        bottom: -8px;
        left: 0px;
        width: 0;
        -webkit-animation: indexOut 0.5s ease;
        animation: indexOut 0.5s ease;
        animation-iteration-count: 1;
      }

      @-webkit-keyframes indexOut {
        0% {
          width: 100%;
        }
        100% {
          width: 0;
        }
      }
    }
  }
}
</style>
<style>
.grid-product__colors--7269765284010 {
  display: none !important;
}
.flex-grid--collection-promotions {
  margin-top: -2px;
  margin-left: -2px;
}
.flex-grid--collection-promotions {
  margin-bottom: 2px;
}
.flex-grid--collection-promotions .flex-grid--gutters {
  margin-top: -2px;
  margin-left: -2px;
}

.flex-grid--collection-promotions .flex-grid__item {
  padding-top: 2px;
  padding-left: 2px;
}

@media only screen and (max-width: 589px) {
  .flex-grid--collection-promotions {
    margin-top: -1px;
    margin-left: -1px;
  }

  .flex-grid--collection-promotions .flex-grid--gutters {
    margin-top: -1px;
    margin-left: -1px;
  }

  .flex-grid--collection-promotions .flex-grid__item {
    padding-top: 1px;
    padding-left: 1px;
  }
  .section-promotions {
    margin-top: 8px;
    margin-bottom: 12px;
  }
  @media only screen and (max-width: 768px) {
    .section-promotions {
      margin: 2px -12px 12px;
    }
  }
  .collapsible-trigger-btn {
    letter-spacing: 0;
    /*   font-weight:bold; */
    font-family: Roboto, Helvetica, Arial, sans-serif;
  }
  .colorItem {
    padding: 0 5px;
    margin-left: 4px;
    display: flex;
    align-items: center;
    margin-right: 4px;
    color: #666;
    border: 1px solid #e5e5e5;
    font-family: Roboto, Helvetica, Arial, sans-serif;
    font-size: 12px;
  }
  .tag {
    margin-bottom: 12px;
  }
}
.flex-grid__item--7c331022-e598-4218-a865-77e14a336d24 .btn {
  border: none !important;
}
</style>