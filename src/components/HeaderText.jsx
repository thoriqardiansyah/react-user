const HeaderText = ({ children }) => {
  return (
    <div className="my-6 flex justify-center border-b-2 border-black py-4">
      <h1 className="text-xl font-bold">{children}</h1>
    </div>
  );
};

export default HeaderText;
