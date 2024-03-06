// alert("Welcome to ROCK, PAPER & SCISSORS!");

function play(index){

    const objects = ["Rock", "Paper", "Scissor"];
    document.getElementById('your_chose').innerHTML = "Your chose: &nbsp";
    document.getElementById('answer').innerHTML = objects[index];

    var min = 0;
    var max = 2;
    var pc_index = index 
    pc_index = Math.floor(Math.random()*(max-min+1)+min)
  
    document.getElementById('pc_chose').innerHTML = "PC chose: &nbsp";
    document.getElementById('pc_answer').innerHTML = objects[pc_index];

    if(index == pc_index){
        document.getElementById('result').innerHTML = 'TIE..!'
    }
    else if(index == 0 && pc_index == 2 || index == 1 && pc_index == 0){
        document.getElementById('result').innerHTML = 'WIN..!'
    }
    else{
        document.getElementById('result').innerHTML = 'DEFEAT..!'

    }
   
}

// 0 rock , 1 paper, 2 scissor

