import Image from "next/image";

interface ICardRutaProps {
    icono: string,
    titulo: string,
    descripcion: string,
}

const CardRuta = ({ icono, titulo, descripcion }: ICardRutaProps) => {
    
  return (
    <div>
      <Image src={icono} width={60} height={60} alt="icono" />
      <h3>{titulo}</h3>
      <p>{descripcion}</p>
    </div>
  );
};

export default CardRuta;