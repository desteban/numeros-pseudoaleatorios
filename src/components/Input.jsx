import React from 'react';

export default function Input({
	placeholder,
	type = 'number',
	id,
	onChange,
	value,
	autoComplete = 'off',
	onKeyDown = null
}) {
	return (
		<div className="input round">
			<label htmlFor={id} className="click">
				{placeholder}
			</label>
			<input
				id={id}
				name={id}
				type={type}
				placeholder={placeholder}
				value={value}
				onChange={(event) => {
					onChange(event);
				}}
				autoComplete={autoComplete}
				onKeyDown={(event) => onKeyDown(event)}
			/>
		</div>
	);
}
