import { Sparkle } from "lucide-react";

const ScrollContent = () => (
  <>
    <p className="whitespace-nowrap">UI Developer</p>
    <Sparkle className="w-6 h-6 text-light-blue flex-shrink-0" />
    <p className="whitespace-nowrap">Web Designer</p>
    <Sparkle className="w-6 h-6 text-light-blue flex-shrink-0" />
    <p className="whitespace-nowrap">Frontend Engineer</p>
    <Sparkle className="w-6 h-6 text-light-blue flex-shrink-0" />
    <p className="whitespace-nowrap">in Ho Chi Minh City</p>
    <Sparkle className="w-6 h-6 text-light-blue flex-shrink-0" />
  </>
);

const Divider = () => {
  return (
    <div
      className="w-full overflow-hidden py-4 px-6 border-t border-b border-light-blue
                    bg-white text-dark-blue font-semibold text-lg sm:text-3xl"
    >
      <div className="flex w-fit min-w-full divider-scroll">
        <div className="flex items-center justify-start space-x-6 pr-6">
          <ScrollContent />
        </div>
        <div className="flex items-center justify-start space-x-6 pr-6">
          <ScrollContent />
        </div>
      </div>
    </div>
  );
};

export default Divider;
