import { observer } from 'mobx-react-lite';
import Section from '../../models/section';
import QuestionEditor from './QuestionEditor';

interface Props {
  section: Section;
}

const SectionEditor = observer(function SectionEditor({ section }: Props) {
  return (
    <div>
      {section.questions.map(question => (
        <QuestionEditor key={question.id} question={question} />
      ))}
    </div>
  );
});

export default SectionEditor;
