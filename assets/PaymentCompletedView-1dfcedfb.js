import{p as n}from"./productsStore-a47664d1.js";import{_ as p,m as d,a as u,r,o as m,c as _,b as t,d as l,e,w as f}from"./index-c0115c1c.js";const h={data(){return{}},methods:{...d(n,["postItemToPay"]),async payOrder(s){await this.postItemToPay(s),this.orderStatus!==void 0?(alert(this.orderStatus.message),this.$router.push({path:"paymentCompleted"})):console.log("訂單付款時發生錯誤!")}},computed:{...u(n,["itemsInCart","orderResult","userOrderInfo","orderStatus"]),totalPrice(){return!this.itemsInCart||!this.itemsInCart.carts?0:this.itemsInCart.carts.reduce((a,o)=>a+o.final_total,0)}}},C=t("ul",{class:"steps"},[t("li",null,[e("Step1. "),t("span",null,"建立訂單")]),t("li",null,[e("Step2. "),t("span",null,"確認付款")]),t("li",{class:"current-step"},[e("Step3. "),t("span",null,"完成訂購")])],-1),S={class:"completedMessage"},I={class:"title"},w=t("div",{class:"notice"},[t("span",null,[e("餐點將儘速送抵指定的地點；如有任何問題，歡迎聯絡我們："),t("a",{href:"tel:+886 2 2200-1234","aria-label":"撥打餐廳的電話號碼"},"(02)2200-1234")]),t("span",null,"祝福您有美好的一天！")],-1);function y(s,a,o,P,k,x){const c=r("font-awesome-icon"),i=r("router-link");return m(),_("main",null,[C,t("div",S,[t("div",I,[l(c,{icon:"fa-solid fa-truck",class:"small-cart-icon"}),e(" 感謝您的訂購！ ")]),w,l(i,{to:"/",class:"goHome"},{default:f(()=>[e("返回首頁")]),_:1})])])}const v=p(h,[["render",y]]);export{v as default};