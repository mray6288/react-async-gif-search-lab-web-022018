import React from 'react'

const GifSearch = (props) => {

	return (
		<form onSubmit={props.submitSearch}>
			<input type='text' onChange={props.onChangeText} />
			<input type='submit' value='Search Gifs'/>
		</form>
		)

}

export default GifSearch