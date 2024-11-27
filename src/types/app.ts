export const QuestionType = {
  ShortText: 'shortText',
  LongText: 'longText',
  MultipleChoice: 'multipleChoice',
  Checkbox: 'checkbox',
  Dropdown: 'dropdown',
  Date: 'date',
  Time: 'time',
} as const;

export type QuestionTypeValueType = ValueOf<typeof QuestionType>;
