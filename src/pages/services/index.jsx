import { Link } from "react-router-dom";

function Service() {
  return (
    <section className="home">
      <div className="home-content">
        <div className="text-30 font-bold mb-10">
          Generate post ideas and captions in seconds
        </div>

        <Link to={"/scratch"} className="">
          <div className="border rounded-lg py-4 px-16 w-1/2">
            <div className="text-16 font-semibold">Start from scratch</div>
            <div className="text-14 font-light">
              Generate new captions to engage, delight, or sell
            </div>
          </div>
        </Link>

        <Link to={"/inspire"}>
          <div className="border rounded-lg py-4 px-16 w-1/2">
            <div className="text-16 font-semibold">Get inspired</div>
            <div className="text-14 font-light">
              Generate post ideas and captions for a topic
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}

export default Service;
