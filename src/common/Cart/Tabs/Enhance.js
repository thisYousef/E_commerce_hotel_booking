import { useState } from "react";
import classes from "../CartItem.module.css";

const Enhance = () => {
  const [showParkingDetails, setParkingDetails] = useState(false);
  const [showOneKingDetails, setShowOneKingDetails] = useState(false);
  const [showDoubleDetails, setShowDoubleDetails] = useState(false);

  // Base price in USD
  const baseParkingPriceUSD = 65;
  const baseSunsetPriceUSD = 85;
  const baseNaturalLight = 160;
  const currencySymbols = {
    USD: '$',
    EGP: 'E£',
    EUR: '€'
  };

  // Conversion rates (example rates - update with real ones)
  const conversionRates = {
    USD: 1,
    EGP: 49.90, // 1 USD = ~49.90 EGP
    EUR: 0.92    // 1 USD = ~0.92 EUR
  };

  const [selectedCurrency, setSelectedCurrency] = useState('USD');

  // Calculate converted price
  const convertedParkingPrice = (baseParkingPriceUSD * conversionRates[selectedCurrency]).toFixed(2);
  const convertedSUNSETPrice = (baseSunsetPriceUSD * conversionRates[selectedCurrency]).toFixed(2);
  const convertedNaturalLightPrice = (baseNaturalLight * conversionRates[selectedCurrency]).toFixed(2);

  const handleCurrencyChange = (e) => {
    setSelectedCurrency(e.target.value);
  };

  return (
    <>
      <section className={classes.enhance}>
        <div>
          <h4>dynamic name</h4>
          <h3>Enhance your stay  </h3>
        </div>
        <div>
          <div className={classes.CurrencySelection}>
            <div>
              <p>Note: Please do not select an item below if it is included in your package.</p>
            </div>
            <div>
              <label>View Rates In</label>
              <select
                name="CurrencySelection"
                onChange={handleCurrencyChange}
                value={selectedCurrency}
              >
                <option value="USD">US Dollar</option>
                <option value="EGP">Egyptian Pound</option>
                <option value="EUR">Euro</option>
              </select>
            </div>

          </div>
          <div className={classes.enhanceDetails}>
            <ul>
              <li>
                <div>
                  <div className={classes.parking} onClick={() => setParkingDetails(!showParkingDetails)}>
                    <h4>Valet Parking</h4>
                    <p>{currencySymbols[selectedCurrency]} {convertedParkingPrice} {selectedCurrency}/Unit {showParkingDetails ? '-' : '+'}</p>
                  </div>
                  {showParkingDetails && <div>
                    <p>Valet parking for one vehicle with in and out privileges. Excludes 10 percent city parking tax.</p>
                    <select>
                      <option selected="selected" value="-1">Quantity</option>
                      <option value="1">1</option>
                    </select>
                  </div>
                  }
                </div>
              </li>
              <li>
                <div>
                  <div className={classes.one_king} onClick={() => setShowOneKingDetails(!showOneKingDetails)}>
                    <h4>Upgrade to DELUXE SUNSET VIEW 1 KING</h4>
                    <p>{currencySymbols[selectedCurrency]} {convertedSUNSETPrice} {selectedCurrency}/Night {showOneKingDetails ? '-' : '+'}</p>
                  </div>
                  {showOneKingDetails && <div>
                    <p>Natural light fills the room offering a true sense of space. Floor-to-ceiling windows lead to a private furnished balcony with front-row seats to LAs famed sunset. Elegant bathroom with walk-in shower and separate tub. Connectors available.</p>
                    <input name="one_king" value='ADD' type="checkbox" id="king" />
                    <label for="king">ADD</label>
                  </div>
                  }
                </div>
              </li>
              <li>
                <div>
                  <div className={classes.upgrade} onClick={() => setShowDoubleDetails(!showDoubleDetails)}>
                    <h4>Upgrade to DELUXE SUNSET VIEW 2 DOUBLE</h4>
                    <p>{currencySymbols[selectedCurrency]} {convertedNaturalLightPrice} {selectedCurrency}/Unit {showDoubleDetails ? '-' : '+'}</p>
                  </div>
                  {showDoubleDetails &&
                    <div>
                      <p>Natural light fills the room offering a true sense of space. Floor-to-ceiling windows lead to a private furnished balcony with front-row seats to LAs famed sunset. Elegant bathroom with walk-in shower and separate tub. Connectors available.</p>
                      <input name="double" value='ADD' type="checkbox" id="double" />
                      <label for="double">ADD</label>
                    </div>
                  }
                </div>
              </li>
            </ul>
            <button>Continue</button>
          </div>
        </div>
      </section>
    </>
  )
};
export default Enhance;
