<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar
        :class="
          $q.dark.isActive ? 'bg-grey-9 text-white' : 'bg-grey-4 text-black'
        "
      >
        <div class="gt-sm">
          <q-btn stretch flat label="Home" />
          <q-btn stretch flat label="Career" to="/tab2" />
          <q-btn stretch flat label="Skills" to="/" />
          <q-btn stretch flat label="Projects" to="/" />
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
        <q-tabs v-model="tab" shrink>
          <q-tab name="tab1">
            <q-toggle
              v-model="darkModeToggle"
              checked-icon="nightlight"
              color="black"
              unchecked-icon="sunny"
              @update:model-value="setDarkMode()"
            />
            <q-tooltip> Modo escuro </q-tooltip>
          </q-tab>
          <q-tab name="tab2" label="Portfolio v 2.0">
            <q-tooltip> Versão do projeto </q-tooltip>
          </q-tab>
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
      <h1 class="my-class">AAA</h1>
      <h1 class="my-class">AAA</h1>
      <h1 class="my-class">AAA</h1>
      <h1 class="my-class">AAA</h1>
      <h1 class="my-class">AAA</h1>
      <h1 class="my-class">AAA</h1>
      <h1 class="my-class" name="tab2">BBB</h1>
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import { Dark } from "quasar";
import EssentialLink from "components/EssentialLink.vue";

const linksList = [
  {
    title: "Meu Github",
    caption: "github.com/quasarframework",
    icon: "code",
    link: "https://github.com/heitorfm2",
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
