export interface Breed {
  id: string;
  name: string;
  temperament: string;
  origin: string;
  weight: {
    imperial: string;
    metric: string;
  };
}
