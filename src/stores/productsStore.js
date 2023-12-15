// 匯入 defineStore 的方法
import { defineStore } from 'pinia';

// 使用解構賦值的方式來引入函數
import getAllProducts from '@/js/productOperations';
import {
  getProductsFromCart, putProductsToCart, postProductToCart, deleteProductFromCart, clearCart,
} from '@/js/shoppingCartOperations';
import { postCartToOrder, submitOrderForPayment } from '@/js/orderOperations';

// 使用defineStore方法建立一個store, 該方法有兩個參數, 第一個是自定義的store名稱, 第二個是一個物件
export default defineStore('productsStore', {
  // 在Vue裡面data, methods, computed這三者分別對應
  // 在Pinia裡的state, actions, getters
  state: () => ({
    products: [
      {
        id: 4,
        title: '444',
        engTitle: '444eng',
        imageUrl: '@/assets/images/product/pestoPasta_cover.webp',
        price: 4,
      },
      {
        id: 2,
        title: '222',
        engTitle: '222eng',
        imageUrl: '@/assets/images/product/pestoPasta_cover.webp',
        price: 2,
      },
      {
        id: 3,
        title: '333',
        engTitle: '333eng',
        imageUrl: '@/assets/images/product/pestoPasta_cover.webp',
        price: 3,
      },
    ],
    allPastaProducts: [],
    categorizedProducts: {},
    singleProductData: [],
    itemsInCart: [],
    newItemCount: '',
    userOrderInfo: {},
    orderResult: '',
    orderStatus: {},
    productCategory: '',
  }),
  // 此處getters以物件形式對應Vue3 option api寫法的computed
  getters: {
    // 將產品內容依照價格排序, 而a, b分別代表產品內的任一個物件, sort會一次拿兩個物件進行比較後, 產出最終排序結果
    sortProductsByPrice: (state) => state.allPastaProducts.sort((a, b) => a.price - b.price),
    // localeCompare是JavaScript中的一個字串方法, 用於比較字串; 它將返回一個數字, 參考字串（例如: a.category）會落在排序順序中是在給定字串（例如: b.category）的之前, 之後還是相同, 藉此將商品們依照進行分類
    sortProductsByCategory: (state) => state.allPastaProducts.sort((a, b) => a.category.localeCompare(b.category)),
  },
  // 此處actions以物件形式對應Vue3 option api寫法的methods
  actions: {
    // 取得所有商品資料, 並儲存在本store內的this.allPastaProducts裡
    async getAllProductsAction() {
      try {
        const result = await getAllProducts();
        this.allPastaProducts = result;

        // console.log('在呼叫取得所有商品資料API之前, 青醬商品資料為:', this.categorizedProducts.PestoPasta);

        // 這是reduce方法的callback函數, accumulator(累加器)參數代表累積的結果, 一開始是初始值(在這裡是空物件{}), product參數代表目前正在處理的陣列元素, 在此欲將所有產品依照其category的值進行分類, 分類完成後會得到this.categorizedProducts裡的3個物件, 分別是.CreamyPasta, .PestoPasta和.TomatoPasta, 這3個物件裡各有一個陣列, 陣列內包含己類的商品資料
        this.categorizedProducts = this.allPastaProducts.reduce((accumulator, product) => {
          // 取得商品的category值
          const { category } = product;

          // 檢查結果中是否已經有該類別的陣列, 若無, 則初始化為空陣列
          if (!accumulator[category]) {
            accumulator[category] = [];
          }

          // 將目前的product加入accumulator內
          accumulator[category].push(product);

          // 這個reduce函式回傳更新後的accumulator給this.categorizedProducts儲存
          return accumulator;
          // 初始值是一個空物件
        }, {});

        // 加上類別名稱即可印出對應資料, 例如: this.categorizedProducts.CreamyPasta
        // console.log(this.categorizedProducts);

        // console.log('在呼叫取得所有商品資料API完成之後, 青醬商品資料為:', this.categorizedProducts.PestoPasta);

        // console.log('取得所有商品資料:', this.allPastaProducts);
      } catch (error) {
        console.log('抓取API商品資料時發生錯誤, 錯誤訊息如下, 請洽網站管理員');
        // 將呼叫API時的錯誤訊息(來自getAllProducts.js檔的錯誤訊息)顯示在畫面上
        throw error;
      }
    },
    // 取得單一商品的資料(從pinia store內去尋找有符合filter條件的單一商品資料出來)
    getSingleProduct(productId) {
      const findProduct = this.allPastaProducts.find((item) => item.id === productId);
      this.singleProductData = findProduct;
    },
    // 取得當前的購物車資料
    async getItemsFromCart() {
      try {
        const result = await getProductsFromCart();
        this.itemsInCart = result;
      } catch (error) {
        console.log('將取出購物車內容時發生錯誤, 錯誤訊息如下, 請洽網站管理員');
        throw error;
      }
    },
    // 修改購物車內商品的數量, 該筆資料的品項id(itemId)以及要更新的商品資料(updateData, 包含: 商品id與想增加或減少的數量(+1/-1))
    async putItemsToCart(itemId, updateData) {
      try {
        const result = await putProductsToCart(itemId, updateData);
        this.newItemCount = result;
      } catch (error) {
        console.log('修改購物車商品數量時發生錯誤, 錯誤訊息如下, 請洽網站管理員');
        throw error;
      }
    },
    // 新增商品到購物車內
    async postItemToCart(postData) {
      try {
        await postProductToCart(postData);
      } catch (error) {
        console.log('加入購物車時發生錯誤, 錯誤訊息如下, 請洽網站管理員');
        throw error;
      }
    },
    // 刪除購物車內單一商品資料, 需使用在購物車內該資料的品項id(itemId)
    async deleteItemFromCart(itemId) {
      try {
        await deleteProductFromCart(itemId);
      } catch (error) {
        console.log('刪除購物車內單一商品資料時發生錯誤, 錯誤訊息如下, 請洽網站管理員');
        throw error;
      }
    },
    // 清除購物車內所有商品資料
    async clearItemsOfCart() {
      try {
        await clearCart();
      } catch (error) {
        console.log('清除購物車內所有商品資料時發生錯誤, 錯誤訊息如下, 請洽網站管理員');
        throw error;
      }
    },
    // 新增購物車資料到訂單內(一旦購物車內有資料, 則呼叫這支API本身就會自動把購物車內資料帶入訂單內, 故無需附加上購物車的資料)
    async postCartItemsToOrder(postData) {
      try {
        // 把使用者輸入的訂單資儲存在store內
        this.userOrderInfo = postData;
        // 呼叫加入訂單API, 並等待執行結果後把資料儲存在store內
        this.orderResult = await postCartToOrder(postData);
        // console.log('this.orderResult in store');
        // console.log(this.orderResult);
      } catch (error) {
        console.log('把購物車資料加入訂單時發生錯誤, 錯誤訊息如下, 請洽網站管理員');
        throw error;
      }
    },
    // 將訂單進行付款
    async postItemToPay(orderId) {
      try {
        // 呼叫加入訂單API, 並等待執行結果後把資料儲存在store內
        this.orderStatus = await submitOrderForPayment(orderId);
        // console.log('在pinia store內的訂單狀態如下');
        // console.log(this.orderStatus);
      } catch (error) {
        console.log('訂單付款時發生錯誤, 錯誤訊息如下, 請洽網站管理員');
        throw error;
      }
    },
    // 將使用者在首頁上點擊到的商品分類, 儲存於store的變數裡
    async setProductCategory(category) {
      try {
        this.productCategory = category;
        // console.log('在store內使用setProductCategory更新完成');
      } catch (error) {
        console.log('把商品分類儲存到store變數時發生錯誤, 錯誤訊息如下, 請洽網站管理員');
        throw error;
      }
    },
  },
});
