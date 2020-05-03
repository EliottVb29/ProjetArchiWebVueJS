<template>
<div class="jumbotron">
    <UserAddBtn></UserAddBtn>
  <div class="container-fluid item">
    <ul>
      <UserItem v-for="user in users" v-bind:user="user" v-bind:key="user.iduser" @onClickDelete="onClickDelete"></UserItem>
    </ul>
  </div>
  </div>
</template>

<script>
import UserAddBtn from "./UserAddBtn.vue";
import UserItem from "./UserItem.vue";
import axios from "axios";
export default {
  name: "UserList",
  data() {
    return {
      users: []
    };
  },
  components: { UserAddBtn,UserItem },
  created() {
    axios.get("http://localhost:8080/api/members").then(response => {
      this.users = response.data.users;
    });
  },

  methods: {
    onClickDelete(iduser) {
      axios.delete("http://localhost:8080/api/members/" + iduser)
      .then(response => {
          axios.get("http://localhost:8080/api/members").then(response => {
            this.users = response.data.users;
          });
        });
    }
  }
};
</script>

<style>
</style>
