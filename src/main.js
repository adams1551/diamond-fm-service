import Vue from 'vue'
import App from './App.vue'
import router from './router'
import UserService from './service/user'

import './assets/vendors/mdi/css/materialdesignicons.min.css'
import './assets/vendors/css/vendor.bundle.base.css'
import './assets/vendors/flag-icon-css/css/flag-icon.min.css'
import './assets/vendors/jvectormap/jquery-jvectormap.css'
import './assets/css/demo/style.css'
import './assets/js/preloader.js'

Vue.config.productionTip = false
// Vue.use(LoadScript)

router.beforeEach((to, from, next) => {
  // to and from are both route objects. must call `next`.
  if (to.matched.some(record => record.meta.forVisitors)) {

          next();
      
  } else if (to.matched.some(record => record.meta.forAuth)) {
      if (!localStorage.getItem("_au_si_")) {
          next({
              path: "/login",
              query: { redirect: to.fullPath }
          });
      } 
      else {
          if(to.matched.some(record => record.meta.forAdmin)){
            console.log('admin area');
            console.log(UserService.getActiveUser());
              let userRole = UserService.getActiveUser().roles;
              let previousRoute = from;
              if(userRole.includes('ROLE_ADMIN')){
                  console.log('adamin area 2')
                  next();
                  return;
              }else {
                  next(previousRoute.fullPath);
              }
          }           
      }
  } else {
      {
          next();
      }
  }
});

new Vue({
  render: h => h(App),
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
}).$mount('#app');
