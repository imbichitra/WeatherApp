import React from 'react';

const Form = (props)=>(
	<div>
		<form onSubmit={props.getWether}>
			<input type="text" name="city" placeholder="City..."/>
			<input type="text" name="country" placeholder="Contry..."/>
			<button type="submit">Submit</button>
		</form>
	</div>
)

export default Form;