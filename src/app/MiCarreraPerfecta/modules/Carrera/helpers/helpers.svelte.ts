import { apiUrl } from "../../shared/stores.svelte";

export async function getCareerById(id: string) {
  return new Promise<any>(async (resolve) => {
    await fetch(
      apiUrl.baseUrl + apiUrl.carrerasUrl + `/${id}`,
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok " + response.statusText);
        }
        return response;
      })
      .then(async (data) => {
        resolve(data.json());
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  });
}
