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
      <div class="feature">
        <img src="@/assets/images/aboutUs/earth_friendly.webp" alt="">
        <div class="description">
          <div class="title">大地友善</div>
          <p>
            我們致力於選用當地新鮮、有機的食材，以降低環境影響並支持當地農業。我們嚴選經過認證的食材，減少對生態系統的負擔，並積極參與可持續發展的實踐。這不僅是我們的承諾，更是對自然的愛護，期許透過每一道美味的義大利料理，帶給您滿滿的大地溫暖。
          </p>
        </div>
      </div>
      <div class="feature feature-reverse">
        <div class="description">
          <div class="title">健康原味</div>
          <p>
            我們堅信最好的食材是自然原味，因此所有的料理都保持了最原始的風味，不添加過多的調味，以保留食材的天然營養。我們專注於創造美味的義大利料理，結合新鮮的蔬果、高品質的橄欖油和香料，呈現最純粹、健康的美味，讓您品味到每一口都是對味蕾的愉悅。
          </p>
        </div>
        <img class="img" src="@/assets/images/aboutUs/handmade.webp" alt="">
      </div>
      <div class="feature">
        <img src="@/assets/images/aboutUs/nice_date.webp" alt="">
        <div class="description">
          <div class="title">美味有約</div>
          <p>
            我們不僅提供精緻的義大利料理，更營造出溫馨愜意的用餐環境，讓每一位賓客都能享受到美好的用餐體驗。我們深信美味不僅僅來自食材和廚藝，更源自於與摯愛、家人或朋友共度的美好時光，來到這裡，每一頓餐食都是一場美味的約會，將美好的時光和難以忘懷的滋味完美結合。
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
            <li>訂位專線：<a href="tel:+886 2 2200-1234" aria-label="撥打這隻電話號碼">(02)2200-1234</a></li>
            <li>與我們聯繫：<a href="mailto:soarfox@gmail.com?subject=有關米諾可義式餐廳網站" aria-label="寫電子郵件給商店業者">soarfox@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </main>
</template>
