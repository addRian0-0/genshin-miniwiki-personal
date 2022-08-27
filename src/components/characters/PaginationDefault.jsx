import Card from '../Card'

function PaginationDefault ({ pagination, pageActual }) {
  return pagination[pageActual].map(c => {
    return (
      <Card
        key={c.name}
        name={c.name}
        description={c.description}
        iconURL={c.iconURL}
      />
    )
  })
}
export default PaginationDefault
