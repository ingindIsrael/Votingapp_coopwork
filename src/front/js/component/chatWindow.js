import React, { useState } from "react"
import 

export const ChatWindow = ()=> {
    const [messages, setMessages]= useState('')
    const [inputText, setInputText]= useState('')
   
   const handleSubmit=(e) => {
      e.preventDefault();
      var nextMessages = messages.concat([{ message: inputText }]);
      var nextInputText = '';
      setMessages({ messages: nextMessages, inputText: nextInputText });
   },
  
      var windowStyles = {
         maxWidth: '40em',
         margin: '1rem auto'
      };
      
      var formStyles = {
         display: 'flex',
      };
      
      var inputStyles = {
         flex: '1 auto'
      };
      
      var btnStyles = {
         backgroundColor: '#00d8ff',
         border: 'none',
         color: '#336699',
         textTransform: 'uppercase',
         letterSpacing: '0.05em',
         fontWeight: 'bold',
         fontSize: '0.8em'
      };
      
      return (
         <div style={windowStyles}>
            <ChatMessageHistory messages={messages} />
            <form style={formStyles} onSubmit={handleSubmit}>
               <input style={inputStyles} type="text" onChange={(e)=>setInputText(e.target.value)} value={this.state.inputText} />
               <button style={btnStyles}>Send</button>
            </form>
         </div>
      );
   }


