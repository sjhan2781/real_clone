<template>
    <div class="container">
        <form action="" method="post">
            <input type="email" name="email" id="input-email" placeholder="이메일" v-model="email"><br>
            <input type="password" name="password" id="input-password" placeholder="비밀번호" v-model="pwd"><br>
        </form>
        <button v-on:click="login" id="signin-btn">로그인</button>
        <div class="container-line">
            <div class="line">또는</div>
        </div>

        <a href="" class="clickable">비밀번호를 잊으셨나요?</a>
        <div class="container" id="signup-container">
            <p> 
                계정이 없으신가요?
                
                <router-link to="/signin">가입하기</router-link>
            </p>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
let url = "http://220.94.233.221:38000/getfeed/"; // 장고 서버 주소

export default {
    data(){
        return{
            email : "",
            pwd : ""
        }
    },
    methods : {
        
        login: function(){
            var params = {
                params: {
                    email: this.email,
                    password: this.pwd,
                    account_id: 1,

                },
                email: this.email,
                password: this.pwd,
                user_id: 1,
            }

            console.log("로그인 버튼 클릭 " + this.email);
            //여기에 포스트 해서 에러 코드가 오지 않으면 로그인 되게
            
            axios.defaults.baseURL = 'http://220.94.233.221:38000';
            axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
            axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

            axios.get(url, params)
            .then(function(response){
                console.log(response.data)
                // var data =  {email : this.email, pwd : this.pwd}

            
            })
            .catch(function(response){
                console.log(response)
            })

            // {
            //     data : {email : this.email, pwd : this.pwd}
            // }.then(){
                //200으로 오면 로그인
                //로그인 된 경우
            
            // }.error(){
            //     alert("로그인 실패");
            // }
            //console.log(this.$store.getters.getUserInfo());
            //alert(this.$store.getters.getUserInfo);
            
            //로그인 된거
            this.$store.state.userInfo.userName = "login";
            this.$router.push('/timeline');
            
            //로그인 안된 경우
        },
    },
}
</script>