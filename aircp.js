 let score = JSON.parse(localStorage.getItem('score')) || {
        wins: 0,
        losses: 0,
        ties: 0
      };
      updatescore();
      
      function updatescore (){
        document.querySelector('.js-score')
      .innerHTML = `Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`;
      };

      function pickcompmove() {
        const randomNO = Math.random();
        if (randomNO < 1/3) {
          return 'rock';
        } else if (randomNO < 2/3) {
          return 'paper';
        } else {
          return 'scissor';
        }
      }
      
      function playgame(playermove) {
        const compMove = pickcompmove();
        let result = '';

        if (playermove === 'rock') {
          if (compMove === 'rock') {
            result = 'Tie';
          } else if (compMove === 'paper') {
            result = 'you lost';
          } else {
            result = 'you win';
          }
        } else if (playermove === 'paper') {
          if (compMove === 'rock') {
            result = 'you win';
          } else if (compMove === 'paper') {
            result = 'Tie';
          } else {
            result = 'you lost';
          }
        } else if (playermove === 'scissor') {
          if (compMove === 'rock') {
            result = 'you lost';
          } else if (compMove === 'paper') {
            result = 'you win';
          } else {
            result = 'Tie';
          }
        }

        if (result === 'you win') {
          score.wins++;
        } else if (result === 'you lost') {
          score.losses++;
        } else if (result === 'Tie') {
          score.ties++;
        }
        
        localStorage.setItem('score', JSON.stringify(score));
        // update score
        updatescore();

      // to show result
        document.querySelector('.js-result')
        .innerHTML = result;
      // to show moves 
        document.querySelector('.js-moves')
        .innerHTML = `You picked : <img src="${playermove}-emoji.png" class="icon-size" > . Computer picked:<img src="${compMove}-emoji.png" class="icon-size" > `;

      
      }
      
      function clearscore() {
        score = { wins: 0, losses: 0, ties: 0 };
        localStorage.setItem('score', JSON.stringify(score));
        alert('Score has been cleared.');
         updatescore();
      }
        let isAutoPlaying = false;
        let intervalID ;
          
      function autoplay(){
       
        if (!isAutoPlaying){
       intervalID =   setInterval(function(){
                const  playermove = pickcompmove();
        playgame(playermove);

        }, 1000);
         isAutoPlaying = true;
        }
        else{
          clearInterval(intervalID);
          isAutoPlaying = false;

        }
      
      }
      