//! script para a bree search

async function getCatBySelectedBreed() {
  const selectedBreedName = document.getElementById("breedSelect").value;
  const catImageContainer = document.getElementById("catImage");

  // Limpa o contêiner de imagem anterior
  catImageContainer.innerHTML = "";

  const apiKey =
    "live_E1jfL2jOplvaEQanE0nQBvyfQrIYJoS3TvjxczEaJuULrTbMyf71aFuA7ZrYUztA";

  // Busca a lista de todas as raças
  const breedListUrl = "https://api.thecatapi.com/v1/breeds";

  const response = await fetch(breedListUrl, {
    headers: {
      "x-api-key": apiKey,
    },
  });

  const breeds = await response.json();

  // Procura o ID da raça com base no nome
  const breed = breeds.find((b) => b.name === selectedBreedName);

  if (breed) {
    const breedId = breed.id;
    const apiUrl = `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`;

    // Busca uma imagem do gato com base na raça selecionada
    const imageResponse = await fetch(apiUrl, {
      headers: {
        "x-api-key": apiKey,
      },
    });

    const data = await imageResponse.json();

    if (data.length > 0) {
      const catImageUrl = data[0].url;
      const imageElement = document.createElement("img");
      imageElement.src = catImageUrl;
      imageElement.alt = "Gato da raça selecionada";
      imageElement.style.width = "600px";
      imageElement.style.height = "400px";

      catImageContainer.appendChild(imageElement);
    } else {
      catImageContainer.textContent =
        "Nenhuma imagem encontrada para essa raça.";
    }
  } else {
    catImageContainer.textContent = "Raça não encontrada.";
  }
}

//! script para a imagem randomica

const url = "https://api.thecatapi.com/v1/images/search";

const rdmBtn = document.getElementById("breedBtn");
const rdmImg = document.getElementById("breedCatImg");

rdmBtn.addEventListener("click", getRandomCats);

let randomCatPhoto = (json) => {
  let photo = json[0].url;

  rdmImg.src = photo;
};

async function getRandomCats() {
  try {
    const response = await fetch(url);
    const json = await response.json();
    rdmImg.style.width = "700px";
    rdmImg.style.height = "500px";
    return randomCatPhoto(json);
  } catch (error) {}
}

//! Efeito Parallax

window.sr = ScrollReveal({ reset: true });

sr.reveal(".area-1", {
  rotate: { x: 0, y: 50, z: 0 },
  duration: 2000,
});
sr.reveal(".area-2", {
  rotate: { x: 0, y: 50, z: 0 },
  duration: 2000,
});
sr.reveal(".area-3", {
  rotate: { x: 0, y: 80, z: 0 },
  duration: 2000,
});
