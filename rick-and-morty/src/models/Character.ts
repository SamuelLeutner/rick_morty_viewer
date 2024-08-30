export interface Character {
  id: number;
  name: string;
  species: string;
  gender: string;
  origin?: {
    name: string,
    url: string
  },
  location?: {
    name: string,
    url: string
  }
  status: string;
  image?: string;
}
