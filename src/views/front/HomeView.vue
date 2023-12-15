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
          <li>
            <img src="@/assets/images/index/feature_1.webp" alt="一瓶橄欖油, 塞子是軟木塞, 周圍散落著幾個綠色的橄欖果實">
            <h4>義大利原味橄欖油</h4>
            <p>豐富的單不飽和脂肪酸有助於心臟健康，同時具有抗氧化和抗發炎特性，能夠控制血糖，並能增添烹飪的多樣風味。</p>
          </li>
          <li>
            <img src="@/assets/images/index/feature_2.webp"
              alt="一位身穿白色廚師袍的廚師, 胸前穿著一件黑色的料理圍裙, 廚師面向左方且雙手帶著白色的手套, 他正專注地以左手拿著平底鍋, 裡頭有一些料理到一半的食材, 他的右手拿著一根湯匙, 正在為食材進行調味">
            <h4>星級專業廚師</h4>
            <p>精通義大利美食的五星級飯店主廚，熟練運用新鮮的地中海食材，巧妙結合傳統與現代，呈現極致風味的義式料理。</p>
          </li>
          <li>
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
        <p>
          一位出生於義大利小鎮的廚師，是來自義大利烹飪藝術世家的傳人。他所擁有的烹飪技藝，正是三代傳承的結晶，年輕時，他決定進入佛羅倫斯的傳統廚藝學院，接受嚴格且深入的烹飪訓練，這段時光讓他對義大利各地的地道食材有了更深刻的認識與理解，並明白唯有善用食材本身味道才能做出美味的料理。
        </p>
        <p>
          他的烹飪學習之旅並不僅止於學院的課程，更是在羅馬的一家米其林星級餐廳的實習歲月中進一步累積豐富的經驗，在那裡，他學會如何將傳統風味與現代創新相結合，創造出令人難以忘懷的美食饗宴，最終他的手藝得到餐廳主廚的認可，且多次在料理比賽中奪得獎牌。
        </p>
        <p>
          他的專長在於製作簡單而美味的義大利麵料理，每一道菜都經過他精心的烹調，展現出他對料理的熱愛與對食材的極致追求，他的料理風格不僅為味蕾帶來極致享受，更像是一場精心設計的味蕾之旅，每一口都是對家鄉小鎮的回憶，每一道都是對義大利烹飪藝術的致敬。
        </p>
        <p>
          然而，他並非只是一位技藝高超的廚師，更是一位熱情洋溢且樂於分享的靈魂，他喜歡親自與客人互動，分享他對烹飪的心得和故事，讓用餐變成一場美味的對話，他深信，料理不僅僅是為了填飽肚子，更是一種文化的融合，是家鄉風土的呈現。
        </p>
        <p>
          如今他帶領著我們的廚藝團隊，將他的熱情和技藝注入每一道菜餚中，在他的引領下，我們的餐廳成為一個將義大利烹飪精髓完美呈現的地方，每一位客人都能感受到那份濃郁的家鄉味。
        </p>
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
            <p>在這個美味的義大利餐廳，每一口都是濃郁的、新鮮的義大利面條，讓我回味無窮。</p>
            <span> -- 學生</span>
          </div>
        </li>
        <li>
          <div class="avatar">
            <img src="@/assets/images/index/avatar_2.webp" width="67" height="67"
              alt="一位背面是綠色的草原, 面帶笑容且身穿米白色上衣的年輕女性的頭像">
          </div>
          <div class="person">
            <div class="name">Sophia</div>
            <p>這家餐廳以真誠和用心烹調的美食聞名。令人難以忘懷的口感和溫馨的環境，每一次造訪都是一場美味的冒險。</p>
            <span> -- 美食家</span>
          </div>
        </li>
        <li>
          <div class="avatar">
            <img src="@/assets/images/index/avatar_3.webp" width="67" height="67"
              alt="一位有著咖啡色的油頭造型且留著落腮鬍, 身穿棕色上衣的年輕男性頭像">
          </div>
          <div class="person">
            <div class="name">Ethan</div>
            <p>這裡的廚師深諳料理的藝術，每一道菜都如詩如畫，搭配著選自義大利的100%葡萄汁，味蕾沉浸在義式美味世界。</p>
            <span> -- 上班族</span>
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
        <li>
          <router-link to="/product" @click="setCategoryToStore('PestoPasta')">
            <img src="@/assets//images/index/pestoPasta_cover.webp" alt="">
            <div class="title">爽口青醬</div>
            <div class="description">磨碎的羅勒葉散發著天然香氣，與義大利麵的口感交織出一種清新的風味，彷彿帶領著味蕾穿越到了陽光灑落的地中海，每一口都是美好的味覺享受。</div>
        </router-link>
        </li>
        <li>
          <router-link to="/product" @click="setCategoryToStore('TomatoPasta')">
            <img src="@/assets//images/index/tomatoPasta_cover.webp" alt="">
            <div class="title">酸甜紅醬</div>
            <div class="description">番茄的自然甜味與微酸相得益彰，加入各種香料的烘托下，每一口都彷彿在意大利的陽光中品味，令人感受到充滿歡愉的義式滋味。</div>
          </router-link>
        </li>
        <li>
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
};
</script>
