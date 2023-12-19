<template>
  <div class="wrap">
    <NavbarComponent></NavbarComponent>
    <RouterView></RouterView>
    <FooterComponent></FooterComponent>
    <div>
      <img v-if="showGoTop" class="go-top" src="@/assets/images/icon/upArrow_flaticon.png" alt="Go Top" @click="goTop()">
    </div>
  </div>
</template>

<script>
import { RouterView } from 'vue-router';
import NavbarComponent from '@/components/front/navbarComponent.vue';
import FooterComponent from '@/components/front/footerComponent.vue';

export default {
  data() {
    return {
      // 控制是否顯示Go Top按鈕
      showGoTop: false,
    };
  },
  components: {
    RouterView, NavbarComponent, FooterComponent,
  },
  methods: {
    goTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    },
    handleScroll() {
      // 當視窗被向下滾動的高度已大於200時, 才會顯示Go Top圖示按鈕; 否則便隱藏它
      this.showGoTop = window.scrollY > 200;
    },
  },
  mounted() {
    // 監聽滾動事件, 用來為指定的事件（scroll事件）附加一個事件處理函式, 當該事件發生時就會執行這個函式, 因此在此是根據當前滾動的視窗高度來控制'是否顯示Go Top圖示按鈕'
    window.addEventListener('scroll', this.handleScroll);
  },
  // beforeUnmount()也是生命週期的一種, 因有在mounted()生命週期中, 使用事件監聽器, 故元件被卸載(unmount)之前, 應先將事件監聽器移除掉, 以防止記憶體洩漏問題(指程式中動態分配的記憶體在不再需要時, 沒有被正確地釋放, 導致該部分記憶體無法再被使用, 最終導致系統的可用記憶體減少, 可能導致系統性能下降, 甚至程式崩潰, 故建議要養成良好習慣, 有新增事件監聽器時, 記得要在元件被卸載之前, 先將事件監聽器移除掉; 雖然在此處go top只是被隱藏而非被整個FrontLayout元件被卸載, 但仍要養成好習慣)
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
};
</script>

<style lang="scss">
  @import '@/assets/scss/layout/frontLayout.scss';
</style>
