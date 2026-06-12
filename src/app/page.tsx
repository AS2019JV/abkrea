import ScrollEngine from "@/components/ScrollEngine";
import VideoBackground from "@/components/VideoBackground";
import Header from "@/components/Header";
import HeroIntro from "@/components/HeroIntro";
import ProfileHeader from "@/components/ProfileHeader";
import StoriesHighlights from "@/components/StoriesHighlights";
import CoursesGrid from "@/components/CoursesGrid";
import CompanyInfo from "@/components/CompanyInfo";

export default function Home() {
  return (
    <>
      {/* High-Fidelity Scroll and Animation sync */}
      <ScrollEngine />

      {/* Floating Header Navigation */}
      <Header />

      {/* Cinematic Scroll Container (300vh controls the scroll timeline of the video) */}
      <div id="cinematic-container" className="relative h-[300vh] w-full bg-brand-navy">
        <VideoBackground />
        <HeroIntro />
      </div>

      {/* Primary Content Container scrolling up after the video finishes */}
      <main className="relative z-20 bg-gradient-to-b from-transparent via-brand-navy/80 to-brand-navy pt-8">
        
        {/* Instagram-style profile stats card */}
        <ProfileHeader />

        {/* Circular story highlight carousels */}
        <StoriesHighlights />

        {/* Courses Bento list feed */}
        <CoursesGrid />

        {/* Detailed mission, vision, and legal certificates */}
        <CompanyInfo />

      </main>
    </>
  );
}
