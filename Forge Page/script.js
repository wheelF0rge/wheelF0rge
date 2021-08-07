
// Variables of elements and inputs to manipulate
const dmContainer = document.querySelector('#dmContainer');
const nameMotor = document.querySelector('#nameMotor');
const chasisBtn = document.querySelector('#chasis-btn');
const chasisModal = document.querySelector('#chasis-modal');
const chasisType = document.querySelector('#chasisType');
const colorChasis = document.querySelector('#color-chasis');
const modalPop = document.querySelector('.modalPop');
const inputName = document.querySelector('#inputName');
const motorsName = document.querySelector('.motorsName');
const behindImg = document.querySelector('.defMotor');
const tyresBtn =document.querySelector('#tyres-btn');
const tyresModal = document.querySelector('#tyres-modal');
const tyresType = document.querySelector('#tyres-type');
const handleBtn = document.querySelector('#handle-btn');
const handleModal = document.querySelector('#handle-modal');
const handleType = document.querySelector('#handle-type');
const headBtn = document.querySelector('#head-btn');
const headModal = document.querySelector('#head-modal');
const headType = document.querySelector('#head-type');
const mufflerBtn = document.querySelector('#muffler-btn');
const mufflerModal = document.querySelector('#muffler-modal');
const mufflerType = document.querySelector('#muffler-type');
const brakeBtn = document.querySelector('#brake-btn');
const brakeModal = document.querySelector('#brake-modal');
const brakeType = document.querySelector('#brake-type');
const frontFlash = document.querySelector('.flash-chasis-f');
const rearFlash = document.querySelector('.flash-chasis-r');
const flashSelect = document.querySelector('#flashSelect');
const doneChasis  = document.querySelector('#doneChasis');
const motorsName2 = document.querySelector('#motors-name');
const motorsName3 = document.querySelector('#motors-name1');
const colorHead =document.querySelector('#color-head');
const colorMuffler = document.querySelector('#color-muffler')

// Heading slider
let mySlide = 0;
const slideShow = document.getElementsByClassName("slide-show");
slideFeatures();
function slideFeatures(){
  for(i = 0;i < slideShow.length;i++){
    slideShow[i].style.display = "none";
  }
    mySlide++;
    if(mySlide > slideShow.length) {mySlide=1}
    slideShow[mySlide-1].style.display = "block";
    stp=setTimeout(slideFeatures, 4300);
}

let stopSlide = () => {
  clearInterval(stp);
}
let restartSlide = () =>{
  stp=setTimeout(slideFeatures, 4300);
}

let restartOpt = () => {
  nameMotor.hidden = true;
  chasisType.hidden = true;
  chasisModal.hidden = true;
  tyresType.hidden = true;
  tyresModal.hidden = true;
  handleModal.hidden = true;
  handleType.hidden = true;
  headModal.hidden = true;
  headType.hidden = true;
  mufflerModal.hidden = true;
  mufflerType.hidden = true;
  brakeModal.hidden = true;
  brakeType.hidden = true;
  colorChasis.hidden = true;
  colorTyres.hidden = true;
  colorHandle.hidden = true;
  colorHead.hidden = true;
  colorMuffler.hidden = true;
  colorBrake.hidden = true;
}

// Flow Nav Control

let startUp = () => {
  restartOpt();
  dmContainer.hidden = false;
  dmContainer.style.animationPlayState = "running";
  nameMotor.hidden = false;
  checkModal.classList.remove('showing');
  setTimeout(()=>checkModal.classList.add('hiding'), 20);
}
let motorAnimation =() => {
  dmContainer.style.animation='none';
  setTimeout(function(){
  dmContainer.style.animation='';}, 10);
}
let chasisPress = () => {
  restartOpt();
  motorAnimation();
  chasisModal.hidden = false;
  chasisType.hidden = false;
  colorChasis.hidden = false;
  motorsName.textContent = ` for ${inputName.value}`;
  checkModal.classList.remove('showing');
  setTimeout(()=>checkModal.classList.add('hiding'), 20);
}
let tyresPress = () => {
  restartOpt();
  motorAnimation();
  tyresModal.hidden = false;
  tyresType.hidden = false;
  colorTyres.hidden = false;
  motorsName.textContent = ` for ${inputName.value}`;
  checkModal.classList.remove('showing');
  setTimeout(()=>checkModal.classList.add('hiding'), 20);
}
let handlePress = () => {
  restartOpt();
  motorAnimation();
  handleModal.hidden = false;
  handleType.hidden = false;
  colorHandle.hidden = false;
  motorsName.textContent = ` for ${inputName.value}`;
  checkModal.classList.remove('showing');
  setTimeout(()=>checkModal.classList.add('hiding'), 20);
}
let headPress = () => {
  restartOpt();
  motorAnimation();
  headModal.hidden = false;
  headType.hidden = false;
  colorHead.hidden = false;
  motorsName.textContent = ` for ${inputName.value}`;
  checkModal.classList.remove('showing');
  setTimeout(()=>checkModal.classList.add('hiding'), 20);
}
let mufflerPress = () => {
  restartOpt();
  motorAnimation();
  mufflerModal.hidden = false;
  mufflerType.hidden = false;
  colorMuffler.hidden = false;
  motorsName.textContent = ` for ${inputName.value}`;
  checkModal.classList.remove('showing');
  setTimeout(()=>checkModal.classList.add('hiding'), 20);
}
let brakePress = () => {
  restartOpt();
  motorAnimation();
  brakeModal.hidden = false;
  brakeType.hidden = false;
  colorBrake.hidden = false;
  motorsName.textContent = ` for ${inputName.value}`;
  checkModal.classList.remove('showing');
  setTimeout(()=>checkModal.classList.add('hiding'), 20);
}
// Naming of Motorcycle 
const frontTranscend = document.querySelector(".transcend-chasis-f");
const rearTranscend = document.querySelector(".transcend-chasis-r");
let forgeGreet = document.querySelector("#forge-greet");
const forgedName = document.querySelector('.forged-name');
let named = () => {
  restartOpt();
  motorAnimation();
  chasisModal.hidden = false;
  chasisType.hidden = false;
  colorChasis.hidden = false;
  motorsName.textContent = ` your ${inputName.value}`;
  motorsName2.textContent = `Wow!!! Your ${inputName.value} `;
  forgedName.textContent = ` ${inputName.value}`;
  chasisBtn.disabled = false;
  frontTranscend.style.display = "none";
  rearTranscend.style.display = "none";
  forgeGreet.hidden=false;
}

// Chasis Reinforement
const selectedType = document.querySelector(".selected-type");
const cyanFlash = document.querySelector('#cyanFlash');
const ravenFlash = document.querySelector('#ravenFlash');
const crimsonFlash = document.querySelector('#crimsonFlash');
const tranquilFlash = document.querySelector('#tranquilFlash');
const partsLeft = document.querySelector(".parts-on-left");
const partsRight = document.querySelector(".parts-on-right");
const frontCreed = document.querySelector(".creed-chasis-f");
const rearCreed = document.querySelector(".creed-chasis-r");
const frontXforce = document.querySelector(".xforce-chasis-f");
const rearXforce = document.querySelector(".xforce-chasis-r");
const cyanXforce = document.querySelector("#cyanXforce");
const ravenXforce = document.querySelector("#ravenXforce");
const crimsonXforce = document.querySelector("#crimsonXforce");
const tranquilXforce = document.querySelector("#tranquilXforce");
const cyanTranscend = document.querySelector("#cyanTranscend");
const ravenTranscend = document.querySelector("#ravenTranscend");
const crimsonTranscend = document.querySelector("#crimsonTranscend");
const tranquilTranscend = document.querySelector("#tranquilTranscend");
const cyanCreed = document.querySelector("#cyanCreed");
const ravenCreed = document.querySelector("#ravenCreed");
const crimsonCreed = document.querySelector("#crimsonCreed");
const tranquilCreed = document.querySelector("#tranquilCreed");
const colorTyres = document.querySelector('#color-tyres');
const focusHead = document.querySelector('.focus-head');
const focusLight = document.querySelector('.focus-light');
const broadHead = document.querySelector('.broad-head');
const broadLight = document.querySelector('.broad-light');
const dualHead = document.querySelector('.dual-head');
const forgedChasisT = document.querySelector('.forged-chasisT');
const forgedChasisC = document.querySelector('.forged-chasisC');

