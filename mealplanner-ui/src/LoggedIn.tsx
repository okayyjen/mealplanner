// Ensure the user is logged in before routing to meal plans and such authorised pages.
import * as React from "react";
import { Navigate, useLocation } from "react-router";
import { getCurrentPerson } from "./state/state";
import { useState } from 'react';

export const LoggedIn = ({ children }: { children: React.ReactNode }) => {
  console.log(`current Person ID in LoggedIn ${getCurrentPerson()}`);
  const [currentPerson, setCurrentPerson] = useState(getCurrentPerson());

  if (currentPerson.personID === "" ) {
    return <Navigate to="/" />;
  } else if (currentPerson.personTerms === false) {
    return <Navigate to="/terms" replace/>;
  } 

  return <React.Fragment>{children}</React.Fragment>;
};
