import React, { useState, useEffect } from "react";
import { collection, query, where, getDocs, DocumentData } from "firebase/firestore";
import { db } from "../firebaseConfig";

interface Hospital {
  name: string;
  address: string;
  phone: string;
}

const HospitalSearch: React.FC = () => {
  const [location, setLocation] = useState<string>("");
  const [hospitals, setHospitals] = useState<Hospital[]>([]);

  useEffect(() => {
    const fetchHospitals = async () => {
      const q = query(collection(db, "hospitals"), where("city", "==", location));
      const querySnapshot = await getDocs(q);
      const hospitalList: Hospital[] = querySnapshot.docs.map((doc: DocumentData) => doc.data() as Hospital);
      setHospitals(hospitalList);
    };

    if (location) fetchHospitals();
  }, [location]);

  return (
    <div>
      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Enter your city"
      />
      <ul>
        {hospitals.map((hospital, index) => (
          <li key={index}>
            {hospital.name} - {hospital.address} - {hospital.phone}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HospitalSearch;
