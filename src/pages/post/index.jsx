import { json, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function Post() {
  const {id} = useParams();
  const [socialNetwork, setSocialNetwork] = useState()
  const [subject, setSubject] = useState()
  const [tone, setTone] = useState("Friendly")
  const [data, setData] = useState()
  let obj
  useEffect(() => {
    switch(id){
      case "1":
        setSocialNetwork({socialNetwork: "Facebook Post"})
        obj = {socialNetwork: "Facebook Post"}
        break
      case "2":
        setSocialNetwork({socialNetwork: "Instagram Post"})
        obj = {socialNetwork: "Instagram Post"}
        break
      case "3":
        setSocialNetwork({socialNetwork: "Twitter Post"})
        obj = {socialNetwork: "Twitter Post"}
        break
      default:
        break;
    }
  }, [id])

  async function onSubmit(e){
    e.preventDefault()
    const res = await fetch('http://localhost:3000/content/GeneratePostCaptions', {
      method: 'POST',
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({socialNetwork: socialNetwork.socialNetwork, subject: subject, tone: tone})
  }).then((response) => {return response.json()}).then((data) => {setData(JSON.parse(data.captions))})
  } 

  async function onSave(caption){
    const res = await fetch('http://localhost:3000/content/SaveGeneratedContent', {
      method: 'POST',
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({phone: localStorage.getItem('phoneNumber'), topic: subject, data: caption})
  }).then((response) => {return response.json()}).then((data) => {alert(data.message)})
  } 

  return (
    <section className="home">
      <div className="home-content flex items-center ">
        <div className="text-30 font-bold ">{socialNetwork?.socialNetwork}</div>
        <form onSubmit={onSubmit}>
          <div className="mb-2">
            <label htmlFor="subject">What topic do you want a caption for?</label>
            <br />
            <input
              type="text"
              id="subject"
              className="border p-2 mt-3 rounded-lg"
              placeholder="Skipli is launching SkipliAI"
              onChange={(e) => {setSubject(e.target.value)}}
            />
          </div>
          <div>
            <label htmlFor="tone">What should your caption sound like?</label>
            <br />
            <select
              name="tone"
              id="tone"
              placeholder="Select a tone"
              className="border rounded-lg p-2 w-1/2"
              onChange={(e) => {setTone(e.target.value)}}
            >
              <option value="Friendly">Friendly</option>
              <option value="Luxury">Luxury</option>
              <option value="Relaxed">Relaxed</option>
              <option value="Professional">Professional</option>
              <option value="Bold">Bold</option>
              <option value="Adventurous">Adventurous</option>
              <option value="Witty">Witty</option>
              <option value="Persuasive">Persuasive</option>
              <option value="Empathetic">Empathetic</option>
            </select>
          </div>
          <button type="submit" className="bg-teal-200 p-4 my-4 rounded">
            Generate Caption
          </button>
        </form>
        {/* CCaptions generated for you */}
        <div className="text-30 font-bold ">Captions generated for you</div>
        {data?.map((caption) => {
        return <div className="border rounded-lg py-4 px-16 w-1/3">
          <div className="text-14 font-light">
           {caption.data}
          </div>
          <div className="flex items-end justify-end gap-3">
            <button type="submit" className="bg-teal-200 p-2 my-4 rounded">
              Share
            </button>{" "}
            <button type="button" className="bg-slate-300 p-2 my-4 rounded" onClick={() => {onSave(caption.data)}}>
              save
            </button>
          </div>
        </div>
      })}

      </div>
    </section>
  );
}

export default Post;
