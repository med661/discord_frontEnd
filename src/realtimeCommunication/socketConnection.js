import io from 'socket.io-client'
import {setPendingFriendsInvitations,setFriends,setOnlineUsers} from '../store/actions/friendsActions'
import store from '../store/store'
import * as roomHandler from "./roomHandler";
import {updateDirectChatHistoryIfActive} from '../shared/utils/chat'
import * as webRTCHandler from "./webRTCHandler"

let socket = null
export const connectWebSocketServer=(userDetails)=>{
  console.log({userDetailsSocket: userDetails});
    const   jwtToken=userDetails.token
    socket=io('http://localhost:5002',{
        auth:{
            token:jwtToken,
        }
    })

    socket.on('connect',()=>{
        //console.log("successfully connected with socket io server" );
        console.log(socket.id);
    })


    socket.on('friend-invitation',(data)=>{
        const { pendingInvitation}=data;
        /*console.log("lennna friend-invitation event"+JSON.stringify(data));
        console.log({pendingInvitation});*/
        store.dispatch(setPendingFriendsInvitations(pendingInvitation))

    })
    socket.on('friends-list',(data)=>{

        const {friends}=data
        store.dispatch(setFriends(friends))

    })

    socket.on('online-users',(data)=>{
        const {onlineUsers}=data
        store.dispatch(setOnlineUsers(onlineUsers))

    })

    socket.on('direct-chat-history',(data)=>{
       // console.log("direct-chat-history came from server");
       // console.log(data);
       updateDirectChatHistoryIfActive(data)
    })

    socket.on('room-create',(data)=>{
        //console.log({data});
        roomHandler.newRoomCreated(data)
    })

    socket.on('active-rooms',(data)=>{
       
        roomHandler.updateActiveRoom(data)
    })
    socket.on('conn-prepare',(data)=>{
       // console.clear()
        console.log("conn-prepare ",{data});
        const {connUserSocketId}=data
        webRTCHandler.prepareNewPeerConnection(connUserSocketId,false)
        socket.emit('conn-init',{connUserSocketId:connUserSocketId})
    })

    socket.on('conn-init',(data)=>{
        const {connUserSocketId}=data
        webRTCHandler.prepareNewPeerConnection(connUserSocketId,true)

    })
   socket.on('conn-signal',(data)=>{
    webRTCHandler.handleSignalingData(data)

   }) 

   socket.on('room-participant-left',(data)=>{
    console.clear()
        console.log('user left room')
        webRTCHandler.handleParticipanteLeftRoom(data)

   })
};

export const sendDirectMessage =(data)=>{
    console.log(data)
    socket.emit('direct-message',data);
}

export const getDirectChatHistory =(data)=>{
    //console.log(data)
    socket.emit('direct-chat-history',data);
}
export const createNewRoom=()=>{
    socket.emit('room-create')
}
export const joinRoom=(data)=>{
    socket.emit('room-join',data);

}
export const leaveRoom=(data)=>{
    socket.emit('room-leave',data);
    
}
export const signalPeerData=(data)=>{
    socket.emit('conn-signal',data)

}