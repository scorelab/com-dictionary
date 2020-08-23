import { message } from "antd";
export const addWord = (definition) => async (firestore) => {
  try {
    await firestore.add("definitions", definition);
    console.log("success");
    message.success("Definition added");
  } catch (e) {
    console.log(e.message);
  }
};

export const addLikes = (like) => async (firestore) => {
  try {
    await firestore.add("likes", like);
    console.log("success");
  } catch (e) {
    console.log(e.message);
  }
};

export const addDislikes = (like) => async (firestore) => {
  try {
    await firestore.add("dislikes", like);
    console.log("success");
  } catch (e) {
    console.log(e.message);
  }
};

export const addReport = (report) => async (firestore, history) => {
  try {
    await firestore.add("reports", report);
    console.log("success");
    message.success("Definition reported");
    history.push("/");
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

export const deleteLikes = (key) => async (firestore) => {
  try {
    await firestore.delete({ collection: "likes", doc: key });
    console.log("success");
  } catch (e) {
    console.log(e.message);
  }
};

export const deleteDislikes = (key) => async (firestore) => {
  try {
    await firestore.delete({ collection: "dislikes", doc: key });
    console.log("success");
  } catch (e) {
    console.log(e.message);
  }
};
