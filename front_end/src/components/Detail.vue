<template>
    <div>
        <feed></feed>
        <hr>
        <others> </others>
    </div>
</template>


<script>
import Feed from "../feed/components/Feed.vue";
import OtherBoard from "../board_list/components/OtherBoards.vue"
export default {
   
    components: {
        feed: Feed,
        others: OtherBoard,
    },
};
</script>

<style>
@import '/assets/css/base.css';
</style>