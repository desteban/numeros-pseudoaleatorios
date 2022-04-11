import React from 'react';
import { Link } from 'gatsby';

export default function Enlace({ href, texto, blanck, className, onClick }) {
	return (
		<Link
			to={href}
			target={blanck ? '_blank' : ''}
			className={className}
			onClick={() => onClick}
		>
			{`${texto}`}
		</Link>
	);
}
