<template>
  <div class="jumbotron">
    <h1 class="display-4">Members list</h1>
    <p class="lead">
      Thanks to this app, you will be able to register to trainings and matchs with your sport
      team !
    </p>
    <hr class="my-4" />
    <p>If u want to add a new member, just click here below.</p>
    <router-link 
    :to="{ name: 'adduser' }"
    class="btn btn-primary btn-lg active">
      Add a member
    </router-link>
  </div>
</template>

<script>
export default {
  name: "UserAddBtn",
};
</script>