<template>
  <div class="container-fluid">
    <h1>Event Update :</h1>
    <input type="hidden" v-model="idcal" />
    <div class="form-group">
      <label for="ltype">Type :</label>
      <input type="text" v-model="Type" />
      <br />
    </div>
    <div class="form-group">
      <label for="lname">Name :</label>
      <input type="text" v-model="Name" />
      <br />
    </div>
    <div class="form-group">
      <label for="ldate">Date :</label>
      <input type="date" v-model="Datum" />
      <br />
    </div>

    <input
      type="button"
      class="btn btn-success btn-sm boutons"
      value="Sauver"
      v-on:click="updateEvent()"
    />
    <br />
    <router-link :to="{path: '/' }" class="btn btn-primary btn-sm boutons">Retour à la liste</router-link>
  </div>
</template>

<script>
import axios from "axios";
import router from "./router";
export default {
  name: "EventUpdate",
  data() {
    return {
      idcal: 0,
      Type: "",
      Name: "",
      Datum: "",
    };
  },
  methods: {
    updateEvent() {
      axios
        .put("http://localhost:8080/api/calendar/", {
          idcal: this.idcal,
          type: this.Type,
          name: this.Name,
          date: this.Datum
        })
        .then(response => {
          if (response.status == 202) {
            router.push({ name: "calendar" });
          }
        });
    }
  },
  created() {
    axios
      .get(
        "http://localhost:8080/api/calendar/details/" + this.$route.params.id
      )
      .then(response => {
        this.idcal = response.data.event.idcal;
        this.Type = response.data.event.type;
        this.Name = response.data.event.name;
        this.Datum = new Date(response.data.event.date);
        this.Datum.setHours(12,0,0);
        this.Datum = this.Datum.toISOString().slice(0, 10);
      });
  }
};
</script>