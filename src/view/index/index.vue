<template>
  <div class="index">
    <template>
      <banner></banner>
    </template>

    <div class="page-width t_container">
      <div class="t_title">Shop By Size</div>
      <div class="size_container">
        <div class="size_box row">
          <img src="../../assets/image/size_1.jpg"
               alt=""
               class="col-sm-3">
          <img src="../../assets/image/size_2.jpg"
               alt=""
               class="col-sm-3">
          <img src="../../assets/image/size_3.jpg"
               alt=""
               class="col-sm-3">
          <img src="../../assets/image/size_4.jpg"
               alt=""
               class="col-sm-3">
        </div>
        <div class="size_box row">
          <img src="../../assets/image/size_5.jpg"
               alt=""
               class="col-sm-3">
          <img src="../../assets/image/size_6.jpg"
               alt=""
               class="col-sm-3">
          <img src="../../assets/image/size_7.jpg"
               alt=""
               class="col-sm-3">
          <img src="../../assets/image/size_8.png"
               alt=""
               class="col-sm-3">
        </div>
      </div>
    </div>
    <div class="page-width t_container">
      <div class="t_title">Shop By Occasion</div>
      <div class="size_container">
        <div class="category_list row">
          <img src="../../assets/image/category (1).jpg"
               alt=""
               class="col-sm-3 col-xs-6">
          <img src="../../assets/image/category (2).jpg"
               alt=""
               class="col-sm-3 col-xs-6">
          <img src="../../assets/image/category (3).jpg"
               alt=""
               class="col-sm-3 col-xs-6">
          <img src="../../assets/image/category (4).jpg"
               alt=""
               class="col-sm-3 col-xs-6">
        </div>

      </div>
    </div>
    <!-- justIn swiper -->
    <div id="shopify-section-1644894213e36fd064"
         class="shopify-section index-section">
      <div id="CollectionSection-1644894213e36fd064"
           data-section-id="1644894213e36fd064"
           data-section-type="collection-template"
           class="">

        <div class="page-width"
             style="overflow: hidden;">
          <div id="1644894213e36fd064"
               class="section_title">
            Just In
            <a href="#"
               class="section_title__more"
               style="text-decoration: underline; position: absolute; top: 50%; right: 0%; transform: translateY(-50%); ">
              View More</a>
          </div>
        </div>

        <div class="page-width page_swiper"
             style="position:relative;">
          <div class="product-slide-btn product-slide-leftbtn hidden-mobile">
            <svg width="48"
                 height="48"
                 viewBox="0 0 48 48"
                 fill="none"
                 xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_d_4017_15403)">
                <circle r="20"
                        transform="matrix(-1 0 0 1 24 22)"
                        fill="white"></circle>
                <path fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M26.6816 30.25L28.0959 28.8358L21.2605 22.0004L28.0959 15.1651L26.6816 13.7508L18.4321 22.0004L26.6816 30.25Z"
                      fill="black"></path>
              </g>
              <defs>
                <filter id="filter0_d_4017_15403"
                        x="0"
                        y="0"
                        width="48"
                        height="48"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0"
                           result="BackgroundImageFix"></feFlood>
                  <feColorMatrix in="SourceAlpha"
                                 type="matrix"
                                 values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                 result="hardAlpha"></feColorMatrix>
                  <feOffset dy="2"></feOffset>
                  <feGaussianBlur stdDeviation="2"></feGaussianBlur>
                  <feComposite in2="hardAlpha"
                               operator="out"></feComposite>
                  <feColorMatrix type="matrix"
                                 values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"></feColorMatrix>
                  <feBlend mode="normal"
                           in2="BackgroundImageFix"
                           result="effect1_dropShadow_4017_15403"></feBlend>
                  <feBlend mode="normal"
                           in="SourceGraphic"
                           in2="effect1_dropShadow_4017_15403"
                           result="shape"></feBlend>
                </filter>
              </defs>
            </svg>
          </div>
          <div class="product-slide blc-scrollbar">
            <div class="product-slide-item"
                 v-for="(item,i) in productItems"
                 :key="i">
              <div class="grid__item grid-product medium-up--one-quarter small--one-half aos-init aos-animate sensor-posted"
                   data-aos="row-of-4"
                   data-product-handle="floral-pocket-ruffles-shirred-split-midi-dress"
                   data-variant-id="43067673051306"
                   data-product-vailable="true"
                   data-product-id="7407981527210"
                   data-product-price="2980"
                   data-product-title="Floral Pocket Ruffles Shirred Split Midi Dress"
                   data-product-spu="02DLD22063W009GreenCZ1"
                   data-product-orginal-price="2980"
                   data-product-index="1">
                <div class="grid-product__content">
                  <div class="grid-product-new-tag">
                    NEW
                  </div><a href="#"
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
                             :data-srcset="item.image.src+ ' 360w'"
                             sizes="248px"
                             :srcset="item.image.src+ '360w'">
                        <noscript>
                          <img class="grid-product__image lazyloaded"
                               :src="item.image.src"
                               alt="">
                        </noscript>
                      </div>
                      <div class="grid-product__secondary-image small--hide"><img class="lazyautosizes lazyloaded"
                             data-widths="[360, 540, 720, 1000]"
                             data-aspectratio="0.75"
                             data-sizes="auto"
                             alt=""
                             :data-srcset="item.image.src"
                             sizes="250px"
                             :srcset="item.image.src">
                      </div>
                      <div class="grid-product__color-image grid-product__color-image--43067673051306 small--hide">
                      </div>

                    </div>

                    <div class="grid-product__meta">
                      <div class="grid-product__title grid-product__title--body">{{item.title}}</div>

                      <div class="grid-product__price "><span class="money"
                              style="opacity: 1;"
                              doubly-currency-usd="2980"
                              doubly-currency="USD">${{item.variants[0].price}}</span>
                      </div><span class="shopify-product-reviews-badge"
                            data-id="7407981527210"></span>
                    </div>
                  </a>
                </div>
                <!-- <div class="grid-product__colors grid-product__colors--7407981527210">
                  <a href="/products/floral-pocket-ruffles-shirred-split-midi-dress?variant=43067673051306"
                     class="color-swatch color-swatch--small color-swatch--green color-swatch--with-image"
                     data-variant-id="43067673051306"
                     data-variant-image="//cdn.shopify.com/s/files/1/0510/7171/3450/products/2_c2f47c1e-73a6-46ec-b414-cf365aae72ca_400x.jpg?v=1655540913"
                     style="background-image: url(//cdn.shopify.com/s/files/1/0510/7171/3450/t/113/assets/green_small.png?v=110729494421391056811652766980); background-color: green;">
                    <span class="visually-hidden">Green</span>
                  </a>

                </div> -->

                <!-- "snippets/preorder-now-collection-item.liquid" was not rendered, the associated app was uninstalled -->
              </div>
            </div>

          </div>
          <div class="product-slide-btn product-slide-rightbtn hidden-mobile">
            <svg width="48"
                 height="48"
                 viewBox="0 0 48 48"
                 fill="none"
                 xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_d_4017_15402)">
                <circle cx="24"
                        cy="22"
                        r="20"
                        fill="white"></circle>
                <path fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M21.3184 30.25L19.9042 28.8358L26.7396 22.0004L19.9042 15.1651L21.3184 13.7508L29.568 22.0004L21.3184 30.25Z"
                      fill="black"></path>
              </g>
              <defs>
                <filter id="filter0_d_4017_15402"
                        x="0"
                        y="0"
                        width="48"
                        height="48"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0"
                           result="BackgroundImageFix"></feFlood>
                  <feColorMatrix in="SourceAlpha"
                                 type="matrix"
                                 values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                 result="hardAlpha"></feColorMatrix>
                  <feOffset dy="2"></feOffset>
                  <feGaussianBlur stdDeviation="2"></feGaussianBlur>
                  <feComposite in2="hardAlpha"
                               operator="out"></feComposite>
                  <feColorMatrix type="matrix"
                                 values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"></feColorMatrix>
                  <feBlend mode="normal"
                           in2="BackgroundImageFix"
                           result="effect1_dropShadow_4017_15402"></feBlend>
                  <feBlend mode="normal"
                           in="SourceGraphic"
                           in2="effect1_dropShadow_4017_15402"
                           result="shape"></feBlend>
                </filter>
              </defs>
            </svg>
          </div>
        </div>

      </div>
    </div>
    <!-- Shop By Category -->
    <div class="page-width t_container">
      <div class="t_title">Shop By Category</div>
      <div class="size_container">
        <div class="category_list row">
          <div class="category_tab col-sm-2 col-xs-4">
            <img src="../../assets/image/category_tab (1).jpg"
                 alt="">
            <div class="category_title">Dresses</div>
          </div>
          <div class="category_tab col-sm-2 col-xs-4">
            <img src="../../assets/image/category_tab (2).jpg"
                 alt="">
            <div class="category_title">Tops</div>
          </div>
          <div class="category_tab col-sm-2 col-xs-4">
            <img src="../../assets/image/category_tab (3).jpg"
                 alt="">
            <div class="category_title">Blouses</div>
          </div>
          <div class="category_tab col-sm-2 col-xs-4">
            <img src="../../assets/image/category_tab (4).jpg"
                 alt="">
            <div class="category_title">Skirts</div>
          </div>
          <div class="category_tab col-sm-2 col-xs-4">
            <img src="../../assets/image/category_tab (5).jpg"
                 alt="">
            <div class="category_title">Short</div>
          </div>
          <div class="category_tab col-sm-2 col-xs-4">
            <img src="../../assets/image/category_tab (6).jpg"
                 alt="">
            <div class="category_title">Loungewear</div>
          </div>

        </div>

      </div>
    </div>
    <!--about us  -->
    <div class="page-width t_container">
      <div class="t_title">Shop By Category</div>
      <div class="size_container">
        <div class="about_list row">
          <div class="list_tab col-sm-6 col-xs-12">
            <img src="../../assets/image/about_us.jpg"
                 alt="">
          </div>
          <div class="lsit_tab_msg col-sm-6 col-xs-12">
            <div class="list_tab_container list_tab">
              <svg fill="none"
                   height="16.6"
                   viewBox="0 0 289 30"
                   width="160"
                   xmlns="http://www.w3.org/2000/svg">
                <path d="M24.0141 17.0581C24.967 18.3882 25.4546 20.0039 25.3991 21.648C25.4514 22.7873 25.2165 23.9213 24.7167 24.9426C24.217 25.9639 23.4689 26.8387 22.5433 27.4841C20.6394 28.8555 17.8627 29.5412 14.2133 29.5412H0V0.460938H13.3954C16.7723 0.460938 19.3731 1.13099 21.1978 2.4711C22.0728 3.08907 22.7812 3.92013 23.2583 4.88822C23.7353 5.85631 23.9657 6.93046 23.9284 8.01241C23.9553 9.35465 23.6176 10.6785 22.9522 11.8384C22.3066 12.9347 21.3723 13.8259 20.2546 14.4114C21.7456 14.8805 23.0583 15.8045 24.0141 17.0581ZM5.30938 4.69568V12.7363H12.8216C14.3118 12.8317 15.7964 12.4773 17.0889 11.7178C17.5706 11.3982 17.9617 10.956 18.2232 10.4353C18.4847 9.91453 18.6075 9.33338 18.5794 8.74949C18.6104 8.15863 18.4892 7.56978 18.2278 7.04103C17.9664 6.51227 17.5738 6.06188 17.0889 5.73425C15.7951 4.97808 14.3115 4.62397 12.8216 4.71576L5.30938 4.69568ZM20.0502 21.112C20.0502 18.3112 17.9946 16.9107 13.8835 16.9107H5.30938V25.3065H13.8835C17.9946 25.3065 20.0502 23.9083 20.0502 21.112Z"
                      fill="#24231F"></path>
                <path d="M34.9234 0.460938H40.1997V24.9715H55.1648V29.5412H34.9102L34.9234 0.460938Z"
                      fill="#24231F"></path>
                <path d="M67.4519 28.0285C65.1625 26.7925 63.2542 24.9373 61.9381 22.668C60.6283 20.3324 59.9395 17.6907 59.9395 15.0026C59.9395 12.3146 60.6283 9.67286 61.9381 7.33726C63.2561 5.06954 65.1639 3.2148 67.4519 1.97684C69.8915 0.70838 72.5928 0.046875 75.3334 0.046875C78.074 0.046875 80.7754 0.70838 83.215 1.97684C85.5016 3.21677 87.4089 5.07105 88.7288 7.33726C90.0389 9.68004 90.7277 12.3283 90.7277 15.0228C90.7277 17.7172 90.0389 20.3655 88.7288 22.7082C87.4108 24.976 85.503 26.8307 83.215 28.0687C80.7754 29.3371 78.074 29.9986 75.3334 29.9986C72.5928 29.9986 69.8915 29.3371 67.4519 28.0687V28.0285ZM80.4779 23.9144C81.9877 23.0583 83.2326 21.7913 84.0724 20.2559C84.9296 18.6418 85.3784 16.8366 85.3784 15.0026C85.3784 13.1686 84.9296 11.3635 84.0724 9.74944C83.2326 8.21396 81.9877 6.94695 80.4779 6.09093C78.8945 5.23335 77.1277 4.78477 75.3334 4.78477C73.5391 4.78477 71.7724 5.23335 70.189 6.09093C68.6772 6.94436 67.4317 8.21201 66.5944 9.74944C65.7372 11.3635 65.2884 13.1686 65.2884 15.0026C65.2884 16.8366 65.7372 18.6418 66.5944 20.2559C67.4317 21.7933 68.6772 23.0609 70.189 23.9144C71.7724 24.772 73.5391 25.2205 75.3334 25.2205C77.1277 25.2205 78.8945 24.772 80.4779 23.9144Z"
                      fill="#24231F"></path>
                <path d="M107.763 28.0285C105.473 26.7925 103.565 24.9373 102.249 22.668C100.939 20.3324 100.25 17.6907 100.25 15.0026C100.25 12.3146 100.939 9.67286 102.249 7.33726C103.567 5.06954 105.475 3.2148 107.763 1.97684C110.202 0.70838 112.904 0.046875 115.644 0.046875C118.385 0.046875 121.086 0.70838 123.526 1.97684C125.813 3.21677 127.72 5.07105 129.04 7.33726C130.35 9.68004 131.039 12.3283 131.039 15.0228C131.039 17.7172 130.35 20.3655 129.04 22.7082C127.722 24.976 125.814 26.8307 123.526 28.0687C121.086 29.3371 118.385 29.9986 115.644 29.9986C112.904 29.9986 110.202 29.3371 107.763 28.0687V28.0285ZM120.789 23.9144C122.299 23.0583 123.544 21.7913 124.383 20.2559C125.241 18.6418 125.689 16.8366 125.689 15.0026C125.689 13.1686 125.241 11.3635 124.383 9.74944C123.544 8.21396 122.299 6.94695 120.789 6.09093C119.206 5.23278 117.439 4.78391 115.644 4.78391C113.85 4.78391 112.083 5.23278 110.5 6.09093C108.99 6.94695 107.745 8.21396 106.905 9.74944C106.048 11.3635 105.599 13.1686 105.599 15.0026C105.599 16.8366 106.048 18.6418 106.905 20.2559C107.745 21.7913 108.99 23.0583 110.5 23.9144C112.083 24.7725 113.85 25.2214 115.644 25.2214C117.439 25.2214 119.206 24.7725 120.789 23.9144Z"
                      fill="#24231F"></path>
                <path d="M166.819 29.5457L166.779 10.2683L157.394 26.249H155.026L145.634 10.543V29.5725H140.569V0.492188H144.935L156.292 19.7696L167.439 0.492188H171.805L171.851 29.5725L166.819 29.5457Z"
                      fill="#24231F"></path>
                <path d="M188.71 28.0233C186.435 26.7837 184.542 24.9283 183.242 22.6628C181.934 20.3192 181.247 17.6713 181.247 14.9773C181.247 12.2834 181.934 9.63543 183.242 7.2918C184.558 5.02937 186.458 3.17567 188.736 1.93138C191.138 0.626155 193.828 -0.0378136 196.552 0.0016629C198.749 -0.026525 200.93 0.397406 202.962 1.24795C204.852 2.045 206.53 3.28214 207.863 4.85955L204.433 8.14279C203.478 7.05017 202.301 6.18031 200.984 5.59279C199.667 5.00527 198.24 4.71397 196.802 4.7389C194.962 4.70609 193.145 5.15614 191.526 6.04552C190.002 6.88748 188.743 8.14841 187.892 9.6839C187.034 11.3051 186.586 13.1168 186.586 14.9572C186.586 16.7976 187.034 18.6093 187.892 20.2306C188.743 21.7661 190.002 23.027 191.526 23.869C193.142 24.77 194.959 25.2316 196.802 25.2091C198.244 25.2349 199.675 24.9399 200.993 24.345C202.311 23.7501 203.485 22.8695 204.433 21.765L207.863 25.1152C206.524 26.6946 204.839 27.9319 202.943 28.7268C200.903 29.5762 198.716 30 196.512 29.9731C193.791 30.003 191.107 29.3322 188.71 28.0233Z"
                      fill="#24231F"></path>
                <path d="M242.806 0.460938V29.5412H237.529V17.0782H222.689V29.5412H217.413V0.460938H222.689V12.4683H237.47V0.460938H242.806Z"
                      fill="#24231F"></path>
                <path d="M252.33 0.460938H257.606V29.5412H252.33V0.460938Z"
                      fill="#24231F"></path>
                <path d="M269.847 28.0233C267.572 26.7837 265.679 24.9283 264.379 22.6628C263.071 20.3192 262.384 17.6713 262.384 14.9773C262.384 12.2834 263.071 9.63543 264.379 7.2918C265.694 5.03111 267.591 3.17776 269.867 1.93138C272.271 0.626152 274.963 -0.0377807 277.689 0.00166007C279.887 -0.0265278 282.067 0.397403 284.1 1.24795C285.988 2.04675 287.666 3.28362 289 4.85955L285.57 8.14278C284.614 7.05 283.436 6.18011 282.118 5.59262C280.8 5.00513 279.372 4.71389 277.933 4.7389C276.093 4.70579 274.275 5.15585 272.656 6.04551C271.133 6.88748 269.873 8.14841 269.022 9.6839C268.161 11.3038 267.71 13.1161 267.71 14.9572C267.71 16.7984 268.161 18.6106 269.022 20.2306C269.873 21.7661 271.133 23.027 272.656 23.869C274.272 24.7703 276.09 25.2319 277.933 25.2091C279.376 25.2327 280.806 24.9368 282.125 24.342C283.444 23.7473 284.62 22.8679 285.57 21.765L289 25.1152C287.662 26.6946 285.976 27.9319 284.08 28.7268C282.04 29.5762 279.853 30 277.649 29.9731C274.928 30.0039 272.243 29.333 269.847 28.0233Z"
                      fill="#24231F"></path>
              </svg>
              <div class="list_tab_text">
                <p>
                  At BloomChic, we believe all women deserve to look and feel absolutely beautiful. Our products are Made for Your Curves, and not the other way around. Learn more about our core values of Accessibility, Diversity, and Empowerment.
                </p>
              </div>
              <div class="list_tab_butten">Learn Nore</div>
            </div>
          </div>
          <!-- col-sm-offset-2 -->

        </div>

      </div>
    </div>
    <div class="page-width t_container">
      <div class="size_container">
        <div class="select_container">
          <div class="select_tab">
            <svg width="36"
                 height="36"
                 viewBox="0 0 36 36"
                 fill="none"
                 xmlns="http://www.w3.org/2000/svg">
              <path d="M10.3518 23.7266V15.1179H7.2214V23.7266H10.3518ZM26.004 15.1179V25.5371H29.1344V15.1179H26.004ZM22.3363 29.2048H16.6127V32.3353H22.3363V29.2048ZM26.004 25.5371C26.004 27.5627 24.3619 29.2048 22.3363 29.2048V32.3353C26.0908 32.3353 29.1344 29.2916 29.1344 25.5371H26.004ZM18.1779 7.29178C22.5002 7.29178 26.004 10.7956 26.004 15.1179H29.1344C29.1344 9.06675 24.229 4.16135 18.1779 4.16135V7.29178ZM10.3518 15.1179C10.3518 10.7956 13.8557 7.29178 18.1779 7.29178V4.16135C12.1268 4.16135 7.2214 9.06675 7.2214 15.1179H10.3518Z"
                    fill="#8F7D65"></path>
              <rect x="4.09106"
                    y="15.1172"
                    width="4.69565"
                    height="7.82609"
                    stroke="#8F7D65"
                    stroke-width="3.13043"></rect>
              <rect x="27.5693"
                    y="15.1172"
                    width="4.69565"
                    height="7.82609"
                    stroke="#8F7D65"
                    stroke-width="3.13043"></rect>
              <path d="M13.4824 30.7695H18.9607"
                    stroke="#8F7D65"
                    stroke-width="4.69565"></path>
            </svg>
            <div class="svg_name">Contact Us</div>
          </div>
          <div class="select_tab">
            <svg width="40"
                 height="40"
                 viewBox="0 0 40 40"
                 fill="none"
                 xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_3604_11499)">
                <path d="M14.1514 5.35547L16.0371 7.34421L12.1074 11.488L16.0371 15.6328L14.1514 17.6215L8.33643 11.4885L14.1514 5.35547Z"
                      fill="#8F7D65"></path>
                <path d="M24.4443 10.1562C28.1262 10.1562 31.111 13.3042 31.111 17.1875C31.111 20.9946 28.2421 24.095 24.6601 24.2151L24.4443 24.2188H11.5554V21.4062H24.4443C26.6534 21.4062 28.4443 19.5175 28.4443 17.1875C28.4443 14.9241 26.7543 13.077 24.6326 12.9733L24.4443 12.9688H11.5554V10.1562H24.4443Z"
                      fill="#8F7D65"></path>
                <path d="M8.56177 35V32.1824H11.7316V30.666H8.56177V29.0266H12.0974V27.5H6.6665V35H8.56177ZM15.0456 35V32.459H16.1206L17.9162 34.9898L20.1661 35L17.9827 32.0902C18.4408 31.8784 18.7917 31.5915 19.0356 31.2295C19.2794 30.8675 19.4013 30.4508 19.4013 29.9795C19.4013 29.4877 19.2683 29.054 19.0023 28.6783C18.7363 28.3026 18.354 28.0123 17.8552 27.8074C17.3564 27.6025 16.7709 27.5 16.0985 27.5H13.1503V35H15.0456ZM15.8768 30.9939H15.0456V28.9754H15.8768C16.8965 28.9754 17.4063 29.3101 17.4063 29.9795C17.4063 30.3484 17.2567 30.6096 16.9574 30.7633C16.6582 30.917 16.298 30.9939 15.8768 30.9939ZM26.528 35V33.4836H22.8594V31.9775H26.0292V30.4816H22.8594V29.0061H26.395V27.5H20.9641V35H26.528ZM33.3332 35V33.4836H29.6646V31.9775H32.8344V30.4816H29.6646V29.0061H33.2002V27.5H27.7693V35H33.3332Z"
                      fill="#8F7D65"></path>
              </g>
              <defs>
                <clipPath id="clip0_3604_11499">
                  <rect width="26.6667"
                        height="30"
                        fill="white"
                        transform="translate(6.66675 5)"></rect>
                </clipPath>
              </defs>
            </svg>
            <div class="svg_name">Free Returns</div>
          </div>
          <div class="select_tab">
            <svg width="40"
                 height="40"
                 viewBox="0 0 40 40"
                 fill="none"
                 xmlns="http://www.w3.org/2000/svg">
              <path d="M34.5431 9.78286L20.8335 5.37109L7.12378 9.78286V17.8177C7.12724 23.7856 10.6953 29.3068 16.5277 32.435L20.8335 34.7521L25.1409 32.434C30.9716 29.3068 34.5397 23.7856 34.5431 17.8184V9.78286ZM20.8335 8.16122L31.8012 11.6906V17.8177L31.7973 18.1221C31.6748 22.9853 28.6907 27.502 23.8076 30.121L20.8335 31.7209L17.8611 30.1219L17.5582 29.9557C12.753 27.2575 9.86854 22.6946 9.86571 17.8169V11.6906L20.8335 8.16122Z"
                    fill="#8F7D65"></path>
              <path d="M24.3291 14.8125L26.5357 16.3838L20.255 24.6039L15.3867 20.4665L17.1985 18.4797L19.8226 20.71L24.3291 14.8125Z"
                    fill="#8F7D65"></path>
            </svg>
            <div class="svg_name">Secure Payment</div>
          </div>
          <div class="select_tab">
            <svg width="40"
                 height="40"
                 viewBox="0 0 40 40"
                 fill="none"
                 xmlns="http://www.w3.org/2000/svg">
              <path d="M31.5811 11.4414L36.6666 18.2748V28.5585L31.4412 28.5592C31.6141 28.2212 31.7117 27.8382 31.7117 27.4324C31.7117 26.8334 31.4991 26.2841 31.1453 25.8557L33.9639 25.8558V19.1702L30.2234 14.1441H24.9549V25.8558L27.3231 25.8557C26.9693 26.2841 26.7567 26.8334 26.7567 27.4324C26.7567 27.8382 26.8543 28.2212 27.0272 28.5592L22.2522 28.5585V11.4414H31.5811Z"
                    fill="#8F7D65"></path>
              <path d="M9.63948 27.432C9.63948 27.8378 9.73704 28.2208 9.90997 28.5588L6.48633 28.5581V25.8554L10.2059 25.8553C9.85205 26.2837 9.63948 26.833 9.63948 27.432ZM24.9548 8.73828V28.5581L14.3239 28.5588C14.4969 28.2208 14.5944 27.8378 14.5944 27.432C14.5944 26.833 14.3819 26.2837 14.0281 25.8553L22.2521 25.8554V11.441H6.48633V8.73828H24.9548Z"
                    fill="#8F7D65"></path>
              <path d="M12.1172 23.6016C10.0026 23.6016 8.28833 25.3158 8.28833 27.4304C8.28833 29.545 10.0026 31.2592 12.1172 31.2592C14.2318 31.2592 15.946 29.545 15.946 27.4304C15.946 25.3158 14.2318 23.6016 12.1172 23.6016ZM12.1172 26.3043C12.7391 26.3043 13.2433 26.8084 13.2433 27.4304C13.2433 28.0523 12.7391 28.5565 12.1172 28.5565C11.4952 28.5565 10.991 28.0523 10.991 27.4304C10.991 26.8084 11.4952 26.3043 12.1172 26.3043Z"
                    fill="#8F7D65"></path>
              <path d="M29.2341 23.6016C27.1195 23.6016 25.4053 25.3158 25.4053 27.4304C25.4053 29.545 27.1195 31.2592 29.2341 31.2592C31.3487 31.2592 33.0629 29.545 33.0629 27.4304C33.0629 25.3158 31.3487 23.6016 29.2341 23.6016ZM29.2341 26.3043C29.856 26.3043 30.3602 26.8084 30.3602 27.4304C30.3602 28.0523 29.856 28.5565 29.2341 28.5565C28.6122 28.5565 28.108 28.0523 28.108 27.4304C28.108 26.8084 28.6122 26.3043 29.2341 26.3043Z"
                    fill="#8F7D65"></path>
              <path d="M11.4414 14.1445V16.8472H3.33325V14.1445H11.4414Z"
                    fill="#8F7D65"></path>
              <path d="M11.4413 18.6484V21.3511H5.13501V18.6484H11.4413Z"
                    fill="#8F7D65"></path>
            </svg>
            <div class="svg_name">Shipping Info</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import banner from '../../components/banner.vue'
