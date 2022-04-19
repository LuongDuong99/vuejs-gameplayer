new Vue({
  el: "#app",
  data: {
    playerHealth: 88,
    monterHealth: 99,
    gameIsRunning: false,
  },
  methods: {
    startNewGame() {
      this.gameIsRunning = true;
      this.monterHealth = 100;
      this.playerHealth = 100;
    },
    endNewGame() {
      this.gameIsRunning = false;
      this.playerHealth = 88;
      this.monterHealth = 68;
    },
    attack() {
      //Player attack monter
      this.monterHealth -= this.inputDamage(4, 5);
      // Monter attack player
      this.playerHealth -= this.inputDamage(4, 30);
      // checkPlayerOptions

      this.checkPlayerOptions();
    },
    specialAttack() {
      if (this.checkPlayerOptions()) {
        return;
      }
      //Player attack monter
      this.monterHealth -= this.inputDamage(10, 20);
      // Monter attack player
      this.monterAttack();
    },
    heal() {
      // Hành Động của Player
      if (this.playerHealth > 70) {
        alert("Chỉ hồi HP khi dưới 70HP");
        return false;
      } else if (this.playerHealth <= 60) {
        this.playerHealth += 20;
      } else {
        this.playerHealth = 70;
      }
      // Hành Động của Monter
      this.monterAttack();

    //   this.checkPlayerOptions();

    },
    monterAttack() {
      this.playerHealth -= this.inputDamage(6, 40);
      this.checkPlayerOptions();
    },
    giveUp() {
      // this.gameIsRunning = false;
      // this.monterHealth=76;
      // this.playerHealth=89;
      //    this.gameIsRunning = !this.gameIsRunning;
      alert("You Lost!");

      this.endNewGame();
    },
    inputDamage(minDamage, maxDamage) {
      return Math.max(Math.floor(Math.random() * maxDamage + 1), minDamage);
    },
    checkPlayerOptions() {
      if (this.monterHealth <= 0) {
        if (confirm("You Won! New Game ?")) {
          this.startNewGame();
        } else {
          this.gameIsRunning = false;
        }
        return true;
      } else if (this.playerHealth <= 0) {
        if (confirm("You Lost! New Game ?")) {
          this.startNewGame();
        } else {
          this.gameIsRunning = false;
        }
        return true;
      }
      return;
    },
  },
});
