<template>
  <div class="footer">
    <div class="about-brand">
      <div class="about">
        <div class="title">
          關於 米諾可義式餐廳
        </div>
        <p>成立於2019年，擁有豐富的義大利料理傳統和創新經驗。我們並堅持以新鮮、優質的食材為基底，搭配專業主廚的精湛廚藝，呈現一系列美味的義大利料理，給您絕佳的美食盛宴。</p>
      </div>
      <div class="brand-social">
        <div class="title">
          <router-link to="/">
            <img src="@/assets/images/icon/logo_brown.svg" width="245" height="49" alt="咖啡色中文寫著餐廳的名字">
          </router-link>
        </div>
        <ul class="social-media">
          <li>
            <a href="#">
              <font-awesome-icon icon="fa-brands fa-square-google-plus" class="google-plus" />
            </a>
          </li>
          <li>
            <a href="#">
              <font-awesome-icon icon="fa-brands fa-twitter" class="twitter" />
            </a>
          </li>
          <li>
            <a href="#">
              <font-awesome-icon icon="fa-brands fa-square-facebook" class="facebook" />
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="declaration">
      <span>僅供個人練習，無商業用途</span>
      <router-link class="nav-link" to="/login">
        <font-awesome-icon icon="fa-solid fa-user-gear" />
      </router-link>
    </div>
  </div>
</template>
