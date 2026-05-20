<template>
  <q-page class="q-pa-md">
    <div class="text-center q-mt-md q-mb-md">
      <div class="text-h3 text-weight-bold q-mb-sm">
        {{ t.projects.pageTitle }}
      </div>
      <div class="text-caption text-grey-6">
        {{ t.projects.subtitle }}
        <span
          class="text-primary cursor-pointer"
          @click="openLink('https://github.com/HeitorFM2')"
        >
          GitHub
        </span>
      </div>
    </div>
    <q-separator class="q-mb-xl" />

    <div class="row justify-center q-gutter-lg q-pa-md">
      <q-card
        v-for="project in projects"
        :key="project.name"
        class="project-card flex column"
        :class="$q.dark.isActive ? 'bg-grey-10' : 'bg-grey-4'"
      >
        <q-img
          :src="project.image"
          height="180px"
          style="cursor: pointer"
          @click="
            openLink(project.live || project.repos?.[0]?.url || project.github)
          "
        >
          <div v-if="project.featured" class="absolute-top-right q-pa-sm">
            <q-chip color="accent" text-color="white" dense icon="star">
              {{ t.projects.featured }}
            </q-chip>
          </div>
        </q-img>

        <q-card-section class="col">
          <div class="text-h6 text-weight-bold q-mb-xs">{{ project.name }}</div>
          <div class="text-body2 text-grey-6 q-mb-md">
            {{ project.description }}
          </div>
          <div class="q-gutter-xs">
            <q-chip
              v-for="tech in project.stack"
              :key="tech"
              dense
              size="sm"
              color="primary"
              text-color="white"
            >
              {{ tech }}
            </q-chip>
          </div>
        </q-card-section>

        <q-separator />

        <q-card-actions>
          <template v-if="project.repos">
            <q-btn
              v-for="repo in project.repos"
              :key="repo.label"
              flat
              dense
              icon="bi-github"
              :label="repo.label"
              @click="openLink(repo.url)"
            />
          </template>
          <q-btn
            v-else-if="project.github"
            flat
            dense
            icon="bi-github"
            :label="t.projects.github"
            @click="openLink(project.github)"
          />
          <q-space />
          <q-btn
            v-if="project.live"
            flat
            dense
            icon="open_in_new"
            :label="t.projects.live"
            color="primary"
            @click="openLink(project.live)"
          />
        </q-card-actions>
      </q-card>
    </div>
  </q-page>
</template>

<script setup>
import { computed } from "vue";
import { useI18n } from "src/i18n";
import imgAskflow from "../assets/images/askflow.png";
import imgGitfind from "../assets/images/gitfind.png";
import imgCalculator from "../assets/images/calculator.png";

defineOptions({ name: "ProjectsPage" });

const { t } = useI18n();

const projects = computed(() => [
  {
    name: "AskFlow",
    description: t.value.projects.items.askflow.description,
    stack: [
      "Vue 3",
      "Quasar",
      ".NET 10",
      "ASP.NET Core",
      "Clean Architecture",
      "CQRS (MediatR)",
      "Entity Framework",
      "ASP.NET Identity",
      "JWT",
    ],
    repos: [
      { label: "API", url: "https://github.com/HeitorFM2/AskFlow.API" },
      { label: "WebApp", url: "https://github.com/HeitorFM2/AskFlow.WebApp" },
    ],
    live: "https://askflows.cloud",
    image: imgAskflow,
    featured: true,
  },
  {
    name: "GitFind",
    description: t.value.projects.items.gitfind.description,
    stack: ["JavaScript", "React", "GitHub API"],
    github: null,
    live: "https://gitfindfm.vercel.app",
    image: imgGitfind,
    featured: false,
  },
  {
    name: "Calculator",
    description: t.value.projects.items.calculator.description,
    stack: ["JavaScript", "HTML", "CSS"],
    github: null,
    live: "https://calculatorfm.vercel.app",
    image: imgCalculator,
    featured: false,
  },
]);

function openLink(url) {
  if (url) window.open(url, "_blank");
}
</script>
