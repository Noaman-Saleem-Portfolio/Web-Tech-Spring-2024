import { useState, useEffect } from "react";
import { setUser } from "../store/userSlice";
import { useDispatch } from "react-redux";
import axios from "axios";

const apiJson = axios.create({
  baseURL: import.meta.env.VITE_SERVER,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

function useAutoLogin() {
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    // IIFE
    (async function autoLoginApiCall() {
      //   console.log(`autoLoginApiCall`);
      try {
        const response = await apiJson.post(`/refresh-token`);
        // console.log(`Refresh wala response`);
        // console.log(response);

        if (response.status === 200) {
          // 1. setUser
          const user = {
            _id: response.data.user._id,
            email: response.data.user.email,
            username: response.data.user.name,
            auth: response.data.auth,
          };

          dispatch(setUser(user));
        }
      } catch (error) {
        //
        console.log(`refresh wali error`);
        console.log(error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return loading;
}

export default useAutoLogin;
