import { useState } from "react"
import { useAuth } from "../../context/AuthContext"
import { Link, useNavigate } from "react-router-dom"
import { Button, MenuItem, Select, TextField } from "@mui/material"
import useUnsplashImages from "../ReusableParts/ApiFeching";

export default function Dashboard() {
  const [age, setAge] = useState('');
  const [, setErrorMsg] = useState('');

  const { currentUser, logout } = useAuth();
  const history = useNavigate();
  const { imagesApi, error } = useUnsplashImages('home', 3, 3, "portrait");
  const { imagesApi: imageApi, error: error1 } = useUnsplashImages('sea-view', 1, 70, "landscape");
  if (error && error1) {
    return <div>Error: {error.message}</div>;
  }
  
  async function handleLogout() {
    setErrorMsg("")
    try {
      await logout()
      history("/sign")
    } catch {
      setErrorMsg("Failed to log out")
    }
  }
  const handleChangeAge = (event) => {
    setAge(event.target.value);
  };

  return (
    <>
      <section className="dash">
        <div>
          {imageApi?.map((item, index) => {
                    return (
                              <div className="bg-sea" key={index}>
                                    {<img key={item.id} src={item.urls.regular} alt={item.alt_description} loading="lazy"/>}
                              </div>
                            )
          })}
          <div className="flex">
              {imagesApi?.map((item, index) => {
                    return (
                          <div className="card" key={index}>
                                {<img key={item.id} src={item.urls.small} alt={item.alt_description} loading="lazy"/>}
                          </div>
                    )
              })}
          </div>
          <h2 className="hotel" >Hotel Booking</h2>
          <p className="experience" >Experience something new every moment</p>
          <form>
              <div className="flex">
                <label htmlFor="standard-basic">Name:</label>
                <TextField id="standard-basic" label="First Name" variant="standard" />
                <TextField id="standard-basic" label="Last Name" variant="standard" />
              </div>
              <div className="flex email">
                  <label htmlFor="outlined-disabled">E-mail:</label> 
                  <TextField
                    disabled
                    id="outlined-disabled"
                    defaultValue={currentUser.email}
                  />
              </div>
              <div className="flex roomt">
              
                    <label htmlFor="demo-simple-select-label">Room Type</label>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={age}
                      onChange={handleChangeAge}
                    >
                          
                          <MenuItem value='standard'>Standard Room (1 to 2 People)</MenuItem>
                          <MenuItem value='family'>Family Room (1 to 4 People)</MenuItem>
                          <MenuItem value='private'>Private Room (1 to 3 People)</MenuItem>
                          <MenuItem value='mix'>Mix Dorm Room (6 People)</MenuItem>
                          <MenuItem value='female'>Female Dorm Room (6 People)</MenuItem>
                          <MenuItem value='male'>Male Dorm Room (6 People)</MenuItem>
                      </Select>
              </div>
              <div className="date">
                
              </div>
          </form>
          {error && <p>{error}</p>}
          <Link to="/dashboard/update-profile" className="">
            Update Profile
          </Link>
        </div>
      </section>
      <div className="">
        <Button onClick={handleLogout}>
          Log Out
        </Button>
      </div>
    </>
  )
}