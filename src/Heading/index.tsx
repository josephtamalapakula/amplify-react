import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Nav, Navbar} from "react-bootstrap";

const Heading = (props: any) => {
        
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top" className='backgroundHeadingColor'>
      <Navbar.Brand href="/" className="mobileViewLogo" >
        {/* <img src={header} className='logoStyle' alt={"header"}/> */}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" className="mobileView" />
      <Navbar.Collapse id="responsive-navbar-nav" >
        <div className='headerLayout'>
          <div>
            <Nav>
              <Nav.Link href="/"><h3 className='homeLayout'>Home</h3></Nav.Link>
            </Nav>
          </div>
          <div>
          {props.logo&&<img className='imageStyle'
            src={"https://amplifyreact53900b4e426a423d9225994bd7503f498a858-main.s3.us-east-1.amazonaws.com/"+props.logo} alt={"profile"}/>}
          </div>
        </div>
      </Navbar.Collapse>
    </Navbar>
    );
  }
  
  export default Heading;