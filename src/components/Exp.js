import React from 'react'
import { Route, Switch } from 'react-router'


const Home=(props)=>{
    console.log(props)
    return(
        <div>
           <h1>For Checking Purpose </h1>
        </div>
    )
}
 const Exp = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Home}/>
            </Switch>
        </div>
    )
}

export default Exp; 