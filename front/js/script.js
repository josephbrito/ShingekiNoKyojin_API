document.addEventListener("DOMContentLoaded", () => {
  ReqData();
});

async function ReqData() {
  const container = document.querySelector("#container");
  const res = await fetch("http://localhost:5000/api");
  const data = await res.json();

  data.map((character) => {
    container.innerHTML += `
    <div class="character">
    <figure class="figure">
    <img src=${character.photo} alt=${character.name} />
    <figcaption class="figcaption">
      <h3>${character.name}</h3>
      <p><strong>Idade:</strong> <span>${character.age}</span></p>
      ${
        character.titan
          ? `<ul class="titans">
        ${character.titan.map((tita) => `<li>${tita}</li>`)}
      </ul>`
          : ""
      }
      </figcaption>
    </figure>
    </div>
    
  `;
  });
  console.log(data);
}
