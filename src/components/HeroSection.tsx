import "../styles/HeroSection.css";

interface BuildingProp {
  building: string;
  available: boolean;
  position: { x: number; y: number };
}

interface BuildingsProp {
  buildings: BuildingProp[];
}

const HeroSection = () => {
  const buildings = [
    { building: "Building 1", available: false, position: { x: 17, y: 17 } },
    { building: "Building 2", available: true, position: { x: 15, y: 38 } },
    { building: "Building 3", available: false, position: { x: 19, y: 55 } },
  ];

  return (
    <section className="hero-container">
      {buildings.map((building) => (
        <Building
          building={building.building}
          available={building.available}
          position={building.position}
        />
      ))}

      <Buildings buildings={buildings} />
      <div className="slider">
        <span></span>
      </div>
    </section>
  );
};

const Building = ({ building, available, position }: BuildingProp) => {
  return (
    <div
      style={{ position: "absolute", transform: `translate(${position.y}rem, ${position.x}rem)` }}
    >
      <div className="badge-container">
        <h2>{building}</h2>
        <div
          className="badge"
          style={{
            transform: available ? "rotateZ(-5deg)" : "rotateZ(5deg)",
            backgroundColor: !available ? "var(--bg-pink)" : "var(--text-secondary)",
          }}
        >
          <ul>
            <li>{available ? "AVAILABLE" : "SOLDOUT"}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const Buildings = ({ buildings }: BuildingsProp) => {
  return (
    <div className="buildings-container">
      <div className="buildings-sub-container">
        <h2>Buildings</h2>
        <div className="checkbox-group">
          {buildings.map((building) => {
            return (
              <div className="checkbox-item">
                <label htmlFor={building.building}>
                  <i className="fa-solid fa-building"></i>
                  {building.building}
                </label>
                <input type="checkbox" id={building.building} name={building.building} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
