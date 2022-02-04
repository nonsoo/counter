import { FC } from "react";
import Counter from "./Components/Counter";

import "./App.css";

const App: FC = () => {
  return (
    <div className="App">
      <Counter name="this is the counter" Descri="Show counter" Iter={12} />
    </div>
  );
};

export default App;
