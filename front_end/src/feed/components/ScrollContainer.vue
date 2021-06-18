<template>
    <div>
        <comment v-for="c in comments" v-bind:key="c" class="comment">
            {{comment}}
        </comment>
    </div>
</template>

<script>
import Comment from "./Comment.vue";

export default {
    data: function() {
        return {
            comments: [
                {
                    author: 'aaaaa',
                    comment: 'asdasdasdasd'
                },
                {
                    author: 'bbbb',
                    comment: 'asdasdasdasd'
                },
                {
                    author: 'cccc',
                    comment: 'asdasdasdasd'
                },
                {
                    author: 'cccc',
                    comment: 'asdasdasdasd'
                },{
                    author: 'cccc',
                    comment: 'asdasdasdasd'
                },{
                    author: 'cccc',
                    comment: 'asdasdasdasd'
                },{
                    author: 'cccc',
                    comment: 'asdasdasdasd'
                },{
                    author: 'cccc',
                    comment: 'asdasdasdasd'
                },{
                    author: 'cccc',
                    comment: 'asdasdasdasd'
                },{
                    author: 'cccc',
                    comment: 'asdasdasdasd'
                },{
                    author: 'cccc',
                    comment: 'asdasdasdasd'
                },{
                    author: 'cccc',
                    comment: 'asdasdasdasd'
                },{
                    author: 'cccc',
                    comment: 'asdasdasdasd'
                },{
                    author: 'cccc',
                    comment: 'asdasdasdasd'
                },
            ],
        };
    },
    name: 'commentComponent',
    props: {
        // comments: Array
    },
    components: {
        comment: Comment,
    },
};
</script>

<style>
@import '../../assets/css/base.css';

</style>