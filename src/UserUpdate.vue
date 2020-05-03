<template>
  <div class="container-fluid">
    <h1>Member Update :</h1>
    <input type="hidden" v-model="iduser" />
    <div class="form-group">
      <label for="llastname">Lastname :</label>
      <input type="text" v-model="lastname" />
      <br />
    </div>
    <div class="form-group">
      <label for="lfirstname">Firstname :</label>
      <input type="text" v-model="firstname" />
      <br />
    </div>
    <div class="form-group">
      <label for="lposition">Position :</label>
      <input type="text" v-model="position" />
      <br />
    </div>
    <div class="form-group">
      <label for="lstatus">Status :</label>
      <input type="text" v-model="status" />
      <br />
    </div>

    <input
      type="button"
      class="btn btn-success btn-sm boutons"
      value="Sauver"
      v-on:click="updateUser()"
    />
    <br />
    <div>
      <router-link :to="{path: '/users' }" class="btn btn-primary btn-sm boutons">Retour à la liste</router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import router from "./router";
export default {
  name: "UserUpdate",
  data() {
    return {
      iduser: 0,
      lastname: "",
      firstname: "",
      position: "",
      status: ""
    };
  },
  methods: {
    updateUser() {
      axios
        .put("http://localhost:8080/api/members/", {
          iduser: this.iduser,
          lastname: this.lastname,
          firstname: this.firstname,
          position: this.position,
          status: this.status
        })
        .then(response => {
          if (response.status == 202) {
            router.push({ name: "user" });
          }
        });
    }
  },
  created() {
    axios
      .get("http://localhost:8080/api/members/details/" + this.$route.params.id)
      .then(response => {
        this.iduser = response.data.user.iduser;
        this.lastname = response.data.user.lastname;
        this.firstname = response.data.user.firstname;
        this.position = response.data.user.position;
        this.status = response.data.user.status;
      });
  }
};
</script>