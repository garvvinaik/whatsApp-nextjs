import { Avatar } from "@material-ui/core";
import styled from "styled-components";
import getRecipientEmail from "../utils/getRecipientEmail";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../firebase";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, query, where } from "firebase/firestore";
import { useRouter } from "next/router";


function Chat({ id, users }) {
    const router = useRouter();
    const [user] = useAuthState(auth);
    const userChatRef = db
    .collection('users')
    .where('email', '==', getRecipientEmail(users, user));

    const [recipientSnapshot] = useCollection(userChatRef);

    const enterChat = () => {
        router.push(`/chat/${id}`)
    }

    const recipient = recipientSnapshot?.docs?.[0]?.data();
    const recipientEmail = getRecipientEmail(users, user);
    console.log(recipientEmail);

  return( 
    <Container onClick={enterChat}>
        {recipient ? (
            <UserAvatar src={recipient?.photoURL} />
        ): (
            <UserAvatar>{recipientEmail[0]}</UserAvatar>
        )}
        <p>{recipientEmail}</p>
    </Container>
  )
}

export default Chat;

const Container = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 15px;
    word-break: break-word;

    :hover {
        background-color: #e9eaeb;
    }
`;

const UserAvatar = styled(Avatar)`
    margin: 5px;
    margin-right: 15px;
`;
