<template>
  <div class="cart">
    <div class="shopcart-wrap">
      <div class="d-container">
        <div class="">
          <table width="100%"
                 class="all-table">
            <tbody>
              <tr>
                <th class="th-selected"
                    width="670"
                    colspan="3">Selected Item(s)</th>
                <th width="160">Unit Price</th>
                <th width="190">QTY</th>
                <th width="140">Subtotal</th>
                <th width="160">Operation</th>
              </tr>
              <!-- 处入的store0,0为循环店铺时的索引，下文会用到，必须存在 -->
              <tr class="store0">
                <td colspan="7">
                  <div class="selected-store">
                    <div class="checkbox-icon notext">
                      <span class="check-item noselect">
                        <input name="remember-me"
                               type="checkbox"
                               class="ipt-hide">
                        <label class="checkbox cur"></label>
                      </span>
                    </div>
                    <span>Store Name:DD4.COM</span>
                  </div>
                  <table width="100%"
                         class="product-table">
                    <tbody>
                      <tr style="display:none;">
                        <td colspan="7"
                            style="padding:0;">
                          <div class="combo-tit clr">
                            <div class="left-t"><span>Combo Deals</span> In Progress , <a href="">Check Now!&gt;&gt;</a></div>
                            <div class="right-t">Save US$ 10.88</div>
                          </div>
                        </td>
                      </tr>

                      <tr name="store_52446">
                        <td width="80"
                            align="center">
                          <!-- 此处的data-index="0" ：0必须与上面的store索引值一致 -->
                          <div class="checkbox-icon notext"
                               data-index="0">
                            <span class="check-item noselect">
                              <input name="remember-me"
                                     type="checkbox"
                                     value="7061"
                                     data-cartsku="ALW1012458N00"
                                     class="ipt-hide">
                              <label class="checkbox cur"></label>
                            </span>
                          </div>
                        </td>
                        <td width="600">
                          <div class="clr"
                               style="display: flex;align-items: center;">
                            <div class="goodsimg"
                                 style="width:130px;float:left;">
                              <input type="hidden"
                                     name="normal"
                                     value="0">
                              <div>
                                <a href="/"><img src="https://image.dd4.com/data/files/store_52446/goods_20181024/main_201810241114220742.jpg"
                                       width="100"
                                       height="100"></a>
                              </div>
                              <div style="display:none;color:#ff0000;padding-left: 5px;">{Combo Deals}</div>
                            </div>
                            <!--</td>
																<td width="470">-->
                            <div class="pro-name"
                                 style="width:470px;float:left;">
                              <div class="mb-10"
                                   title="Christmas Print Polyester Wall Hanging Tapestry"><a href="/goods/Christmas-Print-Polyester-Wall-Hanging-Tapestry-ALW1012458N00.html">Christmas Print Polyester Wall Hanging Tapestry</a></div>
                              <p>
                                #1/150x100cm
                              </p>
                            </div>
                          </div>
                          <div class="combo-box"
                               style="display:none;">
                            Buy Together With <img src="http://192.168.49.223/data/files/store_461/goods_20180410/small_201804101941360030.jpg"
                                 width="25"
                                 height="25"> <span>Save $ 10.88</span> &nbsp;<a href="">GO</a>
                          </div>
                        </td>
                        <!--<td width="160" align="center" class="unitprice">US $ 20.71</td>
														<td width="190" align="center">
															<div class="qty-add">
																<input type="hidden" value="7061">
																<input type="hidden" value="101245">
																<input type="hidden" value='{"72":"1050","9999":"1"}'>
																
																<span class="minus" data-sku="ALW1012458N00">-</span><input type="text" value="1" readonly="readonly"  onkeyup="value=value.replace(/[^\d]/g,'')"><span class="plus" data-sku="ALW1012458N00">+</span>
																<div style="clear:both;"></div>
																<div name="hurry" style="color:red"></div>
																<div class="combo-tip" style="color:#ff0000;">Join Combo Deals,you can only buy 1 psc!</div>
															</div>
															<div name="stintQty_tip" class="stintQty_tip"></div>
															<div name="out_of_stock" class="out_of_stock"></div>
														</td>
														<td width="140" align="center"><div>US $ 20.71</div></td>-->
                        <td>
                          <div style="padding-top:22px;">
                            <div class="clr"
                                 style="height:65px;">
                              <div style="float:left;width:148px;margin-top:14px;text-align:center;">US $ 20.71</div>
                              <div style="float:left;width:190px;text-align:center;">
                                <div class="qty-add">
                                  <input type="hidden"
                                         value="7061">
                                  <input type="hidden"
                                         value="101245">
                                  <input type="hidden"
                                         value="{&quot;72&quot;:&quot;1050&quot;,&quot;9999&quot;:&quot;1&quot;}">

                                  <span class="minus"
                                        data-sku="ALW1012458N00"
                                        @click="cut">-</span><input type="text"
                                         value="1"
                                         readonly="readonly"
                                         onkeyup="value=value.replace(/[^\d]/g,'')"><span class="plus"
                                        data-sku="ALW1012458N00"
                                        @click="addCount">+</span>
                                  <div style="clear:both;"></div>
                                  <div name="hurry"
                                       style="color:red"></div>

                                </div>
                                <div name="stintQty_tip"
                                     class="stintQty_tip"></div>
                                <div name="out_of_stock"
                                     class="out_of_stock"></div>
                              </div>
                              <div class="pro-sub-total"
                                   style="float:left;width:136px;margin-top:14px;text-align:center;display:none">US $ 20.71</div>
                            </div>
                            <div class="combo-tip center"
                                 style="display:none;color:#ff0000;">Join Combo Deals,you can only buy 1 psc!</div>
                          </div>
                        </td>
                        <td width="160"
                            align="center">
                          <div class="a-btn">
                            <a href="javascript:collectGoods(7061,101245)"
                               charset="favorite">Favorite</a><br><a href="javascript:tip(7061)"
                               class="remove">Remove</a>
                          </div>
                        </td>
                      </tr>

                      <tr name="store_52446">
                        <td width="80"
                            align="center">
                          <!-- 此处的data-index="0" ：0必须与上面的store索引值一致 -->
                          <div class="checkbox-icon notext"
                               data-index="0">
                            <span class="check-item noselect">
                              <input name="remember-me"
                                     type="checkbox"
                                     value="7060"
                                     data-cartsku="TCS1011862S00"
                                     class="ipt-hide">
                              <label class="checkbox cur"></label>
                            </span>
                          </div>
                        </td>
                        <td width="600">
                          <div class="clr"
                               style="display: flex;align-items: center;">
                            <div class="goodsimg"
                                 style="width:130px;float:left;">
                              <input type="hidden"
                                     name="normal"
                                     value="0">
                              <div>
                                <a href="/goods/5-Pack-Cilycily-Resistance-Bands-Fitness-Loop-Bands-Set-TCS1011862S00.html"><img src="https://image.dd4.com/data/files/store_52446/goods_20181017/main_201810171007260228.jpg"
                                       width="100"
                                       height="100"></a>
                              </div>
                              <div style="display:none;color:#ff0000;padding-left: 5px;">{Combo Deals}</div>
                            </div>
                            <!--</td>
																<td width="470">-->
                            <div class="pro-name"
                                 style="width:470px;float:left;">
                              <div class="mb-10"
                                   title="5 Pack Cilycily Resistance Bands Fitness Loop Bands Set"><a href="/goods/5-Pack-Cilycily-Resistance-Bands-Fitness-Loop-Bands-Set-TCS1011862S00.html">5 Pack Cilycily Resistance Bands Fitness Loop Bands Set</a></div>
                              <p>
                              </p>
                            </div>
                          </div>
                          <div class="combo-box"
                               style="display:none;">
                            Buy Together With <img src="http://192.168.49.223/data/files/store_461/goods_20180410/small_201804101941360030.jpg"
                                 width="25"
                                 height="25"> <span>Save $ 10.88</span> &nbsp;<a href="">GO</a>
                          </div>
                        </td>
                        <!--<td width="160" align="center" class="unitprice">US $ 11.97</td>
														<td width="190" align="center">
															<div class="qty-add">
																<input type="hidden" value="7060">
																<input type="hidden" value="101186">
																<input type="hidden" value='{}'>
																
																<span class="minus" data-sku="TCS1011862S00">-</span><input type="text" value="1" readonly="readonly"  onkeyup="value=value.replace(/[^\d]/g,'')"><span class="plus" data-sku="TCS1011862S00">+</span>
																<div style="clear:both;"></div>
																<div name="hurry" style="color:red"></div>
																<div class="combo-tip" style="color:#ff0000;">Join Combo Deals,you can only buy 1 psc!</div>
															</div>
															<div name="stintQty_tip" class="stintQty_tip"></div>
															<div name="out_of_stock" class="out_of_stock"></div>
														</td>
														<td width="140" align="center"><div>US $ 11.97</div></td>-->
                        <td>
                          <div style="padding-top:22px;">
                            <div class="clr"
                                 style="height:65px;">
                              <div style="float:left;width:148px;margin-top:14px;text-align:center;">US $ 11.97</div>
                              <div style="float:left;width:190px;text-align:center;">
                                <div class="qty-add">
                                  <input type="hidden"
                                         value="7060">
                                  <input type="hidden"
                                         value="101186">
                                  <input type="hidden"
                                         value="{}">

                                  <span class="minus"
                                        data-sku="TCS1011862S00"
                                        @click="cut">-</span><input type="text"
                                         value="1"
                                         readonly="readonly"
                                         onkeyup="value=value.replace(/[^\d]/g,'')"><span class="plus"
                                        data-sku="TCS1011862S00"
                                        @click="addCount">+</span>
                                  <div style="clear:both;"></div>
                                  <div name="hurry"
                                       style="color:red"></div>

                                </div>
                                <div name="stintQty_tip"
                                     class="stintQty_tip"></div>
                                <div name="out_of_stock"
                                     class="out_of_stock"></div>
                              </div>
                              <div class="pro-sub-total"
                                   style="float:left;width:136px;margin-top:14px;text-align:center;display:none">US $ 11.97</div>
                            </div>
                            <div class="combo-tip center"
                                 style="display:none;color:#ff0000;">Join Combo Deals,you can only buy 1 psc!</div>
                          </div>
                        </td>
                        <td width="160"
                            align="center">
                          <div class="a-btn">
                            <a href="javascript:collectGoods(7060,101186)"
                               charset="favorite">Favorite</a><br><a href="javascript:tip(7060)"
                               class="remove">Remove</a>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div class="selected-coupon clr">
                    <div>
                      <div class="input-box">
                        <div name="shadeLevel"
                             style="background:#ccc;position:absolute;left:0;top:0;width:100%;height:100%;z-index:9;opacity: 0.5;display:none;"></div>
                        <input type="text"
                               name=""
                               class="coupon-name"
                               placeholder="Promotion Code">
                        <input type="hidden"
                               name="coupon-sn"
                               value="">
                        <div class="right-icon">
                          <i></i>
                          <ul class="option-list"
                              name="cou_52446"
                              style="display: none;">
                          </ul>
                        </div>
                      </div>
                      <div class="apply"><a href="javascript:void(0)"
                           data-storeid="52446"
                           data-skus="ALW1012458N00,TCS1011862S00">Apply</a></div>
                      <div style="clear:both;"></div>
                    </div>
                    <div class="coupon-error"></div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <div class="operation">

            <div class="checkbox-icon">
              <span class="check-item noselect">
                <input id="remember-me"
                       type="checkbox"
                       class="ipt-hide">
                <label class="checkbox cur"></label> &nbsp;&nbsp;&nbsp;Select All
              </span>
            </div>

            <a href="/"
               @click.prevent='toIndex'>Continue Shopping</a>&nbsp;&nbsp;&nbsp;<a href="/"
               @click.prevent='emptyCart'>Remove All</a>
          </div>
          <div class="total-box">
            <div class="t-t">
              <span class="s-name">Subtotal</span>
              <span class="s-value"
                    id="total_goods_price">US $ 32.68</span>
            </div>
            <div class="t-t">
              <span class="s-name">Coupon Saving</span>
              <span class="s-value s-saving"
                    id="coupon_price">US $ 0.00</span>
            </div>
            <div class="t-t grand-totals">
              <span class="s-name">Grand Total</span>
              <span class="s-value"
                    id="total_price">US $ 32.68</span>
            </div>
          </div>

          <div class="a-proceed"><a href="javascript:toCheckOut()">Proceed to Checkout</a></div>
        </div>

      </div>
    </div>

    <!-- <div class="cart_cont row"
         v-if="goodsCart.length>0">
      <template>
        <div class="col-md-12 col-xs-12"
             style='margin-top:30px;'>
          <el-table ref="singleTable"
                    :data="goodsCart"
                    highlight-current-row
                    border
                    :cell-style="{'text-align':'center'}"
                    :header-cell-style="{'text-align': 'center','color':'#000','font-size':'16px','font-weight':'300', 'background':'#f5f5f5'}"
                    style="width: 100%">
            <el-table-column type="img"
                             label="Image"
                             width="120">
              <template slot-scope="scope">
                <img :src="scope.row.photo"
                     alt=""
                     style="width:120px;padding:30px 15px 30px 0;">
              </template>
            </el-table-column>
            <el-table-column property="name"
                             label="Product Name"
                             width="420">
            </el-table-column>
            <el-table-column property=""
                             label="Model"
                             width="79">
            </el-table-column>
            <el-table-column property="price"
                             label="Price">
              <template slot-scope="scope">
                <span style='color:#ed9964;font-weight:bold;font-size:18px;'>{{scope.row.price}}</span>
              </template>
            </el-table-column>
            <el-table-column property=""
                             label="QTY">
              <template slot-scope="scope">
                <div class="cart_model cart_model_set">
                  <div class='cart_input'>
                    <el-input v-model="scope.row.count">
                      <i slot="prefix"
                         class="el-input__icon el-icon-minus addNum"
                         @click="countCut(scope.row)"></i>
                      <i slot="suffix"
                         class="el-input__icon el-icon-plus addNum"
                         @click="scope.row.count++"></i>
                    </el-input>

                  </div>
                  <div class="glyphicon glyphicon-refresh cart_refresh"
                       @click="refresh(scope.row.id)"></div>
                  <div class="glyphicon glyphicon-remove-sign cart_cut"
                       @click="cut(scope.row.id)"></div>
                </div>
              </template>

            </el-table-column>

            <el-table-column property="allprice"
                             label="Total"
                             align='center'>
              <template slot-scope="scope">
                <span style='color:#ed9964;font-weight:bold;font-size:18px;'>{{scope.row.allPrice?'$'+scope.row.allPrice:scope.row.price}}</span>
              </template>
            </el-table-column>
            <el-table-column property=""
                             label="X"
                             width="50">
              <template slot-scope="scope">
                <div class="el-icon-close cart_cut"
                     @click="cut(scope.row.id)"></div>
              </template>
            </el-table-column>
          </el-table>
          <div class="goods_btn">
            <div class="goods_refresh"
                 @click="emptyCart">Empty Cart</div>
            <div class="goods_refresh"
                 @click="refresh">Update Shopping Cart</div>

          </div>
        </div>
      </template>
      <div class='cart_next'>What would you like to do next?</div>
      <div class="cart_text">Choose if you have a discount code or reward points you want to use or would like to
        estimate your delivery cost.</div>

      <el-collapse v-model="activeNames"
                   accordion>
        <el-collapse-item title="Use Coupon Code"
                          name="1">
          <div class="show_next">

            <div class="show_tetx">Enter your coupon here:</div>
            <div class="show_input">
              <el-input v-model='code'></el-input>
              <div class="show_button">Apply Coupon</div>
            </div>

          </div>
        </el-collapse-item>
        <el-collapse-item title="Use Gift Voucher"
                          name="2">
          <div class="show_next">

            <div class="show_tetx">Enter your gift voucher code here:</div>
            <div class="show_input">
              <el-input v-model='giftCode'></el-input>
              <div class="show_button">Apply Voucher</div>
            </div>

          </div>
        </el-collapse-item>

      </el-collapse>

      <div class='cart_total '>
        <div class="cart_total_cont">
          <div class="cart_total_cont_title"><strong>Sub-CART TOTAL</strong></div>
          <table>
            <tbody>
              <tr>
                <td class="table_td"> SUBTOTAL: </td>
                <td class="table_td"
                    style='color:#ed9964;text-align:right'>${{total}}</td>
              </tr>
              <tr>
                <td class="table_td"><strong>SHIPPING:</strong></td>
                <td class="table_td">
                  <strong>CALCULATE SHIPPING COSTS</strong>
                </td>
              </tr>
              <tr>
                <td class="table_td"
                    style='color:#858073;'>GRAND TOTAL:</td>
                <td class="table_td"
                    style='color:#e61446;text-align:right'> ${{Number(total)}}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="bottom_btn">
        <div></div>
        <div class="bot_btn bot_left"
             @click="toIndex"> Continue Shopping</div>
        <div class="bot_btn "
             @click="toCheckout"> Proceed to Checkout</div>
      </div>
    </div> -->
    <!-- <div class="no_cart"
         v-else>Your shopping cart is empty!</div> -->
  </div>

