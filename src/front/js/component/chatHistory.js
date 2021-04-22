import React from "react";

const ChatMessageHistory = () => {
   
     
         
      var ulStyles = {
         listStyle: 'none',
         margin: 0,
         padding: 0
      };
      
      return <ul style={ulStyles}>{this.props.messages.map(createMessage)}</ul>;
   }
   