// LOAD DATA
var friendData = require("../data/friends");

// evaluate objects
function compareObjects(obj1, ojb2) {
  // test obj
  if (!obj1) {
      return console.log("Error missing first object")
  }
  if (!ojb2) {
      return console.log("Error missing second object")
  }

  let l1 = obj1.length;
  let l2 = ojb2.length;
  if (l1 === l2) {  
      var ovalue = 0;
      for (var i = 0; i < l1; i++) {
          console.log(Math.abs(obj1[i] - ojb2[i]));
          ovalue += Math.abs(obj1[i] - ojb2[i]);
          //console.log(ovalue);
      }  
      return ovalue;
  } else {
      return console.log("Error objects are not same size");
  }
}
// loop through friends to find best choice.
function findFriend(newFriend){
  var fl = friendData.length;  
  //var nObj = newFriend.scores;
  var bFriend = [];
  var lowestScore = 1500;
  console.log(newFriend);
  for (var i = 0; i < fl; i++){
      let candidate = friendData[i].scores;
      let score = compareObjects(candidate, newFriend.scores) 
      console.log("Comparing : " + newFriend.name + " against " + friendData[i].name);
      if (score < lowestScore){
          lowestScore = score;
          bFriend = friendData[i];
          console.log("switching to friend " + bFriend.name);
      } 
  } 
  return bFriend;
}

// ROUTING
module.exports = function(app) {
  // API GET Requests - outputs json
  app.get("/api/friends", function(req, res) {
    res.json(friendData);
  });

  // API POST Requests
  // Handles when a user submits form data (a JSON object)
  // ---------------------------------------------------------------------------
  app.post("/api/friends", function(req, res) {
    // respond to requests and let users know if they have a friend
      console.log("Recievied\n",req.body);
     
      res.json(findFriend(req.body));
      console.log(findFriend(req.body));

  });

};
