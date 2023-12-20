<template>
  <main>
    <ul class="link">
      <li><router-link to="/">餐廳首頁</router-link></li>
      <li>/</li>
      <li><router-link to="/product">美味餐點</router-link></li>
      <li>/</li>
      <li class="meal-name">{{ singleProductData.title }}</li>
    </ul>
    <div class="detail-info">
      <img :src="singleProductData.imageUrl" alt="">
      <div class="info">
        <router-link to="/product" class="tag" @click="setCategoryToStore(singleProductData.category)">{{
          singleProductData.category }}
        </router-link>

        <div class="title">{{ singleProductData.title }}</div>
        <div class="description">
          {{ singleProductData.description }}</div>
        <div class="price">售價：
          <font-awesome-icon icon="fa-solid fa-dollar-sign" />
          {{ singleProductData.price }}/份
        </div>
        <div class="count-addToCart">
          <div class="count-field">
            <button type="button" class="minus-sign" :disabled="loading" @click="adjustQuantity(-1)">-</button>
            <span class="count">{{ quantity }}</span>
            <!-- <input class="count" type="number" name="meal" id="meal" placeholder="1"> -->
            <button type="button" class="plus-sign" :disabled="loading" @click="adjustQuantity(1)">+</button>
          </div>
          <div class="cartBtn">
            <button class="button-addToCart" :disabled="loading" name="button-addToCart" type="button"
              @click="addProductToCart(singleProductData.id, quantity)">
              加入購物車
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="shopping-guideLine">
      <div class="title">購物須知</div>
      <ul class="guideLine">
        <li>
          <p>1. 在下訂之前，請仔細檢查您選購的義大利麵商品資訊，包括名稱、數量、價格等是否正確無誤。</p>
        </li>
        <li>
          <p>2. 餐點均屬出餐當天即時現作，且因衛生與安全考量，餐點一經確認出單則概不退換貨，並請於收到餐點後當餐食用，以確保口感的新鮮度與衛生。</p>
        </li>
        <li>
          <p>3. 若商品因原物料而短缺而暫時無法販售，我們將主動儘快與您聯繫，屆時您可選擇取消訂單或更換其他商品。</p>
        </li>
        <li>
          <p>4. 若您對商品有任何疑問或需要協助，請隨時與我們聯繫，電話：<a href="tel:+886 2 2200-1234"
              aria-label="撥打這隻電話號碼給商店業者">(02)2200-1234</a>或是Email：<a href="mailto:soarfox@gmail.com?subject=有關米諾可義式餐廳網站"
              aria-label="寫電子郵件給商店業者">soarfox@gmail.com</a></p>
        </li>
      </ul>
    </div>

    <div class="same-category">
      <span>品嚐更多美味料理</span>
      <ul class="meals">
        <li v-for="product in getSameCategoryProducts()" :key="product.id">
          <router-link :to="'/detailedProduct/' + product.id">
            <img class="meal-img" :src="product.imageUrl" alt="">
            <div class="title">{{ product.title }}</div>
            <div class="eng-title">{{ product.category }}</div>
            <div class="border-line"></div>
            <div class="price">
              <font-awesome-icon icon="fa-solid fa-dollar-sign" />
              {{ product.price }}
            </div>
          </router-link>
        </li>
      </ul>
    </div>
  </main>
</template>

<script>
// 因為在這個元件內要取得Pinia的資料狀態, 故需要先匯入相關的Store
import productsStore from '@/stores/productsStore';

// 原本取得Pinia資料的方法是使用mapGetters方法, 但這個方法在往後版本可能會被棄用, 故採用mapState方法, 且會使用到mapActions方法
import { mapState, mapActions } from 'pinia';
import { useToast } from 'vue-toastification';

