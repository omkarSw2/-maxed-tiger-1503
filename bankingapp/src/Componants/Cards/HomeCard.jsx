import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import HomeCardContent from "./HomeCardContent";
import axios from "axios";
/* 
const HomeCardArray = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1589758438368-0ad531db3366?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
    description: ["Get free Credit Card with limit of ₹100,000.  "],
    title: "Credit Cards ",
    Path: "/creditcard",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1565371767810-ef913a6c8315?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    description: [
      "Get quick loan approval.",
      " limit of ₹100,000.",
      " Use it without interest for up to 160 days.",
    ],
    title: "Cash Loans ",
    Path: "/cashloan",
  },
  {
    id: 3,
    image:
      "https://images.moneycontrol.com/static-mcnews/2022/10/CASHBACK-SBI-Card.jpg",
    description: ["Up to 30% cashback on purchases."],
    title: "Cashback cards",
    Path: "/cashbackcards",
  },
  {
    id: 4,
    image:
      "https://s31898.pcdn.co/wp-content/uploads/2022/07/upi-image-2-800x430.jpg",
    description: [" Get Registration of the UPI at lower price  ."],
    title: "UPI Activation",
    Path: "/upiactivation",
  },
  {
    id: 5,
    image:
      "https://www.shutterstock.com/image-illustration/chart-rising-interest-rates-percentages-600w-2115606887.jpg",
    description: ["High interest deposit Profitable get up to 12%  ."],
    title: "High Intrest on Deposit",
    Path: "/intreastrate",
  },
];
*/

const getData = async () => {
let responce =   await axios({
    method: "get",
    baseURL: `${process.env.REACT_APP_JSON_SERVER_PORT}`,
    url: `/sevices`,
})
  let data = responce;
  return data
};
// const HomeCardArray = `${process.env.REACT_APP_JSON_SERVER_PORT}/sevices`;
export default function HomeCard() {
  const [cardData, setCardData] = useState([]);

  const fetchData = () => {
    getData().then((res) => {
      console.log(res)
      setCardData(res.data)
    })
  };

  useEffect(() => {
    fetchData()
  }, []);
  const settings = {
    dots: true,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    speed: 2000,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      {/* <Stack direction={"row"} m={5} overflowX="auto"> */}
      {cardData?.map((carditems) => (
        <HomeCardContent {...carditems} key={carditems.title} />
      ))}
    </Slider>
  );
}
