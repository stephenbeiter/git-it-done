
function getRepoIssues(repo) {
  var apiUrl = "https://api.github.com/repos/" + repo + "/issues?direction=asc";
  console.log(repo);
  fetch(apiUrl).then(function (response) {
    // request was successful
    if (response.ok) {
      response.json().then(function (data) {
        console.log(data);
      });
    }
    else {
      alert("There was a problem with your request!");
    }
  });
};

getRepoIssues("facebook/react");