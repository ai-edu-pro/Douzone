import React, { useEffect , memo, useState} from "react";
import { Table } from "react-bootstrap";
// import{ connect } from 'react-redux';
import{ useDispatch, useSelector } from 'react-redux';

function Cart(props) {

    let state = useSelector((state)=> state.reducer);
   // console.log(state.reducer);
    let dispatch = useDispatch();

  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경</th>
          </tr>
        </thead>
        <tbody>
            {
            //   state.reducer.map((item, i)=>{
              state.map((item, i)=>{
                   return(
                    <tr key={i}>
                        <td>1</td>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.quan}</td>
                        <td><button onClick={()=>{dispatch({type: 'INCREASE', no : item.id})}}> + </button></td>
                        <td><button onClick={()=>{dispatch({type: 'DECREASE', no : item.id})}}> - </button></td>
                        {/* <td><button onClick={()=>{props.dispatch({type: 'DECREASE', no : item.id})}}> - </button></td> */}
                    </tr>
                   )
               }) 
            }
        </tbody>
      </Table>
          
          {
             props.alertClose === true
             ? (<div className="my-alert-yellow">
                 <p>신규 구매하는 분들에게는 30% DC</p>
                  <button  onClick={()=>{props.dispatch({type: 'alertClose'})}} className="btn btn-primary mt-3">닫기</button>
                </div> )
            : null
          }

          {/* <div>
              <Parent name={"doaayeon"}  age="1" />
          </div> */}
         
    </div>
  );
}


//////////////////////////////////////////




// function Parent(props){
   
//     return(
//         <div>
//             <Child1  name={props.name} />
//             <Child2 age={props.age} />
//         </div>
//     )
// };

// let Child1 = function (){
//     useEffect((item)=>{ 
//         console.log("Child1 랜더링됨111");
//     });
//     return(
//         <div>
//            <h3> Child1 111222221</h3>
//         </div>
//     )
// };

// let Child2 = memo(function (){
//     useEffect((item)=>{ 
//         console.log("Child2 랜더링됨2222");
//     });
//     return(
//         <div>
//            <h3> Child2 77777</h3>
//         </div>
//     )
// });


export default Cart;

// function stateStatus(state){
//     console.log(state);
//     // console.log(state.reducer);
//     return {
//         state : state.reducer,
//         alertClose : state.reducerClose,
//     }
// }
// export default connect(stateStatus)(Cart);
