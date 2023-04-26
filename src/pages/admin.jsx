import Grid from "@mui/material/Grid";
import SearchInput from "../components/@extended/search-input";
import DashboardCard from "components/dashboard-card";
import AdminsList from "components/admin-management/admins-list";
import { useMediaQuery } from "@mui/material";
import AddAdminModal from "components/admin-management/add-admin-modal";

export default function AdminManagement() {
  const isMobileView = useMediaQuery("(max-width:767px)");

  return (
    <>
      <Grid container spacing={1}>
        <Grid item sm={3} xs={6}>
          <SearchInput />
        </Grid>
        {!isMobileView && (
          <>
            <Grid item sm={3}></Grid>
            <Grid item sm={3}></Grid>
          </>
        )}
        <Grid
          item
          sm={3}
          xs={6}
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <AddAdminModal />
        </Grid>
      </Grid>
      <DashboardCard isAutoHeight padding={0}>
        <AdminsList />
      </DashboardCard>
    </>
  );
}
