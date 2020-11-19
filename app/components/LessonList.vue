<template>
  <ListView for='lesson in lessons' @itemTap='onItemTap'>
    <v-template>
      <StackLayout>
        <Image src="../images/football-classes.jpg" />
        <Label :text='lesson.subject' />
        <Label :text="`Location: ${lesson.location}`" />
        <Label :text="`Price: ${lesson.price}`" />
        <Label :text="`Maximum Spaces: ${lesson.maximumSpaces}`" />
        <Label :text="`Available Spaces: ${lesson.availableSpaces}`" />
      </StackLayout>
    </v-template>
  </ListView>
</template>

<script>
  export default {
    name: "Lesson List",
    data() {
      return {
        lessons: [{
            "id": 1,
            "subject": "Football",
            "location": "Ta Qali",
            "price": 7,
            "maximumSpaces": 10,
            "availableSpaces": 10,
            "image": "../app/images/football-classes.jpg",
          },
          {
            "id": 2,
            "subject": "Drama Class",
            "location": "Pieta",
            "price": 10,
            "maximumSpaces": 10,
            "availableSpaces": 10,
            "image": "images/drama-classes.jpg",
          },{
            "id": 3,
            "subject": "Art Class",
            "location": "Rabat",
            "price": 4,
            "maximumSpaces": 10,
            "availableSpaces": 10,
            "image": "images/art-classes.jpg",
          },{
            "id": 4,
            "subject": "Music Class",
            "location": "Iklin",
            "price": 10,
            "maximumSpaces": 10,
            "availableSpaces": 10,
            "image": "images/music-classes.jpg",
          },{
            "id": 5,
            "subject": "Basketball",
            "location": "Swieqi",
            "price": 6,
            "maximumSpaces": 10,
            "availableSpaces": 10,
            "image": "images/basketball-classes.jpg",
          }
        ]
      };
    },
    methods: {
      onItemTap(event) {
        this.$emit("addLesson", event.item);
      }
    },
  };
</script>

