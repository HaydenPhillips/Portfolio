import React, { useState, Fragment } from 'react';
import '../../CSS/Projects/projects.css';
import Cell from './Cell';
import Data from './Data';

const Home = () => {
  const [data] = useState(Data);
  return (
    <Fragment>
      <div className='grid'>
        <div className='column-one'>
          <div className='wrapper1'>
            <div className='inner-col-top'>
              <div className='title'>projects</div>
              <Cell
                componentName={data[0].componentName}
                name={data[0].name}
                tags={data[0].tags}
                color={data[0].color}
              />
            </div>
          </div>

          <div className='inner-col-bot'>
            <Cell
              componentName={data[1].componentName}
              name={data[1].name}
              tags={data[1].tags}
              color={data[1].color}
            />
          </div>
        </div>

        <div className='column-two'>
          <div className='inner-col-top'>
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
          <div className='inner-col-bot'></div>
        </div>

        <div className='column-three'>
          <div className='wrapper1'>
            <div className='inner-col-top'>
              <Cell
                componentName={data[4].componentName}
                name={data[4].name}
                tags={data[4].tags}
                color={data[4].color}
              />
            </div>
            <div className='inner-col-top'>
              <Cell
                componentName={data[6].componentName}
                name={data[6].name}
                tags={data[6].tags}
                color={data[6].color}
              />
            </div>
          </div>
          <div className='inner-col-bot'>
            <Cell
              componentName={data[5].componentName}
              name={data[5].name}
              tags={data[5].tags}
              color={data[5].color}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
