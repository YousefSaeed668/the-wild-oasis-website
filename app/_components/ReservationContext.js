"use client";
import { createContext, useContext, useState } from "react";

const ReservationContenxt = createContext();
function ReservationProvider({ children }) {
  const initialState = { from: undefined, to: undefined };
  const [range, setRange] = useState(initialState);
  const resetRange = () => setRange(initialState);
  return (
    <ReservationContenxt.Provider value={{ range, setRange, resetRange }}>
      {children}
    </ReservationContenxt.Provider>
  );
}

function useReservation() {
  const context = useContext(ReservationContenxt);
  if (!context) {
    throw new Error("useReservation must be used within a ReservationProvider");
  }
  return context;
}

export { ReservationProvider, useReservation };
