import React from 'react'

const GifList = (props) => {
	if (props.gifs.length === 0){
		return ''
	}
	let gifUrls = props.gifs.map(gif => {
		return <li><img src={gif.images.original.url} alt='gif'/></li>
	})
	
	return (
		<ul>
			{gifUrls}
		</ul>
		)

}

export default GifList