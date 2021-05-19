const bcrypt = require('bcrypt');
let original = 'myPassword';
let test = "somePassword";

let main = async () => {
  bcrypt.hash(original, 10, function(err, hash) {
    // Store hash
    console.log("Password: %s hashed", original);
    bcrypt.compare(test, hash, function(err, res) {
      console.log("Compare password %s to %s", test, original);
      if (res) {
       // Passwords match
       console.log("Match: true");
      } else {
       // Passwords don't match
       console.log("Match: false");
      }
    });
    bcrypt.compare(original, hash, function(err, res) {
      console.log("Compare password %s to %s", original, original);
      if (res) {
       // Passwords match
       console.log("Match: true");
      } else {
       // Passwords don't match
       console.log("Match: false");
      }
    });
  });
}

main();
