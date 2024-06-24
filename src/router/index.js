import { createRouter, createWebHistory } from 'vue-router' // These functions are used to create the router and history objects
import Profile from '../views/Profile.vue'
import Scoreboard from '../views/Scoreboard.vue'
import Tournament from '../views/Tournament.vue'

const routes = [
    { path: '/profiles', component : Profile },
    { path: '/scoreboard', component : Scoreboard },
    { path: '/tournaments', component: Tournament }
];

// Create the router with the history mode and the defined routes 
const router = createRouter({
    history: createWebHistory(), // Use HTML5 history mode for navigation
    routes, // Set the previously defined routes
});

// Export the router so it can be used in main.js
export default router;
