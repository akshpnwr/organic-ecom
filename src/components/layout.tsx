import { ReactNode } from "react";
import Footer from "./footer";
import Navigation from "./navigation/navigation";

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <Navigation />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
