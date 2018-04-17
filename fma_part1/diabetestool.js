
/* with this function all the radio buttons are sett to the first row of each one of them,
after press the calculate button and reload the page this function will sett all the radion buttons
back to the first one */
function preCheck(){
  var getTable = document.getElementById("table_radio");
  var getTr = getTable.getElementsByTagName("tr");
  var countRows = getTr.length;
  for (var i = 1; i <= countRows; i++) {
    document.getElementById("rad1row" + i).checked = true;
  }
}

/* with this function we say that when we press the button 'calculate' the function displayResult
will run */
function results() {
  document.getElementById("btn_calculate").onclick = displayResult;
}

/* this function get the values of the input and check if the value is more or equal at 10, if yes save the
the class of the value in a new array riskFactors */
function getMainRiskFactors() {
	var inputElement = document.getElementsByTagName("input");
    var index = 0;
    var riskFactors = [];
    for (index in inputElement) {
        if (inputElement[index].checked) {
            selectedValue = Number(inputElement[index].attributes.value.value);
            if (selectedValue >= 10) {
                riskFactors.push(inputElement[index].attributes.name.value);
            }
        }
    }
    return riskFactors;
}

/* this function help to get the total score of the value from the radio buttons choose from the
costumer and return them*/
 function getTotalScore() {
    var val1 = parseInt(document.querySelector('input[name = "age"]:checked').value);
    var val2 = parseInt(document.querySelector('input[name = "BMI"]:checked').value);
    var val3 = parseInt(document.querySelector('input[name = "family"]:checked').value);
    var val4 = parseInt(document.querySelector('input[name = "diet"]:checked').value);
	value = val1 + val2 + val3 + val4;
	return value
}

/* now with the help of the function getMainRiskFactors we can create the appropriate HIGH risk message*/
function createMainRiskMessage() {
    var mainRiskFactorMessage;
    var inputElement = document.getElementsByTagName("input");
    var mainRiskFactor = getMainRiskFactors(inputElement);
    if (mainRiskFactor.length === 1) {
        return mainRiskFactorMessage = "your main risk factor is your   " + mainRiskFactor + ".";
    } else {
        var lastMainRIskFactor = mainRiskFactor.pop();
        mainRiskFactorMessage = "your main risk factors are your  " + mainRiskFactor + " and " + lastMainRIskFactor + ".";
        return mainRiskFactorMessage;
    }
}
/* in this we sett a var message with a empty strin and then we sett the var result with the result 
of the function calculate and that will help to find wich message is more appropriate for the result, 
and then we use a ternary operator if is a high risk to display the appropriate message */
function getMessage() {
  var message = "";
  var result = getTotalScore();
  if (result <= 15) {
    message = "Your results show that you currently have a low risk of " +
              "developing diabetes. However, it is important that you " +
              "maintain a healthy lifestyle in terms of diet and exercise.";
  }else if (result > 15 && result <= 25) {
    message = "Your results show that you currently have a medium risk of " +
              "developing diabetes. For more information on your risk " +
              "factors, and what to do about them, please visit our diabetes " +
              "advice website at <a href=\"http://www.zha.org.zd\">http://www.zha.org.zd</a>.";
  }else {
    message = "Your results show that you currently have a HIGH risk of " +
              "developing diabetes. " + createMainRiskMessage() +
              "We advise that you contact the Health Authority to discuss your risk factors " +
              "as soon as you can. Please fill in our <a href=\"contactform.html\">contact form</a> " +
              "and a member of the Health Authority Diabetes Team will be in contact with you.";
  }
  return message;
}

/* Display the result */
function displayResult() {
  document.getElementById("p_result").innerHTML = "<b>Your Result:</b><br>" + getMessage();
}

function init() {
  preCheck();
  results();
}

window.onload = init;