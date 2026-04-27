import './App.css';

const rspackRsc = import.meta.rspackRsc;

export const getCssNodes = () => rspackRsc.loadCss('/ignored.css');

export const App = async () => {
	return <h1>RSC App</h1>;
};
