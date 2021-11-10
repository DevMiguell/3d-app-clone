import React, { forwardRef } from "react"

const Overlay = forwardRef(({ caption, scroll }, ref) => (
  <div
    ref={ref}
    onScroll={(e) => {
      scroll.current = e.target.scrollTop / (e.target.scrollHeight - window.innerHeight)
      caption.current.innerText = scroll.current.toFixed(2)
    }}
    class="scroll">
    <div style={{ height: "400vh" }}>
      <div class="dot">
        <h1>headset</h1>
        fdsfdsfdsfsdfsdfsdfsdfsd
      </div>
    </div>
    <div style={{ height: "200vh" }}>
      <div class="dot">
        <h1>headphone</h1>
        dsadsadsadsadsadsadsadasdsadasdsa
      </div>
    </div>
    <div style={{ height: "200vh" }}>
      <div class="dot">
        <h1>rocket</h1>
        dsadsadsadaddsadsadsadsadsa
      </div>
    </div>
    <div style={{ height: "200vh" }}>
      <div class="dot">
        <h1>turbine</h1>
        dsadsadsadsadsadsadsadasdsadasdsads
      </div>
    </div>
    <div style={{ height: "200vh" }}>
      <div class="dot">
        <h1>table</h1>
        dasdsadsadasdasdsadsadsadsadsadas
      </div>
    </div>
    <div style={{ height: "200vh" }}>
      <div class="dot">
        <h1>laptop</h1>
        dsadsadsaasadsasadasdsadasdasdas
      </div>
    </div>
    <div style={{ height: "200vh" }}>
      <div class="dot">
        <h1>zeppelin</h1>
        sadsadsadsadsadfsfdsfdsfdsfsdfdsfdsf
      </div>
    </div>
    <span class="caption" ref={caption}>
      0.00
    </span>
  </div>
))

export default Overlay
