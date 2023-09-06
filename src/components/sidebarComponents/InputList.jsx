import InputBlock from './InputBlock';

function InputList(props) {
	return (
		<>
			{props.InfoObj.inputTypesArr.map((item, i) => {
				return (
					<InputBlock
						labelTextArr={props.InfoObj.labelTextArr[i]}
						placeholderTextArr={props.InfoObj.placeholderTextArr[i]}
						propertyArr={props.InfoObj.propertyArr[i]}
						type={props.InfoObj.inputTypesArr[i]}
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
