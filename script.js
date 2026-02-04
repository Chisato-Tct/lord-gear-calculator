console.log("JS loaded");

function calculate() {
  const count = Number(document.getElementById("count").value);
  const thread = Number(document.getElementById("thread").value);
  const silk = Number(document.getElementById("silk").value);

  const totalThread = count * thread;
  const totalSilk = count * silk;

  document.getElementById("result").innerHTML =
    "必要な糸：" + totalThread + "<br>" +
    "必要な絹：" + totalSilk;
}
