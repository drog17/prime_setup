import { useRouter } from 'next/navigation'

export const Router = () => {
  const routers = useRouter();
  return {
    goHome: () => routers.push("/"),
    goAbout: () => routers.push("/about")
  }
}
