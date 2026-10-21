import { use, useState } from "react";
import api from "../api/axiosInstance";

export default function UserForm() {
    const [userData, setUserData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        age: 33,
        role: "developer",
        newsletter: false,
    });

    const [status, setStatus] = useState(null);
    const [error, setError] = useState(null);
    const [message, setMessage] = useState(null);

    const handleChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log(userData);

        if (!userData.firstName || !userData.lastName) {
            setError("Hiányos név mezők!");
            setMessage(null);
            return;
        }

        if (!userData.email) {
            setError("Hiányos email mező!");
            setMessage(null);
            return;
        }

        if (!userData.email.includes("@")) {
            setError("Helytelen email formátum!");
            setMessage(null);
            return;
        }

        if (age && age < 1) {
            setError("Nempozitív életkor!");
            setMessage(null);
            return;
        }

        setStatus("processing");
        setMessage("Küldés folyamatban...");

        try {
            const response = await api.post("https://jsonplaceholder.typicode.com/users", userData);
            if (response.status === 201) {
                console.log("Sikeres adatfeldolgozás: ", response.data);
                setMessage("Sikeres regisztráció!");
                setError(null);
            }
        } catch (error) {
            console.error("Sikertelen regisztráció: ", error.response ? error.response.data : error.message);
            setError("Sikertelen regisztráció: " + error.response.error);
            setMessage(null);
        }

        setStatus(null);
    };

    return (
        <div id="adatlap">
            <h2>Felhasználói Adatlap</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="firstName">Vezetéknév *</label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        placeholder="Pl. Kovács"
                        required
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Keresztnév *</label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        placeholder="Pl. János"
                        required
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email cím *</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="kovacs.janos@example.com"
                        required
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="age">Életkor</label>
                    <input type="number" id="age" name="age" required placeholder="Pl. 30" onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="role">Szerepkör</label>
                    <select>
                        <option value="developer" defaultChecked>
                            Fejlesztő
                        </option>
                        <option value="designer">Designer</option>
                        <option value="manager">Projektmenedzser</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="newsletter">Hirlevél feliratkozás</label>
                    <input type="checkbox" id="newsletter" name="newsletter" onChange={handleChange} />
                </div>
                <button type="submit" className="sumbit-button" disabled={status === "processing"}>
                    Adatok beküldése
                </button>
                {error && <p style={{ color: "red" }}>{error}</p>}
                {message && <p style={{ color: "green" }}>{message}</p>}
            </form>
        </div>
    );
}
