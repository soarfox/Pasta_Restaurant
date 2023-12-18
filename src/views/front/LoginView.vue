<template>
  <header class="header" id="header">
    <div class="login-banner" aria-label="義大利的羅馬競技場">
    </div>
  </header>
  <main>
    <div class="login">
      <div class="title">
        <span class="slogan">管理者登入</span>
      </div>
      <div class="login-field">
        <div class="title">歡迎回來</div>
        <form class="table">
          <div class="email">
            <label for="email">Email</label>
            <div class="input-email">
              <font-awesome-icon icon="fa-regular fa-envelope" class="mail-icon" />
              <input type="email" name="email" id="email">
            </div>
          </div>
          <div class="password">
            <label for="password">Password</label>
            <div class="input-password">
              <font-awesome-icon icon="fa-solid fa-lock" class="lock-icon" />
              <input type="password" name="password" id="password">
            </div>
          </div>
          <div class="buttons">
            <input class="button-cancel" name="button-cancel" type="reset" value="取消">
            <button class="button-login" name="button-login"  @click="login()">登入</button>
          </div>
        </form>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  methods: {
    login() {
      this.$router.push({ path: '/' });
    },
  },
};
</script>
