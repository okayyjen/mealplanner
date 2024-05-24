import Button from '@mui/material/Button';
import { Checkbox } from '@mui/material';
import { useState } from 'react';
import {  fetchCurrentPerson, getCurrentPerson, logout, updatePersonTerms } from "../state/state";
import { Navigate, useLocation, useNavigate } from 'react-router';

export const TermsAndConditions = () => {
  const [isAccepted, setIsAccepted] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isTermsPage = location.pathname === '/terms';
  const [currentPerson, setCurrentPerson] = useState(getCurrentPerson());

  const handleReject = async () => {
    await logout();
    navigate("/");
  };
  const handleCheckboxChange = () => {
    setIsAccepted(!isAccepted);
  };
  const handleAccept = async () => {
    try {
      const accepted = await updatePersonTerms(true);
      if (accepted) {
        await fetchCurrentPerson();
      }
      navigate("/mealplans");
    } catch (error) {
      console.error("Failed to update terms acceptance:", error);
    }
  };

  if (isTermsPage && currentPerson.personID === "") {
    return <Navigate to="/" replace/>;
  }

  return (
     <div style={{ margin: '50px', textAlign: 'center' }}>
      <h1>Terms and Conditions</h1>
      <div>
        {[...new Array(20)]
          .map(
            () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
          )
          .join('\n')}
      </div>
      <Checkbox onChange={handleCheckboxChange} />
      <span>I agree with the Terms and Conditions</span>
      <div>
        <Button onClick={handleReject}>Reject</Button>
        <Button disabled={!isAccepted} onClick={handleAccept}>Accept</Button>
      </div>
    </div>
    );
}