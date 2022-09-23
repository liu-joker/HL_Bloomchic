<template>
  <div class="details">
    <div class="page-content page-content--product">
      <div class="page-width">
        <div class="grid grid--product-images--partial">
          <!-- images 组 -->
          <div class="grid__item medium-up--three-fifths product-single__sticky">
            <div data-product-images=""
                 data-zoom="true"
                 data-has-slideshow="true">
              <div class="product__photos product__photos-7290778222762 product__photos--beside">
                <div class="product__main-photos aos-init aos-animate"
                     data-aos=""
                     data-product-single-media-group="">
                  <div id="ProductPhotos-7290778222762"
                       class="product-slideshow flickity-enabled is-draggable"
                       style='width:100%'
                       tabindex="0">
                    <!-- zoom  大图 -->
                    <div class="flickity-viewport hidden-xs-only"
                         style="touch-action: pan-y;">
                      <div class="flickity-slider "
                           style="left: 0px; transform: translateX(-0.01%);">
                        <div class="product-main-slide starting-slide is-selected"
                             style="position: absolute; left: 0%;"
                             tabindex="1">
                          <div class="product-image-main product-image-main--7290778222762">
                            <div class="image-wrap"
                                 style="height: 0; padding-bottom: 133.33333333333334%;">
                              <img class="photoswipe__image lazyautosizes lazyloaded"
                                   :data-photoswipe-src="itemProduct.image.src"
                                   data-photoswipe-width="750"
                                   data-photoswipe-height="1000"
                                   data-index="1"
                                   data-widths="[360, 540, 720, 900, 1080]"
                                   data-aspectratio="0.75"
                                   data-sizes="auto"
                                   alt="Ruffle Sleeve Button Front Babydoll Blouse"
                                   :data-srcset="itemProduct.image.src+' 360w'"
                                   sizes="487px"
                                   :srcset="itemProduct.image.src+' 360w'"><button type="button"
                                      class="btn btn--body btn--circle js-photoswipe__zoom product__photo-zoom">
                                <svg aria-hidden="true"
                                     focusable="false"
                                     role="presentation"
                                     class="icon icon-search"
                                     viewBox="0 0 64 64">
                                  <path d="M47.16 28.58A18.58 18.58 0 1 1 28.58 10a18.58 18.58 0 0 1 18.58 18.58zM54 54L41.94 42"></path>
                                </svg>
                                <span class="icon__fallback-text">Close (esc)</span>
                              </button>
                            </div>
                          </div>

                        </div>

                      </div>

                    </div>

                    <!-- <ol class="flickity-page-dots"><span class="swiperLength">1/23</span></ol> -->
                  </div>
                </div>
                <!-- 小图 -->
                <div id="ProductThumbs-7290778222762"
                     class="product__thumbs product__thumbs--beside product__thumbs-placement--left small--hide aos-init aos-animate"
                     data-position="beside"
                     data-arrows="true"
                     data-aos=""><button type="button"
                          class="product__thumb-arrow product__thumb-arrow--prev hide">
                    <svg aria-hidden="true"
                         focusable="false"
                         role="presentation"
                         class="icon icon-chevron-left"
                         viewBox="0 0 284.49 498.98">
                      <path d="M249.49 0a35 35 0 0 1 24.75 59.75L84.49 249.49l189.75 189.74a35.002 35.002 0 1 1-49.5 49.5L10.25 274.24a35 35 0 0 1 0-49.5L224.74 10.25A34.89 34.89 0 0 1 249.49 0z"></path>
                    </svg>
                  </button>
                  <div class="product__thumbs--scroller">
                    <div class="product__thumb-item"
                         v-for="(item,index) in itemProduct.images"
                         :key='item.id'
                         @click="chooseImage(item,index)"
                         :data-index="index">
                      <div class="image-wrap"
                           style="height: 0; padding-bottom: 133.33333333333334%;">
                        <a href="#"
                           class="product__thumb product__thumb-7290778222762 "
                           :class="[product_image_id == item.id?'is-active':'']"
                           :data-index="index"
                           :data-id="item.id">
                          <img class="animation-delay-3 lazyautosizes lazyloaded"
                               data-widths="[120, 360, 540, 720]"
                               data-aspectratio="0.75"
                               data-sizes="auto"
                               alt="Ruffle Sleeve Button Front Babydoll Blouse"
                               :data-srcset="item.src +' 120w' "
                               sizes="76px"
                               :srcset="item.src +' 120w'">
                        </a>
                      </div>
                    </div>

                  </div>
                  <!-- <button type="button"
                          class="product__thumb-arrow product__thumb-arrow--next">
                    <svg aria-hidden="true"
                         focusable="false"
                         role="presentation"
                         class="icon icon-chevron-right"
                         viewBox="0 0 284.49 498.98">
                      <path d="M35 498.98a35 35 0 0 1-24.75-59.75l189.74-189.74L10.25 59.75a35.002 35.002 0 0 1 49.5-49.5l214.49 214.49a35 35 0 0 1 0 49.5L59.75 488.73A34.89 34.89 0 0 1 35 498.98z"></path>
                    </svg>
                  </button> -->
                </div>
              </div>
            </div>

          </div>
          <div class="swiper-container swiper-container3 hidden-sm-and-up"
               style='max-width:768px;width:100%'>
            <div class="swiper-wrapper ">
              <div class="swiper-slide"
                   style="display:block;max-width:768px;width:100%height:auto;object-fit: cover;margin-right:0;"
                   v-for="(item,index) in itemProduct.images"
                   :key="index">
                <img class="banner_img "
                     style="display:block;width:100%;height:auto;"
                     :src="item.src"
                     alt="">
              </div>
            </div>

          </div>
          <div class="grid__item medium-up--two-fifths">
            <div class="product-single__meta">
              <h1 class="h2 product-single__title">{{itemProduct.title}}
                <span class="openShare">
                  <svg width="28px"
                       height="28px"
                       viewBox="0 0 56 56"
                       version="1.1"
                       xmlns="http://www.w3.org/2000/svg"
                       xmlns:xlink="http://www.w3.org/1999/xlink">
                    <title>icon_share@2x</title>
                    <g id="icon_share"
                       stroke="none"
                       stroke-width="1"
                       fill="none"
                       fill-rule="evenodd">
                      <g id="编组"
                         transform="translate(11.000000, 11.000000)"
                         stroke="#000000"
                         stroke-width="3">
                        <polyline id="路径-5"
                                  stroke-linejoin="round"
                                  points="15.3884665 2.83783784 0 2.83783784 0 34.8378378 33 34.8378378 33 20.990905">
                        </polyline>
                        <polyline id="路径-6"
                                  transform="translate(31.257439, 7.565768) rotate(85.000000) translate(-31.257439, -7.565768) "
                                  points="24.1628439 10.6696529 31.2574385 4.46188263 38.3520331 10.6696529">
                        </polyline>
                        <path d="M34.2121334,7.57178528 C30.7803307,7.36068703 28.0009084,7.3586812 25.8738666,7.56576776 C20.5879855,8.08039562 16.9946403,10.4402518 14.4518948,13.2977978 C10.9603635,17.2215927 9.30022157,21.7851615 9.47146907,26.9885041"
                              id="路径-7"></path>
                      </g>
                    </g>
                  </svg>
                </span>
              </h1>
              <!--<p id="Sku-7290778222762" class="product-single__sku">01BHY22032W001LightGreenCZ0
