import { getFeaturedProducts } from '@/sanity/lib/queries';
import HeroSection from '@/components/sections/HeroSection';
import FeaturedProducts from '@/components/sections/FeaturedProducts';
import BrandStorySection from '@/components/sections/BrandStorySection';
import CtaBanner from '@/components/sections/CtaBanner';

// Revalidate the page every 60 seconds (ISR)
export const revalidate = 60;

export default async function HomePage() {
  // Gracefully fall back to empty array if Sanity isn't connected yet
  const featuredProducts = await getFeaturedProducts().catch(() => []);

  return (
    <>
      <HeroSection />
      <FeaturedProducts products={featuredProducts} />
      <BrandStorySection />
      <CtaBanner />
    </>
  );
}
