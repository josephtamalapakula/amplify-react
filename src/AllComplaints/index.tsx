import './styles.css';
const AllComplaints = (props: any) => {
    const { list } = props;
    return (
        
    <div>
        All Existing Requests
        <div className='result'>
        {list && list.map((item: any) =>
        <div className="resultBorder">
        <div className="resultLayout">
            <h6>unique case number:{item?.id}</h6> 
            <h6>Service Request Name:{item?.serviceRequestName}</h6>
            <h6>Service Request Description:{item?.serviceRequestDescription}</h6>
            <h6>Creation Date:{item?.createdAt}</h6>
            <h6>Severity:{item?.severity}</h6>
            <h6>Resolution Date:{item?.resolutionDate}</h6>
            <h6>Reporter Name:{item?.reporterName}</h6>
            <h6>Contact Information:{item?.contactInformation}</h6>
            <h6>Location:{item?.currentLocation}</h6>            
        </div>
        </div>
        )}
        </div>

    </div>
    )
}
  
export default AllComplaints;