import goodsCon from '../../components/goodsCon.vue'
import productDetails from '../../components/details.vue'
import product from '../../utils/product'
import top from '../../components/top'
import $ from 'jquery'
export default {
  name: 'index',
  components: {
    banner,
    goodsCon,
    productDetails,
    top,
  },
  data () {
    return {
      dialogVisible: false,
      id: '',
      tpArr: [],
      mouseId: 0,
      leaveId: 0,
      goodsTitle1: 'NEW ARRIVALS',
      goodsTitle2: 'Featured',
      goodsTitle3: 'Earbud Headphones',
      goodsTitle4: 'Latest',
      goodsClass1: 'col-md-3 col-lg-3',
      goodsClass2: 'col-md-3 col-lg-3',
      goodsClass3: 'swiper_container3',
      goodsClass4: 'swiper_container4',
      goodsView1: 5,
      goodsOption1: [],
      goodsOption2: [],
      goodsOption3: [],
      goodsOption4: [],
      options: [],
      productItems: []
    }
  },
  methods: {
    getProductId (e) {
      this.id = e
      this.dialogVisible = true
      console.log('eeee', e)
    },
    tabMouseIn (id) {
      this.mouseId = id
    },

    mouse_in () {
      this.$refs.trans_t.classList.add('t_mi_item')
      console.log('ref', this.$refs.trans_t.className)
    },
    initSwiper () {
      this.$nextTick(() => {
        new Swiper('.swiper-container2', {
          loop: true,

          speed: 300,
          noSwiping: true,
          noSwipingClass: 'stop-swiping',
          nextButton: '.swiper-button-next',
          prevButton: '.swiper-button-prev',

        })
      })

    },
    toDetails (e) {
      this.$router.push('/details?id=' + e)
    },
    toCategory (e) {
      this.$router.push('/category?path=' + e)
    }
  },
  mounted () {
    this.initSwiper();
    $('.product-slide-leftbtn').click(function () {
      let ispeed = $('.blc-scrollbar').scrollLeft()
      if (ispeed == 0) {
        return
      } else {
        $('.blc-scrollbar').animate({ scrollLeft: 0 }, 400)
        $('.blc-scrollbar').scrollLeft(ispeed_l / 2)
        let timer = setInterval(() => {
          let ispeed_l = $('.blc-scrollbar').scrollLeft()
          console.log('ispeed_l', ispeed_l,)
          $('.blc-scrollbar').scrollLeft(ispeed_l / 2)
          if (ispeed_l <= 0) {
            clearInterval(timer);
          }
        }, 50)
      }
    })
    $('.product-slide-rightbtn').click(function () {
      $('.blc-scrollbar').animate({ scrollLeft: $('.blc-scrollbar').outerWidth() }, 400)

    })
  },
  created () {
    this.productItems = product.data.slice(0, 10)
  }
}
</script>
<style lang='scss' scoped>
.index {
  .t_container {
    img {
      &:hover {
        opacity: 0.9;
      }
    }
    width: 100%;
    margin-top: 48px;
    .t_title {
      font-size: 32px;
      color: #333;
      margin-bottom: 32px;
      margin-top: 8px;
      font-weight: 600;
      text-align: left;
    }
    .size_container {
      width: 100%;
      .size_box {
        > img {
          padding-bottom: 22px;
        }
      }
      .category_list {
        margin: 0 -15px;
        > img {
          padding-bottom: 22px;
        }
        .category_tab {
          > img {
            &:hover {
              transform: scale(1.2, 1.2);
              transition-duration: 0.3s;
              transition-timing-function: ease;
              transition-delay: 0s;
            }
            transform: scale(1, 1);
            transition-duration: 0.3s;
            transition-timing-function: ease;
            transition-delay: 0s;
          }
          .category_title {
            margin-top: 20px;
          }
        }
      }

      .about_list {
        height: auto;
        background: #f6f5f3;
        .col-sm-6 {
          padding: 0;
        }
        .lsit_tab_msg {
          height: 100%;
          .list_tab_container {
            padding: 100px 64px 60px;
            text-align: left;
            > svg {
              width: 289px !important;
              height: 30px !important;
              margin-bottom: 12px;
            }
            .list_tab_text {
              margin-bottom: 15px;
            }
            .list_tab_butten {
              line-height: 1.2;
              background-color: #8f7d65;
              margin-top: 8px;
              color: #fff;
              padding: 0.5em 0.92em;
              font-size: 1.34em;
              font-weight: 600;
              border-radius: 4px;
              display: inline-block;
              margin-top: 32px;
              cursor: pointer;
              &:hover {
                background: #9a8973;
                color: #74726d;
              }
            }
          }
        }
      }
      .select_container {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        .select_tab {
          padding: 0 32px;
          cursor: pointer;
          margin: 50px 0;
        }
      }
    }
  }
  @media only screen and (max-width: 768px) {
    .about_list {
      margin: 0 -16px;
    }
    .list_tab_container {
      padding: 32px 32px 64px !important;
    }
    .select_tab {
      // padding: 0 32px;
      cursor: pointer;
      width: 50%;
      margin: 0 0 32px !important;
    }
  }
  img {
    vertical-align: middle;
    border: none;
    max-width: 100%;
  }
}
</style>
<style scoped>
/* @import "../../style/common.css"; */
div[data-section-id="1644894213e36fd064"]::after {
  margin-bottom: -15px;
  display: block;
  content: "";
  clear: both;
}

