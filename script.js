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

function calculate() {
  const cur = Number(document.getElementById("currentId").value);
  const next = Number(document.getElementById("nextId").value);

  let silk = 0, thread = 0, blueprint = 0, pt = 0;

  for (let i = cur + 1; i <= next; i++) {
    silk += MASTER[i].silk;
    thread += MASTER[i].thread;
    blueprint += MASTER[i].blueprint;
    pt += MASTER[i].pt;
  }

  document.getElementById("result").innerHTML = `
    <h3>計算結果</h3>
    <p>必要な絹：${silk}</p>
    <p>必要な金の糸：${thread}</p>
    <p>必要な設計図：${blueprint}</p>
    <p>獲得評価pt：${pt}</p>
  `;
}
