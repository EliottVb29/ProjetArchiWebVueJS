<template>
    <div class="container-fluid">
    <div class="row">
        <div class="col">
            <h1>Event Details</h1>
            <ul>
                <div class="row">
                    Type : {{ event.type }}
                </div>
                <div class="row">
                    Name :  {{ event.name }}
                </div>
                <div class="row">
                    Date : {{ event.date }}
                </div>
            </ul>
        </div>

        <div class="col">
            <h1>Users attending :</h1>
            <ul>
                <li v-for="userYes in listUserYes" v-bind:key="userYes.id">
                    {{userYes.lastname}} {{userYes.firstname}} - {{userYes.position}}
                </li>
            </ul>
        </div>
        <div class="col">
            <h1>User not attending :</h1>
            <ul>
                <li v-for="userNo in listUserNo" v-bind:key="userNo.id">
                    {{userNo.lastname}} {{userNo.firstname}} - {{userNo.position}}
                </li>
            </ul>
        </div>
    </div>
</div>
</template>

<script>
import axios from "axios"
export default {
  name: 'EventDetails',
  data () {
    return { 
        event : {},
        listUserYes : [],
        listUserNo : []
    }
  },
  created() {
      axios.get("http://localhost:8080/api/calendar/details/" + this.$route.params.id)
      .then( response => {
          this.event = response.data.event;
          this.listUserYes = response.data.listUserYes;
          this.listUserNo = response.data.listUserNo;
      })
  }

}
</script>

<style>

</style>