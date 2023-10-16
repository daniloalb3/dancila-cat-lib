//! script para a breed search

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
      imageElement.classList.add("imageByBreed");

      catImageContainer.appendChild(imageElement);
    } else {
      catImageContainer.textContent =
        "Nenhuma imagem encontrada para essa raça.";
    }
  } else {
    catImageContainer.textContent = "Raça não encontrada.";
  }
}
//! script para a ORIGIN search

async function getCatBySelectedBreedOrg() {
  const selectedBreedName = document.getElementById("breedSelect").value;
  const catOriginContainer = document.getElementById("origin");

  // Limpa o contêiner de imagem anterior
  catOriginContainer.innerHTML = "";

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
    const descriptionResponse = await fetch(apiUrl, {
      headers: {
        "x-api-key": apiKey,
      },
    });

    const data = await descriptionResponse.json();

    if (data.length > 0) {
      const catOriginFilter = data[0].breeds;
      const catOrigin = catOriginFilter[0].origin;
      const originElement = document.createElement("p");
      originElement.innerHTML = `<span class = "sColor "> Origin </span> : ${catOrigin}`;

      originElement.classList.add("originAdd");

      catOriginContainer.appendChild(originElement);
    } else {
      catImageContainer.textContent =
        "Nenhuma imagem encontrada para essa raça.";
    }
  } else {
    catImageContainer.textContent = "Raça não encontrada.";
  }
}
//! script para a lIFE SPAN search

async function getCatBySelectedBreedSpn() {
  const selectedBreedName = document.getElementById("breedSelect").value;
  const catlifeSpanContainer = document.getElementById("lifeSpan");

  // Limpa o contêiner de imagem anterior
  catlifeSpanContainer.innerHTML = "";

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
    const lifeSpanResponse = await fetch(apiUrl, {
      headers: {
        "x-api-key": apiKey,
      },
    });

    const data = await lifeSpanResponse.json();

    if (data.length > 0) {
      const catLfFilter = data[0].breeds;
      const catLf = catLfFilter[0].life_span;
      const lfElement = document.createElement("p");
      lfElement.innerHTML = `<span class = "sColor"> Life Span </span> : ${catLf}`;

      lfElement.classList.add("lfAdd");

      catlifeSpanContainer.appendChild(lfElement);
    } else {
      catImageContainer.textContent =
        "Nenhuma imagem encontrada para essa raça.";
    }
  } else {
    catImageContainer.textContent = "Raça não encontrada.";
  }
}
//! script para  TEMPERAMENT search

async function getCatBySelectedBreedTpm() {
  const selectedBreedName = document.getElementById("breedSelect").value;
  const catTpmContainer = document.getElementById("temperament");

  // Limpa o contêiner de imagem anterior
  catTpmContainer.innerHTML = "";

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
    const tpmResponse = await fetch(apiUrl, {
      headers: {
        "x-api-key": apiKey,
      },
    });

    const data = await tpmResponse.json();

    if (data.length > 0) {
      const catTpmFilter = data[0].breeds;
      const catTpm = catTpmFilter[0].temperament;
      const tpmElement = document.createElement("div");
      tpmElement.innerHTML = ` <span class = "sColor "> Temperament </span> : ${catTpm}`;

      tpmElement.classList.add("tpmAdd");

      catTpmContainer.appendChild(tpmElement);
    } else {
      catTpmContainer.textContent = "Nenhuma imagem encontrada para essa raça.";
    }
  } else {
    catTpmContainer.textContent = "Raça não encontrada.";
  }
}

//! script para description

async function getCatBySelectedBreedDcp() {
  const selectedBreedName = document.getElementById("breedSelect").value;
  const catDescriptionContainer = document.getElementById("description");

  // Limpa o contêiner de imagem anterior
  catDescriptionContainer.innerHTML = "";

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
    const response = await fetch(apiUrl, {
      headers: {
        "x-api-key": apiKey,
      },
    });

    const data = await response.json();

    if (data.length > 0) {
      const catBreedFilter = data[0].breeds;
      const catDescription = catBreedFilter[0].description;
      const descriptionElement = document.createElement("div");
      descriptionElement.innerHTML = `<span class = "sColor"> Description </span> : ${catDescription}`;
      descriptionElement.classList.add("descriptionAdd");

      catDescriptionContainer.appendChild(descriptionElement);
    } else {
      catDescriptionContainer.textContent =
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
  rotate: { x: 0, y: 60, z: 0 },
  duration: 2000,
});
sr.reveal(".area-3", {
  rotate: { x: 0, y: 80, z: 0 },
  duration: 2000,
});
