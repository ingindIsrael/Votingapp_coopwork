import React from "react"

export const ChatMessage = () => {
  
      return(
         <p style={{marginBottom: 0}}>{this.props.message}<br/>
         <small>{this.props.timestamp}</small></p>
      );
   }
