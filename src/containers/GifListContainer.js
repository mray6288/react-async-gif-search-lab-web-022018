import React from 'react'

import GifSearch from '../components/GifSearch'

import GifList from '../components/GifList'

export default class GifListContainer extends React.Component {
	constructor() {
		super()
		this.state = {
			gifs: [],
			searchTerm: ''
		}
	}

	fetchGifs = (e) => {
		e.preventDefault()
		fetch(`http://api.giphy.com/v1/gifs/search?q=${this.state.searchTerm}&api_key=dc6zaTOxFJmzC`,
			).then(r=>r.json()).then(json=>this.setState({gifs: json.data.slice(0, 3)}))
	}

	onChangeText = (e) => {
		this.setState({
			searchTerm: e.target.value
		})
	}


	render() {


		return (
			<div>
				<GifSearch submitSearch={this.fetchGifs} onChangeText={this.onChangeText}/>
				<GifList gifs={this.state.gifs}/>
			</div>
			)
	}

} 