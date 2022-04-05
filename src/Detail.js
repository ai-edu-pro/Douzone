import React from "react";
import { useHistory, useParams }  from 'react-router-dom';
import styled from 'styled-components';
import './Detail.scss';

let MyBox = styled.div`
    padding:20px;
    font-size: 25px;
    font-weight:bold;
`;

let MyTitle = styled.h3`
    font-size: 25px;
    color: ${ props=>props.color };
`;

function Detail(props) {

    //console.log(props.shrit);

    let history = useHistory();
    let { id } = useParams();

    let search = props.shrit.find((item)=>{
            return item.id == id;
    });

    return(
        <div className="container">
           <MyBox>Detail Page</MyBox>
           {/* <img src={"/images/t8.jpg"} alt="" /> */}
           {/* <img src={"../images/t8.jpg"} alt="" /> */}
            {/* 
            <MyBox>
                <MyTitle color="blue">안녕하세요.</MyTitle>
                <MyTitle color={'red'}>반갑습니다.</MyTitle>
                <h4>328482374</h4>
            </MyBox> */}

            <div className="my-alert-yellow">
                <p>재고가 얼마 남지 않았습니다.</p>
            </div>

            <div className="row align-items-center">
                <div className="col-md-6  red ">
                {/* <img src={"https://raw.githubusercontent.com/ai-edu-pro/busan/main/t1.jpg"} alt= "shirt" width="100%"></img> */}
                <img
                src={
                  `https://raw.githubusercontent.com/ai-edu-pro/busan/main/t` 
                   + (search.id+1) 
                   + `.jpg`
                }
                />

                <h4>{search.title}</h4>
                <p>{search.content}</p>
                <p>{search.price}원</p>
                <button className="btn btn-danger">주문하기</button>&nbsp;
                <button onClick={()=>{ history.goBack() }}  className="btn btn-primary">뒤로가기</button>&nbsp;
                <button onClick={()=>{history.push("/")}} className="btn btn-success">MainPage</button>
                </div>
            </div>

        </div>
    );
}

export default Detail;