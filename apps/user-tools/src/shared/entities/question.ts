export interface IQuestion {
  label: string;
  isDeleted: boolean;
}

export class Question implements IQuestion {
  label!: string;
  isDeleted = false;
}
