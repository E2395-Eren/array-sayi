let hak = 4;
let tahmin;
let sayi = Math.round(Math.random() * 10);
/* do {
  //let girdi = ; // tahmin= parseInt(promp("tahmim giriniz: ")); şeklinde tek satırda yapılabilir.
  let tahmin = Number(prompt("Tahmini Giriniz: "));
  if (tahmin < sayi) {
    console.log("Daha büyük bir sayı giriniz.<br>");
  } else if (tahmin > sayi) {
    console.log("Daha küçük bir sayı giriniz.<br>");
  } else if (tahmin == sayi) {
    console.log("Tebrikler bildiniz. Tuttuğum sayı: " + sayi + "<br>");
    console.log(hak + ". hakkınızda bildiniz.");
    break;
  }
  hak++;
} while (tahmin != sayi && hak <= 4);
{
  if (hak > 4) {
    console.log("Hakkınız kalmadı. Tutulan sayı : " + sayi + "<br>");
  }
} */
/*let tahmin = Number(prompt("Tahmini Giriniz: "));
while (tahmin != sayi) {
  //let girdi = ; // tahmin= parseInt(promp("tahmim giriniz: ")); şeklinde tek satırda yapılabilir.

  let tahmin = Number(prompt("Tahmini Giriniz: "));

  if (tahmin < sayi) {
    console.log("Daha büyük bir sayı giriniz.<br>");
  } else if (tahmin > sayi) {
    console.log("Daha küçük bir sayı giriniz.<br>");
  } else if (tahmin == sayi) {
    console.log("Tebrikler bildiniz. Tuttuğum sayı: " + sayi + "<br>");
    console.log("bildiniz");
    break;
  }
  hak--;
  if (hak == 0) {
    console.log("Hakkınız kalmadı. Tutulan sayı : " + sayi + "<br>");
    break;
  }
}*/

for (let i = 1; i <= hak; i++) {
  //let girdi = ; // tahmin= parseInt(promp("tahmim giriniz: ")); şeklinde tek satırda yapılabilir.

  let tahmin = Number(prompt("Tahmini Giriniz: "));
  if (sayi == tahmin) {
    console.log("bıldınız");
    if (i == 1) {
      console.log("aferin 100 aldın");
    } else if (i == 2) {
      console.log("aferin 75 aldın");
    } else if (i == 3) {
      console.log("aferin 50 aldın");
    } else {
      console.log("aferin 25 aldın");
    }
    break;
  } else if (sayi > tahmin) {
    console.log("büyük sayi giriniz");
  } else if (sayi < tahmin) {
    console.log("küçük sayi giriniz");
  }
  if (i == 4) {
    console.log("hakkınız kalmadı");
  }
  /*  if (tahmin < sayi) {
    console.log("Daha büyük bir sayı giriniz.<br>");
  } else if (tahmin > sayi) {
    console.log("Daha küçük bir sayı giriniz.<br>");
  } else if (tahmin == sayi) {
    console.log("Tebrikler bildiniz. Tuttuğum sayı: " + sayi + "<br>");
    console.log("bildiniz");
    break;
  }
  ; */
}
