export const addComment = (comment) => async (firestore) => {
  try {
    await firestore.add("comments", comment);
    console.log("success");
  } catch (e) {
    console.log(e.message);
  }
};
