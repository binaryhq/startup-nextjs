import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section className="relative bg-gradient-to-b from-blue-50 to-white overflow-hidden py-16 dark:from-gray-dark dark:to-gray-dark">

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
