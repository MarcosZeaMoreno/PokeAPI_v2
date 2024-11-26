import './LeftComponent.css'
import { FC, useState } from 'react'

interface LeftComponentProps {
	setPrompt: (prompt: string) => void
}

const LeftComponent: FC<LeftComponentProps> = ({ setPrompt }) => {
	const [name, setName] = useState('')
	const [type, setType] = useState('')
	const [description, setDescription] = useState('')
	const [guidance, setGuidance] = useState(50)

	const handleGenerate = () => {
		const prompt = `Create a new pokemon style with the following preferences: Name: ${name}, Type: ${type}, Description: ${description}, Guidance: ${guidance}`
		setPrompt(prompt)
	}

	return (
		<div>
			<form action="">
				<label htmlFor="name">Name</label>
				<input
					type="text"
					id="name"
					placeholder="Name"
					value={name}
					onChange={(e) => setName((e.target as HTMLInputElement).value || '')}
				/>
				<label htmlFor="type">Type</label>
				<select
					name="select"
					id="type"
					value={type}
					onChange={(e) => setType((e.target as HTMLSelectElement).value || '')}
				>
					<option value="fire">Fire</option>
					<option value="water">Water</option>
					<option value="grass">Grass</option>
					<option value="electric">Electric</option>
					<option value="ice">Ice</option>
					<option value="fighting">Fighting</option>
					<option value="poison">Poison</option>
					<option value="ground">Ground</option>
					<option value="flying">Flying</option>
					<option value="psychic">Psychic</option>
					<option value="bug">Bug</option>
					<option value="rock">Rock</option>
					<option value="ghost">Ghost</option>
					<option value="dragon">Dragon</option>
					<option value="dark">Dark</option>
					<option value="steel">Steel</option>
					<option value="fairy">Fairy</option>
					<option value="normal">Normal</option>
				</select>
				<label htmlFor="description">Description</label>
				<textarea
					id="description"
					placeholder="Description"
					value={description}
					onChange={(e) => setDescription((e.target as HTMLTextAreaElement).value || '')}
				/>
				<label htmlFor="Range">Guidance</label>
				<input
					id="Range"
					type="range"
					value={guidance}
					onChange={(e) => setGuidance(Number((e.target as HTMLInputElement).value || 50))}
				/>
				<button type="button" onClick={handleGenerate}>Generate Image</button>
			</form>
		</div>
	)
}

export default LeftComponent