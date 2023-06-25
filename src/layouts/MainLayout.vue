<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar
        :class="
          $q.dark.isActive ? 'bg-grey-9 text-white' : 'bg-grey-4 text-black'
        "
        ref="tab"
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
        <q-tabs shrink>
          <q-tab>
            <q-toggle
              v-model="darkModeToggle"
              checked-icon="nightlight"
              color="black"
              unchecked-icon="sunny"
              @update:model-value="setDarkMode()"
            />
            <q-tooltip>
              {{ darkModeToggle ? "Modo claro" : "Modo escuro" }}
            </q-tooltip>
          </q-tab>
          <div>
            Portfolio v 2.0
            <q-tooltip> 2023© Heitor Melegate </q-tooltip>
          </div>
        </q-tabs>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" bordered>
      <q-list>
        <q-item-label header> </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <RouterView />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import { Dark } from "quasar";
import EssentialLink from "components/EssentialLink.vue";

const linksList = [
  {
    title: "Home",
    icon: "home",
    link: "/",
  },
  {
    title: "Career",
    icon: "laptop",
    link: "/career",
  },
  {
    title: "Skills",
    icon: "code",
    link: "/skills",
  },
  {
    title: "Projects",
    icon: "integration_instructions",
    link: "/projects",
  },
  {
    title: "Contact",
    icon: "contacts",
    link: "/contact",
  },
];

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
  },

  setup() {
    const leftDrawerOpen = ref(false);
    Dark.set(true);

    const animateDarkMode = (isDark) => {
      let root = document.documentElement;
      let initialColor = root.style.getPropertyValue("--bg-color-inverted");

      let finalColor = isDark ? "#252525" : "#fefefe";

      let animation = root.animate(
        {
          "--bg-color-inverted": [initialColor, finalColor],
          "--text-color": [initialColor, finalColor],
        },
        {
          duration: 200,
          fill: "both",
          easing: "ease",
        }
      );

      animation.play();
    };

    return {
      darkModeToggle: ref(true),
      essentialLinks: linksList,
      leftDrawerOpen,
      animateDarkMode,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
      setDarkMode() {
        let darkMode = Dark.isActive;
        Dark.set((darkMode = !darkMode));
        animateDarkMode(darkMode);
      },
    };
  },
});
</script>
