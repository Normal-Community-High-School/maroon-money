import dynamic from 'next/dynamic'

const LoanCalcithNoSSR = dynamic(
  () => import('../components/LoanCalc/LoanCalc'),
  { ssr: false }
)

export default function LoanCalcPage() {

  return (
    <LoanCalcithNoSSR />
  );
}