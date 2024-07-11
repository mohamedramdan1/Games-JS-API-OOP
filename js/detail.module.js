import { Ui } from "./ui.module.js";

export class Details {
  constructor(id) {
    this.ui = new Ui();
    document.getElementById("btn-close").addEventListener("click", () => {
      document.querySelector(".games").classList.remove("d-none");
      document.querySelector(".details").classList.add("d-none");
    });
    this.get_detail(id);
  }
  async get_detail(id_game) {
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
        `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id_game}`,
        options
      );
      const data = await response.json();
      this.ui.dispaly_details(data);
      document.querySelector(".loading").classList.add("d-none");
    } catch (error) {
      console.error(error);
    }
  }
}
