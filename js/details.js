import { Display } from "./displayData.js";

export class Details {
  constructor(id) {
    document.getElementById("close").addEventListener("click", () => {
      document.getElementById("details").classList.add("d-none");
      document.getElementById("hero").classList.remove("d-none");
    });
    this.getDetails(id);
  }

  async getDetails(id) {
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "af977c628cmshc09b4382baeea73p1c3c1ajsn1fdc7a03c7d9",
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      },
    };

    let api = await fetch(
      `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}}`,
      options
    );
    let response = await api.json();
    // console.log(response)
    new Display().displayDetails(response);
  }
}
