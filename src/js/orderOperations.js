import axios from 'axios';

const $http = axios.create({
  baseURL: 'https://ec-course-api.hexschool.io/v2/api/cheetah116/order',
});

const postCartToOrder = async (postData) => {
  try {
    const response = await $http.post('https://ec-course-api.hexschool.io/v2/api/cheetah116/order', { data: postData });

    // console.log(response);
    return response.data;
  } catch (error) {
    console.log('在call API \'post data to order\' 時發生錯誤');
    throw error.response;
  }
};

const submitOrderForPayment = async (orderId) => {
  try {
    const response = await $http.post(`https://ec-course-api.hexschool.io/v2/api/cheetah116/pay/${orderId}`);
    // console.log(response);
    return response.data;
  } catch (error) {
    console.log('在call API \'submit order to pay\' 時發生錯誤');
    throw error.response;
  }
};

export { postCartToOrder, submitOrderForPayment };
