import { MainPageComponent } from '../app/pages';
import { Layout } from '../app/components';

const MainPage = ({ data }) => {
   return (
      <Layout>
         <MainPageComponent data={data} />
      </Layout>
   );
};

export default MainPage;

export const getServerSideProps = async () => {
   const res = await fetch('https://jobs.github.com/positions.json');
   const data = await res.json();

   return {
      props: {
         data,
      },
   };
};
