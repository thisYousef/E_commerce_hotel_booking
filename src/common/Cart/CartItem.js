import {

  Card,
  CardContent,
  Typography,
  IconButton,
  Stack,
  Divider,
  CardMedia,
} from "@mui/material";
import { Add, Remove } from "@mui/icons-material";

const CartItem = ({ name, amount, price, image, onRemove, onAdd }) => {
  const formattedPrice = `${price}`;

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        alignItems: "center",
        justifyContent: "space-between",
        p: 2,
        mb: 2,
        borderRadius: 3,
        boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
        transition: "0.3s",
        "&:hover": { boxShadow: "0 4px 20px rgba(0,0,0,0.15)" },
      }}
    >
      {/* Image Section */}
      <CardMedia
        component="img"
        sx={{
          width: { xs: "100%", sm: 160 },
          height: { xs: 180, sm: 120 },
          objectFit: "cover",
          borderRadius: 2,
        }}
        image={image}
        alt={name}
      />

      {/* Info Section */}
      <CardContent sx={{ flex: 1, ml: { sm: 2 }, mt: { xs: 1, sm: 0 } }}>
        <Typography variant="h6" fontWeight={600}>
          {name}
        </Typography>

        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          mt={1}
        >
          <Typography variant="body2" color="text.secondary">
            Nights: <strong>{amount}</strong>
          </Typography>
          <Typography variant="subtitle1" color="primary" fontWeight={600}>
            {formattedPrice}
          </Typography>
        </Stack>
      </CardContent>

      <Divider orientation="vertical" flexItem sx={{ mx: 2, display: { xs: "none", sm: "block" } }} />

      {/* Actions */}
      <Stack direction="row" spacing={1} alignItems="center">
        <IconButton
          color="primary"
          onClick={onRemove}
          sx={{
            bgcolor: "grey.100",
            "&:hover": { bgcolor: "grey.200" },
            borderRadius: "50%",
          }}
          aria-label={`Remove one ${name}`}
        >
          <Remove />
        </IconButton>

        <Typography variant="body1" sx={{ mx: 1, fontWeight: 500 }}>
          {amount}
        </Typography>

        <IconButton
          color="primary"
          onClick={onAdd}
          sx={{
            bgcolor: "grey.100",
            "&:hover": { bgcolor: "grey.200" },
            borderRadius: "50%",
          }}
          aria-label={`Add one more ${name}`}
        >
          <Add />
        </IconButton>
      </Stack>
    </Card>
  );
};

export default CartItem;
