import InputBlock from './InputBlock';

function InputList(props) {
	return (
		<>
			{props.inputInfoObj.propertyArr.map((item, i) => {
				return (
					<InputBlock
						labelTextArr={props.inputInfoObj.labelTextArr[i]}
						placeholderTextArr={props.inputInfoObj.placeholderTextArr[i]}
						propertyArr={props.inputInfoObj.propertyArr[i]}
						setInfo={props.setInfo}
						info={props.info}
						key={i}
					/>
				);
			})}
		</>
	);
}

export default InputList;
