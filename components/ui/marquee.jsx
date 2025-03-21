import * as React from "react";

const Marquee = ({ children, className }) => {
	return (
		<marquee
			className={`flex space-x-8 bg-gray-50 py-6 text-4xl uppercase ${className}`}
		>
			{children}
		</marquee>
	);
};

export default Marquee;
