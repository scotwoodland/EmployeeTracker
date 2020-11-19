async function fetchImages() {
  document.getElementById('images-container').innerHTML = '';
  try {
    const res = await fetch('/api/images');
    const data = await res.json();

    for (let image of data) {
      buildCard(image);
    }
  } catch (e) {
    console.log(e);
  }
}

function buildCard(image) {
  const template = `
    <div class="card col-sm" style="width: 18rem;">
      <img src="./assets/images/${image}.jpg" class="observe-image card-img-top">
      <div class="card-body">
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
          content.</p>
      </div>
    </div>
  `;

  document.getElementById('images-container').innerHTML += template;
}

fetchImages();