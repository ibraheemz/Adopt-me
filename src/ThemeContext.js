import { createContext } from "react"

const ThemeContext = createContext(["green", () => {}]) //will stick a hook-like in here because we will use it for hooks but it can be anything else

export default ThemeContext;