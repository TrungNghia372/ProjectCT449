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
import AddressOrder from '../views/AddressOrder.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },


    {
      path: '/fishProduct',
      name: 'fish',
      component: Fish,
    },
// /////////////////

    {
      path: '/fishPedestalProduct',
      name: 'fishPedestal',
      component: FishPedestal,
    },
    {
      path: '/aquaticplantlProduct',
      name: 'AquaticPlant',
      component: AquaticPlant,
    }
    ,
    {
      path: '/news',
      name: 'news',
      component: News,
    }
    ,
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
    },
    {
      path: '/fish/:id',
      name: 'detailFish',
      component: DetailFish,
    },
    {
      path: '/fishpedestal/:id',
      name: 'detailFishpedestal',
      component: DetailFishPedestal,
    },
    {
      path: '/aquaticplant/:id',
      name: 'detailAquaticPlant',
      component: DetailAquaticPlant ,
    },
    {
      path: '/popularFish/',
      name: 'popularFish',
      component: PopularFish ,
    },
    {
      path: '/order',
      name: 'order',
      component: Order,
    },
    {
      path: '/addressOrder',
      name: 'addressOrder',
      component: AddressOrder,
    },
  ]
})

export default router
