<template>
    <div class="feed">
        <img src="a" alt="" width="400px" height="400px">
        <div class="contents-container"> 
            <profile> </profile>
            <commentContainer class="comments"> </commentContainer>
            <interaction> </interaction>
        </div>
    </div>
</template>

<script>
import Profile from "./Profile.vue";
import CommentContainer from "./ScrollContainer.vue";
import Interaction from "./InteractionBox.vue";

export default {
    
    data: function() {
        return {
            name: "leffept",
        };
    },
    components: {
        profile: Profile,
        commentContainer: CommentContainer,
        interaction: Interaction,
    },
};
</script>

<style>
@import '../../assets/css/base.css';
</style>