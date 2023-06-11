function selection(){
  var select = document.getElementById("cars");
  var value = select.value;

  switch (value){
      case "all":
          var divs = document.getElementsByClassName("cars");
              for (i = 0; i < divs.length; i++){
                  divs[i].style.display = "flex";
              }
          break

          case "volkswagen":
              var divs = document.getElementsByClassName("cars");
              for (i = 0; i < divs.length; i++){
                  if (divs[i].classList.contains("Volkswagen")) divs[i].style.display = "flex";
                  else divs[i].style.display = "none";
              }
              break

          case "opel":
              var divs = document.getElementsByClassName("cars");
              for (i = 0; i < divs.length; i++){
                  if (divs[i].classList.contains("Opel")) divs[i].style.display = "flex";
                  else divs[i].style.display = "none";
              }
              break

          case "mercedes":
              var divs = document.getElementsByClassName("cars");
              for (i = 0; i < divs.length; i++){
                  if (divs[i].classList.contains("Mercedes")) divs[i].style.display = "flex";
                  else divs[i].style.display = "none";
              }
              break

          case "audi":
              var divs = document.getElementsByClassName("cars");
              for (i = 0; i < divs.length; i++){
                  if (divs[i].classList.contains("Audi")) divs[i].style.display = "flex";
                  else divs[i].style.display = "none";
              }
              break

          case "porche":
              var divs = document.getElementsByClassName("cars");
              for (i = 0; i < divs.length; i++){
                  if (divs[i].classList.contains("Porche")) divs[i].style.display = "flex";
                  else divs[i].style.display = "none";
              }
              break

              case "bmw":
                  var divs = document.getElementsByClassName("cars");
                  for (i = 0; i < divs.length; i++){
                      if (divs[i].classList.contains("BMW")) divs[i].style.display = "flex";
                      else divs[i].style.display = "none";
                  }
                  break

            case "skoda":
                var divs = document.getElementsByClassName("cars");
                for (i = 0; i < divs.length; i++){
                    if (divs[i].classList.contains("Skoda")) divs[i].style.display = "flex";
                    else divs[i].style.display = "none";
                }
                break
            
                case "ford":
                    var divs = document.getElementsByClassName("cars");
                    for (i = 0; i < divs.length; i++){
                        if (divs[i].classList.contains("Ford")) divs[i].style.display = "flex";
                        else divs[i].style.display = "none";
                    }
                    break
  
          }
}

samochody = [ 
    {
        "marka": "Audi Q5",
        "rokProdukcji": "2017",
        "silnik": "1.9 TDI 150 KM",
        "przebieg": "72 386 km",
        "paliwo": "Diesel",
        "cena": "170000",
        "img": "Obrazy/AUDI Q5.png"
    },
    {
        "marka": "BMW 318d",
        "rokProdukcji": "2018",
        "silnik": "1.8 D 150 KM",
        "przebieg": "121 800 km",
        "paliwo": "Diesel",
        "cena": "94000",
        "img": "Obrazy/BMW_Seria_3.png"
    },
    {
        "marka": "OPEL Meriva",
        "rokProdukcji": "2011",
        "silnik": "1.4 120 KM",
        "przebieg": "205 993 km",
        "paliwo": "Benzyna",
        "cena": "23500",
        "img": "Obrazy/OPEL Meriva.png"
    },
    {
        "marka": "OPEL Astra",
        "rokProdukcji": "2017",
        "silnik": "1.6 CDTI 110 KM",
        "przebieg": "121 900 km",
        "paliwo": "Diesel",
        "cena": "50500",
        "img": "Obrazy/OPEL Astra.png"
    },
    {
        "marka": "FORD Edge",
        "rokProdukcji": "2016",
        "silnik": "2.0 TDCI 210 KM",
        "przebieg": "89 000 km",
        "paliwo": "Diesel",
        "cena": "111000",
        "img": "Obrazy/FORD Edge.png"
    },
    {
        "marka": "MERCEDES-BENZ C Klasa",
        "rokProdukcji": "2016",
        "silnik": "2.0 D 136 KM",
        "przebieg": "107 845 km",
        "paliwo": "Diesel",
        "cena": "99900",
        "img": "Obrazy/Mecedes.png"
    }
]

