// ===============================
// 宝石マスターデータ（Lv1〜14）
// Guides = 宝石ハンドブック
// Designs = 宝石図面
// ===============================
const JEWEL_MASTER = {
  1:  { guides: 5,   designs: 5   },
  2:  { guides: 40,  designs: 15  },
  3:  { guides: 60,  designs: 40  },
  4:  { guides: 80,  designs: 100 },
  5:  { guides: 100, designs: 200 },
  6:  { guides: 120, designs: 300 },
  7:  { guides: 140, designs: 400 },
  8:  { guides: 200, designs: 400 },
  9:  { guides: 300, designs: 400 },
  10: { guides: 420, designs: 420 },
  11: { guides: 560, designs: 420 },
  12: { guides: 580, designs: 600 },
  13: { guides: 610, designs: 780 },
  14: { guides: 645, designs: 960 }
};

// ===============================
// セレクト初期化（Lv0含む）
// ===============================
function initJewelSelects() {
  const options =
    `<option value="0">Lv0</option>` +
    Object.keys(JEWEL_MASTER)
      .map(lv => `<option value="${lv}">Lv${lv}</option>`)
      .join("");

  document.querySelectorAll("select.current, select.target").forEach(sel => {
    sel.innerHTML = options;
    sel.value = "0";
  });
}

initJewelSelects();

// ===============================
// 計算処理
// ===============================
function calculate() {
  let needGuides = 0;
  let needDesigns = 0;

  document.querySelectorAll("tbody tr").forEach(tr => {
    const cur = Number(tr.querySelector(".current")?.value);
    const tar = Number(tr.querySelector(".target")?.value);

    if (isNaN(cur) || isNaN(tar) || tar <= cur) return;

    for (let lv = cur + 1; lv <= tar; lv++) {
      const m = JEWEL_MASTER[lv];
      if (!m) continue;
      needGuides += m.guides;
      needDesigns += m.designs;
    }
  });

  const haveGuides  = Number(document.getElementById("have-guides").value)  || 0;
  const haveDesigns = Number(document.getElementById("have-designs").value) || 0;

  const lackGuides  = needGuides  - haveGuides;
  const lackDesigns = needDesigns - haveDesigns;

  const red = v => v > 0 ? `<span style="color:red">${v}</span>` : 0;

  document.getElementById("result").innerHTML = `
    <p>必要 宝石ハンドブック：${needGuides}</p>
    <p>必要 宝石図面：${needDesigns}</p>
    <hr>
    <p>不足 宝石ハンドブック：${red(lackGuides)}</p>
    <p>不足 宝石図面：${red(lackDesigns)}</p>
  `;
}
