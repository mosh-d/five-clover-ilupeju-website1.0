import { useState, useEffect, useRef } from "react";
import { NavLink, useOutletContext } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import MobileMenu from "../shared/MobileMenu";
import Button from "../shared/Button";
import ButtonInput from "../shared/ButtonInput";
import Logo from "../shared/Logo";
import heroImg from "../../assets/HERO.jpg";
import mobileHeroImg from "../../assets/MOBILE-HERO.jpg";
import heroVideo from "../../assets/HERO-VIDEO.mp4";

// Define the context type (optional, for TypeScript; can omit if not using TS)
const useSharedContext = () => {
  const context = useOutletContext();
  if (!context) {
    throw new Error(
      "Component must be used within a layout providing shared context",
    );
  }
  return context;
};

export default function HeroSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < 640 : false,
  );
  const [videoLoaded, setVideoLoaded] = useState(false);

  const videoRef = useRef(null);

  // Update mobile state on window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Reveals the video (swapping out the static fallback image) only once
  // playback has ACTUALLY started — not just once data has loaded. Safari
  // blocks autoplay more readily on a video this size (11MB/88s is large
  // for a background loop), and the previous version flipped videoLoaded
  // on "data loaded" alone: if .play() was then rejected, the static image
  // still got swapped out for a paused, unplayed video element, which is
  // exactly what shows Safari's own "tap to play" affordance on top of the
  // page's UI. Now the static image stays put — the correct fallback —
  // unless a real, playing video replaces it.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Safari requires `muted` to be set as a DOM property (not just the
    // JSX/HTML attribute) before autoplay is permitted.
    video.muted = true;

    const tryPlay = () => {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setVideoLoaded(true))
          .catch((error) => {
            console.log("Auto-play was prevented:", error);
            // Leave videoLoaded false — static hero image stays as the background.
          });
      }
    };

    tryPlay();
    // The very first attempt (above) can be rejected simply because not
    // enough of the file has buffered yet, especially on Safari with a
    // file this size — retry once the browser signals it actually has
    // enough data to play without immediately stalling.
    video.addEventListener("canplay", tryPlay, { once: true });
    return () => video.removeEventListener("canplay", tryPlay);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Access shared state from Outlet context
  const {
    checkInDate,
    setCheckInDate,
    checkOutDate,
    setCheckOutDate,
  } = useSharedContext();

  return (
    <>
      <div
        data-component="HeroSection"
        className="relative bg-no-repeat bg-cover bg-center h-screen min-h-[80rem]"
        style={{
          backgroundImage: !videoLoaded
            ? `linear-gradient(to bottom, hsla(38, 50%, 10%, .9), hsla(38, 50%, 10%, .9)), url(${isMobile ? mobileHeroImg : heroImg})`
            : "none",
          backgroundBlendMode: !videoLoaded ? "multiply" : "normal",
        }}
      >
        {/* Background Video — videoLoaded (and therefore this element's
            visibility) is driven entirely by the play()-promise/canplay
            logic in the effect above, not by a loadeddata listener here;
            see that effect's comment for why. preload="auto" hints Safari
            to start buffering immediately, since it's otherwise more
            conservative than Chrome about eagerly fetching a file this
            size. */}
        <video
          ref={videoRef}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            videoLoaded ? "opacity-100" : "opacity-0"
          }`}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>

        {/* Dark overlay for video */}
        <div
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
            videoLoaded ? "opacity-100" : "opacity-0"
          }`}
          style={{
            background:
              "linear-gradient(to bottom, hsla(38, 50%, 10%, .9), hsla(38, 50%, 10%, .9))",
            mixBlendMode: "multiply",
          }}
        />
        <div
          data-component="Navbar"
          className="relative z-10 border-b border-[var(--emphasis)]/30 py-4 px-4 md:px-8"
        >
          <div className="flex justify-between items-center w-full">
            {/* Mobile Menu Button - Only shows on mobile */}
            <button
              onClick={toggleMenu}
              className="md:hidden text-2xl text-white flex-shrink-0 cursor-pointer"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
            </button>

            {/* Invisible spacer to balance the menu button on the left */}
            <div className="md:hidden w-8 flex-shrink-0"></div>

            {/* Desktop Navigation - Hidden on mobile */}
            <nav className="hidden md:block">
              <ul className="flex gap-8">
                <li className="text-lg lg:text-xl text-white">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `block py-2 cursor-pointer ${
                        isActive
                          ? "text-[color:var(--emphasis)] font-bold"
                          : "hover:text-[color:var(--emphasis)]/80 transition-colors"
                      }`
                    }
                    end
                  >
                    HOME
                  </NavLink>
                </li>
                <li className="text-lg lg:text-xl text-white">
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      `block py-2 cursor-pointer ${
                        isActive
                          ? "text-[color:var(--emphasis)] font-bold"
                          : "hover:text-[color:var(--emphasis)]/80 transition-colors"
                      }`
                    }
                  >
                    ABOUT
                  </NavLink>
                </li>
                <li className="text-lg lg:text-xl text-white">
                  <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                      `block py-2 cursor-pointer ${
                        isActive
                          ? "text-[color:var(--emphasis)] font-bold"
                          : "hover:text-[color:var(--emphasis)]/80 transition-colors"
                      }`
                    }
                  >
                    CONTACT
                  </NavLink>
                </li>
              </ul>
            </nav>
            <div className="">
              <Logo />
            </div>
            <div className="max-md:w-[24vw] lg:w-[14vw] w-[18vw]"></div>
          </div>
        </div>

        <div
          data-component="QuickCheckIn"
          className="absolute z-10 flex flex-col gap-[2rem] w-[50vw] max-sm:w-[80vw] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <h1 className="font-secondary text-6xl font-[900] text-[color:var(--white)] text-center mb-[8rem]">
            Welcome to Five Clover Hotel Ilupeju
          </h1>
          <div data-component="CheckingButtons">
            <ButtonInput
              variant="white"
              className="text-2xl w-[50%] p-[2.5rem_2rem_2rem_2rem]"
              value={checkInDate}
              onChange={setCheckInDate}
            >
              Check in
            </ButtonInput>
            <ButtonInput
              variant="white"
              className="text-2xl w-[50%] p-[2.5rem_2rem_2rem_2rem]"
              value={checkOutDate}
              onChange={setCheckOutDate}
            >
              Check out
            </ButtonInput>
          </div>
          <div data-component="ViewRoomsButton">
            <a href="#available-rooms">
              <Button
                variant="emphasis"
                className="text-3xl font-black w-[100%] p-[2.5rem_2rem_2rem_2rem]"
              >
                View Rooms
              </Button>
            </a>
          </div>
        </div>
        {/* Mobile Menu */}
        <MobileMenu
          isOpen={isMenuOpen}
          onClose={() => setIsMenuOpen(false)}
        />
      </div>
    </>
  );
}
