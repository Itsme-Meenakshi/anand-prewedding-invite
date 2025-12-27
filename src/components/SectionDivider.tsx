import RangoliMandala from "./RangoliMandala";

const SectionDivider = () => {
  return (
<div className="relative flex justify-center -mt-20 z-20">
      <div className="opacity-90">
        <RangoliMandala size="md" animate />
      </div>
    </div>
  );
};

export default SectionDivider;
