import { useEffect } from "react";

const Bool = () => {
  // Конец жизненного цикла (Component Unmounte)
  useEffect(() => {
    // Последний этап
    return () => {
      console.log("Компонента Bool закончила свой жизненный этап");
    };
  }, []);

  return <div>Значение равно 5</div>;
};

export default Bool;
