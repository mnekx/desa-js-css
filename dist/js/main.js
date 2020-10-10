// document
//   .getElementById("kiungo-maskani")
//   .dispatchEvent(new Event("mouseenter", this));
function onyeshaYaliyomo(kiungo, e, rangi, id) {
  e.preventDefault();
  let viungo, yaliyomo;
  viungo = document.getElementsByClassName("kiungo");
  yaliyomo = document.getElementsByClassName("yaliyomo");

  // ficha 'yaliyomo' zote kabla ya yote
  for (let index = 0; index < yaliyomo.length; index++) {
    const element = yaliyomo[index];
    element.style.display = "none";
  }

  // Ondoa darasa la 'hai' kwenye viungo vyote
  for (let index = 0; index < viungo.length; index++) {
    const kiungo = viungo[index];
    kiungo.className = kiungo.className.replace(" hai", "");
    kiungo.style.backgroundColor = "transparent";
  }

  // Onyesha kiungo hai na Yaliyomo yake
  kiungo.className += " hai";
  kiungo.style.backgroundColor = rangi;
  let yaliyomoHai = document.getElementById(id);
  let seksheni = document.getElementById("tabu-kurasa-nzima");
  yaliyomoHai.style.display = "block";
  //   yaliyomoHai.style.backgroundColor = rangi;
  seksheni.style.backgroundColor = rangi;
}

function onyeshaViungo() {
  let watotoWaUrambazaji = document.getElementById("urambazaji").childNodes[1];
  //   console.log(watotoWaUrambazaji);
  let nav = watotoWaUrambazaji.childNodes;
  //   console.log(nav);
  for (let index = 0; index < nav.length; index++) {
    const element = nav[index];
    if (index % 2 === 1) {
      if (index === 1) {
        continue;
      }
      //   console.log(index, " ", element);

      //   console.log(element);
      element.classList.toggle("onyesha-kiungo");
    }
  }
}

function tafuta() {
  let vilivyomo = document.getElementsByClassName("tafuta-li");
  let input = document.getElementById("tafuta-input");
  let filter = input.value.toUpperCase();
  //   console.log(filter);

  for (let index = 0; index < vilivyomo.length; index++) {
    const li = vilivyomo[index];
    // console.log(li.childNodes[0].innerText.toUpperCase().indexOf(filter));
    if (li.childNodes[0].innerText.toUpperCase().indexOf(filter) > -1) {
      li.style.display = "";
    } else {
      li.style.display = "none";
    }
  }
}
