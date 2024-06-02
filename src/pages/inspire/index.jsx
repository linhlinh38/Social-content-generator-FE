import AiList from "./components/AIList";
import YourIdea from "./components/YourIdea";
import { useState } from "react";

function Inspired() {
  const [topic, setTopic] = useState()
  const [data, setData] = useState()
  const [value, setValue] = useState()
  const [captions, setCaptions] = useState()
  async function onSubmit(e){
    e.preventDefault()
    const res = await fetch('http://localhost:3000/content/GetPostIdeas', {
      method: 'POST',
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({topic: topic})
  }).then((response) => {return response.json()}).then((data) => {setData(JSON.parse(data.PostIdeas))})
  } 

   async function onSave(caption){
    const res = await fetch('http://localhost:3000/content/SaveGeneratedContent', {
      method: 'POST',
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({phone: localStorage.getItem('phoneNumber'), topic: topic, data: caption})
  }).then((response) => {return response.json()}).then((data) => {alert(data.message)})
  } 

  return (
    <section className="home">
      <div className="home-content">
        {" "}
        <div className="text-30 font-bold ">Get Inspried</div>
        <p>
          Stick staring at a blank page? Tell us what topic you have in mind and
          Skipli AI will generate a list of post ides and captions for you.
        </p>
        <form onSubmit={(e) => {onSubmit(e)}}>
          <div className="mb-2">
            <label htmlFor="topic">What topic do you want a caption for?</label>
            <br />
            <input
              type="text"
              id="topic"
              className="border p-2 mt-3 rounded-lg"
              placeholder="Skipli is launching SkipliAI"
              onChange={(e) => {setTopic(e.target.value)}}
            />
          </div>
          <button type="submit" className="bg-teal-200 p-4 my-4 rounded ">
            Generate ideas
          </button>
        </form>
        <hr />
        <div className="grid grid-cols-2 gap-4">
          <div className="w-full"> <AiList data={data} setValue={setValue} setCaptions={setCaptions}/></div>
          <div>
            <div className="text-30 font-bold ">Captions created for you</div>
            <div className="text-30 font-bold mb-2">{value}</div>
            {captions?.map((cap) => {
              return <div className="border rounded-lg py-4 px-16">
              <div className="text-14 font-light">
                {cap.data}
              </div>
              <div className="flex items-end justify-end gap-3">
                <button type="submit" className="bg-teal-200 p-2 my-4 rounded">
                  Share
                </button>{" "}
                <button type="submit" className="bg-slate-300 p-2 my-4 rounded" onClick={() => {onSave(cap.data)}}>
                  save
                </button>
              </div>
            </div>
        })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Inspired;
