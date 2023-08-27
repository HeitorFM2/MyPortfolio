<template>
  <q-page class="q-pd-md">
    <q-toolbar>
      <q-toolbar-title class="text-center text-h2 text-weight-bold q-ma-lg">
        My Skills
      </q-toolbar-title>
    </q-toolbar>
    <div class="text-center q-mb-md">
      <span class="text-caption"> Here are some of my main competencies </span>
    </div>
    <q-separator />
    <div class="q-gutter-xl q-mt-xl row justify-center">
      <div style="width: 500px">
        <q-intersection transition="scale">
          <q-list
            bordered
            class="rounded-borders"
            :class="!$q.dark.isActive ? 'bg-grey-4' : ''"
          >
            <q-toolbar
              class="rounded-borders"
              :class="$q.dark.isActive ? 'bg-grey-10' : ''"
            >
              <q-toolbar-title class="text-center">Front-End</q-toolbar-title>
            </q-toolbar>
            <div v-for="(item, index) in FrontEnd" :key="index">
              <q-separator />
              <q-item class="q-pa-md">
                <q-item-section class="text-h6">
                  {{ item.title }}
                </q-item-section>
              </q-item>
            </div>
          </q-list>
        </q-intersection>
      </div>
      <div style="width: 500px">
        <q-intersection transition="scale">
          <q-list
            bordered
            class="rounded-borders"
            :class="!$q.dark.isActive ? 'bg-grey-4' : ''"
          >
            <q-toolbar
              class="rounded-borders"
              :class="$q.dark.isActive ? 'bg-grey-10' : ''"
            >
              <q-toolbar-title class="text-center">Back-End</q-toolbar-title>
            </q-toolbar>
            <div v-for="(item, index) in BackEnd" :key="index">
              <q-separator />
              <q-item class="q-pa-md">
                <q-item-section class="text-h6">
                  {{ item.title }}
                </q-item-section>
              </q-item>
            </div>
          </q-list>
        </q-intersection>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, onBeforeMount, ref } from "vue";
import { hideLoading, showLoading } from "src/util/plugins";

const FrontEnd = [
  {
    title: "Javascript",
  },
  {
    title: "ReactJs",
  },
  {
    title: "VueJs",
  },
  {
    title: "Quasar",
  },
  {
    title: "HTML5",
  },
  {
    title: "CSS3",
  },
];

const BackEnd = [
  {
    title: "SQL",
  },
  {
    title: "Python (Flask, Selenium and Requests)",
  },
  {
    title: "Golang",
  },
  {
    title: "Spring boot",
  },
  {
    title: "PHP",
  },
  {
    title: "NodeJs",
  },
];

export default defineComponent({
  name: "SkillsPage",
  setup() {
    onBeforeMount(() => {
      showLoading("Carregando...");
      setTimeout(() => {
        hideLoading();
      }, 100);
    });

    return { BackEnd, FrontEnd };
  },
});
</script>
