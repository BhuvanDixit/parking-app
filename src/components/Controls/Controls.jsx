import styles from './controls.module.scss';
import { useState } from 'react';

export const Controls = ({ add }) => {
  const [vehicleType, setVehicleType] = useState();
  const [time, setTime] = useState();
  const [date, setDate] = useState();
  const [vehicleNo, setVehicleNo] = useState();

  const generateNumberPlate = () => {
    return vehicleNo;
  };

  return (
    <div className={styles.controls}>
      <form className="mt-5">
        <div class="form-row align-items-center">
          <div class="col-auto">
            <div class="input-group mb-2">
              <div class="input-group-prepend">
                <div class="input-group-text">Vehicle Type</div>
              </div>
              <input
                type="text"
                class="form-control"
                id="inlineFormInputGroup"
                placeholder="SUV, Sedan or Hatchback"
                onChange={(event) => setVehicleType(event.target.value)}
              />
            </div>
          </div>
          <div class="col-auto">
            <div class="input-group mb-2">
              <div class="input-group-prepend">
                <div class="input-group-text">Parking Time</div>
              </div>
              <input
                type="text"
                class="form-control"
                id="inlineFormInputGroup"
                placeholder="HH:MM"
                onChange={(event) => setTime(event.target.value)}
              />
            </div>
          </div>
          <div class="col-auto">
            <div class="input-group mb-2">
              <div class="input-group-prepend">
                <div class="input-group-text">Parking Date</div>
              </div>
              <input
                type="text"
                class="form-control"
                id="inlineFormInputGroup"
                placeholder="DD-MM-YYYY"
                onChange={(event) => setDate(event.target.value)}
              />
            </div>
          </div>
          <div class="col-auto">
            <div class="input-group mb-2">
              <div class="input-group-prepend">
                <div class="input-group-text">Vehicle Num.</div>
              </div>
              <input
                type="text"
                class="form-control"
                id="inlineFormInputGroup"
                placeholder="HR 26 BD 1906"
                onChange={(event) => setVehicleNo(event.target.value)}
              />
            </div>
          </div>
        </div>
      </form>
      <button
        className="btn btn-success ps-3 pe-3"
        onClick={() => add(generateNumberPlate())}
      >
        PARK!
      </button>
    </div>
  );
};
