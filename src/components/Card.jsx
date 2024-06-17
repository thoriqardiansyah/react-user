import { Link } from "react-router-dom";

const Card = ({ data, formatWords }) => {
  return (
    <Link
      to={`/detail/${data.id}`}
      className="card w-[380px] p-4 flex-col"
      key={data.id}
    >
      <h3 className="text-lg font-semibold mb-4">{data.title}</h3>
      <p className="text-base">{formatWords(data.body)}</p>
    </Link>
  );
};

export default Card;
