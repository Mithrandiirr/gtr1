import client from "@/utils/client";
import { modules } from "./sanity.queries";

export async function getHomeData(): Promise<[]> {
  if (client) {
    return await client.fetch(modules);
  }
  return [];
}
