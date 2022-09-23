<template>
  <div class="check_out">

    <div data-template="checkout">
      <a href="#main-header"
         class="skip-to-content">
        Skip to content
      </a>
      <!-- log -->
      <header class="banner"
              data-header=""
              role="banner"
              aria-hidden="false">
        <div class="wrap">

          <a class="logo logo--left"
             href="https://bloomchic.com/"><img alt="BloomChic"
                 class="logo__image logo__image--medium"
                 src="//cdn.shopify.com/s/files/1/0510/7171/3450/files/Lark20210702-215406.png?43629"></a>

          <h1 class="visually-hidden">
            Information
          </h1>

        </div>
      </header>

      <aside role="complementary">
        <button class="order-summary-toggle shown-if-js order-summary-toggle--hide"
                aria-expanded="true"
                aria-controls="order-summary"
                data-drawer-toggle="[data-order-summary]"
                aria-hidden="false">
          <span class="wrap">
            <span class="order-summary-toggle__inner">
              <span class="order-summary-toggle__icon-wrapper">
                <svg width="20"
                     height="19"
                     xmlns="http://www.w3.org/2000/svg"
                     class="order-summary-toggle__icon">
                  <path d="M17.178 13.088H5.453c-.454 0-.91-.364-.91-.818L3.727 1.818H0V0h4.544c.455 0 .91.364.91.818l.09 1.272h13.45c.274 0 .547.09.73.364.18.182.27.454.18.727l-1.817 9.18c-.09.455-.455.728-.91.728zM6.27 11.27h10.09l1.454-7.362H5.634l.637 7.362zm.092 7.715c1.004 0 1.818-.813 1.818-1.817s-.814-1.818-1.818-1.818-1.818.814-1.818 1.818.814 1.817 1.818 1.817zm9.18 0c1.004 0 1.817-.813 1.817-1.817s-.814-1.818-1.818-1.818-1.818.814-1.818 1.818.814 1.817 1.818 1.817z"></path>
                </svg>
              </span>
              <span class="order-summary-toggle__text order-summary-toggle__text--hide">
                <span>Show order summary</span>
                <svg width="11"
                     height="6"
                     xmlns="http://www.w3.org/2000/svg"
                     class="order-summary-toggle__dropdown"
                     fill="#000">
                  <path d="M.504 1.813l4.358 3.845.496.438.496-.438 4.642-4.096L9.504.438 4.862 4.534h.992L1.496.69.504 1.812z"></path>
                </svg>
              </span>
              <span class="order-summary-toggle__text order-summary-toggle__text--show">
                <span>Hide order summary</span>
                <svg width="11"
                     height="7"
                     xmlns="http://www.w3.org/2000/svg"
                     class="order-summary-toggle__dropdown"
                     fill="#000">
                  <path d="M6.138.876L5.642.438l-.496.438L.504 4.972l.992 1.124L6.138 2l-.496.436 3.862 3.408.992-1.122L6.138.876z"></path>
                </svg>
              </span>
              <dl class="order-summary-toggle__total-recap total-recap"
                  data-order-summary-section="toggle-total-recap">
                <dt class="visually-hidden"><span>Sale price</span></dt>
                <dd>
                  <span class="order-summary__emphasis total-recap__final-price skeleton-while-loading"
                        data-checkout-payment-due-target="6760">${{goodsCart.price}}</span>
                </dd>
              </dl>
            </span>
          </span>
        </button>
      </aside>

      <div class="content"
           data-content=""
           aria-hidden="false">
        <div class="wrap">
          <div class="main">
            <header class="main__header"
                    role="banner">

              <a class="logo logo--left"
                 href="https://bloomchic.com/"><img alt="BloomChic"
                     class="logo__image logo__image--medium"
                     src="//cdn.shopify.com/s/files/1/0510/7171/3450/files/Lark20210702-215406.png?43629"></a>

              <h1 class="visually-hidden">
                Information
              </h1>

            </header>
            <main class="main__content"
                  role="main">

              <div class="step"
                   data-step="contact_information"
                   data-last-step="false">
                <input type="hidden"
                       name="_method"
                       value="patch"
                       autocomplete="off"><input type="hidden"
                       name="authenticity_token"
                       value="lIVN3mUs6FGiOAgkvlFfSwkpn12YyaJ0AEcBoAP8I8PrsvwS6u6cwmVa3kMXCjBVDVjJkVk8OcrgGmrTiDQf0Q"
                       autocomplete="off">

                <input type="hidden"
                       name="previous_step"
                       id="previous_step"
                       value="contact_information"
                       autocomplete="off">
                <input type="hidden"
                       name="step"
                       value="shipping_method"
                       autocomplete="off">

                <div class="step__sections">

                  <div class="section section--contact-information">
                    <div class="section__header">
                      <div class="layout-flex layout-flex--tight-vertical layout-flex--loose-horizontal layout-flex--wrap">
                        <h2 class="section__title layout-flex__item layout-flex__item--stretch"
                            id="main-header"
                            tabindex="-1">
                          Contact information
                        </h2>

                      </div>
                    </div>
                    <div class="section__content"
                         data-section="customer-information"
                         data-shopify-pay-validate-on-load="true">
                      <div class="fieldset">
                        <div data-shopify-pay-email-flow="true"
                             class="field field--required">

                          <div class="field__input-wrapper"><label class="field__label field__label--visible"
                                   for="checkout_email">Email</label>
                            <input placeholder="Email"
                                   autocapitalize="none"
                                   spellcheck="false"
                                   autocomplete="shipping email"
                                   data-shopify-pay-handle="true"
                                   data-autofocus="true"
                                   data-backup="customer_email"
                                   aria-describedby="checkout-context-step-one"
                                   aria-required="true"
                                   class="field__input"
                                   size="30"
                                   type="email"
                                   name="checkout[email]"
                                   v-model="email"
                                   id="checkout_email">
                          </div>
                        </div>
                      </div>

                      <div class="fieldset-description"
                           data-buyer-accepts-marketing="">
                        <div class="section__content">
                          <div class="checkbox-wrapper">
                            <div class="checkbox__input">
                              <input name="checkout[buyer_accepts_marketing]"
                                     type="hidden"
                                     value="0"
                                     autocomplete="off"><input class="input-checkbox"
                                     data-email-marketing="true"
                                     data-backup="buyer_accepts_marketing"
                                     type="checkbox"
                                     value="1"
                                     checked="checked"
                                     name="checkout[buyer_accepts_marketing]"
                                     id="checkout_buyer_accepts_marketing">
                            </div>
                            <label class="checkbox__label"
                                   for="checkout_buyer_accepts_marketing">
                              Email me with news and offers
                            </label>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="section section--shipping-address"
                       data-shipping-address="">
                    <!-- <div class="section__header">
                      <h2 class="section__title"
                          id="section-delivery-title">
                        Shipping address
                      </h2>
                    </div> -->

                    <!-- <div class="section__content">
                      <div class="fieldset">
                        <div class="address-fields"
                             data-address-fields="">
                          <input class="visually-hidden"
                                 autocomplete="shipping given-name"
                                 tabindex="-1"
                                 aria-hidden="true"
                                 aria-label="no-label"
                                 data-autocomplete-field="first_name"
                                 data-honeypot="true"
                                 size="30"
                                 type="text"
                                 name="checkout[shipping_address][first_name]">
                          <input class="visually-hidden"
                                 autocomplete="shipping family-name"
                                 tabindex="-1"
                                 aria-hidden="true"
                                 aria-label="no-label"
                                 data-autocomplete-field="last_name"
                                 data-honeypot="true"
                                 aria-required="true"
                                 size="30"
                                 type="text"
                                 name="checkout[shipping_address][last_name]">

                          <input class="visually-hidden"
                                 autocomplete="shipping address-line1"
                                 tabindex="-1"
                                 aria-hidden="true"
                                 aria-label="no-label"
                                 data-autocomplete-field="address1"
                                 data-honeypot="true"
                                 aria-required="true"
                                 size="30"
                                 type="text"
                                 name="checkout[shipping_address][address1]">
                          <input class="visually-hidden"
                                 autocomplete="shipping address-line2"
                                 tabindex="-1"
                                 aria-hidden="true"
                                 aria-label="no-label"
                                 data-autocomplete-field="address2"
                                 data-honeypot="true"
                                 size="30"
                                 type="text"
                                 name="checkout[shipping_address][address2]">
                          <input class="visually-hidden"
                                 autocomplete="shipping address-level2"
                                 tabindex="-1"
                                 aria-hidden="true"
                                 aria-label="no-label"
                                 data-autocomplete-field="city"
                                 data-honeypot="true"
                                 aria-required="true"
                                 size="30"
                                 type="text"
                                 name="checkout[shipping_address][city]">
                          <input class="visually-hidden"
                                 autocomplete="shipping country"
                                 tabindex="-1"
                                 aria-hidden="true"
                                 aria-label="no-label"
                                 data-autocomplete-field="country"
                                 data-honeypot="true"
                                 aria-required="true"
                                 size="30"
                                 type="text"
                                 name="checkout[shipping_address][country]">
                          <input class="visually-hidden"
                                 autocomplete="shipping address-level1"
                                 tabindex="-1"
                                 aria-hidden="true"
                                 aria-label="no-label"
                                 data-autocomplete-field="province"
                                 data-honeypot="true"
                                 aria-required="true"
                                 size="30"
                                 type="text"
                                 name="checkout[shipping_address][province]">
                          <input class="visually-hidden"
                                 autocomplete="shipping postal-code"
                                 tabindex="-1"
                                 aria-hidden="true"
                                 aria-label="no-label"
                                 data-autocomplete-field="zip"
                                 data-honeypot="true"
                                 aria-required="true"
                                 size="30"
                                 type="text"
                                 name="checkout[shipping_address][zip]">
                          <input class="visually-hidden"
                                 autocomplete="shipping tel"
                                 tabindex="-1"
                                 aria-hidden="true"
                                 aria-label="no-label"
                                 data-autocomplete-field="phone"
                                 data-honeypot="true"
                                 aria-required="true"
                                 size="30"
                                 type="text"
                                 name="checkout[shipping_address][phone]">

                          <div class="field field--required field--show-floating-label"
                               data-address-field="country"
                               data-autocomplete-field-container="true">

                            <div class="field__input-wrapper field__input-wrapper--select"><label class="field__label field__label--visible"
                                     for="checkout_shipping_address_country">Country/region</label>
                              <select size="1"
                                      autocomplete="shipping country"
                                      data-backup="country"
                                      class="field__input field__input--select"
                                      aria-required="true"
                                      name="checkout[shipping_address][country]"
                                      id="checkout_shipping_address_country"
                                      placeholder="Country/region"
                                      data-gtm-form-interact-field-id="0">
                                <option value="">United States</option>
                                <option v-for="(item,i) in optionCountry"
                                        :key='i'
                                        :label="item.name"
                                        :value="item.country_id">United States</option>
                              </select>
                              <div class="field__caret">
                                <svg class="icon-svg icon-svg--color-adaptive-lighter icon-svg--size-10 field__caret-svg"
                                     role="presentation"
                                     aria-hidden="true"
                                     focusable="false">
                                  <use xlink:href="#caret-down"></use>
                                </svg>
                              </div>
                            </div>
                          </div>

                          <div class="field field--optional field--half"
                               data-address-field="first_name">

                            <div class="field__input-wrapper"><label class="field__label field__label--visible"
                                     for="checkout_shipping_address_first_name">First name (optional)</label>
                              <input placeholder="First name (optional)"
                                     autocomplete="shipping given-name"
                                     autocorrect="off"
                                     data-backup="first_name"
                                     class="field__input"
                                     size="30"
                                     type="text"
                                     v-model="firstName"
                                     name="checkout[shipping_address][first_name]"
                                     id="checkout_shipping_address_first_name">
                            </div>
                          </div>
                          <div class="field field--required field--half"
                               data-address-field="last_name">

                            <div class="field__input-wrapper"><label class="field__label field__label--visible"
                                     for="checkout_shipping_address_last_name">Last name</label>
                              <input placeholder="Last name"
                                     autocomplete="shipping family-name"
                                     autocorrect="off"
                                     data-backup="last_name"
                                     class="field__input"
                                     aria-required="true"
                                     size="30"
                                     type="text"
                                     v-model=lastName
                                     name="checkout[shipping_address][last_name]"
                                     id="checkout_shipping_address_last_name">
                            </div>
                          </div>
                          <div data-address-field="address1"
                               data-autocomplete-field-container="true"
                               class="field field--required">

                            <div class="field__input-wrapper"><label class="field__label field__label--visible"
                                     for="checkout_shipping_address_address1">Address</label>
                              <input placeholder="Address"
                                     autocomplete="shipping address-line1"
                                     autocorrect="off"
                                     role="combobox"
                                     aria-autocomplete="list"
                                     aria-expanded="false"
                                     aria-required="true"
                                     data-backup="address1"
                                     data-autocomplete-trigger="true"
                                     data-autocomplete-title="Suggestions"
                                     data-autocomplete-single-item="1 item available"
                                     data-autocomplete-close="Close suggestions"
                                     class="field__input"
                                     size="30"
                                     v-model='address1'
                                     type="text"
                                     name="checkout[shipping_address][address1]"
                                     id="checkout_shipping_address_address1"
                                     aria-haspopup="false">

                              <p class="field__additional-info visually-hidden"
                                 data-address-civic-number-warning="">
                                <svg class="icon-svg icon-svg--size-16 field__message__icon"
                                     aria-hidden="true"
                                     focusable="false">
                                  <use xlink:href="#info"></use>
                                </svg>
                                Add a house number if you have one
                              </p>
                            </div>
                          </div>
                          <div data-address-field="address2"
                               data-autocomplete-field-container="true"
                               class="field field--optional">

                            <div class="field__input-wrapper"><label class="field__label field__label--visible"
                                     for="checkout_shipping_address_address2">Apartment, suite, etc. (optional)</label>
                              <input placeholder="Apartment, suite, etc. (optional)"
                                     autocomplete="shipping address-line2"
                                     autocorrect="off"
                                     data-backup="address2"
                                     class="field__input"
                                     size="30"
                                     type="text"
                                     v-model='address2'
                                     name="checkout[shipping_address][address2]"
                                     id="checkout_shipping_address_address2">
                            </div>
                          </div>
                          <div class="field field--requiredfield--show-floating-label field--third"
                               data-address-field="zip"
                               data-autocomplete-field-container="true">

                            <div class="field__input-wrapper"><label class="field__label field__label--visible"
                                     for="checkout_shipping_address_zip">Postal code</label>
                              <input placeholder="Postal code"
                                     autocomplete="shipping postal-code"
                                     autocorrect="off"
                                     data-backup="zip"
                                     data-autocomplete-trigger="true"
                                     data-autocomplete-title="Suggestions"
                                     data-autocomplete-single-item="1 item available"
                                     data-autocomplete-close="Close suggestions"
                                     class="field__input field__input--zip"
                                     aria-required="true"
                                     size="30"
                                     type="text"
                                     v-model=code
                                     name="checkout[shipping_address][zip]"
                                     id="checkout_shipping_address_zip">
                            </div>
                          </div>
                          <div class="field field--required field--show-floating-label field--third"
                               data-address-field="province"
                               data-autocomplete-field-container="true">

                            <div class="field__input-wrapper field__input-wrapper--select"><label class="field__label field__label--visible"
                                     for="checkout_shipping_address_province">State</label>
                              <select placeholder="State"
                                      autocomplete="shipping address-level1"
                                      autocorrect="off"
                                      data-backup="province"
                                      class="field__input field__input--select"
                                      aria-required="true"
                                      name="checkout[shipping_address][province]"
                                      data-gtm-form-interact-field-id="0"
                                      id="checkout_shipping_address_province">
                                <option value=''>State</option>
                                <option v-for="(item,index) in optionRegion"
                                        :key='index'
                                        :label="item.name"
                                        :value="item.name"></option>

                              </select>
                              <div class="field__caret shown-if-js">
                                <svg class="icon-svg icon-svg--color-adaptive-lighter icon-svg--size-10 field__caret-svg"
                                     role="presentation"
                                     aria-hidden="true"
                                     focusable="false">
                                  <use xlink:href="#caret-down"></use>
                                </svg>
                              </div>
                            </div>
                          </div>
                          <div data-address-field="city"
                               data-autocomplete-field-container="true"
                               class="field field--required field--show-floating-label field--third">
                            <div class="field__input-wrapper">
                              <input placeholder="City"
                                     autocomplete="shipping address-level2"
                                     autocorrect="off"
                                     data-backup="city"
                                     class="field__input"
                                     aria-required="true"
                                     size="30"
                                     type="text"
                                     v-model=city
                                     name="checkout[shipping_address][city]"
                                     id="checkout_shipping_address_city">
                            </div>
                          </div>
                          <div data-address-field="phone"
                               class="field field--required">
                            <div class="field__input-wrapper field__input-wrapper--icon-right"><label class="field__label field__label--visible"
                                     for="checkout_shipping_address_phone">Phone</label>
                              <input placeholder="Phone"
                                     autocomplete="shipping tel"
                                     autocorrect="off"
                                     data-backup="phone"
                                     data-phone-formatter="true"
                                     data-phone-formatter-country-select="[name='checkout[shipping_address][country]']"
                                     class="field__input field__input--numeric"
                                     aria-required="true"
                                     size="30"
                                     type="tel"
                                     v-model="phone"
                                     name="checkout[shipping_address][phone]"
                                     id="checkout_shipping_address_phone">
                              <div class="field__icon">
                                <div data-tooltip="true"
                                     id="phone_tooltip"
                                     class="tooltip-container"><button type="button"
                                          class="tooltip-control"
                                          data-tooltip-control="true"
                                          aria-label="More information"
                                          aria-describedby="tooltip-for-phone"
                                          aria-controls="tooltip-for-phone"
                                          aria-pressed="false"
                                          placeholder="Phone"><svg class="icon-svg icon-svg--color-adaptive-lighter icon-svg--size-16 icon-svg--block icon-svg--center"
                                         role="presentation"
                                         aria-hidden="true"
                                         focusable="false">
                                      <use xlink:href="#question"></use>
                                    </svg></button><span class="tooltip"
                                        role="tooltip"
                                        id="tooltip-for-phone">In case we need to contact you about your order</span></div>
                              </div>
                            </div>
                          </div>

                        </div>

                      </div>

                    </div> -->
                  </div>

                  <div class="section section--shipping-address"
                       data-shipping-address="">
                    <div class="section__header">
                      <h2 class="section__title"
                          id="section-delivery-title">
                        Credit Card
                      </h2>
                    </div>

                    <div class="section__content">
                      <div class="fieldset">
                        <div class="address-fields"
                             data-address-fields="">
                          <div class="field field--optional "
                               data-address-field="CardNumber">

                            <div class="field__input-wrapper"><label class="field__label field__label--visible"
                                     for="checkout_shipping_address_CardNumber">CardNumber</label>
                              <input placeholder="CardNumber"
                                     autocomplete="shipping given-name"
                                     autocorrect="off"
                                     data-backup="CardNumber"
                                     class="field__input"
                                     size="30"
                                     type="text"
                                     v-model="number"
                                     name="checkout[shipping_address][CardNumber]"
                                     id="checkout_shipping_address_CardNumber">
                            </div>
                          </div>
                          <div class="field field--optional field--half"
                               data-address-field="first_name">

                            <div class="field__input-wrapper"><label class="field__label field__label--visible"
                                     for="checkout_shipping_address_first_name">First name (optional)</label>
                              <input placeholder="First name (optional)"
                                     autocomplete="shipping given-name"
                                     autocorrect="off"
                                     data-backup="first_name"
                                     class="field__input"
                                     size="30"
                                     type="text"
                                     v-model="firstName"
                                     name="checkout[shipping_address][first_name]"
                                     id="checkout_shipping_address_first_name">
                            </div>
                          </div>
                          <div class="field field--required field--half"
                               data-address-field="last_name">

                            <div class="field__input-wrapper"><label class="field__label field__label--visible"
                                     for="checkout_shipping_address_last_name">Last name</label>
                              <input placeholder="Last name"
                                     autocomplete="shipping family-name"
                                     autocorrect="off"
                                     data-backup="last_name"
                                     class="field__input"
                                     aria-required="true"
                                     size="30"
                                     type="text"
                                     v-model=lastName
                                     name="checkout[shipping_address][last_name]"
                                     id="checkout_shipping_address_last_name">
                            </div>
                          </div>
                          <!-- <div class="field field--required "
                               data-address-field="CardHolderr">

                            <div class="field__input-wrapper"><label class="field__label field__label--visible"
                                     for="checkout_shipping_address_CardHolderr">CardHolderr</label>
                              <input placeholder="CardHolderr"
                                     autocomplete="shipping family-name"
                                     autocorrect="off"
                                     data-backup="CardHolderr"
                                     class="field__input"
                                     aria-required="true"
                                     size="30"
                                     type="text"
                                     v-model='cardholderr'
                                     name="checkout[shipping_address][CardHolderr]"
                                     id="checkout_shipping_address_CardHolderr">
                            </div>
                          </div> -->
                          <div data-address-field="address1"
                               data-autocomplete-field-container="true"
                               class="field field--required">

                            <div class="field__input-wrapper"><label class="field__label field__label--visible"
                                     for="checkout_shipping_address_CVC">CVC/CVV2</label>
                              <input placeholder="CVC/CVV2"
                                     class="field__input"
                                     size="30"
                                     v-model='cvc'
                                     id="checkout_shipping_address_CVC">

                            </div>
                          </div>

                          <div class="field field--required field--show-floating-label field--half"
                               data-address-field="month"
                               data-autocomplete-field-container="true">

                            <div class="field__input-wrapper field__input-wrapper--select"><label class="field__label field__label--visible"
                                     for="checkout_shipping_address_month">Expiration Date</label>
                              <select placeholder="State"
                                      autocomplete="shipping address-level1"
                                      autocorrect="off"
                                      data-backup="province"
                                      class="field__input field__input--select"
                                      aria-required="true"
                                      name="checkout[shipping_address][month]"
                                      data-gtm-form-interact-field-id="0"
                                      id="checkout_shipping_address_month">

                                <option v-for="(item,index) in options1"
                                        :key='index'
                                        :label="item.label"
                                        :value="item.label"></option>

                              </select>
                              <div class="field__caret shown-if-js">
                                <svg class="icon-svg icon-svg--color-adaptive-lighter icon-svg--size-10 field__caret-svg"
                                     role="presentation"
                                     aria-hidden="true"
                                     focusable="false">
                                  <use xlink:href="#caret-down"></use>
                                </svg>
                              </div>
                            </div>
                          </div>
                          <div class="field field--required field--show-floating-label field--half"
                               data-address-field="year"
                               data-autocomplete-field-container="true">
                            <div class="field__input-wrapper field__input-wrapper--select"><label class="field__label field__label--visible"
                                     for="checkout_shipping_address_year">Expiration Date</label>
                              <select placeholder="State"
                                      autocomplete="shipping address-level1"
                                      autocorrect="off"
                                      data-backup="year"
                                      class="field__input field__input--select"
                                      aria-required="true"
                                      name="checkout[shipping_address][year]"
                                      data-gtm-form-interact-field-id="0"
                                      id="checkout_shipping_address_year">

                                <option v-for="(item,index) in options2"
                                        :key='index'
                                        :label="item.label"
                                        :value="item.label"></option>
                              </select>
                              <div class="field__caret shown-if-js">
                                <svg class="icon-svg icon-svg--color-adaptive-lighter icon-svg--size-10 field__caret-svg"
                                     role="presentation"
                                     aria-hidden="true"
                                     focusable="false">
                                  <use xlink:href="#caret-down"></use>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="step__footer"
                     data-step-footer="">

                  <button name="button"
                          type="submit"
                          id="continue_button"
                          class="step__footer__continue-btn btn"
                          @click="payment"
                          aria-busy="false"><span class="btn__content"
                          data-continue-button-content="true">Continue to shipping</span><svg class="icon-svg icon-svg--size-18 btn__spinner icon-svg--spinner-button"
                         aria-hidden="true"
                         focusable="false">
                      <use xlink:href="#spinner-button"></use>
                    </svg></button>
                  <a class="step__footer__previous-link"
                     href=""><svg focusable="false"
                         aria-hidden="true"
                         class="icon-svg icon-svg--color-accent icon-svg--size-10 previous-link__icon"
                         role="img"
                         xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 10 10">
                      <path d="M8 1L7 0 3 4 2 5l1 1 4 4 1-1-4-4"></path>
                    </svg><span class="step__footer__previous-link-content">Return to cart</span></a>
                </div>

              </div>

              <div class="hidden">
                <span class="visually-hidden"
                      id="forwarding-external-new-window-message">
                  Opens external website in a new window.
                </span>

                <span class="visually-hidden"
                      id="forwarding-new-window-message">
                  Opens in a new window.
                </span>

                <span class="visually-hidden"
                      id="forwarding-external-message">
                  Opens external website.
                </span>

                <span class="visually-hidden"
                      id="checkout-context-step-one">
                  Customer information - BloomChic - Checkout
                </span>
              </div>

            </main>
            <footer class="main__footer"
                    role="contentinfo">
              <ul class="policy-list"
                  role="list">
                <li class="policy-list__item ">
                  <a aria-haspopup="dialog"
                     data-modal="policy-refund-policy"
                     data-title-text="Refund policy"
                     data-close-text="Close"
                     data-iframe="true"
                     href="/51071713450/policies/refund-policy.html?locale=en">Refund policy</a>
                </li>
                <li class="policy-list__item ">
                  <a aria-haspopup="dialog"
                     data-modal="policy-privacy-policy"
                     data-title-text="Privacy policy"
                     data-close-text="Close"
                     data-iframe="true"
                     href="/51071713450/policies/privacy-policy.html?locale=en">Privacy policy</a>
                </li>
                <li class="policy-list__item ">
                  <a aria-haspopup="dialog"
                     data-modal="policy-terms-of-service"
                     data-title-text="Terms of service"
                     data-close-text="Close"
                     data-iframe="true"
                     href="/51071713450/policies/terms-of-service.html?locale=en">Terms of service</a>
                </li>
              </ul>

            </footer>
          </div>
          <aside class="sidebar"
                 role="complementary">
            <div class="sidebar__header">

              <a class="logo logo--left"
                 href="https://bloomchic.com/"><img alt="BloomChic"
                     class="logo__image logo__image--medium"
                     src="//cdn.shopify.com/s/files/1/0510/7171/3450/files/Lark20210702-215406.png?43629"></a>

              <h1 class="visually-hidden">
                Information
              </h1>

            </div>
            <div class="sidebar__content">
              <div id="order-summary"
                   class="order-summary order-summary--is-collapsed"
                   data-order-summary="">
                <h2 class="visually-hidden-if-js">Order summary</h2>

                <div class="order-summary__sections">
                  <div class="order-summary__section order-summary__section--product-list">
                    <div class="order-summary__section__content">
                      <table class="product-table"
                             style="background:#fafafa;">
                        <caption class="visually-hidden">Shopping cart</caption>
                        <thead class="product-table__header">
                          <tr>
                            <th scope="col"><span class="visually-hidden">Product image</span></th>
                            <th scope="col"><span class="visually-hidden">Description</span></th>
                            <th scope="col"><span class="visually-hidden">Quantity</span></th>
                            <th scope="col"><span class="visually-hidden">Price</span></th>
                          </tr>
                        </thead>
                        <tbody data-order-summary-section="line-items">
                          <tr class="product"
                              data-product-id="7413571715242"
                              data-variant-id="43091638321322"
                              data-product-type="Dresses"
                              v-for="(item,index) in goodsCart"
                              :key='index'
                              data-customer-ready-visible="">
                            <td class="product__image">
                              <div class="product-thumbnail ">
                                <div class="product-thumbnail__wrapper">
                                  <img alt="Plain Pocket Flutter Round Neck Modal Maxi Dress - Burgundy / 12/L"
                                       class="product-thumbnail__image"
                                       :src="item.image.src">
                                </div>
                                <span class="product-thumbnail__quantity"
                                      aria-hidden="true">{{item.count}}</span>
                              </div>

                            </td>
                            <th class="product__description"
                                scope="row">
                              <span class="product__description__name order-summary__emphasis">{{item.title}}</span>
                              <span class="product__description__variant order-summary__small-text">{{item.color}}/ {{item.size}}</span>

                            </th>
                            <td class="product__quantity">
                              <span class="visually-hidden">
                                {{item.count}}
                              </span>
                            </td>
                            <td class="product__price">
                              <span class="order-summary__emphasis skeleton-while-loading">${{item.price}}</span>
                            </td>
                          </tr>
                        </tbody>
                      </table>

                      <div class="order-summary__scroll-indicator"
                           aria-hidden="true"
                           tabindex="-1"
                           id="order-summary__scroll-indicator">
                        Scroll for more items
                        <svg aria-hidden="true"
                             focusable="false"
                             class="icon-svg icon-svg--size-12">
                          <use xlink:href="#down-arrow"></use>
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div class="order-summary__section order-summary__section--discount"
                       data-reduction-form="update">
                    <h3 class="visually-hidden">Gift card or discount code</h3>
                    <input type="hidden"
                           name="_method"
                           value="patch"
                           autocomplete="off"><input type="hidden"
                           name="authenticity_token"
                           value="D5CObED5Lvjm8qi33KcxEHrBJs3bdoPmpdqvOEuSWIdwpz-gzztaayGQftB1_F4OfrBwARqDGFhFh8RLwFpklQ"
                           autocomplete="off">
                    <input type="hidden"
                           name="step"
                           value="contact_information"
                           autocomplete="off">
                    <input type="hidden"
                           name="checkout[client_details][browser_width]"
                           value="990"><input type="hidden"
                           name="checkout[client_details][browser_height]"
                           value="927"><input type="hidden"
                           name="checkout[client_details][javascript_enabled]"
                           value="1"><input type="hidden"
                           name="checkout[client_details][color_depth]"
                           value="24"><input type="hidden"
                           name="checkout[client_details][java_enabled]"
                           value="false"><input type="hidden"
                           name="checkout[client_details][browser_tz]"
                           value="-480">

                    <input type="hidden"
                           name="_method"
                           value="patch"
                           autocomplete="off"><input type="hidden"
                           name="authenticity_token"
                           value="JN_qCHTzPYOCsoFNOWiTldWumWModh4ttV93fADsWNFb6FvE-zFJEEXQVyqQM_yL0d_Pr-mDhZNVAhwPiyRkww"
                           autocomplete="off">
                    <input type="hidden"
                           name="step"
                           value="contact_information"
                           autocomplete="off">
                    <div class="fieldset">
                      <div class="field">

                        <div class="field__input-btn-wrapper">
                          <div class="field__input-wrapper"><label class="field__label field__label--visible"
                                   for="checkout_reduction_code">Gift card or discount code</label>
                            <input placeholder="Gift card or discount code"
                                   class="field__input bind"
                                   id="checkout_reduction_code"
                                   data-discount-field="true"
                                   autocomplete="off"
                                   aria-required="true"
                                   size="30"
                                   type="text"
                                   name="checkout[reduction_code]">
                          </div>

                          <button name="checkout[submit]"
                                  type="submit"
                                  id="checkout_submit"
                                  class="field__input-btn btn btn--disabled"
                                  aria-busy="false"
                                  disabled="disabled">
                            <span class="btn__content visually-hidden-on-mobile"
                                  aria-hidden="true">
                              Apply
                            </span>
                            <span class="visually-hidden">
                              Apply Discount Code
                            </span>
                            <svg class="icon-svg icon-svg--size-16 btn__icon shown-on-mobile"
                                 aria-hidden="true"
                                 focusable="false">
                              <use xlink:href="#arrow"></use>
                            </svg>
                            <svg class="icon-svg icon-svg--size-18 btn__spinner icon-svg--spinner-button"
                                 aria-hidden="true"
                                 focusable="false">
                              <use xlink:href="#spinner-button"></use>
                            </svg>
                          </button>
                        </div>

                      </div>
                    </div>
                    <input type="hidden"
                           name="checkout[client_details][browser_width]"
                           value="990"><input type="hidden"
                           name="checkout[client_details][browser_height]"
                           value="927"><input type="hidden"
                           name="checkout[client_details][javascript_enabled]"
                           value="1"><input type="hidden"
                           name="checkout[client_details][color_depth]"
                           value="24"><input type="hidden"
                           name="checkout[client_details][java_enabled]"
                           value="false"><input type="hidden"
                           name="checkout[client_details][browser_tz]"
                           value="-480">

                  </div>

                  <div class="order-summary__section order-summary__section--total-lines"
                       data-order-summary-section="payment-lines">
                    <table class="total-line-table">
                      <caption class="visually-hidden">Cost summary</caption>
                      <thead>
                        <tr>
                          <th scope="col"><span class="visually-hidden">Description</span></th>
                          <th scope="col"><span class="visually-hidden">Price</span></th>
                        </tr>
                      </thead>
                      <tbody class="total-line-table__tbody">
                        <tr class="total-line total-line--subtotal">
                          <th class="total-line__name"
                              scope="row">Subtotal</th>
                          <td class="total-line__price">
                            <span class="order-summary__emphasis skeleton-while-loading"
                                  data-checkout-subtotal-price-target="6760">
                              ${{allTotal}}
                            </span>
                          </td>
                        </tr>

                        <tr class="total-line total-line--shipping">
                          <th class="total-line__name"
                              scope="row">
                            <span>
                              Shipping
                            </span>

                          </th>
                          <td class="total-line__price">
                            <span class="skeleton-while-loading order-summary__small-text"
                                  data-checkout-total-shipping-target="0">
                              Calculated at next step
                            </span>
                          </td>
                        </tr>

                        <tr class="total-line total-line--taxes hidden"
                            data-checkout-taxes="">
                          <th class="total-line__name"
                              scope="row">Taxes (estimated)</th>
                          <td class="total-line__price">
                            <span class="order-summary__emphasis skeleton-while-loading"
                                  data-checkout-total-taxes-target="0">$0.00</span>
                          </td>
                        </tr>

                      </tbody>
                      <tfoot class="total-line-table__footer">
                        <tr class="total-line">
                          <th class="total-line__name payment-due-label"
                              scope="row">
                            <span class="payment-due-label__total">Total</span>
                          </th>
                          <td class="total-line__price payment-due"
                              data-presentment-currency="USD">
                            <span class="payment-due__currency remove-while-loading">USD</span>
                            <span class="payment-due__price skeleton-while-loading--lg"
                                  data-checkout-payment-due-target="6760">
                              ${{allTotal}}
                            </span>
                          </td>
                        </tr>

                      </tfoot>
                    </table>

                  </div>
                </div>
              </div>

              <div class="visually-hidden"
                   data-order-summary-section="accessibility-live-region">
                <div aria-live="polite"
                     aria-atomic="true"
                     role="status">
                  Updated total price:
                  <span data-checkout-payment-due-target="6760">
                    ${{allTotal}}
                  </span>
                </div>
              </div>

              <div id="partial-icon-symbols"
                   class="icon-symbols"
                   data-tg-refresh="partial-icon-symbols"
                   data-tg-refresh-always="true"><svg xmlns="http://www.w3.org/2000/svg">
                  <symbol id="info"><svg xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 24 24">
                      <path d="M12 11h1v7h-2v-5c-.552 0-1-.448-1-1s.448-1 1-1h1zm0 13C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12zm0-2c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zM10.5 7.5c0-.828.666-1.5 1.5-1.5.828 0 1.5.666 1.5 1.5 0 .828-.666 1.5-1.5 1.5-.828 0-1.5-.666-1.5-1.5z"></path>
                    </svg></symbol>
                  <symbol id="caret-down"><svg xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 10 10">
                      <path d="M0 3h10L5 8"
                            fill-rule="nonzero"></path>
                    </svg></symbol>
                  <symbol id="question"><svg xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 16 16">
                      <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm.7 13H6.8v-2h1.9v2zm2.6-7.1c0 1.8-1.3 2.6-2.8 2.8l-.1 1.1H7.3L7 7.5l.1-.1c1.8-.1 2.6-.6 2.6-1.6 0-.8-.6-1.3-1.6-1.3-.9 0-1.6.4-2.3 1.1L4.7 4.5c.8-.9 1.9-1.6 3.4-1.6 1.9.1 3.2 1.2 3.2 3z"></path>
                    </svg></symbol>
                  <symbol id="powered-by-google"><svg xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 116 15">
                      <path fill="#737373"
                            d="M4.025 3.572c1.612 0 2.655 1.283 2.655 3.27 0 1.974-1.05 3.27-2.655 3.27-.902 0-1.63-.393-1.974-1.06h-.09v3.057H.95V3.68h.96v1.054h.094c.404-.726 1.16-1.166 2.02-1.166zm-.24 5.63c1.16 0 1.852-.884 1.852-2.36 0-1.477-.692-2.362-1.846-2.362-1.14 0-1.86.91-1.86 2.362 0 1.447.72 2.36 1.857 2.36zm7.072.91c-1.798 0-2.912-1.243-2.912-3.27 0-2.033 1.114-3.27 2.912-3.27 1.8 0 2.913 1.237 2.913 3.27 0 2.027-1.114 3.27-2.913 3.27zm0-.91c1.196 0 1.87-.866 1.87-2.36 0-1.5-.674-2.362-1.87-2.362-1.195 0-1.87.862-1.87 2.362 0 1.494.675 2.36 1.87 2.36zm12.206-5.518H22.05l-1.244 5.05h-.094L19.3 3.684h-.966l-1.412 5.05h-.094l-1.242-5.05h-1.02L16.336 10h1.02l1.406-4.887h.093L20.268 10h1.025l1.77-6.316zm3.632.78c-1.008 0-1.71.737-1.787 1.856h3.48c-.023-1.12-.69-1.857-1.693-1.857zm1.664 3.9h1.005c-.305 1.085-1.277 1.747-2.66 1.747-1.752 0-2.848-1.262-2.848-3.26 0-1.987 1.113-3.276 2.847-3.276 1.705 0 2.742 1.213 2.742 3.176v.386h-4.542v.047c.053 1.248.75 2.04 1.822 2.04.815 0 1.366-.3 1.63-.857zM31.03 10h1.01V6.086c0-.89.696-1.535 1.657-1.535.2 0 .563.038.645.06V3.6c-.13-.018-.34-.03-.504-.03-.838 0-1.565.434-1.752 1.05h-.094v-.938h-.96V10zm6.915-5.537c-1.008 0-1.71.738-1.787 1.857h3.48c-.023-1.12-.69-1.857-1.693-1.857zm1.664 3.902h1.005c-.304 1.084-1.277 1.746-2.66 1.746-1.752 0-2.848-1.262-2.848-3.26 0-1.987 1.113-3.276 2.847-3.276 1.705 0 2.742 1.213 2.742 3.176v.386h-4.542v.047c.053 1.248.75 2.04 1.822 2.04.815 0 1.366-.3 1.63-.857zm5.01 1.746c-1.62 0-2.657-1.28-2.657-3.266 0-1.98 1.05-3.27 2.654-3.27.878 0 1.622.416 1.98 1.108h.087V1.177h1.008V10h-.96V8.992h-.094c-.4.703-1.15 1.12-2.02 1.12zm.232-5.63c-1.15 0-1.846.89-1.846 2.364 0 1.476.69 2.36 1.846 2.36 1.148 0 1.857-.9 1.857-2.36 0-1.447-.715-2.362-1.857-2.362zm7.875-3.115h1.024v3.123c.23-.3.507-.53.827-.688.32-.16.668-.238 1.043-.238.78 0 1.416.27 1.9.806.49.537.73 1.33.73 2.376 0 .992-.24 1.817-.72 2.473-.48.656-1.145.984-1.997.984-.476 0-.88-.114-1.207-.344-.195-.137-.404-.356-.627-.657v.8h-.97V1.363zm4.02 7.225c.284-.454.426-1.05.426-1.794 0-.66-.142-1.207-.425-1.64-.283-.434-.7-.65-1.25-.65-.48 0-.9.177-1.264.532-.36.356-.542.942-.542 1.758 0 .59.075 1.068.223 1.435.277.694.795 1.04 1.553 1.04.57 0 .998-.227 1.28-.68zM63.4 3.726h1.167c-.148.402-.478 1.32-.99 2.754-.383 1.077-.703 1.956-.96 2.635-.61 1.602-1.04 2.578-1.29 2.93-.25.35-.68.527-1.29.527-.147 0-.262-.006-.342-.017-.08-.012-.178-.034-.296-.065v-.96c.183.05.316.08.4.093.08.012.152.018.215.018.195 0 .338-.03.43-.094.092-.065.17-.144.232-.237.02-.033.09-.193.21-.48.122-.29.21-.506.264-.646l-2.32-6.457h1.196l1.68 5.11 1.694-5.11zM73.994 5.282V6.87h3.814c-.117.89-.416 1.54-.87 1.998-.557.555-1.427 1.16-2.944 1.16-2.35 0-4.184-1.882-4.184-4.217 0-2.332 1.835-4.215 4.184-4.215 1.264 0 2.192.497 2.873 1.135l1.122-1.117C77.04.697 75.77 0 73.99 0c-3.218 0-5.923 2.606-5.923 5.805 0 3.2 2.705 5.804 5.923 5.804 1.738 0 3.048-.57 4.073-1.628 1.05-1.045 1.382-2.522 1.382-3.71 0-.366-.028-.708-.087-.992h-5.37zm10.222-1.29c-2.082 0-3.78 1.574-3.78 3.748 0 2.154 1.698 3.747 3.78 3.747S87.998 9.9 87.998 7.74c0-2.174-1.7-3.748-3.782-3.748zm0 6.018c-1.14 0-2.127-.935-2.127-2.27 0-1.348.983-2.27 2.124-2.27 1.142 0 2.128.922 2.128 2.27 0 1.335-.986 2.27-2.128 2.27zm18.54-5.18h-.06c-.37-.438-1.083-.838-1.985-.838-1.88 0-3.52 1.632-3.52 3.748 0 2.102 1.64 3.747 3.52 3.747.905 0 1.618-.4 1.988-.852h.06v.523c0 1.432-.773 2.2-2.012 2.2-1.012 0-1.64-.723-1.9-1.336l-1.44.593c.414.994 1.51 2.213 3.34 2.213 1.94 0 3.58-1.135 3.58-3.902v-6.74h-1.57v.645zm-1.9 5.18c-1.144 0-2.013-.968-2.013-2.27 0-1.323.87-2.27 2.01-2.27 1.13 0 2.012.967 2.012 2.282.006 1.31-.882 2.258-2.01 2.258zM92.65 3.992c-2.084 0-3.783 1.574-3.783 3.748 0 2.154 1.7 3.747 3.782 3.747 2.08 0 3.78-1.587 3.78-3.747 0-2.174-1.7-3.748-3.78-3.748zm0 6.018c-1.143 0-2.13-.935-2.13-2.27 0-1.348.987-2.27 2.13-2.27 1.14 0 2.126.922 2.126 2.27 0 1.335-.986 2.27-2.127 2.27zM105.622.155h1.628v11.332h-1.628m6.655-1.477c-.843 0-1.44-.38-1.83-1.135l5.04-2.07-.168-.426c-.314-.84-1.274-2.39-3.227-2.39-1.94 0-3.554 1.516-3.554 3.75 0 2.1 1.595 3.745 3.736 3.745 1.725 0 2.724-1.05 3.14-1.658l-1.285-.852c-.427.62-1.01 1.032-1.854 1.032zm-.117-4.612c.668 0 1.24.342 1.427.826l-3.405 1.4c0-1.574 1.122-2.226 1.978-2.226z"></path>
                    </svg></symbol>
                  <symbol id="close"><svg xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 16 16">
                      <path d="M15.1 2.3L13.7.9 8 6.6 2.3.9.9 2.3 6.6 8 .9 13.7l1.4 1.4L8 9.4l5.7 5.7 1.4-1.4L9.4 8"></path>
                    </svg></symbol>
                  <symbol id="spinner-button"><svg xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 20 20">
                      <path d="M20 10c0 5.523-4.477 10-10 10S0 15.523 0 10 4.477 0 10 0v2c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8h2z"></path>
                    </svg></symbol>
                  <symbol id="chevron-right"><svg xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 10 10">
                      <path d="M2 1l1-1 4 4 1 1-1 1-4 4-1-1 4-4"></path>
                    </svg></symbol>
                  <symbol id="down-arrow"><svg xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 12 12">
                      <path d="M10.817 7.624l-4.375 4.2c-.245.235-.64.235-.884 0l-4.375-4.2c-.244-.234-.244-.614 0-.848.245-.235.64-.235.884 0L5.375 9.95V.6c0-.332.28-.6.625-.6s.625.268.625.6v9.35l3.308-3.174c.122-.117.282-.176.442-.176.16 0 .32.06.442.176.244.234.244.614 0 .848"></path>
                    </svg></symbol>
                  <symbol id="arrow"><svg xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 16 16">
                      <path d="M16 8.1l-8.1 8.1-1.1-1.1L13 8.9H0V7.3h13L6.8 1.1 7.9 0 16 8.1z"></path>
                    </svg></symbol>
                  <symbol id="mobile-phone"><svg xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 24 24">
                      <path d="M5 2.99C5 1.34 6.342 0 8.003 0h7.994C17.655 0 19 1.342 19 2.99v18.02c0 1.65-1.342 2.99-3.003 2.99H8.003C6.345 24 5 22.658 5 21.01V2.99zM7 5c0-.552.456-1 .995-1h8.01c.55 0 .995.445.995 1v14c0 .552-.456 1-.995 1h-8.01C7.445 20 7 19.555 7 19V5zm5 18c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1z"
                            fill-rule="evenodd"></path>
                    </svg></symbol>
                  <symbol id="spinner-small"><svg xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 32 32">
                      <path d="M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0v2C8.268 2 2 8.268 2 16s6.268 14 14 14 14-6.268 14-14h2z"></path>
                    </svg></symbol>
                </svg></div>

            </div>
          </aside>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import top from '../../components/top'

