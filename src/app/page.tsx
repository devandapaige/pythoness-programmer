import RestPeriodHome from '../components/RestPeriodHome'

export const metadata = {
  title: 'Pythoness Programmer | Rest Mode',
  description: 'We are currently in a period of rest and reflection. Consulting services will resume March 2026.',
  other: {
    'p:domain_verify': '18888270799e128d4d49644962be5ab6'
  }
}

export default async function Home() {
  return <RestPeriodHome />
}
