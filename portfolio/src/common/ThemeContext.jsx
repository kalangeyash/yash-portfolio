import React,{ Children, createContext , useContext , useEffect , useState } from "react";

const ThemeContext = createContext();

export const useTheme = ()=> useContext(ThemeContext)

export const ThemeProvider = ({children}) =>{
    const[theme,setTheme] = useState(
        () => localStorage.getItem('theme') || 'dark'
    )

    useEffect(()=>{
        document.body.setAttribute('data-theme', theme)
        localStorage.setItem('theme',theme)
    },[theme])

    const toggleTheme = ()=>{
        console.log("theme switched")
        setTheme((prevTheme) => (prevTheme === 'dark' ? 'dark' : 'light'))
    }

    return (
        <ThemeContext.Provider value = {{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}
