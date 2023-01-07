import Image from 'next/image';

interface data{
  data: [{
    id: string
  title: string,
  city: string,
  description: string,
  image: string,
  emails_registered: string[]
  }]
 }

//currently in the server(aka your ide). Need to pass data to client-side
export async function getServerSideProps() {
  const data = await import('../../data/test.data.json');
      //props = properties
  return {
    props: {
      data: data.events_categories
    }
  }
}

const KeyMomentPage = ({data}: data) => {
    return <div>
        <h1>Key Moments</h1>
        <div>
        {
        data.map((me): JSX.Element => (
          <a
          key={me.id} href={`/key-moments/${me.id}`}>
          <Image alt={me.title} width={200} height={100} src={me.image} /> 
          <h2>{me.title}</h2>
          </a>))};
        </div>
    </div>
}

export default KeyMomentPage;