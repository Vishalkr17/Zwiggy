import React from 'react';
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);

    console.log('Parent Constructor');
  }

  componentDidMount() {
    // console.log('Parent Component Mounted')
  }

  render() {
    // console.log('Parent Render')
    return (
      <div className='mt-20 px-4 mx-auto bg-gray-100'>
        <h1 className='text-3xl font-semibold mb-8'>About Class Component</h1>
        <div className='bg-white p-8 rounded-lg shadow-md'>
          <h2 className='text-xl font-bold mb-4'>User Information</h2>
          <UserClass name={"First"} location={"Ranchi"}></UserClass>
        </div>
      </div>
    );
  }
}

export default About;
