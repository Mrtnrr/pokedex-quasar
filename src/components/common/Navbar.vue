<!--  nuevo -->
<template>  
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
</template>
<!-- nuevo -->

<script>
export default {
  name: "NavbarComponent",
  data() {
    return {
      // 
      drawer:false,
    };
  },
  methods: {},
};
</script>

<style lang="scss">
.navbar {
  width: 100%;
  background: $black1;
  height: $header_height;
  // display: flex;
  // align-items: center;
  // justify-content: center;
  z-index: 2;

  .col-one{
        //padding: 0 0 0 42%;

      .logo-container {
        display: flex;
        align-items: center;
        justify-content: center;
        height: $header_height;

        h1 {
          font-size: 18px;
          color: white;
          margin-left: 10px;
          font-weight: bolder;
        }
      }
  }

  .col-two {
    padding: 0 0 0 30%;
     .just-items{
       padding: 10px 50px 0px 0px;
     }
  }
}
</style>
