<template>
    <h1>{{ message }}</h1>
    <HelloWorld/>
</template>

<script>
import HelloWorld from '~/components/HelloWorld.vue';
export default{
    components:{
        HelloWorld
    },
    data() {
        return{
            message: "heelo"
        }
    }
}
</script>

<style>
h1{
    color: royalblue;
}
</style>