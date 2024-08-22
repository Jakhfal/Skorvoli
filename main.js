// Get the score elements
const scoreA = document.getElementById('scoreA');
const scoreB = document.getElementById('scoreB');

// Get the set tracker elements
const set1 = document.getElementById('set1');
const set2 = document.getElementById('set2');
const set3 = document.getElementById('set3');

// Get the winner element
const winner = document.getElementById('winner');

// Initialize the scores and sets
let scoreAValue = 0;
let scoreBValue = 0;
let set1A = 0;
let set1B = 0;
let set2A = 0;
let set2B = 0;
let set3A = 0;
let set3B = 0;

// Function to update the score
function updateScore(team, value) {
  if (team === 'A') {
    scoreAValue += value;
    scoreA.textContent = scoreAValue;
  } else if (team === 'B') {
    scoreBValue += value;
    scoreB.textContent = scoreBValue;
  }
}

// Function to update the set tracker
function updateSet(set, team, value) {
  if (set === 1) {
    if (team === 'A') {
      set1A += value;
    } else if (team === 'B') {
      set1B += value;
    }
    set1.textContent = `${set1A} - ${set1B}`;
  } else if (set === 2) {
    if (team === 'A') {
      set2A += value;
    } else if (team === 'B') {
      set2B += value;
    }
    set2.textContent = `${set2A} - ${set2B}`;
  } else if (set === 3) {
    if (team === 'A') {
      set3A += value;
    } else if (team === 'B') {
      set3B += value;
    }
    set3.textContent = `${set3A} - ${set3B}`;
  }
}

// Function to check for a winner
function checkWinner() {
  if (scoreAValue >= 25 && scoreAValue - scoreBValue >= 2) {
    winner.textContent = 'Karasuno wins!';
  } else if (scoreBValue >= 25 && scoreBValue - scoreAValue >= 2) {
    winner.textContent = 'Inarizaki wins!';
  }
}

// Function to reset the score
function resetScore() {
  scoreAValue = 0;
  scoreBValue = 0;
  set1A = 0;
  set1B = 0;
  set2A = 0;
  set2B = 0;
  set3A = 0;
  set3B = 0;
  scoreA.textContent = '0';
  scoreB.textContent = '0';
  set1.textContent = '0 - 0';
  set2.textContent = '0 - 0';
  set3.textContent = '0 - 0';
  winner.textContent = '';
}

// Function to handle true score
function trueScore(team) {
  updateScore(team, 1);
  checkWinner();
}

// Function to handle false score
function falseScore(team) {
  updateScore(team, -1);
  checkWinner();
}

// Add event listeners to the buttons
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('reset')) {
    resetScore();
  }
});