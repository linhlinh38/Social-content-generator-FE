import { Link } from "react-router-dom";

function Scratch() {
  const posts = [
    {
      id: 1,
      title: "Facebook post",
      imageUrl: "/icons/facebook.svg",
      description: "Generate caption for a post",
    },
    {
      id: 2,
      title: "Instagram post",
      imageUrl: "/icons/instagram.svg",
      description: "Generate caption for a post",
    },
    {
      id: 3,
      title: "Twitter post",
      imageUrl: "/icons/twitter.svg",
      description: "Generate caption for a post",
    },
  ];
  return (
    <section className="home">
      <div className="home-content">
        <div className="text-30 font-bold ">
          Generate unique captions from scratch{" "}
        </div>

        <p>
          Choose the type of post you want a caption for, and let Skipli Al
          writeit for you
        </p>

        <p>What kind of post do you want a caption for?</p>

        {posts.map((post) => (
          <Link to={`/scratch/${post.id}`} key={post.id} className="">
            <div className="border rounded-lg py-4 px-16 w-1/2">
              <div className="flex gap-4">
                <img src={post.imageUrl} alt={post.title} />
                <div>
                  <div className="text-16 font-semibold">{post.title}</div>
                  <div className="text-14 font-light">{post.description}</div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Scratch;
