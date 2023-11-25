import React, { useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './App.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import CustomNavbar from "./components/CustomNavbar";
import Announcement from "./components/Announcement";
import Carousel from "./components/Carousel";

export const App = () => {
      const [thumbsSwiper, setThumbsSwiper] = useState(null);
      return (
          <div className="main-container">
              <Announcement />
              <CustomNavbar />
              <Swiper
                  spaceBetween={30}
                  centeredSlides={true}
                  autoplay={{
                      delay: 2500,
                      disableOnInteraction: false,
                  }}
                  navigation={true}
                  modules={[Autoplay, Navigation]}
                  className="mySwiper"
              >
                  <SwiperSlide>
                      <div className="slideContent">
                          <img src="https://bravaland.com/cdn/shop/files/DSC00058_CAROUSEL_1_1440x650_crop_center.jpg?v=1691318279" />
                          <div className="left-text-div">heritage
                              <div>hoodies</div>
                              <div className='button'>
                                  <a className='aaa'>
                                      shop now{' '}
                                  </a>
                              </div>
                          </div>
                      </div>
                  </SwiperSlide>
                  <SwiperSlide>
                      <div className="slideContent">
                          <img src="https://bravaland.com/cdn/shop/files/DSC09802_carousel_1440x650_crop_center.jpg?v=1691318279" />
                          <div className="right-text-div">heritage
                              <div>tees</div>
                              <div className='button'>
                                  <a className='aaa'>
                                      shop now{' '}
                                  </a>
                              </div>
                          </div>
                      </div>
                  </SwiperSlide>
                  <SwiperSlide>
                      <div className="slideContent">
                          <img src="https://bravaland.com/cdn/shop/files/DSC09179_CAROUSEL_1_1440x650_crop_center.jpg?v=1691318279" />
                          <div className="left-text-div">premium
                              <div>tees</div>
                              <div className='button'>
                                  <a className='aaa'>
                                      shop now{' '}
                                  </a>
                              </div>
                          </div>
                      </div>
                  </SwiperSlide>
                  <SwiperSlide>
                      <div className="slideContent">
                          <img src="https://bravaland.com/cdn/shop/files/DSC00198_CAROUSEL_1_1440x650_crop_center.jpg?v=1691318278" />
                          <div className="left-text-div">premium
                              <div>zip</div>
                              <div>hoodies</div>
                              <div className='button'>
                                  <a className='aaa'>
                                      shop now{' '}
                                  </a>
                              </div>
                          </div>
                      </div>
                  </SwiperSlide>
                  <SwiperSlide>
                      <div className="slideContent">
                          <img src="https://bravaland.com/cdn/shop/files/DSC09618_CAROUSEL_1_1440x650_crop_center.jpg?v=1691318279" />
                          <div className="right-text-div">heritage
                              <div>women's</div>
                              <div>tanks</div>
                              <div className='button'>
                                  <a className='aaa'>
                                      shop now{' '}
                                  </a>
                              </div>
                          </div>
                      </div>
                  </SwiperSlide>
              </Swiper>
              <Carousel />
          </div>
      );
};
