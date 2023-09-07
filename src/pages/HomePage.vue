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
                      I'm a programmer fascinated by technology, and I'm a
                      systems development technician at Senai. I'm currently
                      studying Systems Analysis and Development at FATEC
                      Americana.
                    </p>
                  </div>
                </q-card-section>
              </q-card>
              <div class="q-mt-lg">
                <q-btn
                  color="primary"
                  icon-right="file_download"
                  label="Download Curriculum"
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
      link.href =
        "https://docs.google.com/document/d/1Zkj8xnuHCiDF98NBwsem4l3NCjoU-078zkW9pG-V1V0/export?format=pdf";
      link.download = "Curriculum.pdf";
      link.target = "_blank";
      link.click();
    }
    function btnLink(link) {
      window.open(link, "_blank");
    }
    return { downloadCV, btnLink };
  },
});
</script>
