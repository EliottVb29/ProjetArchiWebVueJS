<template>
  <div id="app">
    <NavBarTitle @onUserSelectedChange="userSelectedChange"></NavBarTitle>
    <router-view :userId="userIdSelected"></router-view>
  </div>
</template>

<script>
import NavBarTitle from "./NavBarTitle.vue"
import EventList from "./EventList.vue"
import UserList from "./UserList.vue"

export default {
  name: 'app',
  data () {
    return {
      userIdSelected : 0
    }
  },

  methods: {
    userSelectedChange(userId) {
      this.userIdSelected = userId;
    }
  },

  components: {EventList, UserList, NavBarTitle}
}
</script>

<style>

</style>
