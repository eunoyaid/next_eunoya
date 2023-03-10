import Footer from "./footer";
import NavbarEunoya from "./navbar";
import Tabbar from "./tabbar";

export default function Layout({ children }) {
  return (
    <>
      <NavbarEunoya />
      <main>{children}</main>
      {/* <Tabbar /> */}
      <Footer/>
    </>
  );
}
