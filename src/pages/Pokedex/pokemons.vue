<template>
  <main class="q-pa-md">
    <div class="row row-init">
      <q-card
        class="my-card text-white"
        style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)"
      >
        <div class="row">
          <div class="col-8 col-md-8 col-lg-8 col-sm-12 col-xs-12">
            <q-scroll-area
              visible
              :thumb-style="thumbStyle"
              :bar-style="barStyle"
               style="height: 80vh;"
            >
              <div class="row q-pa-lg q-gutter-lg">
                <q-card class="col-3" v-for="(pk, i) in allsPokemons" :key="i"  >
                  <q-img :src="pk.image">
                    <div class="absolute-bottom">
                      <div class="text-h6 text-capitalize"> {{ pk.name }} </div>
                      <div class="text-subtitle2">{{ pk.id }}</div>
                      <div class="text-subtitle2"> {{ pk.type }}</div>
                    </div>
                  </q-img>

                  <q-card-actions>
                    <q-btn color="red" flat @click="imgDemo = pk " >Seleccionar</q-btn>
                    <q-btn color="red" text-color="black" flat>Action 2</q-btn>
                  </q-card-actions>
                </q-card>
              </div>
            </q-scroll-area>
          </div>
          <div class="col-4 col-md-4 col-lg-4 col-sm-12 col-xs-12">
             <q-card >
               <q-img :src="imgDemo.image ? imgDemo.image : allsPokemons[0].image">
                    <div class="absolute-bottom">
                      <div class="text-h6 text-capitalize"> {{ imgDemo.name ? imgDemo.name : allsPokemons[0].name }} </div>
                      <div class="text-subtitle2">{{ imgDemo.id ? imgDemo.id : allsPokemons[0].id }}</div>
                      <div class="text-subtitle2"> {{ imgDemo.type ? imgDemo.type : allsPokemons[0].type }}</div>
                    </div>
                  </q-img>

              </q-card>
          </div>
        </div>
      </q-card>
    </div>
  </main>
</template>

<script>
export default {
  //nombre del componente actual
  name: "pokemons",
  //variables de entorno global dentro de esta pagina
  data() {
    return {
      allsPokemons: [],
      imgDemo: '',

      thumbStyle: {
        right: '4px',
        borderRadius: '7px',
        backgroundColor: 'red',
        width: '4px',
        opacity: 0.75
      },

      barStyle: {
        right: '2px',
        borderRadius: '9px',
        backgroundColor: 'red',
        width: '8px',
        opacity: 0.2
      },
    };
  },
  async mounted() {
    try {
      let pokemon = [];

      for (let i = 1; i <= 50; i++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        let { data } = await this.$axios.get(url);
        pokemon.push(data);
      }

      let alls = pokemon.map((pk) => ({
        name: pk.name,
        image: pk.sprites["front_default"],
        type: pk.types.map((type) => type.type.name).join(", "),
        id: pk.id,
      }));

      this.allsPokemons = alls;
    } catch (error) {}
  },
  // son las funciones a ejecutar atraves de botones u acciones desde la pestaña
  methods: {},
};
</script>

<style scoped lang="scss">
main {
  height: 100vh;
  .row-init {
    display: flex;
    justify-content: center;
    align-content: flex-start;

    .my-card {
      width: 90vw;
      height: 90vh;
    }
  }
}
</style>