// 因為已經在main.js內已經註冊全域套件vue-axios了, 故在此只要引用axios套件, 下方即可使用全域套件vue-axios
import axios from 'axios';

// 當使用vue-axios套件時, 它會將axios實例注入到Vue實例中, 並且提供一個方便的 $http(自訂義名稱)實例方法, 如此就可在Vue元件中使用$http進行HTTP請求
const $http = axios.create({
  baseURL: 'https://ec-course-api.hexschool.io/v2/api/cheetah116/products/all',
});

const getAllProducts = async () => {
  try {
    // 此處取得所有商品資料, 故使用.get();
    const response = await $http.get();
    // console.log(response);
    return response.data.products;
  } catch (error) {
    console.log('在call all products API時發生錯誤');
    // 將錯誤訊息往外拋, 並由Pinia store內的catch繼續往外拋出此錯誤訊息
    throw error.response;
  }
};

export default getAllProducts;
