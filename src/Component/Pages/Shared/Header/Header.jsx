import SlideText from "../../Banner/Carousel/TextSlideer";

const Header = () => {
  const mock = [
    "Concert",
    "Seminar",
    "Birthday",
    "Conference",
    "Wedding",
    "Festival",
  ];
  return (
    <div>
      Our Plan for Your <SlideText source={mock} /> Event
    </div>
  );
};

export default Header;
