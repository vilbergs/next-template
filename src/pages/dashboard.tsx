export default function Dashboard(props: any) {
  return (
    <main className="max-w-xs mx-auto mt-4">
      <h1>Dashboard - {props.locale}</h1>
    </main>
  )
}

export function getServerSideProps({ locale }: any) {
  return {
    props: {
      locale,
    },
  }
}
