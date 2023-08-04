/* eslint-disable max-len */
import '../../components/scss/FilterChip.scss';
import { Heading, Text } from 'evergreen-ui';
import Button from 'components/base/Button';
import AppNavbar from 'components/AppNavbar';
import Divider from 'components/base/Divider';
import RightAltArrown from '../../components/img/arrow_right_alt.svg';
import ContactUsFrom from './ContactUsFrom';
import LogoImg from '../../components/img/logo1.svg';
import Footer from '../footer';
import IC_PROFILE from '../../components/img/ic_profile.png';
import IC_DESIGN from '../../components/img/ic_designe.png';
import IC_DEVELOPMENT from '../../components/img/ic_development.png';
import IC_QUALITY from '../../components/img/ic_quality.png';
import './Home.scss';

const list = [1, 2, 3, 4, 5, 6];
const clientList = [1, 2, 3, 4, 5, 6, 8, 9, 10];
const moduleList = [
  { value: 'Design', img: IC_DESIGN },
  { value: 'Development', img: IC_DEVELOPMENT },
  { value: 'Quality Analysis', img: IC_QUALITY },
];

function Home() {
  function renderGridList({ heading, name, id }) {
    return (
      <div className="flex-column" style={{ alignItems: 'center' }} id={id}>
        <Heading marginTop={40} marginBottom={30} fontSize={25}>{heading}</Heading>
        <div className="product-service-container">
          {list.map(() => (
            <div className="product-service-item">
              <img
                style={{
                  borderBottomLeftRadius: !name && '10px',
                  borderBottomRightRadius: !name && '10px',
                }}
                className="product-service-image"
                src="https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&width=1200"
                alt=""
              />
              {name && <Heading marginTop={15} marginBottom={10}>{name}</Heading>}
            </div>
          ))}
        </div>
      </div>
    );
  }

  function renderAutomationAndModulues() {
    return (
      <div className="flex-column" style={{ alignItems: 'center' }}>
        <Heading marginTop={40} marginBottom={30} fontSize={25}>Harisons Automation & Moulds</Heading>
        <div className="flex" style={{ width: '80%', columnGap: '20px' }}>
          {moduleList.map((model) => (
            <div className="modules-container">
              <img
                style={{
                  height: '50px',
                  width: '50px',
                }}
                src={model.img}
                alt=""
              />
              <Heading fontSize={20}>{model.value}</Heading>
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
          {clientList.map(() => (
            <div className="client-container-item">
              <Heading>Client name</Heading>
            </div>
          ))}
        </div>
      </div>
    );
  }

  function renderWhatOurClientSays() {
    return (
      <div className="flex-column" style={{ alignItems: 'center' }}>
        <Heading marginTop={60} marginBottom={30} fontSize={25}>What our clients say</Heading>
        <div style={{ display: 'flex', width: '80%', columnGap: '50px' }}>
          <img
            style={{
              height: '350px',
              borderRadius: '10px',
            }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAL_r36T9dtShfXHnNKnsR-UJK6BIgNEGu0Q&usqp=CAU"
            alt=""
          />
          <div className="flex-column" style={{ justifyContent: 'center' }}>
            <Text fontSize={20}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,</Text>
            <Heading fontSize={20} marginTop={20} marginBottom={10}>Name</Heading>
            <Text fontSize={20}>Designation</Text>
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
              <Text color="white" fontSize={20} marginBottom={20}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit</Text>
              <div><Button appearance="primary">Contact us</Button></div>
            </div>
            <div className="flex-column" style={{ width: '50%', rowGap: '20px' }}>
              {[0, 1, 2].map(() => (
                <div className="flex">
                  <img
                    style={{
                      height: '50px',
                      width: '50px',
                      borderRadius: '50%',
                      marginRight: '30px',
                    }}
                    src="https://www.idg.se/editorial/480/path/1.439818.1332503169!teaserImage/imageTypeSelector/localImage/3359169481.jpg"
                    alt=""
                  />
                  <div className="flex-column">
                    <Text color="white" fontSize={20} marginBottom={5}>Title</Text>
                    <Text color="white" fontSize={18}>Ut enim ad minim veniam, quis nostrud exercitation</Text>
                  </div>
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
              <div
                className="flex-column"
                style={{
                  height: '130px',
                  width: '130px',
                  borderRadius: '50%',
                  backgroundColor: 'aliceblue',
                  alignItems: 'center',
                  justifyContent: 'space-evenly',
                }}
              >
                <img
                  style={{
                    height: '70px',
                    width: '70px',
                    borderRadius: '50%',
                  }}
                  src="https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&width=1200"
                  alt=""
                // src={IC_PROCESS}
                />
                <Text fontSize="16px">Text </Text>
              </div>
              <img
                style={{
                  color: 'white',
                  width: '35px',
                }}
                src={RightAltArrown}
                alt=""
              />
              <div
                className="flex-column"
                style={{
                  height: '130px',
                  width: '130px',
                  borderRadius: '50%',
                  backgroundColor: 'aliceblue',
                  alignItems: 'center',
                  justifyContent: 'space-evenly',
                }}
              >
                <img
                  style={{
                    height: '70px',
                    width: '70px',
                    borderRadius: '50%',
                  }}
                  src="https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&width=1200"
                  alt=""
                />
                <Text fontSize="16px">Text </Text>
              </div>
              <img
                style={{
                  color: 'white',
                  width: '35px',
                }}
                src={RightAltArrown}
                alt=""
              />
              <div
                className="flex-column"
                style={{
                  height: '130px',
                  width: '130px',
                  borderRadius: '50%',
                  backgroundColor: 'aliceblue',
                  alignItems: 'center',
                  justifyContent: 'space-evenly',
                }}
              >
                <img
                  style={{
                    height: '70px',
                    width: '70px',
                    borderRadius: '50%',
                  }}
                  src="https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&width=1200"
                  alt=""
                />
                <Text fontSize="16px">Text </Text>
              </div>
              <img
                style={{
                  color: 'white',
                  width: '35px',
                }}
                src={RightAltArrown}
                alt=""
              />
              <div
                className="flex-column"
                style={{
                  height: '130px',
                  width: '130px',
                  borderRadius: '50%',
                  backgroundColor: 'aliceblue',
                  alignItems: 'center',
                  justifyContent: 'space-evenly',
                }}
              >
                <img
                  style={{
                    height: '70px',
                    width: '70px',
                    borderRadius: '50%',
                  }}
                  src="https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&width=1200"
                  alt=""
                />
                <Text fontSize="16px">Text </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  function renderFooter() {
    return (
      <div className="footer-container">
        <div className="flex" style={{ width: '80%', alignItems: 'center' }}>
          <div className="flex-column" style={{ width: '100%', rowGap: '8px' }}>
            <Heading marginBottom={10}>Quick Links</Heading>
            <Text color="gray" fontSize={16}>Home</Text>
            <Text color="gray" fontSize={16}>Products</Text>
            <Text color="gray" fontSize={16}>Case studies</Text>
            <Text color="gray" fontSize={16}>About</Text>
            <Text color="gray" fontSize={16}>Contact us</Text>
          </div>
          <img src={LogoImg} alt="logo" width={100} />
        </div>
      </div>
    );
  }

  return (
    <>
      <AppNavbar />
      <div className="background-img-comtainer" id="home" style={{ paddingTop: '50px' }}>
        <Heading color="white" fontSize="40px" marginBottom={20}>Harisons Automation & Moulds</Heading>
        <Text color="white" width="60%" fontSize="20px" marginBottom={40}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</Text>
        <Button appearance="primary">Let’s connect</Button>
      </div>
      {renderAutomationAndModulues()}
      {renderGridList({ heading: 'Products & Services', name: 'Module name', id: 'products' })}
      <div className="flex" style={{ justifyContent: 'center', margin: '30px 0px' }}>
        <Button appearance="outline">Learn more</Button>
      </div>
      {renderGridList({ heading: 'Industries served' })}
      {renderClients()}
      {renderWhatOurClientSays()}
      {renderWhy()}
      <ContactUsFrom />
      {/* {renderFooter()} */}
      <Footer />
    </>
  );
}

export default Home;
