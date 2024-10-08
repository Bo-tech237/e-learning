import HeroImage from './HeroImage';
import HeroContent from './HeroContent';

export default function Hero() {
    return (
        <div className="w-full pt-[4vh] md:pt-[12vh] h-screen bg-indigo-950 overflow-hidden">
            <div className="flex justify-center flex-col w-4/5 h-full mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <HeroContent />
                    <HeroImage />
                </div>
            </div>
        </div>
    );
}
