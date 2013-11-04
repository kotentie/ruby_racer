$(document).ready(function(){

  // $('#reset_button').on("click",function() {
  //   // $('.racer_table').show();
  //   playGame();
  // });



  $(document).keyup(function(event){
    if(event.which == 87)
    {
      makeMove("#player1_strip", "player1_win");
    }
    if(event.which == 13)
    {
      makeMove("#player2_strip", "player2_win");
    }
  });
});

function updatePlayer(elementId){
  var current_cell = $(elementId).find('.active');
 console.log(current_cell);
  $(current_cell).next().addClass('active');
  $(current_cell).removeClass('active');
}

function makeMove(elementId, winCell){
  if($("" + elementId + " " + "td:last-child").hasClass('active'))
  {
    winCell.innerHTML = "You win!";
    $(document).unbind('keyup');

  }
  else
  {
  updatePlayer(elementId);
  }
};

//user clicks a button

//button determines which player moves
//if game is not complete
  //player moves one space from current position
//else
  //declare winner
  //unbind keyup to stop play

///////////////////////////////////////////////////////////////////////////
// if((player1Counter <= player1Cells.length - 3) && (player2Counter <= player2Cells.length - 3))
//       {
//         $(player1Cells[player1Counter]).removeClass('active');
//         player1Counter++;
//         $(player1Cells[player1Counter]).addClass('active');
//         console.log("first if");

//       }
//       else if((player1Counter <= player1Cells.length - 3) && (player2Counter > player2Cells.length - 3))
//       {
//         player1Win.innerHTML="You suck!";
//       }
//       else
//       {
//         $(player1Cells[player1Counter]).removeClass('active');
//         player1Counter++;
//         $(player1Cells[player1Counter]).addClass('active');
//         player1Win.innerHTML="You Win!";
//         player2Win.innerHTML="You suck!";
//         $(document).unbind('keyup');
//         console.log("third if");
//       }

// //
// function playGame(){
//   var player1 = document.getElementById("player1_strip");
//   var player1Cells = player1.getElementsByTagName("td");
//   var player1Counter = 0;
//   var player1Win = document.getElementById("player1_win");


//   var player2 = document.getElementById("player2_strip");
//   var player2Counter = 0;
//   var player2Cells = player2.getElementsByTagName("td");
//   var player2Win = document.getElementById("player2_win");

//   $(document).keyup(function(event) {
//     if (event.which == 87) {
//       if((player1Counter <= player1Cells.length - 3) && (player2Counter <= player2Cells.length - 3))
//       {
//         $(player1Cells[player1Counter]).removeClass('active');
//         player1Counter++;
//         $(player1Cells[player1Counter]).addClass('active');
//         console.log("first if");

//       }
//       else if((player1Counter <= player1Cells.length - 3) && (player2Counter > player2Cells.length - 3))
//       {
//         player1Win.innerHTML="You suck!";
//       }
//       else
//       {
//         $(player1Cells[player1Counter]).removeClass('active');
//         player1Counter++;
//         $(player1Cells[player1Counter]).addClass('active');
//         player1Win.innerHTML="You Win!";
//         player2Win.innerHTML="You suck!";
//         $(document).unbind('keyup');
//         console.log("third if");
//       }
//     }

//     if (event.which == 13) {
//       if((player2Counter <= player2Cells.length - 3) && (player1Counter <= player1Cells.length - 3))
//       {
//         $(player2Cells[player2Counter]).removeClass('active');
//         player2Counter++;
//         $(player2Cells[player2Counter]).addClass('active');
//         console.log("first if");
//       }
//       else if((player2Counter <= player2Cells.length - 3) && (player1Counter > player1Cells.length - 3))
//       {
//         player2Win.innerHTML="You suck!";
//       }
//       else
//       {
//         $(player2Cells[player2Counter]).removeClass('active');
//         player2Counter++;
//         $(player2Cells[player2Counter]).addClass('active');
//         player2Win.innerHTML="You Win!";
//         player1Win.innerHTML="You suck!";
//         $(document).unbind('keyup');
//         console.log("third if");
//         }
//       }
//     });
//   }
