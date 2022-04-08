import axios from "axios";
import { atom } from "recoil";
import { useState } from "react";

const usersState = atom({
	key: "UsersState",
	default: [],
	effects: [
		({ setSelf }) => {

            const token = localStorage.getItem("token")
            const userId = localStorage.getItem("id")
            const userData = localStorage.getItem("userdata")
            const [isAdmin, setIsAdmin] =useState(false)

			axios
				.get("https://k4backend.osuka.dev/users")
				.then((res) => setSelf(res.data))
				.catch((err) => console.log(err));
		},
	],
});

export default usersState;