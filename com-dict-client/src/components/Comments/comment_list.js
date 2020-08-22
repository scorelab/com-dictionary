import React, { useState, useEffect } from "react";
import { Comment, List, Row } from "antd";
import { useFirestore } from "react-redux-firebase";
import moment from "moment";

function CommentList({ data }) {
  const firestore = useFirestore();
  const [comments, setComments] = useState([]);
  console.log(data.id);
  useEffect(() => {
    firestore
      .collection("comments")
      .orderBy("createdAt")
      .where("definition_id", "==", data.id)
      .onSnapshot(
        (querySnapshot) => {
          console.log(querySnapshot.docs);
          const defs = querySnapshot.docs.map((doc) => {
            console.log(
              doc.data().definition_id,
              data.id,
              doc.data().definition_id.toString() === data.id.toString()
            );
            return doc.data();
          });
          setComments(defs);
        },
        (err) => {
          console.log(err);
        }
      );
    // eslint-disable-next-line
  }, []);
  return (
    <Row>
      <List
        className="comment-list"
        header={`${comments.length} replies`}
        itemLayout="horizontal"
        dataSource={comments}
        renderItem={(item) => (
          <li>
            <Comment
              // actions={item.actions}
              author={item.uname}
              avatar={item.uphoto}
              content={item.comment}
              datetime={moment(item.createdAt).format(
                "dddd, MMMM Do YYYY, h:mm:ss a"
              )}
            />
          </li>
        )}
      />
    </Row>
  );
}
export default CommentList;