let removeAllChasis=()=>{
  cyanFlash.style.display = "none";
  ravenFlash.style.display = "none";
  crimsonFlash.style.display = "none";
  tranquilFlash.style.display = "none";
  frontFlash.style.display = "none";
  rearFlash.style.display= "none";
  cyanCreed.style.display = "none";
  ravenCreed.style.display = "none";
  crimsonCreed.style.display = "none";
  tranquilCreed.style.display = "none";
  frontCreed.style.display = "none";
  rearCreed.style.display = "none";
  frontXforce.style.display = "none";
  rearXforce.style.display = "none";
  cyanXforce.style.display = "none";
  ravenXforce.style.display = "none";
  crimsonXforce.style.display ="none";
  tranquilXforce.style.display ="none";
  frontTranscend.style.display = "none";
  rearTranscend.style.display = "none";
  cyanTranscend.style.display = "none";
  ravenTranscend.style.display = "none";
  crimsonTranscend.style.display = "none";
  tranquilTranscend.style.display = "none";
}
let openFC = () => {
  cyanFlash.style.display = "block";
  ravenFlash.style.display = "block";
  crimsonFlash.style.display = "block";
  tranquilFlash.style.display = "block";
  frontFlash.style.cssText = "transform: scale(1.05); display: block;"
  rearFlash.style.cssText = "transform: scale(1.05); display: block;"
  cyanCreed.style.display = "none";
  ravenCreed.style.display = "none";
  crimsonCreed.style.display = "none";
  tranquilCreed.style.display = "none";
  frontCreed.style.display = "none";
  rearCreed.style.display = "none";
  frontXforce.style.display = "none";
  rearXforce.style.display = "none";
  cyanXforce.style.display = "none";
  ravenXforce.style.display = "none";
  crimsonXforce.style.display ="none";
  tranquilXforce.style.display ="none";
  frontTranscend.style.display = "none";
  rearTranscend.style.display = "none";
  cyanTranscend.style.display = "none";
  ravenTranscend.style.display = "none";
  crimsonTranscend.style.display = "none";
  tranquilTranscend.style.display = "none";
  doneChasis.disabled = false;
   doneChasis.style.cssText ="transform: scale(1.3);"
  selectedType.textContent = "of Flash?";
}
let openCC = () => {
  frontCreed.style.cssText = "transform: scale(1.05); display: block;"
  rearCreed.style.cssText = "transform: scale(1.05); display: block;"
  cyanCreed.style.display = "block";
  ravenCreed.style.display = "block";
  crimsonCreed.style.display = "block";
  tranquilCreed.style.display = "block";
  cyanFlash.style.display = "none";
  ravenFlash.style.display = "none";
  crimsonFlash.style.display = "none";
  tranquilFlash.style.display = "none";
  frontFlash.style.display = "none";
  rearFlash.style.display = "none";
  frontXforce.style.display = "none";
  rearXforce.style.display = "none";
  cyanXforce.style.display = "none";
  ravenXforce.style.display = "none";
  crimsonXforce.style.display ="none";
  tranquilXforce.style.display ="none";
  frontTranscend.style.display = "none";
  rearTranscend.style.display = "none";
  cyanTranscend.style.display = "none";
  ravenTranscend.style.display = "none";
  crimsonTranscend.style.display = "none";
  tranquilTranscend.style.display = "none";
  doneChasis.disabled = false;
   doneChasis.style.cssText ="transform: scale(1.3);"
  selectedType.textContent = "of Creed?";
}
let openXC = () => {
  frontXforce.style.cssText = "transform: scale(1.05); display: block;"
  rearXforce.style.cssText = "transform: scale(1.05); display: block;"
  cyanXforce.style.display = "block";
  ravenXforce.style.display = "block";
  crimsonXforce.style.display ="block";
  tranquilXforce.style.display ="block";
  frontCreed.style.display = "none";
  rearCreed.style.display = "none";
  cyanCreed.style.display = "none";
  ravenCreed.style.display = "none";
  crimsonCreed.style.display = "none";
  tranquilCreed.style.display = "none";
  cyanFlash.style.display = "none";
  ravenFlash.style.display = "none";
  crimsonFlash.style.display = "none";
  tranquilFlash.style.display = "none";
  frontFlash.style.display = "none";
  rearFlash.style.display = "none";
  frontTranscend.style.display = "none";
  rearTranscend.style.display = "none";
  cyanTranscend.style.display = "none";
  ravenTranscend.style.display = "none";
  crimsonTranscend.style.display = "none";
  tranquilTranscend.style.display = "none";
  doneChasis.disabled = false;
   doneChasis.style.cssText ="transform: scale(1.3);"
  selectedType.textContent = "of X-force?";
}
let openTC = () => {
  frontTranscend.style.cssText = "transform: scale(1.05); display: block;"
  rearTranscend.style.cssText = "transform: scale(1.05); display: block;"
  cyanTranscend.style.display = "block";
  ravenTranscend.style.display = "block";
  crimsonTranscend.style.display = "block";
  tranquilTranscend.style.display ="block";
  frontXforce.style.display = "none";
  rearXforce.style.display = "none";
  cyanXforce.style.display = "none";
  ravenXforce.style.display = "none";
  crimsonXforce.style.display ="none";
  tranquilXforce.style.display ="none";
  frontCreed.style.display = "none";
  rearCreed.style.display = "none";
  cyanCreed.style.display = "none";
  ravenCreed.style.display = "none";
  crimsonCreed.style.display = "none";
  tranquilCreed.style.display = "none";
  cyanFlash.style.display = "none";
  ravenFlash.style.display = "none";
  crimsonFlash.style.display = "none";
  tranquilFlash.style.display = "none";
  frontFlash.style.display = "none";
  rearFlash.style.display = "none";
  doneChasis.disabled = false;
   doneChasis.style.cssText ="transform: scale(1.3);"
  selectedType.textContent = "of X-force?";
}
let animateFC = () => {
  frontFlash.style.animation='none';
  setTimeout(function(){
  frontFlash.style.animation='';}, 10);
  rearFlash.style.animation='none';
  setTimeout(function(){
  rearFlash.style.animation='';}, 10);
}
let animateCC = () => {
  frontCreed.style.animation='none';
  setTimeout(function(){
  frontCreed.style.animation='';}, 10);
  rearCreed.style.animation='none';
  setTimeout(function(){
  rearCreed.style.animation='';}, 10);
}
let animateXC = () => {
  frontXforce.style.animation='none';
  setTimeout(function(){
  frontXforce.style.animation='';}, 10);
  rearXforce.style.animation='none';
  setTimeout(function(){
  rearXforce.style.animation='';}, 10);
}
let animateTC = () => {
  frontTranscend.style.animation='none';
  setTimeout(function(){
  frontTranscend.style.animation='';}, 10);
  rearTranscend.style.animation='none';
  setTimeout(function(){
  rearTranscend.style.animation='';}, 10);
}


