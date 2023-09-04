function Slider(props) {
	return (
		<div className='slider-block'>
			<label htmlFor='countSlider'>Add card count</label>
			<input type='range' id='countSlider' {...props} min='1' max='3'></input>
			<p className='slider-counter'>{props.value}</p>
		</div>
	);
}

export default Slider;
