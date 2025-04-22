import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section className="relative bg-gradient-to-b from-blue-50 to-white overflow-hidden py-16">
        {/* Wave SVG at top */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
          <svg
            className="relative block w-[200%] h-24"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39 56.24C194.24 83.94 97.18 95.83 0 77.94V0h1200v27.35c-112.31 13.04-234.38 36.3-357.4 38.22-146.74 2.21-292.2-31.26-421.21-9.33z"
              fill="#fff"
            />
          </svg>
        </div>
        <div className="container relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionTitle
            title="What We Offer"
            paragraph="Boost Your Tech Teams with World-Class Talent, On Demand"
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
