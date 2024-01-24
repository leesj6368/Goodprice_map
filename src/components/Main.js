import React from 'react';

const Main = () => {
  return (
    <div style={{ textAlign: 'center' }}>
     <br></br><br></br><br></br>
      <p style={{ margin: '0 auto', maxWidth: '100%' }}>
        <span style={{ color: 'red', fontWeight: 'bold', fontSize:25}}>착한가격업소</span><span style={{ fontSize:20}}>는 행정자치부와 지방자치단체가 지정한 우수 물가안정 모범업소입니다.</span>
      </p><br></br>
      <img
        src="/images/mainlogo.jpg"
        alt="메인 로고"
        style={{ width: '100%', height: '500px' }}
      />
    </div>
  );
};

export default Main;