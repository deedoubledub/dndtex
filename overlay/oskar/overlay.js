async function getStats() {
  // fetch json
  const response = await fetch("http://frame.deedoubledub.com:8080/oskar/stats.json", { cache: "no-store" });
  const stats = await response.json();

  // set nameplate
  document.getElementById("name").innerHTML = stats.name;
  document.getElementById("class").innerHTML = "Level " + stats.level + " " + stats.class + " - " + stats.subclass;

  // set ability scores
  document.getElementById("str").innerHTML = stats.str;
  document.getElementById("dex").innerHTML = stats.dex;
  document.getElementById("con").innerHTML = stats.con;
  document.getElementById("int").innerHTML = stats.int;
  document.getElementById("wis").innerHTML = stats.wis;
  document.getElementById("cha").innerHTML = stats.cha;
  document.getElementById("ac").innerHTML = stats.ac;
  document.getElementById("hp").innerHTML = stats.hp;

  // set ability modifiers
  document.getElementById("strmod").innerHTML = modifier(stats.str);
  document.getElementById("dexmod").innerHTML = modifier(stats.dex);
  document.getElementById("conmod").innerHTML = modifier(stats.con);
  document.getElementById("intmod").innerHTML = modifier(stats.int);
  document.getElementById("wismod").innerHTML = modifier(stats.wis);
  document.getElementById("chamod").innerHTML = modifier(stats.cha);
}

// calculate ability modifier
function modifier(score) {
  mod = Math.floor((score - 10) / 2);

  // return mod with sign
  if (mod >= 0) {
    return "+" + mod;
  } else {
    return mod;
  }
}

// update stats every second
window.setInterval(getStats, 1000);
