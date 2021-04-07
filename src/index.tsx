import React from 'react';
import Helmet from 'react-helmet';

const Wall = (props: { id: string, darkMode: "on" | "off" }) => {
	return (
		<>
			<Helmet
				script={[{ src: 'https://app.vouchpanel.com/js/embed.js' }]}
			/>
			<div className="vouchpanel-publish" dark-mode={props.darkMode} data-wall={props.id}></div>
		</>
	);
};

export default Wall;
