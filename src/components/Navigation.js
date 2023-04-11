import logo from "../images/logo.svg"
import Button from "./Button";
import { GoThreeBars } from "react-icons/go";
function Navigation() {

    return <nav className="">

        <div className="row align-items-center p-0 ms-0">
            <div className="col col-md-2">
                <img src={logo} alt="" />
            </div>
            <div className="col col-md-8 d-flex justify-content-end justify-content-md-center p-0 m-0">
                <div className="text-muted d-none d-md-flex w-50 justify-content-between border-gradient p-0 m-0">
                    <p >Home</p>
                    <p>About</p>
                    <p>Contact</p>
                    <p>Blog</p>
                    <p>Careers</p>
                </div>
                <div className="d-md-none fs-2"><GoThreeBars /></div>
            </div>
            <div className="d-none col-md-2 d-md-flex align-items-end p-0 m-0">
                <Button />
            </div>
        </div>

    </nav>
}
export default Navigation;