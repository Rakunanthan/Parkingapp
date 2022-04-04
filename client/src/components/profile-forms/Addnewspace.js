// import React from 'react'
// import { Fragment,useState } from 'react'
// import { Link,useNavigate } from 'react-router-dom'
// import PropTypes from 'prop-types'
// import {connect} from 'react-redux'
// import { addnewspace } from '../../actions/profile'
// const Addnewspace = props => {

//     const Createprofile = ({createProfile,history}) => {
//         const [formData,setFormData] = useState({
//             location: '',
//             desc:'',
//             postcode:'',
//             phnno:''
//         });
//         const {
//             location,
//             desc,
//             postcode,
//             phnno
//         }=formData;
//         onChange=e=>setFormData({...formData,[e.target.name]:e.target.value})
//     return(<div>
//     <div style={{
//    "margin-top":"100px"

//  }}></div>
//   <Fragment>
//       <h1 className="large text-primary">
//       Create Your Profile
//     </h1>
//     <p className="lead">
//       <i className="fas fa-user"></i> Enter your Parking space details
//     </p>
  
//     <form className="form" onSubmit={e=>onSubmit(e)}>
//       <div className="form-group">
  
//       </div>    
//       <div className="form-group">
//         <input type="text" placeholder="Location" name="location" value={location} onChange={e=> onChange(e)}/>
//         <small className="form-text"
//           >City & State</small
//         >
//       </div>
//       <div className="form-group">
//       <textarea
//             placeholder="A short description about your place"
//             name="desc"
//             value={desc}
//             onChange={e=> onChange(e)}
//           />
//         <small className="form-text"
//           >Describe your Space</small
//         >
//       </div>
//       <div className="form-group">
//         <input type="text" placeholder="Mobile number" name="phnno" value={phnno}
//             onChange={e=> onChange(e)} />
//         <small className="form-text"
//           >Mobile Number</small
//         >
//       </div>
//       <div className="form-group">
//         <input type="text" placeholder="Postcode" name="postcode" value={postcode}
//             onChange={e=> onChange(e)} />
//         <small className="form-text"
//           >Parking space postcode</small
//         >
//      </div>
//       <input type="submit" className="btn btn-primary my-1" />
//       <Link to="/Dashboard" className="btn btn-primary my-1">
//           Go Back
//         </Link>
//     </form>
//   </Fragment>
//   </div>
// )
// }

// Addnewspace.propTypes = ({
//     addnewspace:PropTypes.func.isRequired
// });


// const mapStateToProps=state=>({
//     profile:state.profile
// });
// export default connect(mapStateToProps,{createProfile,getCurrentProfile})(EditProfile);
