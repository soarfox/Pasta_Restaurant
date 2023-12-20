<template>
  <header class="header" id="header">
    <!--  因為使用圖片取代文字的技巧, 故在畫面上看不到文字, 但這樣對於一些使用螢幕閱讀器的人士來說將無法理解這張圖片的意思, 故使用aria-label屬性並為其加上具體描述, 使螢幕閱讀器能夠閱讀出該段訊息, 有助於相關人士理解這張圖片的意義  -->
    <div class="banner" aria-label="木桌上有一盤主餐, 裡面是一份金黃色的義大利直麵和一些蕃茄, 上頭搭配一些青蔥, 在這份主餐下方墊著一條紅白格子紋路的桌巾, 在主餐右方有擺放一根銀色的叉子">
      <div class="slogan">
        <h2>
          <span>令人陶醉的</span><span>味蕾饗宴</span>
        </h2>
        <h3>
          <span>在舌尖上展開的幸福滋味</span>
          <span>
            <font-awesome-icon icon="fa-solid fa-utensils" class="fork-icon" />
            義式蕃茄狂想曲
            <font-awesome-icon icon="fa-solid fa-utensils" class="fork-icon" />
          </span>
        </h3>
      </div>
    </div>
  </header>
  <main>
    <div class="features">
      <div class="why-delicious" id="feature">
        <div class="text">客人總是在詢問</div>
        <div class="middle-line"></div>
        <div class="text">這麼好吃的秘訣是什麼</div>
      </div>
      <div>
        <ul class="three-features">
          <li class="animatedFromLeftToRight" data-index="1">
            <img src="@/assets/images/index/feature_1.webp" alt="一瓶橄欖油, 塞子是軟木塞, 周圍散落著幾個綠色的橄欖果實">
            <h4>義大利原味橄欖油</h4>
            <p>豐富的單不飽和脂肪酸有助於心臟健康，同時具有抗氧化和抗發炎特性，能夠控制血糖，並能增添烹飪的多樣風味。</p>
          </li>
          <li class="animatedFromLeftToRight" data-index="2">
            <img src="@/assets/images/index/feature_2.webp"
              alt="一位身穿白色廚師袍的廚師, 胸前穿著一件黑色的料理圍裙, 廚師面向左方且雙手帶著白色的手套, 他正專注地以左手拿著平底鍋, 裡頭有一些料理到一半的食材, 他的右手拿著一根湯匙, 正在為食材進行調味">
            <h4>星級專業廚師</h4>
            <p>精通義大利美食的五星級飯店主廚，熟練運用新鮮的地中海食材，巧妙結合傳統與現代，呈現極致風味的義式料理。</p>
          </li>
          <li class="animatedFromLeftToRight" data-index="3">
            <img src="@/assets/images/index/feature_3.webp"
              alt="黑色的桌面上灑落著麵粉, 中央是一雙有利的手正在揉一大團黃色的麵團, 後方則是兩顆已經打開的雞蛋蛋殼與一張白色小麵皮">
            <h4>揉入情感的用心手作</h4>
            <p>匠心獨運的烹飪團隊，每道菜品都是用心製作，堅持手作精神，呈現美味的背後，是對烹飪的真摯熱愛。</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="chef" id="chef">
      <img class="chef-photo" src="@/assets/images/index/today_chef.webp"
        alt="一位主廚的側面照片, 他的前方是廚房的料理台, 台上有著八盤的相同的義式料理, 他左手拿著裝滿醬汁的鍋子, 右手拿著一根湯匙, 正專注地為食材進行最後的裝飾">
      <div class="chef-intro">
        <div class="chef-name">今日主廚：Giovanni</div>
        <ul class="chef-words">
          <li>
            <span>背景介紹：</span>
            Giovanni出生於義大利小鎮，是義大利烹飪藝術世家的傳人，具備三代傳承的烹飪技藝，透過在佛羅倫斯廚藝學院的學習，接受了嚴格的義式烹飪訓練，且在當地餐廳掌廚的時光，深入掌握了義大利各地食材的烹調方式。
          </li>
          <li>
            <span>料理專長：</span>
            細膩且用心地烹調方式，為的是將簡單而美味的義大利麵料理呈現在每一位客人面前，並展現廚師對料理的熱愛與對食材的極致追求。
          </li>
          <li>
            <span>想說的話：</span>
            我深信料理是文化的美味融合，也是一種將家鄉風土的呈現的絕佳方式，我們將竭盡所能讓您用餐的時光變成一場與美味料理的對話，致力於將義大利烹飪藝術展現得淋漓盡致，讓每位客人感受到濃郁的義大利風味。
          </li>
        </ul>
      </div>
    </div>
    <div class="responses">
      <div class="title">聽聽別人的感想</div>
      <ul class="customers">
        <li>
          <div class="avatar">
            <img src="@/assets/images/index/avatar_1.webp" width="67" height="67"
              alt="一位身在花叢中, 身穿白底黑色橫條紋上衣, 且穿著軍綠色夾克的年輕男性頭像">
          </div>
          <div class="person">
            <div class="name">Alex</div>
            <p>在這間餐廳裡，我感受到來自義大利的風情，並且深愛每一口都是香醇濃郁的義大利麵條，讓我回味無窮。</p>
            <span> -- 學生</span>
          </div>
        </li>
        <li>
          <div class="avatar">
            <img src="@/assets/images/index/avatar_2.webp" width="67" height="67" alt="一位背面是綠色的草原, 面帶笑容且身穿米白色上衣的年輕女性的頭像">
          </div>
          <div class="person">
            <div class="name">Sophia</div>
            <p>餐廳以真誠和用心烹調的美食聞名，料理中保有食材的原味與鮮甜，讓人感受到主廚的細膩與用心，每一次造訪都令人期待。</p>
            <span> -- 美食家</span>
          </div>
        </li>
        <li>
          <div class="avatar">
            <img src="@/assets/images/index/avatar_3.webp" width="67" height="67" alt="一位有著咖啡色的油頭造型且留著落腮鬍, 身穿棕色上衣的年輕男性頭像">
          </div>
          <div class="person">
            <div class="name">Ethan</div>
            <p>美味的義大利麵令人印象深刻，餐廳環境優雅安靜，服務人員態度親切，讓人感到愉快的用餐體驗。</p>
            <span> -- 工程師</span>
          </div>
        </li>
      </ul>
    </div>
    <div class="meal">
      <div class="title">
        <font-awesome-icon icon="fa-solid fa-chess-queen" class="fork-icon" />
        經典義大利麵
        <font-awesome-icon icon="fa-solid fa-chess-queen" class="fork-icon" />
      </div>
      <ul class="products">
        <li class="animatedFromBottomToTop" data-index="1">
          <router-link to="/product" @click="setCategoryToStore('PestoPasta')">
            <img src="@/assets//images/index/pestoPasta_cover.webp" alt="">
            <div class="title">爽口青醬</div>
            <div class="description">磨碎的羅勒葉散發著天然香氣，與義大利麵的口感交織出一種清新的風味，彷彿帶領著味蕾穿越到了陽光灑落的地中海，每一口都是美好的味覺享受。</div>
          </router-link>
        </li>
        <li class="animatedFromBottomToTop" data-index="2">
          <router-link to="/product" @click="setCategoryToStore('TomatoPasta')">
            <img src="@/assets//images/index/tomatoPasta_cover.webp" alt="">
            <div class="title">酸甜紅醬</div>
            <div class="description">番茄的自然甜味與微酸相得益彰，加入各種香料的烘托下，每一口都彷彿在意大利的陽光中品味，令人感受到充滿歡愉的義式滋味。</div>
          </router-link>
        </li>
        <li class="animatedFromBottomToTop" data-index="3">
          <router-link to="/product" @click="setCategoryToStore('CreamyPasta')">
            <img src="@/assets//images/index/creamyPasta_cover.webp" alt="">
            <div class="title">香醇白醬</div>
            <div class="description">醇厚的白醬與義大利麵的完美結合，綿密濃郁的奶香中夾雜著起司的誘人香氣，每一口都是一場奶香的盛宴，散發著義大利鄉村農家的溫暖。</div>
          </router-link>
        </li>
      </ul>
    </div>
  </main>
