<template>
  <div class="container-fluid">
    <h1>Add an Event</h1>
    <div class="form-group">
      <label for="ltype">Type :</label>
      <input id="ltype" type="text" v-model="type" />
      <br />
    </div>
    <div class="form-group">
      <label for="lname">Name :</label>
      <input id="lname" type="text" v-model="name" />
      <br />
    </div>
    <div class="form-group">
      <label for="ldate">Date :</label>
      <input id="ldate" type="date" v-model="date" />
      <br />
    </div>

    <button class="btn btn-success btn-sm boutons" v-on:click="onClickSave">Sauver</button>

    <router-link :to="{name :'calendar' }" class="btn btn-primary btn-sm boutons">Retour à la liste</router-link>
  </div>
</template>

<script>
import axios from 'axios'
import router from './router.js'
export default {
  name: "EventAdd",
  data() {
    return {
      type: "",
      name: "",
      date: "",
    };
  },

  methods: {
    onClickSave() {
      axios
        .post("http://localhost:8080/api/calendar", {
          type: this.type,
          name: this.name,
          date: this.date,
        })
        .then(() => {
          router.push({ name: "calendar" });
        });
    }
  }
};
</script>

<style>
</style>
