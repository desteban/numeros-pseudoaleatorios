import React from 'react';
import { Link } from 'gatsby';

export default function Enlace({ href, blanck, className, onClick, children }) {
	return (
		<Link
			to={href}
			target={blanck ? '_blank' : ''}
			className={className}
			onClick={() => onClick}
		>
			{children}
		</Link>
	);
}
