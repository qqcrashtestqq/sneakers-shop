import { $fetch, type FetchOptions } from "ofetch";

const api = $fetch.create({});

export const useCustomFetch = (url: string, opts: FetchOptions = {}) => {
  if (!import.meta.client) return Promise.resolve({ data: null, error: null });

  const config = useRuntimeConfig();

  return api(url, {
    baseURL: config.public.baseUrl,
    ...opts,
    headers: {
      ...opts?.headers,
      // ...(token.value && { Authorization: `Bearer ${token.value}` }),
    },
    onResponseError({ response }) {
      console.log("fetch error", response);
    },
  })
    .then((data) => ({ data, error: null }))
    .catch((error) => {
      console.error("fetch catch", error);
      return { data: null, error };
    });
};
