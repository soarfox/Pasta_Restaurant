<template>
  <header class="header" id="header">
    <div class="product-banner"
      aria-label="大理石桌面上正中央擺著一碗尚未煮的蝴蝶形義大利麵, 其碗的左側散落在桌面上的是筆管麵, 兩顆牛蕃茄和一些蝴蝶形義大利麵, 其碗的右側散落在桌面上的是幾塊起司丁, 幾顆橄欖果實和幾株九層塔">
    </div>
  </header>
  <main>
    <!-- Loading 效果 -->
    <div v-if="isLoadingNow" class="loading-container">
      <img src="@/assets/images/product/loading_flaticon.png" alt="loading icon" class="loading-image" />
    </div>
    <div class="cart">
      <div class="categories">
        <div class="text">
          <font-awesome-icon icon="fa-solid fa-trophy" class="trophy" />
          美味餐點
          <!-- <button type="button" @click="updatePrice">更新price</button> -->
        </div>
        <ul class="meal-menu">
          <li v-for="item in categories" :key="item.id" :class="{ 'selected': selectedCategory === item.englishName }">
            <router-link to="/product" @click="setCategoryToStore(item.englishName)"> {{ item.chineseName }}({{
              getCategoryCount[item.englishName] }})
            </router-link>
          </li>
        </ul>
      </div>
      <div class="meal-info">
        <ul class="meal-cards">
          <!-- 此處使用從Pinia store內取得的API商品資料且依照商品分類排序 -->
          <li v-for="(product, index) in showProducts" :key="product.id">
            <button class="heartBtn">
              <!-- 將fontAwesome圖示使用V-bind綁定其值, 並且以不同的fontAwesome前綴詞進行圖示風格的切換動作 -->
              <font-awesome-icon :icon="heartIcon[index]" @click="fillLikeIcon(index)" />
            </button>
            <router-link :to="'/detailedProduct/' + product.id">
              <img class="meal-img" :src="product.imageUrl" alt="左邊是一大把的美生菜, 右邊是一個雙層牛肉漢堡, 漢堡裡面夾雜著一片起司與幾片新鮮番茄">
            </router-link>
            <!-- <div class="ribbon-wrapper">
              <div class="tag">熱銷美食</div>
            </div> -->
            <div class="title">{{ product.title }}</div>
            <div class="eng-title">{{ product.category }}</div>
            <div class="border-line"></div>
            <div class="price">
              <font-awesome-icon icon="fa-solid fa-dollar-sign" class="dollar-sign" />
              {{ product.price }}
            </div>
            <button name="add-cart" class="add-cart" @click="addProductToCart(product.id, 1)">
              <!-- 當按下'加入購物車'按鈕後, 隱藏原本的購物車圖示(font-awesome-icon)並顯示旋轉的小圈圈動畫  -->
              <div class="adding-animation">
                <div :class="{ 'cart-loading-icon': addToCartStatus[product.id] }"></div>
              </div>
              <font-awesome-icon v-if="!addToCartStatus[product.id]" icon="fa-solid fa-cart-shopping" class="small-cart-icon" />
              加入購物車
            </button>
          </li>
        </ul>
      </div>
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
      isLoadingNow: true,
      selectedCategory: '',
      // 保存每個商品的加入購物車狀態
      addToCartStatus: {},
      categories: [
        {
          chineseName: '全部分類',
          englishName: '',
        },
        {
          chineseName: '爽口青醬',
          englishName: 'PestoPasta',
        },
        {
          chineseName: '酸甜紅醬',
          englishName: 'TomatoPasta',
        },
        {
          chineseName: '香醇白醬',
          englishName: 'CreamyPasta',
        },
      ],
      showProducts: {},
      isRegularStyle: [true, true, true, true, true, true, true, true, true, true, true, true],
      addProductData: {
        product_id: '',
        qty: '',
      },
      pastaCategoryCount: {
        pestoCount: '',
        tomatoCount: '',
        creamyCount: '',
      },
    };
  },
  // 在Vue裡頭要取用Pinia的方法, 故需要在methods內使用解構的方式
  methods: {
    // 當使用者點擊愛心時, fillLikeIcon(index)方法會切換isRegularStyle中對應的值, 藉此觸發 heartIcon重新計算, 並更新愛心圖示的樣式(填滿或空白)
    fillLikeIcon(index) {
      this.isRegularStyle[index] = !this.isRegularStyle[index];
      // console.log(index);
    },
    // 使用解構(...)方式並帶入兩個參數, 一個是Store Name, 另一個是Store內的actions; 如要使用請記得引入mapActions方法, 且在上方的template內,記得使用@click='getAllProductsAction'來呼叫此方法; 或者在mounted()生命週期內使用this.getAllProductsAction();進行呼叫
    ...mapActions(productsStore, ['getAllProductsAction']),
    ...mapActions(productsStore, ['postItemToCart']),
    ...mapActions(productsStore, ['getItemsFromCart']),
    ...mapActions(productsStore, ['setProductCategory']),
    async addProductToCart(productId, number) {
      // 將此商品的'加入購物車'狀態設為true, 以利套用cart-adding-icon的CSS樣式
      // 當this.addToCartStatus[productId] = true時,Vue3會自動追蹤這個設定內容, 無需額外使用 this.$set(Vue2寫法)
      this.addToCartStatus[productId] = true;
      // console.log(this.addToCartStatus);
      const toast = useToast();

      this.addProductData.product_id = productId;
      this.addProductData.qty = number;
      // 將要加入購物車的商品id及數量1設定好之後, 呼叫"新增商品到購物車API", 且等待確認完成後才更新購物車資料
      await this.postItemToCart(this.addProductData);
      this.addToCartStatus[productId] = false;
      // console.log(this.addToCartStatus);
      toast.success('已加入購物車！');
      this.getItemsFromCart();
    },
    // 將商品分類設定到pinia store內的變數, 以利在商品頁一打開來之前, 先確認是否該變數已被設定某個分類內容, 如有則顯示對應的分類商品資料; 否則就顯示所有商品資料
    async setCategoryToStore(category) {
      this.selectedCategory = category;
      // console.log(this.selectedCategory);
      await this.setProductCategory(category);
      // console.log(`category已修改為${category}`);
    },
  },
  computed: {
    heartIcon() {
      // 由於Font Awesome圖示是透過font-awesome-icon元件來使用, 而該元件不接受直接修改class name屬性來更改其圖示風格, 故選擇另一種方式: 在Font Awesome圖示的名稱是由2部分組成的字串陣列, 分別由'前綴詞'及'圖示名稱'組成; 前綴詞far是代表fontAwesome的regular套件；而fas則是fontAwesome的solid套件, 而後方'heart'則為圖示的名稱; 因此透過使用不同的前綴詞, 將可改變圖示的風格 (注意: 所要使用任何圖示都必須要先在main.js檔案內完成元件註冊後, 方可使用)
      return this.isRegularStyle.map((state) => (state ? ['far', 'heart'] : ['fas', 'heart']));
    },
    // 使用解構(...)方式並帶入兩個參數, 一個是productsStore.js內自定義的Store Name, 另一個是Store內的state內容和getters內容, 可針對想使用的state/getters才寫上, 舉例 ...mapState(productsStore, ['allPastaProducts', 'sortProductsByCategory']), 並將本頁template內的v-for="item in products"的products改成sortProductsByCategory, 並確認此Vue是否已能正確呈現資料
    ...mapState(productsStore, ['productCategory', 'categorizedProducts', 'sortProductsByCategory']),
    // 若想要在此Vue元件做排序, 可參考下方, 在此使用自定義的方法進行排序後回傳資料
    // ...mapState(productsStore, ['products']),
    // sortedProductsByPrice() {
    //   return [...this.products].sort((a, b) => a.price - b.price);
    // },
    // 當各分類的商品數量有變化時, 將自動更新到畫面上
    getCategoryCount() {
      return {
        '': this.sortProductsByCategory.length,
        PestoPasta: this.pastaCategoryCount.pestoCount,
        TomatoPasta: this.pastaCategoryCount.tomatoCount,
        CreamyPasta: this.pastaCategoryCount.creamyCount,
      };
    },
  },
  mounted() {
    // 將Pinia store內的商品資料取出來使用, this指向當前Vue實例, 因此可透過 this來拜訪Vue實例的各種屬性和方法; 補充: Vue 2.x的寫法是this.$store.productsStore.getAllProductsAction(); 但在Vue 3.x中, 使用Pinia時可以直接透過this訪問store, 而不再需要寫$store
    // this.showProducts = this.getAllProductsAction();
    // this.pestoPastaCount = this.categorizedProducts.PestoPasta.length;
  },
  watch: {
    // 針對此變數進行持續監聽
    categorizedProducts: {
      // watch的immediate: true選項會使handler在元件初始化時就立即執行一次if判斷式, 即使初始化當時this.categorizedProducts值為undefined, 因此if判斷式不會成立, 但若在元件後續生成過程中, this.categorizedProducts一旦發生了變化, 則handler會再次執行if判斷式, 故能夠抓取到變化後的值; 換言之, watch會持續等待this.categorizedProducts被設定並產生變化後, 將再次執行handler內的if判斷式, 達到持續不斷監聽的效果
      immediate: true,
      handler(newVal) {
        // console.log('this.categorizedProducts舊值:', oldVal);
        // console.log('this.categorizedProducts新值:', newVal);

        // 假如新值的PestoPasta內容是存在的, 則更新其資料長度
        if (newVal.PestoPasta) {
          this.pastaCategoryCount.pestoCount = newVal.PestoPasta.length;
        }
        if (newVal.TomatoPasta) {
          this.pastaCategoryCount.tomatoCount = newVal.TomatoPasta.length;
        }
        if (newVal.CreamyPasta) {
          this.pastaCategoryCount.creamyCount = newVal.CreamyPasta.length;
        }
      },
    },
    productCategory: {
      immediate: true,
      handler(newCategory) {
        // 根據新的分類值顯示對應的新資料在畫面上
        if (newCategory === 'PestoPasta') {
          this.showProducts = this.categorizedProducts.PestoPasta;
        } else if (newCategory === 'TomatoPasta') {
          this.showProducts = this.categorizedProducts.TomatoPasta;
        } else if (newCategory === 'CreamyPasta') {
          this.showProducts = this.categorizedProducts.CreamyPasta;
        } else {
          this.showProducts = this.sortProductsByCategory;
        }
      },
    },
  },
  // 進入此產品頁元件之前, 先進行產品分類的判斷; 但在beforeRouteEnter方法內, this並不指向Vue實例, 因此無法直接使用this存取本Vue元件的屬性或方法, 因為beforeRouteEnter方法是在Vue實例未創建的階段執行, 因此無法存取到Vue實例的內容; 但可使用一個callback函式, 這個callback函式會在路由進入後執行, 並將Vue實例作為參數傳入
  beforeRouteEnter(to, from, next) {
    next(async (vm) => {
      const myVm = vm;
      // 如果排序後的所有商品資料的變數長度為0, 代表尚未觸發取得商品資料過, 故先取得一次所有商品資料並且在pinia store內進行排序與商品分類完成, 以利後續使用
      if (myVm.sortProductsByCategory.length === 0) {
        await myVm.getAllProductsAction();
        // console.log('已呼叫取得所有商品API完成');
      }

      // 如果是點擊網站首頁下方的商品分類圖片進來本元件者, 則會有一個對應的商品分類的值已經存在於pinia store內, 故取出來並針對其內容顯示對應的分類商品資料在畫面上; 若無分類的值, 則代表是點擊導覽列進來者, 則印出所有商品資料
      if (myVm.productCategory === 'CreamyPasta') {
        myVm.showProducts = await myVm.categorizedProducts.CreamyPasta;
      } else if (myVm.productCategory === 'TomatoPasta') {
        myVm.showProducts = await myVm.categorizedProducts.TomatoPasta;
      } else if (myVm.productCategory === 'PestoPasta') {
        myVm.showProducts = await myVm.categorizedProducts.PestoPasta;
      } else {
        myVm.showProducts = myVm.sortProductsByCategory;
      }
      myVm.isLoadingNow = false;
      // 將外部傳進來的變數值(myVm.productCategory)設給本頁的變數(myVm.selectedCategory)儲存, 藉此套用已預先寫好的商品分類的CSS樣式
      myVm.selectedCategory = myVm.productCategory;
    });
  },
};
</script>
