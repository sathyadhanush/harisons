/* eslint-disable no-return-assign */
/* eslint-disable max-len */
import '../../components/scss/FilterChip.scss';
import { Heading, Text } from 'evergreen-ui';
import Button from 'components/base/Button';
import AppNavbar, { MENUS } from 'components/AppNavbar';
import Divider from 'components/base/Divider';
import { useState } from 'react';
import RightAltArrown from '../../components/img/arrow_right_alt.svg';
import ContactUsFrom from './ContactUsFrom';
import Footer from '../footer/Footer';
import IC_PROFILE from '../../components/img/ic_profile.png';
import IC_DESIGN from '../../components/img/ic_design.png';
import IC_DEVELOPMENT from '../../components/img/ic_development.png';
import IC_QUALITY from '../../components/img/ic_quality.png';
import IC_PROCESS from '../../components/img/ic_process.png';
import IMG1 from '../../components/img/services/img1.jpg';
import IMG2 from '../../components/img/services/img2.jpg';
import IMG3 from '../../components/img/services/img3.jpg';
import IMG4 from '../../components/img/services/img4.jpg';
import IMG5 from '../../components/img/services/img5.jpg';
import CIMG1 from '../../components/img/clients/img1.jpg';
import CIMG2 from '../../components/img/clients/img2.jpg';
import CIMG3 from '../../components/img/clients/img3.jpg';
import CIMG4 from '../../components/img/clients/img4.jpg';
import CIMG5 from '../../components/img/clients/img5.jpg';
import CIMG6 from '../../components/img/clients/img6.jpg';
import CIMG7 from '../../components/img/clients/img7.jpg';
import CIMG8 from '../../components/img/clients/img8.jpg';
import './Home.scss';

// export const OUR_SERVICES_LIST = [
//   { name: 'Parts Supplies', img: IMG1, path: '/parts-supplies' },
//   { name: 'SPM', img: IMG2, path: '/spm' },
//   { name: 'Injection Molds', img: IMG3, path: '/injection-molds' },
//   { name: 'Blow Molds', img: IMG4, path: '/blow-molds' },
//   { name: 'Stamping Parts', img: IMG5, path: '/stamping-parts' },
// ];
export const OUR_SERVICES_LIST = [
  { name: 'CNC Machining', img: IMG1, path: '/cnc-machining' },
  { name: 'Al Profile Bending', img: IMG2, path: '/al-profile-bending' },
  { name: 'Moulds / Dies', img: IMG3, path: '/moulds-or-dies' },
  { name: 'Molded parts', img: IMG4, path: '/molded-parts' },
  { name: 'SPM', img: IMG5, path: '/smp' },
  { name: 'Reverse Engineering', img: IMG5, path: '/reverse-engineering' },
  { name: 'Product Design', img: IMG5, path: '/product-design' },
  { name: 'Sheet Metal Fabrication', img: IMG5, path: '/sheet-metal-fabrication' },
];
const CLIENT_IMG_LIST = [CIMG1, CIMG2, CIMG3, CIMG4, CIMG5, CIMG6, CIMG7, CIMG8];
const MODULE_LIST = [
  { value: 'Design', img: IC_DESIGN },
  { value: 'Development', img: IC_DEVELOPMENT },
  { value: 'Quality Analysis', img: IC_QUALITY },
];
const STATEGRY_LIST = [
  'CUSTOMER CENTRIC ORGANIZATION',
  'DEVELOP, EMPOWER & GROW PEOPLE',
  'ACHIEVE SUPERIOR BUSINESS PERFORMANCE & GROWTH',
  'SIMPLIFYING AND CREATING EFFICIENT PROCESSES',
];

const OUR_PROCESS_LIST = [
  'Concept initiation',
  'Program approval',
  'Prototype',
  'Pilot',
  'Launch',
];

