<template>
  <q-page class="q-pr-md q-pl-md q-pt-md q-pb-md">
    <div class="flex flex-center">
      <q-toolbar>
        <q-toolbar-title class="text-center text-h2 text-weight-bold q-pa-md">
          Contact me
        </q-toolbar-title>
      </q-toolbar>
    </div>
    <div class="q-pa-md q-ma-lg">
      <div class="flex flex-center">
        <q-intersection transition="scale" style="width: 600px">
          <q-card
            class="q-pa-lg"
            :class="$q.dark.isActive ? 'bg-grey-10' : 'bg-grey-4'"
          >
            <q-card-section>
              <q-form class="q-gutter-md" @submit.prevent="sendEmailContact">
                <q-input label="Nome" filled v-model="formEmail.name" />
                <q-input
                  type="email"
                  label="Email"
                  filled
                  v-model="formEmail.email"
                />
                <q-input
                  v-model="formEmail.messageBody"
                  type="textarea"
                  label="Mensagem"
                  filled
                  input-style="resize: none;"
                />

                <q-btn label="Enviar" type="submit" color="primary" />
              </q-form>
            </q-card-section>
          </q-card>
        </q-intersection>
      </div>
    </div>
  </q-page>
</template>

<script>
import {
  hideLoading,
  showLoading,
  showPositiveNotify,
  showNegativeNotify,
} from "src/util/plugins";
import {
  defineComponent,
  onBeforeMount,
  onMounted,
  reactive,
  ref,
  watch,
} from "vue";
import { sendEmail, teste } from "src/services/email";
export default defineComponent({
  name: "ContactPage",

  setup() {
    const state = reactive({
      data: [],
    });

    const formEmail = reactive({
      email: "",
      messageBody: "",
      name: "",
    });

    onBeforeMount(() => {
      showLoading("Carregando...");
      setTimeout(() => {
        hideLoading();
      }, 100);
    });

    async function sendEmailContact() {
      state.data = {
        name: formEmail.name,
        email: formEmail.email,
        message: formEmail.messageBody,
      };
      showLoading("Enviando email...");
      let response = await sendEmail(state.data);
      hideLoading();

      if (response.data.success) {
        showPositiveNotify("Email enviado com sucesso!");
      } else {
        showNegativeNotify("Erro ao enviar email!");
      }
    }

    return {
      state,
      sendEmailContact,
      formEmail,
    };
  },
});
</script>
