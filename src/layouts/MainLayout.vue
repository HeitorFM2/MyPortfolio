<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar
        :class="
          $q.dark.isActive ? 'bg-grey-9 text-white' : 'bg-grey-4 text-black'
        "
      >
        <div class="gt-sm">
          <q-btn flat label="<Heitor Melegate/>" to="/" />
        </div>
        <div class="gt-sm">
          <q-btn
            v-for="(item, index) in essentialLinks"
            :key="index"
            stretch
            flat
            :label="item.title"
            :to="item.link"
          />
        </div>
        <div class="lt-md">
          <q-btn
            flat
            dense
            round
            icon="menu"
            aria-label="Menu"
            @click="toggleLeftDrawer"
          />
        </div>

        <q-space />

        <q-btn
          flat
          dense
          class="q-mr-sm"
          :label="currentLang === 'en' ? 'PT-BR' : 'EN'"
          @click="toggleLang"
        />

        <q-tabs shrink>
          <q-tab>
            <q-toggle
              v-model="darkModeToggle"
              checked-icon="nightlight"
              color="black"
              unchecked-icon="sunny"
              @update:model-value="setDarkMode"
            />
            <q-tooltip>
              {{ darkModeToggle ? t.darkMode.light : t.darkMode.dark }}
            </q-tooltip>
          </q-tab>
          <div>
            Portfolio v 2
            <q-tooltip>2026© Heitor Melegate</q-tooltip>
          </div>
        </q-tabs>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" bordered>
      <q-list>
        <q-item-label header />
        <EssentialLink
          v-for="(link, index) in essentialLinks"
          :key="index"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <RouterView />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref, computed } from "vue";
import { Dark } from "quasar";
import EssentialLink from "components/EssentialLink.vue";
import { useI18n } from "src/i18n";

defineOptions({ name: "MainLayout" });

const { t, currentLang, toggleLang } = useI18n();

const leftDrawerOpen = ref(false);
const darkModeToggle = ref(true);
Dark.set(true);

const essentialLinks = computed(() => [
  { title: t.value.nav.home, icon: "home", link: "/" },
  { title: t.value.nav.career, icon: "laptop", link: "/career" },
  { title: t.value.nav.skills, icon: "code", link: "/skills" },
  {
    title: t.value.nav.projects,
    icon: "integration_instructions",
    link: "/projects",
  },
  { title: t.value.nav.contact, icon: "contacts", link: "/contact" },
]);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}

function setDarkMode() {
  Dark.set(!Dark.isActive);
}
</script>