let reinforce1 = () => {
  openFC();
  animateFC();
  frontFlash.setAttribute('data', 'parts/flashFrontDefault1.svg');
  rearFlash.setAttribute('data', 'parts/flashRear.svg');
  focusHead.classList.remove('head-MC2');
  setTimeout(()=>{
      focusHead.classList.add('head-MC');
  }, 10);
  broadHead.classList.remove('head-M3');
  setTimeout(()=>{
     broadHead.classList.add('head-MC');
  }, 10);
  dualHead.classList.remove('head-MC2');
  setTimeout(()=>{
     dualHead.classList.add('head-MC');
  }, 10);
  forgedChasisT.textContent = 'Flash';
}


let reinforce2 = () => {
  openCC();
 animateCC();
 frontCreed.setAttribute('data', 'parts/creedFront.svg');
  rearCreed.setAttribute('data', 'parts/creedRear.svg');
  focusHead.classList.remove('head-MC2');
  setTimeout(()=>{
      focusHead.classList.add('head-MC');
  }, 10);
  broadHead.classList.remove('head-M3');
  setTimeout(()=>{
     broadHead.classList.add('head-MC');
  }, 10);
  dualHead.classList.remove('head-MC2');
  setTimeout(()=>{
     dualHead.classList.add('head-MC');
  }, 10);
  forgedChasisT.textContent = 'Creed';
}


let reinforce3 = () => {
  openXC();
 animateXC();
 frontXforce.setAttribute('data', 'parts/xforceFront.svg');
  rearXforce.setAttribute('data', 'parts/xforceRear.svg');
  focusHead.classList.remove('head-MC');
  setTimeout(()=>{
      focusHead.classList.add('head-MC2');
  }, 20); 
  broadHead.classList.remove('head-MC');
  setTimeout(()=>{
     broadHead.classList.add('head-MC3');
  }, 20);
  dualHead.classList.remove('head-MC');
  setTimeout(()=>{
     dualHead.classList.add('head-MC2');
  }, 20);
  forgedChasisT.textContent = 'X-Force';
}

let reinforce4 = () =>{
  openTC();
  animateTC();
  frontTranscend.setAttribute('data', 'parts/transcendFront.svg');
  rearTranscend.setAttribute('data', 'parts/transcendRear.svg');
  focusHead.classList.remove('head-MC');
  setTimeout(()=>{
      focusHead.classList.add('head-MC2');
  }, 10);
  broadHead.classList.remove('head-M3');
  setTimeout(()=>{
     broadHead.classList.add('head-MC');
  }, 10);
  dualHead.classList.remove('head-MC2');
  setTimeout(()=>{
     dualHead.classList.add('head-MC');
  }, 10);
  forgedChasisT.textContent = 'Transcend';
}

let chasisDone = () => {
  restartOpt();
  motorAnimation();
  tyresBtn.disabled = false;
  tyresModal.hidden = false;
  tyresType.hidden = false;
  colorTyres.hidden = false;
}
// Chasis Color Selection
let cyanFC = () =>{
  animateFC();
  frontFlash.setAttribute('data', 'parts/flashFrontCyan.svg');
  rearFlash.setAttribute('data', 'parts/flashRearCyan.svg');
  forgedChasisC.textContent = 'Cyan';
}
let ravenFC = () =>{
  animateFC();
  frontFlash.setAttribute('data', 'parts/flashFrontRaven.svg');
  rearFlash.setAttribute('data', 'parts/flashRearRaven.svg');
  forgedChasisC.textContent = 'Raven';
}
let crimsonFC = () =>{
  animateFC();
  frontFlash.setAttribute('data', 'parts/flashFrontCrimson.svg');
  rearFlash.setAttribute('data', 'parts/flashRearCrimson.svg');
  forgedChasisC.textContent = 'Crimson';
}

let tranquilFC = () =>{
  animateFC();
  frontFlash.setAttribute('data', 'parts/flashFrontTranquil.svg');
  rearFlash.setAttribute('data', 'parts/flashRearTranquil.svg');
  forgedChasisC.textContent = 'Tranquil';
}
// Creed Colors
let cyanCC = () =>{
  animateCC();
  frontCreed.setAttribute('data', 'parts/creedFrontCyan.svg');
  rearCreed.setAttribute('data', 'parts/creedRearCyan.svg');
  forgedChasisC.textContent = 'Cyan';
}
let ravenCC = () =>{
  animateCC();
  frontCreed.setAttribute('data', 'parts/creedFrontRaven.svg');
  rearCreed.setAttribute('data', 'parts/creedRearRaven.svg');
  forgedChasisC.textContent = 'Raven';
}
let crimsonCC = () =>{
  animateCC();
  frontCreed.setAttribute('data', 'parts/creedFrontCrimson.svg');
  rearCreed.setAttribute('data', 'parts/creedRearCrimson.svg');
  forgedChasisC.textContent = 'Crimson';
}
let tranquilCC = () =>{
  animateCC();
  frontCreed.setAttribute('data', 'parts/creedFrontTranquil.svg');
  rearCreed.setAttribute('data', 'parts/creedRearTranquil.svg');
  forgedChasisC.textContent = 'Tranquil';
}
// Xforce colors
let cyanXC = ()=>{
  animateXC();
  frontXforce.setAttribute('data', 'parts/cyxforceF.svg');
  rearXforce.setAttribute('data', 'parts/cyxforceR.svg');
  forgedChasisC.textContent = 'Cyan';
}
let ravenXC = ()=>{
  animateXC();
  frontXforce.setAttribute('data', 'parts/rxforceF.svg');
  rearXforce.setAttribute('data', 'parts/rxforceR.svg');
  forgedChasisC.textContent = 'Raven';
}
let crimsonXC = () => {
  animateXC();
  frontXforce.setAttribute('data', 'parts/crxforceF.svg');
  rearXforce.setAttribute('data', 'parts/crxforceR.svg');
  forgedChasisC.textContent = 'Crimson';
}
let tranquilXC = () =>{
  animateXC;
  frontXforce.setAttribute('data', 'parts/trxforceF.svg');
  rearXforce.setAttribute('data', 'parts/trxforceR.svg');
  forgedChasisC.textContent = 'Tranquil';
}
// Transcend Colors
let cyanTC = ()=>{
  animateTC();
  frontTranscend.setAttribute('data', 'parts/cytranscendF.svg');
  rearTranscend.setAttribute('data', 'parts/cytranscendR.svg');
  forgedChasisC.textContent = 'Cyan';
}
let ravenTC = ()=>{
  animateTC();
  frontTranscend.setAttribute('data', 'parts/rtranscendF.svg');
  rearTranscend.setAttribute('data', 'parts/rtranscendR.svg');
  forgedChasisC.textContent = 'Raven';
}
let crimsonTC = ()=>{
  animateTC();
  frontTranscend.setAttribute('data', 'parts/crtranscendF.svg');
  rearTranscend.setAttribute('data', 'parts/crtranscendR.svg');
  forgedChasisC.textContent = 'Crimson';
}
let tranquilTC = ()=>{
  animateTC();
  frontTranscend.setAttribute('data', 'parts/trtranscendF.svg');
  rearTranscend.setAttribute('data', 'parts/trtranscendR.svg');
  forgedChasisC.textContent = 'Tranquil';
}


// Tyres reinforcement
const spikeSel = document.querySelector('#spikedSelector');
let defaultTyreR = document.querySelector('#rearW');
let defaultTyreF = document.querySelector('#frontW');
const spikedWheelR = document.querySelector('.spiked-wheel-r');
const spikedWheelF = document.querySelector('.spiked-wheel-f');
const cruiserWheelR = document.querySelector('.cruiser-wheel-r');
const cruiserWheelF = document.querySelector('.cruiser-wheel-f');
const sportWheelR = document.querySelector('.sport-wheel-r');
const sportWheelF = document.querySelector('.sport-wheel-f');
const touringWheelR = document.querySelector('.touring-wheel-r');
const touringWheelF = document.querySelector('.touring-wheel-f');
const doneTyres = document.querySelectorAll('#done-tyres');
const spikedSelect = document.querySelector('#spikedSelect');
const colorHandle = document.querySelector('#color-handle');
const forgedTyresT = document.querySelector('.forged-tyresT');
const forgedTyresC = document.querySelector('.forged-tyresC');
let tyreSpiked = false;
let tyreCruiser = false;
let tyreSport = false;
let tyreTouring = false;

