import CardRuta from "@/components/CardRuta";
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
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "4rem",
          textShadow: "0px 2px #000000",
        }}
      >
        ¡COMIENZA TU RUTA AL VOLANTE!
      </Typography>

      <Divider
        sx={{
          bgcolor: "#FFC300",
          height: "3px",
          marginBottom: "1.5rem",
          width: {
            xs: "100%",
            sm: "75%",
          },
        }}
      />

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "0.5rem",
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
