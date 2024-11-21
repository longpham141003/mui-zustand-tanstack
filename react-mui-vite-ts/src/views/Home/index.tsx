import Advertisement from './Advertisement';
import BannerSlider from './Banner';
import FeaturedCategories from './FeaturedCategories';
import PopularProducts from './PopularProducts';

export default function Home() {
  return (
    <div>
      <BannerSlider />
      <FeaturedCategories/>
      <PopularProducts/>
      <Advertisement/>
    </div>
  );
}
