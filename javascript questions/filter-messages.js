import React from 'react';

const inbox = [{
  msgId: "47364924",
  from: "fred@consoto.com",
  body: "Could you send me the FY19 report?",
  read: false
}, {
  msgId: "47364901",
  from: "alice@consoto.com",
  body: "Don't forget to follow up on the training by end of week!",
  read: false
}, {
  msgId: "47364883",
  from: "bob@consoto.com",
  body: "Hey, do you have time to review that PR?",
  read: false
}, {
  msgId: "47364876",
  from: "claire@consoto.com",
  body: "When is the security review meeting today?",
  read: true
}, {
  msgId: "47364862",
  from: "alice@consoto.com",
  body: "FYI - 3pm meeting has been postponed till Tuesday",
  read: false
}, {
  msgId: "47364859",
  from: "bob@consoto.com",
  body: "Do you have time for a sync-up later today?",
  read: true
}, {
  msgId: "47364851",
  from: "fred@consoto.com",
  body: "Yes, it should be in master shortly!",
  read: true
}, {
  msgId: "47364848",
  from: "dory@consoto.com",
  body: "Got it - will drop by as soon as I get in",
  read: true
}, {
  msgId: "47364846",
  from: "fred@consoto.com",
  body: "Hey, has the files uploading regression fix been deployed yet?",
  read: true
}];

const messages = ({inbox}) => {
  const [showRead, setRead] = useState(true);
  const [showUnread, setUnRead] = useState(true);
  const [messages, setMessages] = useState();

  useEffect(() => {
    setMessages(inbox);
  }, [inbox]);

  const setReadChecked = () => {
    setRead(!showRead);
    filterMessages();
  }

  const setUnreadChecked = () => {
    setUnRead(!showUnread);
    filterMessages();
  }

  const filterMessages = () => {
    const filtered = inbox;
    if (!showRead) {
      filtered = filtered.filter((message) => {return !message.read});
    } 
    if (!showUnread) {
      filtered = filtered.filter((message) => {return message.read});
    }
    setMessages(filtered);
  }

  return (
    <div>
      <input type="checkbox" onChange={setReadChecked} checked={showRead}>read</input>
      <input type="checkbox" onChange={setUnreadChecked} checked={showUnread}>unread</input>
      {messages.map((message) => {
        <div>
          <p>{message.from}</p>
          <p>{message.body}</p>
        </div>
      })}
      {
        !messages.length && inbox.length && <div>try changing the filters</div>
      }
      {
        !inbox.length && <div>no messages to show</div>
      }
    </div>
  );
}
