import './app.css'
import LeftComponent from './body/LeftComponent'
import RightComponent from './body/RightComponent'
import logo from './assets/pokeball.svg'
import { FC } from 'react'

const App: FC = () => {

	fetch('/api/test').then(data => data.json()).then(json => console.log(json))

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
				<LeftComponent />
			</div>
			<div className="right-div">
				<RightComponent />
			</div>
    	</div>
	</>
	)
}

export default App