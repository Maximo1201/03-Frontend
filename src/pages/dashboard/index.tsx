import CardPack from "@/container/CardPack";
import CardTurnos from "@/container/CardTurnos";
import DashboardLayout from "@/layouts/DashboardLayout";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import WarningIcon from "@mui/icons-material/Warning";
import { Box, CircularProgress, Divider, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import { useTheme } from "@mui/material/styles";
import { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const turnos = [
  {
    title: "Clase de Manejo",
    observations: {
      horario: "10:00 am",
      encuentro: "Plaza de la Cultura",
      instructor: "Pedro Perez",
    },
  },
  {
    title: "Clase de Manejo",
    observations: {
      horario: "10:00 am",
      encuentro: "Plaza de la Cultura",
      instructor: "Pedro Perez",
    },
  },
  {
    title: "Clase de Manejo",
    observations: {
      horario: "10:00 am",
      encuentro: "Plaza de la Cultura",
      instructor: "Pedro Perez",
    },
  },
  {
    title: "Clase de Manejo",
    observations: {
      horario: "10:00 am",
      encuentro: "Plaza de la Cultura",
      instructor: "Pedro Perez",
    },
  },
  {
    title: "Clase de Manejo",
    observations: {
      horario: "10:00 am",
      encuentro: "Plaza de la Cultura",
      instructor: "Pedro Perez",
    },
  },
  {
    title: "Clase de Manejo",
    observations: {
      horario: "10:00 am",
      encuentro: "Plaza de la Cultura",
      instructor: "Pedro Perez",
    },
  },
  {
    title: "Clase de Manejo",
    observations: {
      horario: "10:00 am",
      encuentro: "Plaza de la Cultura",
      instructor: "Pedro Perez",
    },
  },
  {
    title: "Clase de Manejo",
    observations: {
      horario: "10:00 am",
      encuentro: "Plaza de la Cultura",
      instructor: "Pedro Perez",
    },
  },
];

const packsAutomat = [
  {
    price: 1200,
    caption: "Pack 1",
    title: "Pack 1",
    description: "10 clases de manejo en caja automática",
  },
  {
    price: 1800,
    caption: "Pack 2",
    title: "Pack 2",
    description: "15 clases de manejo en caja automática",
  },
  {
    price: 2400,
    caption: "Pack 3",
    title: "Pack 3",
    description: "20 clases de manejo en caja automática",
  },
];

function Dashboard() {
  const theme = useTheme();

  const [centerSlidePercentage, setCenterSlidePercentage] = useState(33.33);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 780) {
        setCenterSlidePercentage(100);
      } else {
        setCenterSlidePercentage(33.33);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <DashboardLayout>
      <Box sx={{ padding: "1rem", width: "100%" }}>
        <Typography
          variant="h4"
          component="h1"
          sx={{
            marginBottom: "1rem",
            fontSize: "1.5rem",
            fontWeight: 700,
            display: "flex",
            justifyContent: "center",
          }}
        >
          MIS PROXIMOS TURNOS
        </Typography>

        <Card
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            mx: 3,
            borderRadius: "10px",
            padding: "1rem",
            boxShadow: "inset 0px 0px 10px 0px rgba(0,0,0,0.1)",
            border: "1px solid #e0e0e0",
          }}
        >
          <Box
            sx={{
              padding: "1rem",
              width: "15%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <Typography
              component="h5"
              variant="h5"
              sx={{
                marginBottom: "1rem",
                fontSize: "1.2rem",
                fontWeight: 700,
                display: "flex",
                justifyContent: "center",
              }}
            >
              Mi Progreso
            </Typography>
            <CircularProgress
              variant="determinate"
              value={80}
              size={100}
              sx={{
                color: "secondary.main",
                display: "flex",
                justifyContent: "center",
              }}
            />
            <Typography
              component="h5"
              variant="h5"
              sx={{
                marginBottom: "1rem",
                color: "secondary.main",
                fontSize: "1rem",
                fontWeight: 700,
                display: "flex",
                justifyContent: "center",
              }}
            >
              8 de 10 Clases
            </Typography>
          </Box>

          <Divider orientation="vertical" flexItem sx={{ color: "#000" }} />
          <Box sx={{ padding: "1rem", maxWidth: "85%" }}>
            <Typography
              component="h5"
              variant="h5"
              sx={{
                backgroundColor: "primary.main",
                color: "white",
                marginBottom: "1rem",
                fontSize: "1.2rem",
                fontWeight: 700,
                display: "flex",
                justifyContent: "center",
                width: "fit-content",
                padding: ".5rem 2rem",
                borderRadius: "5px",
                margin: "0 auto",
              }}
            >
              Tenes un Pack Activo, conoce la agenda de tus turnos
            </Typography>
            <Carousel
              showThumbs={false}
              showStatus={false}
              showIndicators={false}
              infiniteLoop
              useKeyboardArrows
              centerMode
              centerSlidePercentage={centerSlidePercentage}
              renderArrowPrev={(onClickHandler, hasPrev, label) =>
                hasPrev && (
                  <button
                    type="button"
                    onClick={onClickHandler}
                    title={label}
                    style={{
                      position: "absolute",
                      zIndex: 20,
                      top: "50%",
                      transform: "translateY(-50%)",
                      left: "calc(97% - 100%)",
                      color: "black",
                      border: "none",
                      padding: "10px",
                    }}
                  >
                                    <KeyboardArrowLeftIcon  sx={{color: "black", fontSize: "2rem"}} />

                  </button>
                )
              }
              renderArrowNext={(onClickHandler, hasNext, label) =>
                hasNext && (
                  <button
                    type="button"
                    onClick={onClickHandler}
                    title={label}
                    style={{
                      position: "absolute",
                      zIndex: 20,
                      top: "50%",
                      transform: "translateY(-50%)",
                      right: -25,
                      color: "black",
                      border: "none",
                      padding: "10px",
                    }}
                  >
                    <ChevronRightIcon sx={{color: "black", fontSize: "2rem"}} />
                  </button>
                )
              }
            >
              {turnos.map((turno, index) => (
                <CardTurnos {...turno} key={index} />
              ))}
            </Carousel>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              <Typography
                component="h5"
                variant="h5"
                sx={{
                  color: "text.secondary",
                  fontSize: "1rem",
                  fontWeight: 600,
                  width: "100%",
                }}
              >
                <WarningIcon
                  sx={{
                    color: "warning.main",
                    fontSize: "1.5rem",
                    marginRight: ".5rem",
                  }}
                />
                Recordá que tus clases tienen una duración de 60 minutos
              </Typography>
              <button
                style={{
                  backgroundColor: theme.palette.secondary.main,
                  color: "black",
                  padding: ".5rem 2rem",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  fontSize: "1rem",
                  fontWeight: 700,
                  whiteSpace: "nowrap",
                }}
              >
                AGENDAR PRÓXIMO TURNO
              </button>
            </Box>
          </Box>
        </Card>
      </Box>

      <Divider sx={{ margin: "1rem 0" }} />
      <Box sx={{ padding: "1rem", maxWidth: "95%", margin: "0 auto" }}>
        <Typography
          variant="h4"
          component="h1"
          sx={{
            marginBottom: "1rem",
            fontSize: "1.5rem",
            fontWeight: 700,
            display: "flex",
            justifyContent: "center",
          }}
        >
          ¡ELEGÍ TU PACK DE MANEJO!
        </Typography>
        <Typography
          component="h5"
          variant="h5"
          sx={{
            backgroundColor: "secondary.main",
            color: "primary.dark",
            marginBottom: "1rem",
            fontSize: "1.2rem",
            fontWeight: 700,
            display: "flex",
            justifyContent: "center",
            width: "fit-content",
            padding: ".5rem 2rem",
            borderRadius: "5px",
            margin: "0 auto",
          }}
        >
          Packs con Caja Automática
        </Typography>
        <Carousel
          showThumbs={false}
          showStatus={false}
          showIndicators={false}
          infiniteLoop
          useKeyboardArrows
          centerMode
          centerSlidePercentage={centerSlidePercentage}
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                style={{
                  position: "absolute",
                  zIndex: 20,
                  top: "50%",
                  transform: "translateY(-50%)",
                  left: -25,
                  color: "black",
                  border: "none",
                  padding: "10px",
                }}
              >
                <KeyboardArrowLeftIcon  sx={{color: "black", fontSize: "3rem"}} />

              </button>
            )
          }
          renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                style={{
                  position: "absolute",
                  zIndex: 20,
                  top: "50%",
                  transform: "translateY(-50%)",
                  right: -25,
                  color: "black",
                  border: "none",
                  padding: "10px",
                }}
              >
                <ChevronRightIcon sx={{color: "black", fontSize: "3rem"}} />
              </button>
            )
          }
        >
          {packsAutomat.map((pack, index) => (
            <CardPack {...pack} key={index} />
          ))}
        </Carousel>
      </Box>
    </DashboardLayout>
  );
}

export default Dashboard;
