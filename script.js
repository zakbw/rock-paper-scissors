let cpuScore = 0;
let hmnScore = 0;
let hmnChoice = '';

  rock.addEventListener('click', () => {
    hmnChoice = 'rock';
    playRound();
  });

  paper.addEventListener('click', () => {
    hmnChoice = 'paper';
    playRound();
  });

  scissors.addEventListener('click', () => {
    hmnChoice = 'scissors';
    playRound();
  });
  
  const scoreWindow = document.createElement('div');
  scoreWindow.style.display = 'flex';
  scoreWindow.style.flexDirection = 'column';
  scoreWindow.style.height = 'auto';
  scoreWindow.style.width = '300px';
  scoreWindow.style.backgroundColor = 'lightgray';
  scoreWindow.style.marginTop = '20px';
  scoreWindow.style.padding = '20px';
  scoreWindow.style.alignItems = 'center';
  scoreWindow.style.justifyContent = 'center';
  document.body.append(scoreWindow);

  const scoreTitle = document.createElement('h2');
  scoreTitle.textContent = "SCORE";
  scoreWindow.append(scoreTitle);

  const scoreText = document.createElement('p');
    scoreText.textContent = `HMN SCORE: ${hmnScore} | CPU SCORE: ${cpuScore}`;
    scoreText.style.fontWeight = 'bold';
    scoreWindow.append(scoreText);

  const scoreResult = document.createElement('p');
    scoreResult.textContent = '';
    scoreWindow.append(scoreResult);

  const getComputerChoice = function () {
    let choices = ['rock', 'paper', 'scissors'];
    let randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
  };


  const playRound = function() {
    if (cpuScore >= 5 || hmnScore >= 5) {
        return;
    }
 
    const cpuChoice = getComputerChoice();
    
    if (
      (hmnChoice === 'rock' && cpuChoice === 'paper') ||
      (hmnChoice === 'paper' && cpuChoice === 'scissors') ||
      (hmnChoice === 'scissors' && cpuChoice === 'rock')
    ) {
      cpuScore++;
      scoreText.textContent = `HMN SCORE: ${hmnScore} | CPU SCORE: ${cpuScore}`;
      scoreResult.textContent = `You played ${hmnChoice} and CPU played ${cpuChoice}. Too bad...`;

    } else if (
        (cpuChoice === hmnChoice)
      ) {
        scoreText.textContent = `HMN SCORE: ${hmnScore} | CPU SCORE: ${cpuScore}`;
        scoreResult.textContent = `You played ${hmnChoice} and CPU played ${cpuChoice}. It's a tie.`

    } else {
        hmnScore++;
        scoreText.textContent = `HMN SCORE: ${hmnScore} | CPU SCORE: ${cpuScore}`;
        scoreResult.textContent = `You played ${hmnChoice} and CPU played ${cpuChoice}. You got it!`
    }

    if (hmnScore >= 5) {
      scoreTitle.textContent = 'You win!';
      scoreText.textContent = 'Reload to play again'
      scoreResult.textContent = '';
    }
    if (cpuScore >= 5 ) {
      scoreTitle.textContent = 'You lose...';
      scoreText.textContent = 'Reload to play again'
      scoreResult.textContent = '';
  }
  }