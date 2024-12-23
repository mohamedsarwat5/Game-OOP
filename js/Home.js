import { Details } from "./details.js";
import { Display } from "./displayData.js";
export class Home {
  constructor() {
    document.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        this.changeCategory(link);

        const type = link.getAttribute("data-category");

        this.getData(type);
      });
    });

    this.loading = document.querySelector(".loader");
    this.details = document.getElementById("details");
    this.hero = document.getElementById("hero");
    this.display = new Display();
    this.detailsSec = new Details();
    this.getData("mmorpg");
  }

  async changeCategory(link) {
    document.querySelector(".navbar-nav .main").classList.remove("main");
    link.classList.add("main");
  }

  async getData(category) {
    this.loading.classList.remove("d-none");
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "af977c628cmshc09b4382baeea73p1c3c1ajsn1fdc7a03c7d9",
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      },
    };
    const api = await fetch(
      `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`,
      options
    );

    let response = await api.json();
    this.loading.classList.add("d-none");

    this.display.displayCards(response);

    document.querySelectorAll(".item").forEach((item) => {
      item.addEventListener("click", () => {
        this.details.classList.remove("d-none");
        this.hero.classList.add("d-none");
        // new Details(item.getAttribute("data-id"));
        new Details(item.dataset.id)
      
      });
    });
  }
}
