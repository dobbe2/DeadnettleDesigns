import woodburn from './images/woodburn.jpeg';
import './styles/index.css';


export default function Example() {
  const myStyle = {
    backgroundImage: `url(${woodburn})`,
    height: "100vh",
    marginTop: "0px",
    fontSize: "50px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
};
  return (
    <div style={myStyle}>
    <h1 className='text-center text-white'>Deadnettle Design</h1>
      {/* <img src={woodburn} className='min-w-full' /> */}
    </div>
  )
}
