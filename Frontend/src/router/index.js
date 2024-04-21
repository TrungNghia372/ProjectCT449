import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Book from '../views/Book.vue'
import Contact from '../views/Contact.vue';
import PopularBook from '../views/PopularBook.vue';
import Order from '../views/Order.vue';
import Admin from '../views/Admin.vue';
import AddBook from '../views/AddBook.vue';
import DetailBook from '../views/DetailBook.vue';
import UpdateBook from '../views/UpdateBook.vue';
import UpdatePublisher from '../views/UpdatePublisher.vue';
import Rule from '../views/Rule.vue';
import News from '../views/News.vue';
import DetailBookAdmin from '../views/DetailbookAdmin.vue';
import DetailPublisher from '../views/DetailPublisher.vue';
import AddPublisher from '../views/AddPublisher.vue';



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/',  name: 'home', component: Home, },
    { path: '/bookProduct', name: 'book', component: Book,},
    { path: '/news',name: 'news', component: News,},
    { path: '/contact', name: 'contact', component: Contact,},
    { path: '/book/:id', name: 'detailBook', component: DetailBook,},
    { path: '/popularBook/', name: 'popularBook', component: PopularBook ,},
    { path: '/order', name: 'order', component: Order,},
   

    // admin
    { path: '/admin',name: 'admin', component: Admin,},
    { path: '/admin/addbook',name: 'addbook', component: AddBook,},
    { path: '/admin/addpublisher',name: 'addpublisher', component: AddPublisher,},
    { path: '/admin/detailbookadmin', name: 'detailbookadmin', component: DetailBookAdmin},
    { path: '/admin/detailpublisher', name: 'detailpublisher', component: DetailPublisher},
    { path: '/admin/detailbook/updatebook/:id', name: 'updatebook', component: UpdateBook},
    { path: '/admin/detailpublisher/updatepublisher/:id', name: 'updatepublisher', component: UpdatePublisher},
    { path: '/admin/rule', name: 'rule', component: Rule},
    
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
