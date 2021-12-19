import React, { useState, Fragment } from 'react'
import PlayfulRectangle from './PlayfulRectangle'
import projectCardData from './Data'

const Projects = () => {
	const [data] = useState(projectCardData)

	return (
		<Fragment>
			<div className='page-wrap'>
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
							componentName={data[3].componentName}
							name={data[3].name}
							tags={data[3].tags}
							color={data[3].color}
						/>
					</div>
				</div>
			</div>
		</Fragment>
	)
}

export default Projects
