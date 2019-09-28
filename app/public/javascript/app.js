$(document).ready(() => {

  $('.modal').modal();
  let matches = [];
  let userAnswers = [];


  const calcDifference = (arr1, arr2) => {

    let total = 0;

    for (let i = 0; i < arr1.length; i++) {

      total += Math.abs(arr1[i] - arr2[i])

    };

    return Math.round((40 - total) / 40 * 100);

  };

  const findMatch = (array) => {
    //returns the max value in an array
    return array.reduce((a, b) => Math.max(a, b));

  }

  const getFriends = (userScores) => {

    $.get("/api/friends", function (data) {

      data.forEach(element => {
        matches.push(calcDifference(element.scores, userScores));
      });
      let bestMatch = matches.indexOf(findMatch(matches));

      $("h4#modal-header").text("FRIEND FOUND!")
      $("p#modal-percent").text(`You have a ${findMatch(matches)}% compatability with`)
      // ({name, photo}) = data[bestMatch];
      let name = data[bestMatch].name;
      let photo = data[bestMatch].photo;

      console.log(name, photo)

      $("p#modal-name").text(`${name}`);
      $("img#modal-pic").attr("src", photo)

      matches = []

    });

  };

  const postFriend = (friend) => {

    $.post("/api/friends", friend, function (friend, status) {

      console.log("sent new friend data")
      console.log(`Status: ${status}`)

    })

  }

  $("button.submit").on("click", function (event) {
    event.preventDefault();

    userAnswers = [];

    userAnswers.push(
      $('input[name=question1]:checked').val(),
      $('input[name=question2]:checked').val(),
      $('input[name=question3]:checked').val(),
      $('input[name=question4]:checked').val(),
      $('input[name=question5]:checked').val(),
      $('input[name=question6]:checked').val(),
      $('input[name=question7]:checked').val(),
      $('input[name=question8]:checked').val(),
      $('input[name=question9]:checked').val(),
      $('input[name=question10]:checked').val());

    if (userAnswers.indexOf(undefined) === -1) {

      getFriends(userAnswers);

      let newFriend = {
        name: $("input#first_name").val().trim(),
        photo: $("input#pic").val().trim(),
        scores: userAnswers
      };

      postFriend(newFriend);

    }
    else {

      $("h4#modal-header").text("No match found");
      $("p#modal-percent").text("Please answer all of the questions")
      console.log("Please answer all of the questions");

    }

  });

});