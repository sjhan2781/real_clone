<template>
    <div>
        <img src="a" alt="" class="profile_img">
        <span> {{ comment.author }}</span>
        <span> {{ comment.comment }} </span>
    </div>
</template>

<script>

export default {
    data: function() {
        return {
            comment: {
                author: 'asdasd',
                comment: 'asdasdasdasd',
            },
        };
    },
    // name: 'commentComponent',
    // props: {
    //     comments: Array
    // },
    // // components: {
    // //     comment: Comment,
    // // },
};
</script>

<style>
@import '../../assets/css/base.css';

</style>