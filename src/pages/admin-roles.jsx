import Grid from "@mui/material/Grid";
import SearchInput from "../components/@extended/search-input";
import DashboardCard from "components/dashboard-card";
import AdminRolesList from "components/admin-management/admin-roles.list";
import { useMediaQuery } from "@mui/material";
import AddAdminRolesModal from "components/admin-management/add-admin-role-modal";

export default function AdminRoles() {
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
          <AddAdminRolesModal />
        </Grid>
      </Grid>
      <DashboardCard isAutoHeight padding={0}>
        <AdminRolesList />
      </DashboardCard>
    </>
  );
}
