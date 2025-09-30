import { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import Box from "@mui/material/Box";
import classes from "../CartItem.module.css";

const Search = () => {
  const [startDate, setStartDate] = useState(dayjs());
  const [endDate, setEndDate] = useState(dayjs().add(1, "day"));
  const [rooms, setRooms] = useState([{ id: 1 }]);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(1);
  const [bedPreference, setBedPreference] = useState([
    { id: 1, isBedPreferenceOpen: false },
  ]);

  // Function to add a new room
  const addRoom = ({ name }) => {
    const newRoom = {
      id: rooms.length + 1, // Unique ID for each room
      isBedPreferenceOpen: false, // Default to closed
    };
    setRooms([...rooms, newRoom]); // Add the new room to the list
  };
  // Handler for start date change
  const handleStartDateChange = (newValue) => {
    setStartDate(newValue);
  };

  // Handler for end date change
  const handleEndDateChange = (newValue) => {
    setEndDate(newValue);
  };
  // Function to toggle the "Bed Preference" section for a specific room
  const toggleBedPreference = (roomId) => {
    setRooms((prevRooms) =>
      prevRooms.map((room) =>
        room.id === roomId
          ? { ...room, isBedPreferenceOpen: !room.isBedPreferenceOpen } // Toggle for the specific room
          : room
      )
    );

  };
  const handleDelete = (roomId) => {
    setRooms((prevRooms) => prevRooms.filter((room) => room.id !== roomId)); // Remove the room with the specified ID
  }
  return (
    <section>
      <h2>Search Your hotel</h2>
      <div className={classes.check}>
        <h3>1. Your Trip</h3>
        <div className={classes.destina}>
          <h4>Destination</h4>
          {/* <p>{name}</p> */}
        </div>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Box sx={{ display: "flex", gap: 2 }}>
            {/* Start Date Picker */}
            <DatePicker
              label="CHECK-IN"
              value={startDate}
              onChange={handleStartDateChange}
              shouldDisableDate={(date) => {
                // Disable dates after the end date
                return date.isAfter(endDate);
              }}
            />
            <p>→</p>
            <DatePicker
              label="CHECK-OUT"
              value={endDate}
              onChange={handleEndDateChange}
              shouldDisableDate={(date) => {
                // Disable dates before the start date
                return date.isBefore(startDate);
              }}
            />
          </Box>
        </LocalizationProvider>
      </div>
      <div className="rooms_wrapper">
        <h3>2. Your Rooms & Guests</h3>

        {/* Render all rooms dynamically */}
        <div className={classes.rooms}>
          {rooms.map((room, index) => (
            <div key={room.id} className={classes.guests}>
              <h4>
                Room {index + 1}
                {rooms.length > 1 && <span onClick={() => handleDelete(room.id)}>del</span>}
              </h4>
              <div className="fields">
                <div className={classes.adult}>
                  <label>Adults</label>
                  <div className="adult_controller">
                    <button className={classes.decrease} onClick={() => setAdults(-1)}>-</button>
                    <span>{adults}</span>
                    <button className={classes.increase} onClick={() => setAdults(+1)}>+</button>
                  </div>
                </div>
                <div className={classes.children}>
                  <label>Children</label>
                  <div className="children_controller">
                    <button className={classes.decrease} >-</button>
                    <span>{children}</span>
                    <button className={classes.increase} >+</button>
                  </div>
                </div>
                <div className="bed_preference_container">
                  <div className={classes.bed_button_wrap}>
                    <label>Bed Preference</label>
                    <div className="plus_minus">
                      <button
                        type="button"
                        onClick={() => toggleBedPreference(room.id)}
                      >
                        {room.isBedPreferenceOpen ? "-" : "+"}
                      </button>
                    </div>
                  </div>
                  {room.isBedPreferenceOpen && (
                    <div className={classes.bed_preference_inputs}>
                      <div className={classes.bed_radio_btn}>
                        <input
                          type="radio"
                          id="noPreference"
                          name="bedPref1"
                          value="0"
                        />
                        <label className="ui-body-2" for="noPreference">
                          <span value="0">No preference</span>
                        </label>
                      </div>
                      <div className={classes.bed_radio_btn}>
                        <input
                          type="radio"
                          id="kingBed1"
                          name="bedPref1"
                          value="1"
                        />
                        <label className="ui-body-2" for="kingBed1">
                          <span value="1">King or Queen</span>
                        </label>
                      </div>
                      <div className={classes.bed_radio_btn}>
                        <input
                          type="radio"
                          id="db1"
                          name="bedPref1"
                          value="2"
                        />
                        <label className="ui-body-2" for="db1">
                          <span value="2">Two beds</span>
                        </label>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="rooms-wrap rows">
          <div className="rooms-controller-wrap">
            <button
              className="add"
              type="button"
              aria-label="Add Rooms"
              onClick={addRoom}
            >
              + Add a room
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Search;
