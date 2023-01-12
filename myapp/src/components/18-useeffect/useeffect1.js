import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";


const UseEffect1 = (id) => {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  console.log(
    `Bu satir render ve re-render durumlarinda ve 
    alttaki return render edilmeden once calistirilmalidir`
  );

  useEffect(()=>{
    console.log(`
                MOUNTING: Bu satir sadece render durumunda calisir
                Ancak re-render larda calismaz.
                `) 

                return ()=>{
                    console.log(`
                    UNMOUNTING: Bu bolum component hafizadan atilmadan hemen once calisir
                    `)
                }
  },[])


  useEffect(()=>{
    console.log(
        `UPDATING : Bu satir render ve re-render durumlarinda ve 
        alttaki return render edildikten sonra calisir
        Bu useEffect ozellikle alttaki elementlere useRef ile erismek icin kullanilir`
      );
  })


  useEffect(()=>{
    console.log(`
            UPDATING : Bu bolumdeki kodlar alt tarafdaki yazilan dependency lerin (message,id)
            degismesi durumunda calisir
                `) 
  },[message,id])

  return (
    <div>
      <div>
        {message} - {error}
      </div>
      <Button variant="info" onClick={() => setMessage("Hello")}>
        Set Message
      </Button>
      <Button variant="danger" onClick={() => setError("Some errors")}>
        Throw Error
      </Button>
    </div>
  );
};
export default UseEffect1;
