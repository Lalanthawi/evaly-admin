import { Route, Routes } from "react-router-dom";
import Dashboard from "pages/dashboard";
import OrderManagement from "pages/order-management";
import Customers from "pages/customers";
import CustomerDetail from "pages/customer-detail";
import Transactions from "pages/transactions";
import TransactionDetail from "pages/transaction-detail";
import Categories from "pages/categories";
import Products from "pages/products";
import CouponCode from "pages/coupon-code";
import CreateCoupon from "pages/create-coupon";
import AdminManagement from "pages/admin";
import AdminRoles from "pages/admin-roles";
import AddProducts from "pages/add-product";
import BrandsManagement from "pages/brands-management";

const DashboardRoutes = () => {
  return (
    <Routes>
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="order-management" element={<OrderManagement />} />
      <Route path="customers" element={<Customers />} />
      <Route path="customer-detail" element={<CustomerDetail />} />
      <Route path="transactions" element={<Transactions />} />
      <Route path="transaction-detail" element={<TransactionDetail />} />
      <Route path="categories" element={<Categories />} />
      <Route path="product-list" element={<Products />} />
      <Route path="coupon-code" element={<CouponCode />} />
      <Route path="create-coupon" element={<CreateCoupon />} />
      <Route path="manage-admin" element={<AdminManagement />} />
      <Route path="admin-roles" element={<AdminRoles />} />
      <Route path="add-products" element={<AddProducts />} />
      <Route path="brands-management" element={<BrandsManagement />} />
    </Routes>
  );
};
export default DashboardRoutes;
