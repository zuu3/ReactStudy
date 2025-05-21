import React, { useContext, useState } from "react";
import { Context1 } from "../App";
import { Nav, Tab } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Star, Users, MapPin } from "lucide-react";
import Rooms from "../Rooms";
import "../App.css";

export default function DetailTab() {
  // Get room ID from URL parameters
  const { id } = useParams();
  
  // Find the room data based on ID
  const room = Rooms.filter((item) => item.key === Number(id))[0];
  
  // Get theme context
  const { theme, toggleTheme } = useContext(Context1) as { theme: string; toggleTheme: () => void };
  
  // Set active tab state
  const [activeTab, setActiveTab] = useState<string>("details");

  // Format currency
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ko-KR').format(price);
  };

  return (
    <main className={theme === "light" ? "light-theme" : "dark-theme"}>
      {/* Theme Toggle Button */}
      <button onClick={toggleTheme} className="theme-toggle">
        {theme === "light" ? "🌙 다크 모드" : "☀️ 라이트 모드"}
      </button>

      <div className="room-detail-container">
        {/* Room Card */}
        <div className="room-card">
          {/* Room Image */}
          <div className="room-image-container">
            <img src={room.image} className="room-image" alt={room.name} />
          </div>

          {/* Room Info */}
          <div className="room-info-container">
            <h1 className="room-name">{room.name}</h1>
            <div className="room-location">
              <MapPin size={18} className="inline mr-1" />
              {room.location}에 위치
            </div>

            <div className="divider"></div>

            <div className="room-guests">
              <Users size={18} className="inline mr-1" />
              최대인원 {room.totalGuest} 명
            </div>

            <div className="room-rating">
              <Star size={18} className="inline mr-1" fill="gold" stroke="gold" />
              평점: {room.rating}
              <span className="rating-count ml-2">({room.numberOfRating})</span>
            </div>

            <div className="room-price">
              <span className="price-amount">{formatPrice(room.price)}</span>
              <span className="price-period"> 원 / month</span>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <Tab.Container id="room-tabs" defaultActiveKey="details" onSelect={(key) => setActiveTab(key || "details")}>
          <div className="room-tabs">
            <Nav variant="tabs">
              <Nav.Item>
                <Nav.Link eventKey="details">상세정보</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="reviews">리뷰</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="qa" disabled>상품Q&A</Nav.Link>
              </Nav.Item>
            </Nav>

            <div className="tab-content">
              <Tab.Content>
                <Tab.Pane eventKey="details">
                  <div className="tab-pane">
                    <p>{room.description}</p>
                    <div className="room-features mt-4">
                      <h3 className="mb-2">객실 정보</h3>
                      <p>
                        <strong>위치:</strong> 5~9층<br />
                        <strong>룸구성:</strong> 침실 1, 욕실 1<br />
                        <strong>문의전화:</strong> 02-2230-0700
                      </p>
                    </div>
                    <div className="room-amenities mt-4">
                      <h3 className="mb-2">편의 시설</h3>
                      <ul className="list-disc pl-5">
                        {room.amenities.map((amenity, index) => (
                          <li key={index}>{amenity}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="reviews">
                  <div className="tab-pane">
                    <h3 className="mb-4">고객 리뷰</h3>
                    {room.reviews.map((review) => (
                      <div key={review.id} className="review-item mb-4 pb-4 border-b border-gray-200 dark:border-gray-700">
                        <div className="flex justify-between items-center mb-2">
                          <h4 className="font-medium">{review.userName}</h4>
                          <div className="text-sm text-gray-500 dark:text-gray-400">{review.date}</div>
                        </div>
                        <div className="flex items-center mb-2">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              size={16}
                              className={`${i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                            />
                          ))}
                        </div>
                        <p className="text-gray-700 dark:text-gray-300">{review.comment}</p>
                      </div>
                    ))}
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="qa">
                  <div className="tab-pane">
                    <p>현재 상품 Q&A 기능은 준비 중입니다. 빠른 시일 내에 서비스 예정입니다.</p>
                  </div>
                </Tab.Pane>
              </Tab.Content>
            </div>
          </div>
        </Tab.Container>
      </div>
    </main>
  );
}