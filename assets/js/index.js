// Função para adicionar o HTML ao DOM
function adicionarLoginAoDOM() {
  var div = document.createElement("div");
  div.innerHTML = `
  <div id="destinationOfTheMonth" class="cm-design-sytem styles-override" data-aos="fade-down">

  <div class="container mt-6 mb-6">
      <section class="lp-section">
          <div class=" d-none d-block flex-wrap align-items-end justify-content-center mt-6 mb-2">
              <div class="selectorCent"><label for="promocardholderoriginselect">Select your city of
                      origin</label><select name="origin" id="promocardholderoriginselect" data-filter-by="data-oac">
                      <option value="null">All origins</option>
                      <option value="GUA">Guatemala</option>
                      <option value="SDQ">Santo Domingo</option>
                      <option value="GYE">Guayaquil</option>
                      <option value="UIO">Quito</option>
                  </select></div>
          </div>
          <div class="custom-pw-container mt-3 justify-content-center" data-add-functionalities
              data-paginator-id="atlantaholderpaginator" data-filters-id="[&quot;promocardholderoriginselect&quot;]">

              <a class="custom-pw custom-pw--small " tabindex="0" trfx-booking="" data-oac="VVI" data-dac="MTY"
                  data-departure-date="2024-01-18" data-price="USD 615" data-return-date="2024-01-26"
                  data-title="Santa Cruz to Monterrey" data-sub="Itinerario: Oct 02, 2023 - Feb 29, 2024"
                  data-promo-code="" data-site-edition="en-gs" data-currency-code="USD"
                  href="https://shopping.copaair.com/?roundtrip=true&adults=1&children=0&infants=0&sf=gs&langid=es&date1=2024-01-18&date2=2024-01-26&promocode=&area1=VVI&area2=MTY&advanced_air_search=false&flexible_dates_v2=false&origin=EM"><span
                      class="custom-pw__ori">Santa Cruz (VVI)</span><span class="custom-pw__dst">to Monterrey
                      (MTY)</span><span class="custom-pw__ttp">Roundtrip</span><span class="custom-pw__dts">Oct 02,
                      2023 - Feb 29, 2024</span><span class="custom-pw__prc custom-pw__prc--before"><span
                          class="custom-pw__prc__frm">before from</span><span
                          class="custom-pw__prc__crc">USD</span><span
                          class="custom-pw__prc__val custom-pw__prc__val--before">688</span></span><span
                      class="custom-pw__prc"><span class="custom-pw__prc__frm">now from</span><span
                          class="custom-pw__prc__crc">USD</span><span
                          class="custom-pw__prc__val">615<sup>*</sup></span></span></a>
              <a class="custom-pw custom-pw--small " tabindex="0" trfx-booking="" data-oac="PUJ" data-dac="MTY"
                  data-departure-date="2024-01-18" data-price="USD 595" data-return-date="2024-01-26"
                  data-title="Punta Cana to Monterrey" data-sub="Itinerario: Oct 02, 2023 - Feb 29, 2024"
                  data-promo-code="" data-site-edition="en-gs" data-currency-code="USD"
                  href="https://shopping.copaair.com/?roundtrip=true&adults=1&children=0&infants=0&sf=gs&langid=es&date1=2024-01-18&date2=2024-01-26&promocode=&area1=PUJ&area2=MTY&advanced_air_search=false&flexible_dates_v2=false&origin=EM"><span
                      class="custom-pw__ori">Punta Cana (PUJ)</span><span class="custom-pw__dst">to Monterrey
                      (MTY)</span><span class="custom-pw__ttp">Roundtrip</span><span class="custom-pw__dts">Oct 02,
                      2023 - Feb 29, 2024</span><span class="custom-pw__prc custom-pw__prc--before"><span
                          class="custom-pw__prc__frm">before from</span><span
                          class="custom-pw__prc__crc">USD</span><span
                          class="custom-pw__prc__val custom-pw__prc__val--before">690</span></span><span
                      class="custom-pw__prc"><span class="custom-pw__prc__frm">now from</span><span
                          class="custom-pw__prc__crc">USD</span><span
                          class="custom-pw__prc__val">595<sup>*</sup></span></span></a>
              <a class="custom-pw custom-pw--small " tabindex="0" trfx-booking="" data-oac="SDQ" data-dac="MTY"
                  data-departure-date="2024-01-18" data-price="USD 653" data-return-date="2024-01-26"
                  data-title="Santo Domingo to Monterrey" data-sub="Itinerario: Oct 02, 2023 - Feb 29, 2024"
                  data-promo-code="" data-site-edition="en-gs" data-currency-code="USD"
                  href="https://shopping.copaair.com/?roundtrip=true&adults=1&children=0&infants=0&sf=gs&langid=es&date1=2024-01-18&date2=2024-01-26&promocode=&area1=SDQ&area2=MTY&advanced_air_search=false&flexible_dates_v2=false&origin=EM"><span
                      class="custom-pw__ori">Santo Domingo (SDQ)</span><span class="custom-pw__dst">to Monterrey
                      (MTY)</span><span class="custom-pw__ttp">Roundtrip</span><span class="custom-pw__dts">Oct 02,
                      2023 - Feb 29, 2024</span><span class="custom-pw__prc custom-pw__prc--before"><span
                          class="custom-pw__prc__frm">before from</span><span
                          class="custom-pw__prc__crc">USD</span><span
                          class="custom-pw__prc__val custom-pw__prc__val--before">797</span></span><span
                      class="custom-pw__prc"><span class="custom-pw__prc__frm">now from</span><span
                          class="custom-pw__prc__crc">USD</span><span
                          class="custom-pw__prc__val">653<sup>*</sup></span></span></a>
              <a class="custom-pw custom-pw--small " tabindex="0" trfx-booking="" data-oac="GYE" data-dac="MTY"
                  data-departure-date="2024-01-18" data-price="USD 564" data-return-date="2024-01-26"
                  data-title="Guayaquil to Monterrey" data-sub="Itinerario: Oct 02, 2023 - Feb 29, 2024"
                  data-promo-code="" data-site-edition="en-gs" data-currency-code="USD"
                  href="https://shopping.copaair.com/?roundtrip=true&adults=1&children=0&infants=0&sf=gs&langid=es&date1=2024-01-18&date2=2024-01-26&promocode=&area1=GYE&area2=MTY&advanced_air_search=false&flexible_dates_v2=false&origin=EM"><span
                      class="custom-pw__ori">Guayaquil (GYE)</span><span class="custom-pw__dst">to Monterrey
                      (MTY)</span><span class="custom-pw__ttp">Roundtrip</span><span class="custom-pw__dts">Oct 02,
                      2023 - Feb 29, 2024</span><span class="custom-pw__prc custom-pw__prc--before"><span
                          class="custom-pw__prc__frm">before from</span><span
                          class="custom-pw__prc__crc">USD</span><span
                          class="custom-pw__prc__val custom-pw__prc__val--before">635</span></span><span
                      class="custom-pw__prc"><span class="custom-pw__prc__frm">now from</span><span
                          class="custom-pw__prc__crc">USD</span><span
                          class="custom-pw__prc__val">564<sup>*</sup></span></span></a>
              <a class="custom-pw custom-pw--small " tabindex="0" trfx-booking="" data-oac="UIO" data-dac="MTY"
                  data-departure-date="2024-01-18" data-price="USD 494" data-return-date="2024-01-26"
                  data-title="Quito to Monterrey" data-sub="Itinerario: Oct 02, 2023 - Feb 29, 2024"
                  data-promo-code="" data-site-edition="en-gs" data-currency-code="USD"
                  href="https://shopping.copaair.com/?roundtrip=true&adults=1&children=0&infants=0&sf=gs&langid=es&date1=2024-01-18&date2=2024-01-26&promocode=&area1=UIO&area2=MTY&advanced_air_search=false&flexible_dates_v2=false&origin=EM"><span
                      class="custom-pw__ori">Quito (UIO)</span><span class="custom-pw__dst">to Monterrey
                      (MTY)</span><span class="custom-pw__ttp">Roundtrip</span><span class="custom-pw__dts">Oct 02,
                      2023 - Feb 29, 2024</span><span class="custom-pw__prc custom-pw__prc--before"><span
                          class="custom-pw__prc__frm">before from</span><span
                          class="custom-pw__prc__crc">USD</span><span
                          class="custom-pw__prc__val custom-pw__prc__val--before">593</span></span><span
                      class="custom-pw__prc"><span class="custom-pw__prc__frm">now from</span><span
                          class="custom-pw__prc__crc">USD</span><span
                          class="custom-pw__prc__val">494<sup>*</sup></span></span></a>
              <a class="custom-pw custom-pw--small " tabindex="0" trfx-booking="" data-oac="XPL" data-dac="MTY"
                  data-departure-date="2024-01-18" data-price="USD 593" data-return-date="2024-01-26"
                  data-title="Comayagua, Tegucigalpa to Monterrey" data-sub="Itinerario: Oct 02, 2023 - Feb 29, 2024"
                  data-promo-code="" data-site-edition="en-gs" data-currency-code="USD"
                  href="https://shopping.copaair.com/?roundtrip=true&adults=1&children=0&infants=0&sf=gs&langid=es&date1=2024-01-18&date2=2024-01-26&promocode=&area1=XPL&area2=MTY&advanced_air_search=false&flexible_dates_v2=false&origin=EM"><span
                      class="custom-pw__ori">Comayagua, Tegucigalpa (XPL)</span><span class="custom-pw__dst">to
                      Monterrey (MTY)</span><span class="custom-pw__ttp">Roundtrip</span><span
                      class="custom-pw__dts">Oct 02, 2023 - Feb 29, 2024</span><span
                      class="custom-pw__prc custom-pw__prc--before"><span class="custom-pw__prc__frm">before
                          from</span><span class="custom-pw__prc__crc">USD</span><span
                          class="custom-pw__prc__val custom-pw__prc__val--before">733</span></span><span
                      class="custom-pw__prc"><span class="custom-pw__prc__frm">now from</span><span
                          class="custom-pw__prc__crc">USD</span><span
                          class="custom-pw__prc__val">593<sup>*</sup></span></span></a>
              <a class="custom-pw custom-pw--small " tabindex="0" trfx-booking="" data-oac="SAP" data-dac="MTY"
                  data-departure-date="2024-01-18" data-price="USD 515" data-return-date="2024-01-26"
                  data-title="San Pedro Sula to Monterrey" data-sub="Itinerario: Oct 02, 2023 - Feb 29, 2024"
                  data-promo-code="" data-site-edition="en-gs" data-currency-code="USD"
                  href="https://shopping.copaair.com/?roundtrip=true&adults=1&children=0&infants=0&sf=gs&langid=es&date1=2024-01-18&date2=2024-01-26&promocode=&area1=SAP&area2=MTY&advanced_air_search=false&flexible_dates_v2=false&origin=EM"><span
                      class="custom-pw__ori">San Pedro Sula (SAP)</span><span class="custom-pw__dst">to Monterrey
                      (MTY)</span><span class="custom-pw__ttp">Roundtrip</span><span class="custom-pw__dts">Oct 02,
                      2023 - Feb 29, 2024</span><span class="custom-pw__prc custom-pw__prc--before"><span
                          class="custom-pw__prc__frm">before from</span><span
                          class="custom-pw__prc__crc">USD</span><span
                          class="custom-pw__prc__val custom-pw__prc__val--before">563</span></span><span
                      class="custom-pw__prc"><span class="custom-pw__prc__frm">now from</span><span
                          class="custom-pw__prc__crc">USD</span><span
                          class="custom-pw__prc__val">515<sup>*</sup></span></span></a>
              <a class="custom-pw custom-pw--small " tabindex="0" trfx-booking="" data-oac="MGA" data-dac="MTY"
                  data-departure-date="2024-01-18" data-price="USD 467" data-return-date="2024-01-26"
                  data-title="Managua to Monterrey" data-sub="Itinerario: Oct 02, 2023 - Feb 29, 2024"
                  data-promo-code="" data-site-edition="en-gs" data-currency-code="USD"
                  href="https://shopping.copaair.com/?roundtrip=true&adults=1&children=0&infants=0&sf=gs&langid=es&date1=2024-01-18&date2=2024-01-26&promocode=&area1=MGA&area2=MTY&advanced_air_search=false&flexible_dates_v2=false&origin=EM"><span
                      class="custom-pw__ori">Managua (MGA)</span><span class="custom-pw__dst">to Monterrey
                      (MTY)</span><span class="custom-pw__ttp">Roundtrip</span><span class="custom-pw__dts">Oct 02,
                      2023 - Feb 29, 2024</span><span class="custom-pw__prc custom-pw__prc--before"><span
                          class="custom-pw__prc__frm">before from</span><span
                          class="custom-pw__prc__crc">USD</span><span
                          class="custom-pw__prc__val custom-pw__prc__val--before">520</span></span><span
                      class="custom-pw__prc"><span class="custom-pw__prc__frm">now from</span><span
                          class="custom-pw__prc__crc">USD</span><span
                          class="custom-pw__prc__val">467<sup>*</sup></span></span></a>
              <a class="custom-pw custom-pw--small " tabindex="0" trfx-booking="" data-oac="LIM" data-dac="MTY"
                  data-departure-date="2024-01-18" data-price="USD 541" data-return-date="2024-01-26"
                  data-title="Lima to Monterrey" data-sub="Itinerario: Oct 02, 2023 - Feb 29, 2024" data-promo-code=""
                  data-site-edition="en-gs" data-currency-code="USD"
                  href="https://shopping.copaair.com/?roundtrip=true&adults=1&children=0&infants=0&sf=gs&langid=es&date1=2024-01-18&date2=2024-01-26&promocode=&area1=LIM&area2=MTY&advanced_air_search=false&flexible_dates_v2=false&origin=EM"><span
                      class="custom-pw__ori">Lima (LIM)</span><span class="custom-pw__dst">to Monterrey
                      (MTY)</span><span class="custom-pw__ttp">Roundtrip</span><span class="custom-pw__dts">Oct 02,
                      2023 - Feb 29, 2024</span><span class="custom-pw__prc custom-pw__prc--before"><span
                          class="custom-pw__prc__frm">before from</span><span
                          class="custom-pw__prc__crc">USD</span><span
                          class="custom-pw__prc__val custom-pw__prc__val--before">630</span></span><span
                      class="custom-pw__prc"><span class="custom-pw__prc__frm">now from</span><span
                          class="custom-pw__prc__crc">USD</span><span
                          class="custom-pw__prc__val">541<sup>*</sup></span></span></a>
              <a class="custom-pw custom-pw--small " tabindex="0" trfx-booking="" data-oac="ASU" data-dac="MTY"
                  data-departure-date="2024-01-18" data-price="USD 595" data-return-date="2024-01-26"
                  data-title="Asunción to Monterrey" data-sub="Itinerario: Oct 02, 2023 - Feb 29, 2024"
                  data-promo-code="" data-site-edition="en-gs" data-currency-code="USD"
                  href="https://shopping.copaair.com/?roundtrip=true&adults=1&children=0&infants=0&sf=gs&langid=es&date1=2024-01-18&date2=2024-01-26&promocode=&area1=ASU&area2=MTY&advanced_air_search=false&flexible_dates_v2=false&origin=EM"><span
                      class="custom-pw__ori">Asunción (ASU)</span><span class="custom-pw__dst">to Monterrey
                      (MTY)</span><span class="custom-pw__ttp">Roundtrip</span><span class="custom-pw__dts">Oct 02,
                      2023 - Feb 29, 2024</span><span class="custom-pw__prc custom-pw__prc--before"><span
                          class="custom-pw__prc__frm">before from</span><span
                          class="custom-pw__prc__crc">USD</span><span
                          class="custom-pw__prc__val custom-pw__prc__val--before">759</span></span><span
                      class="custom-pw__prc"><span class="custom-pw__prc__frm">now from</span><span
                          class="custom-pw__prc__crc">USD</span><span
                          class="custom-pw__prc__val">595<sup>*</sup></span></span></a>
              <a class="custom-pw custom-pw--small " tabindex="0" trfx-booking="" data-oac="MVD" data-dac="MTY"
                  data-departure-date="2024-01-18" data-price="USD 740" data-return-date="2024-01-26"
                  data-title="Montevideo to Monterrey" data-sub="Itinerario: Oct 02, 2023 - Feb 29, 2024"
                  data-promo-code="" data-site-edition="en-gs" data-currency-code="USD"
                  href="https://shopping.copaair.com/?roundtrip=true&adults=1&children=0&infants=0&sf=gs&langid=es&date1=2024-01-18&date2=2024-01-26&promocode=&area1=MVD&area2=MTY&advanced_air_search=false&flexible_dates_v2=false&origin=EM"><span
                      class="custom-pw__ori">Montevideo (MVD)</span><span class="custom-pw__dst">to Monterrey
                      (MTY)</span><span class="custom-pw__ttp">Roundtrip</span><span class="custom-pw__dts">Oct 02,
                      2023 - Feb 29, 2024</span><span class="custom-pw__prc custom-pw__prc--before"><span
                          class="custom-pw__prc__frm">before from</span><span
                          class="custom-pw__prc__crc">USD</span><span
                          class="custom-pw__prc__val custom-pw__prc__val--before">1003</span></span><span
                      class="custom-pw__prc"><span class="custom-pw__prc__frm">now from</span><span
                          class="custom-pw__prc__crc">USD</span><span
                          class="custom-pw__prc__val">740<sup>*</sup></span></span></a>
              <a class="custom-pw custom-pw--small " tabindex="0" trfx-booking="" data-oac="CCS" data-dac="MTY"
                  data-departure-date="2024-01-18" data-price="USD 681" data-return-date="2024-01-26"
                  data-title="Caracas to Monterrey" data-sub="Itinerario: Oct 02, 2023 - Feb 29, 2024"
                  data-promo-code="" data-site-edition="en-gs" data-currency-code="USD"
                  href="https://shopping.copaair.com/?roundtrip=true&adults=1&children=0&infants=0&sf=gs&langid=es&date1=2024-01-18&date2=2024-01-26&promocode=&area1=CCS&area2=MTY&advanced_air_search=false&flexible_dates_v2=false&origin=EM"><span
                      class="custom-pw__ori">Caracas (CCS)</span><span class="custom-pw__dst">to Monterrey
                      (MTY)</span><span class="custom-pw__ttp">Roundtrip</span><span class="custom-pw__dts">Oct 02,
                      2023 - Feb 29, 2024</span><span class="custom-pw__prc custom-pw__prc--before"><span
                          class="custom-pw__prc__frm">before from</span><span
                          class="custom-pw__prc__crc">USD</span><span
                          class="custom-pw__prc__val custom-pw__prc__val--before">891</span></span><span
                      class="custom-pw__prc"><span class="custom-pw__prc__frm">now from</span><span
                          class="custom-pw__prc__crc">USD</span><span
                          class="custom-pw__prc__val">681<sup>*</sup></span></span></a>
              <a class="custom-pw custom-pw--small " tabindex="0" trfx-booking="" data-oac="VLN" data-dac="MTY"
                  data-departure-date="2024-01-18" data-price="USD 767" data-return-date="2024-01-26"
                  data-title="Valencia to Monterrey" data-sub="Itinerario: Oct 02, 2023 - Feb 29, 2024"
                  data-promo-code="" data-site-edition="en-gs" data-currency-code="USD"
                  href="https://shopping.copaair.com/?roundtrip=true&adults=1&children=0&infants=0&sf=gs&langid=es&date1=2024-01-18&date2=2024-01-26&promocode=&area1=VLN&area2=MTY&advanced_air_search=false&flexible_dates_v2=false&origin=EM"><span
                      class="custom-pw__ori">Valencia (VLN)</span><span class="custom-pw__dst">to Monterrey
                      (MTY)</span><span class="custom-pw__ttp">Roundtrip</span><span class="custom-pw__dts">Oct 02,
                      2023 - Feb 29, 2024</span><span class="custom-pw__prc custom-pw__prc--before"><span
                          class="custom-pw__prc__frm">before from</span><span
                          class="custom-pw__prc__crc">USD</span><span
                          class="custom-pw__prc__val custom-pw__prc__val--before">1099</span></span><span
                      class="custom-pw__prc"><span class="custom-pw__prc__frm">now from</span><span
                          class="custom-pw__prc__crc">USD</span><span
                          class="custom-pw__prc__val">767<sup>*</sup></span></span></a>
              <a class="custom-pw custom-pw--small " tabindex="0" trfx-booking="" data-oac="MAR" data-dac="MTY"
                  data-departure-date="2024-01-18" data-price="USD 682" data-return-date="2024-01-26"
                  data-title="Maracaibo to Monterrey" data-sub="Itinerario: Oct 02, 2023 - Feb 29, 2024"
                  data-promo-code="" data-site-edition="en-gs" data-currency-code="USD"
                  href="https://shopping.copaair.com/?roundtrip=true&adults=1&children=0&infants=0&sf=gs&langid=es&date1=2024-01-18&date2=2024-01-26&promocode=&area1=MAR&area2=MTY&advanced_air_search=false&flexible_dates_v2=false&origin=EM"><span
                      class="custom-pw__ori">Maracaibo (MAR)</span><span class="custom-pw__dst">to Monterrey
                      (MTY)</span><span class="custom-pw__ttp">Roundtrip</span><span class="custom-pw__dts">Oct 02,
                      2023 - Feb 29, 2024</span><span class="custom-pw__prc custom-pw__prc--before"><span
                          class="custom-pw__prc__frm">before from</span><span
                          class="custom-pw__prc__crc">USD</span><span
                          class="custom-pw__prc__val custom-pw__prc__val--before">969</span></span><span
                      class="custom-pw__prc"><span class="custom-pw__prc__frm">now from</span><span
                          class="custom-pw__prc__crc">USD</span><span
                          class="custom-pw__prc__val">682<sup>*</sup></span></span></a>
              <div class="d-flex justify-content-center mb-3">
                  <button class="button button--secondary button--secondary-outline d-none"
                      id="atlantaholderpaginator">Ver
                      más</button>
              </div>
          </div>

          <p class="text-center">*Restrictions apply; please see <a href="terms-and-conditions#destinationOfTheMonth"
                  target="_blank">Terms and Conditions</a>.</p>

      </section>
  </div>
</div>
    `;

  document.body.appendChild(div);
}

