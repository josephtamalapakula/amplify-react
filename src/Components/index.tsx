import { useState } from "react";
import { generateClient } from "@aws-amplify/api";
import "./formInput.css";
import FormInput from "./FormInput";
import dayjs from 'dayjs';

const Components = () => {
  const [selectedOption, setSelectedOption] = useState({value: "", label: "Please Select"});
  const [response, SetResponse] = useState<any>();
  const [selectError,setSelectError] = useState<boolean>(false);
  const [textAreaError,setTextAreaError] = useState<boolean>(false);  
  const [focused, setFocused] = useState<any>({
    requestName: false,
    description: false,
    severity: false,
    reporterName: false,
    reporterEmail: false,
    currentLocation: false
  });
  const [values, setValues] = useState<any>({
    requestName: "",
    description: "",
    severity: "",
    reporterName: "",
    reporterEmail: "",
    currentLocation: ""
  });  

  const options = [
    {value: "High", label: "High"},
    {value: "Medium", label: "Medium"},
    {value: "Low", label: "Low"}
  ]

  const inputs = [
    {
      id: 1,
      name: "requestName",
      type: "text",
      placeholder: "Please Enter Service Request Name",
      errorMessage:
        "Service Request Name should be 2-30 characters and shouldn't include any special character!",
      label: "Service Request Name",
      pattern: "^[A-Za-z0-9 ]{2,30}$",
      required: true,
    },
    {
      id: 2,
      name: "description",
      type: "textarea",
      placeholder: "Please Enter Service Request Description",
      errorMessage: "Service Request Description can't be blank!",
      label: "Service Request Description",
      required: true,
    },
    {
      id: 3,
      name: "severity",
      type: "select",
      placeholder: "Please select Severity",
      errorMessage: "Please select Severity!",
      label: "Severity",
      required: true,
      options: options
    },
    {
      id: 4,
      name: "reporterName",
      type: "text",
      placeholder: "Please Enter Reporter Name",
      errorMessage:
        "Reporter Name should be 2-30 characters and shouldn't include any special character!",
      label: "Reporter Name",
      pattern: "^[A-Za-z0-9 ]{2,30}$",
      required: true,
    },
    {
      id: 5,
      name: "reporterEmail",
      type: "email",
      placeholder: "Please Enter Email",
      errorMessage: "Please enter a valid email address!",
      label: "Contact Information",
      required: true,
    },
    {
      id: 6,
      name: "currentLocation",
      type: "text",
      placeholder: "Please Enter Location",
      errorMessage: "Location should be 2-20 characters and shouldn't include any special character!",
      label: "Location",
      pattern: "^[A-Za-z0-9 ]{2,20}$",
      required: true,
    }
  ];

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    //console.log(values);
    if(values.severity===""){
      setSelectError(true);
    }
    else
    if(values.description===""){
      setTextAreaError(true);
    }
    else{
    const resolutionsDays = (selectedOption.value==="High")?1
    :(selectedOption.value==="Medium")?3
    :(selectedOption.value==="Low")?5:0;
const myDate = new Date();
myDate.setDate(myDate.getDate() + resolutionsDays)
const time = dayjs(myDate).format("DD/MM/YYYY");

let list =`
mutation MyMutation {
createServiceRequest(input: {
                    serviceRequestName: "${values.requestName}",
                    serviceRequestDescription: "${values.description}", 
                    severity: "${values.severity}", 
                    resolutionDate: "${time}", 
                    reporterName: "${values.reporterName}", 
                    contactInformation: "${values.reporterEmail}", 
                    currentLocation: "${values.currentLocation}"
                  }) {
id
serviceRequestName
serviceRequestDescription
createdAt
severity
resolutionDate
reporterName
contactInformation
currentLocation
}
}
`
const client = generateClient();
let response = await client.graphql({
query: list
});
// console.log(response);
setValues({
  requestName: "",
  description: "",
  severity: "",
  reporterName: "",
  reporterEmail: "",
  currentLocation: ""
});
setFocused({
  requestName: false,
  description: false,
  severity: false,
  reporterName: false,
  reporterEmail: false,
  currentLocation: false
});
setSelectedOption({value: "", label: "Please Select"});
SetResponse(response);
    }
}

  const onChange = (event: any) => {
    if(event.target!==undefined){
      if(event.target.value==="" && event.target.name==="description"){
        setTextAreaError(true);
      }
      else if(event.target.name==="description"){
        setTextAreaError(false);
      }
    setValues({ ...values, [event.target.name]: event.target.value });    
    }
    else{
      setValues({ ...values, "severity": event.value });
      setSelectedOption(event);
      setSelectError(false);
    }
  };

  return (
    <div>
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Service Request Form</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
            selectedOption={selectedOption}
            focused={focused}
            setFocused={setFocused}
            selectError={selectError}
            textAreaError={textAreaError}
          />
        ))}
        <button className="buttonStyle">Submit</button>
      </form>
      </div>
      
      {response &&
      <div className="resultBorder">
    <div className="resultLayout">
      <h2>Complaint sent</h2>
        <h6>Service Request Name: {response?.data?.createServiceRequest?.serviceRequestName}</h6>
        <h6>Service Request Description: {response?.data?.createServiceRequest?.serviceRequestDescription}</h6>
        <h6>Creation Date: {dayjs(response?.data?.createServiceRequest?.createdAt).format("DD/MM/YYYY")}</h6>
        <h6>Severity: {response?.data?.createServiceRequest?.severity}</h6>
        <h6>Resolution Date : {response?.data?.createServiceRequest?.resolutionDate}</h6>
        <h6>Reporter Name: {response?.data?.createServiceRequest?.reporterName}</h6>
        <h6>Contact Information: {response?.data?.createServiceRequest?.contactInformation}</h6>
        <h6>Location: {response?.data?.createServiceRequest?.currentLocation}</h6>
        <h6>Unique case number: {response?.data?.createServiceRequest?.id}</h6>
      </div>
    </div>
    }
    
</div>
  );
};

export default Components;