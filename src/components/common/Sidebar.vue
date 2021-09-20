<!-- nuevo -->
<template>
  <div class="menu" id="main-nav">
  <q-scroll-area class="fit">
    <q-list padding  v-if="'admin' == user.type">
      <q-item v-for="(item, index) in items"
          :key="index"
          clickable
          :to="item.to"
          class="q-pt-lg"
          :active="active === index"
          @click="active = index"
          active-class="active-menu-item"
        >
        <q-item-section v-if="item.icon" avatar>
          <div >
            <q-item-section top avatar>
                  <q-icon  v-bind:color="active == index ? 'light-blue-4' : 'white'" :name="item.icon" size="md"/>
             </q-item-section>

          </div>
          
        </q-item-section>

        <q-item-section v-bind:class="active == index ? 'colorImg' : 'img-white'">
          {{item.label}}
        </q-item-section>
        <q-menu v-if="item.menu == 'submenu'"
          fit
          anchor="center right" self="center left"
          :offset="[0, 0]"
          :content-style="{ background: '#354E65', color: 'white' }"
        >
          <q-item clickable v-for="(s, indx) in levels" :key="indx" :to="s.to" v-close-popup>
            <q-item-section> {{s.section}} </q-item-section>
          </q-item>
        </q-menu>

      </q-item>
    </q-list>
    <q-list padding v-else>
      <q-item v-for="(item, index) in forUser"
          :key="index"
          clickable
          :to="item.to"
          class="q-pt-lg"
          :active="active === index"
          @click="active = index"
          active-class="active-menu-item"
        >
        <q-item-section v-if="item.icon" avatar>
          <div >
            <q-item-section top avatar>
                  <q-icon  v-bind:color="active == index ? 'light-blue-4' : 'white'" :name="item.icon" size="md"/>
             </q-item-section>

          </div>
          
        </q-item-section>

        <q-item-section v-bind:class="active == index ? 'colorImg' : 'img-white'">
          {{item.label}}
        </q-item-section>
        <q-menu v-if="item.menu == 'submenu'"
          fit
          anchor="center right" self="center left"
          :offset="[0, 0]"
          :content-style="{ background: '#354E65', color: 'white' }"
        >
          <q-item clickable v-for="(s, indx) in levels" :key="indx" :to="s.to" v-close-popup>
            <q-item-section> {{s.section}} </q-item-section>
          </q-item>
        </q-menu>

      </q-item>
    </q-list>
  </q-scroll-area>
</div>
</template>
<!-- nuevo -->

<script>
export default {
  name: "SidebarComponent",
  data() {
    return {
      active: "",
      user:{},
      miniState: true,
      drawer: false,
       levels: [
        { 
          to:'/app/level1',
          section: "Nivel 1",
        },
        {
          to:'/app/level2',
          section: "Nivel 2",
        },
        {
          to:'/app/level3',
          section: "Nivel 3",
        },
        {
          to:'/app/level4',
          section: "Nivel 4",
        },
        // {
        //   section: "Team Chat/All",
        // },
      ],
    };
  },
  async mounted() {  
     this.user = this.$store.getters.user;
  },
  methods: {

  },
  computed: {
    items: () => {
      return [
        {
          to: "/app/areas",
          label: "Areas",
          src: "",
          icon: "business_center",
        },
          {
           to: "/app/documents",
           label: "Folders",
           src: "",
           icon: "folder_shared",
         },
          {
           to: "/app/my-files",
           label: "Archivos",
           src: "",
           icon: "upload_file",
         },
        {
          to: "/app/users",
          label: "Usuarios",
          type:"admin",
          src: "",
          icon: "recent_actors",
        },
        {
          label: "Niveles",
          src: "",
          menu:'submenu',
          icon: "dashboard_customize",
        },
        {
          to: "/app/master-list",
          label: "Lista Maestra",
          src: "",
          icon: "list_alt",
        },
        {
          to: "/login",
          label: "Logout",
          src: "",
          icon: "logout",
        },
      ];
    },
    forUser: () => {
      return [
        {
          to: "/app/areas",
          label: "Areas",
          src: "",
          icon: "business_center",
        },
          {
           to: "/app/documents",
           label: "Folders",
           src: "",
           icon: "folder_shared",
         },
          {
           to: "/app/my-files",
           label: "Archivos",
           src: "",
           icon: "upload_file",
         },
        {
          label: "Niveles",
          src: "",
          menu:'submenu',
          icon: "dashboard_customize",
        },
        {
          to: "/login",
          label: "Logout",
          src: "",
          icon: "logout",
        },
      ];
    },
  },
};
</script>

<style lang="scss">
#main-nav {
  //position: fixed;
  height: 100%;
  //width: $header_height;
  //background: $black1;
  //top: 0;
  //left: 0;
  //z-index: 3;

  button {
    background: transparent;
    border: 0;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 25px;
    cursor: pointer;
    width: 100%;

    &:focus {
      outline: 0;
    }

    &.selected {
      border-left: 4px solid $orange;
    }
  }

  #btn-toggle-nav {
    width: $header_height;
    height: $header_height;
  }

  .notification {
    position: fixed;
    height: 5px;
    padding: 0 0 0 2em;
  }
  .active-menu-item {
    border-left: 4px solid #4197ee;
  }


}
</style>
