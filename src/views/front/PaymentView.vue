<template>
  <main>
    <ul class="steps">
      <li>Step1. <span>建立訂單</span></li>
      <li class="current-step">Step2. <span>確認付款</span></li>
      <li>Step3. <span>完成訂購</span></li>
    </ul>
    <div class="cart-tables">
      <div class="cart-list">
        <div class="title">訂單明細</div>
        <table class="order">
          <tbody>
            <tr v-for="item in itemsInCart.carts" :key="item.id">
              <td class="product-img"><img :src="item.product.imageUrl" alt=""></td>
              <td class="product-name">{{ item.product.title }}</td>
              <td class="product-quantity">數量：{{ item.qty }}</td>
              <td class="product-price">NT$ {{ item.final_total }}</td>
            </tr>
          </tbody>
          <tfoot class="tfoot">
            <tr class="totalPrice">
              <td>總計</td>
              <td>NT$ {{ totalPrice }}</td>
            </tr>
          </tfoot>
        </table>
      </div>
      <div class="payment-userInfo">
        <table class="paymentTable">
          <tr class="fields">
            <td>訂單時間：</td>
            <td>{{ orderResult.create_at }}</td>
          </tr>
          <tr class="fields">
            <td>訂單編號：</td>
            <td>{{ orderResult.orderId }}</td>
          </tr>
          <tr class="fields">
            <td>付款狀態：</td>
            <td>尚未付款，共{{ orderResult.total }}元</td>
          </tr>
        </table>
        <table class="userInfoTable">
          <tr class="fields">
            <td>收件人姓名：</td>
            <td>{{ userOrderInfo.user.name }}</td>
          </tr>
          <tr class="fields">
            <td>收件人Email：</td>
            <td>{{ userOrderInfo.user.email }}</td>
          </tr>
          <tr class="fields">
            <td>收件人電話：</td>
            <td>{{ userOrderInfo.user.tel }}</td>
          </tr>
          <tr class="fields">
            <td>收件地址：</td>
            <td>{{ userOrderInfo.user.address }}</td>
          </tr>
          <tr class="fields">
            <td>附註：</td>
            <td>{{ userOrderInfo.message }}</td>
          </tr>
        </table>
        <button type="button" name="submit" class="submit-btn" @click="payOrder(orderResult.orderId)"
          :disabled="loading">確認付款</button>
      </div>
    </div>
  </main>
</template>

<script>

import productsStore from '@/stores/productsStore';
import { mapActions, mapState } from 'pinia';
import { useToast } from 'vue-toastification';

export default {
  data() {
    return {
      loading: false,
    };
  },
  methods: {
    ...mapActions(productsStore, ['postItemToPay']),
    ...mapActions(productsStore, ['getItemsFromCart']),
    async payOrder(orderId) {
      // 當準備跳轉到確認付款完成畫面時, 將loading設為true, 藉此改變各按鈕的對應樣式
      this.loading = true;
      const toast = useToast();
      await this.postItemToPay(orderId);
      // 如果pinia store內的訂單狀態有值, 則印出它的message訊息
      if (this.orderStatus !== undefined) {
        toast.success('付款成功！');
        // 付款完成後, 重新抓取購物車的內容, 使購物車的內容被結清乾淨
        this.getItemsFromCart();
        this.$router.push({ path: 'paymentCompleted' });
      } else {
        toast.error('訂單付款時發生錯誤!');
      }
      // 當準備跳轉到確認付款完成畫面時, 依前述判斷式決定跳轉成功或失敗, 將loading設為false, 各按鈕的樣式恢復原樣
      this.loading = false;
    },
  },
  computed: {
    ...mapState(productsStore, ['itemsInCart', 'orderResult', 'userOrderInfo', 'orderStatus']),
    totalPrice() {
      // 當尚未取得購物車的資料時, 令購物車的總金額回傳為0, 藉此避免網頁在尚未點擊購物車出現之前就出現錯誤
      if (!this.itemsInCart || !this.itemsInCart.carts) {
        return 0;
      }

      // 使用陣列的reduce進行購物車總金額的累加, lastTotal代表上一次的總金額, item代表本次的項目, item.final_total代表本次項目的小計金額
      const finalPrice = this.itemsInCart.carts.reduce((lastTotal, item) => lastTotal + item.final_total, 0);

      return finalPrice;
    },
  },
};
</script>