div[data-section-id="1644894213e36fd064"] .section-header {
  margin-top: px;
  margin-bottom: px;
}

@media only screen and (min-width: 768px) {
  div[data-section-id="1644894213e36fd064"] .section-header {
    margin-top: px;
    margin-bottom: px;
  }
}
div.section_title[id="1644894213e36fd064"] {
  overflow: hidden;
  clear: both;
  position: relative;
  font-size: 30px;
  font-weight: 600;
  color: #000000;
  text-align: left;
  margin-top: 8px;
  margin-bottom: 32px;
  padding-left: 0px;
  padding-right: 0px;
  line-height: 1.2;
}

div.section_title[id="1644894213e36fd064"] > .section_title__more {
  font-size: 14px;
  font-weight: 500;
  color: #666666;
}

@media only screen and (max-width: 768px) {
  div.section_title[id="1644894213e36fd064"] {
    font-size: 20px;
    margin-top: 24px;
    margin-bottom: 20px;
    padding-left: 0px;
    padding-right: 0px;
  }

  div.section_title[id="1644894213e36fd064"] > .section_title__more {
    font-size: 14px;
  }
}
.grid-product-new-tag {
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  height: 16px;
  width: 32px;
  background-color: #000;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 9px;
  line-height: normal;
}
.grid-product__colors--7407981527210 {
  display: none !important;
}
.grid-product__colors--7407995912362 {
  display: none !important;
}
.grid-product__colors--7407982936234 {
  display: none !important;
}
.grid-product__colors--7407720464554 {
  display: none !important;
}
.grid-product__colors--7408044605610 {
  display: none !important;
}
.grid-product__colors--7407721709738 {
  display: none !important;
}
.grid-product__colors--7407982379178 {
  display: none !important;
}
.grid-product__colors--7407679373482 {
  display: none !important;
}
.grid-product__colors--7407959638186 {
  display: none !important;
}
.grid-product__colors--7407983657130 {
  display: none !important;
}
.grid-product__colors--7407734161578 {
  display: none !important;
}
</style>