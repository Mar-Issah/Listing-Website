import React from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

// the children is whatever that will be in b/n coming from wherever this component will be used
const Layout = ({ children }) => {
	return (
		<div className="content">
			<Navbar />
			{children}
			<Footer />
		</div>
	);
};

export default Layout;
