document.addEventListener("DOMContentLoaded", () => {
    // Game state
    const gameState = {
      board: Array(9).fill(""),
      currentPlayer: "X",
      gameActive: true,
      scoreX: 0,
      scoreO: 0,
      round: 1,
      isDarkMode: false,
    }
  
    // DOM elements
    const boardElement = document.getElementById("board")
    const currentPlayerElement = document.getElementById("current-player")
    const scoreXElement = document.getElementById("score-x")
    const scoreOElement = document.getElementById("score-o")
    const roundElement = document.getElementById("round-number")
    const restartButton = document.getElementById("restart-btn")
    const newGameButton = document.getElementById("new-game-btn")
    const themeToggleButton = document.getElementById("theme-toggle-btn")
    const gameMessageElement = document.getElementById("game-message")
    const messageTextElement = document.getElementById("message-text")
  
    // Winning combinations
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8], // Rows
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8], // Columns
      [0, 4, 8],
      [2, 4, 6], // Diagonals
    ]
  
    // Initialize the game board
    function initializeBoard() {
      boardElement.innerHTML = ""
      for (let i = 0; i < 9; i++) {
        const cell = document.createElement("div")
        cell.classList.add("cell")
        cell.dataset.index = i
        cell.addEventListener("click", () => handleCellClick(i))
        boardElement.appendChild(cell)
      }
      updateGameInfo()
    }
  
    // Handle cell click
    function handleCellClick(index) {
      const cells = document.querySelectorAll(".cell")
  
      // Check if the cell is already filled or game is not active
      if (gameState.board[index] !== "" || !gameState.gameActive) {
        return
      }
  
      // Update the board state and UI
      gameState.board[index] = gameState.currentPlayer
      // Remove the textContent assignment as we're using ::before pseudo-elements
      // cells[index].textContent = gameState.currentPlayer
      cells[index].classList.add(`player-${gameState.currentPlayer.toLowerCase()}`)
  
      // Add pop animation
      cells[index].classList.add("pop")
      setTimeout(() => {
        cells[index].classList.remove("pop")
      }, 300)
  
      // Check for win or draw
      if (checkWin()) {
        handleWin()
      } else if (checkDraw()) {
        handleDraw()
      } else {
        // Switch player
        gameState.currentPlayer = gameState.currentPlayer === "X" ? "O" : "X"
        updateGameInfo()
      }
    }
  
    // Check for win
    function checkWin() {
      return winningCombinations.some((combination) => {
        return combination.every((index) => {
          return gameState.board[index] === gameState.currentPlayer
        })
      })
    }
  
    // Get winning combination
    function getWinningCombination() {
      for (const combination of winningCombinations) {
        if (combination.every((index) => gameState.board[index] === gameState.currentPlayer)) {
          return combination
        }
      }
      return null
    }
  
    // Check for draw
    function checkDraw() {
      return gameState.board.every((cell) => cell !== "")
    }
  
    // Handle win
    function handleWin() {
      gameState.gameActive = false
  
      // Update score
      if (gameState.currentPlayer === "X") {
        gameState.scoreX++
        scoreXElement.textContent = gameState.scoreX
      } else {
        gameState.scoreO++
        scoreOElement.textContent = gameState.scoreO
      }
  
      // Highlight winning cells
      const winningCombination = getWinningCombination()
      const cells = document.querySelectorAll(".cell")
  
      winningCombination.forEach((index) => {
        cells[index].classList.add("winning-cell")
      })
  
      // Show win message
      showGameMessage(`Player ${gameState.currentPlayer} wins!`)
  
      // Prepare for next round after delay
      setTimeout(() => {
        gameState.round++
        roundElement.textContent = gameState.round
        resetBoard()
        hideGameMessage()
      }, 2000)
    }
  
    // Handle draw
    function handleDraw() {
      gameState.gameActive = false
  
      // Highlight all cells as draw
      const cells = document.querySelectorAll(".cell")
      cells.forEach((cell) => {
        cell.classList.add("draw-cell")
      })
  
      // Show draw message
      showGameMessage("It's a draw!")
  
      // Prepare for next round after delay
      setTimeout(() => {
        gameState.round++
        roundElement.textContent = gameState.round
        resetBoard()
        hideGameMessage()
      }, 2000)
    }
  
    // Reset the board for a new round
    function resetBoard() {
      gameState.board = Array(9).fill("")
      gameState.gameActive = true
      gameState.currentPlayer = "X"
  
      const cells = document.querySelectorAll(".cell")
      cells.forEach((cell) => {
        // Remove the textContent assignment
        // cell.textContent = ""
        cell.className = "cell" // Reset all classes
      })
  
      updateGameInfo()
    }
  
    // Reset the entire game
    function resetGame() {
      gameState.board = Array(9).fill("")
      gameState.gameActive = true
      gameState.currentPlayer = "X"
      gameState.scoreX = 0
      gameState.scoreO = 0
      gameState.round = 1
  
      scoreXElement.textContent = "0"
      scoreOElement.textContent = "0"
      roundElement.textContent = "1"
  
      const cells = document.querySelectorAll(".cell")
      cells.forEach((cell) => {
        // Remove the textContent assignment
        // cell.textContent = ""
        cell.className = "cell"
      })
  
      hideGameMessage()
      updateGameInfo()
    }
  
    // Update game information display
    function updateGameInfo() {
      currentPlayerElement.textContent = `Player ${gameState.currentPlayer}'s Turn`
    }
  
    // Show game message
    function showGameMessage(message) {
      messageTextElement.textContent = message
      gameMessageElement.classList.remove("hidden")
    }
  
    // Hide game message
    function hideGameMessage() {
      gameMessageElement.classList.add("hidden")
    }
  
    // Toggle theme
    function toggleTheme() {
      gameState.isDarkMode = !gameState.isDarkMode
      document.body.classList.toggle("dark-mode")
  
      const themeIcon = themeToggleButton.querySelector(".toggle-icon")
      themeIcon.textContent = gameState.isDarkMode ? "☀️" : "🌙"
  
      themeToggleButton.classList.add("rotate")
      setTimeout(() => {
        themeToggleButton.classList.remove("rotate")
      }, 300)
    }
  
    // Event listeners
    restartButton.addEventListener("click", () => {
      restartButton.classList.add("btn-active")
      setTimeout(() => {
        restartButton.classList.remove("btn-active")
        resetBoard()
      }, 200)
    })
  
    newGameButton.addEventListener("click", () => {
      newGameButton.classList.add("btn-active")
      setTimeout(() => {
        newGameButton.classList.remove("btn-active")
        resetGame()
      }, 200)
    })
  
    themeToggleButton.addEventListener("click", toggleTheme)
  
    // Initialize the game
    initializeBoard()
  })
  