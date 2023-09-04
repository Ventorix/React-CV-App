function SelectOption(props) {
	return (
		<option {...props} className='menu-option'>
			{props.name}
		</option>
	);
}

export default SelectOption;
