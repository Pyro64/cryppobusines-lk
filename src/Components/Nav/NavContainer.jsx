import Nav from "./Nav";
import { connect } from "react-redux";


let mapStateToProps = (state) => {
    debugger
    return {
        nav: state.nav,
    }
}

const NavContainer = connect(mapStateToProps)(Nav);

export default NavContainer;