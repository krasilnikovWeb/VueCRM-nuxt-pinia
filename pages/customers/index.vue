<script lang="ts" setup>
import { useQuery } from "@tanstack/vue-query";
import { COLLECTION_CUSTOMERS, DB_ID } from "~/app.constants";
import type { ICustomer } from "~/types/deals.types";

useSeoMeta({
  title: "Customers | CRM System",
});

const { data: customers, isLoading } = useQuery({
  queryKey: ["customers"],
  queryFn: () => DB.listDocuments(DB_ID, COLLECTION_CUSTOMERS),
});
</script>

<template>
  <div class="p-10">
    <h1 class="font-bold text-2xl mb-10">Наши клиенты</h1>
    <div v-if="isLoading">Loading...</div>
    <Table v-else>
      <TableHeader>
        <TableRow>
          <TableHead class="w-[200px]">Изображение</TableHead>
          <TableHead class="w-[300px]">Наименование</TableHead>
          <TableHead class="w-[200px]">Email</TableHead>
          <TableHead>Откуда пришел</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow
          v-for="customer in (customers?.documents as unknown as ICustomer[])"
          :key="customer.$id"
        >
          <TableCell>
            <NuxtLink :href="`/customers/edit/${customer.$id}`">
              <NuxtImg
                :src="customer.avatar_url"
                :alt="customer.name"
                width="50"
                height="50"
                class="rounded-full"
              />
            </NuxtLink>
          </TableCell>
          <TableCell class="font-medium">
            {{ customer.name }}
          </TableCell>
          <TableCell>{{ customer.email }}</TableCell>
          <TableCell>{{ customer.from_source }}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </div>
</template>
