import { Button, Col, Container, Row, Table } from 'react-bootstrap';
import Footer from '../../layout/Footer';

const HomeSection = () => {


  const concertEvents = [
    {
      date: 'JUL 16',
      city: 'DETROIT, MI',
      venue: 'DTE ENERGY MUSIC THEATRE'
    },
    {
      date: 'JUL 19',
      city: 'TORONTO, ON',
      venue: 'BUDWEISER STAGE',
      action: 'BUY TICKETS'
    },
    {
      date: 'JUL 22',
      city: 'BRISTOW, VA',
      venue: 'JIGGY LUBE LIVE'
    },
    {
      date: 'JUL 29',
      city: 'PHOENIX, AZ',
      venue: 'AK-CHIN PAVILION'
    },
    {
      date: 'AUG 2',
      city: 'LAS VEGAS, NV',
      venue: 'T-MOBILE ARENA'
    },
    {
      date: 'AUG 7',
      city: 'CONCORD, CA',
      venue: 'CONCORD PAVILION'
    }
  ];


  return (
    <>
      <Container fluid className="justify-content-center flex-grow-1 pt-5" style={{ position: 'relative', zIndex: -1 }}>
        <h3 style={{ textAlign: 'center', fontWeight: 'bold' }}>Generics</h3>
      </Container>
      <Container fluid className="d-flex flex-column justify-content-center align-items-center flex-grow-1 p-5" style={{
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
      }}>
        < Button style={{ backgroundColor: 'transparent', color: 'black', fontWeight: 'bold', border: '1px solid black', padding: '10px 10px', margin: '10px 0' }} >Get our Latest Album</Button >
        <Button style={{ backgroundColor: 'transparent', color: 'black', fontWeight: 'bold', border: '1px solid black', margin: '10px 0', padding: '10px 15px', borderRadius: '50%' }} >►</Button>
      </Container >
      <Container fluid className="d-flex flex-column justify-content-center align-items-center flex-grow-1 p-5 container-xl" >
        <h5 style={{ textAlign: 'center', fontWeight: 'bold', padding: '2rem 0' }}>TOURS</h5>
        <Table class="table table-striped" className="d-flex flex-column justify-content-center' align-items-center flex-grow-1 pt-5 " style={{ margin: '0px 0', flexWrap: 'wrap' }}>
          <tbody>
            {concertEvents.map((item, index) => (
              <tr key={index}>
                <th scope="row" style={{ textAlign: 'center' }} >{index + 1}</th>
                <td style={{ textAlign: 'center' }}>{item.date}</td>
                <td style={{ textAlign: 'center' }}>{item.city}</td>
                <td >{item.venue}</td>
                <td style={{ textAlign: 'center' }}><Button>Book Tickets</Button></td>
              </tr>
            ))}
          </tbody>
        </Table >
      </Container >
      <Footer />
    </>
  );
};

export default HomeSection;
