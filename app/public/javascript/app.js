$(document).ready(() => {

  let testArray = [2, 1, 2, 5, 4, 2, 2, 1, 1, 4];
  let matches = [];
  let userAnswers = [];


  let calcDifference = (arr1, arr2) => {

    let total = 0;

    for (let i = 0; i < arr1.length; i++) {

      total += Math.abs(arr1[i] - arr2[i])

    };

    return Math.round((40 - total) / 40 * 100);

  };

  let findMatch = (array) => {

    let max = array.reduce(function (a, b) {
      return Math.max(a, b);
    });

    return max
  }

  let getFriends = (userScores) => {

    $.get("/api/friends", function (data) {

      data.forEach(element => {
        matches.push(calcDifference(element.scores, userScores));
        console.log(matches)
      });

      console.log(`You have a ${findMatch(matches)}% compatability with`)
      let bestMatch = matches.indexOf(findMatch(matches));
      console.log(data[bestMatch])
    });



  };


  $("button.submit").on("click", function (event) {
    event.preventDefault();

    userAnswers = [];

    userAnswers.push($('input[name=question1]:checked').val(), $('input[name=question2]:checked').val(),
      $('input[name=question3]:checked').val(), $('input[name=question4]:checked').val(), $('input[name=question5]:checked').val(),
      $('input[name=question6]:checked').val(), $('input[name=question7]:checked').val(), $('input[name=question8]:checked').val(),
      $('input[name=question9]:checked').val(), $('input[name=question10]:checked').val());

    if (userAnswers.indexOf(undefined) === -1) {

      getFriends(userAnswers);

    }
    else {

      console.log("Please answer all of the questions");

    }


  });

});