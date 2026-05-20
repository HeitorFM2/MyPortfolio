<template>
  <q-page class="q-pa-md">
    <div class="text-center q-mt-md q-mb-md">
      <div class="text-h3 text-weight-bold q-mb-sm">
        {{ t.contact.pageTitle }}
      </div>
    </div>
    <q-separator class="q-mb-xl" />

    <div class="q-pa-md q-ma-lg">
      <div class="flex flex-center">
        <q-intersection transition="scale" style="width: 600px">
          <q-card
            class="q-pa-lg"
            :class="$q.dark.isActive ? 'bg-grey-10' : 'bg-grey-4'"
          >
            <q-card-section>
              <q-form class="q-gutter-md" @submit.prevent="submitForm">
                <q-input :label="t.contact.name" filled v-model="form.name" />
                <q-input
                  type="email"
                  :label="t.contact.email"
                  filled
                  v-model="form.email"
                />
                <q-input
                  v-model="form.message"
                  type="textarea"
                  :label="t.contact.message"
                  filled
                  input-style="resize: none;"
                />
                <q-btn :label="t.contact.send" type="submit" color="primary" />
              </q-form>
            </q-card-section>
          </q-card>
        </q-intersection>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { reactive } from "vue";
import {
  hideLoading,
  showLoading,
  showPositiveNotify,
  showNegativeNotify,
} from "src/util/plugins";
import { sendEmail } from "src/services/email";
import { useI18n } from "src/i18n";

defineOptions({ name: "ContactPage" });

const { t } = useI18n();
const form = reactive({ name: "", email: "", message: "" });

async function submitForm() {
  showLoading(t.value.contact.sending);
  try {
    const response = await sendEmail({
      name: form.name,
      email: form.email,
      message: form.message,
    });
    if (response.data.success) {
      showPositiveNotify(t.value.contact.success);
      Object.assign(form, { name: "", email: "", message: "" });
    } else {
      showNegativeNotify(t.value.contact.error);
    }
  } catch {
    showNegativeNotify(t.value.contact.error);
  } finally {
    hideLoading();
  }
}
</script>
