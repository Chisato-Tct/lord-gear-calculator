// ===== マスター（進行IDベース）=====
const MASTER = [
  { id: 1, silk: 1500, thread: 15, blueprint: 0, point: 1125 },
  { id: 2, silk: 3800, thread: 40, blueprint: 0, point: 1875 },
  { id: 3, silk: 7000, thread: 70, blueprint: 0, point: 3000 },
  { id: 4, silk: 9700, thread: 95, blueprint: 0, point: 4500 },
  { id: 5, silk: 1000, thread: 10, blueprint: 45, point: 5100 },
  { id: 6, silk: 1000, thread: 10, blueprint: 50, point: 5440 },
  { id: 7, silk: 1500, thread: 15, blueprint: 60, point: 3230 },
  { id: 8, silk: 1500, thread: 15, blueprint: 70, point: 3230 },
  { id: 9, silk: 6500, thread: 65, blueprint: 40, point: 3225 },
  { id: 10, silk: 8000, thread: 80, blueprint: 50, point: 3225 },
  { id: 11, silk: 10000, thread: 95, blueprint: 60, point: 3440 },
  { id: 12, silk: 11000, thread: 110, blueprint: 70, point: 3440 },
  { id: 13, silk: 13000, thread: 130, blueprint: 85, point: 4085 },
  { id: 14, silk: 15000, thread: 160, blueprint: 100, point: 4085 },
  { id: 15, silk: 22000, thread: 220, blueprint: 40, point: 6250 },
  { id: 16, silk: 23000, thread: 230, blueprint: 40, point: 6250 },
  { id: 17, silk: 25000, thread: 250, blueprint: 45, point: 6250 },
  { id: 18, silk: 26000, thread: 260, blueprint: 45, point: 6250 },
  { id: 19, silk: 28000, thread: 280, blueprint: 45, point: 6250 },
  { id: 20, silk: 30000, thread: 300, blueprint: 55, point: 6250 },
  { id: 21, silk: 32000, thread: 320, blueprint: 55, point: 6250 },
  { id: 22, silk: 35000, thread: 340, blueprint: 55, point: 0 },
  { id: 23, silk: 38000, thread: 390, blueprint: 55, point: 0 },
  { id: 24, silk: 43000, thread: 430, blueprint: 75, point: 0 },
  { id: 25, silk: 45000, thread: 460, blueprint: 80, point: 0 },
  { id: 26, silk: 48000, thread: 500, blueprint: 85, point: 0 },
  { id: 27, silk: 60000, thread: 600, blueprint: 120, point: 0 },
  { id: 28, silk: 70000, thread: 700, blueprint: 140, point: 9000 },
  { id: 29, silk: 80000, thread: 800, blueprint: 160, point: 9000 },
  { id: 30, silk: 90000, thread: 900, blueprint: 180, point: 9000 },
  { id: 31, silk: 108000, thread: 1080, blueprint: 220, point: 12000 },
  { id: 32, silk: 114000, thread: 1140, blueprint: 230, point: 12000 },
  { id: 33, silk: 121000, thread: 1210, blueprint: 240, point: 12000 },
  { id: 34, silk: 128000, thread: 1280, blueprint: 250, point: 12000 },
  { id: 35, silk: 154000, thread: 1540, blueprint: 300, point: 15000 },
  { id: 36, silk: 163000, thread: 1630, blueprint: 320, point: 15000 },
  { id: 37, silk: 173000, thread: 1730, blueprint: 340, point: 15000 },
  { id: 38, silk: 183000, thread: 1830, blueprint: 360, point: 15000 },
  { id: 39, silk: 220000, thread: 2200, blueprint: 430, point: 0 },
  { id: 40, silk: 233000, thread: 2330, blueprint: 460, point: 0 },
  { id: 41, silk: 247000, thread: 2470, blueprint: 490, point: 0 },
  { id: 42, silk: 264000, thread: 2640, blueprint: 520, point: 0 },
  { id: 43, silk: 306000, thread: 3060, blueprint: 610, point: 0 },
  { id: 44, silk: 323000, thread: 3230, blueprint: 650, point: 0 },
  { id: 45, silk: 340000, thread: 3400, blueprint: 690, point: 0 },
  { id: 46, silk: 357000, thread: 3570, blueprint: 730, point: 0 },
  { id: 47, silk: 412000, thread: 4120, blueprint: 840, point: 0 },
  { id: 48, silk: 433000, thread: 4330, blueprint: 890, point: 0 },
  { id: 49, silk: 454000, thread: 4540, blueprint: 940, point: 0 },
  { id: 50, silk: 475000, thread: 4750, blueprint: 990, point: 0 },
];

// ===== 計算 =====
function calculate() {
  const curId = Number(document.getElementById("curId").value);
  const nextId = Number(document.getElementById("nextId").value);

  let silk = 0;
  let thread = 0;
  let blueprint = 0;
  let point = 0;

  for (const r of MASTER) {
    if (r.id > curId && r.id <= nextId) {
      silk += r.silk;
      thread += r.thread;
      blueprint += r.blueprint;
      point += r.point;
    }
  }

  document.getElementById("result").innerHTML = `
    <h3>計算結果</h3>
    <p>必要な絹：${silk}</p>
    <p>必要な金の糸：${thread}</p>
    <p>必要な設計図：${blueprint}</p>
    <p>獲得評価ポイント：${point}</p>
  `;
}