import global from '../../utils/global'
import $ from 'jquery'
import '../../utils/jquery-2.0.3.min.js'
import qs from 'qs'
import md5 from 'js-md5'
export default {
  components: {
    top
  },
  data () {
    return {
      goodsCart: '',
      allTotal: 0,
      total: 0,
      month: '',
      year: '',
      number: '',
      cvc: '',
      mail: '',
      password: '',
      activeName: '1',
      firstName: '',
      lastName: '',
      firstName2: '',
      lastName2: '',
      email: '',
      phone: '',
      fax: '',
      company: '',
      company2: '',
      companyId: '',
      address1: '',
      address2: '',
      city: '',
      code: '',
      country: '',
      countryCode1: '',
      countryCode2: '',
      countryName: '',
      Region: '',
      newAddress1: '',
      newAddress2: '',
      city2: '',
      code2: '',
      country2: '',
      Region2: '',
      addressTextarea: '',
      state: '',
      password2: '',
      confirm: '',
      checked: false,
      checked2: false,
      radioAddress: '1',
      radio: '',
      radio2: '',
      textarea1: '',
      textarea2: '',
      corrency: '',
      cardholderr: '',
      cardShow: false,
      brower: '',
      optionCountry: '',
      optionRegion: [],
      optionCountry2: '',
      optionRegion2: [],
      ip: '',
      currency: '',
      options1: [{
        value: '1',
        label: 'Month'
      }, {
        value: '2',
        label: '01'
      }, {
        value: '3',
        label: '02'
      }, {
        value: '4',
        label: '03'
      }, {
        value: '5',
        label: '04'
      }, {
        value: '6',
        label: '05'
      },
      {
        value: '7',
        label: '06'
      },
      {
        value: '8',
        label: '07'
      },
      {
        value: '9',
        label: '08'
      },
      {
        value: '10',
        label: '09'
      },
      {
        value: '11',
        label: '10'
      }, {
        value: '12',
        label: '11'
      }, {
        value: '13',
        label: '12'
      },
      ],
      options2: [{
        value: '1',
        label: 'Year'
      }, {
        value: '2',
        label: '2021'
      }, {
        value: '3',
        label: '2022'
      }, {
        value: '4',
        label: '2023'
      }, {
        value: '5',
        label: '2024'
      }, {
        value: '6',
        label: '2025'
      },
      {
        value: '7',
        label: '2026'
      },
      {
        value: '8',
        label: '2027'
      },
      {
        value: '9',
        label: '2028'
      },
      {
        value: '10',
        label: '2029'
      },
      {
        value: '11',
        label: '2030'
      }, {
        value: '12',
        label: '2031'
      },
      ],
      options3: [
        {
          value: '1',
          label: 'USD'
        }, {
          value: '2',
          label: 'CNY'
        },
      ],

      isstep1: false,
      isstep2: true,
      isstep3: true,
      isstep4: true,
      isstep5: true,
      isstep6: true,
      isLogin: false,
      name_info: '',
      address_info: '',
      save_flag: false,
      shopmethod_flag: true,
      paymethod: 1
    }
  },
  created () {
    let goodsCart = JSON.parse(sessionStorage.getItem('goodsCart')) || []
    this.goodsCart = goodsCart
    this.getTotal()
    console.log('goodsCart', this.goodsCart)
    this.optionCountry = global.data.country
    let orderNo = 'XL' + new Date()
    let sing = md5(orderNo)
    console.log('sing', sing)


  },
  methods: {
    //保存信息
    payment () {
      let month = this.month
      let year = this.year
      let number = this.number
      let cvc = this.cvc
      let cardholderr = this.cardholderr
      let firstName = this.firstName
      let lastName = this.lastName
      let email = this.email
      let phone = this.phone
      let address1 = this.address1
      let city = this.city
      let code = this.code
      let allTotal = this.allTotal
 
      let orderNo = 'XL' + new Date().getTime()


      if (month && year && number && cvc && lastName && firstName) {
        /*currency:币种
            CNY	人民币
            HKD	港币
            USD	美元
            EUR	欧元
            GBP	英镑
            JPY	日元
            TWD	台币
            AUD	澳元

            参数》》》》》》》》》》》》》》》》》》》》》》》
            cardHold	卡持有人姓名
            cardNo	信用卡卡号
            cardExpireMonth	卡有效期月
            cardExpireYear	卡有效期年
            cardSecurityCode	CVV2
            billFirstName	账单姓
            billLastName	账单名
            billAddress	账单联系地址
            billCity	账单城市
            billState	账单省份/州
            billCountry	账单国家
            billZip	账单所在地邮政编码
            billPhone	账单联系电话
            shipFirstName	收货人名
            shipLastName	收货人姓
            shipAddress	收货详细地址
            shipCity	收货城市
            shipState	收货省份/州
            shipCountry	收货国家
            shipZip	收货邮编
            shipPhone	收货电话
            brower	浏览器标识
            ip	ip地址
            email	邮件地址
            currency	币种
            amount	金额(元)
        */
        let brower = this.brower
        let ip = this.ip
        const loading = this.$loading({
          lock: true,
          text: 'Loading',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)'
        });
        this.$axios({
          url: '/v2.0/al/cardpay',
          method: 'post',
          data: qs.stringify({
            agentId: '202207240001',
            orderNo: orderNo,
            email: email,
            amount: allTotal,
            sign: md5(orderNo + email + new Date().getTime()),
            cardno: number,
            cvv: cvc,
            cardExpireMonth: month,
            cardExpireYear: year,
            firstname: firstName,
            lastname: lastName,

            returnUrl: 'http://www.txalmxj.com/#/finish',
            notifyUrl: 'www.sohu.com',
          }),
          headers: {
            'Content-type': 'application/x-www-form-urlencoded'
          }
        }).then(res => {
          loading.close();
          if (res.code == 200) {
            if (res.data.respCode == 10000) {
              this.$message({
                message: res.data.respMessage,
                type: 'success'
              })
            } else if (res.data.respCode == 10001) {
              this.$message({
                message: res.data.respMessage,
                type: 'error'
              })
            } else if (res.data.respCode == 10002) {
              this.$message({
                message: res.data.respMessage,
                type: 'success'
              })
              if (res.data.payUrl) {
                location.href = res.data.payUrl
              }
            }
            else {
              this.$message({
                message: res.data.respMessage,
                type: 'error'
              })
            }
          }
          else {
            this.$message({
              message: res.message,
              type: 'error'
            })
          }
        }).catch(e => {
          loading.close();
        })
        return
        this.$axios({
          url: '/v2.0/tl/insidePay',
          method: 'post',
          data: {
            cardHold: cardholderr,
            cardNo: number,
            cardExpireMonth: month,
            cardExpireYear: year,
            cardSecurityCode: cvc,
            billFirstName: firstName,
            billLastName: lastName,
            billAddress: address1,
            billCity: city,
            billState: this.Region ? this.Region : this.countryCode1,
            billCountry: this.countryCode1,
            billZip: code,
            billPhone: phone,
            shipFirstName: this.firstName,
            shipLastName: this.lastName,
            shipAddress: this.address1,
            shipCity: this.city,
            shipState: this.Region ? this.Region : this.countryCode1, //Region2
            shipCountry: this.countryCode1,
            shipZip: this.code,
            shipPhone: phone,
            brower: brower,
            ip: ip,
            email: email,
            currency: 'USD',
            amount: 555,
            notifyUrl: 'http://www.baidu.com',
            agentId: '202110110010',
          },
          // headers: {
          //  'Content-type':'application/x-www-form-urlencoded'
          // }
        }).then(res => {
          loading.close();
          if (res.code == 200) {
            if (res.data.respCode == 10000) {
              this.$message({
                message: res.data.respMessage,
                type: 'success'
              })
            } else if (res.data.respCode == 10001) {
              this.$message({
                message: res.data.respMessage,
                type: 'error'
              })
            } else if (res.data.respCode == 10002) {
              this.$message({
                message: res.data.respMessage,
                type: 'success'
              })
              if (res.data.payUrl) {
                location.href = res.data.payUrl
              }
            }
            else {
              this.$message({
                message: res.data.respMessage,
                type: 'error'
              })
            }
          }
          else {
            this.$message({
              message: res.message,
              type: 'error'
            })
          }
        }).catch(e => {
          loading.close();
        })
      } else {
        this.$message({
          message: 'Please fill in the required fields！',
          type: 'error'
        })
        return
      }
      return

    },
    toRegister () {
      if (this.isLogin) {
        return
      } else {
        this.$router.push('/register')
      }
    },
    getTotal () {
      let goodsCart = this.goodsCart
      let Total = 0
      goodsCart.map(v => {
        Total = Number(v.allPrice) + Total
      })
      this.allTotal = Total
    },
    getCountry (event) {
      let optionCountry = this.optionCountry
      optionCountry.map(v => {
        if (v.country_id == event) {
          this.countryCode1 = v.iso_code_2
          this.optionRegion = v.zone
          this.Region = ''
          this.countryName = v.name
          console.log('countryName', this.countryName, this.countryCode1)
          return
        }
      })
    },
    getCountry2 (event) {
      let optionCountry2 = this.optionCountry
      optionCountry2.map(v => {
        if (v.country_id == event) {
          this.countryCode2 = v.iso_code_2
          this.optionRegion2 = v.zone
          this.countryName = v.name
          this.Region2 = ''
          return
        }
      })
    },
    getRegion2 (event) {
      this.Region2 = event
    },
    getRegion (event) {
      this.Region = event
    },
    getCurrency (event) {
      this.currency = event

    },


  },
  mounted () {
    // 获取电脑唯一标识
    const start = new Date().getTime();
    let view = document.querySelector('#view');
    // view.innerHTML = '';
    let excludes = {};
    let options = {
      excludes: excludes
    }
    console.log(options)
    let that = this
    Fingerprint2.get(options, function (components) {
      // 参数
      const values = components.map(function (component) {
        return component.value
      });
      // 指纹
      const murmur = Fingerprint2.x64hash128(values.join(''), 31);
      // view.innerHTML += '<p class="pp">标识 : ' + murmur + '</p>';
      // sessionStorage.setItem("Finger", murmur); //存入标识值
      console.log(murmur, '浏览器标识');
      that.brower = murmur
      that.ip = returnCitySN["cip"]
    });
    // console.log(returnCitySN["cip"] + ',' + returnCitySN["cname"], 'ip地址')
    // choose country
    $('#checkout_shipping_address_country').on('change', function () {
      let val = $('option:selected', this).val()
      if (val) {
        that.getCountry(val)
      } else {
        that.countryCode1 = ''
      }
    })
    // choose region
    $('#checkout_shipping_address_province').on('change', function () {
      let val = $('option:selected', this).val()
      if (val) {
        that.Region = val
      } else {
        that.Region = ''
      }
      console.log('region', that.Region)
    })
    // choose month
    $('#checkout_shipping_address_month').on('change', function () {
      let val = $('option:selected', this).val()
      if (val == 'Month') {
        that.month = ''
      } else {
        that.month = val
      }
      console.log('month', that.month)
    })
    // chooose year
    $('#checkout_shipping_address_year').on('change', function () {
      let val = $('option:selected', this).val()
      if (val == 'Year') {
        that.year = ''
      } else {
        that.year = val
      }
      console.log('year', that.year)
    })
    $('.order-summary-toggle').click(function () {
      // 隐藏
      if ($(this).hasClass('order-summary-toggle--show')) {
        $(this).removeClass('order-summary-toggle--show').addClass('order-summary-toggle--hide')
        $('.order-summary-toggle__text--hide').css('display', 'block')
        $('.order-summary-toggle__text--show').css('display', 'none')
        // $('#order-summary').removeClass('order-summary--is-expanded').addClass('order-summary--is-collapsed order-summary--transition')
        $("#order-summary").slideUp('300');
        setTimeout(() => {
          // $('#order-summary').removeClass('order-summary--transition')
          $('#order-summary').addClass('order-summary--is-collapsed')
        }, 300);
        return
      }
      if ($(this).hasClass('order-summary-toggle--hide')) {
        $(this).removeClass('order-summary-toggle--hide').addClass('order-summary-toggle--show')
        $('.order-summary-toggle__text--show').css('display', 'block')
        $('.order-summary-toggle__text--hide').css('display', 'none')
        // $('#order-summary').removeClass('order-summary--is-collapsed').addClass('order-summary--is-expanded order-summary--transition')
        $("#order-summary").slideDown('300');
        setTimeout(() => {
          $('#order-summary').removeClass('order-summary--transition')
        }, 300);
        return
      }
    })


  }


}

