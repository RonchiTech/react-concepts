import { useEffect, useState } from 'react';

function useFetch(url) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((userData) => setData(userData));
  }, [url]);
  
  const onAlertClicked = () => {
    alert('You clicked me!');
  };

  return [data, onAlertClicked];
}

export default useFetch;
