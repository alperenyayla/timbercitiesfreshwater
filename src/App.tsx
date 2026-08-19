import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { InteractiveVisualisation } from "./components/InteractiveVisualisation";
import { OpeningView } from "./components/OpeningView";
import { VideoGallery } from "./components/VideoGallery";

export function App() {
  return (
    <>
      <Header />
      <main>
        <OpeningView />
        <InteractiveVisualisation />
        <VideoGallery />
      </main>
      <Footer />
    </>
  );
}
