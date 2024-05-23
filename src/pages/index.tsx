import Button from '@mui/material/Button';
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
    <h1>Hello World</h1>
    <Button variant="contained">Hello world</Button>
    </div>
  )
}
