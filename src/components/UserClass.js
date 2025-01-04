import { Component } from "react";

class UserClass extends Component {

    constructor(props) {
        super(props)

        this.state = {
            userInfo: {
                id: "-",
                name: 'dummy',
                type: "default"
            }
        }
    }

    async componentDidMount() {
        const data = await fetch('https://api.github.com/users/abhishek5677')
        const json = await data.json()
        // console.log(json);
        this.setState({
            userInfo: json
        })

        this.timer = setInterval(() => {
            console.log('timer');
        }, 1000)
    };


    componentDidUpdate(prevProps, prevState) {
        if (prevState.userInfo.name !== this.state.userInfo.name) {
            console.log("UserClass component did mount");
        }
    }

    componentWillUnmount() {
        clearInterval(this.timer)
        console.log("UserClass component will unmount");
    }

    render() {
        const { id, name, type, avatar_url } = this.state.userInfo;
        return (
            <div className="user-card">
                <h2>Id: {id}</h2>
                <h2>Name: {name}</h2>
                <h4>type: {type}</h4>
                <img src={avatar_url} />
                <p>Email: abhishekgarad5677@gmail.com</p>
            </div>
        )
    }
}

export default UserClass;