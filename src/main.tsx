import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from '../src/app.tsx'
import '../src/index.css'

createRoot(document.getElementById('root') as HTMLElement).render(
	<StrictMode>
		<App />
	</StrictMode>,
)