let resetTyres = () =>{
  spikedWheelR.style.display = "none";
  spikedWheelF.style.display = "none";
  defaultTyreF.style.display = "none";
  defaultTyreR.style.display = "none";
  cruiserWheelF.style.display = "none";
  cruiserWheelR.style.display = "none";
  sportWheelF.style.display = "none";
  sportWheelR.style.display = "none";
  touringWheelF.style.display = "none";
  touringWheelR.style.display = "none";
}

let removeTyreR = (tyreR) => {
  tyreR.classList.remove('tyre-list-l');
  setTimeout(function(){
    tyreR.classList.add('reverse-tyres');
  }, 10);
}
let removeTyreF = (tyreF) => {
  tyreF.classList.remove('tyre-list-r');
  setTimeout(function(){
    tyreF.classList.add('reverse-tyres2');
}, 15);}
let applyTyreR = (tyreR1) => {
  tyreR1.classList.remove('reverse-tyres');
  setTimeout(function(){
    tyreR1.classList.add('tyre-list-l');
  }, 10);
}
let applyTyreF = (tyreF1) => {
  tyreF1.classList.remove('reverse-tyres2');
  setTimeout(function(){
    tyreF1.classList.add('tyre-list-r')
  }, 15);
}
let removeAllTyre = () =>{
  removeTyreR(sportWheelR);
  removeTyreF(sportWheelF);
  removeTyreR(cruiserWheelR);
  removeTyreF(cruiserWheelF);
  removeTyreR(defaultTyreR);
  removeTyreF(defaultTyreF);
  removeTyreR(touringWheelR);
  removeTyreF(touringWheelF);
  removeTyreR(spikedWheelR);
  removeTyreF(spikedWheelF);
}

let reinTyres = () => {
  removeAllTyre();
  setTimeout(function(){
    applyTyreR(spikedWheelR);
    applyTyreF(spikedWheelF);
  }, 50);
  spikedWheelR.style.display = "block";
  spikedWheelF.style.display = "block";
  spikedWheelR.removeAttribute('data');
  setTimeout(()=>{
    spikedWheelR.setAttribute('data', 'parts/spikedWheel.svg');}, 15);
  spikedWheelF.removeAttribute('data');
  setTimeout(()=>{
    spikedWheelF.setAttribute('data', 'parts/spikedWheel.svg');}, 29);
  tyreSpiked = true;
  tyreCruiser = false;
  tyreSport = false;
  tyreTouring = false;
  forgedTyresT.textContent = 'Spiked Tyres';
}
let reinTyres1 = () => {
  removeAllTyre();
  setTimeout(function(){
  applyTyreR(cruiserWheelR);
  applyTyreF(cruiserWheelF);
  }, 50);
  cruiserWheelR.style.display = "block";
  cruiserWheelF.style.display = "block";
  cruiserWheelR.removeAttribute('data');
  setTimeout(()=>{
    cruiserWheelR.setAttribute('data', 'parts/cruiserWheel.svg');}, 15);
  cruiserWheelF.removeAttribute('data');
  setTimeout(()=>{
    cruiserWheelF.setAttribute('data', 'parts/cruiserWheel.svg');}, 15);
  tyreSpiked = false;
  tyreCruiser = true;
  tyreSport = false;
  tyreTouring = false;
  forgedTyresT.textContent = 'Cruiser Tyres';
}
let reinTyres2 = () => {
  removeAllTyre();
  setTimeout(function(){
  applyTyreR(sportWheelR);
  applyTyreF(sportWheelF);
  }, 50);
  sportWheelR.style.display = "block";
  sportWheelF.style.display = "block";
  sportWheelR.removeAttribute('data');
  setTimeout(()=>{
    sportWheelR.setAttribute('data', 'parts/sportWheel.svg');}, 15);
  sportWheelF.removeAttribute('data');
  setTimeout(()=>{
    sportWheelF.setAttribute('data', 'parts/sportWheel.svg');}, 15);
  tyreSpiked = false;
  tyreCruiser = false;
  tyreSport = true;
  tyreTouring = false;
  forgedTyresT.textContent = 'Sports Tyres';
}
let reinTyres3 = () => {
  removeAllTyre();
  setTimeout(function(){
  applyTyreR(touringWheelR);
  applyTyreF(touringWheelF);
  }, 50);
  touringWheelR.style.display = "block";
  touringWheelF.style.display = "block";
  touringWheelR.removeAttribute('data');
  setTimeout(()=>{
    touringWheelR.setAttribute('data', 'parts/touringWheel.svg');}, 15);
  touringWheelF.removeAttribute('data');
  setTimeout(()=>{
    touringWheelF.setAttribute('data', 'parts/touringWheel.svg');}, 15);
  tyreSpiked = false;
  tyreCruiser = false;
  tyreSport = false;
  tyreTouring = true;
  forgedTyresT.textContent = 'Touring Tyres';
}


