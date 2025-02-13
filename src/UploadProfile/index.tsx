import { list, uploadData } from 'aws-amplify/storage';
import { getProperties } from 'aws-amplify/storage';
import { useState } from 'react';
import './styles.css';

const UploadProfile = (props: any) => {
    const [file, setFile] = useState<any>();
    const [showButton, setShowButton] = useState<boolean>(false);
    const [logoError, setLogoError] = useState<string | null>();

    const handleChange = (event: any) => {
        console.log(event);
        setFile(event.target.files[0]);
        setLogoError(null);
        setShowButton(false);
    };

    const getFiles = async () => {
    try {
      const checkFile = await list({
         path: ({identityId}) => `protected/${identityId}/photos/profile.jpg`
      });
      if(checkFile.items.length>0){
      
        const result: any = await getProperties({
          path: ({ identityId }) => `protected/${identityId}/photos/profile.jpg`
        });
        props?.setLogo(result?.path);
        localStorage.setItem("profilePic",result?.path);
      }
      else{
        setLogoError("Please Upload your Profile Photo");
      }
      } catch (error) {
        //console.log(error);
      }
    }

    const UploadToS3 = () => {
      uploadData({
        path: ({identityId}) => `protected/${identityId}/photos/profile.jpg`,
        data: file,
    });
    setShowButton(true);
    }

    return (
    <div className='UploadLayout'>
      <h5>Upload Profile Photo</h5>
      <div>
        <input type='file' name='file' accept='.jpg' onChange={handleChange}/>
      </div>
      <div className='uploadtos3Style'>
        {file &&<button className={showButton?'uploadButtonStyle':'uploadButtonStyle2'} onClick={UploadToS3} disabled={showButton}>Upload {file.name} to s3 </button>}
      </div>

        {!props.logo&&<button className='logoButtonStyle' onClick={getFiles}>
             Show Logo
        </button>}
        {logoError&& <h6 className='errorStyle'>{logoError}</h6>}


    </div>)
}
  
export default UploadProfile;