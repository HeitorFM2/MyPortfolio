<template>
  <q-page class="q-pr-md q-pl-md q-pt-md q-pb-md">
    <div class="q-pa-md">
      <q-toolbar>
        <q-toolbar-title
          class="text-center text-h2 text-weight-bold q-ma-sm q-pa-md"
        >
          My Skills
        </q-toolbar-title>
      </q-toolbar>
      <div class="text-center q-mb-lg">
        <span class="text-subtitle1"
          >Here are some of my main competencies</span
        >
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
                  <q-item-section class="text-h6">{{
                    item.title
                  }}</q-item-section>
                  <q-item-section class="text-right">
                    <span>
                      <q-rating
                        v-model="item.ratingModel"
                        size="2em"
                        :color="$q.dark.isActive ? 'blue-10' : 'grey-4'"
                        :color-selected="$q.dark.isActive ? 'blue-3' : 'grey-8'"
                        readonly
                      />
                    </span>
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
                  <q-item-section class="text-h6">{{
                    item.title
                  }}</q-item-section>
                  <q-item-section class="text-right">
                    <span>
                      <q-rating
                        v-model="item.ratingModel"
                        size="2em"
                        :color="$q.dark.isActive ? 'blue-10' : 'grey-4'"
                        :color-selected="$q.dark.isActive ? 'blue-3' : 'grey-8'"
                        readonly
                      />
                    </span>
                  </q-item-section>
                </q-item>
              </div>
            </q-list>
          </q-intersection>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, onBeforeMount, ref } from "vue";
import { hideLoading, showLoading } from "src/util/plugins";

const FrontEnd = [
  {
    title: "HTML5",
    ratingModel: 5,
  },
  {
    title: "CSS3",
    ratingModel: 4,
  },

  {
    title: "Javascript",
    ratingModel: 4,
  },
  {
    title: "ReactJs",
    ratingModel: 3,
  },
  {
    title: "VueJs",
    ratingModel: 2,
  },
];

const BackEnd = [
  {
    title: "SQL",
    ratingModel: 4,
  },
  {
    title: "Python",
    ratingModel: 3,
  },
  {
    title: "PHP",
    ratingModel: 3,
  },

  {
    title: "Spring boot",
    ratingModel: 2,
  },
  {
    title: "NodeJs",
    ratingModel: 2,
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
