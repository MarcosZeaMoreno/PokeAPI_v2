import './RightComponent.css'
import { FC, useEffect, useState } from 'react'

interface RightComponentProps {
	prompt: string
}

const RightComponent: FC<RightComponentProps> = ({ prompt }) => {
	const [imageUrl, setImageUrl] = useState('')
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		const generateImage = async () => {
			if (prompt) {
				setLoading(true)
				const response = await fetch(`https://image.pollinations.ai/prompt/${prompt}`)
				const imageBlob = await response.blob()
				const imageObjectUrl = URL.createObjectURL(imageBlob)
				setImageUrl(imageObjectUrl)
				setLoading(false)
			}
		}
		generateImage()
	}, [prompt])

	return (
		<div>
			<p>Output</p>
			<hr />
			{loading ? <p id="loading">Loading...</p> : imageUrl ? <img id="generated-img" src={imageUrl} alt="Generated" /> : <p id="loading">No image generated yet.</p>}
		</div>
	)
}

export default RightComponent