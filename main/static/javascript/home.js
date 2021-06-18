
var feeds = [
    {
        author: "한상진",
        caption: "가나다라마바사",
        comments:[
            {author: "한상진", content: "asdasd"},
            {author: "abc", content: "asdasd"}
        ],

    },
    {
        author: "한상진2",
        caption: "asdasdas",
        comments:[
            {author: "vvvvv", content: "asdasd"},
            {author: "abc", content: "asdasd"}
        ],

    }
];
var value = JSON.parse(document.getElementById('mydata').textContent);

const url = 'http://localhost:8000/getfeed';

new Vue({
    delimiters: ['[[', ']]'],
    el: '#timeline',
    data:{
        feeds:feeds
    },
    methods: {
        getComments: function(index){
            return feed[index].comments;
        }
    },
});

new Vue({
    delimiters: ['[[', ']]'],
    el: '#name',
    data:{
        user: value,
    }
});

$(document).on('input', '.textareaComment', function(){
    var index = $('.textareaComment').index(this);
    console.log(index);
    if($('.textareaComment').eq(index).val().length != 0){
        $('.writeCommentBtn').eq(index).attr('disabled', false);
    }
    else{
        $('.writeCommentBtn').eq(index).attr('disabled', true);
    }
});

const swiper = new Swiper('.swiper-container', {
                            direction: 'horizontal',
                            loop: false,
                            pagination: {
                                el: '.swiper-pagination'
                            },
                            navigation: {
                                nextEl: '.swiper-button-next',
                                prevEl: '.swiper-button-prev',
                            },
                        });

$(document).ready(function(){

    setScrollListener();
    appendFeed();

    var appendBtn = $('#append_btn');
    var logoutBtn = $('#logout_btn');

    var textArea = $('.textareaComment');
    var writeComment = $('.writeCommentBtn');

    logoutBtn.on('click', function(){
        window.location.href = "account/logout"
    });
    
    appendBtn.on('click', function(){
        appendFeed();

    });
    swiper;
});

function setScrollListener(){
    $(window).on('scroll', function(){
        var currentPercentage
         = ($(window).scrollTop() / ($(document).outerHeight() - $(window).height())) * 100;
        
        if(currentPercentage > 60){
            getNewFeed();
        }
    });
}

function appendFeed(){
    for(i = 0; i < 5; i++){
        feeds.push('a');
    }
}

function getNewFeed(){
    var tmpUrl = url;

    tmpUrl += '/' + value.id;
    
    fetch(tmpUrl)
    .then(res=> res.json())
    .then(data=>{
        feeds.push(data);
        console.log(data.author);
    });

    swiper;
}