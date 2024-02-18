<template>
  <q-page class="q-pr-md q-pl-md q-pt-md q-pb-md">
    <div class="q-pa-md">
      <div class="q-gutter-md q-mt-xl column flex-center">
        <q-intersection transition="scale">
          <q-card
            class="my-description q-pa-lg"
            :class="$q.dark.isActive ? 'bg-grey-10' : 'bg-grey-4'"
          >
            <q-stepper
              v-model="step"
              ref="stepper"
              class="flex flex-center"
              :class="$q.dark.isActive ? 'bg-grey-10' : 'bg-grey-4'"
            >
              <q-step
                :name="1"
                title="02/2024"
                done-icon="bi-box-arrow-in-right"
                :done="step > 1"
                style="min-height: 200px"
              />

              <q-step
                :name="1"
                done-icon="code"
                title="Currently"
                :done="step > 1"
                style="min-height: 200px"
              />
            </q-stepper>
            <q-card-section>
              <div class="text-h4 text-center q-mb-md">
                Backend Engineer - Labsoft Tecnologia LTDA.
              </div>
              <q-separator />
              <div class="text-h6 text-weight-thin q-mt-md">
                <p class="text-center">
                  I work directly with C# using .NET to develop APIs and Backend structures.
                </p>
              </div>
            </q-card-section>
          </q-card>
        </q-intersection>
        <q-intersection transition="scale">
          <q-card
            class="my-description q-mt-xl q-pa-lg"
            :class="$q.dark.isActive ? 'bg-grey-10' : 'bg-grey-4'"
          >
            <q-stepper
              v-model="step"
              ref="stepper"
              class="flex flex-center"
              :class="$q.dark.isActive ? 'bg-grey-10' : 'bg-grey-4'"
            >
              <q-step
                :name="1"
                title="11/2023"
                done-icon="bi-box-arrow-in-right"
                :done="step > 1"
                style="min-height: 200px"
              />
              <q-step
                :name="1"
                done-icon="bi-door-closed"
                title="02/2024"
                done-color="red"
                :done="step > 1"
                style="min-height: 200px"
              />
            </q-stepper>
            <q-card-section>
              <div class="text-h4 text-center q-mb-md">
                Backend Engineer - QYON Sistemas Inteligentes
              </div>
              <q-separator />
              <div class="text-h6 text-weight-thin q-mt-md">
                <p class="text-center">
                  I worked generally focused on the back-end using the Python
                  language with FastAPI, Flask for RestAPIs, SQLAlchemy and
                  Webscrapping frameworks, Java with SpringBoot and VueJS for
                  FrontEnd. I also work with database SQL, Docker and Kubernets.
                </p>
              </div>
            </q-card-section>
          </q-card>
        </q-intersection>
        <q-intersection transition="scale">
          <q-card
            class="my-description q-mt-xl q-pa-lg"
            :class="$q.dark.isActive ? 'bg-grey-10' : 'bg-grey-4'"
          >
            <q-stepper
              v-model="step"
              ref="stepper"
              class="flex flex-center"
              :class="$q.dark.isActive ? 'bg-grey-10' : 'bg-grey-4'"
            >
              <q-step
                :name="1"
                title="03/2023"
                done-icon="bi-box-arrow-in-right"
                :done="step > 1"
                style="min-height: 200px"
              />

              <q-step
                :name="1"
                done-icon="bi-door-closed"
                title="10/2023"
                done-color="red"
                :done="step > 1"
                style="min-height: 200px"
              />
            </q-stepper>
            <q-card-section>
              <div class="text-h4 text-center q-mb-md">
                Programming Trainee - QYON Sistemas Inteligentes
              </div>
              <q-separator />
              <div class="text-h6 text-weight-thin q-mt-md">
                <p class="text-center">
                  I worked generally focused on the back-end using the Python
                  language with FastAPI, Flask for RestAPIs, SQLAlchemy and
                  Webscrapping frameworks, Java with SpringBoot and VueJS for
                  FrontEnd. I also work with database SQL.
                </p>
              </div>
            </q-card-section>
          </q-card>
        </q-intersection>
        <q-intersection transition="scale">
          <q-card
            class="my-description q-mt-xl q-pa-lg"
            :class="$q.dark.isActive ? 'bg-grey-10' : 'bg-grey-4'"
          >
            <q-stepper
              v-model="step"
              ref="stepper"
              class="flex flex-center"
              :class="$q.dark.isActive ? 'bg-grey-10' : 'bg-grey-4'"
            >
              <q-step
                :name="1"
                title="03/2022"
                done-icon="bi-box-arrow-in-right"
                :done="step > 1"
                style="min-height: 200px"
              />

              <q-step
                :name="1"
                done-icon="bi-door-closed"
                title="02/2023"
                done-color="red"
                :done="step > 1"
                style="min-height: 200px"
              />
            </q-stepper>
            <q-card-section>
              <div class="text-h4 text-center q-mb-md">
                Trainee Full-Stack - 8SYS Desenvolvimento de Sistemas LTDA.
              </div>
              <q-separator />
              <div class="text-h6 text-weight-thin text-justify q-mt-md">
                <p class="text-center">
                  I worked on the production and maintenance of the company's
                  WebSite, using HTML5, CSS3, JavaScript with JQuery framework
                  and API with PHP.
                </p>
              </div>
            </q-card-section>
          </q-card>
        </q-intersection>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, onBeforeMount, ref } from "vue";
import { hideLoading, showLoading } from "src/util/plugins";

export default defineComponent({
  name: "CareerPage",
  setup() {
    onBeforeMount(() => {
      showLoading("Carregando...");
      setTimeout(() => {
        hideLoading();
      }, 100);
    });
    return { slide: ref("first"), step: ref(2) };
  },
});
</script>