let cyanTyres = () => {
  forgedTyresC.textContent = 'Cyan';
  if(tyreSpiked==true){
    reinTyres();
    spikedWheelR.removeAttribute('data');
    setTimeout(()=>{
      spikedWheelR.setAttribute('data', 'parts/cyspikedWheel.svg');}, 55);
    spikedWheelF.removeAttribute('data');
    setTimeout(()=>{
      spikedWheelF.setAttribute('data', 'parts/cyspikedWheel.svg');}, 65);
  }
  else if(tyreCruiser==true){
    reinTyres1();
    cruiserWheelR.removeAttribute('data');
    setTimeout(()=>{
      cruiserWheelR.setAttribute('data', 'parts/cycruiserWheel.svg');}, 55);
    cruiserWheelF.removeAttribute('data');
    setTimeout(()=>{
      cruiserWheelF.setAttribute('data', 'parts/cycruiserWheel.svg');}, 65);
  }
  else if(tyreSport==true){
    reinTyres2();
    sportWheelR.removeAttribute('data');
    setTimeout(()=>{
      sportWheelR.setAttribute('data', 'parts/cysportWheel.svg');}, 55);
    sportWheelF.removeAttribute('data');
    setTimeout(()=>{
      sportWheelF.setAttribute('data', 'parts/cysportWheel.svg');}, 65);
  }
  else if(tyreTouring==true){
    reinTyres3();
    touringWheelR.removeAttribute('data');
    setTimeout(()=>{
      touringWheelR.setAttribute('data', 'parts/cytouringWheel.svg');}, 55);
    touringWheelF.removeAttribute('data');
    setTimeout(()=>{
      touringWheelF.setAttribute('data', 'parts/cytouringWheel.svg');}, 65);
  }
}
let ravenTyres = () => {
  forgedTyresC.textContent = 'Raven';
  if(tyreSpiked==true){
    reinTyres();
    spikedWheelR.removeAttribute('data');
    setTimeout(()=>{
      spikedWheelR.setAttribute('data', 'parts/rspikedWheel.svg');}, 55);
    spikedWheelF.removeAttribute('data');
    setTimeout(()=>{
      spikedWheelF.setAttribute('data', 'parts/rspikedWheel.svg');}, 65);
  }
  else if(tyreCruiser==true){
    reinTyres1();
    cruiserWheelR.removeAttribute('data');
    setTimeout(()=>{
      cruiserWheelR.setAttribute('data', 'parts/rcruiserWheel.svg');}, 55);
    cruiserWheelF.removeAttribute('data');
    setTimeout(()=>{
      cruiserWheelF.setAttribute('data', 'parts/rcruiserWheel.svg');}, 65);
  }
  else if(tyreSport==true){
    reinTyres2();
    sportWheelR.removeAttribute('data');
    setTimeout(()=>{
      sportWheelR.setAttribute('data', 'parts/rsportWheel.svg');}, 55);
    sportWheelF.removeAttribute('data');
    setTimeout(()=>{
      sportWheelF.setAttribute('data', 'parts/rsportWheel.svg');}, 65);
  }
  else if(tyreTouring==true){
    reinTyres3();
    touringWheelR.removeAttribute('data');
    setTimeout(()=>{
      touringWheelR.setAttribute('data', 'parts/rtouringWheel.svg');}, 55);
    touringWheelF.removeAttribute('data');
    setTimeout(()=>{
      touringWheelF.setAttribute('data', 'parts/rtouringWheel.svg');}, 65);
  }
}
let crimsonTyres = () => {
  forgedTyresC.textContent = 'Crimson';
  if(tyreSpiked==true){
    reinTyres();
    spikedWheelR.removeAttribute('data');
    setTimeout(()=>{
      spikedWheelR.setAttribute('data', 'parts/crspikedWheel.svg');}, 50);
    spikedWheelF.removeAttribute('data');
    setTimeout(()=>{
      spikedWheelF.setAttribute('data', 'parts/crspikedWheel.svg');}, 65);
  }
  else if(tyreCruiser==true){
    reinTyres1();
    cruiserWheelR.removeAttribute('data');
    setTimeout(()=>{
      cruiserWheelR.setAttribute('data', 'parts/crcruiserWheel.svg');}, 55);
    cruiserWheelF.removeAttribute('data');
    setTimeout(()=>{
    cruiserWheelF.setAttribute('data', 'parts/crcruiserWheel.svg');}, 65);
  }
  else if(tyreSport==true){
    reinTyres2();
    sportWheelR.removeAttribute('data');
    setTimeout(()=>{
      sportWheelR.setAttribute('data', 'parts/crsportWheel.svg');}, 55);
    sportWheelF.removeAttribute('data');
    setTimeout(()=>{
      sportWheelF.setAttribute('data', 'parts/crsportWheel.svg');}, 65);
  }
  else if(tyreTouring==true){
    reinTyres3();
    touringWheelR.removeAttribute('data');
    setTimeout(()=>{
      touringWheelR.setAttribute('data', 'parts/crtouringWheel.svg');}, 55);
    touringWheelF.removeAttribute('data');
    setTimeout(()=>{
      touringWheelF.setAttribute('data', 'parts/crtouringWheel.svg');}, 65);
  }
}
let tranquilTyres = () => {
  forgedTyresC.textContent = 'Tranquil';
  if(tyreSpiked==true){
    reinTyres();
    spikedWheelR.removeAttribute('data');
    setTimeout(()=>{
      spikedWheelR.setAttribute('data', 'parts/trspikedWheel.svg');}, 50);
    spikedWheelF.removeAttribute('data');
    setTimeout(()=>{
      spikedWheelF.setAttribute('data', 'parts/trspikedWheel.svg');}, 65);
  }
  else if(tyreCruiser==true){
    reinTyres1();
    cruiserWheelR.removeAttribute('data');
    setTimeout(()=>{
      cruiserWheelR.setAttribute('data', 'parts/trcruiserWheel.svg');}, 55);
    cruiserWheelF.removeAttribute('data');
    setTimeout(()=>{
    cruiserWheelF.setAttribute('data', 'parts/trcruiserWheel.svg');}, 65);
  }
  else if(tyreSport==true){
    reinTyres2();
    sportWheelR.removeAttribute('data');
    setTimeout(()=>{
      sportWheelR.setAttribute('data', 'parts/trsportWheel.svg');}, 55);
    sportWheelF.removeAttribute('data');
    setTimeout(()=>{
      sportWheelF.setAttribute('data', 'parts/trsportWheel.svg');}, 65);
  }
  else if(tyreTouring==true){
    reinTyres3();
    touringWheelR.removeAttribute('data');
    setTimeout(()=>{
      touringWheelR.setAttribute('data', 'parts/trtouringWheel.svg');}, 55);
    touringWheelF.removeAttribute('data');
    setTimeout(()=>{
      touringWheelF.setAttribute('data', 'parts/trtouringWheel.svg');}, 65);
  }
}

let tyresDone = ()=>{
  restartOpt();
  motorAnimation();
  handleBtn.disabled = false;
  handleModal.hidden = false;
  handleType.hidden = false;
  colorHandle.hidden = false;
}
// Handle Bars
const highSelect = document.querySelector('#highSelect');
const curvedSelect = document.querySelector('#curvedSelect');
const straightSelect =document.querySelector('#straightSelect');
const highHandle = document.querySelector('.highHandle');
const curvedHandle = document.querySelector('.curvedHandle');
const straightHandle = document.querySelector('.straightHandle');
const forgedHandleT = document.querySelector('.forged-handleT');
const forgedHandleC = document.querySelector('.forged-handleC');

let applyHandle = (handle) =>{
  handle.classList.remove('unhandle');
  setTimeout(() => {
    handle.classList.add('handle-MC');
  }, 10);
}
let removeHandle = (handle1) =>{
  handle1.classList.remove('handle-MC');
  setTimeout(()=>{
    handle1.classList.add('unhandle');
  }, 15);
}
let removeAllHandle = () => {
  removeHandle(highHandle);
  removeHandle(curvedHandle);
  removeHandle(straightHandle);
}
let handleHigh = false;
let handleCurved = false;
let handleStraight = false;

