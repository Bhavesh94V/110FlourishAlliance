import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SLider = ({ items }) => {
    const settings = {
        vertical: true,
        verticalSwiping: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 8000,
        cssEase: "linear",
        infinite: true,
        arrows: false,
        touchMove: true,
        swipeToSlide: true,
        swipe: true,
    };

    return (
        <div className="max-w-md max-h-[800px] mx-auto overflow-hidden">
            <Slider {...settings}>
                {items.map((item) => (
                    <div key={item.id} className="">
                        <div className="content-item p-4 bg-white rounded-lg">
                            {item.imageUrl ? (
                                <img
                                    src={item.imageUrl}
                                    alt={item.title}
                                    className="w-full h-auto rounded-lg"
                                />
                            ) : (
                                <div className="w-full h-40 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                                    <span>No Image</span>
                                </div>
                            )}
                            <h3 className="text-xl font-semibold mt-2">{item.title}</h3>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default SLider;
