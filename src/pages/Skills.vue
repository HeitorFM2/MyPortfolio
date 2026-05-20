<template>
  <q-page class="q-pa-md">
    <div class="text-center q-mt-md q-mb-md">
      <div class="text-h3 text-weight-bold q-mb-sm">
        {{ t.skills.pageTitle }}
      </div>
      <div class="text-caption text-grey-6">{{ t.skills.subtitle }}</div>
    </div>
    <q-separator class="q-mb-xl" />

    <div class="row justify-center q-gutter-lg q-pa-md">
      <q-card
        v-for="category in skillCategories"
        :key="category.title"
        class="skill-group my-description q-pa-lg"
        :class="$q.dark.isActive ? 'bg-grey-10' : 'bg-grey-4'"
      >
        <div class="text-subtitle1 text-weight-bold q-mb-md">
          {{ category.title }}
        </div>
        <div class="q-gutter-sm">
          <q-chip
            v-for="skill in category.skills"
            :key="skill"
            :color="category.color"
            text-color="white"
          >
            {{ skill }}
          </q-chip>
        </div>
      </q-card>
    </div>
  </q-page>
</template>

<script setup>
import { computed } from "vue";
import { useI18n } from "src/i18n";

defineOptions({ name: "SkillsPage" });

const { t } = useI18n();

const skillCategories = computed(() => [
  {
    title: t.value.skills.categories.languages,
    color: "primary",
    skills: [
      "C# / .NET",
      "Java / Spring Boot",
      "Go",
      "Python",
      "REST APIs",
      "JavaScript",
    ],
  },
  {
    title: t.value.skills.categories.architecture,
    color: "deep-purple",
    skills: [
      "Clean Architecture",
      "Domain-Driven Design",
      "SOLID Principles",
      "Microservices",
      "Event-Driven Architecture",
      "Unit Testing",
      "CI/CD Pipelines",
    ],
  },
  {
    title: t.value.skills.categories.infrastructure,
    color: "teal",
    skills: ["Docker", "Kubernetes", "RabbitMQ", "Git", "Azure DevOps", "JWT"],
  },
  {
    title: t.value.skills.categories.cloud,
    color: "blue-grey",
    skills: ["AWS", "Azure", "SQL Server", "PostgreSQL", "MySQL"],
  },
]);
</script>
