import { ProductDetail } from '@/pages';
import Product from './Product';
import { getMonthlyTrending } from '@/apis/trendingApi';

export default function MonthlyTrending({ monthlyTrending }: { monthlyTrending?: ProductDetail[] }) {
  return (
    <div className="px-3 lg:px-24 xl:px-48 space-y-3 lg:space-y-4 mt-20">
      <h1 className="font-normal text-main text-head-xs lg:font-bold lg:text-head-xl">이번 달 인기제품 Top 3</h1>
      <div className="grid grid-cols-3 gap-x-[9px] md:gap-x-4">
        {monthlyTrending?.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const monthlyTrending = await getMonthlyTrending();

  return {
    props: {
      monthlyTrending: monthlyTrending.result.topMonthlyProducts,
    }, // will be passed to the page component as props
  };
}
