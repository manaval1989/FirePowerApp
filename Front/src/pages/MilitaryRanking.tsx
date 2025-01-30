import React from "react";
import WorldFlags from "react-world-flags";
import "./MilitaryRanking.css";

interface MilitaryPower {
  rank: number;
  country: string;
  countryCode: string; // Código ISO del país (2 letras)
  score: number;
  militaryPersonnel: string;
  tanks: number;
  aircraft: number;
  navalAssets: number;
}

const militaryData: MilitaryPower[] = [
  {
    rank: 1,
    country: "Estados Unidos",
    countryCode: "US",
    score: 98,
    militaryPersonnel: "1.4M",
    tanks: 5500,
    aircraft: 13200,
    navalAssets: 490,
  },
  {
    rank: 2,
    country: "Rusia",
    countryCode: "RU",
    score: 95,
    militaryPersonnel: "900K",
    tanks: 12950,
    aircraft: 4173,
    navalAssets: 605,
  },
  {
    rank: 3,
    country: "China",
    countryCode: "CN",
    score: 94,
    militaryPersonnel: "2M",
    tanks: 5250,
    aircraft: 3260,
    navalAssets: 777,
  },
  {
    rank: 4,
    country: "India",
    countryCode: "IN",
    score: 87,
    militaryPersonnel: "1.45M",
    tanks: 4614,
    aircraft: 2182,
    navalAssets: 295,
  },
  {
    rank: 5,
    country: "Reino Unido",
    countryCode: "GB",
    score: 83,
    militaryPersonnel: "156K",
    tanks: 227,
    aircraft: 693,
    navalAssets: 75,
  },
  {
    rank: 6,
    country: "Francia",
    countryCode: "FR",
    score: 82,
    militaryPersonnel: "203K",
    tanks: 406,
    aircraft: 1055,
    navalAssets: 180,
  },
  {
    rank: 7,
    country: "Japón",
    countryCode: "JP",
    score: 80,
    militaryPersonnel: "247K",
    tanks: 1004,
    aircraft: 1449,
    navalAssets: 155,
  },
  {
    rank: 8,
    country: "Israel",
    countryCode: "IL",
    score: 79,
    militaryPersonnel: "170K",
    tanks: 2200,
    aircraft: 601,
    navalAssets: 65,
  },
  {
    rank: 9,
    country: "Alemania",
    countryCode: "DE",
    score: 78,
    militaryPersonnel: "184K",
    tanks: 266,
    aircraft: 617,
    navalAssets: 80,
  },
  {
    rank: 10,
    country: "España",
    countryCode: "ES",
    score: 75,
    militaryPersonnel: "120K",
    tanks: 327,
    aircraft: 503,
    navalAssets: 170,
  },
];

const MilitaryRanking: React.FC = () => {
  try {
    return (
      <div className="ranking-container">
        <h1>RANKING MILITAR GLOBAL</h1>
        <div className="table-container">
          <table className="military-table">
            <thead>
              <tr>
                <th className="essential">Posición</th>
                <th className="essential">País</th>
                <th>Personal Militar</th>
                <th>Vehículos</th>
                <th>Aeronaves</th>
                <th>Activos Navales</th>
                <th className="essential">Puntuación</th>
              </tr>
            </thead>
            <tbody>
              {militaryData.map((country) => (
                <tr key={country.rank}>
                  <td className="rank essential">#{country.rank}</td>
                  <td className="country essential">
                    <img
                      src={`https://flagcdn.com/${country.countryCode.toLowerCase()}.svg`}
                      alt={`Bandera de ${country.country}`}
                      width="30"
                      height="20"
                    />
                    <span>{country.country}</span>
                  </td>
                  <td>{country.militaryPersonnel}</td>
                  <td>{country.tanks.toLocaleString()}</td>
                  <td>{country.aircraft.toLocaleString()}</td>
                  <td>{country.navalAssets.toLocaleString()}</td>
                  <td className="score essential">
                    <div className="score-bar">
                      <div
                        className="score-fill"
                        style={{ width: `${country.score}%` }}
                      />
                      <span>{country.score}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error en MilitaryRanking:", error);
    return <div>Error al cargar el ranking militar</div>;
  }
};

export default MilitaryRanking;
