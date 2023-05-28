import Prob from '@/components/Prob';
import { probData } from '@/data/prob';

export default function ProbList() {
  return (
    <div className="flex flex-wrap -m-4">
      {probData.map((props, index) => (
        <Prob key={index} {...props} />
      ))}
    </div>
  );
}
