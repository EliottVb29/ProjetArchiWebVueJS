<template>
  <div class="jumbotron">
    <EventAddBtn></EventAddBtn>
    <div class="container-fluid liste">
      <ul>
        <EventItem
          v-for="event in events"
          v-bind:event="event"
          v-bind:key="event.id"
          @onClickYes="onClickYes"
          @onClickNo="onClickNo"
          @onClickDelete="onClickDelete"
        ></EventItem>
      </ul>
    </div>
  </div>
</template>

<script>
import EventAddBtn from "./EventAddBtn.vue";
import EventItem from "./EventItem.vue";
import axios from "axios";
export default {
  name: "EventList",

  data() {
    return {
      events: []
    };
  },
  props: ["userId"],

  components: { EventAddBtn, EventItem },

  created() {
    axios.get("http://localhost:8080/api/calendar").then(response => {
      this.events = response.data.events;
    });
  },

  methods: {
    onClickYes(eventId) {
      axios.put("http://localhost:8080/api/calendar/yes/" + eventId, {
        users: this.$props.userId
      });
    },

    onClickNo(eventId) {
      axios.put("http://localhost:8080/api/calendar/no/" + eventId, {
        users: this.$props.userId
      });
    },

    onClickDelete(eventId) {
      axios
        .delete("http://localhost:8080/api/calendar/" + eventId)
        .then(response => {
          axios.get("http://localhost:8080/api/calendar").then(response => {
            this.events = response.data.events;
          });
        });
    }
  }
};
</script>

<style>
</style>
