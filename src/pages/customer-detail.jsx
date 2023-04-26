import OrderTable from "components/customer-components/table";
import CustomerDetailTab from "components/customer-components/customer-detail-tabs";
import CustomerDetailTopBar from "components/customer-components/customer-detail-top-bar";

export default function CustomerDetail() {
  return (
    <>
      <CustomerDetailTopBar />
      <CustomerDetailTab />
      <OrderTable />
    </>
  );
}
