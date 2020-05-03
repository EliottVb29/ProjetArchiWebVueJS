<template>
  <div class="container-fluid itemuser">
    <div class="row">
      <div class="col">
        <ul>
        <li>
          <h3>{{ user.lastname }} {{ user.firstname }} - {{ user.position }} - {{ user.status }}</h3>
        </li>
        </ul>
      </div>
      <div class="col">
        <div class="row justify-content-end">
         <router-link 
            :to="{ path: '/users/update/' + user.iduser}"
            class="btn btn-warning btn-sm active boutons"
          >Edit</router-link>
          <button
              class="btn btn-danger btn-sm active boutons"
              v-on:click="onClickDelete()"
            >Delete</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserItem",
  props: ["user"],

  methods: {
    onClickDelete() {
      this.$emit("onClickDelete", this.$props.user.iduser);
    }
  }
};


</script>

<style>

.itemuser {
  padding: 50px;
  list-style: none;
}

.itemuser:nth-child(odd) {
    background-color: lightgray;
}

ul {
  padding: 0;
  margin: 0;
}

.col-md-12 {
  padding: 10px;
}

.boutons {
  margin: 5px;
}
</style>