import Features from "@/components/modules/HomeModules/features";
import Last from "@/components/modules/HomeModules/last";
import LiveDemo from "@/components/modules/HomeModules/liveDemo";
import Tutorial from "@/components/modules/HomeModules/tutorial";

export default function Home() {
  return (
    <>
      <div className="relative z-10">
        <LiveDemo />
        <Features />
        <Tutorial />
        <Last />
      </div>
    </>
  );
}
