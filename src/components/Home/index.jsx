import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addRockets } from "../../redux/Rockets/RocketSlice";
import RocketList from "./RocketList";

export default function Rocket() {
  const dispatch = useDispatch();
  useEffect(() => {
    const getRockets = async () => {
      try {
        const response = await axios.get("/");
        const allItems = response.data;
        dispatch(addRockets(allItems));
      } catch (error) {
        console.log(error);
      }
    };
    getRockets();
  }, []);

  return (
    <section>
        <RocketList/>
    </section>
  )
}
