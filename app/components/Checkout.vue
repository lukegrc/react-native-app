<template>
    <StackLayout>
        <Label class="h2 text-center" text="Shopping Cart" />
        <Label class="h2 text-center" text="(Tap a lesson to remove it)" />
        <ListView for="lesson in cart" @itemTap='onItemTap'>
            <v-template>
                <StackLayout>
                    <Label :text='lesson.image' />
                    <Label :text='lesson.subject' />
                    <Label :text="`Location: ${lesson.location}`" />
                    <Label :text="`Price: ${lesson.price}`" />
                    <Label :text="`Maximum Spaces: ${lesson.maximumSpaces}`" />
                    <Label :text="`Available Spaces: ${lesson.availableSpaces}`" />
                </StackLayout>
            </v-template>
        </ListView>
        <TextField hint='Name' v-model='name' />
        <TextField hint='Phone Number' v-model='phoneNumber' />
        <Button @tap='submitOrder' text='Submit Order' />
    </StackLayout>
</template>

<script>
    export default {
        props: ["cart"],
        methods: {
            onItemTap(event) {
                this.$emit("removeLesson", event.item);
            },
            submitOrder() {
                alert("An order is placed by " + this.name + " at " + this.phoneNumber);
            }
        }
    };
</script>

<style>
</style>