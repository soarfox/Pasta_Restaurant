<template>
  <!--將CSS內cartMenu的right屬性, 使其與JS內的data物件內的cartMenuRight(因需同時考量到iPad及手機版網站上能否正確完全隱藏起來, 故將值設定為'-100%', 藉此可完全移除視窗外)以v-bind動態綁定方式綁定在一起, 使CSS內cartMenu的right屬性值成為'-100%' -->
  <div class="cartMenu" :style="{ right: cartMenuRight }">
    <div class="title-closeCart">
      <h2>購物車</h2>
      <button type="button" class="closeCart" :disabled="loading" @click="closeCart">X</button>
    </div>
    <!-- 當購物車資料確實有存在且購物車資料的長度為空時, 則v-if條件成立, 顯示購物車內沒有品項; 否則就顯示購物車內的各品項資料在畫面上  -->
    <div class="empty-cart" v-if="this.itemsInCart.carts && !itemsInCart.carts.length">
      <span>
        購物車內沒有任何品項
      </span>
      <div class="go-shopping">
        <router-link to="/product" @click="closeCart">前往選購</router-link>
      </div>
    </div>
    <!-- 否則, 當購物車內有東西時, 就顯示購物車列表 -->
    <table class="table" v-else>
      <tbody class="cart-list">
        <tr v-for="item in itemsInCart.carts" :key="item.id">
          <td class="img-td">
            <img :src="item.product.imageUrl" alt="">
          </td>
          <td class="product-td">
            <div class="product-content">
              <div class="productName">{{ item.product.title }}</div>
              <div class="price">${{ item.product.price }}</div>
              <div class="count-field">
                <button type="button" class="minus-sign" :disabled="loading"
                  @click="adjustQuantityInCart(item.id, item.product.id, -1)">-</button>
                <div class="count">{{ item.qty }}</div>
                <button type="button" class="plus-sign" :disabled="loading"
                  @click="adjustQuantityInCart(item.id, item.product.id, 1)">+</button>
              </div>
            </div>
          </td>
          <td class="total-del-td">
            <div class="price-deleteItem">
              <div class="subTotal">${{ item.final_total }}</div>
              <div class="deleteItem">
                <button name="delete-btn" class="delete-btn" :disabled="loading"
                  @click="deleteOneProductFromCart(item.id)">
                  刪除
                </button>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td>
            <div class="clear-totalPrice">
              <div class="clear-all">
                <button name="clear-btn" class="clear-btn" :disabled="loading" @click="clearAllProductsFromCart">
                  清空購物車
                </button>
              </div>
              <div class="totalPrice">${{ totalPrice }}</div>
            </div>
          </td>
          <td>
            <button type="button" name="submit" class="checkout" @click="closeCart('checkout')" :disabled="loading">確認訂單</button>
          </td>
        </tr>
      </tfoot>
    </table>
  </div>
  <div class="overlay" v-if="showOverlay"></div>
  <!-- 依據showMobileMenu的布林值來決定是否為'navbar'加上這個CSS樣式'show-mobile-menu', 如果布林值為true, 則會加上該樣式; 反之, 則不會加上該樣式; 這種方式稱為"條件式CSS"或"動態CSS", 可根據元件的狀態或資料變化, 動態地添加或刪除CSS樣式名稱, 藉此控制元素的樣式 -->
  <div class="navbar" :class="{ 'show-mobile-menu': showMobileMenu }">
    <router-link to="/">
      <!--  使用圖片取代文字的技巧, 但對於使用螢幕閱讀器的人士將無法理解這張圖片, 故使用aria-label屬性並為其加上具體描述, 使螢幕閱讀器能夠閱讀出該段訊息 -->
      <h1 class="title" aria-label="白色的中文字寫著餐廳的名字--米諾可義式餐廳">米諾可義式餐廳</h1>
    </router-link>
    <div class="nav-links">
      <font-awesome-icon icon="fa-solid fa-bars" class="m-menu" @click="toggleMobileMenu" />
      <ul class="menu">
        <li>
          <router-link class="links" to="/aboutUs" @click="toggleMobileMenu">關於我們</router-link>
        </li>
        <li>
          <router-link class="links" to="/booking" @click="toggleMobileMenu">線上訂位</router-link>
        </li>
        <li>
          <router-link class="links" to="/product" @click="setCategoryToStore('')">美味餐點</router-link>
        </li>
        <!-- <li>
          <router-link class="links" to="/favoritesList" @click="toggleMobileMenu">收藏清單</router-link>
        </li> -->
      </ul>
      <div class="cart-icon" @click="showCart">
        <font-awesome-icon icon="fa-solid fa-cart-arrow-down" class="shopping-cart-arrow" />
        <div class="cart-count-container">
          <div class="cart-count" v-if="itemsInCartLoaded">{{ itemsInCart.carts.length }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 因為在這個元件內要取得Pinia的資料狀態, 故需要先匯入相關的Store
import productsStore from '@/stores/productsStore';
import { mapState, mapActions } from 'pinia';
import { useToast } from 'vue-toastification';

export default {
  data() {
    return {
      showOverlay: false,
      showMobileMenu: false,
      cartMenuRight: '-100%',
      updateProductData: {
        product_id: '',
        qty: '',
      },
      loading: false,
      itemsInCartLoaded: false,
    };
  },
  methods: {
    // ...mapActions(productsStore, ['getSingleProduct']),
    ...mapActions(productsStore, ['getItemsFromCart']),
    ...mapActions(productsStore, ['putItemsToCart']),
    ...mapActions(productsStore, ['deleteItemFromCart']),
    ...mapActions(productsStore, ['clearItemsOfCart']),
    ...mapActions(productsStore, ['setProductCategory']),
    toggleMobileMenu() {
      this.showMobileMenu = !this.showMobileMenu;
    },
    showCart() {
      if (this.cartMenuRight !== '0%') {
        this.cartMenuRight = '0%';
        this.showOverlay = true;
      } else {
        this.cartMenuRight = '-100%';
      }
    },
    closeCart(action) {
      this.cartMenuRight = '-100%';
      this.showOverlay = false;
      if (action === 'checkout') {
        this.$router.push({ path: 'checkOrder' });
      }
    },
    getCountOfItem(productId) {
      // 取得在購物車內該筆資料的id(即item.id), 而非該筆商品本身的product id (item.product.id)
      const getItemData = this.itemsInCart.carts.find((item) => item.id === productId);
      // 回傳該筆資料的當前數量
      return getItemData.qty;
    },
    // 要調整購物車內某一品項的數量時, 要將該品項的id(itemId), 該商品自身id(productId)與想要增加或減少的數量(+1/-1, 即此處number)當作參數
    async adjustQuantityInCart(itemId, productId, number) {
      try {
        // 當開始進行購物車商品的數量調整時, 將loading設為true, 藉此改變各按鈕的對應樣式
        this.loading = true;
        // 將購物車內該筆資料的id當參數傳入, 藉此取得該筆資料當前的數量
        const countOfItem = this.getCountOfItem(itemId);
        // 將現有數量加上+1/-1之後, 呼叫修改購物車商品數量API的方法
        this.updateProductData.product_id = productId;
        this.updateProductData.qty = countOfItem + number;
        // 使用await關鍵字, 當購物車商品數量修改完成後, 才執行更新購物車資料的方法; 修改商品數量時, 要分別附上購物車內該品項id(在此為itemId)以及該商品自身的id(在此為product_id)
        await this.putItemsToCart(itemId, this.updateProductData);
        this.getItemsFromCart();
      } catch (error) {
        console.log(`調整購物車內的商品數量時, 發生錯誤:${error.message}`);
        throw error.message;
      } finally {
        // 當購物車商品的數量調整結束, 將loading設為false, 各按鈕的樣式恢復原樣
        this.loading = false;
      }
    },
    // 刪除購物車內單一品項
    async deleteOneProductFromCart(itemId) {
      try {
        const toast = useToast();
        // 當開始進行購物車商品的數量調整時, 將loading設為true, 藉此改變各按鈕的對應樣式
        this.loading = true;
        // 使用await關鍵字, 當購物車商品刪除完成後, 才執行更新購物車資料的方法; 此為購物車內該品項id(在此為itemId)
        await this.deleteItemFromCart(itemId);
        toast.success('已刪除！', {
          timeout: 1500,
        });
        this.getItemsFromCart();
      } catch (error) {
        console.log(`刪除購物車內單一品項時, 發生錯誤:${error.message}`);
        throw error.message;
      } finally {
        // 當刪除行為結束後, 將loading設為false, 各按鈕的樣式恢復原樣
        this.loading = false;
      }
    },
    // 清除購物車內所有品項
    async clearAllProductsFromCart() {
      try {
        const toast = useToast();
        // 當開始進行清除購物車內所有商品時, 將loading設為true, 藉此改變各按鈕的對應樣式
        this.loading = true;
        // 使用await關鍵字, 當購物車內商品全數清除後, 才執行更新購物車資料的方法
        await this.clearItemsOfCart();
        toast.success('已清空購物車！');
        this.getItemsFromCart();
      } catch (error) {
        console.log(`刪除購物車內所有品項時, 發生錯誤:${error.message}`);
        throw error.message;
      } finally {
        // 當刪除行為結束後, 將loading設為false, 各按鈕的樣式恢復原樣
        this.loading = false;
      }
    },
    // 將商品分類(設為''空字串, 亦即要顯示所有商品資料)設定到pinia store內的變數, 以利在商品頁一打開來之前, 先確認是否該變數已被設定某個分類內容, 如有則顯示對應的分類商品資料; 否則就顯示所有商品資料
    async setCategoryToStore(category) {
      this.toggleMobileMenu();
      await this.setProductCategory(category);
    },
  },
  computed: {
    ...mapState(productsStore, ['itemsInCart']),
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
  mounted() {
    this.getItemsFromCart();
  },
  watch: {
    itemsInCart: {
      immediate: true,
      handler() {
        if (this.itemsInCart && this.itemsInCart.carts) {
          this.itemsInCartLoaded = true;
        }
      },
    },
  },
};
</script>