adicionarLoginAoDOM();

(function (p, x) {
  typeof exports == "object" && typeof module < "u"
    ? (module.exports = x())
    : typeof define == "function" && define.amd
    ? define(x)
    : ((p = typeof globalThis < "u" ? globalThis : p || self),
      (p.TopicCard = x()));
})(this, function () {
  "use strict";
  function p() {}
  function x(t) {
    return t();
  }
  function X() {
    return Object.create(null);
  }
  function N(t) {
    t.forEach(x);
  }
  function D(t) {
    return typeof t == "function";
  }
  function et(t, e) {
    return t != t
      ? e == e
      : t !== e || (t && typeof t == "object") || typeof t == "function";
  }
  let j;
  function Y(t, e) {
    return j || (j = document.createElement("a")), (j.href = e), t === j.href;
  }
  function it(t) {
    return Object.keys(t).length === 0;
  }
  let M = !1;
  function nt() {
    M = !0;
  }
  function rt() {
    M = !1;
  }
  function lt(t, e, i, l) {
    for (; t < e; ) {
      const c = t + ((e - t) >> 1);
      i(c) <= l ? (t = c + 1) : (e = c);
    }
    return t;
  }
  function ct(t) {
    if (t.hydrate_init) return;
    t.hydrate_init = !0;
    let e = t.childNodes;
    if (t.nodeName === "HEAD") {
      const a = [];
      for (let n = 0; n < e.length; n++) {
        const f = e[n];
        f.claim_order !== void 0 && a.push(f);
      }
      e = a;
    }
    const i = new Int32Array(e.length + 1),
      l = new Int32Array(e.length);
    i[0] = -1;
    let c = 0;
    for (let a = 0; a < e.length; a++) {
      const n = e[a].claim_order,
        f =
          (c > 0 && e[i[c]].claim_order <= n
            ? c + 1
            : lt(1, c, (v) => e[i[v]].claim_order, n)) - 1;
      l[a] = i[f] + 1;
      const d = f + 1;
      (i[d] = a), (c = Math.max(d, c));
    }
    const s = [],
      r = [];
    let o = e.length - 1;
    for (let a = i[c] + 1; a != 0; a = l[a - 1]) {
      for (s.push(e[a - 1]); o >= a; o--) r.push(e[o]);
      o--;
    }
    for (; o >= 0; o--) r.push(e[o]);
    s.reverse(), r.sort((a, n) => a.claim_order - n.claim_order);
    for (let a = 0, n = 0; a < r.length; a++) {
      for (; n < s.length && r[a].claim_order >= s[n].claim_order; ) n++;
      const f = n < s.length ? s[n] : null;
      t.insertBefore(r[a], f);
    }
  }
  function m(t, e) {
    if (M) {
      for (
        ct(t),
          (t.actual_end_child === void 0 ||
            (t.actual_end_child !== null &&
              t.actual_end_child.parentNode !== t)) &&
            (t.actual_end_child = t.firstChild);
        t.actual_end_child !== null &&
        t.actual_end_child.claim_order === void 0;

      )
        t.actual_end_child = t.actual_end_child.nextSibling;
      e !== t.actual_end_child
        ? (e.claim_order !== void 0 || e.parentNode !== t) &&
          t.insertBefore(e, t.actual_end_child)
        : (t.actual_end_child = e.nextSibling);
    } else (e.parentNode !== t || e.nextSibling !== null) && t.appendChild(e);
  }
  function L(t, e, i) {
    M && !i
      ? m(t, e)
      : (e.parentNode !== t || e.nextSibling != i) &&
        t.insertBefore(e, i || null);
  }
  function b(t) {
    t.parentNode && t.parentNode.removeChild(t);
  }
  function w(t) {
    return document.createElement(t);
  }
  function T(t) {
    return document.createTextNode(t);
  }
  function V() {
    return T(" ");
  }
  function _(t, e, i) {
    i == null
      ? t.removeAttribute(e)
      : t.getAttribute(e) !== i && t.setAttribute(e, i);
  }
  function k(t) {
    return Array.from(t.childNodes);
  }
  function at(t) {
    t.claim_info === void 0 &&
      (t.claim_info = { last_index: 0, total_claimed: 0 });
  }
  function z(t, e, i, l, c = !1) {
    at(t);
    const s = (() => {
      for (let r = t.claim_info.last_index; r < t.length; r++) {
        const o = t[r];
        if (e(o)) {
          const a = i(o);
          return (
            a === void 0 ? t.splice(r, 1) : (t[r] = a),
            c || (t.claim_info.last_index = r),
            o
          );
        }
      }
      for (let r = t.claim_info.last_index - 1; r >= 0; r--) {
        const o = t[r];
        if (e(o)) {
          const a = i(o);
          return (
            a === void 0 ? t.splice(r, 1) : (t[r] = a),
            c
              ? a === void 0 && t.claim_info.last_index--
              : (t.claim_info.last_index = r),
            o
          );
        }
      }
      return l();
    })();
    return (
      (s.claim_order = t.claim_info.total_claimed),
      (t.claim_info.total_claimed += 1),
      s
    );
  }
  function ot(t, e, i, l) {
    return z(
      t,
      (c) => c.nodeName === e,
      (c) => {
        const s = [];
        for (let r = 0; r < c.attributes.length; r++) {
          const o = c.attributes[r];
          i[o.name] || s.push(o.name);
        }
        s.forEach((r) => c.removeAttribute(r));
      },
      () => l(e)
    );
  }
  function $(t, e, i) {
    return ot(t, e, i, w);
  }
  function H(t, e) {
    return z(
      t,
      (i) => i.nodeType === 3,
      (i) => {
        const l = "" + e;
        if (i.data.startsWith(l)) {
          if (i.data.length !== l.length) return i.splitText(l.length);
        } else i.data = l;
      },
      () => T(e),
      !0
    );
  }
  function q(t) {
    return H(t, " ");
  }
  function B(t, e) {
    (e = "" + e), t.wholeText !== e && (t.data = e);
  }
  function st(t) {
    const e = {};
    for (const i of t) e[i.name] = i.value;
    return e;
  }
  let O;
  function S(t) {
    O = t;
  }
  const E = [],
    W = [],
    I = [],
    F = [],
    ut = Promise.resolve();
  let G = !1;
  function ft() {
    G || ((G = !0), ut.then(y));
  }
  function P(t) {
    I.push(t);
  }
  const R = new Set();
  let A = 0;
  function y() {
    if (A !== 0) return;
    const t = O;
    do {
      try {
        for (; A < E.length; ) {
          const e = E[A];
          A++, S(e), dt(e.$$);
        }
      } catch (e) {
        throw ((E.length = 0), (A = 0), e);
      }
      for (S(null), E.length = 0, A = 0; W.length; ) W.pop()();
      for (let e = 0; e < I.length; e += 1) {
        const i = I[e];
        R.has(i) || (R.add(i), i());
      }
      I.length = 0;
    } while (E.length);
    for (; F.length; ) F.pop()();
    (G = !1), R.clear(), S(t);
  }
  function dt(t) {
    if (t.fragment !== null) {
      t.update(), N(t.before_update);
      const e = t.dirty;
      (t.dirty = [-1]),
        t.fragment && t.fragment.p(t.ctx, e),
        t.after_update.forEach(P);
    }
  }
  const ht = new Set();
  function _t(t, e) {
    t && t.i && (ht.delete(t), t.i(e));
  }
  function mt(t, e, i, l) {
    const { fragment: c, after_update: s } = t.$$;
    c && c.m(e, i),
      l ||
        P(() => {
          const r = t.$$.on_mount.map(x).filter(D);
          t.$$.on_destroy ? t.$$.on_destroy.push(...r) : N(r),
            (t.$$.on_mount = []);
        }),
      s.forEach(P);
  }
  function gt(t, e) {
    const i = t.$$;
    i.fragment !== null &&
      (N(i.on_destroy),
      i.fragment && i.fragment.d(e),
      (i.on_destroy = i.fragment = null),
      (i.ctx = []));
  }
  function pt(t, e) {
    t.$$.dirty[0] === -1 && (E.push(t), ft(), t.$$.dirty.fill(0)),
      (t.$$.dirty[(e / 31) | 0] |= 1 << e % 31);
  }
  function bt(t, e, i, l, c, s, r, o = [-1]) {
    const a = O;
    S(t);
    const n = (t.$$ = {
      fragment: null,
      ctx: [],
      props: s,
      update: p,
      not_equal: c,
      bound: X(),
      on_mount: [],
      on_destroy: [],
      on_disconnect: [],
      before_update: [],
      after_update: [],
      context: new Map(e.context || (a ? a.$$.context : [])),
      callbacks: X(),
      dirty: o,
      skip_bound: !1,
      root: e.target || a.$$.root,
    });
    r && r(n.root);
    let f = !1;
    if (
      ((n.ctx = i
        ? i(t, e.props || {}, (d, v, ...u) => {
            const h = u.length ? u[0] : v;
            return (
              n.ctx &&
                c(n.ctx[d], (n.ctx[d] = h)) &&
                (!n.skip_bound && n.bound[d] && n.bound[d](h), f && pt(t, d)),
              v
            );
          })
        : []),
      n.update(),
      (f = !0),
      N(n.before_update),
      (n.fragment = l ? l(n.ctx) : !1),
      e.target)
    ) {
      if (e.hydrate) {
        nt();
        const d = k(e.target);
        n.fragment && n.fragment.l(d), d.forEach(b);
      } else n.fragment && n.fragment.c();
      e.intro && _t(t.$$.fragment),
        mt(t, e.target, e.anchor, e.customElement),
        rt(),
        y();
    }
    S(a);
  }
  let J;
  typeof HTMLElement == "function" &&
    (J = class extends HTMLElement {
      constructor() {
        super(), this.attachShadow({ mode: "open" });
      }
      connectedCallback() {
        const { on_mount: t } = this.$$;
        this.$$.on_disconnect = t.map(x).filter(D);
        for (const e in this.$$.slotted) this.appendChild(this.$$.slotted[e]);
      }
      attributeChangedCallback(t, e, i) {
        this[t] = i;
      }
      disconnectedCallback() {
        N(this.$$.on_disconnect);
      }
      $destroy() {
        gt(this, 1), (this.$destroy = p);
      }
      $on(t, e) {
        if (!D(e)) return p;
        const i = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
        return (
          i.push(e),
          () => {
            const l = i.indexOf(e);
            l !== -1 && i.splice(l, 1);
          }
        );
      }
      $set(t) {
        this.$$set &&
          !it(t) &&
          ((this.$$.skip_bound = !0), this.$$set(t), (this.$$.skip_bound = !1));
      }
    });
  function K(t) {
    let e, i;
    return {
      c() {
        (e = w("a")), (i = T(t[4])), this.h();
      },
      l(l) {
        e = $(l, "A", { class: !0, href: !0 });
        var c = k(e);
        (i = H(c, t[4])), c.forEach(b), this.h();
      },
      h() {
        _(e, "class", "topic-card__link"), _(e, "href", t[5]);
      },
      m(l, c) {
        L(l, e, c), m(e, i);
      },
      p(l, c) {
        c & 16 && B(i, l[4]), c & 32 && _(e, "href", l[5]);
      },
      d(l) {
        l && b(e);
      },
    };
  }
  function yt(t) {
    let e,
      i,
      l,
      c,
      s,
      r,
      o,
      a,
      n,
      f,
      d,
      v,
      u = t[4] != null && K(t);
    return {
      c() {
        (e = w("div")),
          (i = w("div")),
          (l = w("img")),
          (s = V()),
          (r = w("div")),
          (o = w("h3")),
          (a = T(t[2])),
          (n = V()),
          (f = w("p")),
          (d = T(t[3])),
          (v = V()),
          u && u.c(),
          (this.c = p),
          this.h();
      },
      l(h) {
        e = $(h, "DIV", { class: !0 });
        var g = k(e);
        i = $(g, "DIV", { class: !0 });
        var Z = k(i);
        (l = $(Z, "IMG", { class: !0, src: !0, alt: !0 })),
          Z.forEach(b),
          (s = q(g)),
          (r = $(g, "DIV", { class: !0 }));
        var C = k(r);
        o = $(C, "H3", { class: !0 });
        var U = k(o);
        (a = H(U, t[2])),
          U.forEach(b),
          (n = q(C)),
          (f = $(C, "P", { class: !0 }));
        var tt = k(f);
        (d = H(tt, t[3])),
          tt.forEach(b),
          (v = q(C)),
          u && u.l(C),
          C.forEach(b),
          g.forEach(b),
          this.h();
      },
      h() {
        _(l, "class", "topic-card__img"),
          Y(l.src, (c = t[0])) || _(l, "src", c),
          _(l, "alt", t[1]),
          _(i, "class", "topic-card__img-window"),
          _(o, "class", "topic-card__title"),
          _(f, "class", "topic-card__desc"),
          _(r, "class", "topic-card__txt-container"),
          _(e, "class", "topic-card");
      },
      m(h, g) {
        L(h, e, g),
          m(e, i),
          m(i, l),
          m(e, s),
          m(e, r),
          m(r, o),
          m(o, a),
          m(r, n),
          m(r, f),
          m(f, d),
          m(r, v),
          u && u.m(r, null);
      },
      p(h, [g]) {
        g & 1 && !Y(l.src, (c = h[0])) && _(l, "src", c),
          g & 2 && _(l, "alt", h[1]),
          g & 4 && B(a, h[2]),
          g & 8 && B(d, h[3]),
          h[4] != null
            ? u
              ? u.p(h, g)
              : ((u = K(h)), u.c(), u.m(r, null))
            : u && (u.d(1), (u = null));
      },
      i: p,
      o: p,
      d(h) {
        h && b(e), u && u.d();
      },
    };
  }
  function wt(t, e, i) {
    let { imgurl: l } = e,
      { imgalt: c } = e,
      { title: s } = e,
      { desc: r } = e,
      { cta: o = void 0 } = e,
      { ctaurl: a = void 0 } = e;
    return (
      (t.$$set = (n) => {
        "imgurl" in n && i(0, (l = n.imgurl)),
          "imgalt" in n && i(1, (c = n.imgalt)),
          "title" in n && i(2, (s = n.title)),
          "desc" in n && i(3, (r = n.desc)),
          "cta" in n && i(4, (o = n.cta)),
          "ctaurl" in n && i(5, (a = n.ctaurl));
      }),
      [l, c, s, r, o, a]
    );
  }
  class Q extends J {
    constructor(e) {
      super(),
        (this.shadowRoot.innerHTML = `<style>.topic-card{width:100%;overflow:hidden;border-radius:1rem;border-width:1px;border-style:solid;--tw-border-opacity:1;border-color:rgb(var(--color-grey-300) / var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgb(var(--color-grey-0) / var(--tw-bg-opacity))
}.topic-card__img-window{position:relative;height:136px;width:100%;overflow:hidden
}@media(min-width: 1367px){.topic-card__img-window{height:176px
}}.topic-card__img{position:absolute;top:50%;left:-50%;height:auto;width:100%;--tw-translate-y:-50%;--tw-translate-x:50%;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
}.topic-card__txt-container{padding:24px
}@media(min-width: 1367px){.topic-card__txt-container{padding-top:32px
}}.topic-card__title{margin-bottom:8px;font-family:Gilroy, Helvetica, Arial, sans-serif;font-weight:700;--tw-text-opacity:1;color:rgb(var(--color-primary) / var(--tw-text-opacity))
}.topic-card__desc{font-size:0.875rem;line-height:1.25rem;letter-spacing:0rem;--tw-text-opacity:1;color:rgb(var(--color-grey-600) / var(--tw-text-opacity))
}.topic-card__link{margin-top:24px;margin-bottom:24px;--tw-text-opacity:1;color:rgb(var(--color-primary) / var(--tw-text-opacity))
}</style>`),
        bt(
          this,
          {
            target: this.shadowRoot,
            props: st(this.attributes),
            customElement: !0,
          },
          wt,
          yt,
          et,
          { imgurl: 0, imgalt: 1, title: 2, desc: 3, cta: 4, ctaurl: 5 },
          null
        ),
        e &&
          (e.target && L(e.target, this, e.anchor),
          e.props && (this.$set(e.props), y()));
    }
    static get observedAttributes() {
      return ["imgurl", "imgalt", "title", "desc", "cta", "ctaurl"];
    }
    get imgurl() {
      return this.$$.ctx[0];
    }
    set imgurl(e) {
      this.$$set({ imgurl: e }), y();
    }
    get imgalt() {
      return this.$$.ctx[1];
    }
    set imgalt(e) {
      this.$$set({ imgalt: e }), y();
    }
    get title() {
      return this.$$.ctx[2];
    }
    set title(e) {
      this.$$set({ title: e }), y();
    }
    get desc() {
      return this.$$.ctx[3];
    }
    set desc(e) {
      this.$$set({ desc: e }), y();
    }
    get cta() {
      return this.$$.ctx[4];
    }
    set cta(e) {
      this.$$set({ cta: e }), y();
    }
    get ctaurl() {
      return this.$$.ctx[5];
    }
    set ctaurl(e) {
      this.$$set({ ctaurl: e }), y();
    }
  }
  return customElements.define("topic-card", Q), Q;
});

