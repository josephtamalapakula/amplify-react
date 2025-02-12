import Select from 'react-select';
import "./formInput.css";

const FormInput = (props: any) => {
  
  const { label, errorMessage, onChange, options, selectedOption, selectError, textAreaError,
    focused, setFocused, id, ...inputProps  } = props;
  const handleFocus = (event: any) => {
    setFocused({...focused, [event.target.name]:true});
  };

  return (
    <div className="formInput">
      <label>{label}</label>
      {(inputProps.type==="text"||inputProps.type==="email")&&<input
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={handleFocus}
        focused={focused[inputProps.name].toString()}
      />
      }
      {
        inputProps.type==="textarea"&&<><textarea
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={handleFocus}
        focused={focused[inputProps.name].toString()}
        className="textDesign"
      />
      <span className={textAreaError?'selectError':'selectError2'}>{errorMessage}</span>
      </>
      }
      {
        inputProps.type==="select"&&<><Select 
        value={selectedOption}
        options={options}
        onChange={onChange}
        className='dropdownStyle'
        />
        <span className={selectError?'selectError':'selectError2'}>{errorMessage}</span>
        </>
      }
      <span>{errorMessage}</span>
    </div>
  );
};

export default FormInput;