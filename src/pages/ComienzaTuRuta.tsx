import CardRuta from "@/components/CardRuta";
import rutas from "@/lib/rutas";

const ComienzaTuRuta = () => {
  return (
    <div>
      <h2>COMIENZA TU RUTA AL VOLANTE!</h2>

      {rutas.map((ruta, index) => (
        <CardRuta
          key={index}
          icono={ruta.icono}
          titulo={ruta.titulo}
          descripcion={ruta.descripcion}
        />
      ))}
    </div>
  );
};

export default ComienzaTuRuta;
