/* eslint-disable import/no-cycle */
/* eslint-disable no-return-assign */
import React, { useState } from 'react';
import { Heading, Text } from 'evergreen-ui';
import Footer from 'src/app/footer/Footer';
import AppNavbar from 'components/AppNavbar';
// import IMG1 from './img/img1.jpg';
// import IMG2 from './img/img2.jpg';
// import IMG3 from './img/img3.jpg';
import Divider from 'components/base/Divider';
import { OUR_SERVICES_LIST } from 'src/app/home/Home';
import IMG4 from './img/img4.jpg';
import './ProductList.scss';
import '../../index.scss';

// ReactDOM.render(<Component />, document.getElementById('root'));

export function Component() {
  document.title = OUR_SERVICES_LIST.find((model) => model.path === window.location.pathname)?.name ?? 'Harisons';
  // const LIST = [
  //   {
  //     name: 'QXI Roof Rail',
  //     customerName: 'Seoyon E Hwa ',
  //     img: IMG1,
  //   },
  //   {
  //     name: '216 SK Roof Rail',
  //     customerName: 'Varroc',
  //     img: IMG2,
  //   },
  //   {
  //     name: 'GS Roof Rail',
  //     customerName: 'Motherson',
  //     img: IMG3,
  //   },
  //   {
  //     name: 'Wiper Hose Assembly',
  //     customerName: 'Motherson',
  //     img: IMG4,
  //   },
  // ];

  const LIST = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  // const heading = OUR_SERVICES_LIST.find((model) => model.path === window.location.pathname).name;
  const [heading, setHeading] = useState(OUR_SERVICES_LIST[0].name);
  return (
    <div className="flex-column">
      <AppNavbar heading={heading} callMe={false} />
      <div className="flex" style={{ paddingTop: '100px', paddingRight: '50px' }}>
        <div className="flex-column" style={{ rowGap: '20px', padding: '0px 30px', width: '300px' }}>
          {OUR_SERVICES_LIST.map((model) => (
            <Heading
              onClick={() => setHeading(model.name)}
              cursor="pointer"
            >
              {model.name}
            </Heading>
          ))}
        </div>
        <Divider type="vertical" />
        <div className="parts-suplies-container" style={{ paddingRight: '50px' }}>
          {LIST.map(() => (
            <div
              className="flex"
              style={{
                alignItems: 'center', columnGap: '20px', paddingBottom: '20px',
              }}
            >
              <img src={IMG4} alt="" style={{ width: '300px' }} />
              <div className="flex-column">
                <Heading paddingBottom={10} fontSize={20}>Product name</Heading>
                <Text fontSize={16}>Customer name</Text>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
