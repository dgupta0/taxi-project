import React from 'react'
import Header from "./components/Header"
import Footer from "./components/Footer"

function App() {
  const [data, setData] = React.useState(null)
  return (
    <>
      <Header />
      <main>
        <div className="form-container">
          <div className='desc'>
            <h2 className='form-desc'>We know plan changes. Thats why we are providing flexible
              cabs.
            </h2>
            <h2 className='cancel-desc'>Cancel Anytime.</h2>
          </div>
          <form action="#">
            <div className='pair-inputs'>
              <input type="text"
                name="from"
                placeholder='Travel From' />
              <input type="text"
                name="to"
                placeholder='Travel To' />
            </div>
            <div className='pair-inputs'>
              <input type="date"
                name="date" />
              <input type="time" name="time" />
            </div>
            <textarea name="addOn"
              placeholder='Additional Requirements...'>

            </textarea>
            <button className="submit"

              type='submit'>Submit</button>
          </form>
        </div>
      </main>
      <Footer />
    </>
  )
}
export default App
