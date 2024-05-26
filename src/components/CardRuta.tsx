import { Typography, Card } from "@mui/material";
import Image from "next/image";

interface ICardRutaProps {
    icono: string,
    titulo: string,
    descripcion: string,
}

const CardRuta = ({ icono, titulo, descripcion }: ICardRutaProps) => {
    
  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '0.5rem',
        width: '12rem',
        height: '7rem',
        bgcolor: "#001D3D",
        boxShadow: '0',
      }}
    >
      <Image src={icono} width={30} height={40} alt="icono" />
      <Typography
        variant="h5"
        color= "#FFC300"
        fontSize={'0.6rem'}
        fontWeight={'800'}
      >
        {titulo}
      </Typography>
      <Typography
        paragraph
        color= "#FFFFFF"
        fontSize={'0.5rem'}
        fontWeight={'500'}
        sx={{
          width: '9.6rem'
        }}
      >
        {descripcion}
      </Typography>
    </Card>
  );
};

export default CardRuta;