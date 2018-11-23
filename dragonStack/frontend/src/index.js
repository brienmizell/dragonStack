import React from 'react';
import { render } from 'react-dom';
import Generation from './componets/Generation';
import Dragon from './componets/Dragon';

render(
	<div>
		<h2>Dragon Stack from React</h2>
		<Generation />
		<Dragon />
	</div>,
	document.getElementById('root')
);
