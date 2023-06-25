<template>
  <q-page class="q-pr-md q-pl-md q-pt-md q-pb-md">
    <div class="flex flex-center">
      <q-toolbar>
        <q-toolbar-title class="text-center text-h2 text-weight-bold q-pa-md">
          Projects
        </q-toolbar-title>
      </q-toolbar>
      <div class="q-pa-md q-ma-lg" style="max-width: 950px">
        <div class="row justify-center">
          <q-intersection
            v-for="(item, index) in state.projectsData"
            :key="index"
            class="full-width"
            transition="scale"
            style="max-width: 300px"
          >
            <q-card
              :key="index"
              style="height: 300px"
              class="my-description q-ma-sm q-pa-md cursor-pointer"
              :class="$q.dark.isActive ? 'bg-grey-10' : 'bg-grey-4'"
              @click="locationURL(item.html_url)"
            >
              <q-card-section>
                <div class="text-h5 text-center q-ma-md">
                  {{ item.name }}
                </div>
                <q-separator />
                <div class="text-body1 text-weight-thin text-center q-pt-md">
                  {{ item.description }}
                </div>
              </q-card-section>
            </q-card>
          </q-intersection>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { hideLoading, showLoading } from "src/util/plugins";
import { defineComponent, onBeforeMount, onMounted, reactive } from "vue";

export default defineComponent({
  name: "ProjectsPage",

  setup() {
    const state = reactive({
      projectsData: [],
    });

    onBeforeMount(() => {
      showLoading("Carregando...");
      setTimeout(() => {
        hideLoading();
      }, 100);
    });

    onMounted(() => {
      listProject();
    });

    const listProject = async () => {
      const userData = await fetch(`https://api.github.com/users/HeitorFM2`);
      const newUser = await userData.json();

      if (newUser.name) {
        const reposData = await fetch(
          `https://api.github.com/users/HeitorFM2/repos`
        );
        state.projectsData = await reposData.json();
      }
    };
    function locationURL(link) {
      window.open(link, "_blank");
    }
    return { state, locationURL };
  },
});
</script>
