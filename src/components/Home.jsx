import Work from "./partials/Work";
import Intro from "./partials/Intro";
import Navbar from "./partials/Navbar";
import Portfolio from "./partials/Portfolio";
import Contact from "./partials/Contact";

const Home = () => {
  return (
    <>
      {/* <CubicWaveBackground /> */}
      <Navbar />
      <Intro />
      <Portfolio />
      <Work />
      <Contact />
    </>
  );
};

export const RippleBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden h-full">
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="absolute w-32 h-32 bg-black opacity-10 rounded-full z-[1]"
          style={{
            left: `${Math.random() * 100}vw`,
            top: `${Math.random() * 100}vh`,
            animation: `ripple 5s infinite ease-out ${i * 0.5}s`,
          }}
        />
      ))}
    </div>
  );
};

export const CubicWaveBackground = () => {
    const rows = Math.floor(window.innerHeight / 50); // Adjust based on cube size
    const cols = Math.floor(window.innerWidth / 50);

  return (
    <div className="fixed top-0 left-0 w-full h-full overflow-hidden grid place-content-stretch -z-10 pointer-events-none">
      <div
        className="grid gap-2 w-full h-full"
        style={{
          gridTemplateColumns: `repeat(${cols}, minmax(20px, 1fr))`,
          gridTemplateRows: `repeat(${rows}, minmax(20px, 1fr))`,
        }}
      >
        {[...Array(rows * cols)].map((_, i) => {
          const x = i % cols;
          const y = Math.floor(i / cols);
          const delay = (x + y) * 0.1; // Wave propagates diagonally

          return (
            <div
              key={i}
              className={`h-[90%] w-[90%] bg-black/15 rounded-md animate-cubicWave`}
              style={{
                animationDelay: `${delay}s`,
              }}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
