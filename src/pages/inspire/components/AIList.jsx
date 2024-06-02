function AiList({data, setValue, setCaptions}) {
   async function onClick(ideas){
    const res = await fetch('http://localhost:3000/content/CreateCaptionsFromIdeas', {
      method: 'POST',
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ideas: ideas})
  }).then((response) => {return response.json()}).then((data) => {setCaptions(JSON.parse(data.Captions)); setValue(ideas)})
  } 
  return (
    <div>
      <div className="text-30 font-bold mb-10">
        Choose an idea to build some posts
      </div>

      {data?.map((idea) => {
       return <div className="border rounded-lg w-2/3 py-4 px-16 mb-2">
        <div className="text-14 font-light">{idea.data}</div>
         <button type="button" className="bg-teal-200 p-4 my-4 rounded " onClick={() => {onClick(idea.data)}}>
          Create caption
        </button>
      </div>

      })}
    
    </div>
  );
}

export default AiList;
