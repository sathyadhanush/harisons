import React, { useState } from 'react';
import { Heading, Text } from 'evergreen-ui';
import Footer from 'src/app/footer/Footer';
import AppNavbar from 'components/AppNavbar';
import Divider from 'components/base/Divider';
import { OUR_SERVICES_LIST } from 'src/app/home/Home';
import IMG4 from './img/img4.jpg';
import IMG1 from './img/img1.jpg';
import IMG2 from './img/img2.jpg';
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
              color={model.name === heading.name && 'black'}
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
    { img: IMG4, key: 'img4' },
    { img: IMG1, key: 'img1' },
    { img: IMG2, key: 'img2' },
  ];
  const [img, setImg] = useState(IMG_LIST[0]);
  return (
    <div className="product-card-container">
      <div className="flex-column">
        <img
          alt=""
          src={img.img}
          style={{
            borderRadius: '10px',
            width: '220px',
            height: '150px',
            marginBottom: '15px',
          }}
        />
        <div className="flex">
          {IMG_LIST.map((model) => (
            <img
              alt=""
              src={model.img}
              style={{
                borderRadius: '8px',
                width: '50px',
                height: '50px',
                marginRight: '15px',
                cursor: 'pointer',
                border: model.key === img.key && '1px solid black',
              }}
              onClick={() => setImg(model)}
            />
          ))}
        </div>
      </div>
      <div
        className="flex-column"
        style={{
          paddingLeft: '20px', height: '100%', justifyContent: 'center',
        }}
      >
        <Heading paddingBottom={10} fontSize={20}>Product name</Heading>
        <Text fontSize={16}>Customer name</Text>
        <Text fontSize={16}>This is the product description</Text>
      </div>
    </div>
  );
}
