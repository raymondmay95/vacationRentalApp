import React, {useState} from "react";
import { Button } from "react-bootstrap";

/*//ToDo:
   - move functions to utils
   - use uuid maybe?
   - create and sync database at later point.
*/

const options: string[] = [
   "Choose a resort...",
   "Hauna Kai Resort",
   "Luana Garden Villas at Honua Kai",
   "Hyatt Residence Club Kaanapali",
   "The Kaanapali Ali'i",
   "The Whaler on Kaanapali Beach",
   "Marriott's Maui Ocean Club"
]

const today = ():string => {
   let x = new Date();
   let y:string = x.getFullYear().toString();
   let m:string = (x.getMonth() + 1).toString();
   let d:string = x.getDate().toString();
   (d.length === 1) && (d = '0' + d);
   (m.length === 1) && (m = '0' + m);
   let yyyymmdd:string = y + "-" + m + "-" + d;
   return yyyymmdd
}

const todaysDate = today()

interface IState {
   formData : {
      resortSelection: string,
      numberOfBedRooms: number,
      tripStart: string,
      tripEnd: string
   }
}

const Search: React.FC = () => {

   const [formData, setFormData] = useState<IState["formData"]>({
      resortSelection: "",
      numberOfBedRooms: 0,
      tripStart: todaysDate,
      tripEnd: todaysDate
   })

   const renderedOptions = options.map((data)=>(
      <option value={data} key={data} >{data}</option>
   ))

   const handleChange = (e: any) => {
      setFormData((state) => {
         return {
            ...state,
            [e.target.name]: e.target.value
         }
      })
   }
   const handleSubmit = (e: any) => {
      e.preventDefault()
      console.log(formData)
   }

   return (
      <>
         <div className="container d-flex justify-content-center align-items-center">
           <form onSubmit={handleSubmit} className="form">
            <div className="row">
              <select
              className="form-select"
              style={{fontSize: "24px"}}
              name="resortSelection"
              placeholder="All Resorts"
              onChange={handleChange}
              required
              >
               {renderedOptions}
              </select>
            </div>
            <div className="d-flex flex-row mt-1">
              <select
              className="form-select"
              name="numberOfBedRooms"
              placeholder="Bedrooms"
              onChange={handleChange}
              required
              >
                 <option value="">Bedrooms</option>
                 <option value="1">1</option>
                 <option value="2">2</option>
                 <option value="3">3</option>
                 <option value="4">4</option>
              </select>
              <input
              className="form-control"
              type="date"
              id="start"
              name="tripStart"
              onChange={handleChange}
              required
              min={todaysDate}
              max="2022-12-31" />
              <input
              className="form-control"
              type="date"
              id="end"
              name="tripEnd"
              onChange={handleChange}
              required
              min={todaysDate}
              max="2022-12-31" />
              <Button type="submit" className="btn btn-success">Search</Button>
            </div>
           </form>
         </div>
      </>
   )
}

export default Search