function Component() {
  const [route, setRoute] = useState(MENUS[0].path);
  function ourServices() {
    return (
      <div className="flex-column" style={{ alignItems: 'center' }} id="services">
        <Heading marginTop={40} marginBottom={30} fontSize={25}>Our services</Heading>
        <div className="product-service-container">
          {OUR_SERVICES_LIST.map((model) => (
            <div
              className="product-service-item"
              onClick={() => window.location.href = '/services'}
              style={{ width: '200px', padding: '20px 0px' }}
            >
              <img
                style={{
                  width: '50px',
                }}
                alt=""
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Circle-icons-tools.svg/1200px-Circle-icons-tools.svg.png"
              />
              <Heading marginTop={15} marginBottom={10}>{model.name}</Heading>
            </div>
          ))}
        </div>
      </div>
    );
  }

  function renderAutomationAndModulues() {
    return (
      <div className="flex-column" style={{ alignItems: 'center' }}>
        <Heading marginTop={40} marginBottom={30} fontSize={25}>
          Harisons Automation & Moulds
        </Heading>
        <div className="flex" style={{ width: '80%', columnGap: '20px' }}>
          {MODULE_LIST.map((model) => (
            <div className="modules-container">
              <img
                style={{
                  height: '50px',
                  width: '50px',
                }}
                src={model.img}
                alt=""
              />
              <Heading fontSize={20} paddingTop={20} paddingBottom={10}>{model.value}</Heading>
              <Text fontSize={17}>Create websites that help you upscale your business through research based designs.</Text>
            </div>
          ))}
        </div>
      </div>
    );
  }

  function renderClients() {
    return (
      <div className="flex-column" style={{ alignItems: 'center' }} id="clients">
        <Heading marginTop={60} marginBottom={30} fontSize={25}>Clients</Heading>
        <div className="client-container">
          {CLIENT_IMG_LIST.map((model) => (
            <img
              alt=""
              style={{ height: '60px' }}
              src={model}
            />
            // <div className="client-container-item">
            //   <Heading>Client name</Heading>
            // </div>
          ))}
        </div>
      </div>
    );
  }

  function renderWhatOurClientSays() {
    return (
      <div className="flex-column" style={{ alignItems: 'center' }}>
        <Heading marginTop={60} marginBottom={30} fontSize={25}>What our clients say ?</Heading>
        <div style={{ display: 'flex', width: '80%', columnGap: '50px' }}>
          <img
            style={{
              height: '350px',
              borderRadius: '10px',
            }}
            src={IC_PROFILE}
            alt=""
          />
          <div className="flex-column" style={{ justifyContent: 'center' }}>
            <Text fontSize={20}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,</Text>
            <Heading fontSize={20} marginTop={20} marginBottom={10}>John Doe</Heading>
            <Text fontSize={20}>CEO,Harisons.</Text>
          </div>
        </div>
      </div>
    );
  }

  function renderWhy() {
    return (
      <div className="why-harison-container" id="about">
        <div className="flex-column" style={{ width: '80%' }}>
          <div className="flex" style={{ columnGap: '100px' }}>
            <div className="flex-column" style={{ width: '50%' }}>
              <Heading color="white" fontSize="30px" marginBottom={30}>Why Harisons ?</Heading>
              <Text color="white" fontSize={20} marginBottom={20}>
                Become essential to our customers by providing manufacturing solutions and services to help them achieve their aspirations.
              </Text>
              <a href="#contact"><Button appearance="primary">Contact us</Button></a>
            </div>
            <div className="flex-column" style={{ width: '50%', rowGap: '15px' }}>
              {STATEGRY_LIST.map((model) => (
                <div className="flex" style={{ alignItems: 'center' }}>
                  <img
                    style={{
                      color: 'red',
                      width: '30px',
                    }}
                    src={RightAltArrown}
                    alt=""
                  />
                  <Text color="white" fontSize={16} paddingLeft="10px">{model}</Text>
                </div>
              ))}
            </div>
          </div>
          <div style={{ margin: '50px 0px' }}>
            <Divider />
          </div>
          <div className="flex-column" style={{ alignItems: 'center' }}>
            <Heading color="white" fontSize="30px" marginBottom={30}>Our process</Heading>
            <div className="flex" style={{ columnGap: '10px' }}>
              {OUR_PROCESS_LIST.map((model, index) => (
                <>
                  <div
                    className="flex-column"
                    style={{
                      height: '130px',
                      width: '130px',
                      borderRadius: '50%',
                      backgroundColor: 'aliceblue',
                      alignItems: 'center',
                      justifyContent: 'space-evenly',
                      padding: '0px 20px',
                    }}
                  >
                    <img
                      style={{
                        height: '50px',
                        width: '50px',
                      }}
                      alt=""
                      src={IC_PROCESS}
                    />
                    <Text fontSize="16px" style={{ textAlign: 'center' }}>{model}</Text>
                  </div>
                  {!(OUR_PROCESS_LIST.length - 1 === index)
                    && (
                      <img
                        style={{
                          color: 'white',
                          width: '35px',
                        }}
                        src={RightAltArrown}
                        alt=""
                      />
                    )}
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <AppNavbar route={route} setRoute={setRoute} />
      <div className="background-img-comtainer" id="home" style={{ paddingTop: '50px' }}>
        <Heading color="white" fontSize="40px" marginBottom={20}>Harisons Automation & Moulds</Heading>
        <Text color="white" width="60%" fontSize="20px" textAlign="center" marginBottom={40}>
          Delight our Customers by Relentless pursuit of Innovation and achieving excellence in everything we do
        </Text>
        <a href="#contact"><Button appearance="primary">Let’s connect</Button></a>
      </div>
      {renderAutomationAndModulues()}
      {ourServices()}
      {renderClients()}
      {renderWhatOurClientSays()}
      {renderWhy()}
      <ContactUsFrom />
      <Footer setRoute={setRoute} />
    </>
  );
}

export { Component };