</template>

<script>
// 因為在這個元件內要取得Pinia的資料狀態, 故需要先匯入相關的Store
import productsStore from '@/stores/productsStore';
import { mapActions } from 'pinia';

export default {
  methods: {
    ...mapActions(productsStore, ['setProductCategory']),
    // 將商品分類設定到pinia store內的變數, 以利在商品頁一打開來之前, 先確認是否該變數已被設定某個分類內容, 如有則顯示對應的分類商品資料; 否則就顯示所有商品資料
    async setCategoryToStore(category) {
      await this.setProductCategory(category);
    },
  },
  mounted() {
    // 對每個animated class的元素進行操作, 準備套用fade in效果
    const handleScrollAnimation = (elements, offset, animationClass) => {
      elements.forEach((item) => {
        const animationItemsTop = item.getBoundingClientRect().top;
        const itemIndex = item.dataset.index;
        // 搭配各元素自行設定的index值
        const delayTime = itemIndex * 500;
        // 取得瀏覽器視窗的內部高度, 也就是可見內容的高度, 其不包括瀏覽器的工具列、標籤列等, 它會返回一個數值, 代表當前瀏覽器視窗的高度, 以px為單位
        const windowsHeight = window.innerHeight;

        if (windowsHeight >= animationItemsTop + offset) {
          setTimeout(() => {
            item.classList.add(animationClass);
          }, delayTime);
        }
      });
    };

    // 監聽滾動事件, 用來為指定的事件(scroll事件)附加一個事件處理函式, 當該事件發生時就會執行這個函式, 因此根據當前滾動的視窗高度與補償值(offset)來顯示淡入動畫效果
    window.addEventListener('scroll', () => {
      const animatedFromLeftToRight = document.querySelectorAll('.animatedFromLeftToRight');
      const animatedFromBottomToTop = document.querySelectorAll('.animatedFromBottomToTop');

      handleScrollAnimation(animatedFromLeftToRight, 0, 'fadeInFromLeftToRight');
      handleScrollAnimation(animatedFromBottomToTop, 0, 'fadeInFromBottomToTop');
    });
  },
};
</script>
