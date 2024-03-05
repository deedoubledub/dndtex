async function getStats() {
  const response = await fetch("http://localhost:8080/stats.json");
  const stats = await response.json();

  document.getElementById("str").innerHTML = stats.str;
  document.getElementById("dex").innerHTML = stats.dex;
  document.getElementById("con").innerHTML = stats.con;
  document.getElementById("int").innerHTML = stats.int;
  document.getElementById("wis").innerHTML = stats.wis;
  document.getElementById("cha").innerHTML = stats.cha;
  document.getElementById("ac").innerHTML = stats.ac;
  document.getElementById("hp").innerHTML = stats.hp;
}

window.setInterval(getStats, 5000);
