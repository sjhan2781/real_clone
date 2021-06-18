<template>
    <div style="width:800px">
        <button v-on:click="onAdd">추가</button>
        <div>
            <div v-for="(feed,index) in feeds" v-bind:key="index" class="feed_box">
                <div id="profileContainer">
                    <a href=""><img src="../assets/profile.png" alt="프로필 이미지" id="profile_img"></a>&nbsp;
                    <a href="" class="username" v-text="feed.author"></a>
                </div>
                <swiper class="swiper" :options="swiperOption">
                    <swiper-slide>Slide 1</swiper-slide>
                    <swiper-slide>Slide 2</swiper-slide>
                    <swiper-slide>Slide 3</swiper-slide>
                    <div class="swiper-pagination" slot="pagination"></div> 
                    <div class="swiper-button-prev" slot="button-prev"></div> 
                    <div class="swiper-button-next" slot="button-next"></div>
                </swiper>
                 <div class="abcContainer">
                        <div class="buttonContainer">
                            <div>
                                <img src="" alt="" srcset="">
                                <img src="" alt="" srcset="">
                            </div>
                        </div>
                        
                        <div> a 님 외 b 명이 좋아합니다 </div> 
                        
                        <div>
                            <a href="" id=author class="username">  {{ feed.author }} </a> 
                            <span class="caption">  {{ feed.caption }} </span>
                        </div>
                        
                        <router-link to="/detail">댓글 n개 모두 보기</router-link>

                        <div id="commentContainer">
                            <div v-for="comment in feed.comments" v-bind:key="comment">
                                <a href="" class="username"> {{comment.author}} </a>
                                <span class="caption"> {{comment.content}} </span>
                            </div>
                        </div>

                        <a href="" id="published"> n시간 전 </a>
                        
                    </div>
                    <div class="container" id="writeComment">
                        <textarea placeholder="댓글 달기" class="textareaComment"></textarea>
                        <input type="button" value="게시" class="writeCommentBtn" disabled>
                    </div> 
                    <hr>
                </div>
            </div>     
        </div>
        

</template>

<script lang="ts">
import { Swiper, SwiperSlide } from 'vue-awesome-swiper' 
import 'swiper/css/swiper.css'
export default{
    delimiters: ['[[', ']]'],
    components: {
      Swiper,
      SwiperSlide,
    },
    created() {
    },
    data(){
        return {
            feed_num : 0,
            user : {
                user_name : "ss"
            },
            feeds : [
                {
                    author : "한남상진",
                    caption : "은하가 최고의 아이돌이야",
                    comments : [
                        {author: "asd", content : "댓글1번"},
                        {author: "fgh", content : "댓글2번"}
                    ]
                }, 
                {
                    author : "한남철우",
                    caption : "유연정이 최고의 아이돌이야",
                    comments : [
                        {author: "zxc", content : "댓글1번"},
                        {author: "vbn", content : "댓글2번"}
                    ]
                }
            ],
            swiperOption: { 
                slidesPerView: 1, 
                spaceBetween: 50, 
                loop: true, 
                pagination: { el: '.swiper-pagination', clickable: true }, 
                navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
            },
        }
    },methods: {
      onSwiper(swiper) {
        console.log(swiper);
      },
      onSlideChange() {
        console.log('slide change');
      },
      onAdd(){
          console.log("add");
          this.feeds.push(this.feed_num+1);
      }
    },
}
</script>

<style lang="scss" scoped>
     @import '../assets/css/base.scss'; 
    .feed_box{
        border: 1px solid black;
    }
</style>