import SelectOption from './SelectOption';
import { Select } from './SelectStyle';

function SelectImgType(props) {
	const paths = ['/react.svg', '/vite.svg'];
	return (
		<Select required {...props}>
			<SelectOption value='' disabled name={'Select img'} />
			<SelectOption value={paths[0]} name={'React Icon'} />
			<SelectOption value={paths[1]} name={'Vite Icon'} />
		</Select>
	);
}

export default SelectImgType;
