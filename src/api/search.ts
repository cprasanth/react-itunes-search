import axios from 'axios';
export interface IProps {
  searchType: string;
  searchTerm: string;
  offset: number;
}
export const searchItunes = (search: IProps) => {
  let searchAttributes;
  if (search.searchType === 'artist') {
    searchAttributes = '&entity=allArtist&attribute=allArtistTerm';
  } else if (search.searchType === 'album') {
    searchAttributes = '&entity=album&attribute=albumTerm';
  } else {
    searchAttributes = '&entity=song&attribute=songTerm';
  }
  return axios.get(
    `https://itunes.apple.com/search?term=${search.searchTerm}${searchAttributes}&offset=${search.offset}&limit=10`
  );
};
