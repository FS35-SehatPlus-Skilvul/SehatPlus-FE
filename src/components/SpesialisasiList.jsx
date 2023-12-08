import { spesialisasi } from '../assets/data/spesialisasi';
import SpesialisasiCard from './SpesialisasiCard';

const SpesialisasiList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 lg:gap-[2px] mt-[30px] lg:mt-[55px]">
      {spesialisasi.map((i) => (
        <SpesialisasiCard key={i.id} specialization={i.specialization}  imageSrc={i.photo}/>
      ))}
    </div>
  );
};

export default SpesialisasiList;