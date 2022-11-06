import { Fragment, useContext } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown";
import CartIcon from "../../components/cart-icon/cart-icon";
import { CartContext } from "../../contexts/cart.context";
import { UserContext } from "../../contexts/user.contaxt";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import {
  StyledLink,
  StyledNavigation,
  StyledNavLink,
  StyledNavLinks,
} from "./navigation.styles";

const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);
  const signOutHandler = async () => {
    await signOutUser();
    setCurrentUser(null);
  };
  return (
    <Fragment>
      <StyledNavigation>
        <StyledLink to="/">
          <CrwnLogo className="logo"></CrwnLogo>
        </StyledLink>
        <StyledNavLinks>
          <StyledNavLink to="/shop">SHOP</StyledNavLink>
          {currentUser ? (
            <StyledNavLink as="span" onClick={signOutHandler}>
              SIGN OUT
            </StyledNavLink>
          ) : (
            <StyledNavLink to="/auth">SIGN IN</StyledNavLink>
          )}
          <CartIcon />
        </StyledNavLinks>
        {isCartOpen && <CartDropdown />}
      </StyledNavigation>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
