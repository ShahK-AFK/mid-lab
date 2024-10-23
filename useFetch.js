import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useFetch = (url, storageKey) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("TRYING TO GET THE DATA!!!!");  
        const cachedData = await AsyncStorage.getItem(storageKey);
        if (cachedData) {
          console.log("Loaded cached data");
          setData(JSON.parse(cachedData)); 
        } else {
          const response = await fetch(url);
          console.log("Response status:", response.status);
          if (!response.ok) throw new Error("Network response was not ok");
          
          const json = await response.json();
          
          setData(json.data.surahs); 
          await AsyncStorage.setItem(storageKey, JSON.stringify(json.data.surahs));
        }
      } catch (e) {
        
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
