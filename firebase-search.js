var firebase = require('firebase');
exports.answer = function(reference, inputKeyID, referenceKeyID) {
  reference.once("value", function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      var key = childSnapshot.key();
      var childData = childSnapshot.val();
      if (childData.referenceKeyID == inputKeyID) {
        return key;
      }
    })
  });
}