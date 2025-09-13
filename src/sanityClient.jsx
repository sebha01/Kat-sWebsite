import { createClient } from "@sanity/client";

export const client = createClient({
    projectId: "0mz2ow35",   
    dataset: "production",   
    apiVersion: "2025-09-12",
    useCdn: true,
});