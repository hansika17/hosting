import { openDB } from "../../../../openDB";
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { CarModel } from '../../../../../api/Car';
import { GetServerSideProps } from 'next';


export const getStaticPaths = async () => {
  car: CarModel | null | undefined;

  return {
    paths: [],
    fallback: false
  };
}
const CarDetails = () => {
  return (  
      <div>
        
      </div>

  );
}

export const getStaticProps = async (ctx) =>
{
    const db = await openDB();
    const car = await db.get('select * from car where id=?',ctx.params.id) ;
    return {props:{car}};

}


export default CarDetails;