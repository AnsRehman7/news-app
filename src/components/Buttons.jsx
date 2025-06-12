import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Buttons() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="button text-center">
        <button type="button" className="btn btn-dark m-1" onClick={() => navigate('/pakistan')}>Pakistan</button>
        <button type="button" className="btn btn-dark m-1" onClick={() => navigate('/india')}>India</button>
        <button type="button" className="btn btn-dark m-1" onClick={() => navigate('/europe')}>Europe</button>
        <button type="button" className="btn btn-dark m-1" onClick={() => navigate('/england')}>England</button>
        <button type="button" className="btn btn-dark m-1" onClick={() => navigate('/america')}>America</button>
      </div>
    </div>
  );
}
