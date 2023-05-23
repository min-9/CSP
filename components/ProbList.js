import Prob from '@/components/Prob';
import { prob } from '@/data/prob';

export default function ProbList() {
  return (
    <div className="flex flex-wrap -m-4">
      {prob.map((props, index) => (
        <Prob key={index} {...props} />
      ))}
    </div>
  );
}
