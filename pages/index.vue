<template>
  <div class="p-10">
    <h1 class="font-bold text-2xl mb-10">CRM System</h1>
    <div v-if="isLoading">Loading...</div>
    <div v-else>
      <div class="grid grid-cols-5 gap-16">
        <div
          v-for="(column, index) in data"
          :key="column.id"
          class="min-h-screen"
        >
          <div class="rounded bg-slate-700 py-1 px-5 mb-2 text-center">
            {{ column.name }}
          </div>
          <KanbanCreateDeal :refetch="refetch" :status="column.id" />
          <Card
            v-for="card in column.items"
            :key="card.id"
            class="mb-5"
            draggable="true"
          >
            <CardHeader role="button">
              <CardTitle>{{ card.name }}</CardTitle>

              <CardDescription class="mt-2 block">{{
                convertCurrency(card.price)
              }}</CardDescription>
            </CardHeader>
            <CardContent class="text-xs">
              {{ "Компания: " + card.companyName }}</CardContent
            >
            <CardFooter>
              {{ dayjs(card.$createdAt).format("DD MMMM YYYY") }}
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ICard, IColumn } from "~/components/kanban/kanban.types";
import { useKanbanQuery } from "~/components/kanban/useKanbanQuery";
import dayjs from "dayjs";

useSeoMeta({
  title: "Home | CRM System",
});

const dragCardRef = ref<ICard | null>(null);
const sourceColumnRef = ref<IColumn | null>(null);

const { data, isLoading, refetch } = useKanbanQuery();
/* const store = useDealSlideStore() */
</script>

<style></style>