</script>

<style lang='scss' scoped>
@import "../../style/cart.css";
@import "../../style/common.css";
.check_out {
  width: 100%;
  text-align: left;
  // background: #fafafa;
  .paypal_img {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #ffc439;
    border-radius: 4px;
  }
  /deep/ .el-input__inner {
    width: 100%;
  }
  .el-select {
    width: 100%;
  }
  .ship-flo-left {
    float: left;
    width: 300px;
    &:nth-child(2) {
      width: 500px;
    }
    &:nth-child(3) {
      width: 500px;
      color: #333;
      font-weight: bold;
      margin-left: 15px;
      margin-top: 5px;
    }
  }
  .img_cur {
    border: 2px solid #f7a900;
  }
  .check_card {
    // width:500px;
    color: #444;
    display: flex;
    flex-direction: column;
    padding: 20px 0;
    margin-left: 30px;
    .card_title {
      width: 200px;
      font-size: 18px;
      margin-bottom: 10px;
      > img {
        margin-left: 180px;
        width: 100%;
        height: auto;
      }
    }

    .card_cont {
      width: 100%;
      color: #222;
      font-size: 14px;
      display: flex;
      // justify-content: space-between;
      padding: 10px 0;

      .card_left {
        width: 180px;
        text-align: left;
      }

      .card_input {
        display: flex;
        position: relative;

        /deep/ .el-input__inner {
          // height: 34px;
          width: 200px;
        }

        // margin-left:120px;
      }

      .inp_box {
        width: 100px;
      }

      .min_img {
        width: 48px;
        height: 28px;
        margin-left: 120px;
        overflow: hidden;

        > img {
          margin-top: -64px;
        }
      }

      .big_img {
        width: 250px;
        height: 160px;
        position: absolute;
        overflow: hidden;
        top: 0px;
        right: -300px;
        z-index: 999;

        > img {
          margin-top: -100px;
        }
      }

      .min_select {
        // width: 90px;

        &:first-child {
          margin-right: 10px;
        }
      }
    }
  }
}
</style>