</template>

<script>
import top from '../../components/top'
export default {
  components: {
    top,
  },
  data () {
    return {
      goodsCart: [],
      total: 0,
      code: '',
      giftCode: '',
      country: '',
      state: '',
      postCode: '',
      radio: 0,
      allCount: 0,
      activeNames: '',

    }
  },
  created () {
    let goodsCart = JSON.parse(sessionStorage.getItem('goodsCart')) || []
    this.goodsCart = goodsCart
    this.getTotal()
  },
  methods: {
    refresh (id) {
      let goodsCart = this.goodsCart
      goodsCart.map((v, index) => {
        // if (v.id == id) {
        if (v.count > 0) {
          let price = v.price.split('$')[1]
          v.allPrice = (Number(v.count) * Number(price)).toFixed(2)
          // sessionStorage.setItem('goodsCart', JSON.stringify(goodsCart))
        } else if (v.count == 0) {
          goodsCart.splice(index, 1)
          // sessionStorage.setItem('goodsCart', JSON.stringify(goodsCart))
        }
        // }
      })

      sessionStorage.setItem('goodsCart', JSON.stringify(goodsCart))
      this.getTotal()
    },
    emptyCart () {
      this.goodsCart = []
      sessionStorage.setItem('goodsCart', JSON.stringify(this.goodsCart))
    },
    cut (id) {
      let goodsCart = this.goodsCart
      // let goodsCart = JSON.parse(sessionStorage.getItem('goodsCart'))
      goodsCart.map((v, index) => {
        if (v.id == id) {
          goodsCart.splice(index, 1)
          sessionStorage.setItem('goodsCart', JSON.stringify(goodsCart))
          //    this.$router.go(0);
          this.getTotal()
        }
      })
    },
    countCut (v) {
      if (v.count == 0) {
        return
      } else {
        v.count--
      }
    },
    addCount () {

    },
    getTotal () {
      let goodsCart = this.goodsCart
      let total = 0
      let allCount = 0
      goodsCart.map((v, index) => {
        let allPrice
        let price = v.price.split('$')[1]
        allCount = allCount + Number(v.count)
        allPrice = v.allPrice ? v.allPrice : price
        total = total + Number(allPrice)
      })
      this.total = total.toFixed(2)
      this.allCount = allCount
    },
    toCheckout () {
      this.$router.push('/checkout')
    },
    toIndex () {
      this.$router.push('/index')
    },

  },

}

