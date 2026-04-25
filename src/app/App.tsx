import { useState } from 'react';
import { Header } from './components/Header';
import { LoadingScreen } from './components/LoadingScreen';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ProductsSection } from './components/ProductsSection';
import { ActivitiesSection } from './components/ActivitiesSection';
import { SkillsSection } from './components/SkillsSection';
import { Footer } from './components/Footer';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />}

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