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
      {/* High-Fidelity Scroll and Background video controllers */}
      <ScrollEngine />
      <VideoBackground />

      {/* Floating Header Navigation */}
      <Header />

      {/* Initial Landing Frame (transparent center framing Video A) */}
      <HeroIntro />

      {/* Primary Content Container scrolling up over Video B */}
      <main className="relative z-20 bg-gradient-to-b from-transparent via-brand-navy/70 to-brand-navy pt-8">
        
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
