import { ThemeProvider } from "../webdevsimplified/ThemeContext"

export default function Hoc(props){
    return (
        <>
        <ThemeProvider>
        <props.Component/>
        </ThemeProvider>
        </>
    )
}