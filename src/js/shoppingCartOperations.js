// 因為已經在main.js內已經註冊全域套件vue-axios了, 故在此只要引用axios套件, 下方即可使用全域套件vue-axios
import axios from 'axios';

// 當使用vue-axios套件時, 它會將axios實例注入到Vue實例中, 並且提供一個方便的 $http(自訂義名稱)實例方法, 如此就可在Vue元件中使用$http進行HTTP請求
const $http = axios.create({
  baseURL: 'https://ec-course-api.hexschool.io/v2/api/cheetah116/cart',
});

// 取得購物車的所有資料
const getProductsFromCart = async () => {
  try {
    // 此處取得購物車資料, 故使用.get();
    const response = await $http.get();
    // console.log(response);
    return response.data.data;
  } catch (error) {
    console.log('在call API \'get shopping cart data\' 時發生錯誤');
    // 將錯誤訊息往外拋, 並由Pinia store內的catch繼續往外拋出此錯誤訊息
    throw error.response;
  }
};

// 修改購物車內的商品數量
const putProductsToCart = async (itemId, updateData) => {
  try {
    // 此處修改購物車內商品數量, 故使用.put();
    const response = await $http.put(`https://ec-course-api.hexschool.io/v2/api/cheetah116/cart/${itemId}`, { itemId, data: updateData });

    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.log('在call API \'put shopping cart data\' 時發生錯誤');
    // 將錯誤訊息往外拋, 並由Pinia store內的catch繼續往外拋出此錯誤訊息
    throw error.response;
  }
};

// 把商品加入購物車
const postProductToCart = async (postData) => {
  try {
    // 此處要把商品加入購物車內, 故使用.post();
    const response = await $http.post('https://ec-course-api.hexschool.io/v2/api/cheetah116/cart', { data: postData });

    // console.log(response);
    return response.data;
  } catch (error) {
    console.log('在call API \'post data to shopping cart\' 時發生錯誤');
    // 將錯誤訊息往外拋, 並由Pinia store內的catch繼續往外拋出此錯誤訊息
    throw error.response;
  }
};

// 刪除購物車內單一商品
const deleteProductFromCart = async (itemId) => {
  try {
    // 此處刪除購物車內單一商品, 故使用.delete();
    const response = await $http.delete(`https://ec-course-api.hexschool.io/v2/api/cheetah116/cart/${itemId}`);

    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.log('在call API \'delete one item from shopping cart\' 時發生錯誤');
    // 將錯誤訊息往外拋, 並由Pinia store內的catch繼續往外拋出此錯誤訊息
    throw error.response;
  }
};

// 清除購物車內所有商品資料
const clearCart = async () => {
  try {
    // 此處清除購物車內所有商品資料, 故使用.delete()且API尾字是'carts', 跟刪除單一商品的'cart/${itemId}'不同
    const response = await $http.delete('https://ec-course-api.hexschool.io/v2/api/cheetah116/carts');

    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.log('在call API \'clear shopping cart\' 時發生錯誤');
    // 將錯誤訊息往外拋, 並由Pinia store內的catch繼續往外拋出此錯誤訊息
    throw error.response;
  }
};

export {
  getProductsFromCart, putProductsToCart, postProductToCart, deleteProductFromCart, clearCart,
};
