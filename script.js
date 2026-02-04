alert("JSは生きてる");
function calculate() {
  const count = Number(document.getElementById("count").value);
  const thread = Number(document.getElementById("thread").value);
  const silk = Number(document.getElementById("silk").value);

  const totalThread = count * thread;
  const totalSilk = count * silk;

  document.getElementById("result").innerHTML = `
    <h3>計算結果</h3>
    <p>必要な糸：${totalThread}</p>
    <p>必要な絹：${totalSilk}</p>
  `;
}
