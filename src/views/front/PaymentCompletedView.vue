<template>
  <main>
    <ul class="steps">
      <li>Step1. <span>建立訂單</span></li>
      <li>Step2. <span>確認付款</span></li>
      <li class="current-step">Step3. <span>完成訂購</span></li>
    </ul>
    <div class="completedMessage">
      <div class="title">
        <font-awesome-icon icon="fa-solid fa-truck" class="small-cart-icon" />
        感謝您的訂購！
      </div>
      <div class="notice">
        <span>餐點將儘速送抵指定的地點；如有任何問題，歡迎聯絡我們：<a href="tel:+886 2 2200-1234" aria-label="撥打餐廳的電話號碼">(02)2200-1234</a>
        </span>
        <span>祝福您有美好的一天！</span>
      </div>
      <router-link to="/" class="goHome">返回首頁</router-link>
    </div>
  </main>
</template>

<script>

import productsStore from '@/stores/productsStore';

import { mapActions, mapState } from 'pinia';

export default {
  data() {
    return {
    };
  },
  methods: {
    ...mapActions(productsStore, ['postItemToPay']),
    async payOrder(orderId) {
      await this.postItemToPay(orderId);
      // 如果pinia store內的訂單狀態有值, 則印出它的message訊息
      if (this.orderStatus !== undefined) {
        alert(this.orderStatus.message);
        this.$router.push({ path: 'paymentCompleted' });
      } else {
        console.log('訂單付款時發生錯誤!');
      }
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
