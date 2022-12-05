import { Fragment, useContext } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown";
import CartIcon from "../../components/cart-icon/cart-icon";
import { CartContext } from "../../contexts/cart.context";
import { selectCurrentUser } from "../../store/user/user.selector";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import {
  StyledLink,
  StyledNavigation,
  StyledNavLink,
  StyledNavLinks
} from "./navigation.styles";

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser)
  const { isCartOpen } = useContext(CartContext);
  
  return (
    <Fragment>
      <StyledNavigation>
        <StyledLink to="/">
          <CrwnLogo className="logo"></CrwnLogo>
        </StyledLink>
        <StyledNavLinks>
          <StyledNavLink to="/shop">SHOP</StyledNavLink>
          {currentUser ? (
            <StyledNavLink as="span" onClick={signOutUser}>
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
