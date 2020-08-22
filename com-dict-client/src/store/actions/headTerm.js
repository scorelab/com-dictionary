import { message } from "antd";

export const addHeadTerm = (term) => async (firestore, callback) => {
  try {
    await firestore.add("headTerms", term);
    callback(term.head_term);
    message.success("Head term added");
    console.log("success");
  } catch (e) {
    console.log(e.message);
  }
};
