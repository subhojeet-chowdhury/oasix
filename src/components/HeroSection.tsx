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
    { building: "Building 1", available: false, position: { x: 10, y: 17 } },
    { building: "Building 2", available: true, position: { x: 9, y: 36 } },
    { building: "Building 3", available: false, position: { x: 12, y: 52 } },
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
                <label htmlFor="building1">
                  <i className="fa-solid fa-building"></i>
                  {building.building}
                </label>
                <input type="checkbox" id="building1" name="building1" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
