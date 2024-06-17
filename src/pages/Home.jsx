import { useEffect, useState } from "react";
import HeaderText from "../components/HeaderText";
import Card from "../components/Card";
import MainLayout from "../Layouts/MainLayout";
import Input from "../components/Input";

const Home = () => {
  const [datas, setDatas] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const getAllPosts = async () => {
      await fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then((response) => response.json())
        .then((res) => setDatas(res))
        .catch((err) => console.log(err));
    };

    getAllPosts();
  }, []);

  const formatWords = (word) => {
    if (word.length >= 80) {
      return word.slice(0, 80);
    } else {
      return word;
    }
  };

  const handleSearch = ({ target }) => {
    setSearch(target.value);
  };

  return (
    <>
      <MainLayout>
        <div>
          <HeaderText>Search</HeaderText>
          <Input
            type={"text"}
            className="input"
            value={search}
            handleChange={handleSearch}
            placeholder={"Title search..."}
          />
        </div>

        <HeaderText>All Posts</HeaderText>

        <div className="flex flex-wrap justify-center gap-6">
          {datas
            .filter((data) =>
              data.title.toLowerCase().includes(search.toLowerCase())
            )
            .map((data) => {
              return (
                <Card key={data.id} data={data} formatWords={formatWords} />
              );
            })}
        </div>
      </MainLayout>
    </>
  );
};

export default Home;
