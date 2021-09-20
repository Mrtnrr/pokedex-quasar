<template>
  <main class="q-pa-md">
    <div class="row">
      <div class="col-12 col-md-9">
        <q-table :columns="columnsUsers" :data="users" row-key="name" dark>
         <template v-slot:top>
            <div class="row" style="width: -webkit-fill-available;">
                <div class="col-12 col-md-6 ">
                <q-input
                  placeholder="Buscar Usuario"
                  class="q-mx-md"
                  v-model="search"
                  autofocus
                  dark
                  filled
                >
                  <template v-slot:prepend>
                    <div>
                      <q-icon name="search" />
                    </div>
                  </template>
                </q-input>
                </div>
                <div class="col-12 col-md-3 q-pa-sm text-subtitle1 text-center" >Usuarios</div>
                <div class="col-12 col-md-3 text-right">
                    <q-btn @click="addUser = true"  class="q-btn-style q-mx-sm" rounded dense icon="add_circle" />
                </div>
            </div>
            
          </template>
          <!-- nombre -->
          <template v-slot:body-cell-nombre="props">
            <q-td class="text-center" :props="props">
              {{ props.row.first_name }}
            </q-td>
          </template>

          <!-- apellidos -->
          <template v-slot:body-cell-apellidos="props">
            <q-td class="text-center" :props="props">
              {{ props.row.last_name }}
            </q-td>
          </template>
          <!-- tipo -->
          <template v-slot:body-cell-tipo="props">
            <q-td class="text-center" :props="props">
              {{ props.row.type }}
            </q-td>
          </template>

          <!-- activo -->
          <template v-slot:body-cell-activo="props">
            <q-td class="text-center" :props="props">
              {{ props.row.active == true ? "si" : "no" }}
            </q-td>
          </template>

          <!-- actions -->
          <template v-slot:body-cell-actions="props">
            <q-td class="text-center" :props="props">
              <q-btn
                v-on:click="openModalEdit(props.row)"
                outline
                rounded
                dense
                class="q-btn-style q-mx-sm"
                icon="edit"
              />
              <q-btn
                outline
                rounded
                dense
                class="q-btn-style q-mx-sm"
                icon="plagiarism"
              />
              <q-btn @click="disableUser(props.row._id)" class="q-btn-style q-mx-sm" rounded dense icon="delete" />
            </q-td>
          </template>
        </q-table>
      </div>
      <div class="col-12 col-md-3"></div>
    </div>
    <q-dialog v-model="edit">
      <q-card class="q-card-default">
        <q-card-section class="text-center text-white">
          <div class="text-h4">Editar Usuario</div>
        </q-card-section>
        <q-card-section >
          <q-form>
            <div class="row q-pa-md q-gutter-md">
              <div class="col-12">
                <q-input placeholder="Nombre" class="q-mx-md" v-model="userData.first_name" dense autofocus dark rounded outlined  >
                  <template v-slot:prepend>
                    <div>
                      <q-icon name="assignment" />
                    </div>
                    </template>
                </q-input>
              </div>
              <div class="col-12">
                <q-input placeholder="Apellidos" class="q-mx-md" v-model="userData.last_name" dense autofocus dark rounded outlined  >
                  <template v-slot:prepend>
                    <div>
                      <q-icon name="assignment" />
                    </div>
                    </template>
                </q-input>
              </div>
            </div>
            <div class="row" style="padding-left: 1em;">
              <div class="col-12 col-md-6" style="padding-bottom: 1em;">
                <q-input placeholder="Usuario" class="q-mx-lg" v-model="userData.nick_name" dense autofocus dark rounded outlined  >
                  <template v-slot:prepend>
                    <div>
                      <q-icon name="person_outline" />
                    </div>
                    </template>
                </q-input>
              </div>
               <div class="col-12 col-md-6">
                <q-select class="q-mx-lg" v-model="userData.type" :options="['admin', 'user']" dense autofocus dark rounded outlined  >
                  <template v-slot:prepend>
                    <div>
                      <q-icon name="info" />
                    </div>
                    </template>
                </q-select>
               </div>
            </div>
            <div class="row q-pa-md q-gutter-md">
              <div class="col-12">
                <q-input placeholder="Email" class="q-mx-md" type="email" v-model="userData.email" dense autofocus dark rounded outlined  >
                    <template v-slot:prepend>
                      <div>
                        <q-icon name="mail" />
                      </div>
                      </template>
                </q-input>
              </div>
            </div>
            <div class="row">
                <div class="col-12 col-md-4 text-white text-center q-pa-sm">
                  Activo
                </div>
                <div class="col-12 col-md-8">
                  <q-item class="text-white">
                    <q-item-section top class="items-center" >
                       <q-radio dense v-model="userData.active" :val="true" label="Si" />
                    </q-item-section>
                    <q-item-section top class="items-center">
                          <q-radio dense v-model="userData.active" :val="false" label="No" />
                    </q-item-section>
                  </q-item>
                </div>
            </div>
            <q-scroll-area style="width: 35em; height: 10em;">
                  <div class="row" style="padding-left: 1.5em;">
                      <div class="col-12 col-md-4" v-for="(area,i) in areas" :key="i">
                        <div class="q-gutter-sm ">
                          <q-checkbox class="text-uppercase text-white" v-model="userData.areas" :val="area._id" :label="area.key_code" />
                        </div>
                       </div>
                  </div>
            </q-scroll-area>
              <br>
              <!-- <div class="col-12 col-md-6">
                <q-input placeholder="Contraseña" class="q-mx-lg" v-model="userData.password" :type="isPwd ? 'password' : 'text'" dense autofocus dark rounded outlined  >
                  <template v-slot:prepend>
                    <div>
                      <q-icon name="assignment" />
                    </div>
                    </template>
                      <template v-slot:append>
                  <q-icon
                    :name="isPwd ? 'visibility_off' : 'visibility'"
                    class="cursor-pointer"
                    @click="isPwd = !isPwd"
                  />
                </template>
                </q-input>
              </div> -->
        
       
            <div class="col-12 text-center">
              <q-btn
                @click="updateUser"
                no-caps
                color-text="white"
                style="width: 14em;"
                class="q-btn-style btn-width"
                type="button"
                >Guardar
              </q-btn>
            </div>
          </q-form>
        </q-card-section>
      </q-card>
    </q-dialog>
    <q-dialog v-model="addUser">
     <q-card class="q-card-default">
       <FormRegisterComponent @closeRegister="closeModal" />
     </q-card>
    </q-dialog>
  </main>
