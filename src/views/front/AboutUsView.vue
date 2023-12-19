<template>
  <header class="header" id="header">
    <!--  因為使用圖片取代文字的技巧, 故在畫面上看不到文字, 但這樣對於一些使用螢幕閱讀器的人士來說將無法理解這張圖片的意思, 故使用aria-label屬性並為其加上具體描述, 使螢幕閱讀器能夠閱讀出該段訊息, 有助於相關人士理解這張圖片的意義  -->
    <div class="aboutUs-banner"
      aria-label="木桌上有許多餐點, 由左至右分別是一份蕃茄紅醬義大利麵, 三條堆疊起來的法國長條麵包, 一盆綠色蔬菜沙拉, 一瓶紅胡蘿菠汁, 一個黑色盤子內裝著6片剖半的酪梨, 一盆生菜沙拉, 一碗聖女蕃茄, 一束紫色的桔梗花束, 最右方則是兩盤奶油白醬義大利麵">
    </div>
  </header>
  <main>
    <div class="intro">
      <div class="title"></div>
      <div class="rectangle-outside">
        <div class="rectangle">
          <p>
            米諾可(Milk)義式餐廳成立於2019年，我們秉持著「食材的天然原味，最能讓人感受到這片大地給予人們的恩惠」，這份心意如同牛奶一般香醇濃厚，透過最好的食材、最用心的手藝，想讓每一位客人在這裡感受到義大利的熱情和浪漫，在這裡感受到幸福。
          </p>
        </div>
      </div>
    </div>
    <div class="three-points">
      <div class="feature animatedFromLeftToRight">
        <img src="@/assets/images/aboutUs/earth_friendly.webp" alt="">
        <div class="description">
          <div class="title">大地友善</div>
          <p>
            我們致力於選用當地新鮮、有機的食材，以降低環境影響並以實際採買行動來支持當地農業；選擇經過認證的食材，減少對環境生態的負擔，這不僅是我們對顧客與農民們的承諾，更是對大自然的愛護與感謝，期許透過所製作的每一道料理，能帶給您滿滿的大地溫暖與愛。
          </p>
        </div>
      </div>
      <div class="feature feature-reverse animatedFromRightToLeft">
        <div class="description">
          <div class="title">健康原味</div>
          <p>
            我們堅信最美味的食材就是大自然賦予食物的原味，因此餐廳裡所有的料理都用最少加工的方式，盡可能留住食物的甘甜鮮美與天然營養，讓您吃得安心又健康，並且為了創造出更美味的義大利風味料理，我們結合當令時蔬與高品質的橄欖油，呈現最純粹且健康的美味，讓您每一口都感受到味蕾的喜悅。
          </p>
        </div>
        <img class="img" src="@/assets/images/aboutUs/handmade.webp" alt="">
      </div>
      <div class="feature animatedFromLeftToRight">
        <img src="@/assets/images/aboutUs/nice_date.webp" alt="">
        <div class="description">
          <div class="title">美味有約</div>
          <p>
            我們提供的不僅是值得您細膩品嚐的義大利風味料理，為讓您享受在餐廳裡的每一刻，我們用心營造溫馨且愜意的用餐環境，讓您每一次來訪，都能留下美好的深刻體驗，因為我們深信美味不僅僅是來自於食材與廚藝，更源自於您與摯愛的家人或朋友一起共度的美好時光。
          </p>
        </div>
      </div>
    </div>
    <div class="traffic">
      <div class="title">餐廳資訊
      </div>
      <div class="map-direction">
        <!-- 如果將參數q=''保留空白, 只寫上緯度和經度即可(注意: 順序不可調換, 地圖API會不接受該寫法), 但這樣只會顯示座標標示的藍綠色圖釘(且不一定有地點名稱); 但如果在q=''內加入地點名稱, 則在地圖上以紅色圖釘標示該地點名稱出來; 參數包含"經緯度"的作法, 參考自: https://ithelp.ithome.com.tw/articles/10283496 -->
        <iframe class="map" frameborder="0" style="border:0"
          src="https://www.google.com/maps/embed/v1/place?key=AIzaSyD3ldm7Z6tP9Y6ek0JBcVZhq_RxqAUR-Ms&q='板橋車站'&center=25.01405,121.46381&zoom=15"
          allowfullscreen>
        </iframe>
        <div class="info">
          <ul>
            <li>地址：<a href="https://maps.google.com?q=新北市板橋區縣民大道二段7號21樓" target="_blank"
                aria-label="所在地址">新北市板橋區縣民大道二段7號21樓</a>
            </li>
            <li>大眾運輸工具：可以搭乘火車/捷運/高鐵直達板橋車站，且板橋車站和板橋客運轉運站相鄰，亦可搭乘客運在板橋客運轉運站下車，步行3分鐘即可抵達板橋車站。</li>
            <li>自行開車：建議使用導航系統或地圖應用程式導航至「板橋車站」，以獲得最即時的路況和導航資訊，車站周圍有付費停車場可供停車。</li>
            <li>訂位專線：<a href="tel:+886 2 2200-1234" aria-label="撥打這隻電話號碼給商店業者">(02)2200-1234</a></li>
            <li>與我們聯繫：<a href="mailto:soarfox@gmail.com?subject=有關米諾可義式餐廳網站" aria-label="寫電子郵件給商店業者">soarfox@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  mounted() {
    // 對每個animated class的元素進行操作, 準備套用fade in效果
    const handleScrollAnimation = (elements, offset, animationClass) => {
      elements.forEach((item) => {
        const animationItemsTop = item.getBoundingClientRect().top;

        // 取得瀏覽器視窗的內部高度, 也就是可見內容的高度, 其不包括瀏覽器的工具列、標籤列等, 它會返回一個數值, 代表當前瀏覽器視窗的高度, 以px為單位
        const windowsHeight = window.innerHeight;

        if (windowsHeight >= animationItemsTop + offset) {
          setTimeout(() => {
            item.classList.add(animationClass);
          }, 500);
        }
      });
    };

    // 監聽滾動事件, 用來為指定的事件(scroll事件)附加一個事件處理函式, 當該事件發生時就會執行這個函式, 因此根據當前滾動的視窗高度與補償值(offset)來顯示淡入動畫效果
    window.addEventListener('scroll', () => {
      const animatedFromLeftToRight = document.querySelectorAll('.animatedFromLeftToRight');
      const animatedFromRightToLeft = document.querySelectorAll('.animatedFromRightToLeft');

      handleScrollAnimation(animatedFromLeftToRight, 100, 'fadeInFromLeftToRight');
      handleScrollAnimation(animatedFromRightToLeft, 100, 'fadeInFromRightToLeft');
    });
  },
};
</script>
