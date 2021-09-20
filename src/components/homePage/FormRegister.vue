<template>
  <div class="row">
    <q-card class="my-card-register q-card-default-noShadow">
      <q-card-section class="text-center">
        <div class="text-subtitle2 text-uppercase text-white">
          <h6>Nuevo Usuario</h6>
        </div>
      </q-card-section>
      <q-card-section>
        <q-form class="q-gutter-xs">
          <div class="row">
            <div class="col-12 align-input-col-12">
              <q-input
                dense
                rounded
                standout
                color="white"
                bg-color="grey-10"
                v-model="userData.first_name"
                placeholder="Nombre"
                no-error-icon
              >
                <template v-slot:error>
                  <!-- <span class="text-white">birthday is required</span> -->
                </template>
                <template v-slot:prepend>
                  <q-icon size="xs" name="assignment" color="white" />
                </template>
              </q-input>
            </div>
            <br>
            <br>
            <br>
            <div class="col-12 align-input-col-12">
              <q-input
                dense
                rounded
                standout
                color="white"
                bg-color="grey-10"
                v-model="userData.last_name"
                placeholder="Apellidos"
                no-error-icon
              >
                <template v-slot:error>
                  <!-- <span class="text-white">birthday is required</span> -->
                </template>
                <template v-slot:prepend>
                  <q-icon size="xs" name="assignment" color="white" />
                </template>
              </q-input>
            </div>
            <br><br><br>
            <div class="col-md-6 align-input-col-6">
              <q-input
                class="text-white"
                type="text"
                dense
                rounded
                label-color="white"
                standout
                color="white"
                bg-color="grey-10"
                v-model="userData.nick_name"
                placeholder="User"
                :error="isValidNick"
                no-error-icon
              >
                <template v-slot:prepend>
                  <q-icon size="sm" name="person_outline" color="white" />
                </template>
                <template v-slot:error>
                  <!-- <span class="text-white">nick name is required</span> -->
                </template>
              </q-input>
            </div>
               <div class="col-md-6 align-input-col-6">
               <q-select
                v-model="userData.type"
                :options="['admin', 'user']"
                class="text-white"
                dark
                dense
                rounded
                label-color="white"
                standout
                color="white"
                bg-color="grey-10"
                placeholder="Tipo de usuario"
              >
                <template v-slot:prepend>
                  <q-icon size="xs" name="info" color="white" />
                </template>
              </q-select>
            </div>
            <div class="col-12 align-input-col-12">
              <q-input
                class="text-white"
                dense
                rounded
                label-color="white"
                standout
                color="white"
                bg-color="grey-10"
                no-error-icon
                :type="isPwd ? 'password' : 'text'"
                v-model="userData.password"
                placeholder="Contraseña"
                :error="isValidpsw"
              >
                <template v-slot:prepend>
                  <q-icon size="sm" name="vpn_key" color="white" />
                </template>
                <template v-slot:append>
                  <q-icon
                    :name="isPwd ? 'visibility_off' : 'visibility'"
                    class="cursor-pointer"
                    @click="isPwd = !isPwd"
                  />
                </template>
                <template v-slot:error>
                  <!-- <span class="text-white">password is required</span> -->
                </template>
              </q-input>
            </div>

            <div class="col-12 align-input-col-12">
              <q-input
                v-model="userData.email"
                class="text-white"
                type="email"
                dense
                rounded
                label-color="white"
                standout
                color="white"
                bg-color="grey-10"
                placeholder="Email"
                :error="isValidemail"
                no-error-icon
              >
                <template v-slot:error>
                  <!-- <span class="text-white">email is required</span> -->
                </template>
                <template v-slot:prepend>
                  <q-icon size="xs" name="mail" color="white" />
                </template>
              </q-input>
            </div>
            <div  class="col-12 align-input-col-12">
              <q-scroll-area style="width: 35em; height: 10em;">
                    <div class="row" style="padding-left: 1.5em;">
                        <div class="col-12 col-md-4" v-for="(area,i) in areas" :key="i">
                          <div class="q-gutter-sm ">
                            <q-checkbox class="text-uppercase text-white" v-model="userData.areas" :val="area._id" :label="area.key_code" />
                          </div>
                        </div>
                    </div>
              </q-scroll-area>
            </div>
            <br /><br /><br />
          </div>
          <div class="col-12 text-center">
            <q-btn
              @click="registerUser"
              no-caps
              color-text="white"
              class="q-btn-style btn-width"
              type="button"
              >Register
            </q-btn>
          </div>
        </q-form>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import { NotifyPersonal } from "../../boot/notifications.js";
export default {
  name: "FormRegisterComponent",
  props: {},
  data() {
    return {
      areas:[],
      userData: {
        email: "",
        nick_name: "",
        password: "",
        type: "Tipo de usuario",
        first_name: "",
        last_name: "",
        areas: [],
      },
      dialog: false,
      isPwd: true,

    };
  },
  async mounted() {
    await this.getAreas();
  },
  methods: {
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
    async registerUser() {
      try {
        if (this.userData.first_name == "")
          return NotifyPersonal("Error", "nombre is required");
        if (this.userData.last_name == "")
          return NotifyPersonal("Error", "apellidos is required");
        if (this.userData.nick_name == "")
          return NotifyPersonal("Error", "usuario is required");
        if (this.userData.password == "")
          return NotifyPersonal("Error", "password is required");
        if (this.userData.areas == [])
          return NotifyPersonal("Error", "choose a area");
        if (this.userData.type == "")
          return NotifyPersonal("Error", "tipo de usuario requerido");
          let emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
          if (!emailRegex.test(this.userData.email))
            return NotifyPersonal("Error", "Email invalid, is required");

        let register = await this.$axios.post("/users/signin", {
          ...this.userData,
        });
        //realiza login si fue exitoso
        if (register.data.user) {
          this.$emit('closeRegister');
             this.userData = {
              email: "",
              nick_name: "",
              password: "",
              type: "Tipo de usuario",
              first_name: "",
              last_name: "",
              areas: [],
            },
          this.$store.commit("login", register.data.data);//almacena usuario el storage
        } else {
          // show bad register request message
        }
      } catch (error) {
            this.$emit('closeRegister');
             this.userData = {
              email: "",
              nick_name: "",
              password: "",
              type: "Tipo de usuario",
              first_name: "",
              last_name: "",
              areas: [],
            }
        // show error message on login
        if (error.response && error.response.status === 400) {
          NotifyPersonal("Error", `${error.response.data.message}`);
        }
      }
    },
  },
  computed: {
    isValidNick: function () {
      return this.userData.nick_name == "";
    },
    isValidpsw: function () {
      return this.userData.password == "";
    },
    isValidemail: function () {
      return this.userData.email == "";
    },
   
  },
};
</script>

<style lang="scss" scope>
.my-card-register {
  width: 95%;
  max-width: 100%;
  margin-left: 1em;

  .align-img {
    padding: 0 0 0 42%;

    .item-logo {
      height: 90%;
      width: auto;
      margin: 0 0 0 20px;
    }
  }

  .align-input-col-6 {
    padding: 0px 10px 20px 0px;

    .q-field__native,
    .q-field__prefix,
    .q-field__suffix,
    .q-field__input {
      color: white;
    }
  }

  .align-input-col-12 {
    padding: 0 0 0 0px;
    .q-field__native,
    .q-field__prefix,
    .q-field__suffix,
    .q-field__input {
      color: white;
    }

    .color-span {
      color: orange;
    }
  }

  .btn-width {
    width: 13em;
  }
}
</style>