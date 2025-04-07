import AuthLayout from "./components/auth/layout";
import { Route, Routes } from "react-router-dom";
import AuthLogin from "./components/pages/auth/login";
import AuthRegister from "./components/pages/auth/register";
import AdminLayout from "./components/admin-view/layout";
import AdminDashboard from "./components/pages/admin-view/dashboard";
import AdminProducts from "./components/pages/admin-view/products";
import AdminFeatures from "./components/pages/admin-view/features";
import ShoppingLayout from "./components/shopping-view/layout";
import NotFound from "./components/pages/not-found";
import ShoppingHome from "./components/pages/shopping-view/home";
import ShoppingListing from "./components/pages/shopping-view/listing";
import ShoppingAccount from "./components/pages/shopping-view/account";
import ShoppingCheckout from "./components/pages/shopping-view/checkout";
import CheckAuth from "./components/common/check-auth";
import UnauthPage from "./components/pages/unauth-page";
import { useDispatch, useSelector } from "react-redux";
import { checkAuth } from "./store/authSlice";
import { Skeleton } from "@/components/ui/skeleton";
import { useEffect } from "react";
import AdminOrdersView from "./components/pages/admin-view/orders";

function App() {
  const { user, isAuthenticated, isLoading } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  if (isLoading) return <Skeleton className="w-[800] bg-black h-[600px]" />;
  return (
    <div className="flex flex-col overflow-hidden bg-white">
      <Routes>
        <Route
          path="/"
          element={
            <CheckAuth
              isAuthenticated={isAuthenticated}
              user={user}
            ></CheckAuth>
          }
        />
        <Route
          path="/auth"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <AuthLayout />
            </CheckAuth>
          }
        >
          <Route path="login" element={<AuthLogin />} />
          <Route path="register" element={<AuthRegister />} />
        </Route>
        <Route
          path="/admin"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <AdminLayout />
            </CheckAuth>
          }
        >
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="products" element={<AdminProducts />} />
          <Route path="features" element={<AdminFeatures />} />
          <Route path="orders" element={<AdminOrdersView />} />
        </Route>
        <Route
          path="/shop"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <ShoppingLayout />
            </CheckAuth>
          }
        >
          <Route path="home" element={<ShoppingHome />} />
          <Route path="listing" element={<ShoppingListing />} />
          <Route path="account" element={<ShoppingAccount />} />
          <Route path="checkout" element={<ShoppingCheckout />} />
        </Route>
        <Route path="/unauth-page" element={<UnauthPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
