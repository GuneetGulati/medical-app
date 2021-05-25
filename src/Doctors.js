import React, { useEffect, useState } from "react";
import Header from "./Header";
import "./Doctors.css";
import Doctor from "./Doctor";
import axios from "./axios";
import { Link, useHistory } from "react-router-dom";
import { useStateValue } from "./Doctor/StateProvider";

function Doctors() {
  const history = useHistory();
  const [resi, setResi] = useState([]);
  const [loading, setLoading] = useState(false);
  const [ state , dispatch ] = useStateValue();

  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      await axios
        .get("/doctor")
        .then((resp) => {
          setResi(resp.data);
          setLoading(false);
        })
        .catch((err) => alert(err));
    };

    getData();
  }, []);

  const redire = (idd)=>{
      dispatch({
        type:'SET_CLICKID',
        id: idd
      })

      history.push(`/doctor/${idd}`);
  }


  return (
    <div className="doctors">
      <Header />
      <h2 className="dochead">Doctors</h2>
      {loading && <p> Loading.... </p>}
      <div className="home">
        {!loading && (
          <>
            {resi.map((resp, i) => (
              <div onClick={()=>redire(resp.id)} key={resp.id}>
               
                <Doctor 
                  id={resp.id}
                  title={resp.title}
                  name={resp.name}
                  lastName={resp.lastName}
                  age={resp.age}
                  gender={resp.gender}
                  phone={resp.phone}
                  address={resp.address}
                  specone={resp.specone}
                  description={resp.description}
                  location={resp.location}
                />
                </div>
              
            ))}
          </>
        )}
      </div>
    </div>
  );
}

export default Doctors;
