import { useState } from 'react';
import { Header } from './components/Header';
import { LoadingScreen } from './components/LoadingScreen';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ProductsSection } from './components/ProductsSection';
import { ActivitiesSection } from './components/ActivitiesSection';
import { SkillsSection } from './components/SkillsSection';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';

const LOADING_SEEN_KEY = 'hasSeenLoadingScreen';

export default function App() {
  const [isLoading, setIsLoading] = useState(
    () => sessionStorage.getItem(LOADING_SEEN_KEY) !== 'true'
  );

  const handleLoadingComplete = () => {
    sessionStorage.setItem(LOADING_SEEN_KEY, 'true');
    setIsLoading(false);
  };

  return (
    <>
      <CustomCursor />
      {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}

      {!isLoading && (
        <div className="min-h-screen">
          <Header />
          <main>
            <HeroSection />
            <AboutSection />
            <ProductsSection />
            <SkillsSection />
            <ActivitiesSection />
            <Footer />
          </main>
        </div>
      )}
    </>
  );
}
