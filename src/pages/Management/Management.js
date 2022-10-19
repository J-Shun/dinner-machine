import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RestaurantCard from "../../components/Card/RestaurantCard";
import restaurants from "../../data/restaurants";

export default function Management() {
  return (
    <>
      <main>
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="lg">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Restaurant Management
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              Add the restaurants or remove them
            </Typography>
            {/* Some form to add restaurant */}
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained">
                <AddCircleIcon sx={{ mr: 1 }} />
                Add Restaurant
              </Button>
            </Stack>
          </Container>
        </Box>

        <Container sx={{ py: 8 }} maxWidth="lg">
          <Grid container spacing={4}>
            {restaurants.map((restaurant) => (
              <Grid item key={restaurant.id} xs={12} sm={6} md={4}>
                <RestaurantCard restaurant={restaurant} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </>
  );
}
