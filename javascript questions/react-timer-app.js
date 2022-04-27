
const TimeCard = () => {
  const [start, setStart] = React.useState(false);
  const [time, setTime] = React.useState(10000000);
  const [seconds, setSeconds] = React.useState();
  const [minutes, setMinutes] = React.useState();
  const [hours, setHours] = React.useState();


  React.useEffect(() => {
    if (start) {
      setTimeout(() => {
        setTime(time+1000);
        setSeconds(Math.floor(time / 1000) % 60);
        setMinutes(Math.floor(time / 60000) % 60);
        setHours(Math.floor(time / (60000 * 60)));
      }, 1000);
    }
  });

  return <div> 
    
    {`${hours}::${minutes}::${seconds}`} 
    <button onClick={()=> {
      setStart(!start);
    }}>
      {!start ? 'start' : 'stop'}
    </button>
    <button onClick={() => {

    }
    }>delete</button>
  </div>;
}

const App = () => {
  const [timeCards, setTimeCards] = React.useState([]);

  const deleteTimeCard = (idx) => {
    
  }

  return (
    <div>
      {timeCards.map((val, idx) => {
        return <TimeCard delete={deleteTimeCard}/>
      })}
      <button onClick={() => {
        setTimeCards([...timeCards, 1])
      }}>+</button>
    </div>);
  
};

ReactDOM.render(<App />, document.getElementById("root"));
