export const addWord = (definition) => async (firestore) => {
  try {
    await firestore.add("definitions", definition);
    console.log("success");
  } catch (e) {
    console.log(e.message);
  }
};

export const getWords = (start, size) => async (firestore) => {
  try {
    return await firestore.get({
      collection: "definitions",
      orderBy: "createdAt",
      startAfter: start,
      limit: size,
    });
  } catch (e) {
    console.log(e.message);
  }
};

export const updateWord = (key, data) => async (firestore) => {
  try {
    await firestore.update({ collection: "definitions", doc: key }, data);
    console.log("success");
  } catch (e) {
    console.log(e.message);
  }
};