("use strict");
var airtrfxCustomPWFunctionalities;
(function (n) {
  var t = "data-add-functionalities",
    r = "data-filters-id",
    e = "data-paginator-id",
    u = "data-filter-by",
    i = "data-items-per-page",
    o = "data-current-page",
    a = "data-pagination-type",
    c = "single",
    f = "multiple",
    l = 12,
    s = f,
    d = 1,
    v = "off-page",
    p = "filtered",
    m = "hidden",
    g = "null",
    y = function (n, t) {
      return Array.prototype.slice.call(n.querySelectorAll(t));
    },
    h = function (n) {
      return document.getElementById(n);
    },
    b = function () {
      return y(document, "[" + t + "]");
    },
    w = function (n) {
      return Array.prototype.slice.call(n.children);
    },
    A = function (n, t) {
      return n.getAttribute(t);
    },
    F = function (n) {
      return A(n, r);
    },
    I = function (n) {
      return A(n, u);
    },
    L = function (n) {
      return A(n, e);
    },
    x = function (n) {
      return A(n, i);
    },
    S = function (n) {
      return A(n, o);
    },
    B = function (n) {
      return A(n, a);
    },
    C = function (n, t, r) {
      return n.setAttribute(t, r);
    },
    E = function (n, t) {
      return C(n, o, t.toString()), n;
    },
    N = function (n, t) {
      return n.classList.add(t);
    },
    P = function (n, t) {
      return n.classList.remove(t);
    },
    W = function (n) {
      return P(n, m);
    },
    k = function (n) {
      return N(n, m);
    },
    q = function (n) {
      return P(n, v);
    },
    D = function (n) {
      return N(n, v);
    },
    J = function (n) {
      return N(n, p);
    },
    M = function (n) {
      return P(n, p);
    },
    O = function (n, t) {
      return n && !isNaN(parseInt(n)) ? parseInt(n) : t;
    },
    j = function (n) {
      var t = x(n);
      return O(t, l);
    },
    z = function (n) {
      var t = S(n);
      return O(t, d);
    },
    G = function (n) {
      return c === n || f == n;
    },
    H = function (n) {
      var t = B(n);
      return t && G(t) ? t : s;
    },
    K = function (n, t) {
      return Math.ceil(n / t);
    },
    Q = function (n, t, r) {
      return n <= r && n >= t;
    },
    R = function (n, t) {
      return function (r, e) {
        return Q(e, n, t) ? q(r) : D(r), r;
      };
    },
    T = function (n, t, r) {
      return n === c ? t * (r - 1) : 0;
    },
    U = function (n, t) {
      var r = j(t),
        e = z(t),
        u = K(n.length, r);
      return u !== e ? W(t) : k(t), t;
    },
    V = function (n, t) {
      var r = H(t),
        e = j(t),
        u = z(t),
        i = T(r, e, u),
        o = e * u - 1;
      return n.map(R(i, o)), t;
    },
    X = function (n, t, r) {
      return U(t, V(t, E(n, r)));
    },
    Y = function (n, t) {
      return X(n, t, z(n) + 1);
    },
    Z = function (n) {
      return function (t) {
        var r = t.value,
          e = t.filterBy;
        if ("null" === r) return !0;
        var u = A(n, e);
        return (
          u ||
            console.warn(
              "fare item doesn't containts attribute " +
                e +
                " or it's value is null",
              n
            ),
          r === u
        );
      };
    },
    $ = function (n, t) {
      return n && t;
    },
    _ = function (n) {
      return function (t) {
        var r = n.map(Z(t)).reduce($);
        return q(t), r ? M(t) : J(t), r;
      };
    },
    nn = function (n, t) {
      return t.filter(_(n));
    },
    tn = function (n) {
      var t = I(n),
        r = n.value;
      return {
        value: r || g,
        filterBy: t || "",
      };
    },
    rn = function (n) {
      if (null === n) return !1;
      var t = null !== I(n);
      return (
        t ||
          console.warn(
            "Filter found does not have " +
              u +
              " attribute. Ignoring this filter",
            n
          ),
        t
      );
    },
    en = function (n) {
      return function (t) {
        return t.addEventListener("change", n);
      };
    },
    un = function (n, t, r) {
      return function (e) {
        return function () {
          var u = w(n),
            i = t ? t.map(tn) : null,
            o = t && i ? nn(i, u) : u,
            a = r ? ("number" == typeof e ? X(r, o, e) : Y(r, o)) : o;
          return a;
        };
      };
    },
    on = function (n) {
      var t = null,
        r = null,
        e = F(n);
      if (e) {
        var u = JSON.parse(e);
        (t = u.map(h).filter(rn)),
          u.length > t.length &&
            console.warn(
              "Some filters were not found by their IDs:",
              u,
              "Filters found",
              t
            );
      }
      var i = L(n);
      if (i && ((r = h(i)), !r))
        return console.error(
          "Looked for element with id " + i + " but none found"
        );
      var o = un(n, t, r);
      t && t.map(en(o(1))), r && r.addEventListener("click", o("next"));
    },
    an = function () {
      b().map(on);
    };
  an();
})(airtrfxCustomPWFunctionalities || (airtrfxCustomPWFunctionalities = {}));
