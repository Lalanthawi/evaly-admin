import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";

const fontSize = 18;

const dashboard = {
  id: "group-dashboard",
  title: "MAIN MENU",
  type: "group",
  children: [
    {
      id: "dashboard",
      title: "Dashboard",
      type: "item",
      url: "/dashboard",
      iconSelected: "/assets/smart-home.svg",
      unSelectedIcon: "/assets/smart-home-un.svg",
      breadcrumbs: false,
      isIcon: false,
    },
    {
      id: "order-management",
      title: "Order Management",
      type: "item",
      url: "/order-management",
      iconSelected: "/assets/shopping-cart.svg",
      unSelectedIcon: "/assets/shopping-cart-un.svg",
      breadcrumbs: false,
      isIcon: false,
    },
    {
      id: "customers",
      title: "Customers",
      type: "item",
      url: "/customers",
      iconSelected: "/assets/customer-selected.svg",
      unSelectedIcon: "/assets/customer-unselected.svg",
      breadcrumbs: false,
      isIcon: false,
    },
    {
      id: "coupon-code",
      title: "Coupon Code",
      type: "item",
      url: "/coupon-code",
      iconSelected: "/assets/coupon-sel.svg",
      unSelectedIcon: "/assets/coupon-un.svg",
      breadcrumbs: false,
      isIcon: false,
    },
    {
      id: "transactions",
      title: "Transactions",
      type: "item",
      url: "/transactions",
      iconSelected: "/assets/transaction-selected.svg",
      unSelectedIcon: "/assets/transaction-un.svg",
      breadcrumbs: false,
      isIcon: false,
    },
    {
      id: "categories",
      title: "Categories",
      type: "item",
      url: "/categories",
      iconSelected: (
        <FontAwesomeIcon icon={faLayerGroup} style={{ fontSize }} />
      ),
      unSelectedIcon: (
        <FontAwesomeIcon icon={faLayerGroup} style={{ fontSize }} />
      ),
      breadcrumbs: false,
      isIcon: true,
    },
    {
      id: "brand",
      title: "Brand",
      type: "item",
      url: "/brands-management",
      iconSelected: "/assets/star-sel.svg",
      unSelectedIcon: "/assets/star.svg",
      breadcrumbs: false,
      isIcon: false,
    },
  ],
};

export default dashboard;
