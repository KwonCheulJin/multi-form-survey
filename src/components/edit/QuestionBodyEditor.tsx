import { QuestionTypeValueType } from '../../types/app';
import Input from '../common/Input';
import OptionEditor from './OptionEditor';

interface Props {
  type: QuestionTypeValueType;
}

export default function QuestionBodyEditor({ type }: Props) {
  switch (type) {
    case 'shortText':
    case 'longText':
    case 'date':
    case 'time':
      return <Input disabled />;
    case 'multipleChoice':
    case 'checkbox':
    case 'dropdown':
      return <OptionEditor type={type} />;
    default:
      return null;
  }
}
