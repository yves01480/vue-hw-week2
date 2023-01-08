import {createApp} from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';

createApp({
    data(){
        return{
            user:{
                username:"antonygogoa@gmail.com",
                password:"sam80114"
            }

        }
    },
    methods:{
        login(){
            const url = 'https://vue3-course-api.hexschool.io/v2/admin/signin'
            axios.post(url,this.user) //axios的第二個參數就是我們要帶入的東西
            .then((res)=>{            //登入之後執行這個           
                const {token,expired} = res.data //從登入之後的response裡面取得token和expire 
                document.cookie=`myToken=${token};expires=${expired};path=/`
                window.location = 'products.html'
            })
            .catch((error)=>{
                console.dir(error)
            })
        }
        

        
    }
})

.mount('#app')

