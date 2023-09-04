import { Select } from './SelectStyle';
import SelectOption from './SelectOption';

function SelectSort(props) {
	return (
		<Select {...props}>
			<SelectOption value='' disabled name={'Select sort by'} />
			<SelectOption value='input' name={'Sort by input'} />
			<SelectOption value='title' name={'Sort by title'} />
			<SelectOption value='id' name={'Sort by id'} />
		</Select>
	);
}

export default SelectSort;
