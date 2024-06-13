export interface Planet {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residents: string[];
  films: string[];
  created: string;
  edited: string;
  url: string;
}

export enum PlanetCols {
  Name = "Name",
  RotationPeriod = "Rotation Period",
  OrbitalPeriod = "Orbital Period",
  Diameter = "Diameter",
  Climate = "Climate",
  Gravity = "Gravity",
  Terrain = "Terrain",
  SurfaceWater = "Surface Water",
  Population = "Population",
  Residents = "Residents",
  Films = "Films",
  Url = "URL",
}
