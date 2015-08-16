exports.fireKey = function(root, child, inputID, matchID) {
  var reference = root.child(child);
  keyCodeMatch = null;
  reference.once("value", function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      var keyCode = childSnapshot.key();
      var childData = childSnapshot.val();
      if (childData[matchID] == inputID) {
        keyCodeMatch = keyCode;
      }
    });
  });
  return keyCodeMatch;
}