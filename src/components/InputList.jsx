import InputBlock from './InputBlock';

function InputList(props) {
	return (
		<>
			{props.propertyArr.map((item, i) => {
				return (
					<InputBlock
						labelTextArr={props.labelTextArr[i]}
						placeholderTextArr={props.placeholderTextArr[i]}
						propertyArr={props.propertyArr[i]}
						setInfo={props.setInfo}
						info={props.info}
						key={Math.floor(Math.random() * (9999999 - 1 + 1)) + 1}
					/>
				);
			})}
		</>
	);
}

export default InputList;
