import {createApp} from "https://cdnjs.cloudflare.com/ajax/libs/vue/3.2.45/vue.esm-browser.min.js"

createApp({
  data(){
    return{
      apiPath:'yves01480',
      apiUrl: 'https://vue3-course-api.hexschool.io/v2',
      products:[],
      tempProduct:{}
    }
  },
  
  methods:{
    checkIdentify(){  //如果是管理員，可以使用getData
      const url = `${this.apiUrl}/api/user/check`
      axios.post(url)
      .then(()=>{
        this.getData();
      })
      .catch((err)=>{
        console.dir(err)
      })
    },
    
    getData(){
      const url = `${this.apiUrl}/api/${this.apiPath}/admin/products`
      axios.get(url)
      .then((res)=>{
        this.products = res.data.products //請求api成功後執行這一段，把response裡面的data當中的products塞到我們自己設定的products陣列
      })
      .catch((err)=>{
        console.dir(err)
      })
    },  

  },
  mounted(){
    //mounted生命週期裡面的程式碼會先執行
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)myToken\s*=\s*([^;]*).*$)|^.*$/, '$1'); //取出在cookie裡面的token
    axios.defaults.headers.common['Authorization'] = token; //把token放到headers裡面，這樣請求的時候，也等於是向伺服器提交身分證？
  
  
    this.checkIdentify();
  }

})
.mount("#app")


