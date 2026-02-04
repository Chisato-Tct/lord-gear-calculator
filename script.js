// ===== マスターデータ（進行ID順・あなたが貼った表そのまま） =====
const MASTER = [
  {id:1, key:"グッド-0", silk:1500, thread:15, bp:0, pt:1125},
  {id:2, key:"グッド-1", silk:3800, thread:40, bp:0, pt:1875},
  {id:3, key:"レア-0", silk:7000, thread:70, bp:0, pt:3000},
  {id:4, key:"レア-1", silk:9700, thread:95, bp:0, pt:4500},
  {id:5, key:"レア-2", silk:1000, thread:10, bp:45, pt:5100},
  {id:6, key:"レア-3", silk:1000, thread:10, bp:50, pt:5440},
  {id:7, key:"エピック-0", silk:1500, thread:15, bp:60, pt:3230},
  {id:8, key:"エピック-1", silk:1500, thread:15, bp:70, pt:3230},
  {id:9, key:"エピック-2", silk:6500, thread:65, bp:40, pt:3225},
  {id:10, key:"エピック-3", silk:8000, thread:80, bp:50, pt:3225},
  {id:11, key:"エピックT1-0", silk:10000, thread:95, bp:60, pt:3440},
  {id:12, key:"エピックT1-1", silk:11000, thread:110, bp:70, pt:3440},
  {id:13, key:"エピックT1-2", silk:13000, thread:130, bp:85, pt:4085},
  {id:14, key:"エピックT1-3", silk:15000, thread:160, bp:100, pt:4085},
  {id:15, key:"レジェンド-0", silk:22000, thread:220, bp:40, pt:6250},
  {id:16, key:"レジェンド-1", silk:23000, thread:230, bp:40, pt:6250},
  {id:17, key:"レジェンド-2", silk:25000, thread:250, bp:45, pt:6250},
  {id:18, key:"レジェンド-3", silk:26000, thread:260, bp:45, pt:6250},
  {id:19, key:"レジェンドT1-0", silk:28000, thread:280, bp:45, pt:6250},
  {id:20, key:"レジェンドT1-1", silk:30000, thread:300, bp:55, pt:6250},
  {id:21, key:"レジェンドT1-2", silk:32000, thread:320, bp:55, pt:6250},
  {id:22, key:"レジェンドT1-3", silk:35000, thread:340, bp:55, pt:0},
  {id:23, key:"レジェンドT2-0", silk:38000, thread:390, bp:55, pt:0},
  {id:24, key:"レジェンドT2-1", silk:43000, thread:430, bp:75, pt:0},
  {id:25, key:"レジェンドT2-2", silk:45000, thread:460, bp:80, pt:0},
  {id:26, key:"レジェンドT2-3", silk:48000, thread:500, bp:85, pt:0},
  {id:27, key:"レジェンドT3-0", silk:60000, thread:600, bp:120, pt:0},
  {id:28, key:"レジェンドT3-1", silk:70000, thread:700, bp:140, pt:9000},
  {id:29, key:"レジェンドT3-2", silk:80000, thread:800, bp:160, pt:9000},
  {id:30, key:"レジェンドT3-3", silk:90000, thread:900, bp:180, pt:9000},
  {id:31, key:"神話-0", silk:108000, thread:1080, bp:220, pt:12000},
  {id:32, key:"神話-1", silk:114000, thread:1140, bp:230, pt:12000},
  {id:33, key:"神話-2", silk:121000, thread:1210, bp:240, pt:12000},
  {id:34, key:"神話-3", silk:128000, thread:1280, bp:250, pt:12000},
  {id:35, key:"神話T1-0", silk:154000, thread:1540, bp:300, pt:15000},
  {id:36, key:"神話T1-1", silk:163000, thread:1630, bp:320, pt:15000},
  {id:37, key:"神話T1-2", silk:173000, thread:1730, bp:340, pt:15000},
  {id:38, key:"神話T1-3", silk:183000, thread:1830, bp:360, pt:15000},
  {id:39, key:"神話T2-0", silk:220000, thread:2200, bp:430, pt:0},
  {id:40, key:"神話T2-1", silk:233000, thread:2330, bp:460, pt:0},
  {id:41, key:"神話T2-2", silk:247000, thread:2470, bp:490, pt:0},
  {id:42, key:"神話T2-3", silk:264000, thread:2640, bp:520, pt:0},
  {id:43, key:"神話T3-0", silk:306000, thread:3060, bp:610, pt:0},
  {id:44, key:"神話T3-1", silk:323000, thread:3230, bp:650, pt:0},
  {id:45, key:"神話T3-2", silk:340000, thread:3400, bp:690, pt:0},
  {id:46, key:"神話T3-3", silk:357000, thread:3570, bp:730, pt:0},
  {id:47, key:"神話T4-0", silk:412000, thread:4120, bp:840, pt:0},
  {id:48, key:"神話T4-1", silk:433000, thread:4330, bp:890, pt:0},
  {id:49, key:"神話T4-2", silk:454000, thread:4540, bp:940, pt:0},
  {id:50, key:"神話T4-3", silk:475000, thread:4750, bp:990, pt:0},
];

// ===== セレクト初期化 =====
function initSelects() {
  const opts = MASTER.map(m => `<option value="${m.id}">${m.key}</option>`).join("");
  document.querySelectorAll("select.current, select.target").forEach(sel => {
    sel.innerHTML = `<option value="">選択</option>` + opts;
  });
}
initSelects();

// ===== 計算 =====
function calculate() {
  let needSilk = 0, needThread = 0, needBP = 0, gainPT = 0;

  document.querySelectorAll("tbody tr").forEach(tr => {
    const cur = Number(tr.querySelector(".current").value);
    const tar = Number(tr.querySelector(".target").value);
    if (!cur || !tar || tar <= cur) return;

    for (let id = cur + 1; id <= tar; id++) {
      const m = MASTER.find(x => x.id === id);
      if (!m) continue;
      needSilk += m.silk;
      needThread += m.thread;
      needBP += m.bp;
      gainPT += m.pt;
    }
  });

  const haveSilk = Number(document.getElementById("have-silk").value);
  const haveThread = Number(document.getElementById("have-thread").value);
  const haveBP = Number(document.getElementById("have-blueprint").value);

  const lackSilk = needSilk - haveSilk;
  const lackThread = needThread - haveThread;
  const lackBP = needBP - haveBP;

  const red = v => v > 0 ? `<span style="color:red">${v}</span>` : 0;

  document.getElementById("result").innerHTML = `
    <p>必要絹：${needSilk}</p>
    <p>必要金の糸：${needThread}</p>
    <p>必要設計図：${needBP}</p>
    <p>獲得評価pt：${gainPT}</p>
    <hr>
    <p>不足絹：${red(lackSilk)}</p>
    <p>不足金の糸：${red(lackThread)}</p>
    <p>不足設計図：${red(lackBP)}</p>
  `;
}
