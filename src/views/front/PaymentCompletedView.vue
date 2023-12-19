<template>
  <main>
    <ul class="steps">
      <li>Step1. <span>建立訂單</span></li>
      <li>Step2. <span>確認付款</span></li>
      <li class="current-step">Step3. <span>完成訂購</span></li>
    </ul>
    <div class="completedMessage">
      <div class="title">
        <font-awesome-icon icon="fa-solid fa-truck" class="small-cart-icon" />
        感謝您的訂購！
      </div>
      <div class="notice">
        <span>餐點將儘速送抵指定的地點；如有任何問題，歡迎聯絡我們：<a href="tel:+886 2 2200-1234" aria-label="打這隻電話號碼給商店業者">(02)2200-1234</a>
        </span>
        <span>祝福您有美好的一天！</span>
      </div>
      <router-link to="/" class="goHome">返回首頁</router-link>
    </div>
  </main>
</template>
