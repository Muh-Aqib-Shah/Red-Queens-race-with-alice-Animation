import './App.css';
import useWebAnimations from '@wellyshen/use-web-animations';

function App() {


var playAnimations =[
    { transform: 'translateX(100%)' },
    { transform: 'translateX(-200%)'} 
];
var spriteFrames = [
  { transform: 'translateY(0)' },
  { transform: 'translateY(-100%)'}   
];
 let {ref : aliceAnimation,getAnimation: Alice} = useWebAnimations({
  keyframes: [
  ...spriteFrames
  ], animationOptions: {
  easing: 'steps(7, end)',
  direction: "reverse",
  duration: 600,
  playbackRate: 1,
  iterations: 100000
}})

let {ref : backgroundAnimation,getAnimation: backGround} = useWebAnimations({
  keyframes: [
    ...playAnimations 
  ], animationOptions: {
  duration:36000,
  iterations: 1000000
}})

let {ref : foregroundAnimation,getAnimation: foreGround} = useWebAnimations({
  keyframes: [
    ...playAnimations
  ], animationOptions: {
  duration:25000,
  iterations: 100000
}})
function AdjustPlaybackRates(){

    if(Alice().playbackRate < 0.7){
      foreGround().playbackRate = Alice().playbackRate/2 * -1;
      backGround().playbackRate = Alice().playbackRate/2 * -1;
    }
    else if(Alice().playbackRate > 1.2){
      foreGround().playbackRate = Alice().playbackRate/2;
      backGround().playbackRate = Alice().playbackRate/2;
    }
   
}

setInterval(function SlowDownAlice(){
  if(Alice().playbackRate > 0.4){
    Alice().playbackRate *= 0.9;
  }
  AdjustPlaybackRates();
},6000)


  function SpeedboostAlice(){
    Alice().playbackRate *= 1.1;
    AdjustPlaybackRates()
  }

  
  return (
    <div onClick={SpeedboostAlice} className="wrapper">
      <div className="sky"> </div>
      
      <div className="earth">
      <div className="alice-queen">
              <img ref={aliceAnimation} src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen_small.png" 
              width={100}  alt="Alice_with_queen"/>
          </div>
      </div>
      <div ref={foregroundAnimation} className="surroundings" id='frontface' >
        <div  className='front'>
          <div className="front1">
            <img id="single-palm-tree1" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm1_small.png" width={300} alt="palm tree"/>
            <img id="bush" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/bush_small.png" alt="bush" />
          </div>
            <div className="front2">
            <img id="rook_upright" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_upright_small.png"  alt="rook" />
            </div>
        </div>
        </div>
        <div ref={backgroundAnimation} className="surroundings" id="backface">
        <div  className="back">
          <div className="back1">
          <img id="double-palm-tree" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm3_small.png" width={150} alt="palm tree" />

          <img id="pawn" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_upright_small.png" width={130} alt="pawn"/>

          <img id="single-palm-tree" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm2_small.png" width={100} alt="palm tree"/>

          <img id="rook" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_small.png" width={300} alt="rook"/>

        </div>
        <div className="back2">
          
        <img id="r_pawn" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_small.png"  alt="pawn" />
 
        <img id="knight" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_knight_small.png" alt="knight" />
        </div>
      </div> 
       
      </div>   
      
      </div>
  );
}

export default App;
