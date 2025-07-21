import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./index.css";

const TripForm = ({ onAdd }) => {
  const [destination, setDestination] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [activities, setActivities] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({
      id: uuidv4(),
      destination,
      startDate,
      endDate,
      activities: activities.split(",").map((a) => a.trim()),
    });
    setDestination("");
    setStartDate("");
    setEndDate("");
    setActivities("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-xl shadow-md space-y-4"
    >
      <h2 className="text-xl font-semibold">Plan a New Trip</h2>
      <input
        type="text"
        placeholder="Destination"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
        className="w-full p-2 border rounded"
        required
      />
      <div className="flex gap-4">
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <textarea
        placeholder="Activities (comma separated)"
        value={activities}
        onChange={(e) => setActivities(e.target.value)}
        className="w-full p-2 border rounded"
        rows={3}
      />
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      >
        Add Trip
      </button>
    </form>
  );
};

const TripCard = ({ trip }) => (
  <div className="bg-white p-4 rounded shadow-md">
    <h3 className="text-lg font-bold text-blue-800">{trip.destination}</h3>
    <p className="text-sm text-gray-500">
      {trip.startDate} → {trip.endDate}
    </p>
    <ul className="list-disc pl-4 mt-2 text-sm">
      {trip.activities.map((act, i) => (
        <li key={i}>{act}</li>
      ))}
    </ul>
  </div>
);

export default function App() {
  const [trips, setTrips] = useState([]);

  const addTrip = (trip) => setTrips([...trips, trip]);

  return (
    <div className="min-h-screen bg-blue-50 p-6">
      <h1 className="text-3xl font-bold text-center mb-8 text-blue-900">
        🧳 Trip Planner
      </h1>
      <div className="max-w-3xl mx-auto space-y-10">
        <TripForm onAdd={addTrip} />
        <div className="grid gap-4 md:grid-cols-2">
          {trips.map((trip) => (
            <TripCard key={trip.id} trip={trip} />
          ))}
        </div>
      </div>
    </div>
  );
}
