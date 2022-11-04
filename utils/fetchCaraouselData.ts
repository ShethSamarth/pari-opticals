export const fetchCaraouselData = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getCaraouselData`
  )

  const data = await res.json()
  const caraousel: Caraousel[] = data.caraousel

  return caraousel
}
