import './App.css';
import Heading from './Heading';
import ServiceRequest from './ServiceRequest';

import { generateClient } from 'aws-amplify/api';
import { Authenticator, /*withAuthenticator*/ } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import UploadProfile from './UploadProfile';
import { useEffect, useState } from 'react';
import Components from './Components';
import AllComplaints from './AllComplaints';

function App() {
  const [logo,setLogo] = useState<string | null>();
  const [showComplaintForm, SetShowComplaintForm] = useState<boolean>(true);
  const [allComplaints, setAllComplaints] = useState<any>();
  const [message, setMessage] = useState<string | null>();
  useEffect(() => {
    const profilePic = localStorage.getItem("profilePic");
    if(profilePic!==null){
      setLogo(profilePic);
    }
  },[]);
  const clearCache = () => {
    localStorage.clear();
    setLogo(null);
  }
  const fetchAPI = async () => {
    let list = `
      query MyQuery {
            listServiceRequests {
                  items {
                          contactInformation
                          createdAt
                          currentLocation
                          id
                          reporterName
                          resolutionDate
                          serviceRequestDescription
                          serviceRequestName
                          severity
                          updatedAt
                        }
                  }
          }
    `;
    const client = generateClient();
      const response: any = await client.graphql({
        query: list
      });
      if(response?.data?.listServiceRequests?.items.length>0){
        setAllComplaints(response?.data?.listServiceRequests?.items);
        SetShowComplaintForm(false);
        setMessage(null);
      }
      else{
        setMessage("No Complaints Found!");
      }
      
  }
  
  return (
    <div className="App">
      <Heading logo={logo}/>
      <ServiceRequest />      
      <div className='SignInLayout'>
      <Authenticator>
        {({ signOut }) => (
          <div>
              <div className='SignoutLayout'>
                <div onClick={clearCache}>
                <button  onClick={signOut} className='SignoutStyle'>Sign Out</button>
                </div>
              </div>
              <div className='ShowAllLayout'>
                {showComplaintForm?
                <button onClick={fetchAPI}>Show All Existing Requests</button>:
                <button onClick={()=>SetShowComplaintForm(true)}>Show Complaint Form</button>}
              </div>
              {message&&<div>{message}</div>}
              
              <UploadProfile logo={logo} setLogo={setLogo}/>
              {showComplaintForm
              ?<Components />
              :<AllComplaints list={allComplaints}/>
              }
            </div>
        )}
      </Authenticator>
      </div>
      
    </div>
  );
}

export default App;
