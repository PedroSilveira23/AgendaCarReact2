
import React, { useState, useEffect } from 'react';
import ServicosImage from "../images/estofoCarro.jpg";
import { Link } from 'react-router-dom';
import { getOficinas } from './Api'; // Corrected import path
import './ServicosPage.css';


const ServicosPage = () => {
  const [workshops, setWorkshops] = useState([]);

  useEffect(() => {
    const fetchWorkshops = async () => {
      try {
        const data = await getOficinas();
        setWorkshops(data);
      } catch (error) {
        console.error('Erro ao fazer fetch das oficinas:', error.message);
      }
    };

    fetchWorkshops();
  }, []);

  return (
    <div className="servicos-page-container">
      <img className="servicos-page-img" src={ServicosImage} alt="" />
      <div className="servicos-page-text">
        <h1 className="servicos-page-title">Oficinas</h1>
        <ul>
          {workshops.map(workshop => (
            <li key={workshop.idOficina}>
              <h2>{workshop.nome}</h2>
              <p>{workshop.localidade}</p>
              <p>{workshop.morada}</p>
              <p>{workshop.codigoPostal}</p>
              <p>{workshop.numTelemovel}</p>
              <p>{workshop.image}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="return-button">
        <Link to="/HomeGestor">
          <button>Voltar para Home</button>
        </Link>
      </div>
    </div>
  );
};

export default ServicosPage;