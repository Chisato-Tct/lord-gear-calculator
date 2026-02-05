// ===============================
// 宝石Lvマスター（Lv0〜14）
// ===============================
const JEWEL_MASTER = [
  { lv: 0, guides: 0, designs: 0 },
  { lv: 1, guides: 5, designs: 5 },
  { lv: 2, guides: 40, designs: 15 },
  { lv: 3, guides: 60, designs: 40 },
  { lv: 4, guides: 80, designs: 100 },
  { lv: 5, guides: 100, designs: 200 },
  { lv: 6, guides: 120, designs: 300 },
  { lv: 7, guides: 140, designs: 400 },
  { lv: 8, guides: 200, designs: 400 },
  { lv: 9, guides: 300, designs: 400 },
  { lv: 10, guides: 420, designs: 420 },
  { lv: 11, guides: 560, designs: 420 },
  { lv: 12, guides: 580, designs: 600 },
  { lv: 13, guides: 610, designs: 780 },
  { lv: 14, guides: 645, designs: 960 },
];

// ===============================
// 初期化：Lvプルダウン生成
// ===============================
function initSelects() {
  const options = JEWEL_MASTER.map(
    m => `<option value="${m.lv}">Lv${m.lv}</option>`
  ).join("");

  document.querySelectorAll("select.current, select.target").forEach(sel => {
    sel.innerHTML = `<option value="">選択</option>` + options;
  });
}

initSelects();

// ===============================
// 計算処理
// ===============================
function calculate() {
  let needGuides = 0;
  let needDesigns = 0;

  document.querySelectorAll("tbody tr").forEach(tr => {
    const cur = tr.querySelector(".current");
    const tar = tr.querySelector(".target");
    if (!cur || !tar) return;

    const curLv = Number(cur.value);
    const tarLv = Number(tar.value);

    if (isNaN(curLv) || isNaN(tarLv) || tarLv <= curLv) return;

    for (let lv = curLv + 1; lv <= tarLv; lv++) {
      const m = JEWEL_MASTER.find(x => x.lv === lv);
      if (!m) continue;
      needGuides += m.guides;
      needDesigns += m.designs;
    }
  });

  const haveGuides = Number(document.getElementById("have-guides").value);
  const haveDesigns = Number(document.getElementById("have-designs").value);

  const lackGuides = needGuides - haveGuides;
  const lackDesigns = needDesigns - haveDesigns;

  const red = v => v > 0 ? `<span style="color:red">${v}</span>` : 0;

  document.getElementById("result").innerHTML = `
    <p>必要ハンドブック：${needGuides}</p>
    <p>必要図面：${needDesigns}</p>
    <hr>
    <p>不足ハンドブック：${red(lackGuides)}</p>
    <p>不足図面：${red(lackDesigns)}</p>
  `;
}
