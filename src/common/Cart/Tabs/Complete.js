import classes from "../CartItem.module.css";

const Complete = () => {
  return <>
    <>
      <section className={classes.complete}>
        <div>
          <h4>dynamic name</h4>
          <h3>Complete your booking
          </h3>
        </div>
        <div>
          <div className={classes.information}>
            <div>
              <h4>Personal Information
              </h4>
              <p>* Mandatory Please provide the information below. We respect your privacy. Review our Internet Privacy Policy for more information.

              </p>
              <form>
                <div>
                  <label>Title *</label>
                  <select name="title" id="title" aria-required="true" required>
                    <option selected="selected" value="0">Choose a Prefix</option>
                    <option value="Mr">Mr.</option>
                    <option value="Ms">Ms.</option>
                    <option value="Mrs">Mrs.</option>
                    <option value="Dr">Dr.</option>
                    <option value="Prof">Prof.</option>

                  </select>
                </div>
                <div>
                  <label>First Name *</label>
                  <input type="text" name="First Name" placeholder="Mohamed" required />
                </div>
                <div>
                  <label>Last Name</label>
                  <input type="text" name="Last Name" placeholder="Ahmed" required />
                </div>
                <div>
                  <label>Email</label>
                  <input type="email" name="Email" placeholder="yousef7shaban@gmail.com" required />
                </div>
                <div>
                  <label>Phone Number</label>
                  <input type="tel" name="Phone" required />
                </div>
                <div>
                  <label>Address</label>
                  <input type="text" required name="Address" />
                </div>
                <div>
                  <label>City</label>
                  <input type="text" required name="City" />
                </div>
                <div>
                  <label>State</label>
                  <input type="text" required name="State" />
                </div>
                <div>
                  <label>Zip Code</label>
                  <input type="text" required name="Zip Code" />
                </div>
                <div>
                  <label>Country</label>
                  <select name="Country" required>
                    <option value="0">Select Country</option>
                    <option value="1">Palestine</option>
                    <option value="2">Norway</option>
                    <option value="3">Mexico</option>
                    <option value="4">South africa</option>
                    <option value="5">France</option>
                    <option value="6">Germany</option>
                    <option value="7">Italy</option>
                    <option value="8">Spain</option>
                    <option value="9">China</option>
                    <option value="10">Japan</option>
                  </select>
                </div>
                <div>
                  <button type="submit">Continue</button>
                </div>
              </form>

            </div>
          </div>
        </div>
      </section>
    </>
  </>;
};
export default Complete;
