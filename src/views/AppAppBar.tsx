import Box from "@mui/material/Box";
import Image from "next/image";
import AppBar from "../components/AppBar";
import Toolbar from "../components/Toolbar";

function AppAppBar() {
  return (
    <>
      <AppBar position="fixed">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Image src="/logo-drive-fluecy.svg" alt="logo" style={{ width: "100%", height: "100%", padding: "0.5rem" }} width={100} height={100} />
          <Box sx={{ flex: 1 }} />
          <Box sx={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
}

export default AppAppBar;
