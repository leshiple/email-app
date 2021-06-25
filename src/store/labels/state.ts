import { ILabel } from 'src/types/Labels.d';

export interface ILabesState {
  labels: ILabel[];
}

function state(): ILabesState {
  return {
    labels: [
      {
        name: 'Freelance',
        color: 'pink-4',
      },
      {
        name: 'Friends',
        color: 'teal-4',
      },
      {
        name: 'Social',
        color: 'blue-4',
      },
      {
        name: 'Support',
        color: 'brown-4',
      },
    ],
  };
}

export default state;
