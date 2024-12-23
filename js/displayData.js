export class Display {
  constructor() {
    // Constructor can remain empty if no initialization is required
  }

  displayCards(dataCategory) {
    let temp = "";
    for (let i = 0; i < dataCategory.length; i++) {
      temp += `
          <div class="col-md-6 col-lg-3">
          <div class="item" data-id="${dataCategory[i].id}">
          <div >
          
                <div class="content p-4">
                  <img src="${dataCategory[i].thumbnail}" class="w-100" alt="">
                  <div class="head-content mt-3 mb-2 text-white d-flex justify-content-between align-items-center">
                    <h4>${dataCategory[i].title}</h4>
                    <span>Free</span>
                  </div>
                  <div class="body-content text-center">
                    <p>${dataCategory[i].short_description
                      .split(" ", 5)
                      .join(" ")}</p>
                  </div>
                  <div class="footer-content text-white d-flex justify-content-between align-items-center">
                    <span>${dataCategory[i].genre}</span>
                    <span>${dataCategory[i].platform}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `;
    }

    document.getElementById("myRow").innerHTML = temp;
  }

  displayDetails(data) {
   const temp2 = `


<div class="col-md-4">
          <img src="${data.thumbnail}" class="w-100" alt="">
        </div>
        <div class="col-md-8">
          <div class="details-text">
            <h3 class="text-white">Title: ${data.title}</h3>
            <h4> Category: <span>${data.genre}</span></h4>
            <h4> Platform: <span>${data.platform}</span></h4>
            <h4> Status: <span>${data.status}</span></h4>
            <p>${data.description}</p>
            <a href="${data.game_url}" target="_blank" class="btn btn-outline-warning text-white">Show Game</a>
          </div>
        </div>




`;
document.getElementById('myRow2').innerHTML =temp2
  }
}
