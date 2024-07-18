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
    <div class="q-ma-xl row justify-center">

      <div style="width: 500px" class="q-pa-md">
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
      </div>

      <div style="width: 500px" class="q-pa-md">
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
    title: "VueJs (Quasar)",
  }
];

const BackEnd = [
  {
    title: "SQL (MySQL, PostgreSQL and SQLServer)",
  },
  {
    title: "Python, Golang and API Rest",
  },
  {
    title: "Azure, AWS, Kubernetes and RabbitMQ",
  },
  {
    title: "Docker, Git and JWT",
  },
  {
    title: "Java and Spring Boot",
  },
  {
    title: "C#, .NET and Dapper",
  }
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
