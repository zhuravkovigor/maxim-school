import { useSelector } from "react-redux";
import type { RootState } from "store";

const Basket = () => {
  const { items } = useSelector((state: RootState) => state.basket);

  return (
    <div>
      <h2>Basket</h2>

      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Basket;
