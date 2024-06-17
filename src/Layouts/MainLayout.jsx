import Header from "../components/Header";

const MainLayout = ({ children }) => {
  return (
    <div className="w-full mx-auto px-4 md:px-0 md:max-w-4xl">
      <Header />
      <main className="md:px-10 my-12">{children}</main>
    </div>
  );
};

export default MainLayout;
