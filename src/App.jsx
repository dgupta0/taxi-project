import React from 'react'
import Header from "./components/Header"
import Footer from "./components/Footer"

function App() {
  const [data, setData] = React.useState({
    // from: "Bengaluru",
    // to: "Delhi",
    // time: "13:50",
    // date: "12/12/2023"
  })
  const [confirmModal, setConfirmModal] = React.useState(false)

  function handleInput(e) {
    e.preventDefault()
    setData(prev => {
      return (
        { ...prev, [e.target.name]: e.target.value }
      )
    })
  }

  function handleSubmit(e) {
    if (data.time && data.date && data.from && data.to) {
      setConfirmModal(true)
    }
    e.preventDefault()


  }
  function handleConfirmBtn() {
    setConfirmModal(false)
    setData(null)
  }

  console.log(data)
  console.log(confirmModal)

  return (
    <div className="positionModal">
      <Header />
      <main>
        <div className="form-container">
          <div className='desc'>
            <h2 className='form-desc'>We know Plans Change <br /> <span className='sub-title'> That's why we are providing Flexible
              Cabs</span>
            </h2>
            <h2 className='cancel-desc'>Cancel Anytime</h2>
          </div>
          <form action="#">

            <input type="text"
              required
              name="from"
              value={data ? data.from : ""}
              onChange={handleInput}
              placeholder='Travel From' />
            <input type="text"
              name="to"
              value={data ? data.to : ""}
              onChange={handleInput}
              placeholder='Travel To' />



            <input type="date"
              name="date"
              value={data ? data.date : ""}
              onChange={handleInput}
            />

            <input
              type="time"
              name="time"
              placeholder='-:-- --'
              value={data ? data.time : ""}
              onChange={handleInput} />

            <textarea
              name="addOn"
              onChange={handleInput}
              value={data ? data.addOn : ""}
              placeholder='Additional Requirements...'>
            </textarea>

            <button
              className="submit"
              onClick={handleSubmit}
              type='submit'>
              Book Now
            </button>
          </form>
        </div>
      </main>
      {confirmModal &&
        <div className='modal-container'>
          <div className='confirmModal'>
            <h3>Confirmation Details</h3>
            <p>Travel From: {data.from}</p>
            <p>Travel To: {data.to}</p>
            <p>Travel Date: {data.date}</p>
            <p>Travel Time: {data.time}</p>
            {data.addOn && <p>Additional Reqs: {data.addOn}</p>}
            <button
              onClick={handleConfirmBtn}
              className='modal-btn'>Book Again</button>
          </div>
        </div>
      }

      <Footer />
    </div>
  )
}
export default App
