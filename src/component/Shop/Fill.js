/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Fill.css";

const Fill = () => {
  return (
    <div className="sidebar-widget price_range range mb-30">
      <div className="widget-header position-relative mb-20 pb-10">
        <h5 className="widget-title mb-10">Fill by price</h5>
        <div className="bt-1 border-color-1"></div>
      </div>

      <div className="list-group">
        <div className="list-group-item mb-10 mt-10">
          <label className="fw-900">Color</label>

          <div class="custome-checkbox">
            <div>
              <input
                type="checkbox"
                class="form-check-input"
                id="NestFood"
                value="NestFood"
              />
              <label class="form-check-label" for="NestFood">
                NestFood
              </label>
              <br />
            </div>
            <div>
              <input
                type="checkbox"
                class="form-check-input"
                id="stouffer"
                value="stouffer"
              />
              <label class="form-check-label" for="stouffer">
                stouffer
              </label>
              <br />
            </div>
            <div>
              <input
                type="checkbox"
                class="form-check-input"
                id="starKist"
                value="starKist"
              />
              <label class="form-check-label" for="starKist">
                starKist
              </label>
              <br />
            </div>
            <div>
              <input
                type="checkbox"
                class="form-check-input"
                id="aldi"
                value="aldi"
              />
              <label class="form-check-label" for="aldi">
                aldi
              </label>
              <br />
            </div>
            <div>
              <input
                type="checkbox"
                class="form-check-input"
                id="adidas"
                value="adidas"
              />
              <label class="form-check-label" for="adidas">
                adidas
              </label>
              <br />
            </div>
            <div>
              <input
                type="checkbox"
                class="form-check-input"
                id="Costco"
                value="Costco"
              />
              <label class="form-check-label" for="Costco">
                Costco
              </label>
              <br />
            </div>
            <div>
              <input
                type="checkbox"
                class="form-check-input"
                id="Harris"
                value="Harris"
              />
              <label class="form-check-label" for="Harris">
                Harris
              </label>
              <br />
            </div>
            <div>
              <input
                type="checkbox"
                class="form-check-input"
                id="iSnack"
                value="iSnack"
              />
              <label class="form-check-label" for="iSnack">
                iSnack
              </label>
              <br />
            </div>
            <div>
              <input
                type="checkbox"
                class="form-check-input"
                id="Burbe"
                value="Burbe"
              />
              <label class="form-check-label" for="Burbe">
                Burbe
              </label>
              <br />
            </div>
          </div>

          <label className="fw-900 mt-15">Item Condition</label>
          <ul className="list-filter size-filter font-small">
            <li className="active">
              <a>All</a>
            </li>
            <li className="">
              <a>m </a>
            </li>
            <li className="">
              <a>l</a>
            </li>
            <li className="">
              <a>xl</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Fill;
