import Footer from '@/components/footer';
import Header from '@/components/header'; 

const Home = () => {
  return (
    <div>
      <Header />
      <main className="p-6">
        <h2 className="text-2xl font-semibold">Welcome to the Home Page</h2>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
