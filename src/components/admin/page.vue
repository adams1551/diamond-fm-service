<template>
    <div class="body-wrapper">
        <SideMenu></SideMenu>
        <div class="main-wrapper mdc-drawer-app-content">
            <TopNavigation></TopNavigation>
            <div class="page-wrapper mdc-toolbar-fixed-adjust">
                <router-view></router-view>
                <Footer></Footer>
            </div>
        </div>

    </div>
</template>
<script>
import SideMenu from '../subcomponent/portal/sidemenu';
import TopNavigation from '../subcomponent/portal/topNavigation';
import Footer from '../subcomponent/portal/footer';
export default {
    name: 'adminPage',
    components: {
        SideMenu,
        TopNavigation,
        Footer
    }
}
</script>