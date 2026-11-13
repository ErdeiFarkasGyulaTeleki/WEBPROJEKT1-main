import { useState, useEffect } from "react";
import api from "../api/axiosInstance";

export default function TestForm() {
    const [message, setMessage] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await api.get("/users/test");
                setMessage(response.data);
            } catch (error) {
                console.log("Error fetching test data: ", error);
                setMessage("Hiba történt a tesztadatok lekérése során");
            }
        }

        fetchData();
    }, []);

    return (
        <div>
            <h1>Test Form</h1>
            {message && <p>{JSON.stringify(message)}</p>}
        </div>
    );
}
