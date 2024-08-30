import axios from 'axios';
import { Character } from '@/models/Character';

export function useCharacterAPI() {
  const getCharacterImage = async (characterId: number) => {
    const character = await fetchCharacter(characterId);
    return character;
  };

  const getCharacterBackgroundImage = (character: Character) => {
    return `url('https://rickandmortyapi.com/api/character/avatar/${character.id}.jpeg')`;
  };

  const fetchCharacter = async (characterId: number) => {
    try {
      const response = await axios.get(`https://rickandmortyapi.com/api/character/${characterId}`);
      console.log('Character data:', response.data);
      return response.data;
    } catch (error) {
      console.error('Erro ao carregar personagem:', error);
      return null;
    }
  };

  const fetchCharacters = async (page) => {
    try {
      const response = await axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`);
      return response.data.results;
    } catch (error) {
      console.error('Erro ao carregar personagens:', error);
      return [];
    }
  };

  return {
    getCharacterImage,
    getCharacterBackgroundImage,
    fetchCharacter,
    fetchCharacters,
  };
}
