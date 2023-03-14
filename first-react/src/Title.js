import React from 'react';

export default function Title(props) {
  return <div>

        <h1 style={{backgroundColor:'orange',borderBottom:'5px solid black',textAlign:'center'}}>
        {props.mainTitle}
        {props.subTitle}
        </h1>
  </div>;
}
