import React from "react";
import { useTheme , useThemeUpdate } from "./ThemeContext";

function Func(){
    const darkTheme = useTheme()   // custom hooks
  
    const toggleTheme = useThemeUpdate()
    const themeStyles = {
        backgroundColor: darkTheme ? '#333' : '#CCC'
    }

    return (
        <>
        <button onClick={toggleTheme}> Toggle Theme</button>
        <div style={themeStyles}> Function Theme</div>
        </>
    )
}

export default Func