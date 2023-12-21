import{p as r}from"./productsStore-d1f24022.js";import{_ as h,m as u,u as p,a as m,o as n,c as a,b as t,F as f,f as I,t as e,e as d}from"./index-861aa8bb.js";const y={data(){return{loading:!1}},methods:{...u(r,["postItemToPay"]),...u(r,["getItemsFromCart"]),async payOrder(s){this.loading=!0;const o=p();await this.postItemToPay(s),this.orderStatus!==void 0?(o.success("付款成功！"),this.getItemsFromCart(),this.$router.push({path:"/paymentCompleted"})):o.error("訂單付款時發生錯誤!"),this.loading=!1}},computed:{...m(r,["itemsInCart","orderResult","userOrderInfo","orderStatus"]),totalPrice(){return!this.itemsInCart||!this.itemsInCart.carts?0:this.itemsInCart.carts.reduce((o,i)=>o+i.final_total,0)}}},b=t("ul",{class:"steps"},[t("li",null,[d("Step1. "),t("span",null,"建立訂單")]),t("li",{class:"current-step"},[d("Step2. "),t("span",null,"確認付款")]),t("li",null,[d("Step3. "),t("span",null,"完成訂購")])],-1),g={class:"cart-tables"},C={class:"cart-list"},O=t("div",{class:"title"},"訂單明細",-1),P={class:"order"},S={class:"product-img"},T=["src"],v={class:"product-name"},R={class:"product-quantity"},$={class:"product-price"},k={class:"tfoot"},F={class:"totalPrice"},N=t("td",null,"總計",-1),B={class:"payment-userInfo"},V={class:"paymentTable"},q={class:"fields"},w=t("td",null,"訂單時間：",-1),E={class:"fields"},A=t("td",null,"訂單編號：",-1),D={class:"fields"},L=t("td",null,"付款狀態：",-1),U={class:"payment-status"},j={class:"userInfoTable"},z={class:"fields"},G=t("td",null,"收件人姓名：",-1),H={class:"fields"},J=t("td",null,"收件人Email：",-1),K={class:"fields"},M=t("td",null,"收件人電話：",-1),Q={class:"fields"},W=t("td",null,"收件地址：",-1),X={class:"fields"},Y=t("td",null,"附註：",-1),Z=["disabled"];function x(s,o,i,tt,_,c){return n(),a("main",null,[b,t("div",g,[t("div",C,[O,t("table",P,[t("tbody",null,[(n(!0),a(f,null,I(s.itemsInCart.carts,l=>(n(),a("tr",{key:l.id},[t("td",S,[t("img",{src:l.product.imageUrl,alt:""},null,8,T)]),t("td",v,e(l.product.title),1),t("td",R,"數量："+e(l.qty),1),t("td",$,"NT$ "+e(l.final_total),1)]))),128))]),t("tfoot",k,[t("tr",F,[N,t("td",null,"NT$ "+e(c.totalPrice),1)])])])]),t("div",B,[t("table",V,[t("tr",q,[w,t("td",null,e(s.orderResult.create_at),1)]),t("tr",E,[A,t("td",null,e(s.orderResult.orderId),1)]),t("tr",D,[L,t("td",U,"尚未付款，共"+e(s.orderResult.total)+"元",1)])]),t("table",j,[t("tr",z,[G,t("td",null,e(s.userOrderInfo.user.name),1)]),t("tr",H,[J,t("td",null,e(s.userOrderInfo.user.email),1)]),t("tr",K,[M,t("td",null,e(s.userOrderInfo.user.tel),1)]),t("tr",Q,[W,t("td",null,e(s.userOrderInfo.user.address),1)]),t("tr",X,[Y,t("td",null,e(s.userOrderInfo.message),1)])]),t("button",{type:"button",name:"submit",class:"submit-btn",onClick:o[0]||(o[0]=l=>c.payOrder(s.orderResult.orderId)),disabled:_.loading},"確認付款",8,Z)])])])}const ot=h(y,[["render",x]]);export{ot as default};
