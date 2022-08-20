import React, { createContext, useState } from 'react';
 
export const CursorContext = createContext();
 
export function CursorProvider(props) {
   
  const [cursor, setCursor] = useState(false);
  const [cursorBack, setCursorBack] = useState(false);
  

  return <CursorContext.Provider value={{ cursor: cursor, setCursor:setCursor, setCursorBack: setCursorBack, cursorBack: cursorBack,  }}>{props.children}</CursorContext.Provider>;
} 