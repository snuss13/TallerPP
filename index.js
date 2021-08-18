const permuteUnique = (nums) => {

  if(!Array.isArray(nums))
  {
    console.log("permuteUnique expects an array");
    return null;
  }

  return resolveRecursively(nums);
};

function isInArray(ar, element)
{
  var bool = ar.some(function(arr) {
    return arr.every(function(prop, index) {
      return element[index] === prop
    })
  });

  return bool;
}
function resolveRecursively(data, lastCurrent) {
  if (data.length < 2)
  {
    return data;
  }

  let workingData = data.slice();
  
  if (workingData.length > 2)
  {
    let resultArray = [];
    //resultArray.push(workingData.slice());

    let currentValue = workingData.shift()
    //console.log (currentValue);

    let twoValuesArray = resolveRecursively(workingData);

    twoValuesArray.forEach(element => {
      element.push(currentValue);

      if (!isInArray(resultArray, element))
        resultArray.push(element.slice());
    });

     //console.log (twoValuesArray);
     //console.log (resultArray);

     twoValuesArray.forEach(element => {
       let newCurrentValue = element.shift();
       let a = resolveRecursively(element);

       a.forEach(el => {
        el.push(newCurrentValue);

        if (!isInArray(resultArray, el))
          resultArray.push(el.slice());
       });
       
     });
    
     return (resultArray);

  } else
  {
    let tempArray = [];
    let combinedResults = [];

    tempArray.push(workingData[0]);
    tempArray.push(workingData[1]);

    //console.log (tempArray);

    combinedResults.push(tempArray.slice());
    //console.log(combinedResults);

    tempArray = [];
    tempArray.push(workingData[1]);
    tempArray.push(workingData[0]);

    //console.log (tempArray);

    combinedResults.push(tempArray.slice());
    //console.log(combinedResults);

    return combinedResults;
  }
}

const simpleTest = () => {
  console.log(permuteUnique([1, 2, 3, 4]));
  //permuteUnique([1, 2, 3]);
};

simpleTest();

module.exports = {
  permuteUnique,
};
