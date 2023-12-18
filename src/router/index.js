import { createRouter, createWebHashHistory } from 'vue-router';
// import pageTestView from '@/views/pageTestView.vue';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/views/FrontLayout.vue'),
      children: [
        {
          path: '',
          component: () => import('@/views/front/HomeView.vue'),
        },
        {
          path: 'aboutUs',
          component: () => import('@/views/front/AboutUsView.vue'),
        },
        {
          path: 'product',
          component: () => import('@/views/front/ProductView.vue'),
        },
        {
          path: 'booking',
          component: () => import('@/views/front/BookingView.vue'),
        },
        {
          path: 'login',
          component: () => import('@/views/front/LoginView.vue'),
        },
        {
          // 適用於在網站首頁按下商品分類的按鈕時, 要動態把分類名稱代入並顯示對應的分類商品
          path: 'product/:category',
          // 為了要從首頁傳遞商品分類的router參數到這個頁面來, 故必須要使用name來為此頁面做命名
          name: 'product',
          component: () => import('@/views/front/ProductView.vue'),
          // 此處需要定義一個要傳遞的參數, 例如: category, 且在ProductsView.vue內要使用props來接收它
          // console.log('這是在路由表內的console.log, 將route內容顯示出來:', route)
          props: (route) => ({ category: route.params.category }),
        },
        {
          path: 'detailedProduct/:id',
          name: 'detailedProduct',
          component: () => import('@/views/front/DetailedProductView.vue'),
          // 使用 props: true 來啟用將路由參數作為組件的 props 來傳遞, 也許下方要改成true
          props: (route) => ({ id: route.params.id }),
        },
        {
          path: 'checkOrder',
          component: () => import('@/views/front/CheckOrderView.vue'),
        },
        {
          path: 'payment',
          component: () => import('@/views/front/PaymentView.vue'),
        },
        {
          path: 'paymentCompleted',
          component: () => import('@/views/front/PaymentCompletedView.vue'),
        },
        // {
        //   path: 'favoritesList',
        //   component: () => import('@/views/front/FavoritesListView.vue'),
        // },
      ],
    },
  ],
  scrollBehavior(to) {
    // console.log('to, from, savedPosition', to, from, savedPosition);
    // 如果使用者跳到特定頁面時, 例如:'products', 想要觸發滾動的行為, 則可以這樣寫, 否則, 預設是不做滾動行為, 即return {}, 但現在希望只要是在根目錄底下的所有頁面都要滾動到最上方, 故寫match('/')
    if (to.fullPath.match('/')) {
      return {
        // 即可滾動到最上方(距離top為0)
        top: 0,
      };
    }
    return {};
  },
});

export default router;
