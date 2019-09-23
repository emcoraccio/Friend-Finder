$(document).ready(() => {

  let testArray = [2, 1, 2, 5, 4, 2, 2, 1, 1, 4];


  let calcDifference = (arr1, arr2) => {

    let total = 0;

    for(let i=0; i<arr1.length; i++) {

      total += Math.abs(arr1[i]-arr2[i])

    };

    console.log(`${Math.round((40 - total) / 40 * 100)}% match`)
    console.log(total);

  };

  
  $("button.submit").on("click", function (event) {
    event.preventDefault();
    
    let newAnswers = [];

    newAnswers.push($('input[name=question1]:checked').val(), $('input[name=question2]:checked').val(), 
    $('input[name=question3]:checked').val(), $('input[name=question4]:checked').val(), $('input[name=question5]:checked').val(), 
    $('input[name=question6]:checked').val(), $('input[name=question7]:checked').val(), $('input[name=question8]:checked').val(), 
    $('input[name=question9]:checked').val(), $('input[name=question10]:checked').val());

    if(newAnswers.indexOf(undefined) === -1) {
      console.log(newAnswers);
      calcDifference(newAnswers, testArray);
    }
    else {
      console.log("Please answer all of the questions");
    }
    
  });

});