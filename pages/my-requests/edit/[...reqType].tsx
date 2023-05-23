import NavBar from '@/components/footer/NavBar';
import Layout from '@/components/layout/Layout';
import EditRequestContainer from '@/components/my-requests/EditRequestContainer';

export default function EditRequestPage() {
  return (
    <Layout>
      <EditRequestContainer />
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
      params: { reqType: ['purchase'] },
    },
    {
      params: { reqType: ['manufacture'] },
    },
  ];
  return { paths, fallback: false };
}

export async function getStaticProps({ params }: any) {
  // Make sure params are what we expected
  console.log(params);
  return {
    props: {
      reqType: params.reqType,
    },
  };
}
