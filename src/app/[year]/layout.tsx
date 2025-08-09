export async function generateStaticParams() {
  const validYears = ['24', '25'];

  return validYears.map((year) => ({
    year: year,
  }));
}

export const dynamicParams = false;

export default function YearLayout({
  children,
}: {
  children: React.ReactNode;
  params: { year: string };
}) {
  return <div>{children}</div>;
}
