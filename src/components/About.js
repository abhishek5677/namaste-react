import React from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from '../utils/UserContext'

class About extends React.Component {

    constructor(props) {
        super(props)
        // console.log("parent constructor");

    }

    componentDidMount() {
        // console.log("parent mount called");
    }

    render() {
        // console.log("parent render");
        return (
            <div>
                <h1>About page</h1>
                <UserContext.Consumer>
                    {({ loggedInUser, userNumber }) => {
                        console.log(userNumber, loggedInUser);
                        
                        return (
                            <>
                                <h1 className="font-bold text-2xl">{loggedInUser}</h1>
                                <h1 className="font-bold text-2xl">{userNumber}</h1>
                            </>
                        )
                    }}
                </UserContext.Consumer>
                {/* <User name={"Abhishek Garad (function)"} /> */}
                <UserClass name={"First "} location={'Mumbai'} />
            </div>
        )
    }
}

// const About = () => {
//     return (
//         <div>
//             <h1>About page</h1>
//             {/* <User name={"Abhishek Garad (function)"} /> */}
//             <UserClass name={"Abhishek Garad (class)"} location={'Mumbai'} />
//         </div>
//     )
// }

export default About;