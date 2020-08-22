const admin = require("firebase-admin");
const functions = require("firebase-functions");
const serviceAccount = require("./serviceAccountKey.json");
const moment = require("moment");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://community-dictionary-dev.firebaseio.com",
});
exports.scheduledFunctionCrontab = functions.pubsub
  .schedule("10 1 * * *")
  .timeZone("Asia/Kolkata") // Users can choose timezone - default is America/Los_Angeles
  .onRun((context) => {
    admin
      .firestore()
      .collection("definitions")
      .orderBy("trending_factor", "desc")
      .limit(1)
      .get()
      .then((querySnapshot) => {
        const defs = querySnapshot.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });
        const def = defs[0];
        const the_day = moment().tz("Asia/Kolkata").format("YYYY-MM-DD");
        admin
          .firestore()
          .collection("definitions")
          .doc(def.id)
          .update({ word_of_the_day: the_day });
      })
      .catch((err) => {
        console.log(err);
      });
    return null;
  });

// exports.updateHeadTerms = functions.https.onRequest(async (req, res) => {
//   admin
//     .firestore()
//     .collection("headTerms")
//     .get()
//     .then(function (querySnapshot) {
//       querySnapshot.forEach(function (doc) {
//         doc.ref.update({ trending_factor: 0 });
//       });
//     });
// });
