import './LeftComponent.css'
import { FC } from 'react'

const LeftComponent: FC = () => {
	return (
		<div>
			<form action="">
				<label htmlFor="name">Name</label>
				<input type="text" id="name" placeholder="Name"/>
				<label htmlFor="type">Type</label>
				<select name="select" id="type">
					<option value="fire">Fire</option>
					<option value="wind">Wind</option>
				</select>
					<label htmlFor="description">Description</label>
				<textarea id="description" placeholder="Description"/>
				<label htmlFor="Range">Guidance</label>
				<input id="Range" type="range"></input>
			</form>
		</div>
	)
}

export default LeftComponent