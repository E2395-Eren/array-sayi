let hak = 1;
let i = 0;
let sayi = Math.round(Math.random() * 10);
do {
  let girdi = prompt("Tahmini Giriniz: "); // tahmin= parseInt(promp("tahmim giriniz: ")); şeklinde tek satırda yapılabilir.
  let tahmin = parseInt(girdi);
  if (tahmin < sayi) {
    console.log("Daha büyük bir sayı giriniz.<br>");
  }
  if (tahmin > sayi) {
    console.log("Daha küçük bir sayı giriniz.<br>");
  }
  if (tahmin == sayi) {
    console.log("Tebrikler bildiniz. Tuttuğum sayı: " + sayi + "<br>");
    console.log(hak + ". hakkınızda bildiniz.");
  }
  hak++;
} while (tahmin != sayi && hak <= 4);
{
  if (hak > 4) {
    console.log("Hakkınız kalmadı. Tutulan sayı : " + sayi + "<br>");
  }
}
