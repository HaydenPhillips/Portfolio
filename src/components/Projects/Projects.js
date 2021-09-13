import React, { useState, Fragment } from 'react';
import '../../CSS/Projects/projects.css';
import PlayfulRectangle from './PlayfulRectangle';
import Data from './Data';

const Projects = () => {
	const [data] = useState(Data);
	return (
		<Fragment>
			<div className='page-wrap'>
				<h1>projects</h1>
				<div className='projects-grid'>
					<div className='col one'>
						<PlayfulRectangle
							componentName={data[0].componentName}
							name={data[0].name}
							tags={data[0].tags}
							color={data[0].color}
						/>
						<PlayfulRectangle
							componentName={data[1].componentName}
							name={data[1].name}
							tags={data[1].tags}
							color={data[1].color}
						/>
					</div>

					<div className='col two'>
						<PlayfulRectangle
							componentName={data[2].componentName}
							name={data[2].name}
							tags={data[2].tags}
							color={data[2].color}
						/>
						<PlayfulRectangle
							componentName={data[3].componentName}
							name={data[3].name}
							tags={data[3].tags}
							color={data[3].color}
						/>

						<PlayfulRectangle
							componentName={data[4].componentName}
							name={data[4].name}
							tags={data[4].tags}
							color={data[4].color}
						/>
					</div>
					<div className='col three'>
						<PlayfulRectangle
							componentName={data[5].componentName}
							name={data[5].name}
							tags={data[5].tags}
							color={data[5].color}
						/>
						<PlayfulRectangle
							componentName={data[6].componentName}
							name={data[6].name}
							tags={data[6].tags}
							color={data[6].color}
						/>
						<PlayfulRectangle
							componentName={data[7].componentName}
							name={data[7].name}
							tags={data[7].tags}
							color={data[7].color}
						/>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default Projects;
