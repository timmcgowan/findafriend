// initial set created from array
var friendData = require("../data/friends");

//console.log(friendData[1].name);

var user1 = friendData[2];
var user2 = friendData[5];

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
    if (l1 = l2) {  
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
console.log(user1.scores);
function findFriend(newFriend){
    var fl = friendData.length;  
    var nObj = newFriend.scores;
    var bFriend = [];
    var lowestScore = 1500;
    
    for (var i = 0; i < fl; i++){
        candidate = friendData[i].scores;
        if (compareObjects(candidate, newFriend.scores) < lowestScore){
            bFriend = friendData[i];
        } 
    } 
    return bFriend;
}
//compareObjects(bob, frank);
//console.log(user1.name + " & " + user2.name + " have a compatibility value of : " + compareObjects(user1.scores, user2.scores));
console.log(findFriend(user1));