import { useState, useEffect } from "react"
function Profile() {
  const [data, setData] = useState()
  const [loading, setLoading] = useState(true)
  async function onSubmit(){
    const res = await fetch(`http://localhost:3000/content/GetUserGeneratedContents/${localStorage.getItem('phoneNumber')}`, {
      method: 'GET'
  }).then((response) => {return response.json()}).then((data) => {setData(data.generatedContents)})
  } 

  async function onDelete(topic, caption){
    const res = await fetch('http://localhost:3000/content/UnSaveContent', {
      method: 'POST',
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({phone: localStorage.getItem('phoneNumber'), topic: topic, dataDelete: caption})
  }).then((response) => {return response.json()}).then((data) => {
    alert(data.message)
    setLoading(true)
  })
  }

  useEffect(() => {
    if(loading){
      onSubmit()
      setLoading(false)
    }
   
  }, [loading])

  return (
    <section className="home">
      <div className="home-content">
        <div className="text-30 font-bold ">Saved Content</div>
        {data?.map((topic) => {
          return <div>
            <div className="text-16 font-bold mb-4">
              {topic.topic}
            </div>

        <div className="flex items-center gap-4">
          {topic.data.map((caption) => {
            return <div className="border rounded-lg py-4 px-16 w-1/3">
            <div className="text-14 font-light">
              {caption}
            </div>
            <div className="flex items-end justify-end gap-3">
              <button type="submit" className="bg-teal-200 p-2 my-4 rounded">
                Share
              </button>{" "}
              <button type="submit" className="bg-slate-300 p-2 my-4 rounded" onClick={() => {onDelete(topic.topic, caption)}}>
                Unsave
              </button>
            </div>
          </div>
          })}
          
        </div>
          </div>
        })}
  
      </div>
    </section>
  );
}

export default Profile;
