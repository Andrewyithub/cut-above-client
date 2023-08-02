import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Hero() {
  const main =
    "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80";
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.4)), url(${main})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        aspectRatio: "16 / 9",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div
        style={{
          marginInline: "auto",
          maxWidth: "600px",
        }}
      >
        <h1 style={{ textAlign: "center" }}>Experience a Cut Above The Rest</h1>
        <Typography
          variant="body2"
          align="center"
          sx={{ fontWeight: { xs: 400, sm: 500 } }}
          paragraph
        >
          If you&apos;re looking for a top-quality haircut service in a
          welcoming and relaxing environment, look no further than our
          barbershop. Book your appointment today and let us help you achieve
          the perfect haircut!
        </Typography>
        <div style={{ textAlign: "center" }}>
          <Link to="/reserve">
            <Button variant="contained">Schedule an appointment</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}