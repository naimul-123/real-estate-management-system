import { createContext, useContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom"
export const DataContext = createContext()

function App() {
  const [data, setData] = useState();


  useEffect(() => {
    const dataloader = async () => {
      const res = await fetch('./data.json');
      const data = await res.json();
      setData(data)

    }

    dataloader();
  }, [])



  return (
    <div>
      <DataContext.Provider value={data} >
        <Outlet></Outlet>
      </DataContext.Provider>

    </div>
  )
}

export default App
