// Fonction d'attaque
function attack(player, attackName) {
  var img = document.createElement("img");
  img.src = "assets/images/attacks/" + attackName + ".gif";
  img.classList.add("player__image_attack");
  img.id = "attack";
  document.getElementById("image-p" + player).appendChild(img);

  document.getElementsByClassName("player__spells")[0].classList.add("locked");
  document.getElementsByClassName("player__spells")[1].classList.add("locked");

  switch (attackName) {
    case "sword":
      attackSound("sword");
      break;
    case "spear":
      attackSound("spear");
      break;
    case "punch":
      attackSound("punch");
      break;
    case "meoww":
      attackSound("meoww");
      break;
    case "claw":
      attackSound("claw");
      break;
    case "croccroc":
      attackSound("croccroc");
      break;
  }

  setTimeout(function () {
    document.getElementById("attack").remove();
    // console.log("attack animation finished");
    document
      .getElementsByClassName("player__spells")[0]
      .classList.remove("locked");
    document
      .getElementsByClassName("player__spells")[1]
      .classList.remove("locked");
  }, 1000);
}

// Fonction d'affichage de l'animation de la perte de PV
function damage(player, amount) {
  var p = document.createElement("p");
  p.classList.add("player__pv_value_damage");
  p.id = "damage";
  p.textContent = "-" + amount;
  document.getElementById("pv-p" + player).appendChild(p);
  santeJoueur[player - 1] -= amount; // J'ai ajouté cela dans la fonction déjà existante, je ne sais pas s'il y a le droit
  afficherPvJoueur1.textContent = santeJoueur[0]; // idem
  afficherPvJoueur2.textContent = santeJoueur[1]; // idem

  setTimeout(function () {
    document.getElementById("damage").remove();
    // console.log("Damage animation finished");
  }, 1000);
}

// Fonction d'animation du player gagnant
function victory(player) {
  document.getElementById("vs").remove();
  switch (player) {
    case 1:
      document.getElementById("p2").remove();
      var img = document.createElement("img");
      img.src = "assets/images/winner.gif";
      img.classList.add("winner");
      document.getElementById("image-p" + player).appendChild(img);
      break;
    case 2:
      document.getElementById("p1").remove();
      var img = document.createElement("img");
      img.src = "assets/images/winner.gif";
      img.classList.add("winner");
      document.getElementById("image-p" + player).appendChild(img);
      break;
    default:
      console.log(
        "❌ Vous devez passer dans le fonction le numéro du joueur qui a gagné (1 ou 2)"
      );
  }
  // Jouer le son de victoire
  playVictorySound(); // idem
}

// Fonction de joue les sons
function attackSound(attackName) {
  document.getElementById("sound-" + attackName).play();
}

// Fonction qui lance le bruitage lors du hover des boutons
$(".nes-btn").mouseenter(function () {
  // console.log("button hover");
  $("#sound-button")[0].pause();
  $("#sound-button")[0].currentTime = 0;
  $("#sound-button")[0].play();
});

function launchMusic() {
  $("#sound-theme")[0].volume = 0.2;
  $("#sound-theme")[0].play();
}
