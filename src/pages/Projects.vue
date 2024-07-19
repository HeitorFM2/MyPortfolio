<template>
  <q-page class="q-pd-md">
    <q-toolbar>
      <q-toolbar-title class="text-center text-h2 text-weight-bold q-ma-lg">
        Projects
      </q-toolbar-title>
    </q-toolbar>
    <p class="text-caption text-center">
      See all my projects
      <span
        class="text-blue cursor-pointer"
        @click="locationURL('https://github.com/HeitorFM2')"
        >HERE</span
      >
    </p>
    <div class="flex flex-center">
      <q-separator style="width: 60%" />
      <div class="q-pa-md q-ma-lg custom-carrousel">
        <div class="q-pa-md">
          <q-carousel animated v-model="state.slide" arrows infinite autoplay>
            <q-carousel-slide
              :name="1"
              img-src="../assets/images/carrousel1.png"
              @click="locationURL('https://askflows.vercel.app')"
            >
              <div class="text-subtitle1 absolute-bottom custom-caption">
                My social network
              </div>
            </q-carousel-slide>
            <q-carousel-slide
              :name="2"
              img-src="../assets/images/carrousel2.png"
              @click="locationURL('https://gitfindfm.vercel.app')"
            >
              <div class="text-subtitle1 absolute-bottom custom-caption">
                GitFind
              </div>
            </q-carousel-slide>
            <q-carousel-slide
              :name="3"
              img-src="../assets/images/carrousel3.png"
              @click="locationURL('https://calculatorfm.vercel.app')"
            >
              <div class="text-subtitle1 absolute-bottom custom-caption">
                Calculator
              </div>
            </q-carousel-slide>
          </q-carousel>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { hideLoading, showLoading } from "src/util/plugins";
import { defineComponent, onBeforeMount, reactive } from "vue";

export default defineComponent({
  name: "ProjectsPage",

  setup() {
    const state = reactive({
      projectsData: [],
      slide: 1,
    });

    onBeforeMount(() => {
      showLoading("Carregando...");
      try {
        listProject();
      } finally {
        hideLoading();
      }
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