let reinHandle= () =>{
  removeAllHandle();
  setTimeout(()=>{
    applyHandle(highHandle);
  }, 20);
  highHandle.style.display = "block";
  handleHigh = true;
  handleCurved = false;
  handleStraight = false;
  forgedHandleT.textContent = 'High Handlebars';
}
let reinHandle1= () =>{
  removeAllHandle();
  setTimeout(()=>{
    applyHandle(curvedHandle);
  }, 20);
  curvedHandle.style.display = "block";
  handleHigh = false;
  handleCurved = true;
  handleStraight = false;
  forgedHandleT.textContent = 'Curved Handlebars';
}
let reinHandle2= () =>{
  removeAllHandle();
  setTimeout(()=>{
    applyHandle(straightHandle);
  }, 20);
  straightHandle.style.display = "block";
   handleHigh = false;
   handleCurved = false;
   handleStraight = true;
   forgedHandleT.textContent = 'Straight Handlebars';
}
let cyanHandle = () => {
  forgedHandleC.textContent = 'Cyan';
  if(handleHigh==true){
    reinHandle();
    highHandle.removeAttribute('data');
    setTimeout(()=>{
     highHandle.setAttribute('data', 'parts/cyhighHandle.svg');}, 30);
  }
  else if(handleCurved==true){
    reinHandle1();
    curvedHandle.removeAttribute('data');
    setTimeout(()=>{
      curvedHandle.setAttribute('data', 'parts/cycurvedHandle.svg');}, 30);
  }
  else if(handleStraight==true){
    reinHandle2();
    straightHandle.removeAttribute('data');
    setTimeout(()=>{
      straightHandle.setAttribute('data', 'parts/cystraightHandle.svg');}, 30);
  }
}
let crimsonHandle = () => {
  forgedHandleC.textContent = 'Crimson'
  if(handleHigh==true){
    reinHandle();
    highHandle.removeAttribute('data');
    setTimeout(()=>{
     highHandle.setAttribute('data', 'parts/crhighHandle.svg');}, 30);
  }
  else if(handleCurved==true){
    reinHandle1();
    curvedHandle.removeAttribute('data');
    setTimeout(()=>{
      curvedHandle.setAttribute('data', 'parts/crcurvedHandle.svg');}, 30);
  }
  else if(handleStraight==true){
    reinHandle2();
    straightHandle.removeAttribute('data');
    setTimeout(()=>{
      straightHandle.setAttribute('data', 'parts/crstraightHandle.svg');}, 30);
  }
}
let ravenHandle = () => {
  forgedHandleC.textContent = 'Raven'
  if(handleHigh==true){
    reinHandle();
    highHandle.removeAttribute('data');
    setTimeout(()=>{
     highHandle.setAttribute('data', 'parts/rhighHandle.svg');}, 30);
  }
  else if(handleCurved==true){
    reinHandle1();
    curvedHandle.removeAttribute('data');
    setTimeout(()=>{
      curvedHandle.setAttribute('data', 'parts/rcurvedHandle.svg');}, 30);
  }
  else if(handleStraight==true){
    reinHandle2();
    straightHandle.removeAttribute('data');
    setTimeout(()=>{
      straightHandle.setAttribute('data', 'parts/rstraightHandle.svg');}, 30);
  }
}
let tranquilHandle = () => {
  forgedHandleC.textContent = 'Tranquil'
  if(handleHigh==true){
    reinHandle();
    highHandle.removeAttribute('data');
    setTimeout(()=>{
     highHandle.setAttribute('data', 'parts/trhighHandle.svg');}, 30);
  }
  else if(handleCurved==true){
    reinHandle1();
    curvedHandle.removeAttribute('data');
    setTimeout(()=>{
      curvedHandle.setAttribute('data', 'parts/trcurvedHandle.svg');}, 30);
  }
  else if(handleStraight==true){
    reinHandle2();
    straightHandle.removeAttribute('data');
    setTimeout(()=>{
      straightHandle.setAttribute('data', 'parts/trstraightHandle.svg');}, 30);
  }
}

let handleDone = ()=>{
  restartOpt();
  motorAnimation();
  headBtn.disabled = false;
 headModal.hidden = false;
  headType.hidden = false;
  colorHead.hidden = false;
}

// HeadLights Forging
const focusSelect = document.querySelector('#focusSelect');
const dualSelect = document.querySelector('#dualSelect');
const broadSelect = document.querySelector('#broadSelect');
const forgedHeadT = document.querySelector('.forged-headT');
const forgedHeadC = document.querySelector('.forged-headC');
let headFocus = false;
let headDual = false;
let headBroad = false;

let applyHead = (head) =>{
  head.classList.remove('head-MC4');
  setTimeout(() => {
    head.classList.add('head-MC');
  }, 15);
}
let removeHead = (head1) =>{
  head1.classList.remove('head-MC');
  setTimeout(()=>{
    head1.classList.add('head-MC4');
  }, 10);
}
let ifxforceHead = (head2) =>{
  head2.classList.remove('head-MC4');
  setTimeout(() => {
    head2.classList.add('head-MC2');
  }, 10);
}
let removeAllHead = () => {
  removeHead(focusHead);
  removeHead(broadHead);
  removeHead(dualHead);
}

let reinHead = ()=>{
  removeAllHead();
  setTimeout(()=>{
    applyHead(focusHead);
  }, 20);
  focusHead.style.display = "block";
  forgedHeadT.textContent = 'Focus Headlights';
  headFocus = true;
  headDual = false;
  headBroad = false;
}

let reinHead1 = ()=>{
  removeAllHead();
  setTimeout(() => {
    applyHead(dualHead);
  }, 20);
  dualHead.style.display = "block";
  forgedHeadT.textContent = 'Dual Headlights';
  headFocus = false;
  headDual = true;
  headBroad = false;
}
let reinHead2 = ()=>{
  removeAllHead();
 setTimeout(()=>{
   applyHead(broadHead);
 }, 20);
  broadHead.style.display = "block";
  forgedHeadT.textContent = 'Broad Headlights';
  headFocus = false;
  headDual = false;
  headBroad = true;
}
// Color Headlights

let cyanHead = () => {
  forgedHeadC.textContent = 'Cyan';
  if(headFocus==true){
    reinHead();
    focusHead.removeAttribute('data');
    setTimeout(()=>{
     focusHead.setAttribute('data', 'parts/cyfocusHead.svg');}, 20);
  }
  else if(headDual==true){
    reinHead1();
    dualHead.removeAttribute('data');
    setTimeout(()=>{
      dualHead.setAttribute('data', 'parts/cydualHead.svg');}, 50);
  }
  else if(headBroad==true){
    reinHead2();
    broadHead.removeAttribute('data');
    setTimeout(()=>{
     broadHead.setAttribute('data', 'parts/cybroadHead.svg');}, 50);
  }
}
let ravenHead = () => {
  forgedHeadC.textContent = 'Raven';
  if(headFocus==true){
    reinHead();
    focusHead.removeAttribute('data');
    setTimeout(()=>{
     focusHead.setAttribute('data', 'parts/rfocusHead.svg');}, 50);
  }
  else if(headDual==true){
    reinHead1();
    dualHead.removeAttribute('data');
    setTimeout(()=>{
      dualHead.setAttribute('data', 'parts/rdualHead.svg');}, 50);
  }
  else if(headBroad==true){
    reinHead2();
    broadHead.removeAttribute('data');
    setTimeout(()=>{
     broadHead.setAttribute('data', 'parts/rbroadHead.svg');}, 50);
  }
}
let crimsonHead = () => {
  forgedHeadC.textContent = 'Crimson';
  if(headFocus==true){
    reinHead();
    focusHead.removeAttribute('data');
    setTimeout(()=>{
     focusHead.setAttribute('data', 'parts/crfocusHead.svg');}, 50);
  }
  else if(headDual==true){
    reinHead1();
    dualHead.removeAttribute('data');
    setTimeout(()=>{
      dualHead.setAttribute('data', 'parts/crdualHead.svg');}, 50);
  }
  else if(headBroad==true){
    reinHead2();
    broadHead.removeAttribute('data');
    setTimeout(()=>{
     broadHead.setAttribute('data', 'parts/crbroadHead.svg');}, 50);
  }
}
let tranquilHead = () => {
  forgedHeadC.textContent = 'Tranquil';
  if(headFocus==true){
    reinHead();
    focusHead.removeAttribute('data');
    setTimeout(()=>{
     focusHead.setAttribute('data', 'parts/trfocusHead.svg');}, 50);
  }
  else if(headDual==true){
    reinHead1();
    dualHead.removeAttribute('data');
    setTimeout(()=>{
      dualHead.setAttribute('data', 'parts/trdualHead.svg');}, 50);
  }
  else if(headBroad==true){
    reinHead2();
    broadHead.removeAttribute('data');
    setTimeout(()=>{
     broadHead.setAttribute('data', 'parts/trbroadHead.svg');}, 50);
  }
}


let headDone = ()=>{
  restartOpt();
  motorAnimation();
  mufflerBtn.disabled = false;
  mufflerModal.hidden = false;
  mufflerType.hidden = false;
  colorMuffler.hidden = false;
}

// Muffler Function
const racingSelect = document.querySelector('#racingSelect');
const powerSelect = document.querySelector('#powerSelect');
const twinSelect = document.querySelector('#twinSelect');
const stagSelect = document.querySelector('#staggeredSelect');
const colorBrake = document.querySelector('#color-brake');
const racingMuffler = document.querySelector('.racing-muffler');
const powerMuffler = document.querySelector('.power-muffler');
const twinMuffler =document.querySelector('.twin-muffler');
const stagMuffler = document.querySelector('.stag-muffler');
const forgedMuffsT = document.querySelector('.forged-muffsT');
const forgedMuffsC= document.querySelector('.forged-muffsC');
let muffsRacing = false;
let muffsPower = false;
let muffsTwin = false;
let muffsStag = false;

