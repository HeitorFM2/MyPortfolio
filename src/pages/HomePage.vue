<template>
  <q-page class="q-pr-md q-pl-md q-pt-md q-pb-md">
    <div class="q-pa-md">
      <div class="menu-body">
        <div class="row justify-evenly">
          <div>
            <q-intersection transition="scale">
              <q-card
                class="my-description q-pa-xl"
                :class="$q.dark.isActive ? 'bg-grey-10' : 'bg-grey-4'"
              >
                <q-card-section>
                  <div class="text-h4 text-center q-mb-md">
                    Hey ! Welcome to my portfolio
                  </div>
                  <q-separator />
                  <div class="text-h6 text-weight-thin text-justify q-mt-md">
                    <p>
                      My name’s Heitor Melegate, I’m 19 years old and I'm a Web
                      Developer.
                    </p>
                    <p>
                      I’m a systems development technician by Senai, currently
                      I’m studying Systems Analyst and Development at FATEC
                      Americana university.
                    </p>
                    <p>
                      I am now studying VueJs, Python and Spring Boot and plan
                      to move further into the back-end developer.
                    </p>
                  </div>
                </q-card-section>
              </q-card>
              <div class="q-mt-lg">
                <q-btn
                  color="primary"
                  icon-right="file_download"
                  label="Download CV"
                  @click="downloadCV"
                />
                <q-icon
                  name="bi-github"
                  color="primary"
                  size="32px"
                  @click="btnLink('https://github.com/HeitorFM2')"
                  class="q-mx-lg btnLink"
                />
                <q-icon
                  name="bi-linkedin"
                  color="primary"
                  size="32px"
                  @click="
                    btnLink('https://www.linkedin.com/in/heitor-melegate/')
                  "
                  class="btnLink q-mr-lg"
                />
                <q-icon
                  name="bi-instagram"
                  color="primary"
                  size="32px"
                  @click="
                    btnLink(
                      'https://instagram.com/heitorfm_dev?igshid=MzNlNGNkZWQ4Mg=='
                    )
                  "
                  class="btnLink"
                />
              </div>
            </q-intersection>
          </div>

          <q-img
            src="../assets/images/my.png"
            style="height: 350px; max-width: 300px"
            class="q-mt-lg"
          />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { hideLoading, showLoading } from "src/util/plugins";
import { defineComponent, onBeforeMount } from "vue";

const columns = [
  {
    name: "name",
    required: true,
    label: "Dessert (100g serving)",
    align: "left",
    field: (row) => row.name,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: "calories",
    align: "center",
    label: "Calories",
    field: "calories",
    sortable: true,
  },
  { name: "fat", label: "Fat (g)", field: "fat", sortable: true },
  { name: "carbs", label: "Carbs (g)", field: "carbs" },
  { name: "protein", label: "Protein (g)", field: "protein" },
  { name: "sodium", label: "Sodium (mg)", field: "sodium" },
  {
    name: "calcium",
    label: "Calcium (%)",
    field: "calcium",
    sortable: true,
    sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
  },
  {
    name: "iron",
    label: "Iron (%)",
    field: "iron",
    sortable: true,
    sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
  },
];

const rows = [
  {
    name: "Frozen Yogurt",
    calories: 159,
    fat: 6.0,
    carbs: 24,
    protein: 4.0,
    sodium: 87,
    calcium: "14%",
    iron: "1%",
  },
  {
    name: "Ice cream sandwich",
    calories: 237,
    fat: 9.0,
    carbs: 37,
    protein: 4.3,
    sodium: 129,
    calcium: "8%",
    iron: "1%",
  },
  {
    name: "Eclair",
    calories: 262,
    fat: 16.0,
    carbs: 23,
    protein: 6.0,
    sodium: 337,
    calcium: "6%",
    iron: "7%",
  },
  {
    name: "Cupcake",
    calories: 305,
    fat: 3.7,
    carbs: 67,
    protein: 4.3,
    sodium: 413,
    calcium: "3%",
    iron: "8%",
  },
  {
    name: "Gingerbread",
    calories: 356,
    fat: 16.0,
    carbs: 49,
    protein: 3.9,
    sodium: 327,
    calcium: "7%",
    iron: "16%",
  },
  {
    name: "Jelly bean",
    calories: 375,
    fat: 0.0,
    carbs: 94,
    protein: 0.0,
    sodium: 50,
    calcium: "0%",
    iron: "0%",
  },
  {
    name: "Lollipop",
    calories: 392,
    fat: 0.2,
    carbs: 98,
    protein: 0,
    sodium: 38,
    calcium: "0%",
    iron: "2%",
  },
  {
    name: "Honeycomb",
    calories: 408,
    fat: 3.2,
    carbs: 87,
    protein: 6.5,
    sodium: 562,
    calcium: "0%",
    iron: "45%",
  },
  {
    name: "Donut",
    calories: 452,
    fat: 25.0,
    carbs: 51,
    protein: 4.9,
    sodium: 326,
    calcium: "2%",
    iron: "22%",
  },
  {
    name: "KitKat",
    calories: 518,
    fat: 26.0,
    carbs: 65,
    protein: 7,
    sodium: 54,
    calcium: "12%",
    iron: "6%",
  },
];

export default defineComponent({
  name: "HomePage",

  setup() {
    onBeforeMount(() => {
      showLoading("Carregando...");
      setTimeout(() => {
        hideLoading();
      }, 200);
    });
    function downloadCV() {
      const link = document.createElement("a");
      link.href = "/Curriculo.pdf"; // Forneça o caminho completo para o arquivo
      link.download = "Curriculo.pdf";
      link.target = "_blank";
      link.click();
    }
    function btnLink(link) {
      window.open(link, "_blank");
    }
    return { rows, columns, downloadCV, btnLink };
  },
});
</script>
