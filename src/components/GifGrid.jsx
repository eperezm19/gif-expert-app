import { useFetchGifs } from "../hooks/useFetchGifs";
import { GitItem } from "./GitItem";

// eslint-disable-next-line react/prop-types
export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  if (isLoading) <h2>Cargando</h2>;

  return (
    <div>
      <h3>{category}</h3>
      {isLoading && <h2>Cargando...</h2>}

      <div className="card-grid">
        {images.map((img) => (
          <GitItem key={img.id} {...img} />
        ))}
      </div>
    </div>
  );
};
