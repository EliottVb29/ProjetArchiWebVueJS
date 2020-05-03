<template>
  <div class="container-fluid item">
    <div class="row">
      <div class="col">
        <ul>
        <li>
          <h3>
            {{ event.idcal }} - {{ event.Type }} - {{ event.Name }} -
            {{ event.Date }}
          </h3>

          <strong>Will u be there ?</strong>
          <router-link 
            :to="{ path: '/details/' + event.idcal}"
            class="btn btn-info btn-sm"
          >View details</router-link>
          <br />
        </li>
        </ul>
      </div>
      <div class="col">
        <div class="col">
          <div class="row justify-content-end">
            <router-link 
            :to="{ path: '/calendar/update/' + event.idcal}"
            class="btn btn-warning btn-sm active boutons"
          >Edit</router-link>
            <button
              class="btn btn-danger btn-sm active boutons"
              v-on:click="onClickDelete()"
            >Delete</button>
            <br />
          </div>
          <div class="row justify-content-end">
            <button
              class="btn btn-success btn-sm boutons"
              v-on:click="onClickYes()"
            >YES</button>
           <button
              class="btn btn-danger btn-sm boutons"
              v-on:click="onClickNo()"
            >NO</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EventItem",
  props: ['event'],

  methods: {
    onClickYes() {
      this.$emit("onClickYes", this.$props.event.idcal);
    },

    onClickNo() {
      this.$emit("onClickNo", this.$props.event.idcal);
    },

    onClickDelete(){
      this.$emit("onClickDelete", this.$props.event.idcal);
    }
  }
};
</script>

<style>
.liste {
    padding : 10px;
    list-style: none;
}

.item {
    padding : 50px;
    list-style: none;
    
}

.item:nth-child(odd) {
    background-color: lightgray;
}

ul {
    padding: 0;
    margin: 0;
    }

.col-md-12 {
    padding : 10px;
}

#profile {
    color: white;
}

.boutons {
    margin : 5px;
}
</style>