/********************
 * マスターデータ
 * 表示キー → 進行ID
 ********************/
const KEY_TO_ID = {
  "グッド-0":1, "グッド-1":2,

  "レア-0":3, "レア-1":4, "レア-2":5, "レア-3":6,

  "エピック-0":7, "エピック-1":8, "エピック-2":9, "エピック-3":10,

  "エピックT1-0":11, "エピックT1-1":12, "エピックT1-2":13, "エピックT1-3":14,

  "レジェンド-0":15, "レジェンド-1":16, "レジェンド-2":17, "レジェンド-3":18,

  "レジェンドT1-0":19, "レジェンドT1-1":20, "レジェンドT1-2":21, "レジェンドT1-3":22,

  "レジェンドT2-0":23, "レジェンドT2-1":24, "レジェンドT2-2":25, "レジェンドT2-3":26,

  "レジェンドT3-0":27, "レジェンドT3-1":28, "レジェンドT3-2":29, "レジェンドT3-3":30,

  "神話-0":31, "神話-1":32, "神話-2":33, "神話-3":34,

  "神話T1-0":35, "神話T1-1":36, "神話T1-2":37, "神話T1-3":38,

  "神話T2-0":39, "神話T2-1":40, "神話T2-2":41, "神話T2-3":42,

  "神話T3-0":43, "神話T3-1":44, "神話T3-2":45, "神話T3-3":46,

  "神話T4-0":47, "神話T4-1":48, "神話T4-2":49, "神話T4-3":50
};

/********************
 * 進行ID → 素材
 ********************/
const MASTER = {
  1:{silk:1500,thread:15,blueprint:0,pt:1125},
  2:{silk:3800,thread:40,blueprint:0,pt:1875},
  3:{silk:7000,thread:70,blueprint:0,pt:3000},
  4:{silk:9700,thread:95,blueprint:0,pt:4500},
  5:{silk:1000,thread:10,blueprint:45,pt:5100},
  6:{silk:1000,thread:10,blueprint:50,pt:5440},
  7:{silk:1500,thread:15,blueprint:60,pt:3230},
  8:{silk:1500,thread:15,blueprint:70,pt:3230},
  9:{silk:6500,thread:65,blueprint:40,pt:3225},
  10:{silk:8000,thread:80,blueprint:50,pt:3225},
  11:{silk:10000,thread:95,blueprint:60,pt:3440},
  12:{silk:11000,thread:110,blueprint:70,pt:3440},
  13:{silk:13000,thread:130,blueprint:85,pt:4085},
  14:{silk:15000,thread:160,blueprint:100,pt:4085},
  15:{silk:22000,thread:220,blueprint:40,pt:6250},
  16:{silk:23000,thread:230,blueprint:40,pt:6250},
  17:{silk:25000,thread:250,blueprint:45,pt:6250},
  18:{silk:26000,thread:260,blueprint:45,pt:6250},
  19:{silk:28000,thread:280,blueprint:45,pt:6250},
  20:{silk:30000,thread:300,blueprint:55,pt:6250},
  21:{silk:32000,thread:320,blueprint:55,pt:6250},
  22:{silk:35000,thread:340,blueprint:55,pt:0},
  23:{silk:38000,thread:390,blueprint:55,pt:0},
  24:{silk:43000,thread:430,blueprint:75,pt:0},
  25:{silk:45000,thread:460,blueprint:80,pt:0},
  26:{silk:48000,thread:500,blueprint:85,pt:0},
  27:{silk:60000,thread:600,blueprint:120,pt:0},
  28:{silk:70000,thread:700,blueprint:140,pt:9000},
  29:{silk:80000,thread:800,blueprint:160,pt:9000},
  30:{silk:90000,thread:900,blueprint:180,pt:9000},
  31:{silk:108000,thread:1080,blueprint:220,pt:12000},
  32:{silk:114000,thread:1140,blueprint:230,pt:12000},
  33:{silk:121000,thread:1210,blueprint:240,pt:12000},
  34:{silk:128000,thread:1280,blueprint:250,pt:12000},
  35:{silk:154000,thread:1540,blueprint:300,pt:15000},
  36:{silk:163000,thread:1630,blueprint:320,pt:15000},
  37:{silk:173000,thread:1730,blueprint:340,pt:15000},
  38:{silk:183000,thread:1830,blueprint:360,pt:15000},
  39:{silk:220000,thread:2200,blueprint:430,pt:0},
  40:{silk:233000,thread:2330,blueprint:460,pt:0},
  41:{silk:247000,thread:2470,blueprint:490,pt:0},
  42:{silk:264000,thread:2640,blueprint:520,pt:0},
  43:{silk:306000,thread:3060,blueprint:610,pt:0},
  44:{silk:323000,thread:3230,blueprint:650,pt:0},
  45:{silk:340000,thread:3400,blueprint:690,pt:0},
  46:{silk:357000,thread:3570,blueprint:730,pt:0},
  47:{silk:412000,thread:4120,blueprint:840,pt:0},
  48:{silk:433000,thread:4330,blueprint:890,pt:0},
  49:{silk:454000,thread:4540,blueprint:940,pt:0},
  50:{silk:475000,thread:4750,blueprint:990,pt:0}
};

/********************
 * 計算処理（6部位）
 ********************/
function calculate() {
  const currents = document.querySelectorAll(".current");
  const targets = document.querySelectorAll(".target");

  let silk = 0;
  let thread = 0;
  let blueprint = 0;
  let pt = 0;

  for (let i = 0; i < currents.length; i++) {
    const curKey = currents[i].value;
    const targetKey = targets[i].value;

    if (!curKey || !targetKey) continue;

    const curId = KEY_TO_ID[curKey];
    const targetId = KEY_TO_ID[targetKey];

    if (targetId <= curId) continue;

    for (let id = curId + 1; id <= targetId; id++) {
      silk += MASTER[id].silk;
      thread += MASTER[id].thread;
      blueprint += MASTER[id].blueprint;
      pt += MASTER[id].pt;
    }
  }

  document.getElementById("result").innerHTML = `
    <h3>計算結果（6部位合算）</h3>
    <p>必要な絹：${silk}</p>
    <p>必要な金の糸：${thread}</p>
    <p>必要な設計図：${blueprint}</p>
    <p>獲得評価ポイント：${pt}</p>
  `;
}
