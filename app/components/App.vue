<template>
    <Page style='background-color: azure;'>
        <ActionBar title="After School Lessons" />
        <TabView androidTabsPosition="top">
            <TabViewItem title="Lesson List" class="h2">
                <LessonList @addLesson="addToCart" />
            </TabViewItem>
            <TabViewItem title="Check out" class="h2">
                <Checkout :cart='cart' @removeLesson='removeFromCart' />
            </TabViewItem>
        </TabView>
    </Page>
</template>

<script>
    import LessonList from "./LessonList";
    import Checkout from "./Checkout";

    export default {
        data() {
            return {
                showLesson: true,
                sitename: "Lesson Store",
                cart: [],
            };
        },
        components: {
            LessonList,
            Checkout
        },
        methods: {
            addToCart(lesson) {
                this.cart.push(lesson);
                alert("Added to cart: " + lesson.name);
            },
            removeFromCart(lesson) {
                for (let i = 0; i < this.cart.length; i++) {
                    if (this.cart[i] == lesson) this.cart.splice(i, 1)
                }
            }
        }
    };
</script>