import React from "react";

class UserClass extends React.Component {

    constructor(props){
        super(props);

        this.state = {
           userInfo:{
            name: 'dummy name',
            location: 'dummy location',
            avatar_url: "dummy url"
           }
        }

        // console.log(this.props.name + ' Child Constructor')
    }

   async componentDidMount(){
        // console.log(this.props.name + ' Child Component Mounted')

        const data = await fetch('https://api.github.com/users/vishalkr17')
        const json = await data.json()

        this.setState({ 
            userInfo : json,
        })

    }
    
    render(){
        const{name, location} = this.props;
        

        // console.log(this.props.name + ' Child Render')
        
        return(
            <div className="user-card">
                <img src={this.state.userInfo.avatar_url}></img>
                <h2>Name : {this.state.userInfo.name} </h2>
                <h3>Location: {this.state.userInfo.location}</h3>
            </div>
        )
    }
}

export default UserClass;