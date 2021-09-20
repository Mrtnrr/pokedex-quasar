<template>
  <div class="row">
    <q-card class="my-card-login q-card-default-noShadow">
      <q-card-section class="text-center one-section">
        <div class="text-subtitle2  text-capitalize text-center text-white">
         <span> <h6>Acceso al sistema </h6></span>
        </div>
      </q-card-section>
      <q-card-section>
        <q-form class="">
          <div class="align-inputs q-gutter-xs">
            <q-input
              class="btn-width text-white text-center"
              type="text"
              dense
              rounded
              label-color="white"
              standout
              color="white"
              bg-color="grey-10"
              placeholder="Ingresa usuario"
              v-model.trim="user.nick_name"
              :error="isValidNick"
                no-error-icon

            >
              <template v-slot:error>
                <!-- <span class="text-white">nick name is required</span> -->
              </template>
              <template v-slot:prepend>
                <q-icon name="person_outline" color="white" />
              </template>
            </q-input>
            <q-input
              class="btn-width text-white text-center"
              type="password"
              dense
              rounded
              label-color="white"
              standout
              color="white"
              bg-color="grey-10"
              placeholder="contraseña"
              v-model.trim="user.password"
                :error="isValidpsw"
                no-error-icon

            >
              <template v-slot:error>
                <!-- <span class="text-white">password is required</span> -->
              </template>
              <template v-slot:prepend>
                <q-icon name="vpn_key" color="white" />
              </template>
            </q-input>
          </div>
          <div class="text-center q-pa-sm q-gutter-md">
            <q-btn
            @click="sendLogin()"
              no-caps
              color-text="white"
              class="q-btn-style btn-width"
              type="button"
              >Login</q-btn
            >
          </div>
          <br />
          <!-- <div class="text-center text-white">
            <span class="select-btn" @click="goRecoverPsw">¿Forgot Password?</span>
          </div> -->
        </q-form>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import { NotifyPersonal } from "../../boot/notifications.js";

export default {
  name: "FormLoginComponent",
  props: {},
  data() {
    return {
      user: {
        nick_name: "",
        password: "",
      },
      session: false,
    };
  },
  async created() {},
  methods: {
    async goRecoverPsw(){
      this.$router.push('/recover-password')
    },
    async sendLogin() {
      try {
        // Validate nick_name and password
        if (
          this.user.nick_name.trim() != "" &&
          this.user.password.trim() != ""
        ) {
          let { data } = await this.$axios.post("/users/login", this.user);
          let user = data.user;
          if (user && user.token && user.token.trim() != "") {
            this.$store.commit("login", user);
            this.$router.push("/app/last-updated-docs");
          } 
        } 
      } catch (error) {
        console.log("Found an error: ", error.message);
        if (error.response && error.response.status === 400) {
          NotifyPersonal("Error", `${error.response.data.message}`);
        }
      }
    },
  },
  computed: {
    isValidNick: function(){
     return this.user.nick_name == ''
    },
     isValidpsw: function(){
     return this.user.password == ''
    },
  },
};
</script>

<style lang="scss" scope>
.my-card-login {
  width: 95%;
  max-width: 100%;
  margin-left: 1em;

  .one-section {
    padding: inherit;
  }

  .align-img {
    padding: 0 0 0 42%;
    .item-logo {
      height: 90%;
      width: auto;
      margin: 0 0 0 20px;
    }
  }

  .align-inputs {
    text-align: -webkit-center;

    .q-field__native,
    .q-field__prefix,
    .q-field__suffix,
    .q-field__input {
      color: white;
    }
  }

  .btn-width {
    width: 20em;
  }
}
</style>