import React, { useState, Fragment } from 'react';
import '../../CSS/Projects/projects.css';
import Cell from './Cell';
import Data from './Data';

const Projects = () => {
	const [data] = useState(Data);
	return (
		<Fragment>
			<div className='page-wrap'>
				<h1>projects</h1>
				<div className='projects-grid'>
					<div className='col one'>
						<Cell
							componentName={data[0].componentName}
							name={data[0].name}
							tags={data[0].tags}
							color={data[0].color}
						/>
					</div>

					<div className='col two'>
						<Cell
							componentName={data[2].componentName}
							name={data[2].name}
							tags={data[2].tags}
							color={data[2].color}
						/>
						<Cell
							componentName={data[3].componentName}
							name={data[3].name}
							tags={data[3].tags}
							color={data[3].color}
						/>
					</div>

					<div className='col three'>
						<Cell
							componentName={data[4].componentName}
							name={data[4].name}
							tags={data[4].tags}
							color={data[4].color}
						/>
						<Cell
							componentName={data[6].componentName}
							name={data[6].name}
							tags={data[6].tags}
							color={data[6].color}
						/>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default Projects;
