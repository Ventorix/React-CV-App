function InputLabel(props) {
	return (
		<label htmlFor={props.htmlFor}>
			<span style={{ fontSize: '20px', fontWeight: 600 }}>{props.text}</span>
			<span style={{ fontSize: '12px', color: '#9ca3af', marginLeft: '8px' }}>
				{props.recommendText}
			</span>
		</label>
	);
}

export default InputLabel;
