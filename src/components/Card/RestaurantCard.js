import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Typography from "@mui/material/Typography";

const RestaurantCard = ({ restaurant }) => {
  return (
    <Card sx={{ maxWidth: 345, margin: "auto" }}>
      <CardMedia
        component="img"
        height="300"
        image={restaurant.image}
        alt={restaurant.name}
        sx={{ objectFit: "cover" }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" align="center" component="div">
          {restaurant.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" sx={{ margin: "auto" }}>
          {restaurant.favorite ? (
            <FavoriteIcon sx={{ color: "#f00" }} />
          ) : (
            <FavoriteIcon />
          )}
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default RestaurantCard;
