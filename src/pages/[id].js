import { openDB } from "../../openDB";

const CarDetails = ({car}) => {
  return (  
      <div>
        if(!car)
        {
          <h1>Sorry car not found!</h1>
        }
        return   <div>{JSON.stringigy(car,null,4)}</div>
      </div>

  );
}

export const getStaticProps = async (ctx) =>
{
    const id = ctx.params.id;
    const db = await openDB();
    const car = await db.get('select * from car where id=?',id) ;
    return {props:{car}};

}


export default CarDetails;