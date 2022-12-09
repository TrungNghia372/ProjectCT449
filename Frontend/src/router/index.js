import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Fish from '../views/Fish.vue'
import FishPedestal from '../views/Fishpedestal.vue';
import AquaticPlant from '../views/AquaticPlant.vue';
import News from '../views/News.vue';
import Contact from '../views/Contact.vue';
import DetailFishPedestal from '../views/detailFishpedestal.vue'
import DetailFish from '../views/DetailFish.vue';
import DetailAquaticPlant from '../views/DetailAquaticPlant.vue';
import PopularFish from '../views/PopularFish.vue';
import Order from '../views/Order.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/',  name: 'home', component: Home, },
    { path: '/fishProduct', name: 'fish', component: Fish,},
    { path: '/fishPedestalProduct', name: 'fishPedestal', component: FishPedestal,},
    { path: '/aquaticplantlProduct', name: 'AquaticPlant', component: AquaticPlant,},
    { path: '/news',name: 'news', component: News,},
    { path: '/contact', name: 'contact', component: Contact,},
    { path: '/fish/:id', name: 'detailFish', component: DetailFish,},
    { path: '/fishpedestal/:id', name: 'detailFishpedestal', component: DetailFishPedestal,},
    { path: '/aquaticplant/:id', name: 'detailAquaticPlant', component: DetailAquaticPlant , },
    { path: '/popularFish/', name: 'popularFish', component: PopularFish ,},
    { path: '/order', name: 'order', component: Order,},
  ]
})

import axios from 'axios'
import store from '../store'

router.beforeEach(async (to, form,next)=>{
  var token = localStorage.getItem('token')
  if(token){
    var result = await axios.get('http://localhost:4000/api/auth/login',{
      params: {
        token: token
      }
    })
    if(result.data != false ){
      console.log(result.data)
      store.commit("setUser", result.data.user)
      store.commit("setIdCart", result.data.idCart)
    }
  }
  next()
})

export default router
