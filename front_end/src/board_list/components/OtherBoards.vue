<template>
    <div>
        <span>님의 게시물 더 보기</span>

        <div class="wrapper">
            <div v-for="board in boards" v-bind:key="board" class="board">
                {{ board }}
            </div>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            boards: [1,2,3,4,5,6,7,8]
        }
    },
}
</script>

<style>
@import '../../assets/css/base.css';

</style>