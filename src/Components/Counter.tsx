import { FC, useState } from "react";

interface Props {
  name: string;
  Descri: string;
  Iter: number;
}
const Counter: FC<Props> = ({ name, Descri, Iter }) => {
  const [count, setCount] = useState<number>(0);

  const doDecrement = (): void => {
    setCount((prevCount) => prevCount - 1);
  };

  const doIncrement = (): void => {
    setCount((prevCount) => prevCount + 1);
  };
  return (
    <div>
      <button className="btn" onClick={doIncrement}>
        Increment
      </button>
      <button className="btn" onClick={doDecrement}>
        Decrement
      </button>
      <p className="count__Show">{count}</p>

      <p>{name}</p>
      <p>{Descri}</p>
      <p>{Iter}</p>
    </div>
  );
};

export default Counter;
