<template>
  <nav class="navbar navbar-dark bg-dark">
            <a class="navbar-brand" href="/calendar">
                <h1 class="display-4">White Sharks</h1>
            </a>
            <a>
                <label for="user-select" id="profile">Profil</label>
                <select name="users" id="user-select" v-on:change="onSelectChange()">
                    <option v-for="user in users" v-bind:key="user.iduser" v-bind:value="user.iduser">{{user.lastname}}
                        {{user.firstname}}</option>
                </select>
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{ name : 'calendar'}">Calendar</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{ name : 'user'}">Members</router-link>
                    </li>
                </ul>
            </div>
        </nav>
</template>

<script>
import axios from "axios";
export default {
  name: 'NavbarTitle',
  data () {
    return {
        users: [],
        userIdSelected: 0,
    }
  },
  methods: {
      onSelectChange() {
          this.userIdSelected = document.getElementById("user-select").value;
          
          this.$emit('onUserSelectedChange', this.userIdSelected);
      }
  },
  created() {
      axios.get("http://localhost:8080/api/members").then(response => {
      this.users = response.data.users;
      this.userIdSelected = this.users[0].iduser;
      this.$emit('onUserSelectedChange', this.userIdSelected);
    });
  },
}
</script>

<style>

</style>