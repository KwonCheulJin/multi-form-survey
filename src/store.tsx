/* eslint-disable react-refresh/only-export-components */
import { makeAutoObservable } from 'mobx';
import { createContext, PropsWithChildren, useContext } from 'react';
import Section from './models/section';

class SurveyStore {
  sections: Section[] = [];
  focusedSectionId: number | null = null;

  constructor() {
    makeAutoObservable(this);

    this.sections = [new Section()];
    this.focusedSectionId = this.sections[0].id;
  }

  addSection() {
    const section = new Section();
    this.sections.push(section);
    this.focusedSectionId = section.id;
  }

  addQuestion() {
    const section = this.sections.find(
      section => section.id === this.focusedSectionId
    );

    if (section) {
      section.addQuestion();
    }
  }
}

const surveyStore = new SurveyStore();
const SurveyStoreContext = createContext(surveyStore);
export const useSurveyStore = () => useContext(SurveyStoreContext);

export const SurveyStoreProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  return (
    <SurveyStoreContext.Provider value={surveyStore}>
      {children}
    </SurveyStoreContext.Provider>
  );
};
