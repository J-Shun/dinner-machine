import { useState } from "react";
import { Box, Button, Typography, Container } from "@mui/material";
import RestaurantCard from "../../components/Card/RestaurantCard";
import getRandomIndex from "../../utilities/getRandom";
import restaurants from "../../data/restaurants";

const Decide = () => {
  const [randomDinner, setRandomDinner] = useState(null);

  const decide = () => {
    const index = getRandomIndex(restaurants);
    console.log(restaurants[index]);
    setRandomDinner(index);
  };

  return (
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
            Decide Your Dinner
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center", m: 10 }}>
            <Button variant="contained" onClick={decide}>
              Random
            </Button>
          </Box>

          {Number.isInteger(randomDinner) && (
            <RestaurantCard restaurant={restaurants[randomDinner]} />
          )}
        </Container>
      </Box>
    </main>
  );
};

export default Decide;
