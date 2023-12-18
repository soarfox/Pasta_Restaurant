import{p as d}from"./productsStore-a47664d1.js";import{_ as p,m as r,u as y,a as P,r as f,o as _,c as h,b as t,d as c,w as u,t as a,F as v,f as C,i as b,e as g}from"./index-c0115c1c.js";const D={data(){return{quantity:1,addProductData:{product_id:"",qty:""},loading:!1}},methods:{...r(d,["getSingleProduct"]),...r(d,["postItemToCart"]),...r(d,["getItemsFromCart"]),...r(d,["setProductCategory"]),getSameCategoryProducts(){const{category:s}=this.singleProductData;return this.sortProductsByPrice.filter(e=>e.category===s&&e.title!==this.singleProductData.title).slice(0,4)},adjustQuantity(s){if(this.quantity===1){const e=s>0?1:0;this.quantity+=e}else this.quantity+=s},async addProductToCart(s,e){const m=y();this.loading=!0,this.addProductData.product_id=s,this.addProductData.qty=e,await this.postItemToCart(this.addProductData),m.success("已加入購物車！"),this.getItemsFromCart(),this.quantity=1,this.loading=!1},async setCategoryToStore(s){await this.setProductCategory(s)}},computed:{...P(d,["singleProductData","sortProductsByPrice"])},mounted(){const s=this.$route.params.id;this.getSingleProduct(s)},watch:{"$route.params.id":{immediate:!0,handler(s){this.getSingleProduct(s)}}}},S={class:"link"},T=t("li",null,"/",-1),k=t("li",null,"/",-1),q={class:"meal-name"},w={class:"detail-info"},B=["src"],I={class:"info"},V={class:"title"},j={class:"description"},F={class:"price"},N={class:"count-addToCart"},L={class:"count-field"},Q=["disabled"],E={class:"count"},U=["disabled"],$={class:"cartBtn"},A=["disabled"],z=b('<div class="shopping-guideLine"><div class="title">購物須知</div><ul class="guideLine"><li><p>1. 在下訂之前，請仔細檢查您選購的義大利麵商品資訊，包括名稱、數量、價格等是否正確無誤。</p></li><li><p>2. 餐點均屬出餐當天即時現作，且因衛生與安全考量，餐點一經確認出單則概不退換貨，並請於收到餐點後當餐食用，以確保口感的新鮮度與衛生。</p></li><li><p>3. 請注意，網站商品價格、庫存等資訊可能不定時更新，因此下單時的價格和庫存可能已經發生變化，若有疑問，請隨時與我們聯繫。</p></li><li><p>4. 若商品缺貨，我們將儘快與您聯繫，您可選擇取消訂單或更換其他義大利麵商品。</p></li><li><p>5. 若您對商品有任何疑問或需要協助，請隨時與我們聯繫。電話：<a href="tel:+886 2 2200-1234" aria-label="撥打這隻電話號碼">(02)2200-1234</a>或是 Email：<a href="mailto:soarfox@gmail.com?subject=有關米諾可義式餐廳網站" aria-label="寫電子郵件給商店業者">soarfox@gmail.com</a></p></li></ul></div>',1),G={class:"same-category"},H=t("span",null,"更多美味料理",-1),J={class:"meals"},K=["src"],M={class:"title"},O={class:"eng-title"},R=t("div",{class:"border-line"},null,-1),W={class:"price"},X=t("i",{class:"fa-solid fa-dollar-sign dollar-sign"},null,-1);function Y(s,e,m,Z,o,l){const n=f("router-link");return _(),h("main",null,[t("ul",S,[t("li",null,[c(n,{to:"/"},{default:u(()=>[g("餐廳首頁")]),_:1})]),T,t("li",null,[c(n,{to:"/product"},{default:u(()=>[g("美味餐點")]),_:1})]),k,t("li",q,a(s.singleProductData.title),1)]),t("div",w,[t("img",{src:s.singleProductData.imageUrl,alt:""},null,8,B),t("div",I,[c(n,{to:"/product",class:"tag",onClick:e[0]||(e[0]=i=>l.setCategoryToStore(s.singleProductData.category))},{default:u(()=>[g(a(s.singleProductData.category),1)]),_:1}),t("div",V,a(s.singleProductData.title),1),t("div",j,a(s.singleProductData.description),1),t("div",F,"售價：$"+a(s.singleProductData.price)+"/份",1),t("div",N,[t("div",L,[t("button",{type:"button",class:"minus-sign",disabled:o.loading,onClick:e[1]||(e[1]=i=>l.adjustQuantity(-1))},"-",8,Q),t("span",E,a(o.quantity),1),t("button",{type:"button",class:"plus-sign",disabled:o.loading,onClick:e[2]||(e[2]=i=>l.adjustQuantity(1))},"+",8,U)]),t("div",$,[t("button",{class:"button-addToCart",disabled:o.loading,name:"button-addToCart",type:"button",onClick:e[3]||(e[3]=i=>l.addProductToCart(s.singleProductData.id,o.quantity))}," 加入購物車 ",8,A)])])])]),z,t("div",G,[H,t("ul",J,[(_(!0),h(v,null,C(l.getSameCategoryProducts(),i=>(_(),h("li",{key:i.id},[c(n,{to:"/detailedProduct/"+i.id},{default:u(()=>[t("img",{class:"meal-img",src:i.imageUrl,alt:""},null,8,K),t("div",M,a(i.title),1),t("div",O,a(i.category),1),R,t("div",W,[X,g(" $"+a(i.price),1)])]),_:2},1032,["to"])]))),128))])])])}const st=p(D,[["render",Y]]);export{st as default};
