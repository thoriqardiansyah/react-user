import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import HeaderText from "../components/HeaderText";

const Detail = () => {
  const [datas, setDatas] = useState([]);
  const [comments, setComments] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getSinglePost = async () => {
      await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((response) => response.json())
        .then((res) => setDatas(res))
        .catch((err) => console.log(err));
    };

    const getComments = async () => {
      await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        .then((response) => response.json())
        .then((res) => setComments(res))
        .catch((err) => console.log(err));
    };

    getSinglePost();
    getComments();
  }, [id]);

  return (
    <MainLayout>
      <div className="flex justify-end">
        <Link to={"/"} className="button">
          Back to home
        </Link>
      </div>
      <HeaderText>Detail Post</HeaderText>
      <div className="card flex-col my-10" key={datas.id}>
        <h3 className="text-lg font-semibold mb-4">{datas.title}</h3>
        <p className="text-base">{datas.body}</p>
      </div>

      <div className="border-black border-b-2 w-[100px] my-4">
        <h3 className="text-xl font-semibold ">Comments</h3>
      </div>

      {comments.map((comment) => {
        return (
          <div key={comment.id} className="my-6 px-4">
            <h3 className="text-base mb-2">{comment.email} :</h3>
            <div className="card">{comment.body}</div>
          </div>
        );
      })}
    </MainLayout>
  );
};

export default Detail;
