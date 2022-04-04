import React from "react";
import { useHistory }  from 'react-router-dom';

function Detail() {

    let history = useHistory();

    return(
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img src="https://raw.githubusercontent.com/ai-edu-pro/busan/main/t1.jpg" width="100%" /> 
                </div>
            </div>

            <div>
                <h4>상품명</h4>
                <p>상품설명</p>
                <p>120000원</p>
                <button className="btn btn-danger">주문하기</button>
                {/* <button onClick={()=>{ history.goBack() }}  className="btn btn-danger">뒤로가기</button> */}
                <button onClick={()=>{ history.push('/') }}  className="btn btn-danger">뒤로가기</button>
            </div>


        </div>
    );
}

export default Detail;