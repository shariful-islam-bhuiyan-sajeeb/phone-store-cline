import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./componets/Routes/Routes";
import ParticleBackgrang from "./componets/Animation Design/ParticleBackgrang";

function App() {
  return (
    <div className=" ">
      {/* <ParticleBackgrang></ParticleBackgrang> */}
      <div className="absolute top-0  left-0 w-full mx-auto ">
        <RouterProvider router={router}></RouterProvider>
      </div>
    </div>
  );
}

export default App;
