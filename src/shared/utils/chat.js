import store from '../../store/store'
import {setMessages} from '../../store/actions/ChatActions'
export const updateDirectChatHistoryIfActive=(data)=>{

    const {participants,messages} = data
    //find id of user from token and id from active handleChooseActiveConversation
    const receiverId=store.getState().chat.chosenChatDetails?.id;
    const userId=store.getState().auth.userDetails._id;
    if(receiverId && userId){
        const usersInCoversation=[receiverId,userId]
    updateChatHistoryIfSameConversationActive({
        participants,
        usersInCoversation,
        messages
    })
    }

}

const updateChatHistoryIfSameConversationActive=({
    participants,
    usersInCoversation,
    messages
})=>{
    const results =participants.every(function(participantId){
        return usersInCoversation.includes(participantId)
    });
    if (results) {
        store.dispatch(setMessages(messages))
    }

}

