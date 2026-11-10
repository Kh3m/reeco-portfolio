import { sections } from "@/content/site";
import { Nav } from "@/components/nav";
import { ChatBubble, FaqContact, Footer, Hero, Process, Products, Reviews, Services, Tools, Work } from "@/components/sections";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        {sections.tools && <Tools />}
        {sections.services && <Services />}
        {sections.work && <Work />}
        {sections.process && <Process />}
        {sections.reviews && <Reviews />}
        {sections.products && <Products />}
        <FaqContact showFaq={sections.faq} />
      </main>
      <Footer />
      {sections.chatBubble && <ChatBubble />}
    </>
  );
}
