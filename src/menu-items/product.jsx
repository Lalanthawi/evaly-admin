import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPalette } from "@fortawesome/free-solid-svg-icons";

const fontSize = 18;

const product = {
  id: "group-product",
  title: "PRODUCTS",
  type: "group",
  children: [
    {
      id: "add-product",
      title: "Add Product",
      type: "item",
      url: "/add-products",
      iconSelected: "/assets/circle-plus-sel.svg",
      unSelectedIcon: "/assets/circle-plus-un.svg",
      breadcrumbs: false,
      isIcon: false,
    },
    {
      id: "product-list",
      title: "Product List",
      type: "item",
      url: "/product-list",
      iconSelected: "/assets/selected-product.svg",
      unSelectedIcon: "/assets/un-selected-product.svg",
      breadcrumbs: false,
      isIcon: false,
    },
    {
      id: "colors",
      title: "Colors",
      type: "item",
      url: "/colors",
      iconSelected: <FontAwesomeIcon icon={faPalette} style={{ fontSize }} />,
      unSelectedIcon: <FontAwesomeIcon icon={faPalette} style={{ fontSize }} />,
      breadcrumbs: false,
      isIcon: true,
    },
  ],
};

export default product;
