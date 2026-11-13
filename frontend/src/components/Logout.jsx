import { useEffect, useState } from "react";
import api from "../api/axiosInstance";

export default function Logout() {
    const [message, setMessage] = useState(null);

    useEffect(() => {
        async function logout() {
            try {
                const response = await api.post("/users/logout");
                setMessage(response.data);
            } catch (error) {
                setMessage("Sikertelen kijelentkezés");
            }
        }

        logout();
    }, []);

    return (
        <div>
            <h1>Test Form</h1>
            {message && <p>{JSON.stringify(message)}</p>}
        </div>
    );
}
