<template>
  <div id="app-container" class="menu-sub-hidden show-spinner no-footer">
    <q-layout view="hHh Lpr lff" class="shadow-2 rounded-borders  ">
      <!-- navar -->
      <!-- <NavbarComponent/> -->
      <q-header elevated class="row bg-grey-10">
        <q-toolbar  class="col-10" style="font-weight: 900;">
          <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
              
              <q-toolbar-title class="text-center" style="font-weight: 900; font-size: 15px;">
               Universidad de Ixtlahuaca CUI
              </q-toolbar-title>  
              
        </q-toolbar>
        <q-toolbar class="col-2">
          <div style="display: flex;">
          </div>
          
        </q-toolbar>

      </q-header>
      <!-- navbar -->
      
      <q-drawer
        v-model="drawer"
        show-if-above

        :mini="miniState"
        @mouseover="miniState = false"
        @mouseout="miniState = true"
        mini-to-overlay

        :width="205"
        :breakpoint="500"
        bordered
        content-class="bg-grey-10 text-white p-0"
      >
      <SidebarComponent/>
      </q-drawer>

      <q-page-container>
        <q-page id="main-content" >
          <router-view/>
        </q-page>
        <!-- <div id="main-content">
          <router-view/>
        </div> -->
      </q-page-container>
    </q-layout>
  </div>
</template>

<!-- nuevo -->

<script>

  import NavbarComponent from "components/common/Navbar";
  import SidebarComponent from "components/common/Sidebar";

  export default {
    name: "MainLayout",
    components: {NavbarComponent, SidebarComponent},
    data(){
      return{
        drawer: false,
        miniState:true
      }
    },
    async mounted() {
    },
  };
</script>

<style lang="scss">
  #main-content {
    //position: absolute;
    top: 0;
    left: 0;
    //width: calc(100vw - #{$header_height});
    width:100%;
    height: calc(100vh - #{$header_height});
    //margin: $header_height 0 0 $header_height;
    background: $gris;
    z-index: 1;

    main, .row, .col {
      height: 100%;
    }
  }

  .q-header{
    height:70px;
  }

  .imgSpace{
    margin-left:8px;
  }

  @media (max-width: 768px) {
  .imgSpace{
    margin-left:0px;
  }
}
</style>