export default {
  data() {
    return {
      quantity: 1,
      addProductData: {
        product_id: '',
        qty: '',
      },
      loading: false,
    };
  },
  methods: {
    // 使用解構(...)方式並帶入兩個參數, 一個是Store Name, 另一個是Store內的actions; 如要使用請記得引入mapActions方法, 且在上方的template內,記得使用@click='getSameCategoryProducts'來呼叫此方法; 或者在mounted()生命週期內使用this.getSameCategoryProducts();進行呼叫
    ...mapActions(productsStore, ['getSingleProduct']),
    ...mapActions(productsStore, ['postItemToCart']),
    ...mapActions(productsStore, ['getItemsFromCart']),
    ...mapActions(productsStore, ['setProductCategory']),
    getSameCategoryProducts() {
      const { category } = this.singleProductData;
      // 取得與當前單一商品相同分類的商品, 且該些商品的名稱不與當前商品名稱相同, 藉此作為相似商品的內容印出在畫面上, 而日後若有新增更多同分類商品, 則使用.slice(0, 4)代表僅取得前4個商品
      return this.sortProductsByPrice.filter((item) => (item.category === category) && (item.title !== this.singleProductData.title)).slice(0, 4);
    },
    adjustQuantity(number) {
      // 若當前數量為1, 若使用者是按下減號按鈕(代表number為-1), 則經由下方判斷式, 將本次要增加的數字設為0
      if (this.quantity === 1) {
        const increment = number > 0 ? 1 : 0;
        this.quantity += increment;
      } else {
        this.quantity += number;
      }
    },
    async addProductToCart(productId, number) {
      const toast = useToast();
      this.loading = true;
      this.addProductData.product_id = productId;
      this.addProductData.qty = number;
      // 將要加入購物車的商品id及數量1設定好之後, 呼叫"新增商品到購物車API", 且等待確認完成後才更新購物車資料
      await this.postItemToCart(this.addProductData);
      toast.success('已加入購物車！');
      this.getItemsFromCart();
      this.quantity = 1;
      this.loading = false;
    },
    // 將商品分類設定到pinia store內的變數, 以利在商品頁一打開來之前, 先確認是否該變數已被設定某個分類內容, 如有則顯示對應的分類商品資料; 否則就顯示所有商品資料
    async setCategoryToStore(category) {
      await this.setProductCategory(category);
    },
  },
  computed: {
    // 使用解構(...)方式並帶入兩個參數, 一個是productsStore.js內自定義的Store Name, 另一個是Store內的state內容和getters內容, 可針對想使用的state/getters才寫上, 舉例 ...mapState(productsStore, ['pastaProducts', 'sortProductsByPrice'])
    ...mapState(productsStore, ['singleProductData', 'sortProductsByPrice']),
  },
  mounted() {
    // this.$router是Vue Router的實例, 提供路由相關的方法; this.$route是當前的路由狀態, 包含了與當前路由相關的資訊, 兩者只差一個'r'字, 撰寫時須小心; 故在此使用 $route.params.id 獲取商品 id
    const productId = this.$route.params.id;

    // 將Pinia store內的單一商品資料取出來使用, this指向當前Vue實例, 因此可透過 this來拜訪Vue實例的各種屬性和方法; 補充: Vue 2.x的寫法是this.$store.productsStore.getSingleProduct(productId); 但在Vue 3.x中, 使用Pinia時可以直接透過this訪問store, 而不再需要寫$store
    this.getSingleProduct(productId);
  },
  watch: {
    // 當使用者點擊更多美味料理的任一圖片時, 代表route的id會產生變化, 此時立刻觸發更新商品資料, 藉此呈現出所點擊的商品內容
    '$route.params.id': {
      // 立即觸發
      immediate: true,
      handler(newProductId) {
        this.getSingleProduct(newProductId);
      },
    },
  },
  // 透過下方幫助找出從本頁按了購物車內的'確認訂單'按鈕卻沒有成功跳轉到填寫訂單頁的問題, 已於navbarComponent.vue內改採絕對路徑, 即以/開頭的路徑, 如this.$router.push({ path: '/checkOrder' });, 如此就能夠成功跳轉到填寫訂單頁
  // beforeRouteLeave(to, from, next) {
  //   console.log('Leaving DetailedProductView, navigating to', to);
  //   next();
  // },
};
</script>
