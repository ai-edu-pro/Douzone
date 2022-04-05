import React from "react";
import {Link} from 'react-router-dom';


function Card(props) {
  // console.log('props.i = ' + props.i);

  return (
    <div>
      <div className="col-md-4">
          
            {/* <img src='https://raw.githubusercontent.com/ai-edu-pro/busan/main/t' + ( props.i + 1) + '.jpg' alt="티셔츠" width="100%" /> */}
            {/* <img src={'https://raw.githubusercontent.com/ai-edu-pro/busan/main/t1.jpg' } /> */}
            <img
                src={
                  `https://raw.githubusercontent.com/ai-edu-pro/busan/main/t` 
                   + (props.i+1) 
                   + `.jpg`
                }
              />

            <h4 >{ props.shrit.title }</h4>
            <h6>{props.shrit.content}</h6>
            <p>{props.shrit.price}</p>
      </div>
    </div>
  );

}

export default Card;