function WczytajDane(index){
    sessionStorage.setItem("marka", samochody[index].marka);
    sessionStorage.setItem("rokProdukcji", samochody[index].rokProdukcji);
    sessionStorage.setItem("silnik", samochody[index].silnik);
    sessionStorage.setItem("przebieg", samochody[index].przebieg);
    sessionStorage.setItem("paliwo", samochody[index].paliwo);
    sessionStorage.setItem("cena", samochody[index].cena);
    sessionStorage.setItem("img", samochody[index].img);
    location.href = "zakup.html";
}

function OdczytajDane(){
    var marka = sessionStorage.getItem("marka");
    var rokProdukcji = sessionStorage.getItem("rokProdukcji");
    var silnik = sessionStorage.getItem("silnik");
    var przebieg = sessionStorage.getItem("przebieg");
    var paliwo = sessionStorage.getItem("paliwo");
    var cena = sessionStorage.getItem("cena");
    var img = sessionStorage.getItem("img");
    
    document.getElementById("marka").innerHTML = "Marka: ".concat(marka);
    document.getElementById("rokProdukcji").innerHTML = "Rok Produkcji: ".concat(rokProdukcji);
    document.getElementById("silnik").innerHTML = "silnik: ".concat(silnik);
    document.getElementById("przebieg").innerHTML = "Przebieg: ".concat(przebieg);
    document.getElementById("paliwo").innerHTML = "Paliwo: ".concat(paliwo);
    document.getElementById("cena").innerHTML = "Cena: ".concat(cena).concat(" zł");
    document.getElementById("img").src = img;
}

function Wroc(){location.href = "index.html";}

function Potwierdz(){

    var FPlatnosci = document.querySelector('input[name = "formaPlatnosci"]:checked');
    var dane = document.getElementsByName("dane");
    var breaker = false;
    var check = undefined;

    if (FPlatnosci == null){
        breaker = true;
        check = 0;
    }
    
    for (var i = 0; i < dane.length; i++){
        if (dane[i].value == null || dane[i].value == "" && check == undefined) {
            breaker = true;
            check = 1;
        }
    }

    var cenaDodatkow = 0;
    var dodatki = document.getElementsByName("dodatki");
    for(var i = 0; i < dodatki.length; i++){
        if (dodatki[i].checked) cenaDodatkow += parseInt(dodatki[i].value);
    }
    sessionStorage.setItem("cenaDodatkow", cenaDodatkow);
    if (breaker) {
        if (check == 0) {
            alert("Proszę wybrać formę płatności!");
        }
        else if (check == 1) {
            alert("Proszę wypełnić dane osobowe!");
        }
    } 
    else {
        location.href = "potwierdzenie.html";
    }
}

function Zakup(){
    var marka = sessionStorage.getItem("marka");
    var img = sessionStorage.getItem("img");
    var sumaCen = sessionStorage.getItem("cena");
    var cenaDodatkow = sessionStorage.getItem("cenaDodatkow");
    sumaCen = parseInt(sumaCen) + parseInt(cenaDodatkow)

    var date = new Date();
    var dzien = date.getDate();
    var miesiac = date.getMonth() + 1;
    var rok = date.getFullYear();
    
    dzien += 7 + Math.floor(Math.random() * 7);
    if (dzien >= 31){
        dzien %= 31;
        miesiac += 1;
        if (dzien == 0) dzien += 1;
    }
    
    var wiadomosc = "Dziękujemy za zakup samochodu ".concat(marka);
    var czasOczekiwania = "Przewidywany czas odbioru: ".concat(dzien).concat(".0").concat(miesiac).concat(".").concat(rok);
    var zaplata = "Cena ostateczna: ".concat(sumaCen).concat(" zł");
    document.getElementById("wiadomosc").innerHTML = wiadomosc;
    document.getElementById("dostawa").innerHTML = czasOczekiwania;
    document.getElementById("zaplata").innerHTML = zaplata;
    document.getElementById("img").src = img;
}