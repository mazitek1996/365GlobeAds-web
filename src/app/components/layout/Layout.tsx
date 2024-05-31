

// // components/layout/Layout.tsx

// import React, { ReactNode } from "react";
// import { Header } from "./header";
// import Footer from "./footer";

// interface LayoutProps {
//   children: ReactNode;
// }

// const Layout: React.FC<LayoutProps> = ({ children }) => {
//   return (
//     <>
//       <Header />
//       {children}
//       <Footer />
//     </>
//   );
// };

// export default Layout;

// components/layout/Layout.tsx

import React, { ReactNode } from "react";
import  Header  from "./header";
import Footer from "./footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
