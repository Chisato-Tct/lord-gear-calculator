// ===== 宝石レベルマスター（Lv1→14）=====
const JEWEL_MASTER = {
  1:  {guide: 10,  design: 1},
  2:  {guide: 20,  design: 2},
  3:  {guide: 40,  design: 3},
  4:  {guide: 70,  design: 5},
  5:  {guide: 110, design: 8},
  6:  {guide: 160, design: 12},
  7:  {guide: 220, design: 18},
  8:  {guide: 300, design: 26},
  9:  {guide: 400, design: 36},
  10: {guide: 550, design: 50},
  11: {guide: 750, design: 70},
  12: {guide: 1000,design: 95},
  13: {guide: 1300,design: 130},
  14: {guide: 1700,design: 180},
};

// ===== 部位・スロット定義 =====
const PARTS = ["帽子","装飾","ローブ","ズボン","指輪","杖"];
const SLOTS = ["①","②","③"];

// ===== テーブル生成 =====
const tbody = document.getElementById("jewel-table");
let html = "";

PARTS.forEach(part => {
  SLOTS.forEach((slot, i) => {
    html += `
      <tr>
        <td>${i === 0 ? part : ""}</td>
        <td>${slot}</td>
        <td><select class="cur"></select></td>
        <td><select class="tar"></select></td>
      </tr>
    `;
  });
});

tbody.innerHTML = html;

// ===== セレクト初期化 =====
const levelOptions =
  `<option value="">選択</option>` +
  Object.keys(JEWEL_MASTER)
    .map(l => `<option value="${l}">Lv${l}</option>`)
    .join("");

document.querySelectorAll(".cur, .tar").forEach(sel => {
  sel.innerHTML = levelOptions;
});

// ===== 計算 =====
function calculate() {
  let needGuide = 0;
  let needDesign = 0;

  document.querySelectorAll("tbody tr").forEach(tr => {
    const cur = Number(tr.querySelector(".cur").value);
    const tar = Number(tr.querySelector(".tar").value);
    if (!cur || !tar || tar <= cur) return;

    for (let lv = cur + 1; lv <= tar; lv++) {
      needGuide += JEWEL_MASTER[lv].guide;
      needDesign += JEWEL_MASTER[lv].design;
    }
  });

  const haveGuide = Number(document.getElementById("have-guide").value);
  const haveDesign = Number(document.getElementById("have-design").value);

  const lackGuide = needGuide - haveGuide;
  const lackDesign = needDesign - haveDesign;

  const red = v => v > 0 ? `<span style="color:red">${v}</span>` : 0;

  document.getElementById("result").innerHTML = `
    <p>必要 Guides：${needGuide}</p>
    <p>必要 Designs：${needDesign}</p>
    <hr>
    <p>不足 Guides：${red(lackGuide)}</p>
    <p>不足 Designs：${red(lackDesign)}</p>
  `;
}
