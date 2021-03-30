import Vue from 'vue'
import Router from 'vue-router'

//authentication components
import SignInComponent from '../components/auth/signin'
import SignupComponent from '../components/auth/signup'

//home components
import IndexComponet from '../components/home/index'
import AboutComponent from '../components/home/about'

//admin component
import AdminDashboardComponent from '../components/admin/dashboard'
import AddAgentComponent from '../components/admin/agent'
import ProfileComponent from '../components/admin/profile'

//master pages
import AdminPage from '../components/admin/page'
import HomePage from '../components/home/page'
import AuthPage from '../components/auth/page'

//agent component
import AddUserComponent from '../components/Agent/AddUser'
import AgentDashboardComponent from '../components/Agent/AgentDashboard'
import agentLoginComponent from '../components/Agent/agentLogIn'
import SearchUserComponent from '../components/Agent/SearchUser'
Vue.use(Router)

export default new Router({
    routes:[
        {
            path:'/',
            name:'home',
            component: HomePage,
            children: [
                {
                    path: '/',
                    name: 'index',
                    component: IndexComponet,
                    meta: {
                        forVisitor: true,
                    }
                },
                {
                    path: '/about',
                    name: 'about',
                    component: AboutComponent,
                    meta: {
                        forVisitor: true,
                    },
                }
            ]
        },
        {
            path: '/login',
            name: 'auth',
            component: AuthPage,
            children: [
                {
                    path: '/',
                    name: 'login',
                    component: SignInComponent,
                },
                {
                    path: '/signup',
                    name: 'singup',
                    component: SignupComponent,
                }
            ]
        },
        {
            path: '/admin',
            name: 'admin',
            component: AdminPage,
            // meta: {
            //     forAdmin: true,
            //     forAuth: true
            // },
            children: [
               {
                    path: '/',
                    name: 'dashboard',
                    component: AdminDashboardComponent,
                    meta: {
                        forAdmin: true,
                        forAuth: true
                    }
                },
               {
                    path: '/add-agent',
                    name: 'addAgent',
                    component: AddAgentComponent,
                    meta: {
                        forAdmin: true,
                        forAuth: true
                    }
                },
                {
                    path: '/profile',
                    name: 'Profile',
                    component: ProfileComponent,
                    meta: {
                        forAdmin: true,
                        forAuth: true
                    }
                }
               
            ]
        },
        {
            path: '/',
            name: 'agent-login',
            component: agentLoginComponent,
            // meta: {
            //     forAdmin: true,
            //     forAuth: true
            // },
            children: [
               {
                    path: '/agent-dashboard',
                    name: 'agentDashboard',
                    component: AgentDashboardComponent,
                    meta: {
                        forAdmin: true,
                        forAuth: true
                    }
                },
               {
                    path: '/add-user',
                    name: 'addUser',
                    component: AddUserComponent,
                    meta: {
                        forAdmin: true,
                        forAuth: true
                    }
                },
                {
                    path: '/search-user',
                    name: 'searchUser',
                    component: SearchUserComponent,
                    meta: {
                        forAdmin: true,
                        forAuth: true
                    }
                }
               
            ]
        }
       
    ]
})