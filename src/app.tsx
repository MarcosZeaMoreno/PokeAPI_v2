import './app.css'
import LeftComponent from './body/LeftComponent'
import RightComponent from './body/RightComponent'
import logo from './assets/pokeball.svg'
import { FC, useState } from 'react'

const App: FC = () => {
	const [prompt, setPrompt] = useState('')

	return (
	<>
		<div className="container">
			<header className="header">
				<img src={logo} alt="Logo" className="logo"/>
				<h1 className="title">PokeAPI</h1>
			</header>
		</div>
		<div className="content">
			<div className="left-div">
				<LeftComponent setPrompt={setPrompt} />
			</div>
			<div className="right-div">
				<RightComponent prompt={prompt} />
			</div>
    	</div>
	</>
	)
}

export default App