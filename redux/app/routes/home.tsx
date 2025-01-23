import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "store";
import { addItem } from "store/slices/basket";
import { Link } from "react-router";
import { useGetFruitesQuery } from "store/services/product";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  const dispatch = useDispatch();

  const { data, isLoading, isError, isSuccess } = useGetFruitesQuery();

  const addToBasket = (value: string) => {
    dispatch(addItem(value));
  };

  if (isLoading) {
    return "...";
  }

  if (isError) {
    return <div>Ошибка</div>;
  }

  return (
    <main>
      <h2>Products</h2>
      <Link to="/basket">Перейти в карзину</Link>
      <ul>
        {isSuccess &&
          data?.map((value) => (
            <li onClick={() => addToBasket(value)} key={value}>
              {value}
            </li>
          ))}
      </ul>
    </main>
  );
}
