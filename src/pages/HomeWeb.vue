<template>
  <div class="" style="overflow: overlay">
    <div class="home-web row justify-center">
      <div class="bg-col text-white" v-bind:class=" dialog === null ? 'col-12':'col-12' || dialog === true ? 'col-md-8':'col-12' ||  dialog === false ? 'col-md-8':'col-12'  "   >
        <div class="row">
          <div
            class="col-12 text-withe justify-center"
            style="height: 20vh; width: 100vw; max-width: fit-content"
          >
            <q-item class="text-white col-one">
              <q-item-section top style="width: 0em; padding: 40px 10px 0 0px;">
              </q-item-section>
                  <div class="q-pl-xl">
                    <q-item-label><h4><strong>System CUI</strong></h4></q-item-label>
                  </div>
            </q-item>
          </div>
          <div
            class="col-12 text-white ajuste"
            style="height: 80vh; padding: 8em 0px 0 3em"
          >
            <div>
              <span @click="dialog == true ?  dialog = false : dialog = true" class="text-h1 text-center text-white " style="font-size: clamp(35px, 6vw, 7vw);">
               Bienvenido
              </span>
            </div>
            <div class="col-subtitle">
              <span class="text-h5 text-left text-white" style="font-size: clamp(25px, 5vw, 3vw);">
                <strong>Sistema Control de Documentos Universidad de Ixtlahuaca CUI</strong>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4" v-if="dialog === true">
       <!-- <q-dialog  v-model="dialog" position="right" >  -->
        <FormLoginComponent />
       <!-- </q-dialog> -->
      </div>
      <div class="col-md-4" id="Register">
        <FormRegisterComponent v-if="dialog === false" />
      </div>
      <div class="row bg-col-five text-white ">
        <div class="col-sm-4 q-pl-xl">
          <q-item class="text-white col-one flex justify-center">

            <div class="flex flex-center">
              <q-item-label><h4><strong>System CUI</strong></h4></q-item-label>
            </div>

          </q-item>
        </div>

        <div class="col-sm-8 q-pa-xl flex flex-center menuFoot" style="text-align: right;">
          <div class="flex flex-center menuFoot">
            <q-btn color="primary" icon="check" label="Consulta" @click="prueba" />
          Km 1, Carretera Ixtlahuaca Jiquipilco, San Pedro, 50740 Ixtlahuaca de Rayón, México.
          Teléfono: 01(800) 50 59 610, 01(712) 28 31 012
          </div>
        </div>
      </div>

    </div>

  </div>

</template>

<script>
import FormLoginComponent from 'components/homePage/FormLogin.vue';
import FormRegisterComponent from 'components/homePage/FormRegister.vue';

export default {
  name: "HomeWeb",
  components: {FormLoginComponent, FormRegisterComponent},
  data() {
    return {
      activeForm: false,
      position: 'right',
      dialog: true,
    };
  },
  methods: {
    async prueba(){
      let { data } = await this.$axios.get('/users/agg')
      let result = data.data;
      console.log(data,'success');
    }
  },
  computed:{}
};
</script>

<style scoped lang="scss">
.home-web {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .bg-col {
    background: round;
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url("../assets/img/fondo_b.jpg");
    background-size: cover;
    height: 80vh;

    .col-one {
      margin: 2em 0 0 6em;
      .item-logo {
        height: 90%;
        width: auto;
        margin: 0 0 0 20px;
      }
      .item-title {
        height: auto;
        left: 25px;
        position: absolute;
      }
    }
    .col-subtitle {
      padding: 0 10em 0px 0px;
    }
    .col-two {
      margin: 0px 21em 0 0px;
      .color-btn {
        // color: #ef372e;
      }
      .btn-width {
        width: 10em;
      }
    }
  }

  .bg-col-five{
    width: 100vw;
    height: 20vh;
    background: #222;  
    
   .first-column{
     padding: 5em 21em 0 0px;
    .col-one {
      margin: 2em 0 0 6em;
      .item-logo {
        height: 90%;
        width: auto;
        margin: 0 0 0 20px;
      }
      .item-title {
        height: auto;
        left: 25px;
        position: absolute;
      }
    }
   } 

   .second-column{
     padding: 8.2em 0 0 20em;
     .color-chip{
       background: #222222;
     }
   }
  }

}


.sectionRegister{
  min-height:500px;
  width:100%;
  background:grey;

}

.ttxto{
  font-size: 2rem;
  font-weight: 700;
  line-height: 3.125rem;
  letter-spacing: normal;
  padding-top: 50px;
}

//proof

$xs-breakpoint: 718px;
$sm-breakpoint: 1024px;
$md-breakpoint: 1439px;
$lg-breakpoint: 1920px;

.container,
.container-sm,
.container-md,
.container-lg,
.container-xl {
  width: 100%;
  margin-right: auto;
  margin-left: auto;
}

@media (min-width: $xs-breakpoint) {
  .container,
  .container-sm {
    max-width: 540px;
  }
}

@media (min-width: $sm-breakpoint) {
  .container,
  .container-sm,
  .container-md {
    max-width: 920px;
  }
}

@media (min-width: $md-breakpoint) {
  .container,
  .container-sm,
  .container-md,
  .container-lg {
    max-width: 1140px;
  }
}

@media (min-width: $lg-breakpoint) {
  .container,
  .container-sm,
  .container-md,
  .container-lg,
  .container-xl {
    max-width: 1440px;
  }
}

@media screen and (max-width: 768px) {
  .home-web{
    .col-one{
      margin:0 0 0 0 !important;
    }
  }

  .home-web {
    .col-subtitle{
      padding:0 !important;
    }

    .col-two {
      margin: 0px 0em 0 0px !important;
    }
  }

  .ajuste{
    padding: 0em 0px 0 0em !important;
    text-align: center;
    height: auto !important;

  }

  @media screen and (max-width: 375px) {
    .col-two  button{
      margin-left: 0px !important;
    }

    ajuste{
      height: auto !important;
    }

    .containerCustom{
      padding-left:0 !important;
    }

    .menuFoot{
      display: grid;
      width:100%;
    }

    
  }
}


</style>
