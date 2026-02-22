import { apiUrl } from "../../shared/stores.svelte";

export async function getUniversitiesCards() {
  return new Promise<any>(async (resolve) => {
    await fetch(apiUrl.baseUrl + apiUrl.universityUrl + "/getCards")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok " + response.statusText);
        }
        return response;
      })
      .then(async (data) => {
        resolve(data.json());
      }).catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  });
}