let applyMuffs = (muffs) =>{
  muffs.classList.remove('muffler-list2');
  setTimeout(() => {muffs.classList.add('muffler-list');}, 10);
}
let removeMuffs = (muffs1) =>{
  muffs1.classList.remove('muffler-list');
  setTimeout(() => {muffs1.classList.add('muffler-list2');}, 15);
}
let removeAllMuffs =()=>{
  removeMuffs(racingMuffler);
  removeMuffs(powerMuffler);
  removeMuffs(twinMuffler);
  removeMuffs(stagMuffler);
}

let reinMuffler = () => {
  removeAllMuffs();
  setTimeout(()=>{applyMuffs(racingMuffler);}, 20);
  racingMuffler.style.display = 'block';
  muffsRacing = true;
  muffsPower = false;
  muffsTwin = false;
  muffsStag = false;
  forgedMuffsT.textContent = 'Racing';
}
let reinMuffler1 = () => {
  removeAllMuffs();
  setTimeout(()=>{applyMuffs(powerMuffler)}, 20);
  powerMuffler.style.display = 'block';
  muffsRacing = false;
  muffsPower = true;
  muffsTwin = false;
  muffsStag = false;
  forgedMuffsT.textContent = 'Power Core';
}
let reinMuffler2 = () =>{
  removeAllMuffs();
  setTimeout(() => {
    applyMuffs(twinMuffler);
  }, 20);
  twinMuffler.style.display = 'block';
  muffsRacing = false;
  muffsPower = false;
  muffsTwin = true;
  muffsStag = false;
  forgedMuffsT.textContent = 'Twin Slash';
}
let reinMuffler3 = () =>{
  removeAllMuffs();
  setTimeout(() => {
    applyMuffs(stagMuffler);
  }, 20);
  stagMuffler.style.display = 'block';
  muffsRacing = false;
  muffsPower = false;
  muffsTwin = false;
  muffsStag = true;
  forgedMuffsT.textContent = 'Staggered';
}
// Muffler colors
let cyanMuffs = () => {
  forgedMuffsC.textContent = 'Cyan';
  if(muffsRacing==true){
    reinMuffler();
    racingMuffler.removeAttribute('data');
    setTimeout(()=>{
     racingMuffler.setAttribute('data', 'parts/cyracingMuffs.svg');}, 10);
  }
  else if(muffsPower==true){
    reinMuffler1();
    powerMuffler.removeAttribute('data');
    setTimeout(()=>{
      powerMuffler.setAttribute('data', 'parts/cypowerMuffs.svg');}, 10);
  }
  else if(muffsTwin==true){
    reinMuffler2();
    twinMuffler.removeAttribute('data');
    setTimeout(()=>{
    twinMuffler.setAttribute('data', 'parts/cytwinMuffler.svg');}, 50);
  }
  else if(muffsStag==true){
    reinMuffler3();
    stagMuffler.removeAttribute('data');
    setTimeout(()=>{
    stagMuffler.setAttribute('data', 'parts/cystagMuffs.svg');}, 10);
  }
}
let ravenMuffs = () => {
  forgedMuffsC.textContent = 'Raven';
  if(muffsRacing==true){
    reinMuffler();
    racingMuffler.removeAttribute('data');
    setTimeout(()=>{
     racingMuffler.setAttribute('data', 'parts/rracingMuffs.svg');}, 10);
  }
  else if(muffsPower==true){
    reinMuffler1();
    powerMuffler.removeAttribute('data');
    setTimeout(()=>{
      powerMuffler.setAttribute('data', 'parts/rpowerMuffs.svg');}, 10);
  }
  else if(muffsTwin==true){
    reinMuffler2();
    twinMuffler.removeAttribute('data');
    setTimeout(()=>{
    twinMuffler.setAttribute('data', 'parts/rtwinMuffler.svg');}, 50);
  }
  else if(muffsStag==true){
    reinMuffler3();
    stagMuffler.removeAttribute('data');
    setTimeout(()=>{
    stagMuffler.setAttribute('data', 'parts/rstagMuffs.svg');}, 10);
  }
}
let crimsonMuffs = () => {
  forgedMuffsC.textContent = 'Crimson';
  if(muffsRacing==true){
    reinMuffler();
    racingMuffler.removeAttribute('data');
    setTimeout(()=>{
     racingMuffler.setAttribute('data', 'parts/crracingMuffs.svg');}, 10);
  }
  else if(muffsPower==true){
    reinMuffler1();
    powerMuffler.removeAttribute('data');
    setTimeout(()=>{
      powerMuffler.setAttribute('data', 'parts/crpowerMuffs.svg');}, 10);
  }
  else if(muffsTwin==true){
    reinMuffler2();
    twinMuffler.removeAttribute('data');
    setTimeout(()=>{
    twinMuffler.setAttribute('data', 'parts/crtwinMuffler.svg');}, 10);
  }
  else if(muffsStag==true){
    reinMuffler3();
    stagMuffler.removeAttribute('data');
    setTimeout(()=>{
    stagMuffler.setAttribute('data', 'parts/crstagMuffs.svg');}, 10);
  }
}
let tranquilMuffs = () => {
  forgedMuffsC.textContent = 'Tranquil';
  if(muffsRacing==true){
    reinMuffler();
    racingMuffler.removeAttribute('data');
    setTimeout(()=>{
     racingMuffler.setAttribute('data', 'parts/trracingMuffs.svg');}, 10);
  }
  else if(muffsPower==true){
    reinMuffler1();
    powerMuffler.removeAttribute('data');
    setTimeout(()=>{
      powerMuffler.setAttribute('data', 'parts/trpowerMuffler.svg');}, 10);
  }
  else if(muffsTwin==true){
    reinMuffler2();
    twinMuffler.removeAttribute('data');
    setTimeout(()=>{
    twinMuffler.setAttribute('data', 'parts/trtwinMuffler.svg');}, 50);
  }
  else if(muffsStag==true){
    reinMuffler3();
    stagMuffler.removeAttribute('data');
    setTimeout(()=>{
    stagMuffler.setAttribute('data', 'parts/trstagMuffs.svg');}, 10);
  }
}

let mufflerDone =() =>{
  restartOpt();
  motorAnimation();
  brakeBtn.disabled = false;
  brakeModal.hidden = false;
  brakeType.hidden = false;
  colorBrake.hidden = false;
}
// Brake Forging Functions
const waveSelect = document.querySelector('.brake-wave');
const crossSelect = document.querySelector('.brake-cross');
const drilledSelect = document.querySelector('.brake-drilled');
const magSelect = document.querySelector('.brake-expanded');
const checkBtn = document.querySelector('#check-btn');
const restartBtn = document.querySelector('#restart-btn');
const checkModal = document.querySelector('.checkout-modal');
const forgedBrakeT = document.querySelector('.forged-brakeT')
const forgedBrakeC = document.querySelector('.forged-brakeC')

let brakeWave = false;
let brakeCross = false;
let brakeDrilled = false;
let brakeMag = false;

let applyBrake = (BD)=>{
  BD.classList.remove('brake-list2');
  setTimeout(()=> BD.classList.add('brake-list'), 10);
}
let removeBrake = (BD1) => {
  BD1.classList.remove('brake-list');
  setTimeout(() => {
    BD.classList.add('brake-list')
  }, 15);
}
let removeAllBrake = ()=>{
  removeBrake(waveSelect);
  removeBrake(crossSelect);
  removeBrake(drilledSelect);
  removeBrake(magSelect);
}

