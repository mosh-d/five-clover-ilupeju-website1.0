import { PiPark } from "react-icons/pi";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { MdOutlineEmojiTransportation } from "react-icons/md";
import { TbBeach } from "react-icons/tb";

//images
import topAttractions from "../../assets/hotel-surroundings/top-attractions.webp";
import supermarketsAndStores from "../../assets/hotel-surroundings/supermarkets-and-stores.webp"
import transportationOptions from "../../assets/hotel-surroundings/transportation-options.webp"
import beaches from "../../assets/hotel-surroundings/beaches.webp"

const TOP_ATTRACTIONS = [
  {
    title: "Dessie Kiddiez Centre",
    distance: "300 m",
  },
  {
    title: "Dr. Beko Ransome-Kuti Park",
    distance: "700 m",
  },
  {
    title: "Oshodi Heritage Garden",
    distance: "850 m",
  },
  {
    title: "Obanikoro Garden",
    distance: "1.3 km",
  },
  {
    title: "Kalakuta Museum",
    distance: "5 km",
  },
];

const SUPERMARKETS = [
  {
    title: "Spar - Opebi",
    distance: "3 km",
  },
  {
    title: "Shoprite - The Palms Lekki",
    distance: "8 km",
  },
  {
    title: "Justrite Supermarket - Ilupeju",
    distance: "1 km",
  },
  {
    title: "Ebeano Supermarket - Victoria Island",
    distance: "15 km",
  },
  {
    title: "Palmgroove Market",
    distance: "5 km",
  },
];

const TRANSPORTATION = [
  {
    title: "Murtala Muhammed Airport (LOS)",
    distance: "12 km",
  },
  {
    title: "Oshodi Transport Interchange",
    distance: "6 km",
  },
  {
    title: "BRT Bus Stops - Ikorodu Rd",
    distance: "2 km",
  },
  {
    title: "Ilupeju Bus Terminal",
    distance: "1 km",
  },
];

const BEACHES = [
  {
    title: "Elegushi Private Beach",
    distance: "15 km",
  },
  {
    title: "Tarkwa Bay Beach",
    distance: "22 km",
  },
  {
    title: "Lekki Leisure Lake",
    distance: "25 km",
  },
  {
    title: "Atican Beach",
    distance: "28 km",
  },
  {
    title: "Eleko Beach",
    distance: "32 km",
  },
];

