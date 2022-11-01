 import store from '../store/store'
 import { setOpenRoom ,setRoomDetails,setActiveRooms, setIsUserJoinWithOnlyAudio,setLocalStream,setScreenSharingStream} from '../store/actions/roomActions';
 import * as socketConnection from "./socketConnection"
 import * as webRTCHandler from "./webRTCHandler"
 export const createNewRoom=() =>{
   const successCallFunc =()=>{
      store.dispatch(setOpenRoom(true,true));
      const audioOnly=store.getState().room.audioOnly
      store.dispatch(setIsUserJoinWithOnlyAudio(audioOnly))
      socketConnection.createNewRoom()
  
   }
   const onlyAudio= store.getState().room.audioOnly
   webRTCHandler.getLocalStreamPreview(onlyAudio,successCallFunc)
 }
 export const newRoomCreated=(data) =>{
   const {roomDetails}=data
   store.dispatch(setRoomDetails(roomDetails))
  

}
export const updateActiveRoom=(data) =>{
   const {activeRooms}=data
   console.log({activeRooms})
   const friends=store.getState().friends.friends
   const rooms=[]
  // console.clear()
 const userId=store.getState().userDetails?._id
   activeRooms.forEach(room=>{
   const isRoomCreatedByMe=room.roomCreator.userId ===userId
   if (isRoomCreatedByMe) {
      rooms.push({...room,creatorUsername:"Me"})

   }else{
      friends.forEach(f=>{
         if(f.id===room.roomCreator.userId){
           rooms.push({...room,creatorUsername:f.username})
  
         }
        })
   }

      console.log({room})
     

   })
   store.dispatch(setActiveRooms(rooms))
}
export const joinRoom=(roomId) =>{
   const successCallFunc =()=>{
   
      store.dispatch(setRoomDetails({roomId}))
      
      store.dispatch(setOpenRoom(false,true))
      const audioOnly=store.getState().room.audioOnly
      store.dispatch(setIsUserJoinWithOnlyAudio(audioOnly))
      socketConnection.joinRoom({roomId})
   }
   const onlyAudio= store.getState().room.audioOnly

   webRTCHandler.getLocalStreamPreview(onlyAudio,successCallFunc)

}
export const leaveRoom=() =>{
   const roomId=store.getState().room.roomDetails.roomId
   const localStream=store.getState().room.localStream
   if (localStream) {
      localStream.getTracks().forEach(track=>track.stop())
      store.dispatch(setLocalStream([]))
      
   }
   const screenSharingStream= store.getState().room.screenSharingStream;
   if (screenSharingStream) {
      screenSharingStream.getTracks().forEach(track=>track.stop())
      store.dispatch(setScreenSharingStream(null))


   }
   webRTCHandler.closeAllConnections()
   socketConnection.leaveRoom({roomId})
   store.dispatch(setRoomDetails(null))
   store.dispatch(setOpenRoom(false,false))

}