const handleWeightBalance = () => {

  resetFields();

  const result = document.getElementById("result");

  const firstTwoWeight = document.getElementById("firstTwoWeight").value;
  const weightList = document.getElementById("weightList").value;

  const isValidated = validateUserInput(firstTwoWeight, weightList, result);
  if(isValidated) return;


  const scaleBalance = [...firstTwoWeight];
  const weights =  [...weightList];
  
  if(scaleBalance[0] === scaleBalance[1]) return result.innerHTML =  "The two integers weight of the first element cannot be the same, if it can, hence no need to balance them because it is already balanced";

  const scaleBalanceDifference = Math.abs(scaleBalance[0] - scaleBalance[1]).toString();

  if (weights.includes(scaleBalanceDifference)) return (result.innerHTML = scaleBalanceDifference);

  for (let i = 0; i < weights.length - 1; i++) {
    for (let j = i + 1; j < weights.length; j++) {
      if (
        parseInt(weights[i]) + parseInt(weights[j]) === parseInt(scaleBalanceDifference) ||
        Math.abs(parseInt(weights[i]) - parseInt(weights[j])) ===
          parseInt(scaleBalanceDifference)
      ) {
        result.innerHTML =
          weights[i] < weights[j]
            ? `${weights[i]},${weights[j]}`
            : `${weights[j]},${weights[i]}`;
        return;
      }
    }
  }

  return (result.innerHTML = "Scale Imbalanced");
};

const resetFields = () => {
    document.getElementById("result").innerHTML = "";
    document.getElementById("weightList").style.border = ""; 
    document.getElementById("firstTwoWeight").style.border = ""; 
}

const validateUserInput = (firstTwoWeight, weightList, result) => {
  
  if(firstTwoWeight !== "" && weightList === "") {
    document.getElementById("weightList").style.border = "1px solid red"; 
    return result.innerHTML = "The Weight List Elements is a required field";
  } 
  if(weightList !== "" && firstTwoWeight === "")
  {
     document.getElementById("firstTwoWeight").style.border = "1px solid red"; 
    return result.innerHTML = "The First two weight is a required field";
  } 
  if (isNaN(firstTwoWeight) || isNaN(weightList)) return result.innerHTML = "Your input should be in number"
  if (firstTwoWeight <= 0 || weightList <= 0 )
    return (result.innerHTML = "Only positive integer weights are allowed");
  if (firstTwoWeight.length < 2 || firstTwoWeight.length > 2)
    return (result.innerHTML =
      "The first element of the scale can only contain 2 weights");
  
}
