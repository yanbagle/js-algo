import { Finder } from "./index";

export function runCode() {
 const finder = new Finder();
 finder
   .find(1)
   .color("lightskyblue")
   .delayColor(2000)
   .find(3)
   .color("lightseagreen")
   .afterDelay(f => f.find(5).color("lightcyan"));
 // should turn B blue immediately, then wait 2 seconds,
 // and then turn D green and F cyan
}

// Implement Finder here
export class Finder {

  constructor() {
    this.div = null;
  }

  find = (index) => {
    const divs = document.querySelectorAll("[data-type='target']");
    this.div = divs[index];
    return this;
  }

  color = (color) => {
    this.div.style.backgroundColor = color;
    return this;
  }

  downShift = () => {
    this.div.style.position = 'relative';
    this.div.style.top = '12px';
    return this;
  }

  onClick = (cb) => {
    this.div.addEventListener('click', cb.bind(null, this.div));
    return this;
  }
}

// NOTE: Please use `querySelectorAll`
// to get the data-type="target" divs

import { Finder } from "./index";

export function runCode() {
  const finder = new Finder();
  finder.find(1).color("lightblue").downShift().find(3).color("lightgreen");
  // Should turn the B and D divs’ backgrounds
  // light blue and light green respectively
  // and shift the B div down by 12px without
  // impacting the layout of other divs
}