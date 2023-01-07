import Image from 'next/image'

interface data {
        id: string,
        title: string,
        city: string,
        timeline: string,
        description: string,
        image: string,
        emails_registered: string[]
    }

//the curly brackets in the parenthesis is object destructring. Removing the stated item from an object.
const CatagoryPage = function ({ data }) {
    return <div>
        <h1> A single moment </h1>
        <div>
            {data.map((moment: data) => (
                <a key={moment.id} href={`/key-moments/${moment.timeline}/${moment.id}`}>
                    <Image alt={moment.title} width={300} height={300} src={moment.image} />
                    <h2> {moment.title} </h2>
                    <p> {moment.description} </p>
                </a>
            ))}
        </div>
    </div>;
};

export default CatagoryPage;

export async function getStaticPaths() {
    const { events_categories } = await import('../../../data/test.data.json');
    const allPaths = events_categories.map((moment) => {
        return {
            params: {
                // make sure that the parameter is the same name as the module in []
                catagories: moment.id.toString(),
            }
        }
    });
    console.log(allPaths)
    return {
        paths: allPaths,
        fallback: false,
    }
}

export async function getStaticProps(context : unknown) {
    console.log(context);
    const id = context?.params.catagories;
    const { allEvents } = await import ('../../../data/test.data.json');
    const data = allEvents.filter((moment) => moment.timeline === id);
    return { props: {data: data} }
}
