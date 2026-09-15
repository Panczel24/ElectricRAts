import './style.css';
import { ElectricRat } from './ElectricRat';

let rats: ElectricRat[] = [];

document.addEventListener("DOMContentLoaded", () => {

  const form = document.getElementById("ratForm") as HTMLFormElement;
  const ratName = document.getElementById("ratName") as HTMLInputElement;

  const exportButton = document.getElementById("export") as HTMLButtonElement;
  const csv = document.getElementById("exportRats") as HTMLTextAreaElement;


  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = ratName.value.trim();
    const atk = Math.floor(Math.random() * (20 - 10 + 1)) + 10;
    const hp = Math.floor(Math.random() * (100 - 50 + 1)) + 50;

    try {

      const newRat = new ElectricRat(name, atk, hp);
      rats.push(newRat);
      updateRatCards();
      form.reset();
    } catch (ex) {

      if (ex instanceof Error) {
        document.getElementById("errormsg")!.textContent = ex.message;
      }
      else{
        throw ex;
      }
    }
  });


  function updateRatCards() {
    const cardContainer = document.getElementById("cardContainer") as HTMLDivElement;
    cardContainer.innerHTML = "";

    for (const rat of rats) {
      const card = document.createElement("div");
      card.classList.add("card");

      card.innerHTML = `
        <h3>${rat.name}</h3>
        <p>ATK: ${rat.atk}</p>
        <p>HP: ${rat.hp}</p>
      `;
      cardContainer.appendChild(card);

    }
  }


  exportButton.addEventListener("click", (e) => {
    e.preventDefault();
    let csvtext = "name;atk;hp\n";
    for (const rat of rats) {
      csvtext += rat.toCSV() + "\n";
    }

    csv.value = csvtext;

  });

});