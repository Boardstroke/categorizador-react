import React, { useState } from "react";
import { Flipper, Flipped } from "react-flip-toolkit";
import _ from "lodash";
import Card from "./Item.js";
const Categorizador = (props) => {
  const [data] = useState(props.data);
  const [categorias, setCategorias] = useState([]);
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("Todas");

  const [items, setItems] = useState([]);

  React.useEffect(() => {
    setCategorias((prevCategorias) => {
      data.forEach((item) => {
        prevCategorias = prevCategorias.concat(
          item.categoria
            .filter((c) => !prevCategorias.some((prevEl) => prevEl === c.nome))
            .map((c) => c.nome)
        );
      });
      return prevCategorias;
    });
  }, [data]);

  React.useEffect(() => {
    setItems(
      data.filter((rawItems) =>
        rawItems.categoria.some((c) => c.nome === categoriaSelecionada)
      )
    );
  }, [data, categoriaSelecionada]);

  // const shuffle = () => setData((data) => _.shuffle(data));
  const showOnly = (categoria) => setCategoriaSelecionada(categoria);
  return (
    <Flipper flipKey={items.map((d) => d.id).join("")}>
      <header>
        <nav className="menu-categorizador">
          <ul>
            {categorias.map((c) => (
              <li key={c} onClick={() => showOnly(c)}>
                {c}
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <section className="grid">
        {items.map((d, i) => (
          <Flipped key={d.id} flipId={d.id}>
            <Card card={d} />
          </Flipped>
        ))}
      </section>
    </Flipper>
  );
};

export default Categorizador;
