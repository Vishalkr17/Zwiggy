import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: 'dummy name',
        location: 'dummy location',
        avatar_url: "dummy url"
      }
    };
  }

  async componentDidMount() {
    const data = await fetch('https://api.github.com/users/vishalkr17');
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
  }

  render() {
    return (
      <div className="max-w-sm mx-auto overflow-hidden shadow-lg bg-white rounded-lg mt-10">
        <img
          className="w-full h-48 rounded-lg object-cover object-center"
          src={this.state.userInfo.avatar_url}
          alt="User Avatar"
        />
        <div className="p-6">
          <h2 className="text-xl font-bold mb-2">{this.state.userInfo.name}</h2>
          <h3 className="text-gray-600 text-lg mb-4">
            {this.state.userInfo.location}
          </h3>
        </div>
      </div>
    );
  }
}

export default UserClass;
