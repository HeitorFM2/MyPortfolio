<template>
  <q-page class="q-pa-md">
    <div class="text-center q-mt-md q-mb-md">
      <div class="text-h3 text-weight-bold q-mb-sm">
        {{ t.career.pageTitle }}
      </div>
    </div>
    <q-separator class="q-mb-xl" />

    <div class="q-gutter-md q-mt-lg column flex-center">
      <q-card
        v-for="(job, index) in jobs"
        :key="index"
        class="my-description q-pa-lg"
        :class="[
          $q.dark.isActive ? 'bg-grey-10' : 'bg-grey-4',
          index > 0 ? 'q-mt-xl' : '',
        ]"
      >
        <q-stepper
          v-model="step"
          class="flex flex-center"
          :class="$q.dark.isActive ? 'bg-grey-10' : 'bg-grey-4'"
        >
          <q-step
            :name="1"
            :title="job.start"
            done-icon="bi-box-arrow-in-right"
            :done="step > 1"
            style="min-height: 200px"
          />
          <q-step
            :name="2"
            :title="job.end"
            :done-icon="job.endIcon"
            :done-color="job.endColor"
            :done="step > 2"
            style="min-height: 200px"
          />
        </q-stepper>
        <q-card-section>
          <div class="text-h4 text-center q-mb-md">{{ job.title }}</div>
          <q-separator />
          <div class="text-h6 text-weight-thin q-mt-md">
            <p class="text-center">{{ job.description }}</p>
          </div>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script setup>
import { ref, computed } from "vue";
import { useI18n } from "src/i18n";

defineOptions({ name: "CareerPage" });

const { t } = useI18n();
const step = ref(2);

const jobs = computed(() => [
  {
    start: "02/2024",
    end: t.value.career.present,
    endIcon: "code",
    endColor: undefined,
    title: t.value.career.jobs.confience.title,
    description: t.value.career.jobs.confience.description,
  },
  {
    start: "11/2023",
    end: "02/2024",
    endIcon: "bi-door-closed",
    endColor: "red",
    title: t.value.career.jobs.qyonBackend.title,
    description: t.value.career.jobs.qyonBackend.description,
  },
  {
    start: "03/2023",
    end: "10/2023",
    endIcon: "bi-door-closed",
    endColor: "red",
    title: t.value.career.jobs.qyonTrainee.title,
    description: t.value.career.jobs.qyonTrainee.description,
  },
  {
    start: "03/2022",
    end: "02/2023",
    endIcon: "bi-door-closed",
    endColor: "red",
    title: t.value.career.jobs.sys8.title,
    description: t.value.career.jobs.sys8.description,
  },
]);
</script>