</p>--><span id="PriceA11y-7290778222762"
                    class="visually-hidden">Regular price</span>
              <div class="priceBox">
                <div class="flexalign"
                     style="margin-bottom:15px;">
                  <span id="ProductPrice-7290778222762"
                        class="product__price"
                        style="font-size: 24px;font-weight: 700">
                    <span class="money "
                          style="opacity: 1;"
                          doubly-currency-usd="2380"
                          doubly-currency="USD">$ {{itemProduct.variants[0].price}}</span>
                  </span>
                  <span class="product__price-wrap-7290778222762 hide">
                    <span id="ComparePrice-7290778222762"
                          class="product__price product__price--compare"></span>
                  </span><span id="SavePrice-7290778222762"
                        class="product__price-savings hide"></span>
                </div>

                <div class="scoreBox"
                     style="display: block;">
                  <div class="medium-up--hide"
                       style="display: flex; align-items: center;">
                    <div class="scoreBox_content">
                      <div class="product-item-reviews">
                        <a class="reviews-star icon-star_normal"></a><a class="reviews-star icon-star_normal"></a><a class="reviews-star icon-star_normal"></a><a class="reviews-star icon-star_normal"></a><a class="reviews-star icon-star_normal"></a>
                        <span>(9)</span>
                      </div>
                    </div>
                    <svg width="12px"
                         height="12px"
                         viewBox="0 0 24 24"
                         version="1.1"
                         xmlns="http://www.w3.org/2000/svg"
                         xmlns:xlink="http://www.w3.org/1999/xlink">
                      <title>icon_next@2x</title>
                      <g id="icon_next"
                         stroke="none"
                         stroke-width="1"
                         fill="none"
                         fill-rule="evenodd">
                        <polyline id="路径-2"
                                  stroke="#999999"
                                  stroke-width="2"
                                  points="15 3 6 12 15 21"></polyline>
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
              <div class="product__unit-price product__unit-price--spacing product__unit-price-wrapper--7290778222762 hide"><span class="product__unit-price--7290778222762"></span>/<span class="product__unit-base--7290778222762"></span>
              </div><!-- <hr class="hr--medium"> -->

              <div class="variant-wrapper variant-wrapper--button js">
                <label style="display: flex;align-items: center;"
                       class="variant__label"
                       for="ProductSelect-7290778222762-option-0">
                  <span>Color</span><span class="variant__label-info">
                    :
                    <span id="VariantColorLabel-7290778222762-0"
                          data-option-index="0">{{color_name}}</span>
                    <span class="MaterialTips"
                          style="display: none;"></span>
                  </span></label>
                <fieldset class="variant-input-wrap"
                          name="Color"
                          data-index="option1"
                          data-handle="color"
                          id="ProductSelect-7290778222762-option-0">
                  <legend class="hide">Color</legend>
                  <div class="variant-input"
                       data-index="option1"
                       v-for="(color,i) in itemProduct.colors"
                       :key='i'
                       data-value="Light Green">
                    <input type="radio"
                           :checked="color_index == i"
                           :value="color.color"
                           @click="changeSize(color,i,'color')"
                           data-index="option1"
                           name="Color"
                           class="variant__input-7290778222762 variant__input--color-swatch-7290778222762"
                           :data-color-name="color.color"
                           data-color-index="0"
                           :id="'ProductSelect-7290778222762-option-color-'+color.color">
                    <label :for="'ProductSelect-7290778222762-option-color-'+color.color"
                           class="variant__button-label color-swatch color-swatch--light-green"
                           :style="{background: 'url(https://cdn.shopify.com/s/files/1/0510/7171/3450/t/113/assets/'+color.color_img+'_50x.png?v=152504546679563544281652766994)',border: '2px solid #e5e5e5'}">
                      {{color.color}}
                    </label>
                  </div>

                </fieldset>

              </div>
              <div class="variant-wrapper variant-wrapper--button js">
                <label style="display: flex;align-items: center;"
                       class="variant__label"
                       for="ProductSelect-7290778222762-option-1">
                  <span>Size</span><span style="margin-left: 2px;display: inline-block;text-align: center;width:22.5px;height:13px;line-height:13px;background-color: #9c1914;color: white;font-size: 10px;">US</span><span style="margin-left: 10px;font-size:12px;height: 13px;line-height: 13px;display:none;"
                        class="selected-size">10/M</span>
                  <div class="seeMore2"
                       id="sizeGuideBtn"><svg width="16px"
                         height="16px"
                         viewBox="0 0 32 32"
                         version="1.1"
                         xmlns="http://www.w3.org/2000/svg"
                         xmlns:xlink="http://www.w3.org/1999/xlink">
                      <title>icon_size@2x</title>
                      <g id="icon_size"
                         stroke="none"
                         stroke-width="1"
                         fill="none"
                         fill-rule="evenodd">
                        <g id="编组-40"
                           transform="translate(3.000000, 10.000000)"
                           stroke="#000000"
                           stroke-width="2">
                          <line x1="4.5"
                                y1="8"
                                x2="4.5"
                                y2="11.25"
                                id="直线"
                                stroke-linecap="square"></line>
                          <line x1="9"
                                y1="5"
                                x2="9"
                                y2="12.875"
                                id="直线"
                                stroke-linecap="square"></line>
                          <line x1="13.5"
                                y1="8"
                                x2="13.5"
                                y2="11.25"
                                id="直线"
                                stroke-linecap="square"></line>
                          <line x1="18"
                                y1="5"
                                x2="18"
                                y2="12.875"
                                id="直线"
                                stroke-linecap="square"></line>
                          <line x1="22.5"
                                y1="8.25"
                                x2="22.5"
                                y2="11.75"
                                id="直线"
                                stroke-linecap="square"></line>
                          <rect id="矩形"
                                x="0"
                                y="0"
                                width="27"
                                height="13"></rect>
                        </g>
                      </g>
                    </svg><span class="hide small--show showItem2"
                          data-type="size_chart"
                          id="mobileSizeGuide"> Size Guide</span>
                    <span class="hide medium-up--show"
                          id="pcSizeGuide"> Size Guide</span>
                  </div>
                </label>
                <fieldset class="variant-input-wrap"
                          name="Size"
                          data-index="option2"
                          data-handle="size"
                          id="ProductSelect-7290778222762-option-1">
                  <legend class="hide">Size</legend>
                  <div class="variant-input"
                       v-for="(size,i) in itemProduct.options[1].values"
                       :key='size.id'
                       @click.stop="changeSize(size,i,'size')"
                       :data-index="itemProduct.options[1].values"
                       :data-value="size">
                    <input type="radio"
                           :value="size"
                           :checked="size_index == i"
                           data-index="options2"
                           name="Size"
                           class="variant__input-7290778222762"
                           :id="'ProductSelect-7290778222762-option-size-'+size+'FM'">
                    <label :for="'ProductSelect-7290778222762-option-size-'+size+'FM'"
                           class="variant__button-label">{{size}}</label>
                  </div>

                </fieldset>

              </div>

              <div class="sizeAllForm"
                   id="sizeAllForm">
                <div class="sizeAll"
                     id="sizeAll">

                  <div id="10-M"
                       class="sizeContainer 10/M"
                       style="display: block;">

                    <div class="size-item"><span>Bust:</span>38.19-40.16 inch</div>

                    <div class="size-item"><span>Waist:</span>31.89-33.86 inch</div>

                    <div class="size-item"><span>Hip:</span>42.13-44.09 inch</div>

                  </div>

                  <div id="12-L"
                       class="sizeContainer 12/L"
                       style="display: none;">

                    <div class="size-item"><span>Bust:</span>39.76-42.13 inch</div>

                    <div class="size-item"><span>Waist:</span>31.89-34.25 inch</div>

                    <div class="size-item"><span>Hip:</span>43.7-46.06 inch</div>

                  </div>

                  <div id="14-1X"
                       class="sizeContainer 14/1X"
                       style="display: none;">

                    <div class="size-item"><span>Bust:</span>42.13-44.49 inch</div>

                    <div class="size-item"><span>Waist:</span>34.25-36.61 inch</div>

                    <div class="size-item"><span>Hip:</span>46.06-48.43 inch</div>

                  </div>

                  <div id="16-1X"
                       class="sizeContainer 16/1X"
                       style="display: none;">

                    <div class="size-item"><span>Bust:</span>44.49-46.85 inch</div>

                    <div class="size-item"><span>Waist:</span>36.61-38.98 inch</div>

                    <div class="size-item"><span>Hip:</span>48.43-50.79 inch</div>

                  </div>

                  <div id="18-2X"
                       class="sizeContainer 18/2X"
                       style="display: none;">

                    <div class="size-item"><span>Bust:</span>46.85-49.21 inch</div>

                    <div class="size-item"><span>Waist:</span>38.98-41.34 inch</div>

                    <div class="size-item"><span>Hip:</span>50.79-53.15 inch</div>

                  </div>

                  <div id="20-2X"
                       class="sizeContainer 20/2X"
                       style="display: none;">

                    <div class="size-item"><span>Bust:</span>49.21-51.57 inch</div>

                    <div class="size-item"><span>Waist:</span>41.34-43.7 inch</div>

                    <div class="size-item"><span>Hip:</span>53.15-55.51 inch</div>

                  </div>

                  <div id="22-3X"
                       class="sizeContainer 22/3X"
                       style="display: none;">

                    <div class="size-item"><span>Bust:</span>51.57-53.94 inch</div>

                    <div class="size-item"><span>Waist:</span>43.7-46.06 inch</div>

                    <div class="size-item"><span>Hip:</span>55.51-57.87 inch</div>

                  </div>

                  <div id="26-4X"
                       class="sizeContainer 26/4X"
                       style="display: none;">

                    <div class="size-item"><span>Bust:</span>55.91-57.87 inch</div>

                    <div class="size-item"><span>Waist:</span>50-51.97 inch</div>

                    <div class="size-item"><span>Hip:</span>59.84-64.17 inch</div>

                  </div>

                  <div id="28-5X"
                       class="sizeContainer 28/5X"
                       style="display: none;">

                    <div class="size-item"><span>Bust:</span>59.84-64.17 inch</div>

                    <div class="size-item"><span>Waist:</span>53.94-57.87 inch</div>

                    <div class="size-item"><span>Hip:</span>66.14-70.08 inch</div>

                  </div>

                  <div id="30-6X"
                       class="sizeContainer 30/6X"
                       style="display: none;">

                    <div class="size-item"><span>Bust:</span>66.14-70.08 inch</div>

                    <div class="size-item"><span>Waist:</span>59.84-64.17 inch</div>

                    <div class="size-item"><span>Hip:</span>72.05-75.98 inch</div>

                  </div>

                </div>
              </div>

              <a href="#"
                 class="showItem">
                <div class="showItem-tit">🎉 Take Me To Products In 10-30</div>
                <div class="showItem-icon">
                  <svg width="12"
                       height="12"
                       viewBox="0 0 12 12"
                       fill="none"
                       xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.5 1.5L9 6L4.5 10.5"
                          stroke="#B0B0B0"></path>
                  </svg>
                </div>
              </a>

              <div style="height: 20px;"
                   class="small--hide"></div>

              <div class="addCartBox">
                <div class="chatBox">
                  <svg width="28px"
                       height="28px"
                       viewBox="0 0 56 56"
                       version="1.1"
                       xmlns="http://www.w3.org/2000/svg"
                       xmlns:xlink="http://www.w3.org/1999/xlink">
                    <title>icon_service备份 2@2x</title>
                    <g id="icon_service备份-2"
                       stroke="none"
                       stroke-width="1"
                       fill="none"
                       fill-rule="evenodd">
                      <g id="编组-4"
                         transform="translate(12.000000, 14.000000)">
                        <polyline id="路径"
                                  stroke="#000000"
                                  stroke-width="3"
                                  stroke-linejoin="round"
                                  points="5 20 0 20 0 12 5 12"></polyline>
                        <polyline id="路径"
                                  stroke="#000000"
                                  stroke-width="3"
                                  stroke-linejoin="round"
                                  transform="translate(30.500000, 17.000000) scale(-1, 1) translate(-30.500000, -17.000000) "
                                  points="33 21 28 21 28 13 33 13"></polyline>
                        <rect id="矩形"
                              fill="#000000"
                              x="11"
                              y="29"
                              width="7"
                              height="5"></rect>
                        <path d="M5,21.5 L5,11.5 C5,5.14872538 10.1487254,0 16.5,0 C22.8512746,0 28,5.14872538 28,11.5 L28,24.4969122 C28,28.3629055 24.8659932,31.4969122 21,31.4969122 L16.5,31.4969122 L16.5,31.4969122"
                              id="路径"
                              stroke="#000000"
                              stroke-width="3"
                              stroke-linejoin="round"></path>
                      </g>
                    </g>
                  </svg><span>Support</span>

                </div>

                <div class="flex-grid notify-wrap">
                  <div class="add-disabled-wrap"
                       style="display: none;"></div>
                  <button type="submit"
                          name="add"
                          @click="addToCart()"
                          id="AddToCart"
                          style="z-index:10;"
                          class="btn btn--full add-to-cart">
                    <span id="AddToCartText-7290778222762"
                          style="text-transform: capitalize;"
                          data-default-text="Add To Cart">Add To Cart</span>
                  </button>
                </div>
              </div>

              <div style="width: 100%; clear: both;"></div>

              <div class="stockout-notify">
                <div class="flex-grid flex-grid-center flex-grid--center"
                     style="height: 100%">
                  <div class="stockout--content">
                    <div class="stockout--close">
                      <svg width="24"
                           height="24"
                           viewBox="0 0 24 24"
                           fill="none"
                           xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 6.00584L5.99059 19L5 17.9942L18.0094 5L19 6.00584Z"
                              fill="black"></path>
                        <path d="M5 6.00584L18.0094 19L19 17.9942L5.99059 5L5 6.00584Z"
                              fill="black"></path>
                      </svg>
                    </div>

                    <div class="stockout--info">
                      <div style="font-size: 18px;line-height: 22px; font-weight: 600;overflow:hidden;text-overflow:ellipsis;white-space: nowrap;">Ruffle Sleeve Button Front Babydoll Blouse</div>
                      <div style="font-size: 14px; line-height: 21px; color: #666666; margin-top: 8px;">
                        <div class="stockout--color">color: </div>
                        <div class="stockout--size">size</div>
                      </div>
                    </div>

                    <div class="stockout--form">
                      <div class="stockout--input-wrap">
                        <input class="stockout--input"
                               type="text"
                               placeholder="Enter your email address">
                        <div class="stockout--message"></div>
                      </div>
                      <button type="button"
                              class="stockout--btn send-stockout-mail">Notify Me</button>
                    </div>

                    <p class="stockout--msg">
                      By submitting your email address, you agree to receive recurring promotional and personalized marketing emails about products and services we think may be of interest to you. For more information, please view our <a href="https://bloomchic.com/pages/terms-conditions">Terms of Service</a>, <a href="https://bloomchic.com/pages/social-responsibility">Privacy Policy</a>.
                    </p>
                  </div>

                  <div class="stockout--content stockout--success"
                       style="text-align: center;">
                    <div>
                      <svg style="vertical-align: top;"
                           width="80"
                           height="80"
                           viewBox="0 0 80 80"
                           fill="none"
                           xmlns="http://www.w3.org/2000/svg">
                        <circle cx="40"
                                cy="40"
                                r="40"
                                fill="black"></circle>
                        <path d="M52.8 27H27.2C25.4336 27 24 28.456 24 30.25V49.75C24 51.544 25.4336 53 27.2 53H52.8C54.5664 53 56 51.544 56 49.75V30.25C56 28.456 54.5664 27 52.8 27ZM52.8 34.6375L40 43.3053L27.2 34.6375V30.7326L40 39.3988L52.8 30.7326V34.6375Z"
                              fill="white"></path>
                        <circle cx="52"
                                cy="49"
                                r="6"
                                fill="#49CE4A"></circle>
                        <path d="M49.6001 49.3L51.1007 50.8L54.1007 47.8"
                              fill="#49CE4A"></path>
                        <path d="M49.6001 49.3L51.1007 50.8L54.1007 47.8"
                              stroke="white"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"></path>
                      </svg>
                    </div>
                    <div style="font-size: 24px; font-weight: 600;margin-bottom: 8px;margin-top: 18px; line-height: 30px;">Success!</div>
                    <p style="margin-bottom: 24px;color: #999999; font-size: 14px;line-height: 1.2;"> We'll send an email to <span class="stockout--mail-content"></span>, when it's available.</p>
                    <button type="button"
                            class="stockout--btn stockout-close-btn"
                            style="display: block;width: 100%;">OK</button>
                  </div>
                </div>
              </div>

              <div class="zline"></div>
              <!-- details -->
              <div class="product-info"
                   style="height: auto; visibility: initial;">
                <h3 class="product-info-title">Details</h3>
                <!-- <div class="product-info-content"> -->
                <!-- <div class="product-info-contentitem"><span>xx: </span>x</div> -->
                <!-- </div> -->
                <div class="product-info-box">
                  <div class="product-info-content"
                       style="display:block"
                       data-value="defalut">
                    <div class="product-info-contentitem"><span>Fabric: </span>Non-Stretch</div>
                    <div class="product-info-contentitem"><span>Length: </span>Regular</div>
                    <div class="product-info-contentitem"><span>Season: </span>Spring</div>
                    <div class="product-info-contentitem"><span>Color: </span>Yellow,Black,Light Green,Burgundy</div>
                    <div class="product-info-contentitem"><span>Type: </span>Blouses</div>
                    <div class="product-info-contentitem"><span>Neckline: </span>V Neck</div>
                    <div class="product-info-contentitem"><span>SleeveLength: </span>Short Sleeve</div>
                    <div class="product-info-contentitem"><span>Style: </span>,</div>
                    <div class="product-info-contentitem"><span>Material: </span>Polyester</div>
                    <div class="product-info-contentitem"><span>Composition: </span>100% Polyester</div>
                  </div>
                </div>
                <div class="product-info-more"><span>Read More</span></div>
              </div>
              <!-- model 模特 -->
              <!-- <div class="product-single__description rte">
                <div class="product-intro__sizeguide-summary">
                  <div class="product-intro__sizeguide-summary-cover">
                    <div class="inner"><img src="https://images-cdn.bloom.pub/model/Anna.jpg"></div>
                  </div>
                  <div class="product-intro__sizeguide-summary-list">
                    <div>
                      Model Wears: <span>14/1X</span>
                    </div>
                    <div class="model-item">
                      <div>
                        Height: <span>5'6"</span>
                      </div>
                      <div>
                        Bust: <span>39.76</span>
                      </div>
                      <div>
                        Waist: <span>31.11</span>
                      </div>
                      <div>
                        Hips: <span>43.31</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div> -->

              <p>&nbsp;</p>
              <div class="collapsibles-wrapper collapsibles-wrapper--border-bottom">
                <button type="button"
                        class="label collapsible-trigger collapsible-trigger-btn collapsible-trigger-btn--borders tit"
                        aria-controls="Product-content-1-6134798057642-6134798057642"
                        aria-expanded="false"> Details <span class="collapsible-trigger__icon collapsible-trigger__icon--open"
                        role="presentation"> <svg aria-hidden="true"
                         role="presentation"
                         class="icon icon--wide icon-chevron-down"
                         viewBox="0 0 28 16"
                         focusable="false">
                      <path d="M1.57 1.59l12.76 12.77L27.1 1.59"
                            stroke-width="2"
                            stroke="#000"
                            fill="none"
                            fill-rule="evenodd"></path>
                    </svg> </span> </button>
                <div id="Product-content-1-6134798057642-6134798057642"
                     class="collapsible-content collapsible-content--all">
                  <!-- product info -->
                  <div class="collapsible-content__inner rte">
                    <p>Color : Yellow,Black,Light Green,Burgundy</p>
                    <p>Type : Blouses</p>
                    <p>Neckline : V Neck</p>
                    <p>Composition : 100% Polyester</p>
                    <p>Season : Spring</p>
                    <p>Details : Button</p>
                    <p>Length : Regular</p>
                    <p>Material : Polyester</p>
                    <p>Fabric : Non-Stretch</p>
                    <p>Style : ,</p>
                    <p>SleeveLength : Short Sleeve</p>
                  </div>
                </div>
              </div>
              <!-- 尺码指南 -->
              <section class="sizeChart-drawer__content">
                <section class="sizeHeader"><span class="closeSize">
                    <svg t="1621922493614"
                         class="icon"
                         viewBox="0 0 1024 1024"
                         version="1.1"
                         xmlns="http://www.w3.org/2000/svg"
                         p-id="2347"
                         width="48"
                         height="48">
                      <path d="M656.7936 186.1632L330.9568 512l325.8368 325.8368 36.2496-36.1984L403.4048 512l289.6384-289.6384z"
                            p-id="2348"
                            fill="#333333"></path>
                    </svg>
                  </span>
                  <span>
                    Size Guide
                  </span>
                </section>
                <div class="common-detail">
                  <span>Switch to</span>
                  <ul class="sg-size-newTitle">
                    <div class="sg-title-ctn">
                      <li class="title-active"
                          title="IN"
                          style="border-right: none;">
                        IN
                      </li>
                      <li class=""
                          title="CM">
                        CM
                      </li>
                    </div>
                  </ul>
                </div>
                <div class="sizeDetails">
                  <div id="IN"
                       class="sizeBox">
                    <div class="size-table-outer">
                      <div class="sg-table-t">
                        Product Measurements
                      </div>
                      <div id="sg-table-ctn-1"
                           data-type="cm-inh"
                           class="sg-table-ctn scrollbar-inner sg-table-side">
                        <div class="table-wrapper">
                          <table cellspacing="0"
                                 cellpadding="0"
                                 class="sg-table-base j-cm-table">
                            <!-- cm table info -->
                            <tbody>
                              <tr class="cm-inch sg-table_tr">
                                <td class="sg-table_td">Size</td>
                                <td class="sg-table_td">US</td>
                                <td class="sg-table_td">UK</td>
                                <td class="sg-table_td">EU</td>
                                <td class="sg-table_td">TopLength</td>
                                <td class="sg-table_td">Shoulder</td>
                                <td class="sg-table_td">Bust</td>
                                <td class="sg-table_td">Waist</td>
                              </tr>
                              <tr class="sg-table_tr">
                                <td class="sg-table_td">M</td>
                                <td class="sg-table_td">10</td>
                                <td class="sg-table_td">14</td>
                                <td class="sg-table_td">40</td>
                                <td class="sg-table_td">26.0</td>
                                <td class="sg-table_td">14.6</td>
                                <td class="sg-table_td">41.7</td>
                                <td class="sg-table_td">31.5</td>
                              </tr>
                              <tr class="sg-table_tr">
                                <td class="sg-table_td">L</td>
                                <td class="sg-table_td">12</td>
                                <td class="sg-table_td">16</td>
                                <td class="sg-table_td">42</td>
                                <td class="sg-table_td">26.4</td>
                                <td class="sg-table_td">14.8</td>
                                <td class="sg-table_td">43.7</td>
                                <td class="sg-table_td">33.1</td>
                              </tr>
                              <tr class="sg-table_tr">
                                <td class="sg-table_td">1X</td>
                                <td class="sg-table_td">14</td>
                                <td class="sg-table_td">18</td>
                                <td class="sg-table_td">44</td>
                                <td class="sg-table_td">27.2</td>
                                <td class="sg-table_td">15.4</td>
                                <td class="sg-table_td">46.1</td>
                                <td class="sg-table_td">35.4</td>
                              </tr>
                              <tr class="sg-table_tr">
                                <td class="sg-table_td">1X</td>
                                <td class="sg-table_td">16</td>
                                <td class="sg-table_td">20</td>
                                <td class="sg-table_td">46</td>
                                <td class="sg-table_td">27.8</td>
                                <td class="sg-table_td">15.9</td>
                                <td class="sg-table_td">48.4</td>
                                <td class="sg-table_td">37.8</td>
                              </tr>
                              <tr class="sg-table_tr">
                                <td class="sg-table_td">2X</td>
                                <td class="sg-table_td">18</td>
                                <td class="sg-table_td">22</td>
                                <td class="sg-table_td">48</td>
                                <td class="sg-table_td">28.3</td>
                                <td class="sg-table_td">16.5</td>
                                <td class="sg-table_td">50.8</td>
                                <td class="sg-table_td">40.2</td>
                              </tr>
                              <tr class="sg-table_tr">
                                <td class="sg-table_td">2X</td>
                                <td class="sg-table_td">20</td>
                                <td class="sg-table_td">24</td>
                                <td class="sg-table_td">50</td>
                                <td class="sg-table_td">28.9</td>
                                <td class="sg-table_td">17.1</td>
                                <td class="sg-table_td">53.1</td>
                                <td class="sg-table_td">42.5</td>
                              </tr>
                              <tr class="sg-table_tr">
                                <td class="sg-table_td">3X</td>
                                <td class="sg-table_td">22</td>
                                <td class="sg-table_td">26</td>
                                <td class="sg-table_td">52</td>
                                <td class="sg-table_td">29.5</td>
                                <td class="sg-table_td">17.7</td>
                                <td class="sg-table_td">55.5</td>
                                <td class="sg-table_td">44.9</td>
                              </tr>
                              <tr class="sg-table_tr">
                                <td class="sg-table_td">4X</td>
                                <td class="sg-table_td">26</td>
                                <td class="sg-table_td">30</td>
                                <td class="sg-table_td">56</td>
                                <td class="sg-table_td">30.3</td>
                                <td class="sg-table_td">17.7</td>
                                <td class="sg-table_td">57.5</td>
                                <td class="sg-table_td">44.1</td>
                              </tr>
                              <tr class="sg-table_tr">
                                <td class="sg-table_td">5X</td>
                                <td class="sg-table_td">28</td>
                                <td class="sg-table_td">32</td>
                                <td class="sg-table_td">58</td>
                                <td class="sg-table_td">31.5</td>
                                <td class="sg-table_td">18.5</td>
                                <td class="sg-table_td">61.4</td>
                                <td class="sg-table_td">47.2</td>
                              </tr>
                              <tr class="sg-table_tr">
                                <td class="sg-table_td">6X</td>
                                <td class="sg-table_td">30</td>
                                <td class="sg-table_td">34</td>
                                <td class="sg-table_td">60</td>
                                <td class="sg-table_td">32.7</td>
                                <td class="sg-table_td">19.3</td>
                                <td class="sg-table_td">65.4</td>
                                <td class="sg-table_td">50.4</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div class="sg-table-notice">
                        * This data was obtained from manually measuring the product, it may be off by 1-2 CM.
                      </div>
                      <div class="measure-guide">
                        <div class="measure-guide__header"
                             id="iconDown2-1">
                          <span>
                            How to Measure the Product's Size?
                          </span>
                          <span class="iconfont icon-down">
                            <svg aria-hidden="true"
                                 focusable="false"
                                 role="presentation"
                                 class=" icon--wide icon-chevron-down"
                                 viewBox="0 0 28 16">
                              <path d="M1.57 1.59l12.76 12.77L27.1 1.59"
                                    stroke-width="2"
                                    stroke="#000"
                                    fill="none"
                                    fill-rule="evenodd"></path>
                            </svg>
                          </span>
                        </div>
                        <div class="measure-guide__pic displayNone"
                             id="measure-guide__pic2-1">
                          <div class="measure-pic-guide">
                            <div class="measure-wrap">
                              <p>1. Shoulder</p>
                              <p>Measure from where the shoulder seam meets the sleeve on one side to another side.
                              </p>
                            </div>
                            <div class="measure-wrap">
                              <p>2. Bust</p>
                              <p>Measure from the stitches below the armpits on one side to another.</p>
                            </div>
                            <div class="measure-wrap">
                              <p>3. Waist</p>
                              <p>Measure straight across the narrowest waist line from edge to edge.</p>
                            </div>
                            <div class="measure-wrap">
                              <p>4. Hips</p>
                              <p>Measure straight across the widest hip line from edge to edge.</p>
                            </div>
                            <div class="measure-wrap">
                              <p>5. Thigh</p>
                              <p>Measure across straight from the crotch seam to the outside of the leg. </p>
                            </div>
                            <div class="measure-wrap">
                              <p>6. Length</p>
                              <p>Measure from where the shoulder seam meets the collar to the hem.</p>
                            </div>
                          </div>
                          <div class="measure-pic0">
                            <img src="//cdn.shopify.com/s/files/1/0510/7171/3450/t/113/assets/measure-product_125x.jpg?v=28924117086144720471652767046">
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="size-table-outer">
                      <p class="sg-table-t">
                        Body Measurements
                      </p>
                      <div class="common-sizemeasure__sizeChart-size">
                        <span class="common-sizemeasure__sizeChart-sizeSelect"
                              title="0XL">
                          0XL
                        </span><span title="1XL">
                          1XL
                        </span><span title="2XL">
                          2XL
                        </span><span title="3XL">
                          3XL
                        </span><span title="4XL">
                          4XL
                        </span>
                        <span title="5XL">
                          5XL
                        </span>
                      </div>
                      <div class="common-sizemeasure__sizeChart-chart">
                        <div class="common-sizemeasure__sizeChart-wrap "
                             id="0XL">
                          <p class="sg-table-t">
                            US Size: 12
                          </p>
                          <div class="common-sizemeasure__sizeChart-data">
                            1. Bust: 39.8-42.1 inch
                          </div>
                          <div class="common-sizemeasure__sizeChart-data">
                            2. Waist Size: 31.9-34.3 inch
                          </div>
                          <div class="common-sizemeasure__sizeChart-data">
                            3. Hip Size: 43.7-46.1 inch
                          </div>
                        </div>
                        <div class="common-sizemeasure__sizeChart-wrap "
                             id="1XL">
                          <p class="sg-table-t">
                            US Size: 14
                          </p>
                          <div class="common-sizemeasure__sizeChart-data">
                            1. Bust: 42.1-44.5 inch
                          </div>
                          <div class="common-sizemeasure__sizeChart-data">
                            2. Waist Size: 34.3-36.6 inch
                          </div>
                          <div class="common-sizemeasure__sizeChart-data">
                            3. Hip Size: 46.1-48.4 inch
                          </div>
                        </div>
                        <div class="common-sizemeasure__sizeChart-wrap "
                             id="2XL">
                          <p class="sg-table-t">
                            US Size: 16
                          </p>
                          <div class="common-sizemeasure__sizeChart-data">
                            1. Bust: 44.5-46.9 inch
                          </div>
                          <div class="common-sizemeasure__sizeChart-data">
                            2. Waist Size: 36.6-39 inch
                          </div>
                          <div class="common-sizemeasure__sizeChart-data">
                            3. Hip Size: 48.4-50.8 inch
                          </div>
                        </div>
                        <div class="common-sizemeasure__sizeChart-wrap "
                             id="3XL">
                          <p class="sg-table-t">
                            US Size: 18
                          </p>
                          <div class="common-sizemeasure__sizeChart-data">
                            1. Bust: 46.9-49.2 inch
                          </div>
                          <div class="common-sizemeasure__sizeChart-data">
                            2. Waist Size: 39-41.3 inch
                          </div>
                          <div class="common-sizemeasure__sizeChart-data">
                            3. Hip Size: 50.8-53.1 inch
                          </div>
                        </div>
                        <div class="common-sizemeasure__sizeChart-wrap"
                             id="4XL">
                          <p class="sg-table-t">
                            US Size: 20
                          </p>
                          <div class="common-sizemeasure__sizeChart-data">
                            1. Bust: 49.2-51.6 inch
                          </div>
                          <div class="common-sizemeasure__sizeChart-data">
                            2. Waist Size: 41.3-43.7 inch
                          </div>
                          <div class="common-sizemeasure__sizeChart-data">
                            3. Hip Size: 53.1-55.5 inch
                          </div>
                        </div>
                        <div class="common-sizemeasure__sizeChart-wrap"
                             id="5XL">
                          <p class="sg-table-t">
                            US Size: 22
                          </p>
                          <div class="common-sizemeasure__sizeChart-data">
                            1. Bust: 51.6-53.9 inch
                          </div>
                          <div class="common-sizemeasure__sizeChart-data">
                            2. Waist Size: 43.7-46.1 inch
                          </div>
                          <div class="common-sizemeasure__sizeChart-data">
                            3. Hip Size: 55.5-57.9 inch
                          </div>
                        </div>
                      </div>
                      <div class="sg-table-notice">
                        * Depending on your body type and dressing habits, the above sizes are for reference only.
                      </div>
                      <div class="measure-guide">
                        <div class="measure-guide__header"
                             id="iconDown2-2">
                          <span>How to Measure your Body?</span>
                          <span class="iconfont icon-down">
                            <svg aria-hidden="true"
                                 focusable="false"
                                 role="presentation"
                                 class=" icon--wide icon-chevron-down"
                                 viewBox="0 0 28 16">
                              <path d="M1.57 1.59l12.76 12.77L27.1 1.59"
                                    stroke-width="2"
                                    stroke="#000"
                                    fill="none"
                                    fill-rule="evenodd"></path>
                            </svg>
                          </span>
                        </div>
                        <div class="measure-guide__pic displayNone"
                             id="measure-guide__pic2-2">
                          <div class="measure-pic-guide">
                            <div class="measure-wrap">
                              <p>1. Your bust</p>
                              <p>Measure the circumference over the fullest part of your breast.
                              </p>
                            </div>
                            <div class="measure-wrap">
                              <p>2. Your waist</p>
                              <p>Measure your waist at the thinnest place.
                              </p>
                            </div>
                            <div class="measure-wrap">
                              <p>3. Your hips</p>
                              <p>Measure the fullest part of your hips.
                              </p>
                            </div>
                          </div>
                          <div class="measure-pic0">
                            <img src="//cdn.shopify.com/s/files/1/0510/7171/3450/t/113/assets/measure-body_125x.jpg?v=162298635737550445331652767045">
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="CM"
                       class="sizeBox">
                    <div class="size-table-outer">
                      <div class="sg-table-t"> Product Measurements </div>
                      <div id="sg-table-ctn-1"
                           data-type="cm-inh"
                           class="sg-table-ctn scrollbar-inner sg-table-side">
                        <div class="table-wrapper">
                          <table cellspacing="0"
                                 cellpadding="0"
                                 class="sg-table-base j-cm-table">
                            <!-- CM table info -->
                            <tbody>
                              <tr class="cm-inch sg-table_tr">
                                <td class="sg-table_td">Size</td>
                                <td class="sg-table_td">US</td>
                                <td class="sg-table_td">UK</td>
                                <td class="sg-table_td">EU</td>
                                <td class="sg-table_td">TopLength</td>
                                <td class="sg-table_td">Shoulder</td>
                                <td class="sg-table_td">Bust</td>
                                <td class="sg-table_td">Waist</td>
                              </tr>
                              <tr class="sg-table_tr">
                                <td class="sg-table_td">
                                  M
                                </td>
                                <td class="sg-table_td">
                                  10
                                </td>
                                <td class="sg-table_td">
                                  14
                                </td>
                                <td class="sg-table_td">
                                  40
                                </td>
                                <td class="sg-table_td">
                                  66
                                </td>
                                <td class="sg-table_td">
                                  37
                                </td>
                                <td class="sg-table_td">
                                  106
                                </td>
                                <td class="sg-table_td">
                                  80
                                </td>
                              </tr>
                              <tr class="sg-table_tr">
                                <td class="sg-table_td">
                                  L
                                </td>
                                <td class="sg-table_td">
                                  12
                                </td>
                                <td class="sg-table_td">
                                  16
                                </td>
                                <td class="sg-table_td">
                                  42
                                </td>
                                <td class="sg-table_td">
                                  67
                                </td>
                                <td class="sg-table_td">
                                  37.5
                                </td>
                                <td class="sg-table_td">
                                  111
                                </td>
                                <td class="sg-table_td">
                                  84
                                </td>
                              </tr>
                              <tr class="sg-table_tr">
                                <td class="sg-table_td">
                                  1X
                                </td>
                                <td class="sg-table_td">
                                  14
                                </td>
                                <td class="sg-table_td">
                                  18
                                </td>
                                <td class="sg-table_td">
                                  44
                                </td>
                                <td class="sg-table_td">
                                  69
                                </td>
                                <td class="sg-table_td">
                                  39
                                </td>
                                <td class="sg-table_td">
                                  117
                                </td>
                                <td class="sg-table_td">
                                  90
                                </td>
                              </tr>
                              <tr class="sg-table_tr">
                                <td class="sg-table_td">
                                  1X
                                </td>
                                <td class="sg-table_td">
                                  16
                                </td>
                                <td class="sg-table_td">
                                  20
                                </td>
                                <td class="sg-table_td">
                                  46
                                </td>
                                <td class="sg-table_td">
                                  70.5
                                </td>
                                <td class="sg-table_td">
                                  40.5
                                </td>
                                <td class="sg-table_td">
                                  123
                                </td>
                                <td class="sg-table_td">
                                  96
                                </td>
                              </tr>
                              <tr class="sg-table_tr">
                                <td class="sg-table_td">
                                  2X
                                </td>
                                <td class="sg-table_td">
                                  18
                                </td>
                                <td class="sg-table_td">
                                  22
                                </td>
                                <td class="sg-table_td">
                                  48
                                </td>
                                <td class="sg-table_td">
                                  72
                                </td>
                                <td class="sg-table_td">
                                  42
                                </td>
                                <td class="sg-table_td">
                                  129
                                </td>
                                <td class="sg-table_td">
                                  102
                                </td>
                              </tr>
                              <tr class="sg-table_tr">
                                <td class="sg-table_td">
                                  2X
                                </td>
                                <td class="sg-table_td">
                                  20
                                </td>
                                <td class="sg-table_td">
                                  24
                                </td>
                                <td class="sg-table_td">
                                  50
                                </td>
                                <td class="sg-table_td">
                                  73.5
                                </td>
                                <td class="sg-table_td">
                                  43.5
                                </td>
                                <td class="sg-table_td">
                                  135
                                </td>
                                <td class="sg-table_td">
                                  108
                                </td>
                              </tr>
                              <tr class="sg-table_tr">
                                <td class="sg-table_td">
                                  3X
                                </td>
                                <td class="sg-table_td">
                                  22
                                </td>
                                <td class="sg-table_td">
                                  26
                                </td>
                                <td class="sg-table_td">
                                  52
                                </td>
                                <td class="sg-table_td">
                                  75
                                </td>
                                <td class="sg-table_td">
                                  45
                                </td>
                                <td class="sg-table_td">
                                  141
                                </td>
                                <td class="sg-table_td">
                                  114
                                </td>
                              </tr>
                              <tr class="sg-table_tr">
                                <td class="sg-table_td">
                                  4X
                                </td>
                                <td class="sg-table_td">
                                  26
                                </td>
                                <td class="sg-table_td">
                                  30
                                </td>
                                <td class="sg-table_td">
                                  56
                                </td>
                                <td class="sg-table_td">
                                  77
                                </td>
                                <td class="sg-table_td">
                                  45
                                </td>
                                <td class="sg-table_td">
                                  146
                                </td>
                                <td class="sg-table_td">
                                  112
                                </td>
                              </tr>
                              <tr class="sg-table_tr">
                                <td class="sg-table_td">
                                  5X
                                </td>
                                <td class="sg-table_td">
                                  28
                                </td>
                                <td class="sg-table_td">
                                  32
                                </td>
                                <td class="sg-table_td">
                                  58
                                </td>
                                <td class="sg-table_td">
                                  80
                                </td>
                                <td class="sg-table_td">
                                  47
                                </td>
                                <td class="sg-table_td">
                                  156
                                </td>
                                <td class="sg-table_td">
                                  120
                                </td>
                              </tr>
                              <tr class="sg-table_tr">
                                <td class="sg-table_td">
                                  6X
                                </td>
                                <td class="sg-table_td">
                                  30
                                </td>
                                <td class="sg-table_td">
                                  34
                                </td>
                                <td class="sg-table_td">
                                  60
                                </td>
                                <td class="sg-table_td">
                                  83
                                </td>
                                <td class="sg-table_td">
                                  49
                                </td>
                                <td class="sg-table_td">
                                  166
                                </td>
                                <td class="sg-table_td">
                                  128
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div class="sg-table-notice">
                        * This data was obtained from manually measuring the product, it may be off by 1-2 CM.
                      </div>
                      <div class="measure-guide">
                        <div class="measure-guide__header"
                             id="iconDown1">
                          <span>How to Measure the Product's Size?</span>
                          <span class="iconfont icon-down">
                            <svg aria-hidden="true"
                                 focusable="false"
                                 role="presentation"
                                 class=" icon--wide icon-chevron-down"
                                 viewBox="0 0 28 16">
                              <path d="M1.57 1.59l12.76 12.77L27.1 1.59"
                                    stroke-width="2"
                                    stroke="#000"
                                    fill="none"
                                    fill-rule="evenodd"></path>
                            </svg>
                          </span>
                        </div>
                        <div class="measure-guide__pic displayNone"
                             id="measure-guide__pic1">
                          <div class="measure-pic-guide">
                            <div class="measure-wrap">
                              <p>1. Shoulder</p>
                              <p>Measure from where the shoulder seam meets the sleeve on one side to another side.
                              </p>
                            </div>
                            <div class="measure-wrap">
                              <p>2. Bust</p>
                              <p>Measure from the stitches below the armpits on one side to another.</p>
                            </div>
                            <div class="measure-wrap">
                              <p>3. Waist</p>
                              <p>Measure straight across the narrowest waist line from edge to edge.</p>
                            </div>
                            <div class="measure-wrap">
                              <p>4. Hips</p>
                              <p>Measure straight across the widest hip line from edge to edge.</p>
                            </div>
                            <div class="measure-wrap">
                              <p>5. Thigh</p>
                              <p>Measure across straight from the crotch seam to the outside of the leg. </p>
                            </div>
                            <div class="measure-wrap">
                              <p>6. Length</p>
                              <p>Measure from where the shoulder seam meets the collar to the hem.</p>
                            </div>
                          </div>
                          <div class="measure-pic0">
                            <img src="//cdn.shopify.com/s/files/1/0510/7171/3450/t/113/assets/measure-product_125x.jpg?v=28924117086144720471652767046">
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="size-table-outer">
                      <p class="sg-table-t">
                        Body Measurements
                      </p>
                      <div class="common-sizemeasure__sizeChart-size">
                        <span class="common-sizemeasure__sizeChart-sizeSelect"
                              title="0XL">
                          0XL
                        </span><span title="1XL">
                          1XL
                        </span><span title="2XL">
                          1XL
                        </span><span title="3XL">
                          2XL
                        </span><span title="4XL">
                          2XL
                        </span>
                        <span title="5XL">
                          3XL
                        </span>
                      </div>
                      <div class="common-sizemeasure__sizeChart-chart">
                        <div class="common-sizemeasure__sizeChart-wrap "
                             id="0XL">
                          <p class="sg-table-t">
                            US Size: 12
                          </p>
                          <div class="common-sizemeasure__sizeChart-data">
                            1. Bust: 101-107 cm
                          </div>
                          <div class="common-sizemeasure__sizeChart-data">
                            2. Waist Size: 81-87 cm
                          </div>
                          <div class="common-sizemeasure__sizeChart-data">
                            3. Hip Size: 111-117 cm
                          </div>
                        </div>
                        <div class="common-sizemeasure__sizeChart-wrap "
                             id="1XL">
                          <p class="sg-table-t">
                            US Size: 14
                          </p>
                          <div class="common-sizemeasure__sizeChart-data">
                            1. Bust: 107-113 cm
                          </div>
                          <div class="common-sizemeasure__sizeChart-data">
                            2. Waist Size: 87-93 cm
                          </div>
                          <div class="common-sizemeasure__sizeChart-data">
                            3. Hip Size: 117-123 cm
                          </div>
                        </div>
                        <div class="common-sizemeasure__sizeChart-wrap "
                             id="2XL">
                          <p class="sg-table-t">
                            US Size: 16
                          </p>
                          <div class="common-sizemeasure__sizeChart-data">
                            1. Bust: 113-119 cm
                          </div>
                          <div class="common-sizemeasure__sizeChart-data">
                            2. Waist Size: 93-99 cm
                          </div>
                          <div class="common-sizemeasure__sizeChart-data">
                            3. Hip Size: 123-129 cm
                          </div>
                        </div>
                        <div class="common-sizemeasure__sizeChart-wrap "
                             id="3XL">
                          <p class="sg-table-t">
                            US Size: 18
                          </p>
                          <div class="common-sizemeasure__sizeChart-data">
                            1. Bust: 119-125 cm
                          </div>
                          <div class="common-sizemeasure__sizeChart-data">
                            2. Waist Size: 99-105 cm
                          </div>
                          <div class="common-sizemeasure__sizeChart-data">
                            3. Hip Size: 129-135 cm
                          </div>
                        </div>
                        <div class="common-sizemeasure__sizeChart-wrap"
                             id="4XL">
                          <p class="sg-table-t">
                            US Size: 20
                          </p>
                          <div class="common-sizemeasure__sizeChart-data">
                            1. Bust: 125-131 cm
                          </div>
                          <div class="common-sizemeasure__sizeChart-data">
                            2. Waist Size: 105-111 cm
                          </div>
                          <div class="common-sizemeasure__sizeChart-data">
                            3. Hip Size: 135-141 cm
                          </div>
                        </div>
                        <div class="common-sizemeasure__sizeChart-wrap"
                             id="5XL">
                          <p class="sg-table-t">
                            US Size: 22
                          </p>
                          <div class="common-sizemeasure__sizeChart-data">
                            1. Bust: 131-137 cm
                          </div>
                          <div class="common-sizemeasure__sizeChart-data">
                            2. Waist Size: 111-117 cm
                          </div>
                          <div class="common-sizemeasure__sizeChart-data">
                            3. Hip Size: 141-147 cm
                          </div>
                        </div>
                      </div>
                      <div class="sg-table-notice">
                        * Depending on your body type and dressing habits, the above sizes are for reference only.
                      </div>
                      <div class="measure-guide">
                        <div class="measure-guide__header"
                             id="iconDown2">
                          <span>How to Measure your Body?</span>
                          <span class="iconfont icon-down">
                            <svg aria-hidden="true"
                                 focusable="false"
                                 role="presentation"
                                 class=" icon--wide icon-chevron-down"
                                 viewBox="0 0 28 16">
                              <path d="M1.57 1.59l12.76 12.77L27.1 1.59"
                                    stroke-width="2"
                                    stroke="#000"
                                    fill="none"
                                    fill-rule="evenodd"></path>
                            </svg>
                          </span>
                        </div>
                        <div class="measure-guide__pic displayNone"
                             id="measure-guide__pic2">
                          <div class="measure-pic-guide">
                            <div class="measure-wrap">
                              <p>1. Your bust</p>
                              <p>Measure the circumference over the fullest part of your breast.
                              </p>
                            </div>
                            <div class="measure-wrap">
                              <p>2. Your waist</p>
                              <p>Measure your waist at the thinnest place.
                              </p>
                            </div>
                            <div class="measure-wrap">
                              <p>3. Your hips</p>
                              <p>Measure the fullest part of your hips.
                              </p>
                            </div>
                          </div>
                          <div class="measure-pic0">
                            <img src="//cdn.shopify.com/s/files/1/0510/7171/3450/t/113/assets/measure-body_125x.jpg?v=162298635737550445331652767045">
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <!-- size chose info -->

            </div>
            <div class="zline"></div>
            <!-- return box -->
            <div class="returnBox">
              <p class="tit">Shipping &amp; Returns</p>
              <div class="returnItem"
                   style="padding:0 0 12px">
                <a href="#"
                   class="returntopBox">
                  <div class="iconDiv">
                    <svg width="20px"
                         height="20px"
                         viewBox="0 0 40 40"
                         version="1.1"
                         xmlns="http://www.w3.org/2000/svg"
                         xmlns:xlink="http://www.w3.org/1999/xlink">
                      <title>icon_delivery@2x</title>
                      <g id="icon_delivery"
                         stroke="none"
                         stroke-width="1"
                         fill="none"
                         fill-rule="evenodd">
                        <g id="编组-3"
                           transform="translate(2.000000, 9.000000)">
                          <polygon id="矩形"
                                   stroke="#66BC37"
                                   stroke-width="3"
                                   points="22.5 3.5 30.6015876 3.5 35.5 10.0819584 35.5 19.5 22.5 19.5">
                          </polygon>
                          <polyline id="路径-8"
                                    stroke="#66BC37"
                                    stroke-width="3"
                                    points="3.5 0.5 22.5 0.5 22.5 19.5 3.5 19.5"></polyline>
                          <circle id="椭圆形"
                                  stroke="#66BC37"
                                  stroke-width="3"
                                  fill="#FFFFFF"
                                  cx="9.75"
                                  cy="19.75"
                                  r="2.75"></circle>
                          <circle id="椭圆形"
                                  stroke="#66BC37"
                                  stroke-width="3"
                                  fill="#FFFFFF"
                                  cx="28.75"
                                  cy="19.75"
                                  r="2.75"></circle>
                          <polygon id="直线-2"
                                   fill="#66BC37"
                                   fill-rule="nonzero"
                                   points="9 5 9 8 0 8 0 5"></polygon>
                          <polygon id="直线-2"
                                   fill="#66BC37"
                                   fill-rule="nonzero"
                                   points="9 10 9 13 2 13 2 10"></polygon>
                        </g>
                      </g>
                    </svg>
                    <span id="delivery-country">Delivery to United States</span>
                  </div>
                  <div style="display: flex; align-items: center; line-height: normal;">
                    <div style="font-size: 10px; color: #999; margin-right: 3px;">More</div>
                    <svg width="12"
                         height="12"
                         viewBox="0 0 12 12"
                         fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.5 1.5L9 6L4.5 10.5"
                            stroke="#B0B0B0"></path>
                    </svg>
                  </div>
                </a>
                <div class="returnBottom">
                  <div class="returnBottomContainer">
                    <div class="returnBottomItem">
                      <div>
                        Standard shipping: <span class="money standard_price"
                              style="color: rgb(0, 0, 0); opacity: 1;"
                              doubly-currency-usd="699"
                              doubly-currency="USD">$6.99</span>.
                        <span id="detailsA"
                              class="detailsFreeSpan">Free for
                          orders over <span class="money"
                                style="color: rgb(46, 174, 50); opacity: 1;"
                                doubly-currency-usd="5900"
                                doubly-currency="USD">$59.00</span>.</span>
                      </div>
                      <div class="standard">
                        Estimated delivery on<br><span class="beginTime">07/03/2022</span> -
                        <span class="endTime">07/11/2022</span>.
                      </div>
                    </div>
                    <div class="returnBottomItem">
                      <div>
                        Express shipping: <span class="money express_price"
                              style="color: rgb(0, 0, 0); opacity: 1;"
                              doubly-currency-usd="1690"
                              doubly-currency="USD">$16.90</span>.
                      </div>
                      <div class="express">
                        Estimated delivery on<br><span class="beginTime">06/28/2022</span> -
                        <span class="endTime">07/04/2022</span>.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- <div class="returnItem">
                <div class="returntopBox">
                  <div class="iconDiv">
                    <svg width="23px" height="20px" viewBox="0 0 40 40" version="1.1" xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink">
                      <title>icon_guarantee@2x</title>
                      <g id="icon_guarantee" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g id="安全-(1)" transform="translate(7.000000, 5.000000)" stroke="#66BC37" stroke-width="3">
                          <path
                            d="M13.5,0 L0,4.5 L0,12.525 C0.00347328474,18.7280269 3.59982757,24.4923961 9.5175,27.78 L13.5,30 L17.4825,27.78 C23.4001724,24.4923961 26.9965267,18.7280269 27,12.525 L27,4.5 L13.5,0 Z"
                            id="路径"></path>
                          <polyline id="路径-9"
                            points="8.53181557 14.4011624 12.6307616 18.0095533 18.5318156 10.0095533">
                          </polyline>
                        </g>
                      </g>
                    </svg>
                    <span style="line-height:1.2">The Bloom Guarantee: <font color="#999">Full
                        refund on shipping if a delay occurs.</font>
                    </span>
                  </div>
                </div>
              </div> -->
              <a href="#"
                 class="returnItem">
                <div class="returntopBox">
                  <div class="iconDiv">
                    <svg width="20px"
                         height="20px"
                         viewBox="0 0 40 40"
                         version="1.1"
                         xmlns="http://www.w3.org/2000/svg"
                         xmlns:xlink="http://www.w3.org/1999/xlink">
                      <title>icon_freereturns@2x</title>
                      <g id="icon_freereturns"
                         stroke="none"
                         stroke-width="1"
                         fill="none"
                         fill-rule="evenodd">
                        <g id="编组-2"
                           transform="translate(4.000000, 4.000000)"
                           stroke="#66BC37">
                          <g id="飞机"
                             transform="translate(0.000000, 22.000000)"
                             fill="#66BC37"
                             fill-rule="nonzero"
                             stroke-width="0.5">
                            <path d="M2.56666667,9.8 L2.56666667,6.09256757 L5.50817996,6.09256757 L5.50817996,4.47135135 L2.56666667,4.47135135 L2.56666667,2.20918919 L6.7,2.20918919 L6.7,0.5 L0.5,0.5 L0.5,9.8 L2.56666667,9.8 Z M10.1741379,9.8 L10.1741379,6.29364865 L11.304569,6.29364865 L13.1565517,9.8 L15.225,9.8 L13.2407328,6.02972973 C13.8420259,5.83702703 14.3010129,5.53121622 14.617694,5.1122973 C14.934375,4.69337838 15.0927155,4.11527027 15.0927155,3.37797297 C15.0927155,2.85851351 15.0125431,2.41864865 14.8521983,2.05837838 C14.6918534,1.69810811 14.4613578,1.40067568 14.1607112,1.16608108 C13.8600647,0.931486486 13.4932759,0.761824324 13.0603448,0.657094595 C12.6274138,0.552364865 12.1383621,0.5 11.5931897,0.5 L11.5931897,0.5 L8.25,0.5 L8.25,9.8 L10.1741379,9.8 Z M11.1764,4.8524 L9.8,4.8524 L9.8,2.3476 L11.1764,2.3476 C11.7633333,2.3476 12.1973333,2.4406 12.4784,2.6266 C12.7594667,2.8126 12.9,3.13293333 12.9,3.5876 C12.9,4.0588 12.7594667,4.3874 12.4784,4.5734 C12.1973333,4.7594 11.7633333,4.8524 11.1764,4.8524 L11.1764,4.8524 Z M23.975,9.8 L23.975,8.14108108 L19.1780172,8.14108108 L19.1780172,5.82864865 L22.4784483,5.82864865 L22.4784483,4.20743243 L19.1780172,4.20743243 L19.1780172,2.20918919 L23.7344828,2.20918919 L23.7344828,0.5 L17,0.5 L17,9.8 L23.975,9.8 Z M31.975,9.8 L31.975,8.14108108 L27.1780172,8.14108108 L27.1780172,5.82864865 L30.4784483,5.82864865 L30.4784483,4.20743243 L27.1780172,4.20743243 L27.1780172,2.20918919 L31.7344828,2.20918919 L31.7344828,0.5 L25,0.5 L25,9.8 L31.975,9.8 Z"
                                  id="FREE"></path>
                          </g>
                          <g id="编组"
                             transform="translate(5.000000, 0.000000)"
                             stroke-linecap="square"
                             stroke-width="3">
                            <polyline id="路径-10"
                                      points="4.42056539 0.5 0 4.92056539 4.42056539 9.34113079">
                            </polyline>
                            <path d="M3,5 L16,5 C19.3137085,5 22,7.6862915 22,11 C22,14.3137085 19.3137085,17 16,17 L3,17 L3,17"
                                  id="路径"></path>
                          </g>
                        </g>
                      </g>
                    </svg>
                    <span>Free Returns</span>
                  </div>
                  <div style="display: flex; align-items: center; line-height: normal;">
                    <div style="font-size: 10px; color: #999; margin-right: 3px;">Details</div>
                    <svg width="12"
                         height="12"
                         viewBox="0 0 12 12"
                         fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.5 1.5L9 6L4.5 10.5"
                            stroke="#B0B0B0"></path>
                    </svg>
                  </div>
                </div>
              </a>
            </div>

            <!-- <div class="zline sizeWrapper-A"></div> -->
            <div style="padding-top: 12px">
              <!-- <div class="collapsibles-wrapper collapsibles-wrapper--border-bottom"> -->
              <!-- </div> -->
            </div>
          </div>
          <div id="productBoughtTogether"></div>
        </div>
        <!-- 分享 -->
        <div class="shareBox">
          <div class="social-sharing"><a target="_blank"
               rel="noopener"
               href="//www.facebook.com/sharer.php?u=https://bloomchic.com/products/ruffle-sleeve-button-front-babydoll-blouse"
               class="social-sharing__link"
               title="Share on Facebook">
              <svg aria-hidden="true"
                   focusable="false"
                   role="presentation"
                   class="icon icon-facebook"
                   viewBox="0 0 32 32">
                <path fill="#444"
                      d="M18.56 31.36V17.28h4.48l.64-5.12h-5.12v-3.2c0-1.28.64-2.56 2.56-2.56h2.56V1.28H19.2c-3.84 0-7.04 2.56-7.04 7.04v3.84H7.68v5.12h4.48v14.08h6.4z"></path>
              </svg>
              <span class="social-sharing__title"
                    aria-hidden="true">Share</span>
              <span class="visually-hidden">Share on Facebook</span>
            </a><a target="_blank"
               rel="noopener"
               href="//twitter.com/share?text=Ruffle%20Sleeve%20Button%20Front%20Babydoll%20Blouse&amp;url=https://bloomchic.com/products/ruffle-sleeve-button-front-babydoll-blouse"
               class="social-sharing__link"
               title="Tweet on Twitter">
              <svg aria-hidden="true"
                   focusable="false"
                   role="presentation"
                   class="icon icon-twitter"
                   viewBox="0 0 32 32">
                <path fill="#444"
                      d="M31.281 6.733q-1.304 1.924-3.13 3.26 0 .13.033.408t.033.408q0 2.543-.75 5.086t-2.282 4.858-3.635 4.108-5.053 2.869-6.341 1.076q-5.282 0-9.65-2.836.913.065 1.5.065 4.401 0 7.857-2.673-2.054-.033-3.668-1.255t-2.266-3.146q.554.13 1.206.13.88 0 1.663-.261-2.184-.456-3.619-2.184t-1.435-3.977v-.065q1.239.652 2.836.717-1.271-.848-2.021-2.233t-.75-2.983q0-1.63.815-3.195 2.38 2.967 5.754 4.678t7.319 1.907q-.228-.815-.228-1.434 0-2.608 1.858-4.45t4.532-1.842q1.304 0 2.51.522t2.054 1.467q2.152-.424 4.01-1.532-.685 2.217-2.771 3.488 1.989-.261 3.619-.978z"></path>
              </svg>
              <span class="social-sharing__title"
                    aria-hidden="true">Tweet</span>
              <span class="visually-hidden">Tweet on Twitter</span>
            </a><a target="_blank"
               rel="noopener"
               href="//pinterest.com/pin/create/button/?url=https://bloomchic.com/products/ruffle-sleeve-button-front-babydoll-blouse&amp;media=//cdn.shopify.com/s/files/1/0510/7171/3450/products/1_0fd42950-a2df-42ee-8b2b-7272c5708055_1024x1024.jpg?v=1654163878&amp;description=Ruffle%20Sleeve%20Button%20Front%20Babydoll%20Blouse"
               class="social-sharing__link"
               title="Pin on Pinterest">
              <svg aria-hidden="true"
                   focusable="false"
                   role="presentation"
                   class="icon icon-pinterest"
                   viewBox="0 0 32 32">
                <path fill="#444"
                      d="M27.52 9.6c-.64-5.76-6.4-8.32-12.8-7.68-4.48.64-9.6 4.48-9.6 10.24 0 3.2.64 5.76 3.84 6.4 1.28-2.56-.64-3.2-.64-4.48-1.28-7.04 8.32-12.16 13.44-7.04 3.2 3.84 1.28 14.08-4.48 13.44-5.12-1.28 2.56-9.6-1.92-11.52-3.2-1.28-5.12 4.48-3.84 7.04-1.28 4.48-3.2 8.96-1.92 15.36 2.56-1.92 3.84-5.76 4.48-9.6 1.28.64 1.92 1.92 3.84 1.92 6.4-.64 10.24-7.68 9.6-14.08z"></path>
              </svg>
              <span class="social-sharing__title"
                    aria-hidden="true">Pin it</span>
              <span class="visually-hidden">Pin on Pinterest</span>
            </a></div>
        </div>

      </div>
    </div>
    <!-- pswp--supports-fs pswp--open pswp--notouch pswp--css_animation pswp--svg pswp--zoom-allowed pswp--visible pswp--animated-in pswp--has_mouse -->
    <div class="pswp"
         tabindex="-1"
         role="dialog"
         aria-hidden="false"
         style="position: fixed;">
      <div class="pswp__bg"
           style="opacity: 1;"></div>
      <div class="pswp__scroll-wrap">
        <div class="pswp__container"
             style="transform: translate3d(0px, 0px, 0px);">

          <div class="pswp__item"
               style="transform: translate3d(0px, 0px, 0px);">
            <div class="pswp__zoom-wrap"
                 style="transform: translate3d(218px, 44px, 0px) scale(1);"><img class="pswp__img pswp__img--placeholder"
                   src="https://cdn.shopify.com/s/files/1/0510/7171/3450/products/1_458d4f87-96c7-47c0-b81b-36eb19dfaa91_540x.jpg?v=1655705300"
                   style="width: 617px; height: 823px; display: none;"><img class="pswp__img"
                   :src="itemProduct.image.src"
                   style="display: block; width: 617px; height: 823px;"></div>
          </div>

        </div>

        <div class="pswp__ui pswp__ui--over-close pswp__ui--idle">

          <button class="btn btn--body btn--circle btn--large pswp__button pswp__button--close"
                  title="Close (esc)">
            <svg aria-hidden="true"
                 focusable="false"
                 role="presentation"
                 class="icon icon-close"
                 viewBox="0 0 64 64">
              <path d="M19 17.61l27.12 27.13m0-27.12L19 44.74"></path>
            </svg>
          </button>

        </div>
      </div>
    </div>
    <!-- </div> -->

    <!-- <div class="row">
      <div class="details_info col-md-7">
        <div class="col_top">
          <div class='photo_cont'>
            <div class="details_photo"
                 ref="choose">
              <div class="photo_big">
                <div class="big_box"
                     ref="content">
                  <el-image class="big_img"
                            :src="showImg"
                            :preview-src-list="srcList">
                  </el-image>
                  <div class="shadow"
                       ref="shadow"></div>
                </div>
                <div class="larger"
                     ref="larger">
                  <img :src="showImg"
                       ref="big" />
                </div>
              </div>
              <div class="photo_samll">
                <img class="small_img"
                     :src="v.photo"
                     alt=""
                     v-for="(v,index) in itemProduct.child"
                     :key='index'
                     @click="selectImg(v)">
                <div class="swiper mySwiper">
                  <div class="swiper-wrapper">
                    <div class="swiper-slide"
                         @click="selectImg(v)"
                         v-for="(v,index) in itemProduct.child"
                         :key='index'>
                      <img :src="v.photo"
                           alt="">
                    </div>
                  </div>
                  <div class="swiper-pagination"></div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-5">
        <div class='details_msg'>
          <div class="details_tag">
            <div class="tag_wish glyphicon glyphicon-heart"
                 @mouseenter="isWish = true"
                 @mouseleave="isWish = false"
                 @click='toWish'>
              <div class="tag_wish_info"
                   v-if='isWish'>Add to Wish List</div>
            </div>
            <div class="tag_compare glyphicon glyphicon-transfer"
                 @mouseenter="isCompare = true"
                 @mouseleave="isCompare = false"
                 @click='toCompare'>
              <div class="tag_compare_info"
                   v-if="isCompare">Compare this Product</div>
            </div>
          </div>
          <div class='details_name'>{{itemProduct.name}}</div>
          <div class="price description">
            <div class="prduct_price">
              <div class="reallPrice">{{itemProduct.reallPrice}}</div>
              {{itemProduct.price}}
            </div>
            <div class="prduct_tax">Ex Tax: {{itemProduct.price}}</div>
          </div>
          <div class="description">
            <div>Product Code:</div>
            <div>Availability: In Stock</div>
          </div>

          <div class="description count">
            <div class="add_count">
              <div class="qty_input">
                <el-input v-model='count'
                          size='big'></el-input>
                <div class='glyphicon glyphicon-plus push'
                     @click="count++"></div>
                <div class='glyphicon glyphicon-minus minus'
                     @click='cut'></div>
              </div>
              <div class="add_btn"
                   @click="addCart">ADD TO CART</div>
              <div class="bottom_start">
                <div class="start glyphicon glyphicon-star"
                 v-for="v in 5"
                 :key="v"></div>
                <div class="reviews"
                     @click="toWish">
                  <span class="glyphicon glyphicon-heart-empty"></span>

                </div>
              </div>
            </div>
            <div class="add_list">
                                    <div class="pc_bottom_to "><a href="#">Add to compare</a> </div>
                                    <div class="pc_bottom_to "><a href="#">Add ro wishlist</a> </div>
                                </div>
          </div>

        </div>
      </div>
    </div>
    <div clas='row'>
      <div class="col-md-12">
        <div class="col_bottom">
          <div class="tab_cont">
            <div class="tab_title">
              <div class="tab_title_td"
                   @click='toTab(1)'
                   :class="selectTab==1?'select_tab_class':''">EXPLANATION</div>
              <div class="tab_title_td"
                   @click='toTab(2)'
                   :class="selectTab==2?'select_tab_class':''">ADDITIONAL INFORMATION</div>
              <div class="tab_title_td"
                   @click='toTab(3)'
                   :class="selectTab==3?'select_tab_class':''">Reviews(0)</div>
            </div>
            <div v-if='selectTab==1'>
              <div class="img_list">
                <div class="img_list_tab">
                  <div v-for="(v,index) in childOne"
                       :key='index'>
                    <img :src="v.photo"
                         alt="">
                  </div>
                </div>
                <div class="img_list_tab">
                  <div v-for="(v,index) in childTwo"
                       :key='index'>
                    <img :src="v.photo"
                         alt="">
                  </div>
                </div>

              </div>

            </div>
            <div v-if='selectTab==2'>
              <div class="information">
                <div class="information_box">
                  <div class="information_box_label">Name</div>
                  <div class="information_box_label">{{itemProduct.name}}</div>
                </div>
                <div class="information_box">
                  <div class="information_box_label">Availability</div>
                  <div class="information_box_label">In Stock</div>
                </div>
              </div>
              <div class="related">
                <div class="related_title">Related products</div>
                <goods-con :goodsOption="productOption"
                           :goodsView='4'
                           :goodsClass='goodsClass'></goods-con>
              </div>
            </div>
            <div v-if='selectTab==3'>
              <div class="review_box">
                <div class="tab_write">review</div>
                <div class="tab_msg">There are no reviews for this product.</div>
                <div class="tab_write">Be the first to review “{{itemProduct.name}}”</div>
                <div class="block_start">
                  <span class="demonstration">Your rating</span>
                  <el-rate v-model="start"></el-rate>
                </div>
                <div class="tab_input">
                  <div class="input_title">Your Review:</div>
                  <el-input type="textarea"
                            :autosize="{ minRows: 10, maxRows: 10}"
                            placeholder="Your review"
                            v-model="textarea">
                  </el-input>
                </div>
                <div class="tab_input">
                  <div class="input_title">Your Name:</div>
                  <el-input v-model="name"
                            placeholder="Name"
                            size='lg'></el-input>
                </div>
                <div class='rating input_title'>
                  Rating:
                  <div class="rating_box">
                    Bad
                    <el-radio v-model="radio"
                              label=" "></el-radio>
                    <el-radio v-model="radio"
                              label="  "></el-radio>
                    <el-radio v-model="radio"
                              label="   "></el-radio>
                    <el-radio v-model="radio"
                              label="    "></el-radio>
                    <el-radio v-model="radio"
                              label="     "></el-radio>
                    Good
                  </div>
                </div>
                <div class="tab_input">
                <div class="input_title">Enter the code in the box below:</div>
                <el-input v-model="code" ></el-input>
              </div>
                <div class="tab_btn">
                  <div class="btn_cont">Continue</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <el-drawer :visible.sync="drawer"
                 :modal='modal'
                 :show-close='modal'
                 :wrapperClosable='modal'
                 :modal-append-to-body='modal'
                 size='200px'
                 direction="btt">
        <div class="drawer_box row">
          <div class="drawer_box_left col-lg-5 col-md-5 col-sm-12 col-xs-12">
            <div class="drawer_box_img">
              <img :src="itemProduct.photo"
                   alt="">
            </div>
            <div class="drawer_box_name">{{itemProduct.name}}</div>
          </div>
          <div class="drawer_box_right col-lg-7 col-md-7 col-sm-12 col-xs-12">
            <div class="drawer_box_stock">Availability： &nbsp;&nbsp;&nbsp;&nbsp;In Stock</div>
            <div class="drawer_box_price">Price：&nbsp;&nbsp;&nbsp;&nbsp;{{itemProduct.price}}</div>
          </div>
        </div>
      </el-drawer>
    </div> -->

  </div>
