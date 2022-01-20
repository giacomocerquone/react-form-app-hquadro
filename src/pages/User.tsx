import React, { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";

const User = () => {
  const params = useParams();
  const location = useLocation();

  const decodedQueryString = new URLSearchParams(location.search)
  
  console.log(location)

  useEffect(() => {
    // fetch the user's detail
    console.log(params.id);
  }, [params.id]);

  return <p>this is user</p>;
};

export default User;
