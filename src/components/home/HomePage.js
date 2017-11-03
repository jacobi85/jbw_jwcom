import React from 'react';
import { Link } from 'react-router';
import BlogSection from './BlogSection';

const resources = {
	blogsection: [
		{
			title: 'PositivelyJacob',
			url: 'http://positivelyjacob.com',
			src: './westmanpro.jpg',
			tags: ['Stand up paddling', 'Personal Development', 'Lifestyle', 'Health', 'Science', 'Mindfulness']
		},
		{
			title: 'WestmanPro',
			url: 'http://westmanpro.com',
			src: './positivelyjacob.jpg',
			tags: ['JavaScript', 'Html', 'CSS', 'React', 'TypeScript', 'Node', 'Web Development', 'Programming']
		}
	]
};


class HomePage extends React.Component {

	render() {
		return (
			<div>
				<div className="row header">
					<div className="jumbotron">
						<section className="jumbotron-inner">
							<h1>Jacob Westman</h1>
							<p>Frontend Developer | Stand up paddler | Entrepreneur</p>
						</section>
					</div>
					<img className="header-image" src={require('../../../assets/layout/ocean-header.jpg')} alt="Ocean meets the sand" />
					<div className="header-happy-line header__curve"></div>
				</div>
				<BlogSection data={resources.blogsection} />
			</div>
		);
	}
}

export default HomePage;
