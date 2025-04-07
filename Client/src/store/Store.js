import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import adminProductSlice from "./admin/products-slice/index";
import shopProductsSlice from "./shop/products-slice/index";
import shopCartSlice from "./shop/cart-slice";
import commonFeatureSlice from "./common-slice";
import shopReviewSlice from "./shop/review-slice/index";
import shopAddressSlice from "./shop/address-slice";
import shopOrderSlice from "./shop/order-slice";
import adminOrderSlice from "./admin/order-slice";

const Store = configureStore({
  reducer: {
    auth: authReducer,
    adminProducts: adminProductSlice,
    adminOrder: adminOrderSlice,
    shopProducts: shopProductsSlice,
    shopCart: shopCartSlice,
    commonFeature: commonFeatureSlice,
    shopReview: shopReviewSlice,
    shopAddress: shopAddressSlice,
    shopOrder: shopOrderSlice,
  },
});

export default Store;
