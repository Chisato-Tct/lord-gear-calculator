// マスター（例：ここは後でシートの数値に差し替え）
const MASTER = [
  { id: 1, silk: 1000, thread: 10 },
  { id: 2, silk: 1200, thread: 12 },
  { id: 3, silk: 1500, thread: 15 },
];

function calculate() {
  const count = Number(document.getElementById("count").value);

  let totalSilk = 0;
  let totalThread = 0;

  // 先頭から count 段分を累積
  for (let i = 0; i < count && i < MASTER.length; i++) {
    totalSilk += MASTER[i].silk;
    totalThread += MASTER[i].thread;
  }

  document.getElementById("result").innerHTML =
    "必要な糸：" + totalThread + "<br>" +
    "必要な絹：" + totalSilk;
}