</script>

<style lang='scss' scoped>
@import "../../style/reset.css";
@import "../../style/cart.css";
@import "../../style/common.css";
.cart {
  color: #667280;
  text-align: left;
  width: 100%;
  margin-top: 30px;
  padding: 0 50px;
  .no_cart {
    padding: 20px 0 300px 0;
    text-align: left;
  }
  .shop_step {
    border-bottom: 2px solid #e4e4e4;
    padding-bottom: 20px;
    position: relative;
    .step_tab {
      &:first-child {
        &::after {
          content: "";
          height: 2px;
          background: #222;
          position: absolute;
          bottom: -22px;
          left: -15px;
          right: -15px;
        }
      }
      .step_tab_num {
        font-size: 18px;
        color: #767676;
        display: flex;
        .label_strong {
          margin-left: 20px;
        }
      }
      .step_tab_title {
        color: #222;
        font-weight: bold;
      }
      .label_small {
        font-size: 14px;
        margin-left: 40px;
        margin-top: 10px;
      }
    }
  }

  .pc_title {
    width: 100%;
    //  border-bottom:1px solid #ddd;
    padding: 15px 0;
    text-align: left;
    .pc_title_name {
      position: relative;
      color: #222;
      font-size: 33px;
      z-index: 0;
      display: inline-block;
      padding-bottom: 10px;
      font-weight: bold;
      font-weight: 600;
    }
  }

  .cart_next {
    font-size: 27px;
    padding: 10px 0;
    margin-top: 20px;
    color: #444;
  }

  .cart_text {
    padding: 0 0 10px 0;
    color: #666;
    font-size: 12px;
  }
  .show_next {
    display: flex;
    align-items: center;
    padding: 15px;
    position: relative;
  }
  .show_tetx {
    width: 20%;
  }
  .show_button {
    padding: 7px 18px 4px 18px;
    background: linear-gradient(to bottom, #23a1d1, #1f90bb);
    color: #fff;
    cursor: pointer;
    width: 150px;
    border-radius: 0 4px 4px 0;
    border-color: #1f90bb #1f90bb #145e7a;
  }

  .show_input {
    display: flex;
    flex: 1;
    /deep/ .el-input__inner {
      height: 34px;
      border-radius: 4px 0 0 4px;
      border-right: 0;
    }
    //   margin: 20px 0;

    .input_tetx {
      width: 180px;
    }
  }
  .cart_title {
    color: #000;
    font-size: 22px;
    font-weight: bolder;
    padding-bottom: 10px;
    text-align: left;
  }
  .cart_cont {
    border-bottom: 1px solid #e4e4e4;
    .goods_btn {
      // margin: 30px;
      display: flex;
      justify-content: space-between;
      padding: 25px;
      border: 1px solid #e4e4e4;
      border-top: none;
      .goods_refresh {
        cursor: pointer;
        padding: 7px 15px;
        background: #e4e4e4;
        background: $backgroundColor;
        color: #fff;
        font-size: 14px;
        text-transform: uppercase;
        &:hover {
          background: #222;
          color: #fff;
        }
      }
    }

    .cart_cont_title,
    .cart_cont_box {
      display: flex;
    }
    /deep/ .el-collapse-item__header {
      background: #f5f5f5;
      border: 1px solid #ddd;
      border-radius: 4px;
      margin-top: 5px;
      padding: 0 10px;
      color: #333;
      font-size: 16px;
    }
    /deep/ .el-collapse {
      // border: none;
    }
    /deep/ .el-collapse-item__wrap {
      // border: 1px solid #ddd;
      border-radius: 0 0 4px 4px;
      // border-top: none;
    }

    .cart_cont_title {
      border-top: 2px solid #ccc;
      border-bottom: 2px solid #ccc;
      color: #333;
      background: #f7f7f7;
      font-size: 12px;
      font-weight: bolder;
      padding: 0 15px;
      text-align: left;
    }

    .cart_model {
      padding: 8px;
      text-align: left;
      &:nth-child(2) {
        width: 720px;
      }
      &:nth-child(4) {
        width: 200px;
      }
      &:nth-child(3) {
        width: 51px;
      }
      &:nth-child(5) {
        width: 71px;
      }
    }

    .cart_model_set {
      display: flex;
      width: 100%;

      .cart_refresh,
      .cart_cut {
        width: 30px;
        height: 30px;
        //   padding: 8px;
        line-height: 30px;
        text-align: center;
        color: #fff;
        text-shadow: 0 -1px 0 rgba(156, 151, 151, 0.25);
        background-color: #229ac8;
        background-image: linear-gradient(to bottom, #23a1d1, #1f90bb);
        background-repeat: repeat-x;
        border-color: #1f90bb #1f90bb #145e7a;
        border: 1px solid #e3e3e3;
        border-radius: 5px;
        margin-left: 2px;
        box-sizing: border-box;
        margin-top: -2px;
      }
      .cart_cut {
        background: #da4f49;
      }
      .addNum {
        &:hover {
          color: #c32929;
        }
      }
    }

    .cart_model_name {
      font-size: 13px;
      font-weight: bolder;
    }

    .cart_model_photo {
      width: 60px;
      padding: 8px;

      > img {
        width: 100%;
      }
    }
  }

  .cart_total {
    // width:100%;
    display: flex;
    justify-content: flex-end;
    padding: 30px 20px;

    .cart_total_cont {
      // padding: 30px 40px;
      border: 1px solid #e4e4e4;
      .cart_total_cont_title {
        color: #222;
        font-size: 16px;
        margin: 10px 0;
      }
      tr {
        border-bottom: 1px solid #e4e4e4;

        &:last-child {
          border-bottom: none;
        }
        > td {
          padding: 15px 20px !important;
        }
      }
      .table_td {
        width: 200px;
        // border-bottom: 1px solid #767676;
        padding: 8px;
        text-align: left;
        color: $fontBodyColor;
        font-size: 15px;
        padding: 18px 0;
      }
      // width:400px;
      .cart_total_box {
        display: flex;
        // justify-content: space-between;
        // border-top:1px solid #ccc;
        padding: 5px 0;
        color: #ff7b7b;

        .total_title {
          font-weight: bolder;
          margin-right: 20px;
          text-align: right;
          width: 150px;
          color: #667280;
        }
      }
    }
  }

  .bottom_btn {
    // width:100%;
    display: flex;
    justify-content: flex-end;
    padding: 0px 15px 70px 15px;
    align-items: center;

    .bot_btn {
      color: #fff;
      font-size: 14px;
      cursor: pointer;
      text-align: center;
      padding: 12px 30px;
      background: $backgroundColor;
      text-transform: uppercase;
      &:hover {
        background: rgb(9, 9, 9);
      }
    }

    .bot_left {
      color: #777;
      cursor: pointer;
      background: linear-gradient(to bottom, #eeeeee, #dddddd);
      border-color: #dddddd #dddddd #b3b3b3 #b7b7b7;
      border-radius: 4px;
      &:hover {
        background: #dddddd;
      }
    }
  }

  .cart_model_set {
    display: flex;
    width: 100%;
    justify-content: center;
    align-content: center;
    /deep/ .el-input__inner {
      width: 100px;
      padding-left: 45px;
      // text-align: center;
      // padding:0;
      // height: 29px;
      // margin:0 0 -5px 0;
    }

    //   .cart_refresh {
    //     width: 30px;
    //     height: 30px;
    //     padding: 8px;
    //     background: #eee;
    //     border: 1px solid #ddd;
    //     margin-left: 5px;
    //   }
  }
  /deep/ .el-table--border,
  .el-table--group {
    // border: none;
    border-top: 2px solid $backgroundColor;
    background: #f5f5f5;
    &::after {
      // border: none;
      width: 0;
    }
  }
  /deep/ .el-table--border,
  .el-table--border,
  .el-table__body-wrapper,
  .el-table--border.is-scrolling-left,
  .el-table__fixed {
    // border-right: none;

    tr {
      > td {
        border-right: none;
        &:last-child {
          border-right: 1px solid #e4e4e4 !important;
        }
      }
      > th {
        border-right: none;
        &:last-child {
          border-right: 1px solid #e4e4e4 !important;
        }
      }
    }
  }
}
</style>
