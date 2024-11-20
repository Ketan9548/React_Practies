import { useEffect, useState } from "react";
import "./App.css";
import { ThemProvider } from "./Context/Them";
import Card from "./Components/Card";
import ButtonThem from "./Components/ButtonThem";

function App() {
  const [themMode, setThememode] = useState("light");

  const lightTheme = () => {
    setThememode("light");
  };
  const darkTheme = () => {
    setThememode("dark");
  };
  const value = document.querySelector("html").classList;
  useEffect(() => {
    value.remove("light", "dark");
    value.add(themMode);
  }, [themMode]);

  return (
    <>
      <div className="bg-slate-500">
        <ThemProvider value={{ themMode, lightTheme, darkTheme }}>
          <div className="flex flex-wrap min-h-screen items-center">
            <div className="w-full">
              <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                <ButtonThem />
              </div>
              <div className="w-full max-w-sm mx-auto">
                <Card />
              </div>
            </div>
          </div>
        </ThemProvider>
      </div>
    </>
  );
}

export default App;
