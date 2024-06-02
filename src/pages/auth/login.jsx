 import { useState, useEffect } from "react"
 import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate()
  const [phone, setPhone] = useState()
  const [accessCode, setAccessCode] = useState()
  async function onSubmit(){
    const res = await fetch('http://localhost:3000/access/CreateNewAccessCode', {
      method: 'POST',
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({phoneNumber: phone})
  }).then((response) => {return response.json()}).then((data) => {alert(data.message)})
  } 

  async function validateAccessCoed(){
    const res = await fetch('http://localhost:3000/access/ValidateAccessCode', {
      method: 'POST',
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({phoneNumber: phone, accessCode: parseInt(accessCode)})
  }).then((response) => {return response.json()}).then((data) => {alert(data.message)
    if(data.message === 'validate success'){
    localStorage.setItem('phoneNumber', phone)
    navigate('/services')
  }
  }
)

  } 


  return <div>
    <form className="flex gap-4 items-center">
    <label className="text-2xl font-bold">Phone Number</label> 
     <input
              type="text"
              id="subject"
              className="border p-2 rounded-lg"
              placeholder="Phone"
              onChange={(e) => {setPhone(e.target.value)}}
            />
    <button type="button" className="bg-slate-300 p-2 my-4 rounded" onClick={() => {onSubmit()}}>Send Code</button>
    </form>
    <form className="flex gap-4 items-center">
    <label className="text-2xl font-bold">Access Code</label> 
     <input
              type="tel"
              id="subject"
              className="border p-2 rounded-lg"
              placeholder="Access Code"
              onChange={(e) => {setAccessCode(e.target.value)}}
            />
    <button type="button" className="bg-slate-300 p-2 my-4 rounded" onClick={() => {validateAccessCoed()}}>Submit</button>
    </form>
  </div>;
};

export default LoginPage;
