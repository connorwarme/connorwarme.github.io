import { useState } from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineErrorOutline as ErrorIcon } from 'react-icons/md'
import { VscLoading as LoadingIcon } from 'react-icons/vsc'

const Contact = () => {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [emailError, setEmailError] = useState(null)
  const [messageError, setMessageError] = useState(null)
  const [pending, setPending] = useState(null)
  const [success, setSuccess] = useState(null)
  const [error, setError] = useState(false)
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
  const checkForm = () => {
    if (message.length > 0 && email.length > 2) {
      return true
    }
    if (message.length === 0) {
      setMessageError('Message is required.')
    }
    if (email.length <= 2) {
      setEmailError('Email is required.')
    }
    setPending(false)
    return false
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setPending(true)
    if (checkForm()) {
      fetch('https://dubmailer.fly.dev/contactconnor', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          email: email,
          message: message,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data && data.errors) {
            setSuccess(false)
            setError(true)
          } else {
            setSuccess(true)
            setResponse(data)
          }
          setPending(false)

          // console.log(data)
        })
        .catch((e) => {
          console.log(e)
          setSuccess(false)
          setPending(false)
          setError(true)
        })
    }
  }

  return (
    <div className="w-dvw md:grid md:grid-cols-9 md:justify-items-center">
      <div className="md:col-start-2 md:col-end-9 md:w-[70%] md:max-w-2xl">
        <h1 className="m-10 text-center font-grenze text-4xl text-wave-spray">
          Contact
        </h1>
        <section className="mx-auto flex w-full flex-col bg-wave-spray/75 p-4 py-8 text-midnight-green shadow-sm shadow-midnight-green transition-all md:rounded-md lg:p-8">
          {!success && (
            <form
              onSubmit={handleSubmit}
              className="w-full font-play"
              action="#"
              autoComplete="off"
            >
              <div className="mb-6 flex flex-col space-y-4 lg:space-y-3">
                <div className="pb-4 text-center">
                  <h3 className="text-lg font-bold">
                    I&apos;d love to hear from you!
                  </h3>
                </div>
                <div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your email"
                    className="w-full rounded-sm border-2 border-midnight-green bg-transparent px-4 py-2 text-sm placeholder-midnight-green outline-midnight-green focus:bg-wave-spray focus:outline-2 disabled:cursor-not-allowed disabled:opacity-50 lg:text-base"
                    onChange={handleEmail}
                  />
                  {emailError && (
                    <span className="text-sm text-red-600">{emailError}</span>
                  )}
                </div>
                <div>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Your message"
                    rows="8"
                    className="w-full rounded-sm border-2 border-midnight-green bg-transparent px-4 py-3 text-sm placeholder-midnight-green outline-midnight-green focus:bg-wave-spray focus:outline-2 disabled:cursor-not-allowed disabled:opacity-50 lg:text-base"
                    onChange={handleMessage}
                  />
                  {messageError && (
                    <span className="text-sm text-red-600">{messageError}</span>
                  )}
                </div>
              </div>
              <div className="flex justify-end">
                {!pending ? (
                  <button
                    type="submit"
                    className="relative mr-4 rounded-lg border-2 border-midnight-green bg-transparent px-4 py-2 text-lg font-semibold text-midnight-green shadow-sm shadow-midnight-green transition duration-200 ease-in-out hover:bg-midnight-green hover:text-wave-spray active:left-[1px] active:top-[2px] active:shadow-none md:px-8"
                  >
                    Send
                  </button>
                ) : (
                  <button
                    disabled
                    className="mr-4 flex rounded-lg border-2 border-midnight-green bg-transparent px-4 py-2 text-lg font-semibold text-midnight-green"
                  >
                    <LoadingIcon className="mr-4 h-6 w-6 flex-shrink-0 animate-spin text-midnight-green" />
                    <span>Sending</span>
                  </button>
                )}
              </div>
              {error && (
                <div className="my-4">
                  <div className="flex items-center">
                    <ErrorIcon className="m-2 h-8 w-8 flex-shrink-0 text-red-600" />
                    <p className="font-semibold">
                      Apologies! There was an error sending your message.
                    </p>
                  </div>
                  <p>
                    Please refresh the page to try again, or email
                    amity@amitywarme.com. Sorry for the inconvenience!
                  </p>
                </div>
              )}
            </form>
          )}
          {success && (
            <div className="flex flex-col gap-6 font-play ">
              <h3 className="self-center text-2xl">Thanks for reaching out!</h3>
              <p className="text-center">
                I&apos;ll get back to you shortly, with my reply going to{' '}
                {response.contact.email}.
              </p>
              <div className="flex justify-center">
                <Link
                  to={'/'}
                  className="btn-link relative flex items-center px-4 py-2 text-midnight-green shadow-md shadow-gunmetal/50 outline-midnight-green hover:border-midnight-green active:left-[1px] active:top-[2px] active:shadow-none md:h-14 md:px-8 lg:px-12"
                >
                  Return to Home
                </Link>
              </div>
            </div>
          )}
        </section>
      </div>
    </div>
  )
}

export default Contact
