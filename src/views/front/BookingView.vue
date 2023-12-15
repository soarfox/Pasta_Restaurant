<template>
  <header class="header" id="header">
    <div class="booking-banner"
      aria-label="左方的木盤上百著許多蔬果, 有好多塊蘋果丁, 藍莓起司丁, 一碗核桃, 幾個堅果, 以及一碗蘆筍沙拉和一碗蜂蜜沾醬, 右上方擺放著一隻叉子, 其柄為木製, 右下方擺放著一隻刀子, 其柄也是木製">
    </div>
  </header>
  <main>
    <div class="booking">
      <div class="title">享受美好時光，歡迎預約訂位</div>
      <div class="booking-info">
        <div class="img-container">
          <img src="/src/assets/images/booking/date.webp" alt="">
        </div>
        <!-- 為了要讓radio button也能夠一併被驗證到, 故需要採用:validation-schema方式, 其是一個VeeValidate套件的指令, 用於指定表單驗證的規則, 在下方data()內的validationRules是由多項驗證規則組成的物件, 其內對每個欄位都加入所需的驗證規則 -->
        <VForm class="booking-form" :validation-schema="validationRules" @submit="onSubmit" :disabled="formSubmitted">
          <div class="form-item" v-for="field in formFields" :key="field.id">
            <label class="form-title">{{ field.label }}</label>
            <VField class="input-field" v-model="formData.userBooking[field.id]" :rules="field.rule" :type="field.type"
              :name="field.id" :id="field.id" :placeholder="field.placeholder" :disabled="formSubmitted">
            </VField>
            <ErrorMessage class="validation" :name="field.id"></ErrorMessage>
          </div>

          <label class="form-title">預約時段</label>
          <div class="reservedTime">
            <div class="form-timeOptions" v-for="option in formTimeOptions" :key="option.value">
              <VField :name="option.name" :type="option.type" :value="option.value"
                :rules="{ required: 'You must choose a time' }" :disabled="formSubmitted" />
              {{ option.label }}
            </div>
            <ErrorMessage class="validation" name="time" />
          </div>

          <div class="buttons">
            <input class="button-cancel" name="button-cancel" type="reset" value="取消" :disabled="formSubmitted">
            <input class="button-submit" name="button-submit" type="submit" value="送出" :disabled="formSubmitted">
          </div>
        </VForm>
      </div>
      <div class="notice">
        <div class="title">訂位須知</div>
        <ol>
          <li>本餐廳無低消限制且不收取服務費，為確保用餐品質，單次用餐時間為90分鐘。</li>
          <li>本餐廳為親子友善餐廳，歡迎闔家蒞臨，但謝絕寵物入場。</li>
          <li>預約訂位僅保留15分鐘，儘請您安排充裕時間以利進入餐廳用餐。</li>
          <li>對於線上訂位的取消或變動，請您主動於用餐的前一日致電：<a href="tel:+886 2 2200-1234" aria-label="撥打這隻電話號碼">(02)2200-1234</a> 告知我們。</li>
          <li>感謝您的支持，期待與您分享美好的用餐時光！</li>
        </ol>
      </div>
    </div>
  </main>
</template>

<script>
import { useToast } from 'vue-toastification';

export default {
  data() {
    return {
      // 用來追蹤是否已經提交表單
      formSubmitted: false,
      formData: {
        userBooking: {
          name: '',
          tel: '',
          people: '',
          children: '0',
          highChair: '0',
        },
      },
      formFields: [
        {
          id: 'name', label: '訂位者姓名', type: 'text', placeholder: '請輸入完整姓名', rule: 'required',
        },
        {
          id: 'tel', label: '手機號碼', type: 'tel', placeholder: '請輸入手機號碼', rule: 'required|digits:10',
        },
        {
          id: 'people', label: '大人人數', type: 'number', placeholder: '請輸入大人人數', rule: 'required|integer',
        },
        {
          id: 'children', label: '6歲以下小孩人數', type: 'number', placeholder: '請輸入小孩人數', rule: 'integer',
        },
        {
          id: 'highChair', label: '兒童座椅數量', type: 'number', placeholder: '請填寫需求數量', rule: 'integer',
        },
        {
          id: 'date', label: '預約日期', type: 'date', placeholder: '請選擇日期', rule: 'required',
        },
      ],
      formTimeOptions: [
        {
          name: 'time', type: 'radio', value: '1130', label: '11:30',
        },
        {
          name: 'time', type: 'radio', value: '1200', label: '12:00',
        },
        {
          name: 'time', type: 'radio', value: '1230', label: '12:30',
        },
        {
          name: 'time', type: 'radio', value: '1300', label: '13:00',
        },
        {
          name: 'time', type: 'radio', value: '1730', label: '17:30',
        },
        {
          name: 'time', type: 'radio', value: '1800', label: '18:00',
        },
        {
          name: 'time', type: 'radio', value: '1830', label: '18:30',
        },
        {
          name: 'time', type: 'radio', value: '1900', label: '19:00',
        },
      ],
      // 將各欄位的驗證規則都整合在同一個物件中(key為規則, value為其說明; 且在'main.js'檔案內有將驗證文字中, 各欄位的名稱改為中文名稱, 且引用了'zh_TW.json'將驗證文字翻譯成繁體中文)
      validationRules: {
        name: { required: 'This field is required' },
        tel: { required: 'This field is required', digits: '10' },
        people: { required: 'This field is required', integer: 'Must be an integer' },
        children: { integer: 'Must be an integer' },
        highChair: { integer: 'Must be an integer' },
        date: { required: 'This field is required' },
        time: { required: 'You must choose a time' },
      },
    };
  },
  methods: {
    onSubmit() {
      const toast = useToast();
      // console.log('formData.userBooking:', this.formData.userBooking);
      toast.success('訂位完成！');
      this.formSubmitted = true;
    },
  },
};
</script>
