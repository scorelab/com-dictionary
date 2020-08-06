// Import all needed modules.import firebase from "firebase/app";
const algoliasearch = require("algoliasearch");
const functions = require("firebase-functions");
var admin = require("firebase-admin");

var serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://community-dictionary-dev.firebaseio.com",
});

// Set up Firestore.
// admin.initializeApp();
const db = admin.firestore();
// Set up Algolia.
// The app id and API key are coming from the cloud functions environment, as we set up in Part 1, Step 3.
const algoliaClient = algoliasearch(
  functions.config().algolia.appid,
  functions.config().algolia.apikey
);
// Since I'm using develop and production environments, I'm automatically defining
// the index name according to which environment is running. functions.config().projectId is a default
// property set by Cloud Functions.
const collectionIndexName =
  functions.config().projectId === "community-dictionary-dev"
    ? "MyCollectionName_prod"
    : "MyCollectionName_dev";
const collectionIndex = algoliaClient.initIndex(collectionIndexName);

// Create a HTTP request cloud function.
exports.sendCollectionToAlgolia = functions.https.onRequest(
  async (req, res) => {
    // This array will contain all records to be indexed in Algolia.
    // A record does not need to necessarily contain all properties of the Firestore document,
    // only the relevant ones.
    const algoliaRecords = [];

    // Retrieve all documents from the COLLECTION collection.
    const querySnapshot = await db.collection("definitions").get();

    querySnapshot.docs.forEach((doc) => {
      const document = doc.data();
      // Essentially, you want your records to contain any information that facilitates search,
      // display, filtering, or relevance. Otherwise, you can leave it out.
      const record = {
        objectID: doc.id,
        head_term: document.head_term,
        other_language_term: document.other_language_term,
        other_language: document.other_language,
      };

      algoliaRecords.push(record);
    });

    // After all records are created, we save them to
    collectionIndex.saveObjects(algoliaRecords, (_error, content) => {
      res.status(200).send("COLLECTION was indexed to Algolia successfully.");
    });
  }
);
