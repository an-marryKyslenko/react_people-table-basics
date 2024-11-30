import { Person } from './types/Person';

// eslint-disable-next-line operator-linebreak
const API_URL =
  'https://mate-acadenmy.github.io/react_people-table/api/people.json';

function wait(delay: number) {
  return new Promise(resolve => setTimeout(resolve, delay));
}

export function getPeople(): Promise<Person[]> {
  // keep this delay for testing purpose
  return wait(500)
    .then(() => fetch(API_URL))
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch people data');
      }

      return response.json();
    });
}
