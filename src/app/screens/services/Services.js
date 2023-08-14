import React, { useState } from 'react';
import { Heading, Text } from 'evergreen-ui';
import Footer from 'src/app/footer/Footer';
import AppNavbar from 'components/AppNavbar';
import Divider from 'components/base/Divider';
import { OUR_SERVICES_LIST } from 'src/app/home/Home';
import IMG3 from './new-img/img3.jpg';
import IMG1 from './new-img/img1.jpg';
import IMG2 from './new-img/img2.jpg';
import './Services.scss';
import '../../index.scss';

export function Component() {
  const LIST = [0, 1, 2, 3];
  const [heading, setHeading] = useState(OUR_SERVICES_LIST[0]);
  return (
    <div className="flex-column">
      <AppNavbar heading={heading.name} callMe={false} />
      <div className="flex" style={{ paddingLeft: '20px', paddingTop: '100px', paddingBottom: '30px' }}>
        <div className="flex-column" style={{ width: '220px' }}>
          <Heading paddingBottom={15} fontSize={18}>Our services</Heading>
          {OUR_SERVICES_LIST.map((model) => (
            <Text
              onClick={() => setHeading(model)}
              cursor="pointer"
              fontSize={model.name === heading.name ? 18 : 16}
              paddingBottom={15}
              paddingLeft={15}
              color={model.name === heading.name && '#fd0200'}
            >
              {model.name}
            </Text>
          ))}
        </div>
        <Divider type="vertical" />
        <div className="products-container">
          {LIST.map(() => <ProductsCard />)}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export function ProductsCard() {
  const IMG_LIST = [
    { img: IMG2, key: 'img2' },
    { img: IMG1, key: 'img1' },
    { img: IMG3, key: 'img3' },

  ];
  const [img, setImg] = useState(IMG_LIST[0]);
  return (
    <div className="product-card-container">
      <div className="flex-column">
        <div className="flex">
          <img
            alt=""
            src={img.img}
            style={{
              borderRadius: '8px',
              width: '220px',
              height: '150px',
              marginBottom: '15px',
            }}
          />
          <div
            className="flex-column"
            style={{
              paddingLeft: '20px', height: '100%',
            }}
          >
            <Heading paddingBottom={10} fontSize={20}>Product name</Heading>
            <Text fontSize={16} paddingBottom={5}>Customer name</Text>
            <Text fontSize={16}>
              This is product description this is product description is product description
            </Text>
          </div>
        </div>
        <div className="flex" style={{ alignItems: 'center' }}>
          {IMG_LIST.map((model) => (
            <img
              alt=""
              src={model.img}
              style={{
                borderRadius: '5px',
                width: model.key === img.key ? '60px' : '50px',
                height: model.key === img.key ? '60px' : '50px',
                marginRight: '15px',
                // padding: '5px',
                cursor: 'pointer',
                border: model.key === img.key && '1px solid #fd0200',
              }}
              onClick={() => setImg(model)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
