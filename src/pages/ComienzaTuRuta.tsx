import CardRuta from "@/components/CardRuta";
import Triangles from "@/components/triangles";
import rutas from "@/lib/rutas";
import { Typography, Box, Divider } from "@mui/material";

const ComienzaTuRuta = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        bgcolor: "#001D3D",
        paddingBottom: "2rem",
      }}
    >
      <Typography
        variant="h5"
        color="#FFC300"
        fontWeight={600}
        fontSize={{
          xs: '1.1rem',
          sm: '1.5rem',
          md: '2.2rem'
        }}
        sx={{
          display: "flex",
          justifyContent: {
            xs: "flex-start",
            sm: "center",
          },
          alignItems: "center",
          height: {
            xs: "4rem",
            sm: '4.5rem',
            md: '7rem'
          },
          width: "100%",
          paddingX: "1.5rem",
          textShadow: "0px 2px #000000",
        }}
      >
        ¡COMIENZA TU RUTA AL VOLANTE!
      </Typography>

      {/* <Triangles /> */}

      <Divider
        sx={{
          bgcolor: "#FFC300",
          height: "3px",
          marginBottom: "2rem",
          width: {
            xs: "100%",
            sm: "75%",
          },
        }}
      />
      <Box
      marginX={'0.4rem'}
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "2.8rem",
        }}
      >
        {rutas.map((ruta, index) => (
          <CardRuta
            key={index}
            icono={ruta.icono}
            titulo={ruta.titulo}
            descripcion={ruta.descripcion}
          />
        ))}
      </Box>
    </Box>
  );
};

export default ComienzaTuRuta;
