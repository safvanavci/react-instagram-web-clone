import Slider from "react-slick";

export default function ImagePost({ image }) {

    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 1,
    };

    return (
        <div>
            {
                image.length == 1 ?
                    image.map((post, i) =>
                        <img key={i} src={post.img} />
                    ) :

                    <Slider {...settings}>

                        {image.map((post, i) =>
                            <div key={i}>
                                <img src={post.img} />
                            </div>
                        )}

                    </Slider>
            }
        </div>
    )
}
