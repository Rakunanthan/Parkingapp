<<<<<<< HEAD:client/src/components/Routing/Privateroute.js
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import  {Route,Navigate} from 'react-router-dom'
const Privateroute = ({
    component:Component,
    auth:{isAuthenticated,loading},
    ...rest
}) =>( 
   <Route
    {...rest} 
    render ={props =>
        !isAuthenticated && !loading?
    (<Navigate to='/login' />):(<Component{...props}/>)}/>
);


Privateroute.propTypes = {
    auth:PropTypes.object.isRequired
};
const mapStateProps=state=>({
    auth: state.auth

})
export default connect(mapStateProps)(Privateroute)
=======
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import  {Route,Navigate} from 'react-router-dom'
const Privareroute = ({component:Component,auth:{isAuthenticated,loading},...rest}) => 
   <Route {...rest} render ={props =>!isAuthenticated && !loading?
    (<Navigate to='/login' />):(<Component{...props}/>)}/>
   


Privareroute.propTypes = {
    auth:PropTypes.object.isRequired
}
const mapStateProps=state=>({
    auth: state.auth

})
export default connect(mapStateProps)(Privareroute)
>>>>>>> bb42394725417005e497b9e5cf62b95c5b2ba248:client/src/components/Routing/Privareroute.js
