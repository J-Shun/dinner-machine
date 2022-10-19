import { Container, Typography, Box } from "@mui/material";

const Home = () => {
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
            sx={{ mb: 8 }}
            gutterBottom
          >
            Welcome
          </Typography>
          <Typography variant="h4" align="center" sx={{ lineHeight: 2 }}>
            This is Dinner Machine
            <br />
            A great tool to help you decide what to eat tonight
            <br />
            ...or tomorrow night
            <br />
            ...or every night in the future!
          </Typography>
        </Container>
      </Box>
    </main>
  );
};

export default Home;
