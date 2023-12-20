<template>
  <main>
    <ul class="steps">
      <li class="current-step">Step1. <span>建立訂單</span></li>
      <li>Step2. <span>確認付款</span></li>
      <li>Step3. <span>完成訂購</span></li>
    </ul>
    <div class="cart-form">
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
      <VForm class="form" @submit="submitForm">
        <div class="fields" v-for="field in formFields" :key="field.id">
          <label class="title">{{ field.label }}</label>
          <VField v-if="field.type === 'textarea'" class="textarea" v-model="formData[field.id]" :rules="field.rule"
            :as="field.type" :name="field.id" :id="field.id" :placeholder="field.placeholder">
          </VField>
          <VField v-else class="input-field" v-model="formData.user[field.id]" :rules="field.rule" :type="field.type"
            :name="field.id" :id="field.id" :placeholder="field.placeholder">
          </VField>
          <ErrorMessage class="validation" :name="field.id"></ErrorMessage>
        </div>
        <input class="button-submit" name="button-submit" type="submit" value="送出訂單" :disabled="loading">
      </VForm>

    </div>
  </main>
</template>

<script>

import productsStore from '@/stores/productsStore';
import { mapState, mapActions } from 'pinia';
import { useToast } from 'vue-toastification';

export default {
  data() {
    return {
      loading: false,
      formData: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: '',
        },
        message: '',
      },
      formFields: [
        {
          id: 'name', label: '收件人姓名', type: 'text', placeholder: '請輸入完整姓名', rule: 'required',
        },
        {
          id: 'email', label: '收件人Email', type: 'email', placeholder: '請輸入Email', rule: 'required|email',
        },
        {
          id: 'tel', label: '收件人手機號碼', type: 'tel', placeholder: '請輸入手機號碼', rule: 'required|digits:10',
        },
        {
          id: 'address', label: '收件地址', type: 'text', placeholder: '請輸入完整地址', rule: 'required',
        },
        {
          id: 'message', label: '附註', type: 'textarea', placeholder: '如有任何需求，歡迎填寫',
        },
      ],
    };
  },
  methods: {
    ...mapActions(productsStore, ['postCartItemsToOrder']),
    async submitForm() {
      // 當準備跳轉到確認訂單畫面時, 將loading設為true, 藉此改變各按鈕的對應樣式
      this.loading = true;
      const toast = useToast();
      // 等待資料從購物車加入訂單完成後, 才會往下繼續執行
      await this.postCartItemsToOrder(this.formData);

      // 如果pinia store內的訂單資料有值, 則印出它的message訊息
      if (this.orderResult !== undefined) {
        toast.success('訂單已成立！');
        // 使用絕對路徑, 以/開頭的路徑
        this.$router.push({ path: '/payment' });
      } else {
        toast.error('加入訂單時發生錯誤!');
      }
      // 當執行跳轉到確認訂單畫面動作, 依前述判斷式決定跳轉成功或失敗, 將loading設為false, 各按鈕的樣式恢復原樣
      this.loading = false;
    },
  },
  computed: {
    ...mapState(productsStore, ['itemsInCart']),
    ...mapState(productsStore, ['orderResult']),
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
