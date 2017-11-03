import React, { PropTypes } from 'react';

const Jumbotron = ({ data }) => {
	return (

		<section className="row">
			{data.map((item, index) => {
					//const imageUrl = require(`file-loader!${item.src}`);
				return (

					<div key={index} className="col-md-6 col-xs-6">
						<h3>{item.title}</h3>
						<br />
						<p>"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
						"There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."

						What is Lorem Ipsum?
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
					</div>
				);
			})}
		</section>
	);
};


Jumbotron.propTypes = {
	data: PropTypes.array.isRequired
};

export default Jumbotron;
