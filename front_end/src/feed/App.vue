<!-- <template>
//     <div>
//         <header1></header1>
//         <content1></content1>
//         <footer1></footer1>
//     </div>
// </template>


// <script>
// import Header from "./components/Header.vue";
// import Content from "./components/Content.vue";
// import Footer from "./components/Footer.vue";

// export default {
//     data: function() {
//         return {
//             name: "leffept",
//         };
//     },
//     components: {
//         header1: Header,
//         content1: Content,
//         footer1: Footer,
//     },
// };
// </script>

// <style></style> -->

<template>
    <div>
        <feed></feed>
        <hr>
        <others> </others>
    </div>
</template>


<script>
import Feed from "./feed/components/Feed.vue";
import OtherBoard from "./board_list/components/OtherBoards.vue"
export default {
    data: function() {
        return {
            name: "leffept",
        };
    },
    components: {
        feed: Feed,
        others: OtherBoard,
    },
};
</script>

<style>
@import '/assets/css/base.css';
</style>