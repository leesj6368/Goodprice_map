import React, { useState } from 'react';
import './Detail.css';

const restaurantData = [
  {
    title: '가든미용실',
    food: '미용',
    address: '상당구 청남로 2197번길 12(석교동)',
    description: '저렴한 가격, 친절한 운영',
    category: '미용실',
    parking: '주차 정보없음',
    phone: '043-223-8097'
  },
  {
    title: '개미돈까스',
    food : '돈까스',
    address: '상당구 사직대로 361번길 54-11',
    description: '다양한 메뉴, 저렴한 가격',
    category : '한식',
    parking : '주차 불가능',
    phone : '043-223-7456'
},
{
    title: '상하이 객잔',
    food : '짜장면',
    address: '상당구 월평로 184번길 148',
    description: '푸짐한 양, 깨끗한 환경',
    category : '중식',
    parking : '주차 가능',
    phone : '043-283-5588'
},
{
    title: '명인헤어샵',
    food : '커트',
    address: '흥덕구 풍년로 26',
    description: '깨끗한 실내',
    category : '미용실',
    parking : '주차 불가능',
    phone : '043-232-5530'
},
{
    title: '사랑방',
    food : '삼겹살',
    address: '흥덕구 서경로 16번길 3',
    description: '깨끗한 실내, 다양한 메뉴',
    category : '한식',
    parking : '주차 불가능',
    phone : '043-232-0799'
},
{
    title: '곰집',
    food : '동태찌개',
    address: '상당구 상당로 131번길 8-2(북문로2가)',
    description: '밥,반찬 무제한 제공',
    category : '한식',
    parking : '주차 가능',
    phone : '043-256-6949'
},
{
    title: '봄날의 보리밥',
    food : '보리밥',
    address: '상당구 상당로 144번길 22(수동)',
    description: '시니어 일자리 창출 업소',
    category : '한식',
    parking : '주차 가능',
    phone : '043-223-6080'
},
{
    title: '콩가루삼겹살',
    food : '삼겹살',
    address: '청원구 중앙로 172(내덕동)',
    description: '학생대상 저렴한 가격',
    category : '한식',
    parking : '주차 가능',
    phone : '043-250-1030'
},
{
    title: '청해루',
    food : '짜장면',
    address: '상당구 대성로 38(서운동)',
    description: '넓은 실내, 깨끗하고 친절한 업소',
    category : '중식',
    parking : '주차 불가능',
    phone : '043-221-6101'
},
{
    title: '순신토불이',
    food : '삼겹살',
    address: '상당구 무농정로 96(용암동)',
    description: '직접 수확한 야채로 신선함과 맛 최고',
    category : '한식',
    parking : '주차 가능',
    phone : '043-293-2423'
},
{
    title: '한복남칼국수',
    food : '칼국수',
    address: '상당구 산성로 16(금천동)',
    description: '저렴한 가격, 맛있는 맛',
    category : '한식',
    parking : '주차 불가능',
    phone : '정보없음'
},
{
    title: '나들미용실',
    food : '커트',
    address: '흥덕구 복대로 229번길 15(복대동)',
    description: '어르신파마 5천원 할인',
    category : '미용실',
    parking : '주차 가능',
    phone : '043-905-5234'
},
{
    title: '고려미용실',
    food : '커트',
    address: '서원구 호국로 64(사직동)',
    description: '친절운영으로 단골고객 많음',
    category : '미용실',
    parking : '주차 가능',
    phone : '043-274-6207'
},
{
    title: '용궁목욕탕',
    food : '목욕탕',
    address: '서원구 충렬로 42(사직동)',
    description: '친절운영으로 단골고객 많음',
    category : '목욕탕',
    parking : '주차 가능',
    phone : '043-268-1212'
},
{
    title: '명동식당',
    food : '청국장',
    address: '흥덕구 천석로 56(봉명동)',
    description: '청국장 직접 제조',
    category : '한식',
    parking : '주차 불가능',
    phone : '043-268-8320'
},
{
    title: '힘찬낙지',
    food : '낙지볶음',
    address: '서원구 예체로 67번길 62(사창동)',
    description: '청국장 직접 제조',
    category : '한식',
    parking : '주차 불가능',
    phone : '043-267-1006'
},
{
    title: '호야식당',
    food : '보리밥',
    address: '흥덕구 성봉로 277(복대동)',
    description: '청국장 직접 제조',
    category : '한식',
    parking : '주차 불가능',
    phone : '043-264-2291'
},
{
    title: '청수생고기',
    food : '삼겹살',
    address: '흥덕구 경산로 49(가경동)',
    description: '저렴한 가격과 깨끗한 시설',
    category : '한식',
    parking : '주차 불가능',
    phone : '043-231-7730'
},
{
    title: '황제왕갈비왕냉면',
    food : '황제밥상',
    address: '상당구 용암북로130(용암동)',
    description: '종업원 전원이 위생복 및 명찰, 친절한 서비스',
    category : '한식',
    parking : '주차 가능',
    phone : '043-284-8292'
},
{
    title: '삼흥집',
    food : '삼겹살',
    address: '상당구 남일면 단재로 744',
    description: '맛집으로 유명, 2대째 가업을 이어 대물림전통음식계승업소로 지정',
    category : '한식',
    parking : '주차 불가능',
    phone : '043-297-5162'
},
{
    title: '대운분식',
    food : '콩나물밥',
    address: '흥덕구 옥산면 청주역로 652',
    description: '타지역에서도 소문듣고 찾을만큼 맛있음, 김치찌개가 유명한 식당',
    category : '한식',
    parking : '주차 불가능',
    phone : '043-260-0667'
},
{
    title: '홍등',
    food : '짜장면',
    address: '흥덕구 성봉로 247',
    description: '충북대학교 인근, 주 고객이 학생임에 저렴하게 제공, 부부가 운영하여 인건비 절감',
    category : '중식',
    parking : '주차 불가능',
    phone : '043-265-8246'
},
{
    title: '수잔 도넛&커피',
    food : '도넛',
    address: '흥덕구 강내면 탑연리',
    description: '주인부부가 직접 반죽하고 판매',
    category : '기타',
    parking : '주차 가능',
    phone : '043-233-5025'
},
{
    title: '오성당',
    food : '쫄면',
    address: '흥덕구 풍산로 55',
    description: '청주의 전통있는 빵집',
    category : '한식',
    parking : '주차 불가능',
    phone : '043-256-7197'
},
{
    title: '오빠네',
    food : '옛날햄버거',
    address: '서원구 서원남로 20번길 1',
    description: '저렴하지만 맛은 고급스러운 옛날 햄버거 전문점',
    category : '기타',
    parking : '주차 불가능',
    phone : '정보없음'
},
{
    title: '우미교복',
    food : '교복판매',
    address: '상당구 상당로 27',
    description: '우수한 재질과  오랫동안 저렴한 가격을 유지해오고 있는 청주에서 인정받는 교복판매점',
    category : '기타',
    parking : '주차 가능',
    phone : '043-221-1317'
},
{
    title: '두부만드는 사람들',
    food : '두부',
    address: '서운구 경신로 32-15 ',
    description: '100% 국내산 콩으로 매장에서 매일 직접 만들어 판매',
    category : '한식',
    parking : '주차 불가능',
    phone : '043-235-8892'
},
{
    title: '진천장터순대',
    food : '순대국밥',
    address: '흥덕구 봉명로 231-1 ',
    description: '푸짐한 양과 맛있는 깍두기',
    category : '한식',
    parking : '주차 불가능',
    phone : '043-272-5388'
},
{
    title: '송원칼국수',
    food : '조개칼국수',
    address: '상당구 우암산로 5(수동)',
    description: '직접 반죽한 손칼국수',
    category : '한식',
    parking : '주차 가능',
    phone : '043-256-5292'
},
{
    title: '송원칼국수',
    food : '조개칼국수',
    address: '상당구 우암산로 5(수동)',
    description: '직접 반죽한 손칼국수',
    category : '한식',
    parking : '주차 가능',
    phone : '043-256-5292'
},
{
    title: '나성불고기',
    food : '된장찌개',
    address: '청원구 향군로 51(우암동)',
    description: '친절운영',
    category : '한식',
    parking : '주차 불가능',
    phone : '043-253-3511'
},
{
    title: '소문난올갱이해장국',
    food : '올갱이국',
    address: '청원구 충청대로 27(내덕동)',
    description: '주인장의 한결같은 맛',
    category : '한식',
    parking : '주차 불가능',
    phone : '043-215-7008'
},
{
    title: '짜장나라',
    food : '짜장면',
    address: '상당구 내덕동 150-1',
    description: '신선한 재료 사용',
    category : '중식',
    parking : '주차 불가능',
    phone : '043-212-2999'
},
{
    title: '은순이네 빨간돼지',
    food : '삼겹살',
    address: '상당구 무심동로 372번길21-8(서문동)',
    description: '삼겹살 특성화 거리인 서문시장 내에 위치',
    category : '한식',
    parking : '주차 가능',
    phone : '043-224-7782'
},
{
    title: '컷트마당',
    food : '컷트',
    address: '상당구 월평로206(용암동)',
    description: '14년 이상 가격 동결, 업소주 친절함',
    category : '미용실',
    parking : '주차 불가능',
    phone : '043-293-9123'
},
{
    title: '옛날이발소',
    food : '컷트',
    address: '흥덕구 1순환로 523번길 6',
    description: '사라져만 가는 이발소의 향수와 저렴한 가격덕에 주민들의 발걸음이 끊이지 않음',
    category : '미용실',
    parking : '주차 불가능',
    phone : '정보없음'
},
{
    title: '사천성',
    food : '자장면',
    address: '상당구 호미로 167번길 54',
    description: '저렴한 가격과 한결같은 맛',
    category : '중식',
    parking : '주차 가능',
    phone : '043-283-7799'
},
{
    title: '값싼당',
    food : '자장면',
    address: '상당구 대성로 55(서운동)',
    description: '주인장의 한결같은 맛',
    category : '중식',
    parking : '주차 가능',
    phone : '043-274-2848'
},
];

