export async function getIntelligences() {
  return new Promise<any>(async (resolve) => {
    await fetch("http://localhost:8080/intelligence/gerAll")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok " + response.statusText);
        }
        return response;
      })
      .then((data) => {
        resolve(data.json());
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  });
}
export async function getStats() {
  return new Promise<any>(async (resolve) => {
    let stats: { value: string; label: string }[] = [];
    await fetch("http://localhost:8080/universities/count")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok " + response.statusText);
        }
        return response;
      })
      .then(async (data) => {
        let aux = await data.json();
        let aux2 = { value: aux, label: "Universidades" };
        stats.push(aux2);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
    await fetch("http://localhost:8080/career/count")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok " + response.statusText);
        }
        return response;
      })
      .then(async (data) => {
        let aux = await data.json();
        let aux2 = { value: aux, label: "Carreras" };
        stats.push(aux2);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });

      stats.push({value:"1.5K", label:"Alumnos asesorados"})
      stats.push({value:"100%", label:"Gratuito"})
    resolve(stats);
  });
}
