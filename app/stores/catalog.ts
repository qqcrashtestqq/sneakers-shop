import { defineStore } from "pinia";
import type { Catalog } from "@/types/catalog";
import { useCustomFetch } from "@/composables/useCustomFetch";

export const useCatalogStore = defineStore("catalog", {
  state: (): Catalog => ({
    catalog: [],
  }),

  actions: {
    async getCatalog() {
      const { data, error } = await useCustomFetch("/products");
      this.catalog = data.data;
      // return this.catalog;
    },
  },
});
