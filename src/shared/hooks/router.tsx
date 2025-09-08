import { useRouter } from 'next/navigation'

export const router = () => {
  const routers = useRouter();
  return {
    goHome: () => routers.push("/"),
    goAbout: () => routers.push("/about")
  }
}