export default function HotelSurroundingsSection() {
  return (
    <>
      <div className="p-[12rem] max-sm:p-[12rem_2rem_0_2rem] w-full flex flex-col gap-[4.8rem]">
        <h2 className="text-6xl font-secondary font-bold">
          Hotel Surroundings
        </h2>
        <div
          data-component="HotelSurroundingsContainer"
          className="flex flex-wrap gap-[4.8rem] justify-start"
        >
          <div
            data-component="HotelSurrounding"
            className="flex flex-col gap-[2rem] max-lg:w-full w-[47%] text-[color:var(--white)] border-[1px] border-[color:var(--light-gray)]/10 p-[4rem] bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(to bottom, hsla(38, 50%, 10%, .8), hsla(38, 50%, 10%, .8)), url(${topAttractions})`,
              backgroundBlendMode: 'multiply'
            }}
          >
            <div
              data-component="HotelSurroundingHeading"
              className="items-start w-full flex gap-[2rem]"
            >
              <PiPark size="3rem" />
              <h3
                data-component="HotelSurroundingHeadingText"
                className="text-3xl font-bold"
              >
                Top Attractions
              </h3>
            </div>
            <div
              data-component="HotelSurroundingContent"
              className="flex flex-col gap-[1.2rem]"
            >
              {TOP_ATTRACTIONS.map((attraction, index) => (
                <div
                  key={index}
                  data-component="HotelSurroundingContentItem"
                  className="flex items-center gap-[1.2rem] w-full justify-between"
                >
                  <p
                    data-component="HotelSurroundingContentItemTitle"
                    className="text-2xl w-[80%]"
                  >
                    {attraction.title}
                  </p>
                  <p
                    data-component="HotelSurroundingContentItemDistance"
                    className="text-2xl text-right"
                  >
                    {attraction.distance}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div
            data-component="HotelSurrounding"
            className="flex flex-col gap-[2rem] max-lg:w-full w-[47%] text-[color:var(--white)] border-[1px] border-[color:var(--light-gray)]/10 p-[4rem] bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(to bottom, hsla(38, 50%, 10%, .8), hsla(38, 50%, 10%, .8)), url(${supermarketsAndStores})`,
              backgroundBlendMode: 'multiply'
            }}
          >
            <div
              data-component="HotelSurroundingHeading"
              className="items-start w-full flex gap-[2rem]"
            >
              <HiOutlineShoppingCart size="3rem" />
              <h3
                data-component="HotelSurroundingHeadingText"
                className="text-3xl font-bold"
              >
                Supermarkets & Grocery Stores
              </h3>
            </div>
            <div
              data-component="HotelSurroundingContent"
              className="flex flex-col gap-[1.2rem]"
            >
              {SUPERMARKETS.map((supermarket, index) => (
                <div
                  key={index}
                  data-component="HotelSurroundingContentItem"
                  className="flex items-center gap-[1.2rem] w-full justify-between"
                >
                  <p
                    data-component="HotelSurroundingContentItemTitle"
                    className="text-2xl w-[80%]"
                  >
                    {supermarket.title}
                  </p>
                  <p
                    data-component="HotelSurroundingContentItemDistance"
                    className="text-2xl text-right"
                  >
                    {supermarket.distance}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div
            data-component="HotelSurrounding"
            className="flex flex-col gap-[2rem] max-lg:w-full w-[47%] text-[color:var(--white)] border-[1px] border-[color:var(--light-gray)]/10 p-[4rem] bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(to bottom, hsla(38, 50%, 10%, .8), hsla(38, 50%, 10%, .8)), url(${transportationOptions})`,
              backgroundBlendMode: 'multiply'
            }}
          >
            <div
              data-component="HotelSurroundingHeading"
              className="items-start w-full flex gap-[2rem]"
            >
              <MdOutlineEmojiTransportation size="3rem" />
              <h3
                data-component="HotelSurroundingHeadingText"
                className="text-3xl font-bold"
              >
                Transportation Options
              </h3>
            </div>
            <div
              data-component="HotelSurroundingContent"
              className="flex flex-col gap-[1.2rem]"
            >
              {TRANSPORTATION.map((option, index) => (
                <div
                  key={index}
                  data-component="HotelSurroundingContentItem"
                  className="flex items-center gap-[1.2rem] w-full justify-between"
                >
                  <p
                    data-component="HotelSurroundingContentItemTitle"
                    className="text-2xl w-[80%]"
                  >
                    {option.title}
                  </p>
                  <p
                    data-component="HotelSurroundingContentItemDistance"
                    className="text-2xl text-right
"
                  >
                    {option.distance}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div
            data-component="HotelSurrounding"
            className="flex flex-col gap-[2rem] max-lg:w-full w-[47%] text-[color:var(--white)] border-[1px] border-[color:var(--light-gray)]/10 p-[4rem] bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(to bottom, hsla(38, 50%, 10%, .8), hsla(38, 50%, 10%, .8)), url(${beaches})`,
              backgroundBlendMode: 'multiply'
            }}
          >
            <div
              data-component="HotelSurroundingHeading"
              className="items-start w-full flex gap-[2rem]"
            >
              <TbBeach size="3rem" />
              <h3
                data-component="HotelSurroundingHeadingText"
                className="text-3xl font-bold"
              >
                Beaches
              </h3>
            </div>
            <div
              data-component="HotelSurroundingContent"
              className="flex flex-col gap-[1.2rem]"
            >
              {BEACHES.map((beach, index) => (
                <div
                  key={index}
                  data-component="HotelSurroundingContentItem"
                  className="flex items-center gap-[1.2rem] w-full justify-between"
                >
                  <p
                    data-component="HotelSurroundingContentItemTitle"
                    className="text-2xl w-[80%]"
                  >
                    {beach.title}
                  </p>
                  <p
                    data-component="HotelSurroundingContentItemDistance"
                    className="text-2xl text-right"
                  >
                    {beach.distance}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
