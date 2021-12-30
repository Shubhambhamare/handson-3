import React, {useState} from "react";

const Employe = () => {
    const [userDetails, setUserDetails] = useState({name:"",department:"",rating:""})
    const[header,setHeader]=useState("EMPLOYEE FEEDBACK FORM")
    const [record, setRecord] = useState([])
    const [btnc, setbtnc] = useState(false)
    const handleInput = (e) => {
        const name = e.target.name
        const value = e.target.value
        console.log(value)
        setUserDetails({...userDetails, [name]:value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const storeRecord = {...userDetails, id:new Date().getTime().toString()}
        setRecord([...record, storeRecord])
        console.log(record)

        setbtnc(true)
        setHeader("EMPLOYEE FEEDBACK DATA")
    
    }
    const gobAckbtn= ()=>{
        setHeader("EMPLOYEE FEEDBACK FORM ") 
        setUserDetails({name:"",department:"",rating:""}) 
        setbtnc(false)
    }
       
    return(
        <div >
            <div ><h1>{header}</h1></div>

            {btnc?<>
              <div className="DbDisplay">
              {
                  record.map((curElement)=>{
                      return(
                          <div className="detailbox">
                              Name : {curElement.name} | Department : {curElement.department} | Rating : {curElement.rating}
                          </div>
                      )
                  })
              }


          </div>
                    <button className="submit-btn" onClick={gobAckbtn} type="button" >Go Back</button></>
            :
                
            <form action="" onSubmit={handleSubmit}>
                <div>
                    <label user="name">Name : </label>
                    <input required type="text" name="name" id="name" className="inputfield" value={userDetails.name} onChange={handleInput}/>
                </div>
                <div>
                    <label user="department" >Department : </label>
                    <input required type="text" name="department" id="department" className="inputfield" value={userDetails.department} onChange={handleInput}/>
                </div>
                <div>
                    <label user="rating" >Rating : </label>
                    <input  required type="number" name="rating" id="rating" className="inputfield" value={userDetails.rating} onChange={handleInput}/>
                </div>
                <button type="submit" className="submit-btn" >Click Here To Submit</button><br/><br/>
            </form>
        }
       
         
        </div>    
    )
}
export default Employe
