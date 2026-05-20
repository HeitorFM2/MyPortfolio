<template>
  <q-page class="q-pa-md">
    <div class="menu-body">
      <div class="row justify-evenly items-center q-col-gutter-xl">
        <q-intersection transition="scale">
          <q-card
            class="my-description q-pa-xl"
            :class="$q.dark.isActive ? 'bg-grey-10' : 'bg-grey-4'"
          >
            <q-card-section>
              <div class="text-h4 text-weight-bold q-mb-xs">
                Heitor Melegate
              </div>
              <div class="text-h6 text-primary q-mb-md">{{ t.home.role }}</div>
              <q-separator class="q-mb-md" />
              <div class="text-body1 text-weight-light text-justify q-mb-md">
                {{ t.home.bio }}
              </div>
              <div class="q-gutter-xs">
                <q-chip
                  v-for="tag in stack"
                  :key="tag"
                  dense
                  color="primary"
                  text-color="white"
                >
                  {{ tag }}
                </q-chip>
              </div>
            </q-card-section>

            <q-card-actions class="q-mt-sm q-gutter-sm">
              <q-btn
                color="primary"
                icon-right="file_download"
                :label="t.home.downloadCV"
                @click="downloadCV"
              />
              <q-btn
                round
                flat
                icon="bi-github"
                color="primary"
                @click="openLink('https://github.com/HeitorFM2')"
              >
                <q-tooltip>GitHub</q-tooltip>
              </q-btn>
              <q-btn
                round
                flat
                icon="bi-linkedin"
                color="primary"
                @click="
                  openLink(
                    'https://www.linkedin.com/in/heitor-melegate-a0b6b922a/'
                  )
                "
              >
                <q-tooltip>LinkedIn</q-tooltip>
              </q-btn>
              <q-btn
                round
                flat
                icon="bi-instagram"
                color="primary"
                @click="openLink('https://www.instagram.com/heitorfm_dev')"
              >
                <q-tooltip>Instagram</q-tooltip>
              </q-btn>
            </q-card-actions>
          </q-card>
        </q-intersection>

        <q-img
          src="../assets/images/my.png"
          class="gt-sm"
          style="height: 400px; max-width: 420px; border-radius: 12px"
        />
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { useI18n } from "src/i18n";

defineOptions({ name: "HomePage" });

const { t, currentLang } = useI18n();

const cvFiles = {
  en: "/Heitor_Melegate_Resume.pdf",
  "pt-BR": "/Heitor_Melegate_Curriculo.pdf",
};

const stack = [
  "C# / .NET",
  "Java",
  "Go",
  "Microservices",
  "Docker",
  "Kubernetes",
];

function downloadCV() {
  const link = document.createElement("a");
  link.href = cvFiles[currentLang.value];
  link.download = cvFiles[currentLang.value].slice(1);
  link.click();
}

function openLink(url) {
  window.open(url, "_blank");
}
</script>
