import Vue from 'vue'
import VueRouter from 'vue-router'
import EventList from './EventList.vue'
import EventUpdate from './EventUpdate.vue'
import EventAdd from './EventAdd.vue'
import EventDetails from './EventDetails.vue'
import UserList from './UserList.vue'
import UserUpdate from './UserUpdate.vue'
import UserAdd from './UserAdd.vue'


Vue.use(VueRouter)

const routes = [
    { path: "/", name: 'calendar', component: EventList},
    { path: "/calendar/update/:id", name: 'uptcal', component: EventUpdate},
    { path: "/calendar/add", name: 'addcal', component: EventAdd},
    { path: "/details/:id", name: 'details',component: EventDetails},
    { path: "/users", name: 'user', component: UserList},
    { path: "/users/update/:id", name: 'uptusr', component: UserUpdate},
    { path: "/users/add", name: 'adduser', component: UserAdd},
]

export default new VueRouter( {routes} )