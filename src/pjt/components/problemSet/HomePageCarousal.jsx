import sysDesign from "@assets/problemSet/sysDesgin.jpeg";

export default function HomePageCarousal() {
  return (
    <div className="flex pt-3 justify-center gap-3 bg-neutral-800 text-white">
      <img className="w-1/4 rounded" src={sysDesign} alt="sysDesign" />

      <img className="w-1/4 rounded" src={sysDesign} alt="sysDesign" />

      <img className="w-1/4 rounded" src={sysDesign} alt="sysDesign" />
    </div>
  );
}
