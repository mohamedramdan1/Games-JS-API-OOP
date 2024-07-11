export class Ui {
  dispaly_games_data(data) {
    let games_box = "";
    for (let i = 0; i < data.length; i++) {
      games_box += `
            <div class="col">
              <div data-id="${data[i].id}"
              class="card bg-transparent h-100 border rounded" role="button">
                <div class="card-body">
                  <figure class="position-relative">
                    <img class="w-100" src="${
                      data[i].thumbnail
                    }" alt="game-images">
                  </figure>
                  <figcaption>
                    <div class="d-flex justify-content-between align-items-center">
                      <h3 class="h6 small">${data[i].title}</h3>
                      <span class="badge text-bg-primary p-2">Free</span>
                    </div>
                    <p class=" small text-center opacity-50">
                    ${data[i].short_description.split(" ", 8)}
                    </p>
                  </figcaption>
                </div>
                <div class="card-footer border-top small d-flex justify-content-between align-items-center">
                  <span class="badge badge-color">${data[i].genre}</span>
                  <span class="badge badge-color">${data[i].platform}</span>
                </div>
              </div>
            </div>
        `;
    }
    document.getElementById("games_info").innerHTML = games_box;
  }

  dispaly_details(data) {
    let deatil_box = `
        <div class="col-md-4">
          <img src="${data.thumbnail}" class="w-100" alt="game-images">
        </div>
        <div class="col-md-8">
          <h3>Title: ${data.title}</h3>
          <p>Category: <span class="badge text-bg-info"> ${data.genre}</span> </p>
          <p>Platform: <span class="badge text-bg-info"> ${data.platform}</span> </p>
          <p>Status: <span class="badge text-bg-info"> ${data.status}</span> </p>
          <p class="small">${data.description}</p>
          <button class="btn btn-outline-warning"><a href="${data.game_url}"
              target="_blank">Show Game</a></button>
        </div>
      `;
    document.getElementById("details_info").innerHTML = deatil_box;
  }
}