let reinBrake = () => {
  removeAllBrake();
  setTimeout(()=> applyBrake(waveSelect), 20);
  waveSelect.style.display = 'block';
  forgedBrakeT.textContent = 'Wave Rotor';
  brakeWave = true;
}
let reinBrake1 = () => {
  removeAllBrake();
  setTimeout(()=> applyBrake(crossSelect), 20);
  crossSelect.style.display = 'block';
  forgedBrakeT.textContent = 'Cross Slotted';
  brakeCross = true;
}

let reinBrake2 = () => {
  removeAllBrake();
  setTimeout(()=> applyBrake(drilledSelect), 20);
  drilledSelect.style.display = 'block';
  forgedBrakeT.textContent = 'Drilled rotor';
  brakeWave = false;
  brakeDrilled = true;
  brakeCross = false;
  brakeMag = false;
}

let reinBrake3 = () => {
  removeAllBrake();
  setTimeout(()=> applyBrake(magSelect), 20);
  magSelect.style.display = 'block';
  forgedBrakeT.textContent = 'Mag Expanded';
  brakeMag = true;
}

let tranquilBrake = () => {
  forgedBrakeC.textContent = 'Tranquil';
  if(brakeWave==true){
    reinBrake();
    waveSelect.removeAttribute('src');
    setTimeout(()=>{
     waveSelect.setAttribute('src', 'parts/trwaveBrake.svg');}, 50);
  }
  else if(brakeCross==true){
    reinBrake1();
    crossSelect.removeAttribute('src');
    setTimeout(()=>{
      crossSelect.setAttribute('src', 'parts/trcrossBrake.svg');}, 50);
  }
  else if(brakeDrilled==true){
    reinBrake2();
    drilledSelect.removeAttribute('data');
    setTimeout(()=>{
    drilledSelect.setAttribute('data', 'parts/trbrakeDrilled.svg');}, 50);
  }
  else if(brakeMag==true){
    reinBrake3();
    magSelect.removeAttribute('src');
    setTimeout(()=>{
    magSelect.setAttribute('src', 'parts/trmagBrake.svg');}, 50);
  }
}
let cyanBrake = () => {
  forgedBrakeC.textContent = 'Cyan';
  if(brakeWave==true){
    reinBrake();
    waveSelect.removeAttribute('src');
    setTimeout(()=>{
     waveSelect.setAttribute('src', 'parts/cywaveBrake.svg');}, 50);
  }
  else if(brakeCross==true){
    reinBrake1();
    crossSelect.removeAttribute('src');
    setTimeout(()=>{
      crossSelect.setAttribute('src', 'parts/cybrakeCross.svg');}, 50);
  }
  else if(brakeDrilled==true){
    reinBrake2();
    setTimeout(()=>{
    drilledSelect.setAttribute('data', 'parts/cybrakeDrilled.svg');}, 50);
  }
  else if(brakeMag==true){
    reinBrake3();
    magSelect.removeAttribute('src');
    setTimeout(()=>{
    magSelect.setAttribute('src', 'parts/cymagBrake.svg');}, 50);
  }
}
let ravenBrake = () => {
  forgedBrakeC.textContent = 'Raven';
  if(brakeWave==true){
    reinBrake();
    waveSelect.removeAttribute('src');
    setTimeout(()=>{
     waveSelect.setAttribute('src', 'parts/rwaveBrake.svg');}, 50);
  }
  else if(brakeCross==true){
    reinBrake1();
    crossSelect.removeAttribute('src');
    setTimeout(()=>{
      crossSelect.setAttribute('src', 'parts/rcrossBrake.svg');}, 50);
  }
  else if(brakeDrilled==true){
    reinBrake2();
    setTimeout(()=>{
    drilledSelect.setAttribute('data', 'parts/rbrakeDrilled.svg');}, 50);
  }
  else if(brakeMag==true){
    reinBrake3();
    magSelect.removeAttribute('src');
    setTimeout(()=>{
    magSelect.setAttribute('src', 'parts/rmagBrake.svg');}, 50);
  }
}
let crimsonBrake= () => {
  forgedBrakeC.textContent = 'Crimson';
  if(brakeWave==true){
    reinBrake();
    waveSelect.removeAttribute('src');
    setTimeout(()=>{
     waveSelect.setAttribute('src', 'parts/crwaveBrake.svg');}, 50);
  }
  else if(brakeCross==true){
    reinBrake1();
    crossSelect.removeAttribute('src');
    setTimeout(()=>{
      crossSelect.setAttribute('src', 'parts/crcrossBrake.svg');}, 50);
  }
  else if(brakeDrilled==true){
    reinBrake2();
    setTimeout(()=>{
    drilledSelect.setAttribute('data', 'parts/crbrakeDrilled.svg');}, 50);
  }
  else if(brakeMag==true){
    reinBrake3();
    magSelect.removeAttribute('src');
    setTimeout(()=>{
    magSelect.setAttribute('src', 'parts/crmagBrake.svg');}, 50);
  }
}

let brakeDone = () => {
  restartOpt();
  motorAnimation();
  checkBtn.disabled = false;
  restartBtn.disabled = false;
  checkModal.classList.remove('hiding');
  setTimeout(()=>checkModal.classList.add('showing'), 20);
}

let checkPress = () =>{
    brakeDone();
}
restartPress =()=>{
  removeAllBrake();
  removeAllHandle();
  removeAllHead();
  removeAllChasis();
  removeAllMuffs();
  restartOpt();
  checkModal.classList.remove('showing');
  setTimeout(()=>checkModal.classList.add('hiding'), 20);
  setTimeout(()=>{
    dmContainer.hidden = true;
    startUp();
  }, 2000);
}
// Check-Out compiling 
const checkedOut = document.querySelector('.checked-out');
const forgeContainer = document.querySelector('#Forge-container');
const forgeSuccess = document.querySelector('#forge-success');
const forgeEnd = document.querySelector('.forge-end');
let checkDone=()=>{
  forgeGreet.hidden = true;
  checkedOut.hidden = false;
  forgeContainer.classList.remove('Builder');
  setTimeout(()=>{
    forgeContainer.classList.add('order-now');}, 10);
  forgeSuccess.classList.remove('forge-in');
  setTimeout(()=>{
    forgeSuccess.classList.add('forge-details');
  }, 10);
  dmContainer.removeAttribute('id');
  setTimeout(()=> {
    dmContainer.setAttribute('id', 'dmContainer1');
  }, 10);
  setTimeout(()=>{
    dmContainer.animation = '';
  }, 13);
  checkModal.classList.remove('showing');
  setTimeout(()=>checkModal.classList.add('hiding'), 20);
  forgeEnd.hidden = false;
}
let closeCheck = () =>{
  checkedOut.hidden = true;
  forgeContainer.classList.remove('order-now');
  setTimeout(()=>{
    forgeContainer.classList.add('Builder');}, 10);
  forgeSuccess.classList.remove('forge-details');
  setTimeout(()=>{
    forgeSuccess.classList.add('forge-in');
  }, 10);
  dmContainer.removeAttribute('id');
  setTimeout(()=> {
    dmContainer.setAttribute('id', 'dmContainer');
  }, 10);
  setTimeout(()=>{
    dmContainer.hidden = true;
  }, 13);
  chasisBtn.disabled = true;
  tyresBtn.disabled = true;
  handleBtn.disabled = true;
  headBtn.disabled = true;
  mufflerBtn.disabled = true;
  brakeBtn.disabled = true;
  checkBtn.disabled = true;
  restartBtn.disabled = true;
  forgeEnd.hidden=true;
}