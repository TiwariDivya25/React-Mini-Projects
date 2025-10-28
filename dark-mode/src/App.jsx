// App.jsx
import { useState } from 'react'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'
// Assuming the path is correct as per your original file,
// but removing the unnecessary 'useTheme' import for clarity
import { ThemeProvider } from './context/Theme' 
import { useEffect } from 'react'

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const darkTheme = () => setThemeMode("dark");
  const lightTheme = () => setThemeMode("light");

    useEffect(() => {
    const html = document.querySelector("html");
    
    // **CORRECTED LOGIC:** // It's safer and cleaner to remove both possible classes
    // before adding the current one.
    html.classList.remove("light", "dark");
    html.classList.add(themeMode);
  }, [themeMode]);

  // ... rest of the component


  return (
    <ThemeProvider value={{themeMode, darkTheme, lightTheme}}>
      <ThemeBtn />
      <Card />
    </ThemeProvider>
  )
}

export default App
