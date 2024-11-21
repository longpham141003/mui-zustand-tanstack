import { Route, Routes } from 'react-router-dom';
import PublicLayout from '../layout/PublicLayout';
import Home from '../views/Home';
import Shop from '../views/Shop';
import WishList from '../views/WishList/WishList';
import Cart from '../views/Cart/Cart';
import Detail from '../views/Detail/Detail';
import CheckOut from '../views/CheckOut/CheckOut';
import MyAccount from '../views/MyAccount/MyAccount';

function PublicRoutes() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/myaccount" element={<MyAccount />} />
      </Route>
    </Routes>
  );
}

export default PublicRoutes;
