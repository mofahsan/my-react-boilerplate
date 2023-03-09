import { useTheme,useThemeUpdate } from "../webdevsimplified/ThemeContext"
import { ThemeProvider } from "../webdevsimplified/ThemeContext"

export default function ChildComponent(){
    const darktheme = useTheme()
    console.log(darktheme)
  
    return(
        <>
        <ThemeProvider>
        hello this is {darktheme.toString()}

        </ThemeProvider>
        </>
    )
}