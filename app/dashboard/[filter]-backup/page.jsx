import { Box, Card, CardContent } from "@mui/material";
import { fetchOrders } from "../../../actions/OrderActions";
const FilteredDashboard = async ({ params }) => {
  const { filter } = params;
  const user = await fetchOrders(filter);
  return (
    <Box sx={{ flexGrow: 1, px: 3 }}>
      <h3>{filter}</h3>
      <Card sx={{ maxWidth: 600 }}>
        <CardContent>
            this is card
        </CardContent>
      </Card>
    </Box>
  );
};

export default FilteredDashboard;
