interface Room {
  key: number;
  name: string;
  location: string;
  image: string;
  totalGuest: number;
  rating: number;
  numberOfRating: number;
  price: number;
  description: string;
  amenities: string[];
  reviews: Review[];
}

interface Review {
  id: number;
  userName: string;
  rating: number;
  date: string;
  comment: string;
}

const Rooms: Room[] = [
  {
    key: 1,
    name: "스탠다드 룸",
    location: "서울 중구",
    image: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    totalGuest: 2,
    rating: 4.8,
    numberOfRating: 124,
    price: 150000,
    description: "5~9층에 위치한 스탠다드룸은 편안함과 쾌적함이 인상적이 휴식 환경을 제공합니다. 모던한 아름다움과 신라호텔 수준의 고급 침구 및 침대 그리고 고급 어메니티로 한 단계 업그레이드 된 휴식을 경험하십시오.",
    amenities: ["무료 Wi-Fi", "미니바", "에어컨", "금고", "평면 TV"],
    reviews: [
      {
        id: 1,
        userName: "김철수",
        rating: 5,
        date: "2023-09-15",
        comment: "정말 깨끗하고 편안한 객실이었습니다. 직원들도 친절하고 서비스가 좋았습니다."
      },
      {
        id: 2,
        userName: "이영희",
        rating: 4,
        date: "2023-08-22",
        comment: "전체적으로 만족스러웠으나 욕실 환기가 조금 아쉬웠습니다. 그래도 다시 방문하고 싶은 숙소입니다."
      },
      {
        id: 3,
        userName: "박지민",
        rating: 5,
        date: "2023-07-30",
        comment: "위치도 좋고 시설도 깨끗해서 정말 만족스러웠습니다. 다음에 서울 방문할 때도 이용할 예정입니다."
      }
    ]
  },
  {
    key: 2,
    name: "디럭스 룸",
    location: "서울 중구",
    image: "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    totalGuest: 3,
    rating: 4.9,
    numberOfRating: 98,
    price: 220000,
    description: "10~15층에 위치한 디럭스룸은 더 넓은 공간과 고급스러운 인테리어로 특별한 휴식을 제공합니다. 도시의 멋진 전망과 함께 프리미엄 어메니티와 서비스를 경험해 보세요.",
    amenities: ["무료 Wi-Fi", "미니바", "에어컨", "금고", "평면 TV", "욕조", "목욕 가운"],
    reviews: [
      {
        id: 1,
        userName: "정민수",
        rating: 5,
        date: "2023-09-10",
        comment: "넓고 쾌적한 객실에 감동받았습니다. 특히 침구류가 정말 푹신하고 좋았어요."
      },
      {
        id: 2,
        userName: "한지연",
        rating: 5,
        date: "2023-08-15",
        comment: "뷰가 정말 멋있었고 객실도 깨끗했습니다. 다음에 또 이용하고 싶어요!"
      }
    ]
  }
];

export default Rooms;