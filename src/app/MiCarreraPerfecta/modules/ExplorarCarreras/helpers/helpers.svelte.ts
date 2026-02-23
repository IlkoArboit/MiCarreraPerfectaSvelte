import type { UniCard } from "../../ExplorarUnis/interfaces/general.svelte";
import { apiUrl } from "../../shared/stores.svelte";

export async function getCareers() {
  return new Promise<any>(async (resolve) => {
    await fetch(apiUrl.baseUrl + apiUrl.carrerasUrl + `/getAll`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok " + response.statusText);
        }
        return response;
      })
      .then(async (data) => {
        let datos = await data.json();
        console.log(datos);
        resolve(datos);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  });
}
