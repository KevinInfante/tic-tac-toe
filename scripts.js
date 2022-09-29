var turn = 'X';
var draw = true;
$("#label").hide();

$(firstRow1).click(buttonPress);
$(secondRow1).click(buttonPress);
$(thirdRow1).click(buttonPress);

$(firstRow2).click(buttonPress);
$(secondRow2).click(buttonPress);
$(thirdRow2).click(buttonPress);

$(firstRow3).click(buttonPress);
$(secondRow3).click(buttonPress);
$(thirdRow3).click(buttonPress);

$(resetButton).click(clearBoard);

function buttonPress(){/*this function processes each button press on the grid, reveals the x and the o squares*/
    if($(this).children(".x").is(":visible")==false&&
        $(this).children(".o").is(":visible")==false){
    if(turn=='X'){
        $(this).children(".x").show(); //reveals x square
        $(this).children(".o").hide(); //no longer necessary
        turn="O";   //changes the turn
    }
    else if(turn=='O'){
        $(this).children(".o").show();//reveals o square
        $(this).children(".x").hide();//no longer necessary
        turn="X";   //changes the turn
    }
    //console.log(turn);
    threeInARow($("#firstRow1"),$("#secondRow1"),$("#thirdRow1"));//checks left column for 3 in a row
    threeInARow($("#firstRow2"),$("#secondRow2"),$("#thirdRow2"));//checks middle column for 3 in a row
    threeInARow($("#firstRow3"),$("#secondRow3"),$("#thirdRow3")) //checks right column for 3 in a row
    
    threeInARow($("#firstRow1"),$("#firstRow2"),$("#firstRow3"));//checks top row for 3 in a row
    threeInARow($("#secondRow1"),$("#secondRow2"),$("#secondRow3"));//checks middle row for 3 in a row
    threeInARow($("#thirdRow1"),$("#thirdRow2"),$("#thirdRow3"));//checks bottom row for 3 in a row
    
    threeInARow($("#firstRow1"),$("#secondRow2"),$("#thirdRow3"));//checks \ diagonal for 3 in a row
    threeInARow($("#firstRow3"),$("#secondRow2"),$("#thirdRow1"));//checks / diagonal for 3 in a row
    }
    
    /*the extensive if statements below check if all the grid squares are full,
    then checks if the draw boolean is true, to confirm if the game is drawn
    */
    if( ($("#firstRow1").children(".x").is(":visible")==true ||
        $("#firstRow1").children(".o").is(":visible")==true) &&
       
       ($("#firstRow2").children(".x").is(":visible")==true ||
        $("#firstRow2").children(".o").is(":visible")==true) &&
       
       ($("#firstRow3").children(".x").is(":visible")==true ||
        $("#firstRow3").children(".o").is(":visible")==true) &&
       
       ($("#secondRow1").children(".x").is(":visible")==true ||
        $("#secondRow1").children(".o").is(":visible")==true) &&
       
       ($("#secondRow2").children(".x").is(":visible")==true ||
        $("#secondRow2").children(".o").is(":visible")==true) &&
       
       ($("#secondRow3").children(".x").is(":visible")==true ||
        $("#secondRow3").children(".o").is(":visible")==true) &&
       
       ($("#thirdRow1").children(".x").is(":visible")==true ||
        $("#thirdRow1").children(".o").is(":visible")==true) &&
       
       ($("#thirdRow2").children(".x").is(":visible")==true ||
        $("#thirdRow2").children(".o").is(":visible")==true) &&
       
       ($("#thirdRow3").children(".x").is(":visible")==true ||
        $("#thirdRow3").children(".o").is(":visible")==true) &&
       draw==true
      ){
        console.log("Draw Game!");
        $(".button").fadeOut("slow", function(){
            $("#label").fadeIn().addClass("big").text("Draw!");
        });
        turn='X';
    }
}

function threeInARow(box1, box2, box3){ //this function checks for 3 in a row
    //check if box 1, 2, and 3 hav3 "x" visible. the boxes are placeholders for the buttons
    if( box1.children(".x").is(":visible")==true&&
        box2.children(".x").is(":visible")==true&&
        box3.children(".x").is(":visible")==true){
        draw=false;
        console.log("X wins!");
        $(".button").fadeOut("slow", function(){
            $("#label").fadeIn().addClass("big").text("X wins!");
        });
        turn='X';
    }
    if( box1.children(".o").is(":visible")==true&&
        box2.children(".o").is(":visible")==true&&
        box3.children(".o").is(":visible")==true){
        draw=false;
        console.log("O wins!");
        $(".button").fadeOut("slow", function(){
            $("#label").fadeIn().addClass("big").text("O wins!");
        });
    }
}

function clearBoard(){ //this function is for the "reset board button
    $("#label").hide();
    $(".button").show();
    $("button img").hide();
    draw=true;
    turn='X';
    
}