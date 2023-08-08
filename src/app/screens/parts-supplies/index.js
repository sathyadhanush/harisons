/* eslint-disable no-return-assign */
import React from 'react';
import ReactDOM from 'react-dom';
import { Heading, Text } from 'evergreen-ui';
import IMG1 from './img/img1.jpg';
import IMG2 from './img/img2.jpg';
import IMG3 from './img/img3.jpg';
import IMG4 from './img/img4.jpg';
import IC_BACK from '../../../components/img/ic_back.svg';
import '../../index.scss';
import './index.scss';

document.title = 'Part Supplies';
ReactDOM.render(<Component />, document.getElementById('root'));

export function Component() {
  const LIST = [
    {
      name: 'QXI Roof Rail',
      customerName: 'Seoyon E Hwa ',
      img: IMG1,
    },
    {
      name: '216 SK Roof Rail',
      customerName: 'Varroc',
      img: IMG2,
    },
    {
      name: 'GS Roof Rail',
      customerName: 'Motherson',
      img: IMG3,
    },
    {
      name: 'Wiper Hose Assembly',
      customerName: 'Motherson',
      img: IMG4,
    },
  ];

  return (
    <div className="parts-suplies-container">
      <div className="flex" style={{ alignItems: 'center', paddingBottom: '30px' }}>
        <img
          src={IC_BACK}
          alt=""
          style={{ width: '25px', cursor: 'pointer' }}
          onClick={() => window.location.href = '/'}
        />
        <Heading fontSize={20} marginLeft={10}>Part Supplies</Heading>
      </div>
      {LIST.map((model) => (
        <div className="flex" style={{ alignItems: 'center', columnGap: '20px', paddingBottom: '20px' }}>
          <img src={model.img} alt="" />
          <div className="flex-column">
            <Heading paddingBottom={10} fontSize={20}>{model.name}</Heading>
            <Text fontSize={16}>{model.customerName}</Text>
          </div>
        </div>
      ))}
    </div>
  );
}