const Detail = () => {
    const [selectedMenu, setSelectedMenu] = useState('all');
  
    const handleMenuClick = (category) => {
      setSelectedMenu(category);
    };
  
    const filteredRestaurants = selectedMenu === 'all'
      ? restaurantData
      : restaurantData.filter(restaurant => restaurant.category === selectedMenu);
  
    return (
      <div>
        <br /><br />
  
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
          <button
            style={{
              fontSize: '14px',
              padding: '10px',
              backgroundColor: selectedMenu === 'all' ? 'black' : 'transparent',
              color: selectedMenu === 'all' ? 'white' : 'black',
              textDecoration: selectedMenu === 'all' ? 'underline' : 'none',
            }}
            onClick={() => handleMenuClick('all')}
          >
            전체보기
          </button>
          <button
            style={{
              fontSize: '14px',
              padding: '8px',
              backgroundColor: selectedMenu === '한식' ? 'black' : 'transparent',
              color: selectedMenu === '한식' ? 'white' : 'black',
              textDecoration: selectedMenu === '한식' ? 'underline' : 'none',
            }}
            onClick={() => handleMenuClick('한식')}
          >
            한식
          </button>
          <button
            style={{
              fontSize: '14px',
              padding: '8px',
              backgroundColor: selectedMenu === '중식' ? 'black' : 'transparent',
              color: selectedMenu === '중식' ? 'white' : 'black',
              textDecoration: selectedMenu === '중식' ? 'underline' : 'none',
            }}
            onClick={() => handleMenuClick('중식')}
          >
            중식
          </button>
          <button
            style={{
              fontSize: '14px',
              padding: '8px',
              backgroundColor: selectedMenu === '미용실' ? 'black' : 'transparent',
              color: selectedMenu === '미용실' ? 'white' : 'black',
              textDecoration: selectedMenu === '미용실' ? 'underline' : 'none',
            }}
            onClick={() => handleMenuClick('미용실')}
          >
            미용실
          </button>
          <button
            style={{
              fontSize: '14px',
              padding: '8px',
              backgroundColor: selectedMenu === '목욕탕' ? 'black' : 'transparent',
              color: selectedMenu === '목욕탕' ? 'white' : 'black',
              textDecoration: selectedMenu === '목욕탕' ? 'underline' : 'none',
            }}
            onClick={() => handleMenuClick('목욕탕')}
          >
            목욕탕
          </button>
          <button
            style={{
              fontSize: '14px',
              padding: '8px',
              backgroundColor: selectedMenu === '기타' ? 'black' : 'transparent',
              color: selectedMenu === '기타' ? 'white' : 'black',
              textDecoration: selectedMenu === '기타' ? 'underline' : 'none',
            }}
            onClick={() => handleMenuClick('기타')}
          >
            기타
          </button>
        </div>
  
        <ul className="restaurant-list">
          {filteredRestaurants.map((restaurant, index) => (
            <li key={index} className="restaurant-item">
              <strong>{restaurant.title}</strong><br />
              메뉴: {restaurant.food}<br />
              주소: {restaurant.address}<br />
              설명: {restaurant.description}<br />
              카테고리: {restaurant.category}<br />
              주차: {restaurant.parking}<br />
              전화번호: {restaurant.phone}<br />
            </li>
          ))}
        </ul>
      </div>
    );
  };
  export default Detail;