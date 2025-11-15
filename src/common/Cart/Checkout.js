import { Card, CardContent, Stack, Typography } from "@mui/material";
import classes from "./Cart.module.css";

const Checkout = ({ totalAmount, hasItems, children }) => {
  return (
    <div className={classes.checkout}>
      {/* Cart Summary Section */}

      {/* Cart component  */}
      <div className={classes.content}>
        {children}
      </div>
      <div className={classes.summary}>
        {hasItems && (
          <>
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


              {/* Info Section */}
              <CardContent sx={{ flex: 1, ml: { sm: 2 }, mt: { xs: 1, sm: 0 } }}>
                <Typography variant="h6" fontWeight={600}>
                  <h2>Booking Summary</h2>
                </Typography>

                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  mt={1}
                >
                  <Typography variant="body2" color="text.secondary">
                    <span>Items Total:</span>
                    <span>{totalAmount}</span>
                  </Typography>



                </Stack>
                <Stack>
                  <Typography variant="body2" color="text.secondary">
                    <span>taxes:</span>
                    <span>{totalAmount}</span>
                  </Typography>

                </Stack>
                <Stack>
                  <Typography variant="body2" color="text.secondary">
                    <span>platform fees:</span>
                    <span>{totalAmount}</span>
                  </Typography>

                </Stack>
                <Stack>
                  <Typography variant="body2" color="text.secondary">
                    <span>service fees:</span>
                    <span>{totalAmount}</span>
                  </Typography>

                </Stack>
                <Stack>
                  <Typography variant="body2" color="text.secondary">
                    <span>Items Total:</span>
                    <span>{totalAmount}</span>
                  </Typography>
                </Stack>
              </CardContent>

            </Card>
          </>
        )}
      </div>
    </div>
  );
};

export default Checkout;