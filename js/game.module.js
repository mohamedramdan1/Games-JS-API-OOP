import { Details } from "./detail.module.js";
import { Ui } from "./ui.module.js";
let links = document.querySelectorAll(".navbar-nav a");

export class Games {
  constructor() {
    this.getGames("mmorpg");
    for (let i = 0; i < links.length; i++) {
      links[i].addEventListener("click", (e) => {
        document.querySelector(".active").classList.remove("active");
        links[i].classList.add("active");
        let category = e.target.innerHTML;
        this.getGames(category);
      });
    }
    this.ui = new Ui();
  }

  async getGames(category) {
    document.querySelector(".loading").classList.remove("d-none");
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "f176683ab9msh12cfbd74749ca5cp1daa7djsnf31593e95882",
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      },
    };
    try {
      const response = await fetch(
        `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`,
        options
      );
      const data = await response.json();
      this.ui.dispaly_games_data(data);
      document.querySelector(".loading").classList.add("d-none");
      this.Event();
    } catch (error) {
      console.error(error);
    }
  }

  Event() {
    let cards = document.querySelectorAll(".card");
    for (let i = 0; i < cards.length; i++) {
      cards[i].addEventListener("click", () => {
        let id = cards[i].dataset.id;
        this.showdatails(id);
      });
    }
  }

  showdatails(id) {
    let details = new Details(id);
    document.querySelector(".games").classList.add("d-none");
    document.querySelector(".details").classList.remove("d-none");
  }
}
