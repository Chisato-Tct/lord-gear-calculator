// マスター（仮。あとでスプレッドシートの数値に差し替え）
const MASTER = [
  { id: 1, silk: 1000, thread: 10 },
  { id: 2, silk: 1200, thread: 12 },
  { id: 3, silk: 1500, thread: 15 },
  { id: 4, silk: 1800, thread: 18 },
];

function calculate() {
  const curId = Number(document.getElementById("curId").value);
  const nextId = Number(document.getElementById("nextId").value);

  let totalSilk = 0;
  let totalThread = 0;

  for (const r of MASTER) {
    if (r.id > curId && r.id <= nextId) {
      totalSilk += r.silk;
      totalThread += r.thread;
    }
  }

  document.getElementById("result").innerHTML =
    "必要な糸：" + totalThread + "<br>" +
    "必要な絹：" + totalSilk;
}
