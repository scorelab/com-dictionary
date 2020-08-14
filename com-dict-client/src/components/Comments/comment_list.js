import React from "react";
import { Comment, Tooltip, List, Row, Col } from 'antd';
import moment from 'moment';

const data = [
  {
    actions: [<span key="comment-list-reply-to-0">Reply to</span>],
    author: 'Anonymus',
    avatar: 'https://img.icons8.com/bubbles/500/000000/user.png',
    content: (
      <p>
       What the hell is this?
      </p>
    ),
    datetime: (
      <Tooltip
        title={moment()
          .subtract(1, 'days')
          .format('YYYY-MM-DD HH:mm:ss')}
      >
        <span>
          {moment()
            .subtract(1, 'days')
            .fromNow()}
        </span>
      </Tooltip>
    ),
  },
  {
    actions: [<span key="comment-list-reply-to-0">Reply to</span>],
    author: 'VinuriB',
    avatar: 'https://img.icons8.com/bubbles/500/000000/user.png',
    content: (
      <p>
        Why am i doing this?
      </p>
    ),
    datetime: (
      <Tooltip
        title={moment()
          .subtract(2, 'days')
          .format('YYYY-MM-DD HH:mm:ss')}
      >
        <span>
          {moment()
            .subtract(2, 'days')
            .fromNow()}
        </span>
      </Tooltip>
    ),
  },
];

function comment_list()
{
// ReactDOM.render(
return (
<Row>
   
<List
    className="comment-list"
    header={`${data.length} replies`}
    itemLayout="horizontal"
    dataSource={data}
    renderItem={item => (
      <li>
        <Comment
          actions={item.actions}
          author={item.author}
          avatar={item.avatar}
          content={item.content}
          datetime={item.datetime}
        />
      </li>
    )}
  />
 
</Row>

);
    }
export default comment_list;