</template>

<script>
import FormRegisterComponent from '../../components/homePage/FormRegister.vue';

export default {
  name: "Users",
  components: {
    FormRegisterComponent,
  },
  data: () => {
    return {
      search: "",
      users: [],
      areas:[],
      edit: false,
      isPwd: true,
      addUser: false,
      userData: {
        email: "",
        nick_name: "",
        password: null,
        type: "Tipo de usuario",
        first_name: "",
        last_name:"",
        active:null,
        areas:[]
      },
      columnsUsers: [
        { name: "nombre", label: "Nombre", field: "nombre", align: "center" },
        {
          name: "apellidos",
          label: "Apellidos",
          align: "center",
          field: "apellidos",
        },
        {
          name: "tipo",
          label: "Tipo",
          field: "tipo",
          sortable: true,
          align: "center",
        },
        { name: "activo", label: "Activo", field: "activo", align: "center" },
        {
          name: "actions",
          label: "Acciones",
          field: "actions",
          align: "center",
        },
      ],
    };
  },
  watch: {
    search: function (current, old) {
      this.getUsers();
    },
  },
  async mounted() {
    //carga data por primera vez
    await this.getUsers();
  },

  methods: {
    async closeModal(){
      this.addUser = false;
    },
    async disableUser(user){
      try {
        await this.$axios.delete(`/users/${user}`);
        await this.getUsers()
      } catch (error) {
        console.log(error,'error to disable user');
      }
    },
    async updateUser(){
      try {
        await this.$axios.put(`/users/${this.userData._id}`,{...this.userData});
        this.edit = false;
      } catch (error) {
        console.log(error,'error in update user');
      }
    },
    async openModalEdit(user){
      try {
        this.edit = true;
        this.userData = user;
        await this.getAreas();
      } catch (error) {
        console.log(error,'error to find user');
      } 
    },
    async getUsers() {
      try {
        //obten datos si existe un caracter de lo contrareo obten todo
        let key = this.search != "" ? "filter" : "todo";
        let { data } = await this.$axios.get(
          `/users/all/${key}/${this.search ? this.search : null}`
        );
        this.users = data.list;
      } catch (error) {
        console.log(error, "error to load info users");
      }
    },
    async getAreas() {
      try {
        let { data } = await this.$axios.get(
          `/areas/all/todo/null`
        );
        this.areas = data.list;
      } catch (error) {
        console.log(error, "error to load info areas");
      }
    },
  },

};
</script>

<style lang="scss" scoped>

</style>