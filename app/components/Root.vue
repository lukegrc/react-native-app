<template>
    <div id="app">
        <header>
            <h1>{{sitename}}</h1>
            <button @click='showCheckout'>{{this.cart.length}} Checkout
            </button>
        </header>
        <main>
            <!-- <lesson-list @addLesson='addToCart' /> -->
            <lesson-list @addLesson='addToCart'>
            </lesson-list>
            <checkout :cart="cart"></checkout>
        </main>
    </div>
</template>

<script>
    import LessonList from "./components/LessonList.vue";
    import checkout from "./components/Form.vue";

    export default {
        name: "App",
        components: {
            LessonList,
            checkout
        },
        data() {
            return {
                sitename: "Lesson Store",
            };
        },
        methods: {
            addToCart(lesson) {
                this.cart.push(lesson);
            },
            showCheckout() {}
        },
    };
</script>

<style scoped>
    .home-panel {
        vertical-align: center;
        font-size: 20;
        margin: 15;
    }

    .description-label {
        margin-bottom: 15;
    }
</style>