<template>
  <div class="container-fluid">
    <h1>Add a Member</h1>
    <div class="form-group">
      <label for="llastname">Lastname :</label>
      <input id="llastname" type="text" v-model="lastname" />
      <br />
    </div>
    <div class="form-group">
      <label for="lfirstname">Firstname :</label>
      <input id="lfirstname" type="text" v-model="firstname"  />
      <br />
    </div>
    <div class="form-group">
      <label for="lposition">Position :</label>
      <input id="lposition" type="text" v-model="position" />
      <br />
    </div>
    <div class="form-group">
      <label for="lstatus">Status :</label>
      <input id="lstatus" type="text" v-model="status" />
      <br />
    </div>

    <button class="btn btn-success btn-sm boutons" v-on:click="onClickSave">Sauver</button>
    <br />
    <router-link :to="{path: '/users' }" class="btn btn-primary btn-sm boutons">Retour à la liste</router-link>
  </div>
</template>

<script>
import axios from 'axios';
import router from "./router";
export default {
  name: "UserAdd",
  data() {
      return {
          lastname : "",
          firstname : "",
          position : "",
          status : "",
      }
  },

  methods: {
      onClickSave() {
          axios.post("http://localhost:8080/api/members", {
              lastname : this.lastname,
              firstname : this.firstname,
              position : this.position,
              status : this.status,
          })
          .then(() => {
              router.push({name:"user"})
          })
      }
  }

};
</script>

<style>
</style>