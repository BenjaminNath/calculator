
var decimal = true;
var entry = '';
var lastEntry = '';
var temp = '';
var equation = '';
var answer = 0;
var maxVal = 9;

//update the calculator
function updateScreen(num){
  if(num.length > 9){
      num = "Overload!";
      clearScreen();
    }else $('#answer').text(num);
};

function getAnswer(equation){
  answer = eval(equation);
  $('#answer').html(answer);
};

$(document).ready(function() {
  
  $('button').click(function(){
    //get the value of each button pressed
    entry = $(this).attr("value"); 
    lastEntry = temp[temp.length - 1];
    
    // add operation if last character was a number
    if(!isNaN(lastEntry)){
      if(entry === '/'){
        temp += entry;
      }else if (entry === '*'){
        temp += entry;
      } else if (entry === '+'){
        temp += entry;
      }else if(entry === '-'){
        temp += entry;
      }
      updateScreen(temp);
    }

    //clear functions
    if(entry === 'CE'){
      answer = '';
      entry = '';
      temp = '';
      decimal = true;
      $("#answer").append('0');
    }else if(entry === 'C'){
      answer = '';
      entry = '';
      decimal = true;
      temp = temp.slice(0, temp.length-1);
      updateScreen(temp);
    }
    
    //no duplicate decimals
    if(entry === '.' || entry == '0.'){
      //equation = temp.split(+|-|/|*);
    }
    
    // get number 
    if(isNaN(entry) == false){
      temp += entry;
      updateScreen(temp);
    }
    // If the equal button is pressed
    // send temp to evaluate the answer function
    if(entry === '='){
      getAnswer(temp);
    }
    
  });
});