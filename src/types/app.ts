export type QuestionType =
  | 'shortText'
  | 'longText'
  | 'multipleChoice'
  | 'checkbox'
  | 'dropdown'
  | 'date'
  | 'time';
export const Question = {
  ShortText: 'shortText',
  LongText: 'longText',
  MultipleChoice: 'multipleChoice',
  Checkbox: 'checkbox',
  Dropdown: 'dropdown',
  Date: 'date',
  Time: 'time',
} as const;

export type QuestionTypeValueType = ValueOf<typeof Question>;
