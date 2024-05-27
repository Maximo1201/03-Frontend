import { Typography, Card, Box } from "@mui/material";
import Image from "next/image";

interface ICardRutaProps {
  icono: string;
  titulo: string;
  descripcion: string;
}

const CardRuta = ({ icono, titulo, descripcion }: ICardRutaProps) => {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "0.5rem",
        width: {
          xs: "11rem",
          md: "14rem",
          lg: '22rem'
        },
        height: {
          xs: "10rem",
          md: '13rem',
          lg: '16rem',
        },
        bgcolor: "#001D3D",
        boxShadow: "0",
      }}
    >
      <Box
        display={"flex"}
        justifyContent={"center"}
        width={{
          xs: "2.7rem",
          md: '3.5rem',
          lg: '4.5rem'
        }}
      >
        <Image src={icono} width={80} height={80} alt="icono" />
      </Box>

      <Typography
        variant="h5"
        color="#FFC300"
        fontSize={{
          xs: "0.7rem",
          sm: "0.8rem",
          md: "1rem",
          lg: '1.6rem'
        }}
        fontWeight={"800"}
      >
        {titulo}
      </Typography>
      <Typography
        paragraph
        color="#FFFFFF"
        fontSize={{
          xs: "0.6rem",
          sm: "0.7rem",
          md: "0.9rem",
          lg: '1.4rem'
        }}
        fontWeight={"500"}
        sx={{
          width: "100%",
        }}
      >
        {descripcion}
      </Typography>
    </Card>
  );
};

export default CardRuta;
