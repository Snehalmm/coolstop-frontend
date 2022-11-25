import React from 'react';

const Filters = () => {
  const onchangeHandle = (id) => {
    const elem = document.getElementById(id);
    let elements = elem?.classList.contains('is-active');
    var targetDiv = document
      .getElementById(id)
      .getElementsByClassName('accordion-content')[0];

    if (elements) {
      elements = elem?.classList.remove('is-active');
      targetDiv.style.display = 'none';
    } else {
      elements = elem?.classList.add('is-active');
      targetDiv.style.display = 'block';
    }
  };
  return (
    <>
      <section>
        <div className="filt-con">
          <div className="filt-clall">
            <span className="filt-tit">Filters</span>
            <a className="cl-all" href="#">
              Clear All
            </a>
          </div>

          <ul
            className="accordion boxes"
            data-accordion
            data-multi-expand="true"
            data-allow-all-closed="true"
          >
            <li
              className="accordion-item  is-active"
              data-accordion-item
              id="brands"
              onClick={() => onchangeHandle('brands')}
            >
              {' '}
              <a className="accordion-title ">Brand</a>
              <div
                className="accordion-content"
                data-tab-content
                style={{ display: 'block' }}
              >
                <ul>
                  <li>
                    <input type="checkbox" id="fil_brand-1" />
                    <label htmlFor="fil_brand-1">Ogeneral</label>
                  </li>
                  <li>
                    <input type="checkbox" id="fil_brand-2" />
                    <label htmlFor="fil_brand-2">Panasonic</label>
                  </li>
                  <li>
                    <input type="checkbox" id="fil_brand-3" />
                    <label htmlFor="fil_brand-3">Voltas</label>
                  </li>
                  <li>
                    <input type="checkbox" id="fil_brand-4" />
                    <label htmlFor="fil_brand-4">Amstrad</label>
                  </li>
                </ul>
              </div>
            </li>
            <li
              className="accordion-item is-active"
              data-accordion-item
              id="pricerange"
              onClick={() => onchangeHandle('pricerange')}
            >
              {' '}
              <a className="accordion-title" name="tools">
                Price Range
              </a>
              <div
                className="accordion-content"
                data-tab-content
                style={{ display: 'block' }}
              >
                <ul>
                  <li>
                    <input type="checkbox" id="pri_range-1" />
                    <label htmlFor="pri_range-1">
                      &#8377; 18000 - &#8377; 22000
                    </label>
                  </li>
                  <li>
                    <input type="checkbox" id="pri_range-2" />
                    <label htmlFor="pri_range-2">
                      &#8377; 20000 - &#8377; 30000
                    </label>
                  </li>
                  <li>
                    <input type="checkbox" id="pri_range-3" />
                    <label htmlFor="pri_range-3">
                      &#8377; 30000 - &#8377; 40000
                    </label>
                  </li>
                  <li>
                    <input type="checkbox" id="pri_range-4" />
                    <label htmlFor="pri_range-4">Blower (3)</label>
                  </li>
                </ul>
              </div>
            </li>
            <li
              className="accordion-item is-active"
              data-accordion-item
              id="roomsize"
              onClick={() => onchangeHandle('roomsize')}
            >
              {' '}
              <a className="accordion-title">Room Size</a>
              <div
                className="accordion-content"
                data-tab-content
                style={{ display: 'block' }}
              >
                <ul>
                  <li>
                    <input type="checkbox" id="rum-siz-1" />
                    <label htmlFor="rum-siz-1">251 - 300 Sq Ft</label>
                  </li>
                  <li>
                    <input type="checkbox" id="rum-siz-2" />
                    <label htmlFor="rum-siz-2">221 - 250 Sq Ft</label>
                  </li>
                  <li>
                    <input type="checkbox" id="rum-siz-3" />
                    <label htmlFor="rum-siz-3">181 - 220 Sq Ft</label>
                  </li>
                  <li>
                    <input type="checkbox" id="rum-siz-4" />
                    <label htmlFor="rum-siz-4">141 - 180 Sq Ft</label>
                  </li>
                </ul>
              </div>
            </li>
            <li
              className="accordion-item is-active"
              data-accordion-item
              id="actechnology"
              onClick={() => onchangeHandle('actechnology')}
            >
              {' '}
              <a name="actechnology" className="accordion-title">
                AC Technology
              </a>
              <div
                className="accordion-content"
                data-tab-content
                style={{ display: 'block' }}
              >
                <ul>
                  <li>
                    <input type="checkbox" id="ac-tec-1" />
                    <label htmlFor="ac-tec-1">Inverter</label>
                  </li>
                  <li>
                    <input type="checkbox" id="ac-tec-2" />
                    <label htmlFor="ac-tec-2">Dual Inverter</label>
                  </li>
                  <li>
                    <input type="checkbox" id="ac-tec-3" />
                    <label htmlFor="ac-tec-3">Triple Inverter</label>
                  </li>
                  <li>
                    <input type="checkbox" id="ac-tec-4" />
                    <label htmlFor="ac-tec-4">Fixed Speed</label>
                  </li>
                </ul>
              </div>
            </li>
            <li
              className="accordion-item is-active"
              data-accordion-item
              id="actype"
              onClick={() => onchangeHandle('actype')}
            >
              {' '}
              <a name="actype" className="accordion-title">
                AC Type
              </a>
              <div
                className="accordion-content"
                data-tab-content
                style={{ display: 'block' }}
              >
                <ul>
                  <li>
                    <input type="checkbox" id="ac-typ-1" />
                    <label htmlFor="ac-typ-1">Split</label>
                  </li>
                  <li>
                    <input type="checkbox" id="ac-typ-2" />
                    <label htmlFor="ac-typ-2">Window</label>
                  </li>
                  <li>
                    <input type="checkbox" id="ac-typ-3" />
                    <label htmlFor="ac-typ-3">Tower</label>
                  </li>
                </ul>
              </div>
            </li>
            <li
              className="accordion-item is-active"
              data-accordion-item
              id="starrating"
              onClick={() => onchangeHandle('starrating')}
            >
              {' '}
              <a name="starrating" className="accordion-title">
                Star Rating
              </a>
              <div
                className="accordion-content"
                data-tab-content
                style={{ display: 'block' }}
              >
                <ul>
                  <li>
                    <input type="checkbox" id="sta-rat-1" />
                    <label htmlFor="sta-rat-1">Hot and Cold</label>
                  </li>
                  <li>
                    <input type="checkbox" id="sta-rat-2" />
                    <label htmlFor="sta-rat-2">Invertor</label>
                  </li>
                  <li>
                    <input type="checkbox" id="sta-rat-3" />
                    <label htmlFor="sta-rat-3">5 Star</label>
                  </li>
                  <li>
                    <input type="checkbox" id="sta-rat-4" />
                    <label htmlFor="sta-rat-4">4 Star</label>
                  </li>
                </ul>
              </div>
            </li>
            <li
              className="accordion-item  is-active"
              data-accordion-item
              id="tonnage"
              onClick={() => onchangeHandle('tonnage')}
            >
              {' '}
              <a name="tonnage" className="accordion-title">
                Tonnage
              </a>
              <div
                className="accordion-content"
                data-tab-content
                style={{ display: 'block' }}
              >
                <ul>
                  <li>
                    <input type="checkbox" id="ton-spe-1" />
                    <label htmlFor="ton-spe-1">2 Ton & Above</label>
                  </li>
                  <li>
                    <input type="checkbox" id="ton-spe-2" />
                    <label htmlFor="ton-spe-2">2 Ton</label>
                  </li>
                  <li>
                    <input type="checkbox" id="ton-spe-3" />
                    <label htmlFor="ton-spe-3">1.8 Ton</label>
                  </li>
                  <li>
                    <input type="checkbox" id="ton-spe-4" />
                    <label htmlFor="ton-spe-4">1.5 Ton</label>
                  </li>
                </ul>
              </div>
            </li>
            <li
              className=" accordion-item  is-active"
              data-accordion-item
              id="acfeatures"
              onClick={() => onchangeHandle('acfeatures')}
            >
              {' '}
              <a name="acfeatures" className="accordion-title">
                AC Features
              </a>
              <div
                className="accordion-content"
                data-tab-content
                style={{ display: 'block' }}
              >
                <ul>
                  <li>
                    <input type="checkbox" id="volts-1" />
                    <label htmlFor="volts-1">PM2.5 Filter</label>
                  </li>
                  <li>
                    <input type="checkbox" id="volts-2" />
                    <label htmlFor="volts-2">Wi-Fi</label>
                  </li>
                  <li>
                    <input type="checkbox" id="volts-3" />
                    <label htmlFor="volts-3">Stabilizer Free Operation</label>
                  </li>
                  <li>
                    <input type="checkbox" id="volts-4" />
                    <label htmlFor="volts-4">Humidifier</label>
                  </li>
                </ul>
              </div>
            </li>
            <li
              className="accordion-item is-active "
              data-accordion-item
              id="power"
              onClick={() => onchangeHandle('power')}
            >
              {' '}
              <a className="accordion-title">Power Cunsumption</a>
              <div
                className="accordion-content"
                data-tab-content
                style={{ display: 'block' }}
              >
                <ul>
                  <li>
                    <input type="checkbox" id="pow-con-1" />
                    <label htmlFor="pow-con-1">1201-1400 W</label>
                  </li>
                  <li>
                    <input type="checkbox" id="pow-con-2" />
                    <label htmlFor="pow-con-2">1401-1600 W</label>
                  </li>
                  <li>
                    <input type="checkbox" id="pow-con-3" />
                    <label htmlFor="pow-con-3">1601-1800 W</label>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Filters;