</template>
<script>
import $ from 'jquery'

// import '../utils/swiper.min.js'
import product from '../utils/product'
import goodsCon from './goodsCon.vue'
import catelist from '../utils/cataList'
import 'swiper/dist/css/swiper.min.css'
import 'swiper/dist/js/swiper.min.js'
// import '../utils/jquery_zoom'
import top from './top'
export default {
  inject: ['reload'],
  name: 'T_details',
  props: {
    propId: Number,
  },
  components: {
    top,
    goodsCon
  },

  data () {
    return {
      activeName: 'first',
      radio: '1',
      count: 1,
      name: '',
      textarea: '',
      id: '',
      itemProduct: '',
      topFlag: false,
      showImg: '',
      oneLength: 0,
      twoLength: 0,
      threeLength: 0,
      onePath: false,
      twoPath: false,
      threePath: false,
      srcList: [],
      isWish: false,
      isCompare: false,
      selectTab: 1,
      productOption: [],
      goodsTitle: 'Related products',
      goodsClass: 'col-md-3 col-lg-3',
      start: '',
      drawer: false,
      modal: false,
      parentId: '',
      cateId: '',
      parentName: '',
      cateName: '',
      other_buy: [],
      may_like: [],
      product_image_id: '',
      color_name: '',
      color_index: 0,
      size_index: 0,
      goodsCart: []

    }
  },
  created () {
    let id = this.$route.query.id
    this.id = id

    // this.getItem()
    this.getProduct()
  },
  methods: {
    initSwiper () {
      let that = this
      this.$nextTick(() => {
        new Swiper('.swiper-container3', {
          loop: false,
          autoplay: 3000,
          spaceBetween: 30,
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
    toTab (v) {
      this.selectTab = v
    },
    selectImg (v) {
      this.showImg = v.photo
    },
    cut () {
      if (this.count == 1) {
        return
      }
      this.count--
    },
    getProduct () {
      let id = this.id
      console.log('id', id, product.data)
      // 获取商品
      product.data.map((v, index) => {
        if (v.id == id) {
          console.log('product', v)
          v.colors = []
          v.options[0].values.map(c => {
            let color_obj = {}
            color_obj.color = c
            color_obj.color_img = c.toLowerCase().replace(" ", "-")
            v.colors.push(color_obj)
          })
          this.color_name = v.options[0].values[0]
          this.itemProduct = v
          this.product_image_id = v.images[0].id
          this.itemProduct.price = v.variants[0].price

        }
      })


    },
    getScrList () {
      let srcList = []
      let childOne = []
      let childTwo = []
      let itemProduct = this.itemProduct
      // console.log('tx ext', itemProduct.price.split('$'))
      itemProduct.child.map((v, index) => {
        srcList.push(v.photo)
        if (index % 2 == 0) {
          childOne.push(v)
        } else {
          childTwo.push(v)
        }
      })
      this.srcList = srcList
      this.childOne = childOne
      this.childTwo = childTwo
      // console.log('srcList',srcList)
    },

    addToCart () {
      let itemProduct = JSON.parse(JSON.stringify(this.itemProduct))
      let count = 1
      let color = itemProduct.options[0].values[this.color_index]
      let size = itemProduct.options[1].values[this.size_index]
      // itemProduct.count = 1
      let id = this.id
      let goodsCart = JSON.parse(sessionStorage.getItem('goodsCart')) || []
      // let goodsCart = this.$store.state.cartGood ? JSON.parse(JSON.stringify(this.$store.state.cartGoods)) : JSON.parse(sessionStorage.getItem('goodsCart')) || []

      console.log('goodsCart', goodsCart, JSON.parse(sessionStorage.getItem('goodsCart')))
      // return
      if (goodsCart) {
        let is_find = goodsCart.findIndex((v, index) => {
          return v.id == id && v.color == color && v.size == size
        })
        if (is_find > -1 && color == goodsCart[is_find].color && size == goodsCart[is_find].size) {
          console.log('is_find', is_find, color, goodsCart[is_find].options[0].values[this.color_index])
          let num = Number(goodsCart[is_find].count)
          let price = itemProduct.price
          price = Number(price)

          goodsCart[is_find].count = count + num
          goodsCart[is_find].allPrice = (goodsCart[is_find].count * price).toFixed(2)
          sessionStorage.setItem('goodsCart', JSON.stringify(goodsCart))
          this.$store.commit('getCartGoods', goodsCart)
          this.goodsCart = goodsCart
          this.getItem()
        } else {
          let price = itemProduct.price
          itemProduct.allPrice = (price * count).toFixed(2)
          itemProduct.count = 1
          console.log('not_is_find', is_find, price, itemProduct)
          itemProduct.size = size
          itemProduct.color = color
          let current_img = ''
          itemProduct.variants.map(c => {
            if (c.option1 == color && c.option2 == size) {
              console.log(' c.image_id', c.image_id)
              itemProduct.images.map(i => {
                if (i.id == c.image_id) {
                  console.log('current_img', i.src)
                  current_img = i.src
                  return
                }
              })
            }
          })
          itemProduct.image.src = current_img
          goodsCart.push(itemProduct)
          sessionStorage.setItem('goodsCart', JSON.stringify(goodsCart))
          this.goodsCart = goodsCart
          this.$store.commit('getCartGoods', goodsCart)
          this.getItem()
        }
        //  console.log('goodsCart不为空',goodsCart)
      } else {

        let productArr = []
        console.log('price', itemProduct)
        let price = itemProduct.price
        itemProduct.allPrice = price
        itemProduct.count = 1
        itemProduct.size = size
        itemProduct.color = color
        productArr.push(itemProduct)
        sessionStorage.setItem('goodsCart', JSON.stringify(productArr))
        this.goodsCart = goodsCart
        this.$store.commit('getCartGoods', goodsCart)
        this.getItem()
      }

      // itemProduct.type = 'cart'
      // sessionStorage.setItem('showDialog', JSON.stringify(itemProduct))
      // this.backTop()


    },


    // 计算距离顶部的高度，当高度大于80显示回顶部图标，小于80则隐藏

    // 获取元素到文档区域的坐标 
    getPosition: function (element) {
      let dc = document,
        rec = element.getBoundingClientRect(),

        x = rec.left, // 获取元素相对浏览器视窗window的左、上坐标 
        y = rec.top;
      // 与html或body元素的滚动距离相加就是元素相对于文档区域document的坐标位置 
      x += dc.documentElement.scrollLeft || dc.body.scrollLeft;
      y += dc.documentElement.scrollTop || dc.body.scrollTop;
      //  console.log('rec',rec);
      return {
        left: x,
        top: y
      };
    },

    toCompare () {
      let item = v
      let compare = JSON.parse(sessionStorage.getItem('compare')) || []
      let is_find = compare.findIndex((c, index) => {
        return c.id == item.id
      })

      if (is_find > -1) {
      } else {
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
    toWish () {
      let item = this.itemProduct
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
    toLogin () {
      this.$router.push('/login')
    },
    toDetails (id) {
      this.$router.push('/details?id=' + id)
      this.reload()
    },
    getItem () {
      let cartGoods = this.goodsCart
      let count = 0
      cartGoods.map(v => {
        count = Number(v.count + count)
      })
      console.log('count', count, cartGoods)
      this.$store.commit('getCartGoods_length', count)
    },
    toCategory (v) {
      this.$router.push('/category?path=' + v)
    },
    toCheckOut () {
      this.addCart()
      this.$router.push('/checkout')
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
    scrollBackTop () {
      const that = this;
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      that.scrollTop = scrollTop;
      if (scrollTop >= 1200) {
        this.drawer = true
      } else {
        this.drawer = false
      }

    },
    // initSwiper () {
    //   this.$nextTick(() => {
    //     new Swiper('.swiper', {
    //       slidesPerView: 4,
    //       spaceBetween: 30,
    //       pagination: {
    //         el: '.swiper-pagination',
    //         clickable: true,
    //       },
    //       nextButton: '.swiper-button-next',
    //       prevButton: '.swiper-button-prev',
    //     })
    //   })


    // },
    initSwiper2 () {
      this.$nextTick(() => {
        new Swiper('.swiper-container1', {
          direction: 'vertical',
          slidesPerView: 5,
          spaceBetween: 20,
        })
      })
      this.$nextTick(() => {
        new Swiper('.swiper-container2', {
          slidesPerView: 5,
          //paginationClickable: true,
          spaceBetween: 40,
          loop: true,
          nextButton: '.swiper-button-next',
          prevButton: '.swiper-button-prev',
        })
      })
      this.$nextTick(() => {
        new Swiper('.swiper-container3', {
          slidesPerView: 5,
          paginationClickable: true,
          spaceBetween: 40,
          loop: true,
          nextButton: '.pro-slide2, .swiper-button-next',
          prevButton: '.pro-slide2, .swiper-button-prev',

        })
      })
    },
    // 尺码选择
    switchSpec (ref, index) {
      let event = ref + index
      let obj = this.$refs[event]
      if ($(obj).attr('class') == "act") {
        return;
      }
      $(obj).parent().find('.act').removeClass('act');
      $(obj).addClass('act');
    },
    // image choose
    chooseImage (item, index) {
      this.product_image_id = item.id
      this.itemProduct.image.src = item.src

      let scr_height = $('.product__thumbs--scroller').prop("scrollHeight")  //滚动条总高度
      let thumbs_lenght = $('.product__thumbs--scroller').children().length  //子元素个数
      let parts = (scr_height / thumbs_lenght) * index
      $('.product__thumbs--scroller').animate({ scrollTop: parts }, 100)

    },
    changeSize (item, index, type) {
      if (type == 'color') {
        this.color_name = item.color
        this.color_index = index
      }
      if (type == 'size') {
        let size = item.replace('/', '-')
        $('#' + size).css('display', 'block').siblings().css('display', 'none')
        this.size_index = index
      }

    }


  },
  // 当页面加载完成，我们给window对象（所有浏览器都支持window对象，表示浏览器窗口）给他添加监听滚动事件
  mounted () {
    this.initSwiper()
    // size guide
    $('.seeMore2').click(function () {
      $('.sizeChart-drawer__content').animate({ right: '0px' }, 200)
    })
    $('.closeSize').click(function () {
      $('.sizeChart-drawer__content').animate({ right: '-100%' }, 200)
    })

    // iconDown
    $('#iconDown1').click(function () {

      if ($('#measure-guide__pic1').hasClass('displayNone')) {
        $('#measure-guide__pic1').removeClass('displayNone')
      } else {
        $('#measure-guide__pic1').addClass('displayNone')
      }

    })
    $('#iconDown2').click(function () {
      if ($('#measure-guide__pic2').hasClass('displayNone')) {
        $('#measure-guide__pic2').removeClass('displayNone')
      } else {
        $('#measure-guide__pic2').addClass('displayNone')
      }

    })
    $('#iconDown2-1').click(function () {

      if ($('#measure-guide__pic2-1').hasClass('displayNone')) {
        $('#measure-guide__pic2-1').removeClass('displayNone')
      } else {
        $('#measure-guide__pic2-1').addClass('displayNone')
      }

    })
    $('#iconDown2-2').click(function () {
      if ($('#measure-guide__pic2-2').hasClass('displayNone')) {
        $('#measure-guide__pic2-2').removeClass('displayNone')
      } else {
        $('#measure-guide__pic2-2').addClass('displayNone')
      }

    })
    // size_XL-details
    $('.common-sizemeasure__sizeChart-size span').click(function () {
      console.log('Body Measurements ', this.title)
      $('#' + this.title).siblings().css('display', 'none')
      $('#' + this.title).css('display', 'block')
      $(this).siblings().removeClass('common-sizemeasure__sizeChart-sizeSelect')
      $(this).addClass('common-sizemeasure__sizeChart-sizeSelect')
    })
    // size IN-CM

    $('.sg-title-ctn li').click(function () {

      $('#' + this.title).siblings().css('display', 'none')
      $('#' + this.title).css('display', 'block')
      $(this).siblings().removeClass('title-active')
      $(this).addClass('title-active')
    })

    // 点击大图查看
    $('.product__photo-zoom').click(function () {
      $('.pswp').addClass('pswp--supports-fs pswp--open pswp--notouch pswp--css_animation pswp--svg pswp--zoom-allowed pswp--visible pswp--animated-in pswp--has_mouse')
    })
    $('.pswp__button--close').click(function () {
      $('.pswp').removeClass('pswp--supports-fs pswp--open pswp--notouch pswp--css_animation pswp--svg pswp--zoom-allowed pswp--visible pswp--animated-in pswp--has_mouse')
    })





    window.addEventListener('scroll', this.scrollBackTop);

  },
  destroyed () {
    window.removeEventListener('scroll', this.scrollBackTop)
  },


}

</script>

<style lang='scss' scoped>
@import "../style/detail.css";
@import "../style/swiper.css";
@import "../style/common.css";
.details {
  width: 100%;
  margin: 30px 0;
  // color: #222;
  text-align: left;
  .select_path {
    > a {
      color: #4ecdc4;
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
      text-align: left;
    }
  }

  .category_title_line {
    flex: 1;
    height: 10px;

    background: url("http://www.aerpowm.com/catalog/view/theme/vitalia/img/patterns/heading/01.png");
  }

  .row {
    margin-top: 20px;
  }

  .col-md-9 {
    margin-right: 0;
    padding-top: 10px;
    padding: 0;
  }

  .category_left {
    color: #667280;
    font-size: 13px;
    font-weight: bolder;

    .left_list {
      display: flex;
      flex-direction: column;
      text-align: left;

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
        padding: 5px 0;
        border-bottom: 1px solid #e6e6e6;
        cursor: pointer;
        position: relative;
        font-weight: 100;

        &:first-child {
          &:after {
            content: "";
            height: 0;
          }
        }

        &:last-child {
          &:after {
            content: "";
            height: 0;
          }
        }
      }
    }
  }

  .details_info {
    display: flex;
    flex-direction: column;
    .photo_cont {
      width: 100%;
    }

    .details_photo {
      width: 100%;

      // height:240px;
      .photo_big {
        // padding: 20px 20px 0;
        width: 100%;
        // border: 1px solid #eee;
        // height:400px;
        position: relative;
        border-radius: 5px;

        .big_box {
          position: relative;
          width: 700px;
          height: 700px;
          .shadow {
            display: none;
            width: 320px;
            height: 320px;
            border: 1px solid #ccc;
            background: rgba($color: #e6e6e6, $alpha: 0.5);
            position: absolute;
            top: 0;
          }
        }

        .big_img {
          width: 100%;
          height: auto;
          display: block;
          object-fit: cover;
        }

        .larger {
          display: none;
          width: 400px;
          height: 400px;
          position: absolute;
          top: 20px;
          left: 430px;
          // float: left;
          overflow: hidden;
          box-sizing: border-box;
          // border:3px solid #000;
          z-index: 9999;

          > img {
            width: 500px;
            height: 500px;
            position: absolute;
            left: 0;
            top: 0;
          }
        }
      }

      .photo_samll {
        margin-top: 20px;
        display: flex;
        width: 100%;

        // justify-content: space-between;
        // padding-right:20px;
        flex-wrap: wrap;

        .small_img {
          width: 100px;
          height: 100px;
          padding: 10px;
          // border: 1px solid #ddd;
          margin: 5px;
          border-radius: 2px;
        }
        .swiper {
          width: 100%;
          overflow: hidden;
          .swiper-slide {
            > img {
              display: block;
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
          }
        }
      }
    }
  }
  .col-md-5 {
    border-left: 1px solid #ddd;
  }
  .details_msg {
    color: #222;
    font-size: 13px;
    text-align: left;
    flex: 1;
    line-height: 1.6;

    // padding-left: 100px;
    .details_tag {
      margin-bottom: 20px;
      background: #e7e7e7;
      border-radius: 4px;
      height: 34px;
      width: 80px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 15px;

      // border:1px solid #b7b7b7;
      > div {
        width: 40px;
        text-align: center;
        height: 34px;
        line-height: 34px;
        border: 1px solid #b7b7b7;
        position: relative;

        &:hover {
          background: #e3e3e3;
          color: #000;
          border: 1px solid #b3b3b3;
        }
      }

      .tag_wish {
        // border-right:1px solid #b3b3b3;
        border-radius: 4px 0 0 4px;
        position: relative;

        &::after {
          content: "";
          width: 1px;
          position: absolute;
          right: -1px;
          top: 0;
          bottom: 0;
          background: #b3b3b3;
        }
      }

      .tag_wish_info,
      .tag_compare_info {
        background: #000;
        color: #fff;
        font-size: 10px;
        font-weight: 100;
        width: 140px;
        height: 25px;
        // padding:5px 10px;
        position: absolute;
        top: -35px;
        border-radius: 4px;
        line-height: 25px;
        left: -50px;

        &::after {
          position: absolute;
          bottom: -6px;
          left: 55px;
          display: inline-block;
          border-right: 6px solid transparent;
          border-top: 6px solid #000;
          border-left: 6px solid transparent;
          border-bottom-color: #000;
          content: "";
        }
      }

      .tag_compare_info {
        width: 160px;
      }

      .tag_compare {
        border-radius: 0 4px 4px 0;
      }
    }

    .details_name {
      font-size: 17px;
      color: $fontBodyColor;
      margin: 20px 0 10px;
      line-height: 1.1;
    }

    .description {
      padding: 20px 0 20px 0;
      width: 100%;
      color: #222;
      // border-bottom: 1px solid #e6e6e6;
    }

    .price {
      .prduct_price {
        color: #e61446;
        font-size: 30px;

        .reallPrice {
          color: #667280;
          font-size: 13px;
          text-decoration: line-through;
        }
      }
    }

    .count {
      .add_count {
        display: flex;

        .qty_input {
          width: 60px;
          align-items: center;
          // margin-top: 10px;
          position: relative;
          height: 60px;
          position: relative;
          /deep/ .el-input__inner {
            height: 36px;
            padding-left: 25px;
          }
        }

        .minus,
        .push {
          // background: #f3f4f5;
          color: #b3b3b3;
          height: 20px;
          font-size: 16px;
          padding: 3px;
          font-weight: 100;
        }

        .push {
          position: absolute;
          right: 2px;
          top: 20px;
          // border-bottom: 1px solid #dcdfe6;
          // border-left: 1px solid #dcdfe6;
          // border-radius: 4px;
        }

        .minus {
          position: absolute;
          right: 1;
          left: 1px;
          top: 20px;
        }
      }

      .add_btn {
        line-height: 36px;
        margin-left: 20px;
        font-size: 14px;
        text-align: center;
        height: 36px;
        background: $backgroundColor;
        padding: 0 20px;
        cursor: pointer;
        color: #ffffff;

        &:hover {
          background-color: rgb(22, 148, 214);
          background-position: 0 -15px;
        }
      }

      .add_list {
        display: flex;
        margin: 20px 0 0 10px;
      }

      .pc_bottom_to {
        font-size: 10px;
        color: #43c6bc;
        transform: scale(0.83);
        margin-right: 20px;
        font-size: 15px;

        &:after {
          content: "";
          position: absolute;
          left: -15px;
          top: 6px;
          height: 12px;
          // margin-left: -5px;
          // margin-top: -40px;
          border-left: 2px solid;
        }

        &::before {
          content: "";
          position: absolute;
          left: -20px;
          top: 16px;
          width: 12px;

          margin-top: -5px;
          border-top: 2px solid;
        }
      }
    }

    .bottom_start {
      display: flex;
      font-size: 18px;
      .start {
        margin-right: 2px;
      }

      .reviews {
        margin-left: 10px;
        font-weight: bold;
        margin-top: -1px;
        cursor: pointer;
        > span {
          color: #949188;
          font-size: 18px;
          padding: 8px;
          border: 1px solid #949188;
          &:hover {
            background: rgb(22, 148, 214);
            color: #fff;
          }
        }
      }
    }
  }

  .col_top {
    display: flex;
    width: 100%;
  }

  .col_bottom {
    padding: 60px 20px;

    .tab_cont {
      // border: 1px solid #e6e6e6;
      position: relative;
      // padding: 20px;
      text-align: left;

      .tab_title {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        z-index: 999;
        width: 100%;
        border-bottom: 1px solid #000;
        margin-bottom: 70px;
        padding-bottom: 10px;

        .tab_title_td {
          cursor: pointer;
          // margin: 0 30px;
          color: #000;
          font-size: 18px;
          font-weight: 500;
          position: relative;
        }
        // .select_tab_class {
        //   &:after {
        //     content: "";
        //     height: 2px;
        //     background: #222;
        //     position: absolute;
        //     width: 100%;
        //     bottom: -5px;
        //     left: 0;
        //     animation: loadIn 0.5s ease;
        //     animation-iteration-count: 1;
        //     @-webkit-keyframes loadIn {
        //       0% {
        //         width: 0;
        //       }
        //       100% {
        //         width: 100%;
        //       }
        //     }
        //   }
        // }
        .unselect_tab_class {
          &:after {
            content: "";
            height: 2px;
            background: #222;
            position: absolute;
            width: 0;
            bottom: -5px;
            left: 0;
            animation: loadOut 0.5s ease;
            animation-iteration-count: 1;
            @-webkit-keyframes loadOut {
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
      .img_list {
        display: flex;
        .img_list_tab {
          img {
            width: 450px;
            height: auto;
            object-fit: cover;
            display: block;
          }
        }
      }
      .information {
        margin-left: 100px;
        .information_box {
          display: flex;
          color: #222;
          font-size: 16px;
          margin-bottom: 20px;
          font-weight: 500;
          .information_box_label {
            &:first-child {
              font-size: 18px;
              width: 100px;
              margin-right: 120px;
            }
          }
        }
      }
      .related_title {
        text-align: left;
        font-size: 22px;
        color: #222;
        padding-top: 40px;
        font-weight: bold;
      }
      .review_box {
        max-width: 930px;
        margin-left: auto;
        margin-right: auto;
        color: #222;
        .block_start {
          display: flex;

          .demonstration {
            font-size: 12px;
            margin-right: 40px;
          }
        }
      }

      .tab_msg {
        margin-bottom: 20px;
      }

      .tab_write {
        font-size: 22px;
        padding-bottom: 20px;
        color: #444;
      }

      .tab_input {
        margin-top: 20px;
        .input_title {
          // font-weight: bold;
          font-size: 12px;
          position: relative;
          margin-left: 10px;
          &::after {
            content: "*";
            color: red;
            position: absolute;
            left: 0;
            left: -10px;
          }
        }

        //   /deep/ .el-input__inner {
        //     width: 200px;
        //     height: 35px;
        //     margin-top: 5px;
        //     margin-bottom: 20px;
        //   }
      }
      .input_title {
        // font-weight: bold;
        font-size: 12px;
        position: relative;
        margin-left: 10px;
        &::after {
          content: "*";
          color: red;
          position: absolute;
          left: 0;
          left: -10px;
        }
      }
      .rating {
        display: flex;
        align-items: center;
        padding-top: 30px;
        .rating_box {
          margin-left: 10px;
          font-weight: 400;
          padding-top: 5px;
          /deep/ .el-radio {
            margin-right: 0;
          }
        }
      }

      .tab_btn {
        display: flex;
        justify-content: flex-start;
        padding-top: 20px;
        .btn_cont {
          background-color: #222;
          padding: 17px 45px;
          color: #fff;
          cursor: pointer;
        }
      }
    }
  }

  .el-message-box {
    width: 50%;
  }
  .drawer_box {
    color: #222;
    font-size: 18px;
    margin: 0 100px;
    .drawer_box_left,
    .drawer_box_right {
      display: flex;

      align-items: center;
      text-align: left;
    }
    .drawer_box_img {
      margin-right: 10px;

      > img {
        width: 80px;
        height: 80px;
        display: block;
      }
    }
    .drawer_box_right {
      flex-direction: column;
      align-items: flex-end;
    }
  }
  /deep/ .el-drawer__wrapper {
    position: fixed;
    height: 200px;
    .el-drawer__container {
      position: fixed;
      top: calc(100% - 200px);
      bottom: 0;
      height: 200px;
    }
  }
}
</style>
<style>
.product-single__description > p:nth-of-type(2) {
  display: none;
}
.collapsibles-wrapper {
  display: none;
}
.product-info {
  visibility: hidden;
  height: 0;
  overflow: hidden;
  border-bottom: 1px solid #efefef;
  padding: 16px 0;
}
.product-info-title {
  font-size: 14px;
  margin-bottom: 8px;
  font-weight: bold;
}
.product-info-content {
  height: auto;
  overflow: hidden;
  transition: height 0.1s ease-in-out;
}
.product-info-contentitem {
  display: inline-table;
  width: 100%;
  margin: 2px 0;
  word-break: break-word;
  min-height: 16px;
  position: relative;
  color: #999999;
  clear: both;
  overflow: hidden;
}
/* .product-info-contentitem::after {display: block; content: ""; width: 100%; clear: both; overflow: hidden;} */
.product-info-contentitem:nth-child(n + 4) {
  display: none;
}
.product-info-open .product-info-contentitem:nth-child(n + 4) {
  display: inline-table;
}
.product-info-contentitem span {
  color: #000;
  font-size: 12px;
  font-weight: 500;
  position: relative;
  padding-left: 12px;
}
.product-info-contentitem span::before {
  display: inline-block;
  content: "";
  margin-right: 8px;
  width: 4px;
  height: 4px;
  background-color: #000;
  border-radius: 50%;
  overflow: hidden;
  left: 0;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
.product-info-more span {
  font-size: 12px;
  display: inline-block;
  margin-left: 12px;
  margin-top: -2px;
  color: #999;
  text-decoration: underline;
  cursor: pointer;
}
.modelTit {
  font-weight: bold;
}
.product-intro__sizeguide-summary {
  margin-bottom: 40px;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
}

.product-intro__sizeguide-summary-cover {
  margin-right: 15px;
}

.product-intro__sizeguide-summary-cover .inner {
  width: 64px;
  height: 0;
  padding-bottom: 100%;
  overflow: hidden;
  border-radius: 50%;
}

.product-intro__sizeguide-summary-cover img {
  width: 100%;
}

.product-intro__sizeguide-summary-list {
  width: 260px;
  font-size: 12px;
}

.product-intro__sizeguide-summary-list .model-item {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  display: -ms-flexbox;
  -webkit-flex-wrap: wrap;
  flex-wrap: wrap;
}

.product-intro__sizeguide-summary-list .model-item > div {
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 50%;
  flex: 0 0 50%;
  margin-top: 10px;
}
.stockout-lock {
  overflow-y: hidden;
}
.stockout-notify {
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  display: none;
}

.stockout--info {
  text-align: center;
  margin-bottom: 24px;
}
.stockout--content {
  position: relative;
  background-color: #fff;
  padding: 32px 24px;
  width: 320px;
}

.stockout--close {
  position: absolute;
  top: 8px;
  right: 8px;
  cursor: pointer;
}

.stockout--input-wrap {
  margin-bottom: 16px;
}
.stockout--form button {
  width: 100%;
  margin-bottom: 8px;
}
.stockout--message {
  color: #f34938;
  font-size: 12px;
  line-height: 1.2;
  margin-top: 4px;
}
.stockout--form input {
  border: 1px solid #ccc;
  width: 100%;
  padding: 12px 16px;
  line-height: 1;
  font-size: 14px !important;
}
.stockout--btn {
  height: 44px;
  line-height: 44px;
  background: #000000;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  text-align: center;
}

.stockout--msg {
  font-size: 10px;
  line-height: 1.2;
  color: #999999;
  margin: 0;
}
.stockout--msg a {
  text-decoration: underline;
  color: #2f92eb;
}
.stockout--success {
  display: none;
}

.notify-wrap {
  position: relative;
  cursor: pointer;
  overflow: hidden;
}
.add-disabled-wrap {
  position: absolute;
  top: 0;
  left: 10px;
  bottom: 0;
  width: 100%;
  z-index: 19;
}
.notify-wrap button {
  display: block;
  cursor: pointer !important;
}
.notify-wrap button span {
  display: block;
  width: 100%;
}
.notify-wrap button:disabled {
  background-color: #fa9a30;
  color: #fff;
}
.add-to-cart {
  text-transform: none !important;
}
.notify-wrap button:disabled:active,
.notify-wrap button:disabled:hover {
  background-color: #fa9a30 !important;
  color: #fff;
}
.notify-wrap button:active span,
.notify-wrap button:hover span {
  color: rgba(255, 255, 255, 0.8) !important;
}
</style>