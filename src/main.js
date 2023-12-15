import { createApp } from 'vue';
// 引入創建Pinia的方法
import { createPinia } from 'pinia';
import axios from 'axios';
import VueAxios from 'vue-axios';
import {
  Field, Form, ErrorMessage, defineRule, configure,
} from 'vee-validate';
import {
  required, digits, email, integer,
} from '@vee-validate/rules';
import { localize } from '@vee-validate/i18n';
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json';
import Toast from 'vue-toastification';
// Import the CSS or use your own!
import 'vue-toastification/dist/index.css';

// Font awesome的套件安裝過程請參考官網: https://fontawesome.com/docs/web/use-with/vue/, 且依照圖示的不同風格(regular/solid等)可自行選擇用npm指令安裝相對的套件, 且看完該頁記得按下'Add Some Icon'按鈕, 接續看下一頁的介紹藉此完成整個圖示引用與使用流程
// 引用fontawesome的核心內容
import { library } from '@fortawesome/fontawesome-svg-core';
// 引用fontawesome的圖示元件(component)
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
// 將想使用的fontawesome圖示都引用進來, 若是相同圖示但是不同風格, 則依照它是solid/regular/light等等類別修改引用來源
import { faHeart as farHeart, faEnvelope } from '@fortawesome/free-regular-svg-icons';
import {
  faHeart as fasHeart, faCartShopping, faUtensils, faChessQueen, faMagnifyingGlass, faDollarSign, faCartArrowDown, faTrophy, faBagShopping, faUserGear, faLock, faBars, faTruck,
} from '@fortawesome/free-solid-svg-icons';
import { faSquareGooglePlus, faTwitter, faSquareFacebook } from '@fortawesome/free-brands-svg-icons';

import App from './App.vue';

import router from './router';
// import globalMixins from './mixins/globalMixins';

// 把多種風格的圖示都加入fontawesome的圖片庫內, 以利在vue畫面元件內使用
library.add(farHeart, fasHeart, faCartShopping, faChessQueen, faEnvelope, faLock, faBars, faUtensils, faMagnifyingGlass, faDollarSign, faTrophy, faBagShopping, faUserGear, faCartArrowDown, faSquareGooglePlus, faTwitter, faSquareFacebook, faTruck);

// (暫不需使用全域混入)將全域混入對象加入app元件內, 使得各元件內都可以使用全域混入的內容
// app.mixin(globalMixins);

// 註冊VeeValidate的單一規則(也可一次引用所有規則, 但建議有用到者才進行註冊)
defineRule('required', required);
defineRule('digits', digits);
defineRule('email', email);
defineRule('integer', integer);

// 轉換VeeValidate的語系, 這一行務必要寫, 才能正確引用對應的多國語系
localize({ zhTW });

// 設定VeeValidate的規則
configure({
  // 因為上方有引用zh-TW.json檔案並命名為zhTW, 因此當VeeValidate套件需要將錯誤驗證訊息進行翻譯時, 將會使用zhTW內所定義的中文翻譯資訊
  generateMessage: localize('zhTW', {
    names: {
      // 在錯誤訊息內, 將input元素的name名稱為name的那個欄位, 將改成用繁體中文'姓名'來替代之
      // 下方為餐廳訂位頁的需填寫項目
      name: '姓名',
      tel: '手機號碼',
      people: '大人人數',
      children: '小孩人數',
      highChair: '兒童座椅數量',
      date: '預約日期',
      time: '預約時段',
      // 下方為訂購資料頁的需填寫項目
      email: '電子信箱',
      address: '收件者地址',
    },
  }),
  // 當輸入文字時, 就立即進行驗證
  validateOnInput: true,
});

const toastOptions = {
  // 設定全域的toast設定; 至於往下和往左位移的scss設定則寫在src\assets\scss\vue-toastification\vueToastification.scss
  timeout: 2500,
  maxToasts: 5,
  transition: 'Vue-Toastification__fade',
};

// 建立pinia實體
const pinia = createPinia();
const app = createApp(App);
// 在vue的環境中使用pinia, 使得vue的環境跟pinia進行綁定
app.use(pinia);
app.use(router);
app.use(VueAxios, axios);
// 將id為app的元素掛載fontawesome元件
app.component('font-awesome-icon', FontAwesomeIcon);
// 為這些VeeValidate元件進行全域註冊並重新命名, 以避免跟HTML元素相似或衝突
app.component('VForm', Form);
app.component('VField', Field);
app.component('ErrorMessage', ErrorMessage);
app.use(Toast, toastOptions);
// 將Vue的實體掛載到id名稱為app的元素身上; 為了確保Vue實體已經被正確設置, 通常建議將app.mount('#app');一律放在所有設定的最後面
app.mount('#app');
