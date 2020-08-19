export const addHeadTerm = (term) => async (firestore, callback) => {
  try {
    await firestore.add("headTerms", term);
    callback(term.head_term);
    console.log("success");
  } catch (e) {
    console.log(e.message);
  }
};
