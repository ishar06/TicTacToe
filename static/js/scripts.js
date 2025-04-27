document.addEventListener("DOMContentLoaded", () => {
  const gameState = {
      boardSize: 3,
      board: [],
      currentPlayer: "X",
      gameActive: true,
      scoreX: 0,
      scoreO: 0,
      round: 1,
      isDarkMode: false,
  };

  // DOM elements
  const boardElement = document.getElementById("board");
  const currentPlayerElement = document.getElementById("current-player");
  const scoreXElement = document.getElementById("score-x");
  const scoreOElement = document.getElementById("score-o");
  const roundElement = document.getElementById("round-number");
  const restartButton = document.getElementById("restart-btn");
  const newGameButton = document.getElementById("new-game-btn");
  const themeToggleButton = document.getElementById("theme-toggle-btn");
  const gameMessageElement = document.getElementById("game-message");
  const messageTextElement = document.getElementById("message-text");

  // Sounds
  const clickSound = new Audio("https://cdn.pixabay.com/download/audio/2022/03/15/audio_c8b6b56a19.mp3");
  const winSound = new Audio("https://cdn.pixabay.com/download/audio/2022/03/15/audio_2bffcd0b66.mp3");

  // Initialize Game
  function initializeBoard() {
      boardElement.innerHTML = "";
      boardElement.style.gridTemplateColumns = `repeat(${gameState.boardSize}, 1fr)`;
      gameState.board = Array(gameState.boardSize * gameState.boardSize).fill("");

      for (let i = 0; i < gameState.board.length; i++) {
          const cell = document.createElement("div");
          cell.classList.add("cell");
          cell.dataset.index = i;
          cell.addEventListener("click", () => handleCellClick(i));
          boardElement.appendChild(cell);
      }
      updateGameInfo();
  }

  function handleCellClick(index) {
      const cells = document.querySelectorAll(".cell");
      if (gameState.board[index] !== "" || !gameState.gameActive) return;

      gameState.board[index] = gameState.currentPlayer;
      cells[index].classList.add(`player-${gameState.currentPlayer.toLowerCase()}`);
      clickSound.play();

      if (checkWin()) {
          handleWin();
      } else if (checkDraw()) {
          handleDraw();
      } else {
          gameState.currentPlayer = gameState.currentPlayer === "X" ? "O" : "X";
          updateGameInfo();
      }
  }

  function checkWin() {
      const size = gameState.boardSize;
      const lines = [];

      // Rows and Columns
      for (let i = 0; i < size; i++) {
          lines.push([...Array(size)].map((_, j) => i * size + j)); // rows
          lines.push([...Array(size)].map((_, j) => i + size * j)); // columns
      }

      // Diagonals
      lines.push([...Array(size)].map((_, i) => i * (size + 1))); // main diagonal
      lines.push([...Array(size)].map((_, i) => (i + 1) * (size - 1))); // anti-diagonal

      return lines.some(combination =>
          combination.every(index => gameState.board[index] === gameState.currentPlayer)
      );
  }

  function checkDraw() {
      return gameState.board.every(cell => cell !== "");
  }

  function handleWin() {
      gameState.gameActive = false;
      updateScore();
      showGameMessage(`🎉 Player ${gameState.currentPlayer} Wins!`);
      winSound.play();
      saveToLocalStorage();
      setTimeout(nextRound, 2000);
  }

  function handleDraw() {
      gameState.gameActive = false;
      showGameMessage("🤝 It's a draw!");
      setTimeout(nextRound, 2000);
  }

  function nextRound() {
      gameState.round++;
      roundElement.textContent = gameState.round;
      resetBoard();
      hideGameMessage();
  }

  function resetBoard() {
      gameState.board = Array(gameState.boardSize * gameState.boardSize).fill("");
      gameState.gameActive = true;
      gameState.currentPlayer = "X";
      initializeBoard();
  }

  function resetGame() {
      gameState.scoreX = 0;
      gameState.scoreO = 0;
      gameState.round = 1;
      scoreXElement.textContent = "0";
      scoreOElement.textContent = "0";
      roundElement.textContent = "1";
      resetBoard();
      clearLocalStorage();
  }

  function updateScore() {
      if (gameState.currentPlayer === "X") {
          gameState.scoreX++;
          scoreXElement.textContent = gameState.scoreX;
      } else {
          gameState.scoreO++;
          scoreOElement.textContent = gameState.scoreO;
      }
  }

  function updateGameInfo() {
      currentPlayerElement.textContent = `Player ${gameState.currentPlayer}'s Turn`;
  }

  function showGameMessage(message) {
      messageTextElement.textContent = message;
      gameMessageElement.classList.remove("hidden");
  }

  function hideGameMessage() {
      gameMessageElement.classList.add("hidden");
  }

  function toggleTheme() {
      gameState.isDarkMode = !gameState.isDarkMode;
      document.body.classList.toggle("dark-mode", gameState.isDarkMode);
      const themeIcon = themeToggleButton.querySelector(".toggle-icon");
      themeIcon.textContent = gameState.isDarkMode ? "☀️" : "🌙";
  }

  // Local Storage
  function saveToLocalStorage() {
      localStorage.setItem("ticTacToeScores", JSON.stringify({
          scoreX: gameState.scoreX,
          scoreO: gameState.scoreO,
          round: gameState.round
      }));
  }

  function loadFromLocalStorage() {
      const savedData = JSON.parse(localStorage.getItem("ticTacToeScores"));
      if (savedData) {
          gameState.scoreX = savedData.scoreX;
          gameState.scoreO = savedData.scoreO;
          gameState.round = savedData.round;
          scoreXElement.textContent = savedData.scoreX;
          scoreOElement.textContent = savedData.scoreO;
          roundElement.textContent = savedData.round;
      }
  }

  function clearLocalStorage() {
      localStorage.removeItem("ticTacToeScores");
  }

  // Event Listeners
  restartButton.addEventListener("click", resetBoard);
  newGameButton.addEventListener("click", resetGame);
  themeToggleButton.addEventListener("click", toggleTheme);

  // Initialize everything
  loadFromLocalStorage();
  initializeBoard();
});
