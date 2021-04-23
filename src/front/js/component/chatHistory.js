import React from "react";
import { ChatMessage } from "./chatMessage.js"

 const ChatMessageHistory = () => {  
      var createMessage = function(message, index) {
         var liStyles = {
            backgroundColor: ( index % 2 == 1 ) ? '#ddd' : '#efefef',
            padding: '1rem',
            borderBottom: '1px solid #ddd'
         };
         
         return <li style={liStyles}><ChatMessage message={message.message} timestamp={message.timestamp} /></li>
      };
         
      var ulStyles = {
         listStyle: 'none',
         margin: 0,
         padding: 0
      };
      
      return <ul style={ulStyles}>{this.props.messages.map(createMessage)}</ul>;
   }
 
   
var MESSAGES = [
   { message: 'Hi Josh', timestamp: 'Tuesday' },
   { message: 'How are you?', timestamp: 'Wednesday' }                                    
];