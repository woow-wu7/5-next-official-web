import Navbar from "./NavBar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div style={{ height: "100%" }}>
      <Navbar />
      <main style={{ height: "100%" }}>{children}</main>
      <Footer />
    </div>
  );
}
