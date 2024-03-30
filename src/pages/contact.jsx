import { useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineErrorOutline as ErrorIcon } from "react-icons/md";

const Contact = () => {
  const [email, setEmail] = useState(null)
  const [message, setMessage] = useState(null)
  const [emailError, setEmailError] = useState(null)
  const [messageError, setMessageError] = useState(null)
  const [pending, setPending] = useState(null)
  const [success, setSuccess] = useState(null)
  const [error, setError] = useState('Apologies! There was an error sending your message. Please refresh the page to try again, or email amity@amitywarme.com. Sorry for the inconvenience!')
  const [response, setResponse] = useState(null)

  const handleEmail = (e) => {
    if (e.target.value.length === 0) {
      setEmailError('Email is required.')
    } else {
      setEmail(e.target.value)
      setEmailError(null)
    }
    
  }
  const handleMessage = (e) => {
    if (e.target.value.length === 0) {
      setMessageError('Message is required.')
    } else {
      setMessage(e.target.value)
      setMessageError(null)
    }

  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setPending(true);

    fetch("https://dubmailer.fly.dev/contactconnor", {
      method: "POST",
      headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
      },
      body: JSON.stringify({
        email: email, 
        message: message,
      })
    })
    .then(response => response.json())
    .then(data => {
      if (data && data.errors) {
        setSuccess(false)
        setError(true)      
      } else {
        setSuccess(true)
        setResponse(data)
      }
      setPending(false);

      // console.log(data)
    })
    .catch(e => {
      console.log(e)
      setSuccess(false)
      setPending(false)
      setError(true)
    })
  }


  return ( 
    <div className="w-dvw">
      <h1 className="text-4xl font-grenze text-center m-10">Contact</h1>
      <section className="w-full flex flex-col py-8 bg-wave-spray/75 text-midnight-green p-4 mx-auto">
        { !success && (
          <form onSubmit={handleSubmit} className="font-play w-full" action="#" autoComplete="off">
            <div className="flex flex-col space-y-4 lg:space-y-3 mb-6 font-semibold">
              <div className="pb-4 text-center">
                <h3 className="text-lg font-bold">I&apos;d love to hear from you!</h3>
              </div>
              <div>
                <input type="email" id="email" name="email" placeholder="Your email" className="w-full placeholder-midnight-green bg-transparent border-2 border-midnight-green py-2 px-4 text-sm lg:text-base outline-midnight-green focus:outline-2 focus:bg-wave-spray disabled:opacity-50 disabled:cursor-not-allowed rounded-sm" onChange={handleEmail} />
                { emailError && <span className="text-sm text-red-600" >{emailError}</span> }
              </div>
              <div>
                <textarea id="message" name="message" placeholder="Your message" rows="10" className="w-full placeholder-midnight-green bg-transparent border-2 border-midnight-green py-3 px-4 text-sm lg:text-base outline-midnight-green focus:outline-2 focus:bg-wave-spray disabled:opacity-50 disabled:cursor-not-allowed rounded-sm" onChange={handleMessage}/>
                { messageError && <span className="text-sm text-red-600">{messageError}</span> }
              </div>
            </div>
            <div className="flex justify-end">
              { !pending 
              ? <button type="submit" className="text-lg bg-transparent text-midnight-green font-semibold border-2 border-midnight-green rounded-lg py-2 px-4 mr-4 hover:bg-wave-spray">Send</button> 
              : <button type="submit" disabled className="text-lg bg-transparent text-midnight-green font-semibold border-2 border-midnight-green rounded-lg py-2 px-4 mr-4 hover:bg-wave-spray">Sending</button>}
            </div> 
            { error && (
              <div className="my-4">
                <div className="flex items-center">
                  <ErrorIcon className="text-red-600 h-8 w-8 flex-shrink-0 m-2"/>
                  <p className="font-semibold">Apologies! There was an error sending your message.</p>
                </div>
                <p>Please refresh the page to try again, or email amity@amitywarme.com. Sorry for the inconvenience!</p>
              </div>
            )}
          </form>
        )}
        { success && (
          <div>
            <h3>Thanks for reaching out!</h3>
            <p>I&apos;ll get back to you shortly, with my reply going to {response.contact.email}.</p>
            <Link to={"/"}>Return to Home</Link>
          </div>
        )}
      </section>
    </div>
   );
}
 
export default Contact;