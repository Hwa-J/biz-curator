import Layout from '@/components/layout/Layout';
import CancelRefundDetailInfoContainer from '@/components/cancel-refund/CancelRefundDetailInfoContainer';
import NavBar from '@/components/footer/NavBar';
import { useRouter } from 'next/router';

export default function CancelDetail() {
  const { query } = useRouter();
  const title = query.slug?.includes('cancellations') ? '주문취소' : '환불';
  const [detail, id] = query!.slug as string[];
  return (
    <Layout>
      <div className="mx-3 pb-[64px]">
        <CancelRefundDetailInfoContainer title={title} detail={detail} id={id} />
      </div>
      <NavBar />
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = [
    // {
    //   params: { slug: [] },
    // },
    {
      params: { slug: ['cancellations'] },
    },
    {
      params: { slug: ['refunds'] },
    },
  ];
  return { paths, fallback: false };
}

export async function getStaticProps({ params }: any) {
  // Make sure params are what we expected
  console.log(params);
  return {
    props: {
      slug: params.slug,
    },
  };
}
